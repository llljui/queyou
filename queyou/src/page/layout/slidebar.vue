<template>
<div class="slidebar" :key="keys"> 
</el-popover>
    <el-row>
    <el-col :span="4" :style="aviheight">
        <el-menu default-active="1"  class="el-menu-vertical-demo slider modalmessage" v-bind:style="{height:slideHeight}" @open="handleOpen" @close="handleClose" theme="dark">
          <el-menu-item index="0" class="Logo">
            <img :src="bglogo" alt="" width="75%" class="bglogos">
            <el-popover
              ref="popover2"
              placement="right"
              width="200"
              trigger="click">
                <el-button size="mini" @click="godaye" v-show="game1">大冶棋牌</el-button>
                <el-button size="mini" @click="badao"  v-show="game2">八道雀神</el-button>
                <el-button size="mini" @click="jzsx"  v-show="game3">决战绍兴</el-button>
                <el-button size="mini" @click="ssshui"  v-show="game4">全民十三水</el-button>
            </el-popover>
            <i class="el-icon-fa el-icon-fa-exchange exchange el-icon-fa-5x" @click="changegame"><span class="changefont" v-popover:popover2>切换游戏</span></i></el-menu-item>
        <router-link to="/platformagent" v-show="menu12"><el-menu-item index="1"><i class="el-icon-fa-home"></i>平台概况</el-menu-item></router-link>
        <el-submenu index="2" router="true">
          <template slot="title"><i class="el-icon-fa-line-chart"></i>平台充值</template>
          <el-menu-item-group>
            <template slot="title"></template>
              <router-link to="/recharge" v-show="menu13"><el-menu-item index="2-1">充值统计</el-menu-item></router-link> 
              <router-link to="/rechargedetails" v-show="menu15"><el-menu-item index="2-2">充值明细</el-menu-item></router-link>
              <router-link to="/returndetails" v-show="menu16"><el-menu-item index="2-3">返现明细</el-menu-item></router-link>
              <router-link to="/manualdebit" v-show="menu17"><el-menu-item index="2-4">人工划账</el-menu-item></router-link>
              <router-link to="/rgqz" v-show="menu18"><el-menu-item index="2-5">人工清钻</el-menu-item></router-link>
          </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5" router="true">
          <template slot="title"><i class="el-icon-fa-user-plus"></i>推广员管理</template>
          <el-menu-item-group>
            <template slot="title"></template>
              <router-link to="/promoters" v-show="menu19"><el-menu-item index="5-1">平台推广员授权</el-menu-item></router-link>
              <router-link to="/prodetail" v-show="menu20"><el-menu-item index="5-2">推广员明细</el-menu-item></router-link>
              <router-link to="/purpose" v-show="menu37"><el-menu-item index="5-3">代理申请意向</el-menu-item></router-link>
          </el-menu-item-group>
          </el-submenu>
          <el-submenu index="7" router="true" v-show="menu70">
          <template slot="title"><i class="el-icon-fa-id-card"></i>权限设置</template>
          <el-menu-item-group>
            <template slot="title"></template>
              <router-link to="/privilege" v-show="menu24"><el-menu-item index="7-1">平台管理权限</el-menu-item></router-link>
              <router-link to="/menu" v-show="menu25"><el-menu-item index="7-2">菜单权限</el-menu-item></router-link>
              <router-link to="/authority" v-show="menu30"><el-menu-item index="7-3">接口权限</el-menu-item></router-link>
                <router-link to="/channels" v-show="menu34"><el-menu-item index="7-4">渠道管理</el-menu-item></router-link>
          </el-menu-item-group><!-- authority -->
          </el-submenu>

          <el-submenu index="8" router="true" v-show="menu80">
            <template slot="title"><i class="el-icon-fa-diamond"></i>钻石消耗</template>
            <el-menu-item-group>
              <template slot="title"></template>
                <router-link to="/zsjwcx" v-show="menu26"><el-menu-item index="8-1">钻石交往记录</el-menu-item></router-link><!-- promoters -->
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title"></template>
                <router-link to="/comsumelist" v-show="menu36"><el-menu-item index="8-2">消耗记录</el-menu-item></router-link><!-- promoters -->
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="15" router="true" v-show="menu90">
            <template slot="title"><i class="el-icon-fa-google-wallet"></i>提现管理</template>
            <el-menu-item-group>
              <template slot="title"></template>
                 <router-link to="/withdrawals"><el-menu-item index="12" v-show="menu32">提现记录</el-menu-item></router-link><!-- withdrawals -->
                 <router-link to="/redEnvelope"><el-menu-item index="16" v-show="menu35">红包记录</el-menu-item></router-link><!-- withdrawals -->
            </el-menu-item-group>
          </el-submenu>

          <router-link to="/analysis" v-show="menu21"><el-menu-item index="3"><i class="el-icon-fa-bar-chart"></i>人数分析</el-menu-item></router-link><!-- analysis -->
          <router-link to="/ranking" v-show="menu23"><el-menu-item index="6"><i class="el-icon-fa-paper-plane"></i>排行榜</el-menu-item></router-link>
           <router-link to="/smrz"><el-menu-item index="11" v-show="menu29"><i class="el-icon-fa-universal-access"></i>实名认证</el-menu-item></router-link>
           <router-link to="/luckdraw"><el-menu-item index="13" v-show="menu31"><i class="el-icon-fa-newspaper-o"></i>抽奖记录</el-menu-item></router-link><!-- luckdraw -->
           <router-link to="/packageversion"><el-menu-item index="14" v-show="menu33"><i class="el-icon-fa-upload"></i>包发布配置</el-menu-item></router-link><!-- packageversion -->
           <router-link to="/charts" v-show="menu22"><el-menu-item index="4"><i class="el-icon-fa-search"></i>用户查询</el-menu-item></router-link>
          <router-link to="/giftset"><el-menu-item index="10" v-show="menu28"><i class="el-icon-fa-gift"></i>活动配置</el-menu-item></router-link><!-- giftset -->
          <router-link to="/401"><el-menu-item index="9" v-show="menu27"><i class="el-icon-fa-edit"></i>操作日志</el-menu-item></router-link>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import axios from "axios";
