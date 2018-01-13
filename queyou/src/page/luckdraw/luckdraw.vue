<template>
  <div class="luckdraw" v-loading="loading">
    <el-col :span="3" class="mrt">
      <el-input placeholder="请输入流水账号" v-model="runnum"></el-input>
    </el-col>
    <el-col :span="3" class="mrt">
      <el-input placeholder="请输入游戏ID" v-model="uids"></el-input>
    </el-col>
    <el-col :span="1" class="mrt inlineblock"><el-button type="primary" @click="search">查询</el-button></el-col>
    <div class="inlineblock"></div>
    <el-col :span="1" class="mrt"><el-button type="danger" @click="reset">清空</el-button></el-col>
    
    <template>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          label="中奖记录ID" min-width="120" align="center">
          <template scope="scope">
            <span style="margin-left: 10px">{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="用户ID" align="center">
          <template scope="scope">
             <span style="margin-left: 10px">{{ scope.row.uid }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="奖品ID" align="center">
          <template scope="scope">
             <span style="margin-left: 10px">{{ scope.row.prize_id }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="奖品描述" align="center">
          <template scope="scope">
             <span style="margin-left: 10px">{{ scope.row.prize }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="用户昵称" align="center" max-width="110">
          <template scope="scope">
             <span style="margin-left: 10px">{{ scope.row.nickname }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="流水账号" align="center" min-width="110">
          <template scope="scope">
             <span style="margin-left: 10px">{{ scope.row.runnum }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="状态" align="center">
          <template scope="scope">
             <span style="margin-left: 10px">{{ scope.row.flag }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="抽奖时间" align="center" min-width="130" >
          <template scope="scope">
             <span style="margin-left: 10px">{{ scope.row.add_time }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template scope="scope">
            <el-button
              size="small"
              :type="scope.row.colors"
              @click="handleEdit(scope.$index, scope.row)">
             {{scope.row.btnstatus}}
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
     <el-pagination
     class="mrt flrt"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
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
  name: 'luckdraw',
  data () {
    return {
    runnum:null,
    uids:null,
    loading:false,
    tableData: [],
    currentPage3: 1,
    allpage:1,
    cur_page:null
    }
  },
  methods:{
    reset:function () {
      var self=this;
      self.tableData=[];
      self.currentPage3=1;
      axios.get('http://monkey.queyoujia.com/active/recodelist',{params:{}}).then(function (res) {
        console.log(res);
        if (res.data.code==0) {
          self.tableData=res.data.data.list;
          self.tableData.forEach(function (item,index) {
            console.log(item);
            if (item.flag=='未发放') {
              item.btnstatus='发放奖品';
              item.colors='success';
            }else{
               item.btnstatus='已发放';
              item.colors='primary';
            }
          })
          self.allpage=res.data.data.total;
        }else{return;}
      }).catch(function (err) {
       console.log(err);
      })
    },
     search:function () {
        var self =this;
        self.tableData=[];
        self.currentPage3=1;
        axios.get('http://monkey.queyoujia.com/active/recodelist',{params:{uid:self.uids,runnum:self.runnum}}).then(function (res) {
          if (res.data.code==0) {
              self.tableData=res.data.data.list;
               self.tableData.forEach(function (item,index) {
                console.log(item);
                if (item.flag=='未发放') {
                  item.btnstatus='发放奖品';
                  item.colors='success';
                }else{
                   item.btnstatus='已发放';
                  item.colors='primary';
                }
              });
              self.allpage=res.data.data.total;
          }else{return;}
        }).catch(function (err) {
          console.log(err);
        })
      },
     handleEdit(index, row) {
        console.log(index, row);
        var self=this;
        if (row.btnstatus=="发放奖品") {
           this.$confirm('为ID：'+row.uid+'发放奖品, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                axios.get('http://monkey.queyoujia.com/active/updrecode',{params:{id:row.id}}).then(function (res) {
                      if (res.data.code==0) {
                           self.$message({
                          message: '奖品发放成功',
                          type: 'success'
                        });
                            self.tableData=[];
                            self.currentPage3=1;
                            axios.get('http://monkey.queyoujia.com/active/recodelist',{params:{page: self.cur_page,uid:self.uids}}).then(function (res) {
                              console.log(res);
                              if (res.data.code==0) {
                                self.tableData=res.data.data.list;
                                self.tableData.forEach(function (item,index) {
                                  console.log(item);
                                  if (item.flag=='未发放') {
                                    item.btnstatus='发放奖品';
                                    item.colors='success';
                                  }else{
                                     item.btnstatus='已发放';
                                    item.colors='primary';
                                  }
                                })
                                self.allpage=res.data.data.total;
                              }else{return;}
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
              }).catch(() => {
                this.$message({
                  type: 'info',
                  message: '已取消'
                });          
              });
         
        }else{
           self.$message({
            message: '奖品已发放',
            type: 'warning'
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
        self.allpage=null;
        self.loading=true;
        self.cur_page=val;
        axios.get('http://monkey.queyoujia.com/active/recodelist',{params:{page:val,uid:self.uids}}).then(function (res) {
          console.log(res);
          if (res.data.code==0) {
            self.tableData=res.data.data.list;
             self.tableData.forEach(function (item,index) {
              console.log(item);
              if (item.flag=='未发放') {
                item.btnstatus='发放奖品';
                item.colors='success';
              }else{
                 item.btnstatus='已发放';
                item.colors='primary';
              }
            });
            self.allpage=res.data.data.total;
            self.loading=false;
          }else{return;}
        }).catch(function (err) {
         console.log(err);
        })
      }
  },
  mounted(){
    var self=this;
    axios.get('http://monkey.queyoujia.com/active/recodelist',{params:{}}).then(function (res) {
      console.log(res);
      if (res.data.code==0) {
        self.tableData=res.data.data.list;
        self.tableData.forEach(function (item,index) {
          console.log(item);
          if (item.flag=='未发放') {
            item.btnstatus='发放奖品';
            item.colors='success';
          }else{
             item.btnstatus='已发放';
            item.colors='primary';
          }
        })
        self.allpage=res.data.data.total;
      }else{return;}
    }).catch(function (err) {
     console.log(err);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mrt{margin:15px 5px;}
.flrt{float: right;}
.inlineblock{margin-right: 12px;}
</style>
