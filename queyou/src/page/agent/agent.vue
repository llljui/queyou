<template>
  <div class="agent">
  <el-table
    class="mrt"
    :data="tableData"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <el-table-column
      show-overflow-tooltip
      align="center"
      prop="no"
      label="邀请码">
    </el-table-column>
    <el-table-column
      show-overflow-tooltip
      align="center"
      prop="nickname"
      label="昵称">
    </el-table-column>
    <el-table-column
      show-overflow-tooltip
      align="center"
      prop="uid"
      label="ID">
    </el-table-column>
    <el-table-column
      show-overflow-tooltip
      align="center"
      prop="mobile"
      label="联系方式">
    </el-table-column>
    <el-table-column
      show-overflow-tooltip
      align="center"
      prop="childNum"
      label="下级用户数">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="default"
          style="width:50px;"
          @click="lv_num(scope.$index,scope.row)">{{scope.row.childNum}}</el-button>
      </template>
    </el-table-column>
    <el-table-column
      show-overflow-tooltip
      align="center"
      prop="agentNum"
      label="下级代理数"
      sortable>
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="default"
          style="width:50px;"
          @click="lv_agent(scope.$index,scope.row)">{{scope.row.agentNum}}</el-button>
      </template>
    </el-table-column>
    <el-table-column
      show-overflow-tooltip
      align="center"
      prop="yestoday_incharge"
      sortable
      label="昨日充值(元)">
      <!-- <template slot-scope="scope">
        <el-button
          size="mini"
          type="default"
          style="width:50px;"
          @click="lv_yestoday_incharge(scope.$index,scope.row)">{{scope.row.yestoday_incharge}}</el-button>
      </template> -->
    </el-table-column>
    <el-table-column
      show-overflow-tooltip
      align="center"
      prop="consume"
      sortable
      label="昨日消耗(钻)">
      <!-- <template slot-scope="scope">
        <el-button
          size="mini"
          type="default"
          style="width:50px;"
          @click="lv_consume(scope.$index,scope.row)">{{scope.row.consume}}</el-button>
      </template> -->
    </el-table-column>

    <el-table-column label="操作" align="center">
      <template slot-scope="scope">
        <!-- <el-button
          size="mini"
          style="width:50px;"
          type="info"
          @click="handleDetails(scope.$index, scope.row)">详情</el-button> -->
        <el-button
          size="mini"
          type="info"
          @click="lv_details(scope.$index, scope.row)">直属会员明细</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
      class="flr mrt"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-size="1"
      layout="total,prev, pager, next, jumper"
      :total="allpage">
  </el-pagination>
  <el-dialog title="下级代理详情" :visible.sync="dialogTableVisible">
  <el-table :data="gridData">
    <el-table-column property="incharge"  show-overflow-tooltip align="center" label="下级代理充值"></el-table-column>
    <el-table-column property="consume"  show-overflow-tooltip align="center" label="下级代理消耗"></el-table-column>
    <el-table-column property="date"  show-overflow-tooltip align="center" label="消耗时间"></el-table-column>
  </el-table>
  <!-- <el-pagination
      class="flr mrt mrbt"
      @size-change="handleSizeChange9"
      @current-change="handleCurrentChange9"
      :current-page="currentPage9"
      :page-size="1"
      layout="total,prev, pager, next, jumper"
      :total="allpage9">
  </el-pagination> -->
  </el-dialog>

   <el-dialog title="详情" :visible.sync="lv_dialogTableVisible">
    <el-table :data="gridData_lv">
      <el-table-column property="uid"  show-overflow-tooltip align="center" label="uid"></el-table-column>
      <el-table-column property="nickname"  show-overflow-tooltip align="center" label="昵称"></el-table-column>
      <el-table-column property="yPay"  show-overflow-tooltip align="center" label="昨日充值"></el-table-column>
      <el-table-column property="yConsume"  show-overflow-tooltip align="center" label="昨日消耗"></el-table-column>
      <el-table-column property="tPay"  show-overflow-tooltip align="center" label="今日充值"></el-table-column>
      <el-table-column property="tConsume"  show-overflow-tooltip align="center" label="今日消耗"></el-table-column>
      <el-table-column property="lastLoginTime"  show-overflow-tooltip align="center" label="最后登录时间"></el-table-column>
    </el-table>
    <el-pagination
     class="flrt"
     @size-change="handleSizeChange_lv"
     @current-change="handleCurrentChange_lv"
     :current-page.sync="currentPage3"
     :page-size="1"
     layout="prev, pager, next, jumper"
     :total="allpage_lv">
   </el-pagination>
  </el-dialog>
  </div>
</template>

