<template>
  <div class="outline">
    <el-tabs type="border-card" class="mrt">
    <el-tab-pane label="违规设置">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="违规用户ID">
          <el-col :span="5"><el-input v-model="form.uid" @change="getin" placeholder="请输入用户ID" type="number"></el-input></el-col>
        </el-form-item>
        <el-form-item label="用户昵称">
         <el-col :span="5"><el-input v-model="nickname" disabled></el-input></el-col>
        </el-form-item>
        <el-form-item label="操作类型">
          <el-select v-model="form.type" placeholder="请选操作类型">
            <el-option label="违规处理" value=""></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" v-model="form.remark" placeholder="原因备注..."></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即处理</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="解除违规">
      <el-form ref="form_jf" :model="form_jf" label-width="100px">
        <el-form-item label="违规用户ID">
          <el-col :span="5"><el-input v-model="form_jf.uid" @change="getin_jf" placeholder="请输入用户ID" type="number"></el-input></el-col>
        </el-form-item>
        <el-form-item label="用户昵称">
         <el-col :span="5"><el-input v-model="nickname_jf" disabled></el-input></el-col>
        </el-form-item>
        <el-form-item label="操作类型">
          <el-select v-model="form_jf.type" placeholder="请选操作类型">
            <el-option label="解除违规设置" value=""></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" v-model="form_jf.remark" placeholder="原因备注..."></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit_jf">立即处理</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="违规用户列表">
      <template>
        <el-table
          ref="tabw"
          :data="tableData2"
          :style="{width:importwidth}"
          :row-class-name="tableRowClassName">
          <el-table-column
            prop="nickname"
            label="用户名"
           align="center"
      show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="uid"
            label="游戏ID"
          align="center"
      show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="dateline"
            align="center"
      show-overflow-tooltip
            label="时间">
          </el-table-column>
        </el-table>
      </template>
       <el-pagination
       class="mrt flr"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="1"
      layout="prev, pager, next, jumper"
      :total="allpage">
    </el-pagination>
    </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import axios from "axios";
import qs from 'qs';
export default {
  name: 'outline',
  data () {
    return {
    importwidth:null,
    allpage:null,
    tableData2: [],
    nickname:'等待验证id...',
    nickname_jf:'等待验证id...',
    form_jf:{
      uid: '',
      type: '',
      remark:''
    },
    form: {
          uid: '',
          type: '',
          remark:''
        },
    currentPage3: 1,
      }
    },
    methods: {
      getin:function (val) {
       var self=this;
       console.log(val)
       if (val.length==7) {
           axios.get('http://monkey.queyoujia.com/user/check',{params:{uid:val}}).then(function (res) {
         console.log(res);
         if (res.data.code==0) {
          self.nickname=res.data.data.nickname;
        }else{
           self.nickname=res.data.data.message;
        }
       }).catch(function (err) {
         console.log(err);
       })
       }else{
        return;
       }
      },
      getin_jf:function (val) {
       var self=this;
       console.log(val)
       if (val.length==7) {
           axios.get('http://monkey.queyoujia.com/user/check',{params:{uid:val}}).then(function (res) {
         console.log(res);
         if (res.data.code==0) {
          self.nickname_jf=res.data.data.nickname;
        }else{
           self.nickname_jf=res.data.data.message;
        }
       }).catch(function (err) {
         console.log(err);
       })
       }else{
        return;
       }
      },
       handleSizeChange(val) {

      },
      handleCurrentChange(val) {
        var self=this;
        var params={page:val};
        self.tableData2=[];
        axios.post('http://monkey.queyoujia.com/User/banned_list',qs.stringify(params),{headers:{'Content-Type':'application/x-www-form-urlencoded'}}).then(function (res) {
        self.tableData2=res.data.data.list;
        self.allpage=res.data.data.total;
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
      onSubmit:function() {
        var self=this;
        var params={uid:self.form.uid,remark:self.form.remark}
        axios.post('http://monkey.queyoujia.com/User/banned',qs.stringify(params),{headers:{'Content-Type':'application/x-www-form-urlencoded'}}).then(function (res){
                         console.log(res);
                         if (res.data.code==0) {
                       self.$message({
                                message: '操作成功！',
                                type: 'success'
                              });
                           setTimeout(function () {
                             self.tableData2=[];
                             axios.get('http://monkey.queyoujia.com/User/banned_list',{params:{page:1}}).then(function (res) {
                                  self.tableData2=res.data.data.list;
                                  self.allpage=res.data.data.total;
                                  // self.$refs.tabw.bodyWrapper.children[0].style.width='100%';
                                  // console.log(self.$refs.tabw.bodyWrapper.children[0].style.width);
                                }).catch(function (err) {
                                  console.log(err);
                                })
                           },1000)
                         }else{
                       self.$message({
                          message: res.data.message,
                          type: 'warning'
                        });
                     }
                      }).catch(function (err) {
                        console.log(err);
                      })
      },
      onSubmit_jf:function() {
        var self=this;
        var params={uid:self.form_jf.uid,remark:self.form_jf.remark}
        axios.post('http://monkey.queyoujia.com/User/deletebanned',qs.stringify(params),{headers:{'Content-Type':'application/x-www-form-urlencoded'}}).then(function (res){
                         console.log(res);
                         if (res.data.code==0) {
                         self.$message({
                                message: '操作成功！',
                                type: 'success'
                              });
                              setTimeout(function () {
                                self.tableData2=[];
                                axios.get('http://monkey.queyoujia.com/User/banned_list',{params:{page:1}}).then(function (res) {
                                     self.tableData2=res.data.data.list;
                                     self.allpage=res.data.data.total;
                                     // self.$refs.tabw.bodyWrapper.children[0].style.width='100%';
                                     // console.log(self.$refs.tabw.bodyWrapper.children[0].style.width);
                                   }).catch(function (err) {
                                     console.log(err);
                                   })
                              },1000)
                         }else{
                       self.$message({
                          message: res.data.message,
                          type: 'warning'
                        });
                     }
                      }).catch(function (err) {
                        console.log(err);
                      })
      }
    },
    mounted:function () {
      var self=this;
      axios.get('http://monkey.queyoujia.com/User/banned_list',{params:{page:1}}).then(function (res) {
        self.tableData2=res.data.data.list;
        self.allpage=res.data.data.total;
      }).catch(function (err) {
        console.log(err);
      })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mrt{margin-top: 10px;}
.el-table .warning-row {
    background: oldlace;
  }

.el-table .success-row {
  background: #f0f9eb;
}
.flr{float: right;}
</style>
