<template>
  <div class="purpose">
     <template>
    <el-table
     class="mrt"
      :data="tableData"
      style="width: 100%">
      <el-table-column
      show-overflow-tooltip
        align="center"
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
      show-overflow-tooltip
        align="center"
        prop="mobile"
        label="手机号">
      </el-table-column>
      <el-table-column
      show-overflow-tooltip
        align="center"
        prop="uid"
        label="游戏ID">
      </el-table-column>
      <el-table-column
      show-overflow-tooltip
        align="center"
        prop="wxId"
        label="微信号">
      </el-table-column>
      <el-table-column
      show-overflow-tooltip
        align="center"
        prop="dateline"
        label="申请时间">
      </el-table-column>
       <el-table-column label="状态">
       <template scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)" :type="scope.row.color">{{scope.row.status}}</el-button>
      </template>
    </el-table-column>
    </el-table>
  </template>
 <el-pagination
 class="mrt flr"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="1"
      layout="prev, pager, next, jumper"
      :total="allpage">
    </el-pagination>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'purpose',
  data () {
    return {
    color:null,
    allpage:null,
    currentPage: 1,
    tableData: [],
    page:null
    }
  },
  methods:{
     handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        var self=this;
        self.page=val;
        axios.get('http://monkey.queyoujia.com/Agentapply/list/',{params:{page:val}}).then(function (res) {
          console.log(res);
          self.allpage=res.data.data.total;
          self.tableData=res.data.data.list;
          self.tableData.forEach(function (item,index) {
            if (item.status==0) {
              item.status='未联系';
              item.color='primary';
            }else{
              item.status='已联系';
              item.color='success';
            }
          })
        }).catch(function (err) {
          console.log(err);
        })
      },
      handleEdit:function (index,row) {
       console.log(index);
       console.log(row);
       if (row.status=='未联系') {
          var self=this;
          axios.get('http://monkey.queyoujia.com/Agentapply/opt',{params:{id:row.id}}).then(function (res) {
           if (res.data.code==0) {
               axios.get('http://monkey.queyoujia.com/Agentapply/list/',{params:{page:self.page}}).then(function (res) {
                console.log(res);
                self.allpage=res.data.data.total;
                self.tableData=res.data.data.list;
                self.tableData.forEach(function (item,index) {
                  if (item.status==0) {
                    item.status='未联系';
                    item.color='primary';
                  }else{
                    item.status='已联系';
                    item.color='success';
                  }
                })
              }).catch(function (err) {
                console.log(err);
              })
           }else{
               self.$message({
                message: res.data.message,
                type: 'warning'
              });
           }
          }).catch(function (err) {
            console.log(err);
          })
       }else{
        return;
       }
      }
  },
  mounted:function () {
    var self=this;
    axios.get('http://monkey.queyoujia.com/Agentapply/list',{params:{page:1}}).then(function (res) {
      console.log(res);
      self.allpage=res.data.data.total;
      self.tableData=res.data.data.list;
      self.tableData.forEach(function (item,index) {
        if (item.status==0) {
          item.status='未联系';
          item.color='primary';
        }else{
          item.status='已联系';
          item.color='success';
        }
      })
    }).catch(function (err) {
      console.log(err);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mrt{margin-top: 10px;}
.flr{float: right;}
</style>
