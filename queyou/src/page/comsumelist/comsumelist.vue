<template>
  <div class="comsumelist" v-loading="loading">
  <el-table
    class="mrt"
    :data="tableData"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <el-table-column
      show-overflow-tooltip
      align="center"
      prop="consume"
      label="钻石数"
      sortable>
    </el-table-column>
    <el-table-column
      show-overflow-tooltip
      align="center"
      prop="time"
      sortable
      label="日期">
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
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'comsumelist',
  data () {
    return {
    loading:false,
    allpage:null,
    tableData: [],
    currentPage4: 1
      }
  },
    methods: {
      formatter(row, column) {
        return row.address;
      },
       handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        var self=this;
        self.tableData=[];
        self.loading=true;
        axios.get('http://monkey.queyoujia.com/consume/list',{params:{page:val}}).then(function (res) {
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
      }
    },
    mounted:function () {
      var self=this;
      var str={'2018-01-04':"-1911",'2018-01-05':"-2175",'2018-01-06':"-2104",'2018-01-07':"-2135",'2018-01-08':"-268"};
      axios.get('http://monkey.queyoujia.com/consume/list',{params:{page:'1'}}).then(function (res) {
        console.log(res.data.data);
        var tableData=[];
        self.loading=true;
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
</style>
