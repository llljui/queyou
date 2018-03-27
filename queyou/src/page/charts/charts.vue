<template>
  <div class="charts">
    <el-tabs type="border-card" style="margin-top:10px;">
  <el-tab-pane >
    <span slot="label">用户查询</span>
     <el-col :span="3" class="mrt">
      <el-select v-model="value" placeholder="请选择" size="small">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
  </el-col>
  <el-col  class="mrt" :span="3">
    <el-input placeholder="请输入游戏ID" size="small" v-model="inputuid"></el-input>
  </el-col>
  <el-button type="primary" class="mrt" size="small" @click="search">查询</el-button>
  <el-col :span="24"><div class="thead"></div></el-col>
  <el-col :span="24">
    <div class="bottoms">
      <el-col :span="3" class="txts tcolor">昵称：</el-col>
      <el-col :span="3" class="txts">{{nickname}}</el-col>
    </div>
  </el-col>
  <el-col :span="24">
    <div class="bottoms">
      <el-col :span="3" class="txts tcolor">游戏ID：</el-col>
      <el-col :span="3" class="txts">{{uid}}</el-col>
    </div>
  </el-col>
  <el-col :span="24">
    <div class="bottoms">
      <el-col :span="3" class="txts tcolor">推广ID：</el-col>
      <el-col :span="3" class="txts">{{proid}}</el-col>
      <el-col :span="2" :offset="8" class="txts tcolor">昨日充值：</el-col>
       <el-col :span="3" class="txts">{{yesres}}</el-col>
    </div>
  </el-col>
  <el-col :span="24">
    <div class="bottoms">
      <el-col :span="3" class="txts tcolor">手机号码：</el-col>
      <el-col :span="3" class="txts">{{tel}}</el-col>
      <el-col :span="2" :offset="colspan" class="txts tcolor">充值总量：</el-col>
      <el-col :span="3" class="txts">{{total_incharge}}</el-col>
     <!--  <el-col :span="1"><el-button type="info" size="small" style="margin-top:15px;" @click="recharge">充值记录</el-button></el-col> -->
    </div>
  </el-col>
  <el-col :span="24">
    <div class="bottoms">
      <el-col :span="3" class="txts tcolor">最后登录时间：</el-col>
      <el-col :span="5" class="txts">{{dateline}}</el-col>
    <!--   <el-col :span="1"><el-button type="info" size="small" style="margin-top:15px;" @click="getlogin">登录详情</el-button></el-col> -->
      <el-col :span="3" :offset="cusspan" class="txts tcolor">昨日钻石消耗：</el-col>
      <el-col :span="3" class="txts">{{yescus}}</el-col>
    </div>
  </el-col>
  <el-col :span="24">
    <div class="bottoms">
      <el-col :span="3" class="txts tcolor">注册时间</el-col>
      <el-col :span="3" class="txts">{{register_time}}</el-col>
      <el-col :span="3" :offset="8" class="txts tcolor">剩余钻石数量：</el-col>
      <el-col :span="3" class="txts">{{nowdia}}</el-col>
    </div>
  </el-col>
  <el-dialog custom-class="dialogs" title="ssssss" :visible.sync="dialogTableVisible1">
    <el-table :data="gridData1">
      <el-table-column property="date" label="日期" width="150"></el-table-column>
      <el-table-column property="name" label="姓名" width="200"></el-table-column>
      <el-table-column property="address" label="地址"></el-table-column>
    </el-table>
    <el-pagination
      class="tbflrt"
      @size-change="handleSizeChange1"
      @current-change="handleCurrentChange1"
      :current-page.sync="currentPage1"
      :page-size="1"
      layout="prev, pager, next, jumper"
      :total="allpage1">
    </el-pagination>
  </el-dialog>
  <el-dialog title="" custom-class="dialogs" :visible.sync="dialogTableVisible2">
    <el-table :data="gridData2">
      <el-table-column property="date" label="日期" width="150"></el-table-column>
      <el-table-column property="name" label="姓名" width="200"></el-table-column>
      <el-table-column property="address" label="地址"></el-table-column>
    </el-table>
    <el-pagination
      class="tbflrt"
      @size-change="handleSizeChange2"
      @current-change="handleCurrentChange2"
      :current-page.sync="currentPage2"
      :page-size="1"
      layout="prev, pager, next, jumper"
      :total="allpage2">
    </el-pagination>
  </el-dialog>
  </el-tab-pane>
  <el-tab-pane label="迁移管理">
   <el-col :span="4"><el-input placeholder="请输入代理id" v-model="agent_id" size="small"></el-input></el-col>
   <el-col :span="4" :offset="1" style="margin-left:10px"><el-input placeholder="请输入某个用户id" v-model="user_id" size="small"></el-input></el-col>
   <el-col :span="3" :offset="1" style="margin-left:10px"><el-button type="primary" size="mini" style="width:50px;height:30px;" @click="search_had">查询</el-button></el-col>
   <el-col :span="3" class="mrb mrt"></el-col>
  <template>
    <el-table
      class="mrt"
      :data="tableData2"
      style="width: 100%"
      :row-class-name="tableRowClassName">
        <el-table-column
          align="center"
          show-overflow-tooltip
          prop="uid"
          label="用户ID">
        </el-table-column>
        <el-table-column
          prop="newOpenid"
          show-overflow-tooltip
          align="center"
          label="新openid">
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="oldOpenid"
          show-overflow-tooltip
          align="center"
          label="老openid">
        </el-table-column>
        <el-table-column
          align="center"
          show-overflow-tooltip
          prop="newUnionid"
          label="新unionid">
        </el-table-column>
        <el-table-column
          align="center"
          show-overflow-tooltip
          prop="oldUnionid"
          label="旧unionid">
        </el-table-column>
        <el-table-column
          align="center"
          show-overflow-tooltip
          prop="creat_time"
          label="添加时间">
        </el-table-column>
        <el-table-column
          align="center"
          show-overflow-tooltip
          prop="cid"
          label="所属游戏">
        </el-table-column>
        <el-table-column
          align="center"
          show-overflow-tooltip
          prop="isSend"
          label="是否领取奖励">
        </el-table-column>
        <el-table-column
          align="center"
          show-overflow-tooltip
          prop="sync"
          label="是否同步">
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
      :total="1">
    </el-pagination>

  </el-tab-pane>
  <el-tab-pane label="微信昵称转换">
    <el-col :span="5"> <el-input type="number" v-model="nUid"></el-input></el-col>
   <el-col :span="3" style="margin-left:10px;"> <el-button type="primary" @click="toNickname">转换</el-button></el-col>
  </el-tab-pane>
