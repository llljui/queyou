<template>
  <div class="promoters">
    <el-tabs type="border-card" v-bind:style="{height:tabHeight}" :key="prikey" @tab-click="choseIt">
    <el-tab-pane label="添加授权" v-bind:index="tab1">
        <el-form :inline="false" :model="formInline" class="demo-form-inline">
          <el-form-item label="游戏ID">
            <el-input v-model="formInline.gameId" @change="inputGI" type="number" placeholder="请输入游戏ID"></el-input>
          </el-form-item>
          <el-form-item label="">
            <el-col :span="24" class="borderB">
              <h5>游戏昵称</h5>
              <div v-html="formInline.nikname"></div>
            </el-col>
          </el-form-item>
          <!-- <el-form-item label="审批人">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item> -->
            <el-button type="primary" @click="onSubmit" class="addpromoters">添加</el-button>
            <el-button  @click="reset">重置</el-button>
          </el-form-item>
        </el-form>
        </el-tab-pane>
        <el-tab-pane label="推广员列表" index="tab2">
          <el-col :span="24" style="margin-bottom:10px;"><el-button  @click="sortB" type="danger" style="float:right;">代理授权时间排序 <i :class="iconsort"></i></el-button></el-col>
        <el-table
          :data="tableData2"
          style="width: 100%"
          :row-class-name="tableRowClassName">
          <el-table-column
            prop="nickname"
            align="center"
            show-overflow-tooltip
            label="昵称">
          </el-table-column>
          <el-table-column
            prop="uid"
            align="center"
            show-overflow-tooltip
            label="游戏ID">
          </el-table-column>
          <el-table-column
            prop="lastLoginTime"
            align="center"
            show-overflow-tooltip
            label="最后消费时间">
          </el-table-column>
          <el-table-column
            prop="dateline"
            align="center"
            show-overflow-tooltip
            label="成为代理时间">
          </el-table-column>
        </el-table>
             <div class="block">
             <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage1"
              :page-size="1"
              layout="total, prev, pager, next, jumper"
              :total="pageSize">
             </el-pagination>
          </div>
    </el-tab-pane>
    <el-tab-pane label="解除绑定" index="tab3">
      <el-col :span="8" >
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">

              <el-form-item label="游戏ID">
                <el-input v-model="formLabelAlign.uid" @change="setuid"></el-input>
              </el-form-item>

          <el-form-item label="游戏昵称">
            <el-input v-model="formLabelAlign.uidck" class="inoutcolor" disabled></el-input>
          </el-form-item>
          <el-form-item label="所属游戏">
          <!--   <el-input v-model="formLabelAlign.cid"></el-input> -->
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="频道">
          <!--     <el-form-item label="通行密码">
                              <el-input v-model="formLabelAlign.pwd"></el-input>
                            </el-form-item> -->
          <!--   <el-input v-model="formLabelAlign.channel"></el-input> -->
              <el-select v-model="value2" placeholder="请选择">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <el-col :span="2" :offset="4">
          <el-button type="danger" @click="unwound">解除绑定</el-button>
        </el-col>
      </el-col>
    </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'promoters',
  data () {
    return {
        iconsort:'el-icon-fa-angle-double-up',
        options: [{
          value: '1',
          label: '大冶棋牌'
        }, {
          value: '2',
          label: '八道雀神'
        }, {
          value: '3',
          label: '全民十三水'
        }],
        value: '',
        options2: [{
          value: 'hz',
          label: '杭州'
        }, {
          value: 'fuyang',
          label: '富阳'
        }, {
          value: 'default',
          label: '全国'
        }],
        value2: '',
      labelPosition: 'right',
        formLabelAlign: {
          pwd: '',
          channel: '',
          cid: '',
          uid:'',
          uidck:''
        },
        formInline: {
          gameId: '',
          nikname: '--',
          searchinfo:false
        },
          tableData2: [],
          tab1:true,
          tab2:false,
          tab3:false,
          tabHeight:'',
          currentPage1: 1,
          pageSize:null,
          tableTemp:[],
          order:1
    }
  },
  methods:{
    sortB:function () {
      var self=this;
      if (self.order==1) {
        self.order=2;
        self.iconsort='el-icon-fa-angle-double-down';
      }else{
        self.order=1;
        self.iconsort='el-icon-fa-angle-double-up';
      }
      axios.get('http://monkey.queyoujia.com/rebate/list',{params:{page:1,order:self.order}}).then(function (res) {
        if (res.data.code==0) {
          self.tableData2=[];
          self.currentPage1='1';
          self.pageSize=res.data.data.total;
          self.tableData2=res.data.data.list;
        }
      }).catch(function (err) {
        console.log(err);
      })
    },
    unwound:function(){
      var self=this;
      var params={}
       self.$prompt('请输入验证码', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(({ value }) => {
        var params={uid:self.formLabelAlign.uid,cid:self.value2,channel:self.value2,code:value}
        axios.post('http://monkey.queyoujia.com/user/unbind_promoter',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function(res){
                          if (res.data.code==0) {
                             self.$notify({
                              title: '成功',
                              message: '解绑成功',
                              type: 'success'
                            });
                          }else{
                              self.$notify({
                                title:'失败',
                                message: res.data.message,
                                type: 'warning'
                              });
                          }
                      }).catch(function(err){
                        console.log(err);
                      });
        }).catch(() => {
          self.$notify({
            title:'失败',
            type: 'info',
            message: '取消输入'
          });
        });
    },
    setuid:function (val) {
      console.log(val);
      var self=this;
      self.formLabelAlign.uidck=null;
      if (val.length==7) {
        var params={uid:val,cid:sessionStorage.cid}
        axios.post('http://monkey.queyoujia.com/user/check',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function(res){
                        if (res.data.code==0) {
                            self.formLabelAlign.uidck=res.data.data.nickname;
                             console.log(res.data.data.nickname);
                        }else{
                            self.formLabelAlign.uidck=res.data.message;
                            console.log(res.data.data.nickname);
                        }
                      }).catch(function(err){
                        console.log(err);
                      });
      }
    },
    inputGI:function () {
      var self=this;
      var params={uid:self.formInline.gameId}
      axios.post('http://monkey.queyoujia.com/user/check',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function(res){
                        //console.log(res.data.data.nickname);
                        if (res.data.data.nickname) {
                          self.formInline.nikname=' ' +res.data.data.nickname;
                          self.searchinfo=true;
                        }
                        else{
                          self.formInline.nikname='查询失败';
                          self.searchinfo=false;
                        }

                      }).catch(function(err){
                        console.log(err);
                      });

    },
    onSubmit() {
      var self=this;
        if (self.searchinfo) {
          this.$confirm('是否确认添加代理, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var params={hz:'hz',uid:self.formInline.gameId}
          axios.post('http://monkey.queyoujia.com/promoter/agent',qs.stringify(params),{headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }}).then(function(res){
            if (res.data.code==0) {
              self.$message({
                type: 'success',
                message: '添加成功!'
              });
            }
            else{
                self.$notify({
                title: '警告',
                message: res.data.message,
                type: 'warning'
              });
              }
          }).catch(function(err){
            console.log(err);
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });
        });
        }
        else{
          this.$notify({
          title: '警告',
          message: '请确认输入是否有误',
          type: 'warning'
        });
          return ;
        }
      },
      reset:function(){
        this.formInline.gameId=''
      },
      tableRowClassName(row, index) {
        if (index === 1) {
          return 'info-row';
        } else if (index === 3) {
          return 'positive-row';
        }
        return '';
      },
      choseIt:function (targert) {
        if (targert.index=='0') {
          this.tabHeight='320'+"px"
          console.log(targert.index);
        }else{
          if (targert.index=='1') {
            this.tabHeight=window.screen.availHeight-90+"px";
           // console.log(window.screen.availHeight);
           // console.log(targert.index);
          }else{this.tabHeight='350'+"px"}
        }
      },
      handleSizeChange(val) {
        //console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
            var self=this;
            self.tableData2=[]
            var params={ch:'ch',page:val,order:self.order}
            axios.post('http://monkey.queyoujia.com/rebate/list',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                }}).then(function(res){
                  //self.tableData2=res.data.data.list
                  self.pageSize=res.data.data.total;
                  //console.log(self.pageSize)
                  self.tableData2=res.data.data.list;

                  console.log(self.tableData2);
                   //console.log(self.tableData2);
                }).catch(function (err) {
                  console.log(err);
                })

      }
  },
  computed:{
    prikey(){
      //console.log(window.screen.availHeight)
      this.tabHeight='320'+"px"
    }
  },
  mounted(){
    var self=this;
    self.tableData2=[]
    var params={ch:'ch',page:'1',order:self.order}
    axios.post('http://monkey.queyoujia.com/rebate/list',qs.stringify(params),{headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }}).then(function(res){
                  //self.tableData2=res.data.data.list
                  self.pageSize=res.data.data.total;
                  //console.log(self.pageSize)
                  self.tableData2=res.data.data.list;

                  console.log(self.tableData2);
                   //console.log(self.tableData2);
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
}
a {
  color: #42b983;
}
.promoters{margin-top: 10px;}
.addpromoters{margin-top: 0px;}
.borderB{border-bottom: 1px solid #ddd;font-size: 14px;color: black;}
.borderB h5{font-size: 14px;color: #48576a;font-weight: normal;margin:0;}
.el-table .info-row {
    background: #c9e5f5;
  }
.el-table .positive-row {
    background: #e2f0e4;
  }
  .block{float: right;margin-top: 10px;}
.el-input.is-disabled .el-input__inner{color: red}
</style>
