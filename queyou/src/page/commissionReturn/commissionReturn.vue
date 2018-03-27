<template>
  <div class="commissionReturn">
    <el-button :type="btncolor[0]" class="mtt flt" @click="sorting(0)">待提现金额 <i :class="upordown[0]"></i> </el-button>
    <el-button :type="btncolor[1]" class="mtt flt" @click="sorting(1)">已提现金额 <i :class="upordown[1]"></i></el-button>
    <template>
      <el-table
        class="mrt"
        :data="tableData2"
        style="width: 100%"
        :row-class-name="tableRowClassName">
        <el-table-column
          prop="no"
          align="center"
          show-overflow-tooltip
          label="邀请码"
          width="180">
        </el-table-column>
        <el-table-column
          prop="nickname"
          align="center"
          show-overflow-tooltip
          label="玩家昵称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="uid"
          align="center"
          show-overflow-tooltip
          label="玩家ID">
        </el-table-column>
        <el-table-column
          prop="mobile"
          align="center"
          show-overflow-tooltip
          label="联系方式"
          width="180">
        </el-table-column>
        <el-table-column
          prop="haveDraw"
          align="center"
          show-overflow-tooltip
          label="已提现金额"
          width="180">
        </el-table-column>
        <el-table-column
          prop="cnt"
          align="center"
          show-overflow-tooltip
          label="待提现金额">
        </el-table-column>
      </el-table>
    </template>
    <div class="block flt">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="1"
        layout="prev, pager, next, jumper"
        :total="allpage">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'commissionReturn',
  data () {
    return {
      allpage:null,
      upordown:['el-icon-caret-bottom','el-icon-caret-bottom'],
      btncolor:['primary',''],
      currentPage: 1,
      tableData2: [],
      willnum:0,
      hadnum:0,
      istran:0,//默认带提现
      type:null,
      serial:null
    }
  },
  methods: {
    handleSizeChange(val) {
       console.log(`每页 ${val} 条`);
     },
     handleCurrentChange(val) {
       console.log(`当前页: ${val}`);
       var self=this;
       axios.get(sessionStorage.weburl+'/promoter/commission',{params:{type:self.type,serial:self.serial,page:self.currentPage}}).then(function (res) {//type:0 带提现，1 已提现; serial 0 倒叙 1正序
         console.log(res);
         self.tableData2=res.data.data.list;
         self.allpage=res.data.data.totalPage;
       }).catch(function (err) {
         console.log(err);
       })
     },
     tableRowClassName({row, rowIndex}) {
       if (rowIndex === 1) {
         return 'warning-row';
       } else if (rowIndex === 3) {
         return 'success-row';
       }
       return '';
     },
     sorting:function (val) {
       var self=this;
       self.btncolor=[];
       console.log(self.istran)
       if (val==0) {
         self.btncolor[0]='primary';
         self.btncolor[1]='';
         if(self.istran==0){
           self.willnum++;
           self.istran=0;
           if(self.willnum%2>0){//||self.hadnum%2>0
             self.upordown[0]='el-icon-caret-top';
             //self.upordown[1]='el-icon-caret-top';
             self.type=0;
             self.serial=1;
           }else{
             self.upordown[0]='el-icon-caret-bottom';
             self.type=0;
             self.serial=0;
             //self.upordown[1]='el-icon-caret-bottom';
           }
         }else{
           self.istran=0;
           if(self.willnum%2>0){
             console.log('升序')
             self.type=0;
             self.serial=1;
             //self.upordown[0]='el-icon-caret-top';
           }else{
             console.log('降序')
             self.type=0;
             self.serial=0;
             //self.upordown[0]='el-icon-caret-bottom';
           }
         }
       }else{
         self.btncolor[1]='primary';
         self.btncolor[0]='';
         if(self.istran==1){
           self.istran=1;
           self.hadnum++;
           if(self.hadnum%2>0){//||self.hadnum%2>0
             self.upordown[1]='el-icon-caret-top';
             self.type=1;
             self.serial=1;
             //self.upordown[1]='el-icon-caret-top';
           }else{
             self.upordown[1]='el-icon-caret-bottom';
             self.type=1;
             self.serial=0;
             //self.upordown[1]='el-icon-caret-bottom';
           }
         }else{
           self.istran=1;
           if(self.hadnum%2>0){
             console.log('升序')
             self.type=1;
             self.serial=1;
             //self.upordown[0]='el-icon-caret-top';
           }else{
             console.log('降序')
             self.type=1;
             self.serial=0;
             //self.upordown[0]='el-icon-caret-bottom';
           }
         }
       }
       self.currentPage=1;
       axios.get(sessionStorage.weburl+'/promoter/commission',{params:{type:self.type,serial:self.serial,page:1}}).then(function (res) {//type:0 带提现，1 已提现; serial 0 倒叙 1正序
         console.log(res);
         self.tableData2=res.data.data.list;
         self.allpage=res.data.data.totalPage;
       }).catch(function (err) {
         console.log(err);
       })
     }
   },
   mounted:function () {
     var self =this;
     axios.get(sessionStorage.weburl+'/promoter/commission',{params:{type:0,serial:0}}).then(function (res) {//type:0 带提现，1 已提现; serial 0 倒叙 1正序
       console.log(res);
       self.tableData2=res.data.data.list;
       self.allpage=res.data.data.totalPage;
     }).catch(function (err) {
       console.log(err);
     })
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-table .warning-row {
   background: oldlace;
 }

 .el-table .success-row {
   background: #f0f9eb;
 }
 .mrt{margin:2vh;}
 .flt{float: right;}
 .mtt{margin: 2vh 0; margin-left: 2vw;}
</style>