</el-tabs>
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
export default {
  name: 'charts',
  data () {
    return {
      nUid:null,
     agent_id:null,
     user_id:null,
     currentPage3: 1,
     tableData2: [],
      colspan:'8',
      cusspan:'8',
      inputuid:null,
      allpage1:null,
      allpage2:null,
      currentPage1: 1,
      currentPage2: 1,
      nickname:' ',
      total_incharge:' ',
      uid:' ',
      register_time:' ',
      proid:' ',
      tel:' ',
      yescus:' ',
      yesres:' ',
      dateline:null,
      nowdia:' ',
      gridData1: [],
      gridData2: [],
      dialogTableVisible1: false,
      dialogTableVisible2: false,
      options: [{
          value: '1',
          label: '用户ID'
        }, {
          value: '2',
          label: '手机号'
        }, {
          value: '3',
          label: '邀请码'
        }],
        value: '1',
        par:null
  }},
  methods:{
    toNickname:function () {
      var self=this;
      axios.get('http://monkey.queyoujia.com/realname/rename',{params:{uid:self.nUid}}).then(function (res) {
        //console.log(res.code);
        if (res.data.code==0) {
          self.$message({
          message: '转换成功!',
          type: 'success'
        });
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
    search_had:function () {
     var self=this;
     var par={};
     if (self.agent_id) {
       par['agent_id'] = self.agent_id;
     }else{
        par['uid'] = self.user_id;
     }
      self.tableData2=[];
      axios.get('http://monkey.queyoujia.com/user/account',{params:par}).then(function (res) {
        console.log(res);
        if (res.data.code==0) {
          self.tableData2=res.data.data;
          if (true) {
            for(let x in self.tableData2){
               let item=self.tableData2[x];
                if (item.cid==1) {item.cid='全民大冶游戏'}
                else if(item.cid==2){item.cid='八道乐游'}
                else if(item.cid==3){item.cid='决战绍兴'}
                else if(item.cid==8){item.cid='全民十三水'}
                else{}
                if(item.isSend==0){
                  item.isSend='未领取'
                }else{item.isSend='已领取'}
                if(item.sync==0){
                  item.sync='未同步'
                }else{item.sync='已同步'}
                }
          }else{
             self.tableData2.forEach(function (item,index) {
            if (item.cid==1) {item.cid='全民大冶游戏'}
            else if(item.cid==2){item.cid='八道乐游'}
            else if(item.cid==3){item.cid='决战绍兴'}
            else if(item.cid==8){item.cid='全民十三水'}
            else{}
            if(item.isSend==0){
              item.isSend='未领取'
            }else{item.isSend='已领取'}
            if(item.sync==0){
              item.sync='未同步'
            }else{item.sync='已同步'}
          })
          }
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
     handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
   tableRowClassName({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    },
    search:function () {
       var self=this;
       console.log(self.value);
       console.log(self.inputuid);
       axios.get('http://monkey.queyoujia.com/user/search',{params:{type:self.value,var:self.inputuid}}).then(function (res) {
         console.log(res);
         if (res.data.code==0) {
              self.nickname=res.data.data.nickname;//昵称
              self.uid=res.data.data.uid;//游戏id
              self.proid=res.data.data.no;//邀请码
              self.tel=res.data.data.mobile;//手机号码
              self.yescus=res.data.data.yestoday_consume;//昨日消费
              self.dateline=res.data.data.last_login_time;//最后登录时间
              self.nowdia=res.data.data.left_diamond;//剩余钻石量
              self.yesres=res.data.data.yestoday_incharge//昨日充值
              self.total_incharge=res.data.data.total_incharge//充值总量
              self.register_time=res.data.data.register_time//注册时间
              if (self.tel) {
                self.colspan='8';
              }else{
                self.colspan='11';
              }

              if (self.dateline) {
                self.cusspan='6';
              }else{
                self.cusspan='11';
              }
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
     handleSizeChange1(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange1(val) {
        console.log(`当前页: ${val}`);
      },
      handleSizeChange2(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange2(val) {
        console.log(`当前页: ${val}`);
      },
    getlogin:function () {
      var self=this;
      self.dialogTableVisible1=true;
    },
    recharge:function () {
     var self=this;
     self.dialogTableVisible2=true;
   }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mrb{margin-bottom: 30px;height: 1px;}
.mflt li{float: right;margin: 0 5px;}
.inlineblock{display: inline-block;width: 10px;height: 15px;}
.mrt{margin-top: 15px;margin-left: 10px}
.flrt{float: right;}
.block{margin: 0 10px;display: inline-block;width: 1px;}
.thead{width: 100%;height: 25px;background-color: #a7b7bf;margin-top: 10px;margin-left: 10px;}
.bottoms{border-bottom: 1px solid #e4e4e4;margin-left: 10px;height: 60px;}
.txts{line-height: 60px;font-size: 18px;font-family: "Times New Roman",Georgia,Serif;}
.tcolor{color: #878D99;}
.tbflrt{float: right;margin-top: 10px;margin-bottom: 10px;}
.el-table .warning-row {
  background: oldlace;
}
.nbsp{width: 10px;display: inline-block;height: 1px;margin:0 10px;}
.el-table .success-row {
  background: #f0f9eb;
}
</style>
