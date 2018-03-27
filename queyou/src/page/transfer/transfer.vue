<template>
  <div class="transfer">
      <el-button type="primary" class="mrt" @click="addAdmin">添加转账权限</el-button>
      <template>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            label="游戏ID"
            show-overflow-tooltip
            align="center"
            prop="uid"
            >

          </el-table-column>
          <el-table-column
            label="昵称"
            prop="nickname"
            show-overflow-tooltip
            align="center">

          </el-table-column>
          <el-table-column label="操作"
          align="center">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index,scope.row)">删除</el-button>
            </template>
          </el-table-column>
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
  name: 'transfer',
  data () {
    return {
        allpage:1,
        tableData: [],
        currentPage: 1
    }
  },
  mounted:function () {
    var self=this;
    axios.get(sessionStorage.weburl+'transfer/list',{params:{}}).then(function (res) {
      console.log(res);
      self.tableData=res.data.data.list;
      self.allpage=res.data.data.total;
    }).catch(function (err) {
      console.log(err);
    });
  },
  methods:{
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
    handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        var self=this;
        self.tableData=[];
        axios.get(sessionStorage.weburl+'transfer/list',{params:{page:val}}).then(function (res) {
          console.log(res);
          self.tableData=res.data.data.list;
          self.allpage=res.data.data.total;
        }).catch(function (err) {
          console.log(err);
        });
      },
    handleDelete(index, row) {
      console.log(index, row);
      var self=this;
      axios.get(sessionStorage.weburl+'transfer/delete',{params:{id:row.id}}).then(function (res) {
        console.log(res);
        if (res.data.code==0) {
          self.$message({
            type: 'success',
            message: '删除成功!'
          });
          self.tableData=[];
          self.currentPage=1;
          axios.get(sessionStorage.weburl+'transfer/list',{params:{page:val}}).then(function (res) {
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
    },
    addAdmin:function () {
      var self=this;
      self.$prompt('请输入游戏ID', '提示', {
         confirmButtonText: '确定',
         cancelButtonText: '取消',
         inputPattern: /^\d{7,}$/,
         inputErrorMessage: '请输入七位有效uid'
       }).then(({ value }) => {
         axios.get(sessionStorage.weburl+'user/check',{params:{uid:value}}).then(function (res) {
           console.log(res);
           if(res.data.code==0){
             axios.get(sessionStorage.weburl+'transfer/add',{params:{uid:value}}).then(function (res) {
               console.log(res);
               if (res.data.code==0) {
                 self.$message({
                   type: 'success',
                   message: '添加成功!'
                 });
                 self.tableData=[];
                 self.currentPage=1;
                 axios.get(sessionStorage.weburl+'transfer/list',{params:{page:1}}).then(function (res) {
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
           }else{
             self.$message({
               type: 'warning',
               message: res.data.message
             });
           }
         }).catch(function (err) {
           console.log(err);
         })
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mrt{margin:10px;}
.flrt{margin: 10px;float: right;}
</style>
