
<template>
  <div class="redEnvelope">
    <el-col :span="3" class="mrt">
      <el-input placeholder="请输入游戏ID" type="number" v-model="uids"></el-input>
    </el-col>
    <div class="lineblock"></div>
     <el-select class="mrt" v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <div class="lineblock"></div>
    <el-button type="danger" style="float:right;margin:15px 5px;" @click="toexcel">开启excel功能</el-button>
    <el-button type="info" style="float:right;margin:15px 5px;" @click="searchit">搜索</el-button>
    <el-button @click='reset' style="float:right;margin:15px 5px;">清空</el-button>

    <template>
      <el-select  class="mrt" v-model="valuetype" placeholder="请选择">
        <el-option
          v-for="item in optionstype"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <el-date-picker  type="date" placeholder="时间段2" @change="datapicker2" v-model="date2" style="width:150px;float:right;margin:15px 5px;" class="mrt"></el-date-picker>
      <el-date-picker  type="date" placeholder="时间段1" @change="datapicker1" v-model="date1" style="width:150px;float:right;margin:15px 5px;" class="mrt"></el-date-picker>

    </template>

     <el-table
     class="mrt"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      align="center"
      label="ID">
      <template scope="scope">
        {{ scope.row.id }}
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      sortable
      label="游戏id">
      <template scope="scope">
        {{ scope.row.uid }}
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      show-overflow-tooltip
      label="订单号">
      <template scope="scope">
          {{ scope.row.orderId }}
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      show-overflow-tooltip
      label="红包金额（元）">
      <template scope="scope">
         {{ scope.row.amount }}
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      show-overflow-tooltip
      label="结算金额（元）">
      <template scope="scope">
         {{ scope.row.money }}
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      show-overflow-tooltip
      label="税率">
      <template scope="scope">
         {{ scope.row.tax }}
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      show-overflow-tooltip
      label="红包种类">
      <template scope="scope">
         {{ scope.row.typeName }}
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      min-width="110"
      show-overflow-tooltip
      label="状态">
      <template scope="scope">
         {{ scope.row.status }}
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      show-overflow-tooltip
      label="时间">
      <template scope="scope">
         {{ scope.row.applyTime }}
      </template>
    </el-table-column>
    <el-table-column label="操作" align="center">
    <template scope="scope">
      <el-button
        size="small"
        :type="scope.row.color"
        @click="handleEdit(scope.$index, scope.row)">{{scope.row.canedit}}</el-button>
    </template>
  </el-table-column>
  </el-table>
   <el-pagination
      class="mrt flrt"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="1"
      layout="prev, pager, next, jumper"
      :total="allpage">
    </el-pagination>
    <el-dialog
    title="提现审核"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose">
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="验证码">
        <el-input v-model="formLabelAlign.code" type="number"></el-input>
      </el-form-item>
      <el-form-item label="游戏id">
        <el-input v-model="formLabelAlign.uid" type="number" disabled></el-input>
      </el-form-item>
      <el-form-item label="订单号">
        <el-input v-model="formLabelAlign.orderid" disabled></el-input>
      </el-form-item>
      <el-form-item label="打款金额">
        <el-input v-model="formLabelAlign.amount" disabled></el-input>
      </el-form-item>
      <el-form-item label="操作">
         <el-select v-model="value2" @change="chose" placeholder="请选择">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="submit">确 定</el-button>
    </span>
    </el-dialog>
    <iframe :src="eurl" v-show="toexcelshow" class="toex"></iframe>
    <div class="bord" v-show="toexcelshow" @click="tobord"></div>
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
export default {
  name: 'redEnvelope',
  data () {
    return {
      startTime:null,
      endTime:null,
      date1:'',
      date2:'',
      optionstype: [],
       valuetype: '',
       cur_page:null,
       options2: [{
          value: '0',
          label: '审核通过'
        }, {
          value: '5',
          label: '审核失败'
        }],
        value2: '',
      dialogVisible: false,
      uids:null,
      allpage:null,
      options: [],
      value: '',
      tableData: [],
      currentPage3: 1,
      toexcelshow:false,
      eurl:null,
      labelPosition: 'right',
      toexcelTime1:null,
      toexcelTime2:null,
      formLabelAlign: {
          code: '',
          amount: '',
          uid: '',
          orderid:null
        }
      }
  },
  methods:{
    tobord:function () {
      var self=this;
      self.toexcelshow=!self.toexcelshow;

    },
    toexcel:function () {
      var self=this;
      console.log(self.toexcelTime1);
      console.log(self.toexcelTime2);
      console.log(self.valuetype);
      var channels=null;
      var cids=null;
      console.log(11221)
      self.toexcelshow=!self.toexcelshow;
      var arr=location.search.replace(/\?/g,'').split('&');
      arr.forEach(function (item,index) {
              if (item.indexOf('uid=')!=-1) {
              //uid=item.substring(item.indexOf('=')+1);
          //  self.uid=item.substring(item.indexOf('=')+1);
                  }
                  if (item.indexOf('cid=')!=-1) {
                      cids=item.substring(item.indexOf('=')+1)
                  }
                  if (item.indexOf('channel=')!=-1) {
                      channels=item.substring(item.indexOf('=')+1)
                      if (item.indexOf('cid=')!=-1) {
                          channels='hz';
                      }
                  }
              });//通用取uid，cidchannelvar player = new SVGA.Player('#demoCanvas');
        self.eurl="http://monkey.queyoujia.com/html/toexcel/tohonbao.html?cid="+cids+'&channel='+channels+"&startTime="+self.toexcelTime1+"&endTime="+self.toexcelTime2+"&weburl=\/withdraw\/bonusExcel&random="+Math.random();//"http://www.baidu.com"//
    },
    datapicker1:function () {
       var self=this;
       self.pick1=true;
       var startTime=null;
       var endTime=null;
       function timeChangetype(stringTime1,stringTime2){
           var time={timestamp1:0,timestamp2:0}
           time.timestamp1 = Number(Date.parse(stringTime1)/1000);
           time.timestamp2 = Number(Date.parse(stringTime2)/1000)+86399;
           return time;
          }

      var picktime=timeChangetype(self.date1,self.date2);
      if (picktime.timestamp1&&picktime.timestamp2) {
        if (picktime.timestamp2-picktime.timestamp1>0) {
              self.toexcelTime1=picktime.timestamp1;
              self.toexcelTime2=picktime.timestamp2;

        }
          else{
             this.$notify({
              title: '警告',
              message: '请选择真确的时间',
              type: 'warning'
          });
          }

        }
      else{
         return;
      }
    },
    datapicker2:function () {
      var self=this;
      var startTime=null;
      var endTime=null;
      self.pick2=true;
       function timeChangetype(stringTime1,stringTime2){
           var time={timestamp1:0,timestamp2:0}
           time.timestamp1 = Number(Date.parse(stringTime1)/1000);
           time.timestamp2 = Number(Date.parse(stringTime2)/1000)+86399;
           return time;
          }
      var picktime=timeChangetype(self.date1,self.date2);
      if (picktime.timestamp1&&picktime.timestamp2) {
          if (picktime.timestamp2-picktime.timestamp1>0) {
              self.toexcelTime1=picktime.timestamp1;
              self.toexcelTime2=picktime.timestamp2;
        }
          else{
             this.$notify({
              title: '警告',
              message: '请选择真确的时间',
              type: 'warning'
          });
          }

        }
        else{
          return;
        }
    },
    handleEdit:function (index,row) {
      console.log(row);
      var self=this;
      if (row.canedit=='重新发放') {
        var params={id:row.id}
         axios.post('http://monkey.queyoujia.com/withdraw/reset',qs.stringify(params),{headers: {
                                'Content-Type': 'application/x-www-form-urlencoded'
                          }}).then(function (res) {
                   if (res.data.code=='0') {
                     self.$message({
                      message: '已重新发放',
                      type: 'success'
                    });
                      axios.get('http://monkey.queyoujia.com/withdraw/bonus',{params:{page:self.cur_page}}).then(function (res) {
                        console.log(res);
                        self.tableData=res.data.data.list;
                        self.allpage=res.data.data.total;
                        self.tableData.forEach(function (item,index) {
                          item.amount=item.amount+'元';
                          if (item.status=='打款失败') {
                            item.canedit='重新发放';
                            item.color="info";
                          }else{
                            item.canedit='已处理';
                            item.color="success";
                          }
                        })
                        //self.options=res.data.data.allStatus;
                        for(let x in res.data.data.allStatus){
                          self.options.push({'value':x,'label':res.data.data.allStatus[x]});
                          //console.log(x);
                        }
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
      }else{
        return;
      }
    },
    chose:function (val) {
      console.log(val);
      console.log(this.value2);
    },
    submit:function () {
      var self=this;
      axios.get('http://monkey.queyoujia.com/withdraw/check',{params:{code:self.formLabelAlign.code,orderId:self.formLabelAlign.orderid,status:self.value2,uid:self.formLabelAlign.uid}}).then(function(res){
        if (res.data.code==0) {
           self.$message({
            message: '审核成功',
            type: 'success'
          });
          self.tableData=[];
       self.allpage=null;
       self.currentPage3=1;
       axios.get('http://monkey.queyoujia.com/withdraw/bonus',{params:{}}).then(function (res) {
          console.log(res);
          self.tableData=res.data.data.list;
          self.allpage=res.data.data.total;
          self.tableData.forEach(function (item,index) {
            item.amount=item.amount+'元';
            if (item.status=='打款失败') {
              item.canedit='重新发放';
              item.color="info";
            }else{
              item.canedit='已处理';
              item.color="success";
            }
          })
      //self.options=res.data.data.allStatus;
      for(let x in res.data.data.allStatus){
        self.options.push({'value':x,'label':res.data.data.allStatus[x]});
        //console.log(x);
      }
    }).catch(function (err) {
      console.log(err);
    })
        }else{
           self.$message({
            message: res.data.message,
            type: 'warning'
          });
        }
        console.log(res);
      }).catch(function (err) {
       console.log(err);
      })
      self.dialogVisible = false;
    },
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      reset:function () {
       var self=this;
       self.tableData=[];
       self.allpage=null;
       self.value=null;
       self.date1=null;
       self.date2=null;
       self.currentPage3=1;
       axios.get('http://monkey.queyoujia.com/withdraw/bonus',{params:{page:1}}).then(function (res) {
       console.log(res);
       self.tableData=res.data.data.list;
       self.allpage=res.data.data.total;
       self.tableData.forEach(function (item,index) {
        item.amount=item.amount+'元';
        if (item.status=='打款失败') {
          item.canedit='重新发放';
          item.color="info"
        }else{
          item.canedit='已处理';
          item.color="success";
        }
      })
      //self.options=res.data.data.allStatus;
      for(let x in res.data.data.allStatus){
        self.options.push({'value':x,'label':res.data.data.allStatus[x]});
        //console.log(x);
      }
      }).catch(function (err) {
        console.log(err);
      })
      },
      searchit:function (params) {
        var self=this;
        self.tableData=[];
        var params={};
        self.allpage=null;
        self.currentPage3=1;
        function getshuju() {
          console.log(1212);
          axios.get('http://monkey.queyoujia.com/withdraw/bonus',params).then(function (res) {
          console.log(res);
          self.tableData=res.data.data.list;
          self.allpage=1;
          self.allpage=res.data.data.total;
           self.tableData.forEach(function (item,index) {
          item.amount=item.amount+'元';
          if (item.status=='打款失败') {
            item.canedit='重新发放';
            item.color="info"
          }else{
            item.canedit='已处理';
            item.color="success";
          }
        })
        return;
        }).catch(function (err) {
          console.log(err);
        })
        }
        if (self.value) {
          params={params:{page:1,uid:self.uids,status:self.value,startTime:self.toexcelTime1,endTime:self.toexcelTime2,type:self.valuetype}}
          getshuju(params);
        }else{
          params={params:{page:1,uid:self.uids,startTime:self.toexcelTime1,endTime:self.toexcelTime2,type:self.valuetype}}
          getshuju(params);
        }


      },
   handleSizeChange(val) {
    console.log(`每页 ${val} 条`);
  },
  handleCurrentChange(val) {
    console.log(`当前页: ${val}`);
    var self=this;
     self.allpage=null;
     self.tableData=[];
     self.cur_page=val;
    axios.get('http://monkey.queyoujia.com/withdraw/bonus',{params:{page:val,status:self.value,uid:self.uids,startTime:self.toexcelTime1,endTime:self.toexcelTime2,type:self.valuetype}}).then(function (res) {
      console.log(res);
      self.tableData=res.data.data.list;
      self.allpage=res.data.data.total;
       self.tableData.forEach(function (item,index) {
        item.amount=item.amount+'元';
        if (item.status=='打款失败') {
          item.canedit='重新发放';
          item.color="info"
        }else{
          item.canedit='已处理';
          item.color="success";
        }
      })
    }).catch(function (err) {
      console.log(err);
    })
      }
  },
  mounted(){
    var self=this;
    axios.get('http://monkey.queyoujia.com/withdraw/bonus',{params:{}}).then(function (res) {
      console.log(res);
      self.tableData=res.data.data.list;
      self.allpage=res.data.data.total;
      for(let x in res.data.data.allType){
        self.optionstype.push({'value':x,'label':res.data.data.allType[x]});
        //console.log(x);
      }

      self.tableData.forEach(function (item,index) {
        item.amount=item.amount+'元';
        if (item.status=='打款失败') {
          item.canedit='重新发放';
          item.color="info";
        }else{
          item.canedit='已处理';
          item.color="success";
        }
      })
      //self.options=res.data.data.allStatus;
      for(let x in res.data.data.allStatus){
        self.options.push({'value':x,'label':res.data.data.allStatus[x]});
        //console.log(x);
      }
    }).catch(function (err) {
      console.log(err);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lineblock{display: inline-block;width: 10px;}
.mrt{margin-top: 15px;}
.flrt{float: right;}
.toex{width: 80vw;height: 30vh;position: fixed;top:0;left: 0;bottom: 0;right: 0;margin: auto;z-index: 7}
.bord{width: 100vw;height: 100vh;position: fixed;top:0;left: 0;bottom: 0;right: 0;margin: auto;background: black;opacity: 0.6;z-index: 6;}
</style>
