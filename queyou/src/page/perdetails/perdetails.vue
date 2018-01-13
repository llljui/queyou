<template>
  <div class="perdetails">
     <template>
      <el-table
        class="mrt"
        :data="tableData"
        style="width: 100%">
        <el-table-column
          align="center"
          show-overflow-tooltip
          prop="uid"
          label="游戏ID">
        </el-table-column>
        <el-table-column
          align="center"
          show-overflow-tooltip
          prop="reward"
          label="返现/提现(-)">
        </el-table-column>
        <el-table-column
          align="center"
          show-overflow-tooltip
          prop="balance"
          label="余额">
        </el-table-column>
        <el-table-column
          align="center"
          show-overflow-tooltip
          prop="orderId"
          label="充值订单号">
        </el-table-column>
        <el-table-column
          align="center"
          show-overflow-tooltip
          prop="amount"
          label="充值金额">
        </el-table-column>
        <el-table-column
          align="center"
          show-overflow-tooltip
          prop="percent"
          label="分成比例">
        </el-table-column>
        <el-table-column
          align="center"
          show-overflow-tooltip
          prop="level"
          label="级别">
        </el-table-column>
        <el-table-column
          align="center"
          show-overflow-tooltip
          prop="dateline"
          label="时间">
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
import axios from 'axios';
import qs from 'qs';
export default {
  name: 'perdetails',
  data () {
    return {
     re_or_wd:null,
     allpage:null,
     tableData: [],
     currentPage: 1,
    }
  },
  methods:{
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
       var self=this;
       self.tableData=[];
        axios.get('http://monkey.queyoujia.com/withdraw/detail',{params:{uid:sessionStorage.details_uid,page:val}}).then(function (res) {
          //console.log(res);
          self.tableData=res.data.data.list;
          self.allpage=res.data.data.total;
        }).catch(function (err) {
         console.log(err);
        })
        }
  },
  mounted:function () {
    var self=this;
    axios.get('http://monkey.queyoujia.com/withdraw/detail',{params:{uid:sessionStorage.details_uid}}).then(function (res) {
      //console.log(res);
      self.tableData=res.data.data.list;
      self.allpage=res.data.data.total;
      self.tableData.forEach(function (item,index) {
        if (item.reward>0) {
          item.re_or_wd='返现';
        }else{
           item.re_or_wd='提现';
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