import qs from "qs";
export default {
  name: 'slidebar',
  data () {
    return {
      aviheight:{},
      game1:null,
      game2:null,
      game3:null,
      game4:null,
      menu12:null,
      menu13:null,
      menu15:null,
      menu16:null,
      menu17:null,
      menu18:null,
      menu19:null,
      menu20:null,
      menu21:null,
      menu22:null,
      menu23:null,
      menu24:null,
      menu25:null,
      menu26:null,
      menu27:null,
      menu28:null,
      menu29:null,
      menu30:false,
      menu31:false,
      menu32:false,
      menu33:false,
      menu34:false,
      menu35:false,
      menu36:false,
      menu37:false,
      menu70:false,
      menu80:false,
      menu90:false,
     slideHeight:'',
     bglogo:null
    }
  },
  methods:{
    handleOpen:function (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose:function (key, keyPath) {
      console.log(key, keyPath)
    },
    changegame:function () {
     //console.log(33);
     var self=this;
     var channel=JSON.parse(localStorage.union_operation_accountInfo).channels;
     channel.forEach(function (item,index){
      console.log(item.id);
      if (item.id==1) {self.game1=true;}
      if (item.id==2) {self.game2=true;}
      if (item.id==3) {self.game3=true;}
      if (item.id==8) {self.game4=true;}
    });
    },
    godaye:function () {
       sessionStorage.cid='1';
       sessionStorage.channel='hz';
       document.cookie="cid="+'1'+";path=/;";
       document.cookie="channel="+'hz'+";path=/;";
       window.location.href='http://' + window.location.host+'/html/qyStage/?cid=1&channel=hz'+'/#/platformagent';
    },
    badao:function () {
       sessionStorage.cid='2';
       sessionStorage.channel='fuyang';
       document.cookie="cid="+'2'+";path=/;";
       document.cookie="channel="+'fuyang'+";path=/;";
       window.location.href='http://' + window.location.host+'/html/qyStage/?cid=2&channel=fuyang'+'/#/platformagent';
    },
    jzsx:function () {
      sessionStorage.cid='3';
       sessionStorage.channel='default';
       document.cookie="cid="+'3'+";path=/;";
       document.cookie="channel="+'default'+";path=/;";
       window.location.href='http://' + window.location.host+'/html/qyStage/?cid=3&channel=default'+'/#/platformagent';
    },
    ssshui:function () {
      sessionStorage.cid='8';
       sessionStorage.channel='default';
       document.cookie="cid="+'8'+";path=/;";
       document.cookie="channel="+'default'+";path=/;";
       window.location.href='http://' + window.location.host+'/html/qyStage/?cid=8&channel=default'+'/#/platformagent';
    }
  },
  mounted:function () {
    var self =this;
    axios.get('http://monkey.queyoujia.com/login/info',{params:{}}).then(function (res) {
      console.log(res.data.data.menus);
      res.data.data.menus.forEach(function (item,index) {
       //console.log(item.id);
        if (item.id>11) {
            //console.log(item.id);
            if (item.id==12) {self.menu12=true;}
            if (item.id==13) {self.menu13=true;}
            if (item.id==15) {self.menu15=true;}
            if (item.id==16) {self.menu16=true;}
            if (item.id==17) {self.menu17=true;}
            if (item.id==18) {self.menu18=true;}
            if (item.id==19) {self.menu19=true;}
            if (item.id==20) {self.menu20=true;}
            if (item.id==21) {self.menu21=true;}
            if (item.id==22) {self.menu22=true;}
            if (item.id==23) {self.menu23=true;}
            if (item.id==24) {self.menu24=true;self.menu70=true;}
            if (item.id==25) {self.menu25=true;self.menu70=true;}
            if (item.id==26) {self.menu26=true;self.menu80=true;}
            if (item.id==27) {self.menu27=true;}
            if (item.id==28) {self.menu28=true;}
            if (item.id==29) {self.menu29=true;}
            if (item.id==30) {self.menu30=true;self.menu70=true;}
            if (item.id==31) {self.menu31=true;}
            if (item.id==32) {self.menu32=true;self.menu90=true;}
            if (item.id==33) {self.menu33=true;}
            if (item.id==34) {self.menu34=true;}
            if (item.id==35) {self.menu35=true;self.menu90=true;}
            if (item.id==36) {self.menu36=true;self.menu80=true;}
            if (item.id==37) {self.menu37=true;}
            else{return;}
        }else{
          console.log('老菜单');
        }   
      })
    }).catch(function (err) {
      console.log(err);
    });
    if (location.search.indexOf('channel=hz')!=-1) {
       console.log(1);
        self.bglogo='../../../static/dayelogo.png'
      }else if(location.search.indexOf('channel=fuyang')!=-1){
         console.log(22);
       self.bglogo='../../../static/bdlogo.png'
      }else if(location.search.indexOf('channel=default')!=-1){
      self.bglogo='../../../static/ssshui.png'}//
      else if(location.search.indexOf('cid=1')!=-1){
       self.bglogo='../../../static/dayelogo.png'
      } else if(location.search.indexOf('cid=2')!=-1){
        self.bglogo='../../../static/bdlogo.png'
      } else if(location.search.indexOf('cid=3')!=-1){
      self.bglogo='../../../static/ssshui.png'
      }else if(location.search.indexOf('cid=8')!=-1){
      self.bglogo='../../../static/ssshui.png'
      }else{return;}
      //sessionStorage.auth=JSON.parse(localStorage.union_operation_accountInfo).userInfo.name;
  },
  computed:{
    keys:function () {
      var self=this; 
      if (window.screen.availHeight<=770) {self.slideHeight='720px';}
      else if(window.screen.availHeight>770&&window.screen.availHeight<=910){self.slideHeight='830px';}
      else if(window.screen.availHeight>910&&window.screen.availHeight<=1055){self.slideHeight='920px';}
      else if(window.screen.availHeight>1055&&window.screen.availHeight<=1090){self.slideHeight='955px';}
      else{self.slideHeight=window.screen.availHeight-20+'px'}
     /* self.aviheight.height=window.screen.availHeight-50+'px';
      self.aviheight.background="#324157";*/
    /*if (!sessionStorage.usid) {//调试位置
       self.$router.replace({path:'./login',redirect: '/login'});
    }//如果身份不存在
    else{
      console.log('身份存在');
      if (sessionStorage.reload==1) {
          window.location.href='http://' + window.location.host+'?cid=1&channel=hz'+'./#/platformagent'
          window.location.reload();
          sessionStorage.reload=false;
          self.bglogo='url(../../../static/dayelogo.png)'//一开始进来都是大冶棋牌的数据
      }else{
          window.location.href='./#/login'
      }
          window.location.href='./#/login'
    }*/
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slidebar{position: fixed;top: 0;/* z-index: 666; */width: 12vw;}
.slidebar>div>div{min-width: 225px;}
.Logo{
  cursor:default;
  height: 5rem;
  background-color:#324157;
  color:white;
  text-align: center;
  font-size: 1.5rem;
  line-height: 200%;
  font-family: cursive,'Lato', sans-serif;
  background-size: 70%;
  background-repeat: no-repeat;
  /* background-image: url('../../../static/dayelogo.png'); */
  background-position: 50% 0%;
}
.slider{
border-radius:0;
}
.slide[data-v-43555580]{}
.exchange{/* float: right; */margin-top: 3.8rem;cursor: pointer;margin-left:-3.5rem;/* font-size: 2rem!important;font-weight:100!important; */color: #878D99;}
.changefont{font-size: 12px;color:#E6EBF5;margin-left: 0.3rem;}
.bglogos{margin-top:-1.5vh;margin-left: -2vw;}
.modalmessage{opacity: 1;box-shadow: 0px 0px 3px #666;border-radius: 5px;padding-top: 20px;overflow-y: scroll;}
.modalmessage::-webkit-scrollbar{border-radius: 10px;width: 4px;background-color:#b5b1b1;height: 5px;}
.modalmessage::-webkit-scrollbar-track{border-radius: 10px;background-color:#E5E9F2;} 
.modalmessage::-webkit-scrollbar-thumb{border-radius: 10px;box-shadow: inset 0 0 6px rgba(0,0,0,.3); background-color:#324057;}
</style>