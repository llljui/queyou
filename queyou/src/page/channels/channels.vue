<template>
  <div class="channels">
  <el-tabs type="border-card">
    <el-tab-pane label="渠道列表">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          align="center"
          label="ID">
          <template scope="scope">
            <span style="margin-left: 10px">{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="渠道名">
          <template scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="识别符">
          <template scope="scope">
            <span style="margin-left: 10px">{{ scope.row.chars }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作"  align="center">
          <template scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="handleEdit(scope.$index, scope.row)">修改</el-button>
            <!-- <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button> -->
          </template>
        </el-table-column>
      </el-table>
   </el-tab-pane>
   <el-tab-pane label="新增渠道">
    <el-col :span="2" ><h4 style="margin-top:10px;font-weight:normal;">渠道名</h4></el-col>
    <el-col :span="8">
       <el-input placeholder="渠道名称" v-model="channel"></el-input>
    </el-col>
    <el-col :span="24">&nbsp</el-col>
    <el-col :span="2" ><h4 style="margin-top:10px;font-weight:normal;">标识别符</h4></el-col>
    <el-col :span="8">
       <el-input placeholder="请输入标识别符" v-model="names"></el-input>
    </el-col>
    <el-col :span="22" :offset="2">
     <el-button type="primary" @click="addchannel">添加</el-button>
    </el-col>
   </el-tab-pane>
  </el-tabs>
  <el-dialog
    title="渠道修改"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose">
      
    <el-col :span="2" ><h4 style="margin-top:10px;font-weight:normal;">渠道名</h4></el-col>
    <el-col :span="22"><el-input placeholder="渠道名" v-model="value1"></el-input></el-col>
    <el-col :span="24">&nbsp</el-col>
    <el-col :span="2" ><h4 style="margin-top:10px;font-weight:normal;">标识别符</h4></el-col>
    <el-col :span="22"><el-input placeholder="标识别符"  v-model="value2"></el-input></el-col>
    <div class="block"></div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="ensure">确 定</el-button>
    </span>
  </el-dialog>
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
export default {
  name: 'channels',
  data () {
    return {
      value1:null,
      value2:null,
      channel:null,
      names:null,
      ids:null,
      tableData: [],
      dialogVisible: false
    }
  },
  methods:{
    ensure:function () {
     var self=this;
      axios.get('http://monkey.queyoujia.com/access/channel/update',{params:{chars:self.value2,name:self.value1,id:self.ids}}).then(function (res) {
          console.log(res);
          if (res.data.code==0) {
            self.$message({
              message: '修改成功',
              type: 'success'
            });
        axios.get('http://monkey.queyoujia.com/access/channel/list',{params:{}}).then(function (res) {
            console.log(res);
             self.tableData=res.data.data.channels;
            }).catch(function (err) {
              console.log(err);
            })
          }else{
            self.$message({
              message: res.data.message,
              type: 'warning'
            });
          }
        }).catch(function (res) {
          console.log(err);
        })
     self.dialogVisible = false;
    },
     handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
    handleEdit(index, row) {
        console.log(index, row);
        var self=this;
        self.value1=row.name;
        self.value2=row.chars;
        self.ids=row.id;
        self.dialogVisible=true;
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      addchannel:function () {
        var self=this;
        axios.get('http://monkey.queyoujia.com/access/channel/add',{params:{chars:self.names,name:self.channel}}).then(function (res) {
          console.log(res);
          if (res.data.code==0) {
            self.$message({
              message: '添加成功',
              type: 'success'
            });
        axios.get('http://monkey.queyoujia.com/access/channel/list',{params:{}}).then(function (res) {
            console.log(res);
             self.tableData=res.data.data.channels;
            }).catch(function (err) {
              console.log(err);
            })
          }else{
            self.$message({
              message: res.data.message,
              type: 'warning'
            });
          }
        }).catch(function (res) {
          console.log(err);
        })
      }
  },
  mounted(){
    var self=this;
    axios.get('http://monkey.queyoujia.com/access/channel/list',{params:{}}).then(function (res) {
     console.log(res);
     self.tableData=res.data.data.channels;
    }).catch(function (err) {
      console.log(err);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.block{display: block;width:100%;margin: 80px 0;}
</style>
