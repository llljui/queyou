<template>
  <div class="custouser">
    <el-tabs type="border-card" class="mrt">
      <el-tab-pane label="代理下级消耗统计">
        <el-col :span="4" style="margin-right:10px;">
          <el-input type="number" placeholder="请输入代理的UID" v-model="uids"></el-input>
        </el-col>
        <el-col :span="15" class="mbt">
          <el-date-picker
           @change="chosetime"
            v-model="value2"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions1">
          </el-date-picker>
          <el-button type="primary" @click="search">查询</el-button>
        </el-col>
       <el-col :span="4"><div class="grid-content bg-purple">总消耗:{{totalConsume}}</div></el-col>
      </el-tab-pane>
      <template>
        <el-table
          :data="tableData"
          style="width: 100%"
          :row-class-name="tableRowClassName">
          <el-table-column
          show-overflow-tooltip
          align="center"
            prop="uid"
            label="游戏ID">
          </el-table-column>
          <el-table-column
            prop="nickname"
            show-overflow-tooltip
            align="center"
            label="昵称">
          </el-table-column>
          <el-table-column
          show-overflow-tooltip
          align="center"
            prop="consume"
            label="消耗">
          </el-table-column>
        </el-table>
      </template>
      <el-pagination
      class="flr mrt"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="1"
      layout="prev, pager, next, jumper"
      :total="allpage">
    </el-pagination>
    </el-tabs>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'custouser',
  data () {
    return {
      pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
      value2: '',
      time:'',
      uids:'',
      allpage:null,
      currentPage3:1,
      tableData: [],
      totalConsume:null
    }
  },
  methods: {
    chosetime:function () {
      var self=this;
      self.time=Date.parse(self.value2)/1000;
      console.log(self.time);
    },
    search:function () {
      var self=this;
      console.log(self.uids);
      self.tableData=[];
      self.allpage=null;
      self.currentPage3=1;
      axios.get('http://monkey.queyoujia.com/user/check',{params:{uid:self.uids}}).then(function (res) {
        if (res.data.code==0) {
          axios.get('http://monkey.queyoujia.com/Consume/user',{params:{uid:self.uids,time:self.time}}).then(function (res) {
            console.log(res);
            if (res.data.code==0) {
              self.tableData=res.data.data.list;
              self.allpage=res.data.data.total;
              self.totalConsume=res.data.data.totalConsume;
            }else{
              self.$notify({
                       title: '警告',
                       message: res.data.message,
                       type: 'warning'
                     });
            }
          }).catch(function (err) {
            console.log(err);
          })
        }else{
          self.$notify({
                   title: '警告',
                   message: res.data.message,
                   type: 'warning'
                 });
        }
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
     handleSizeChange(val) {
       console.log(`每页 ${val} 条`);
     },
     handleCurrentChange(val) {
       console.log(`当前页: ${val}`);
       var self=this;
       self.tableData=[];
       axios.get('http://monkey.queyoujia.com/Consume/user',{params:{uid:self.uids,time:self.time,page:val}}).then(function (res) {
         console.log(res);
         if (res.data.code==0) {
           self.tableData=res.data.data.list;
           self.allpage=res.data.data.total;
          // self.totalConsume=res.data.data.totalConsume;
         }else{
           self.$notify({
                    title: '警告',
                    message: res.data.message,
                    type: 'warning'
                  });
         }
       }).catch(function (err) {
         console.log(err);
       })
     }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.bg-purple {
    background: #475669;
    color: white;
    text-align: left;
    text-indent: 1em;
    line-height: 35px;
  }
.mrt{margin-top:10px; }
.mbt{margin-bottom:10px; }
.el-table .warning-row {
   background: oldlace;
 }
 .el-table .success-row {
   background: #f0f9eb;
 }
 .flr{float: right;}
</style>
