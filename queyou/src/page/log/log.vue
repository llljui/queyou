<template>
  <div class="log">
  <el-col :span="3"><el-input v-model="admin" placeholder="请输入内容" class="mrt"></el-input></el-col>
    <template>
      <el-select v-model="value" placeholder="请选择" class="mrt" style="margin-left:10px;">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </template>
    <el-button type="primary" @click="search" class="mrt">查询</el-button>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="name"
      align="center"
      show-overflow-tooltip
      label="管理员">
    </el-table-column>
    <el-table-column
      prop="type"
      label="操作"
      align="center"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="amount"
      align="center"
      show-overflow-tooltip
      label="数量">
    </el-table-column>
    <el-table-column
      prop="forUid"
      align="center"
      show-overflow-tooltip
      label="玩家ID">
    </el-table-column>
    <el-table-column
      prop="remark"
      align="center"
      show-overflow-tooltip
      label="操作理由">
    </el-table-column>
    <el-table-column
      prop="dateline"
      align="center"
      show-overflow-tooltip
      label="操作时间">
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
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'log',
  data () {
    return {
      allpage:null,
      options: [{
           value: '1',
           label: '人工划账'
         }, {
           value: '2',
           label: '人工清钻'
         }],
       value: '',
       admin: null,
       state3: '',
       tableData: [],
       currentPage:null
    }
  },
    methods: {
      handleSizeChange(val) {
       // console.log(`每页 ${val} 条`);
     },
     handleCurrentChange(val) {
       console.log(`当前页: ${val}`);
       var self=this;
       self.tableData=[];
       axios.get(sessionStorage.weburl+'/log/operatelog',{params:{adminName:self.admin,type:self.value,page:self.currentPage}}).then(function (res) {
         console.log(res);
         self.tableData=res.data.data.list;
         self.tableData.forEach(function (item,index) {
             if (item.type==1) {
               item.type='人工划账';
             }else{item.type='人工清钻';}
           })
         self.allpage=res.data.data.total;
       }).catch(function (err) {
         console.log(err);
       });
     },
      search:function () {
        var self=this;
        self.tableData=[];
        self.currentPage=1;
        axios.get(sessionStorage.weburl+'/log/operatelog',{params:{adminName:self.admin,type:self.value,page:1}}).then(function (res) {
          console.log(res);
          self.tableData=res.data.data.list;
          self.tableData.forEach(function (item,index) {
              if (item.type==1) {
                item.type='人工划账';
              }else{item.type='人工清钻';}
            })
          self.allpage=res.data.data.total;
        }).catch(function (err) {
          console.log(err);
        });
      },
      handleSelect(item) {
        console.log(item);
      },
      handleIconClick(ev) {
        console.log(ev);
      }
    },
    mounted() {
      var self=this;
      axios.get(sessionStorage.weburl+'/log/operatelog',{params:{}}).then(function (res) {
        console.log(res);
        self.tableData=res.data.data.list;
        self.tableData.forEach(function (item,index) {
            if (item.type==1) {
              item.type='人工划账';
            }else{item.type='人工清钻';}
          })
        self.allpage=res.data.data.total;
      }).catch(function (err) {
        console.log(err);
      });
      // axios.get(sessionStorage.weburl+'access/user/list',{params:{}}).then(function (res) {
      //   console.log(res);
      // }).catch(function (err) {
      //   console.log(err);
      // })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;

    .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .addr {
      font-size: 12px;
      color: #b4b4b4;
    }

    .highlighted .addr {
      color: #ddd;
    }
  }
}
.mrt{margin:2vh 0}
.flrt{float: right;margin: 2vh;}
</style>
