<template>
  <div class="teammove">
        <el-col :span="4" > <el-input class="mrt" style="margin-left:15px;width:95%;" @change="checkname1" v-model="userid" type="number" placeholder="请输入转移人的id"></el-input></el-col>
        <el-col :span="4" > <el-input class="mrt" style="margin-left:15px;width:95%;" @change="checkname2" v-model="beuserid" type="number" placeholder="请输入转入代理的id"></el-input></el-col>
        <el-button  type="primary" class="mrt" @click="addAdmin">添加转移权限</el-button>
        <el-row>
            <el-col :span="4" style="text-align:left;margin-bottom:5px;color:#656565;font-size:14px;text-indent:1.5em;" ><span>{{checknames1}}</span></el-col>
            <el-col :span="5" style="text-align:left;margin-bottom:5px;color:#656565;font-size:14px;text-indent:1.5em;"><span>{{checknames2}}</span></el-col>
        </el-row>
      <template>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            label="转移人id"
            show-overflow-tooltip
            align="center"
            prop="uid"
            >

          </el-table-column>
          <el-table-column
            label="转入代理id"
            prop="pid"
            show-overflow-tooltip
            align="center">

          </el-table-column>
          <el-table-column
            label="时间"
            prop="dateline"
            show-overflow-tooltip
            align="center">

          </el-table-column>
          <!-- <el-table-column label="操作"
          align="center">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index,scope.row)">删除</el-button>
            </template>
          </el-table-column> -->
        </el-table>
        <el-pagination
          class="flrt"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="1"
          layout="prev, pager, next, jumper"
          :total="allpage">
        </el-pagination>
      </template>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'teammove',
  data () {
    return {
      checknames1:'等待验证...',
      checknames2:'等待验证...',
        userid:'',
        beuserid:'',
        allpage:1,
        tableData: [],
        currentPage: 1
    }
  },
  mounted:function () {
    var self=this;
    axios.get(sessionStorage.weburl+'promoter/movelog',{params:{}}).then(function (res) {
      console.log(res);
      self.tableData=res.data.data.list;
      self.allpage=res.data.data.total;
    }).catch(function (err) {
      console.log(err);
    });
  },
  methods:{
    checkname1:function () {
      var self=this;
      if (self.userid.length==7) {
        axios.get(sessionStorage.weburl+'user/check',{params:{uid:self.userid}}).then(function (res) {
          console.log(res);
          if (res.data.code==0) {
              self.checknames1=res.data.data.nickname;
          }else{
              self.checknames1=res.data.message;
          }
        }).catch(function (err) {
          console.log(err);
        });
      }

    },
    checkname2:function () {
      var self=this;
      if (self.beuserid.length==7) {
        axios.get(sessionStorage.weburl+'user/check',{params:{uid:self.beuserid}}).then(function (res) {
          console.log(res);
          self.checknames2=res.data.data.nickname;
          if (res.data.code==0) {
              self.checknames1=res.data.data.nickname;
          }else{
              self.checknames1=res.data.message;
          }
        }).catch(function (err) {
          console.log(err);
        });
      }
    },
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
    handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        var self=this;
        self.tableData=[];
        axios.get(sessionStorage.weburl+'promoter/movelog',{params:{page:val}}).then(function (res) {
          console.log(res);
          self.tableData=res.data.data.list;
          self.allpage=res.data.data.total;
        }).catch(function (err) {
          console.log(err);
        });
      },
    // handleDelete(index, row) {
    //   console.log(index, row);
    //   var self=this;
    //   axios.get(sessionStorage.weburl+'transfer/delete',{params:{id:row.id}}).then(function (res) {
    //     console.log(res);
    //     if (res.data.code==0) {
    //       self.$message({
    //         type: 'success',
    //         message: '删除成功!'
    //       });
    //       self.tableData=[];
    //       self.currentPage=1;
    //       axios.get(sessionStorage.weburl+'transfer/list',{params:{page:val}}).then(function (res) {
    //         console.log(res);
    //         self.tableData=res.data.data.list;
    //         self.allpage=res.data.data.total;
    //       }).catch(function (err) {
    //         console.log(err);
    //       });
    //     }else{
    //       self.$message({
    //         type: 'warning',
    //         message: res.data.message
    //       });
    //     }
    //   }).catch(function (err) {
    //     console.log(err);
    //   });
    // },
    addAdmin:function () {
      var self=this;
      if (self.userid.length==7&&self.beuserid.length==7) {
        self.$prompt('请输入游戏ID', '提示', {
           confirmButtonText: '确定',
           cancelButtonText: '取消'
           // inputPattern: /^\d{7,}$/,
           // inputErrorMessage: '请输入七位有效uid'
         }).then(({ value }) => {
               axios.get(sessionStorage.weburl+'promoter/userchange',{params:{uid:self.userid,pid:self.beuserid,code:value}}).then(function (res) {
                 console.log(res);
                 if (res.data.code==0) {
                   self.$message({
                     type: 'success',
                     message: '添加成功!'
                   });
                   self.tableData=[];
                   self.currentPage=1;
                   axios.get(sessionStorage.weburl+'promoter/movelog',{params:{page:1}}).then(function (res) {
                     console.log(res);
                     self.tableData=res.data.data.list;
                     self.allpage=res.data.data.total;
                   }).catch(function (err) {
                     console.log(err);
                   });
                 }else{
                   self.$message({
                     type: 'warning',
                     message: res.data.message
                   });
                 }
               }).catch(function (err) {
                 console.log(err);
               });
               self.$message({
                 type: 'success',
                 message: '添加成功!'
               });

           // self.$message({
           //   type: 'success',
           //   message: '你的邮箱是: ' + value
           // });
         }).catch(() => {
           self.$message({
             type: 'info',
             message: '取消输入'
           });
         });
      }else{
        self.$message({
          type: 'info',
          message: 'uid输入不全'
        });
      }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mrt{margin:10px;}
.flrt{margin: 10px;float: right;}
</style>
