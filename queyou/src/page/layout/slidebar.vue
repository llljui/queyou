<template>
<div class="slidebar" :key="keys">
</el-popover>
    <el-row>
    <el-col :span="4" :style="aviheight">
        <el-menu default-active="1" class="el-menu-vertical-demo slider modalmessage" v-bind:style="{height:slideHeight}" @open="handleOpen" @close="handleClose" theme="dark">
          <el-menu-item index="0" class="Logo">
            <img :src="bglogo" alt="" width="75%" class="bglogos">
            <el-popover
              ref="popover2"
              placement="right"
              width="200"
              trigger="click">
                <el-button size="mini" @click="godaye" v-show="game1">大冶棋牌</el-button>
                <el-button size="mini" @click="badao"  v-show="game2">八道雀神</el-button>
                <!-- <el-button size="mini" @click="jzsx"  v-show="game3">决战绍兴</el-button> -->
                <!-- <el-button size="mini" @click="ssshui"  v-show="game4">全民十三水</el-button> -->
            </el-popover>
            <i class="el-icon-fa el-icon-fa-exchange exchange el-icon-fa-5x" @click="changegame"><span class="changefont" v-popover:popover2>切换游戏</span></i></el-menu-item>
  <!-- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -->
            <div v-for="(item,index) in menuItems" :key="item.id">
              <template v-if="item.child.length==0"><router-link :to="item.ui_sref"><el-menu-item :index="index.toString()"><i :class="item.icon"></i>{{item.name}}</el-menu-item></router-link></template>
              <template v-else>
                <el-submenu :index="item.id.toString()" router="true">
                  <template slot="title"><i :class="item.icon"></i>{{item.name}}</template>
                  <el-menu-item-group>
                    <template slot="title"></template>
                      <router-link v-for="(items,index_) in item.child" :to="items.ui_sref"><el-menu-item :data-id="index.toString()+'-'+index_.toString()" :index='index.toString()+"-"+index_.toString()'>{{items.name}}</el-menu-item></router-link>
                  </el-menu-item-group>
                </el-submenu>
              </template>
            </div>
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
      menuItems:[],
      aviheight:{},
      game1:null,
      game2:null,
      game3:null,
      game4:null,
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
      // sessionStorage.cid='3';
      //  sessionStorage.channel='default';
      //  document.cookie="cid="+'3'+";path=/;";
      //  document.cookie="channel="+'default'+";path=/;";
      //  window.location.href='http://' + window.location.host+'/html/qyStage/?cid=3&channel=default'+'/#/platformagent';
    },
    ssshui:function () {
      // sessionStorage.cid='8';
      //  sessionStorage.channel='default';
      //  document.cookie="cid="+'8'+";path=/;";
      //  document.cookie="channel="+'default'+";path=/;";
      //  window.location.href='http://' + window.location.host+'/html/qyStage/?cid=8&channel=default'+'/#/platformagent';
    }
  },
  mounted:function () {
    var self =this;
    axios.get('http://monkey.queyoujia.com/login/info',{params:{}}).then(function (res) {
      console.log(res.data.data.menus);
        self.menuItems=res.data.data.menus
      if (self.menuItems[0].name=='平台概况') {
            console.log('xiba')//self.menuItems=res.data.data.menus.reverse();
      }else{
            self.menuItems=res.data.data.menus.reverse();
      }

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