<script>
  import axios from 'axios'
  import qs from 'qs'
  export default {
    name: 'agent',
    data () {
      return {
      gridData_lv: [],
      dialogTableVisible: false,
      gridData: [],
      lv_dialogTableVisible: false,
      tableData:[{consume:'1'},{consume:'1'}],
      loading:false,
      allpage:null,
      allpage9:null,
      currentPage9:1,
      formLabelWidth: '120px',
      currentPage4: 1,
      currentPage3: 1,
      allpage_lv:1,
      isagent:null,
      rowuid:null
  }
    },
      methods: {
        handleSizeChange_lv(val) {
           console.log(`每页 ${val} 条`);
         },
         handleCurrentChange_lv(val) {
           var self=this;
           console.log(`当前页: ${val}`);
           var type=null;
           if (self.isagent==1) {
             type=1;
           }else{
             type=2;
           }
           axios.get(sessionStorage.weburl+'promoter/child',{params:{uid:self.rowuid,type:type,page:val}}).then(function (res) {
         //  console.log(res.data.data);
           self.gridData_lv=res.data.data.list;
           self.allpage_lv=res.data.data.totalPage;

           }).catch(function (err) {
             console.log(err);
           })
         },
        lv_num:function (index,row) {
          console.log(row);
          var self=this;
          self.isagent=1;
          console.log(row)///promoter/directdetail
          self.gridData=[];
          self.rowuid=row.uid;
        //  console.log(row);
          self.currentPage3=1;
          self.lv_dialogTableVisible=true;
          axios.get(sessionStorage.weburl+'promoter/child',{params:{uid:row.uid,type:1}}).then(function (res) {
        //  console.log(res.data.data);
          self.gridData_lv=res.data.data.list;
          self.allpage_lv=res.data.data.totalPage;

        }).catch(function (err) {
          console.log(err);
        })
        },
        lv_agent:function (index,row) {
          console.log(row);
          var self=this;
          self.rowuid=row.uid;
          self.isagent=2;
          self.currentPage3=1;
          console.log(row)///promoter/directdetail
          self.gridData_lv=[];
        //  console.log(row);
          self.lv_dialogTableVisible=true;
          axios.get(sessionStorage.weburl+'promoter/child',{params:{uid:row.uid,type:2}}).then(function (res) {
        //  console.log(res.data.data);
          self.gridData_lv=res.data.data.list;
          self.allpage_lv=res.data.data.totalPage;
          /*self.tableData.forEach(function (item,index) {

          })*/
          // setTimeout(function () {
          //    self.loading=false;
          // },1000);
        }).catch(function (err) {
          console.log(err);
        })
        },
        lv_details:function (index,row) {
          var self=this;
          console.log(row)///promoter/directdetail
          self.gridData=[];
        //  console.log(row);
          self.dialogTableVisible=true;
          axios.get(sessionStorage.weburl+'promoter/directdetail',{params:{uid:row.uid}}).then(function (res) {
        //  console.log(res.data.data);
          self.gridData=res.data.data.list;
          self.allpage_lv=res.data.data.total;
          /*self.tableData.forEach(function (item,index) {

          })*/
          // setTimeout(function () {
          //    self.loading=false;
          // },1000);
        }).catch(function (err) {
          console.log(err);
        })
        },
        lv_consume:function (index,row) {
          var self=this;
          console.log(row)
        },
        handleDetails:function (index,row) {
          var self=this;
          self.loading=false;
          self.gridData=[];
        //  console.log(row);
          self.dialogTableVisible=true;
          axios.get('http://monkey.queyoujia.com/promoter/detail',{params:{uid:row.uid}}).then(function (res) {
        //  console.log(res.data.data);
          self.gridData=res.data.data.list;
          self.allpage=res.data.data.total;
          /*self.tableData.forEach(function (item,index) {

          })*/
          // setTimeout(function () {
          //    self.loading=false;
          // },1000);
        }).catch(function (err) {
          console.log(err);
        })
          // axios.get('http://monkey.queyoujia.com/promoter/agentlist',{params:{page:val}}).then(function (res) {
          // console.log(res.data.data);
          // self.gridData=res.data.data.list;
          // self.dialogTableVisible=true;
          // console.log('121');
        },
        formatter(row, column) {
          return row.address;
        },
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleSizeChange9(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
          var self=this;
          self.tableData=[];
          self.loading=true;
          axios.get('http://monkey.queyoujia.com/promoter/agentlist',{params:{page:val}}).then(function (res) {
          console.log(res.data.data);
          self.tableData=res.data.data.list;
          self.tableData.forEach(function (item,index) {
            item.consume=-item.consume;
          })
          self.allpage=res.data.data.total;
          /*self.tableData.forEach(function (item,index) {

          })*/
          setTimeout(function () {
             self.loading=false;
          },1000);
        }).catch(function (err) {
          console.log(err);
        })
      },
        handleCurrentChange9(val) {
          console.log(`当前页: ${val}`);
        //   var self=this;
        //   self.tableData=[];
        //   self.loading=true;
        //   axios.get('http://monkey.queyoujia.com/consume/list',{params:{page:val}}).then(function (res) {
        //   console.log(res.data.data);
        //   self.tableData=res.data.data.list;
        //   self.tableData.forEach(function (item,index) {
        //     item.consume=-item.consume;
        //   })
        //   self.allpage=res.data.data.total;
        //   /*self.tableData.forEach(function (item,index) {
        //
        //   })*/
        //   setTimeout(function () {
        //      self.loading=false;
        //   },1000);
        // }).catch(function (err) {
        //   console.log(err);
        // })
        }
      },
      mounted:function () {
        var self=this;
        axios.get('http://monkey.queyoujia.com/promoter/agentlist',{params:{page:'1'}}).then(function (res) {
          console.log(res.data.data);
          var tableData=[];
          self.loading=false;
          self.tableData=res.data.data.list;
          self.tableData.forEach(function (item,index) {
            item.consume=-item.consume;
          })
          //console.log(self.tableData);;
  /*      var str=self.tableData;
          var a = new RegExp("{","");
          var b = new RegExp("}","");
          var c=JSON.stringify(str).replace(a,"").replace(b,"").split(',')
          c.forEach(function (item,index) {
            console.log(item.split(':'));
          })*/
          self.allpage=res.data.data.total;
          /*self.tableData.forEach(function (item,index) {

          })*/
          setTimeout(function () {
             self.loading=false;
          },1000);
        }).catch(function (err) {
          console.log(err);
        })
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flr{float: right;}
.mrt{margin-top: 10px;}
.mrbt{margin-bottom: 10px;}
.flrt{float: right;margin: 10px;}
</style>
