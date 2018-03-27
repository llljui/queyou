<template>
  <div class="rechargeDetails">
    <header class="nowtitle">{{title}}{{dates}}数据统计</header><!-- /header -->
      <el-form :inline="true" :model="formInline" class="form-inline">
  </el-form>
   <el-table
    :data="tableData"
    style="width: 100%;">
    <el-table-column
      prop="orderId"
      label="订单号"
      show-overflow-tooltip
      align="center">
    </el-table-column>
    <el-table-column
      prop="uid"
      label="游戏ID"
      show-overflow-tooltip
      align="center">
    </el-table-column>
    <el-table-column
    show-overflow-tooltip
      prop="nickname"
      label="昵称"
      align="center">
    </el-table-column>
    <el-table-column
    show-overflow-tooltip
      prop="price"
      sortable
      label="人民币"
      align="center">
    </el-table-column>
    <el-table-column
    show-overflow-tooltip
      prop="depDiamond"
      label="钻石"
      sortable
      align="center">
    </el-table-column>
     <el-table-column
     show-overflow-tooltip
      prop="channel"
      label="充值方式"
      align="center">
    </el-table-column>
    <el-table-column
      prop="dateline"
      show-overflow-tooltip
      sortable
      label="付款时间"
      align="center">
    </el-table-column>
    <el-table-column
    show-overflow-tooltip
      prop="body"
      label="备注"
      align="center">
    </el-table-column>
  </el-table>
  <div class="pagetag" :key="key">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="1"
      layout="prev, pager, next, jumper"
      :total="pageSize">
    </el-pagination>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'rechargeDetails',
  data () {
    return {
        title:'',
        dates:'',
        pick1:false,
        pick2:false,
        lvs:0,
      formInline: {
          user: '',
          region: '',
          type:'',
          date1:null,
          date2:null,
          neartime:''
        },
        searchform:{
          user:'',
          region:''
        },
        tableData: [],
        currentPage1:1,
        pageSize:0
    }
  },
    methods: {
        handleEdit(index, row) {
       // console.log(index, row);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        var self=this;
        //console.log(Date.parse(sessionStorage.startTime));
       // console.log(sessionStorage.endTime);
        self.tableData=[]
        var tableTemp=[];
        var tableTemp2=[]
        var params={
           startTime:sessionStorage.startTime,
           endTime:sessionStorage.endTime,
           page:val
        }
        axios.post('http://monkey.queyoujia.com/rebate/recharge',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
        tableTemp=[res.data.data];
        tableTemp=tableTemp[0].list;
        tableTemp2=[res.data.data];
        self.pageSize=tableTemp2[0].total;
       // console.log(tableTemp)
         for(let x in tableTemp){
          self.tableData.push( tableTemp[x])
          /*console.log(tableTemp[x])*/
         }
          /*console.log(self.tableData)*/

        }).catch(function (err) {
          console.log(err);
        })

      },
    },
    computed:{
      key(){
         /*this.pageSize=this.tableData.length;*/
       }
    },
    watch:{

    },
    mounted:function(){
      var self=this;
      self.title=sessionStorage.title;
      self.dates=sessionStorage.Dates
        console.log(sessionStorage.startTime);
        console.log(sessionStorage.endTime);
        self.tableData=[]
        var tableTemp=[];
        var tableTemp2=[]
        var params={
           startTime:sessionStorage.startTime,
           endTime:sessionStorage.endTime
        }
        axios.post('http://monkey.queyoujia.com/rebate/recharge',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
        tableTemp=[res.data.data];
        tableTemp=tableTemp[0].list;
        tableTemp2=[res.data.data];
        self.pageSize=tableTemp2[0].total;

         for(let x in tableTemp){
          self.tableData.push( tableTemp[x])

         }


        }).catch(function (err) {
          console.log(err);
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.rechargeDetails{margin-top: 10px}
.searchAll{position: absolute;margin-top: 30px}
.form-inline{padding-bottom:18px; }
.recharge{margin-top: 10px;}
.chosedata{float: right;}
.chosebtn{float: right;}
.chosebtn button{height: 1.8rem;margin-top: 5px;line-height: 50%;}
.formSearch{margin-top: -10px;}
.searchRest{width:60px;height: 36px;margin-left: 10px;}
.pagetag{/* position: absolute;bottom: 5px;right: 15px; */float: right;}
.nowtitle{text-align: center;font-size: 20px;margin-top: -50px;width: 100%;display: block;height: 30px;position: relative;}
</style>
