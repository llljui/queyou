<template>
  <div class="topheader">
   <div class="userout">
    <font class="logout">
      <!-- <span>{{showchannel}}</span> -->
      <select class="selectchannle" @change="channelex" disabled="disabled">
        <option value ="hz" :selected="show1">杭州</option>
        <option value ="fuyang" :selected="show2">富阳</option>
         <option value ="default" :selected="show3">全国</option>
      </select><span style="color:#409EFF">{{username}}&nbsp&nbsp</span>欢迎您！
      <img src="../../../static/logout.png" alt="暂无图片" width="7%" class="getout"  v-on:click="userout">
    </font></div>
   <div class="line_router"></div>
   <div class="routername" :key="keys" v-show="showheader"><h3>{{stagetitle}}</h3></div>
  </div>
</template>
<script>
export default {
  name: 'topheader',
  data () {
    return { 
      showheader:true,
    	stagetitle:'',
      channelss: ['杭州____大冶棋牌','富阳____八道雀神'],
      value: '',
      Channel:null,
      selected:null,
      username:null,
      show1:'',
      show2:'',
      show3:'',
      showchannel:null
    }
  },
  methods:{
      channelex:function (val) {
        console.log(val);
      },
      userout:function () {
      var self =this;
      sessionStorage.usid='';
      //console.log(22);
       self.$router.replace({path:'/login',redirect: '/login'});
      /*清空cookie*/
    },
    changec:function () {
      var self =this ;
      console.log(self.Channel);
    }
  },
  watch:{

  },
  computed:{
  	keys(){
  		this.stagetitle=this.$route.name 
      self.username=sessionStorage.auth;
      if (this.$route.path=="/rechargedetails2/rechargedetails2") {
        //console.log(555);
        this.showheader=false;
        return;
      }
      else{
        self.username=sessionStorage.auth;
        this.showheader=true;
      }
  		
  	}
  },
  mounted(){
    var self=this;
    console.log(location.search.indexOf('channel=fuyang'))
    if (location.search.indexOf('channel=hz')!=-1) {
        self.show1='selected';
        self.show2=false;
        self.show3=false;
        self.showchannel='杭州';
        self.username=sessionStorage.auth;
      }else if(location.search.indexOf('channel=fuyang')!=-1){
        self.username=sessionStorage.auth;
        self.show1=false;
        self.show3=false;
        self.show2='selected';
        self.showchannel="富阳";
      }else if(location.search.indexOf('channel=default')!=-1){
        self.username=sessionStorage.auth;
        self.show1=false;
        self.show2=false;
        self.show3='selected';
        self.showchannel="全国";
      }else{self.username=sessionStorage.auth;return;}
     // self.username=JSON.parse(localStorage.union_operation_accountInfo).userInfo.name;
      self.username=sessionStorage.auth;
  }
}
</script>
<style scoped>
	.topheader{
	width: 100%;clear: both;background-color: white;min-width: 1200px;
	}
	.userout{
		margin-right:3rem;
		line-height: 200%;
		float: right;
    height: 100%;
	}
	.userout>font{margin-right: 2rem;display: inline-block;color: #475669;}
	.line_router,.routername{width: 100%;height: 2.5rem;}
	.routername{background: #edf1f4;margin-top:-20px;}
	.routername>h3{text-align: center;line-height: 200%;width:42%;font-family: '微软雅黑';color:#2D2F33;}
  .logout{width:268px;height: 30px;display: inline-block;z-index: 666;background-repeat: no-repeat;position: relative;background-size:8%;background-position: 100% 70%;margin-top:0.8vh;padding-right: 10px;margin-right: 2vw;}
  @media screen and (min-width: 1900px) {
    .routername>h3{width:35%}
  }
  @media screen and (max-width: 1450px) {
    .routername>h3{width:47%}
  }
    @media screen and (max-width: 1380px) {
    .routername>h3{width:48%}
  }
  .channels{position: fixed;top:0.8rem;right:10vw;width: 8vw;border:none;}
  .selectchannle{margin-right:10px;border:0; border-right: 1px solid #878D99;}
  .getout{float: right;cursor: pointer;margin-top:0.5vh;}
</style>

