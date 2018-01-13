<template>
  <div class="Layout">
  	<topheader></topheader>
  	<slidebar class="slide"></slidebar>
        <datacontent></datacontent>
  </div>
</template>
<script>
import slidebar from './slidebar'
import datacontent from './datacontent'
import topheader from './header'
export default {
  name: 'Layout',
  components:{slidebar,datacontent,topheader},
  data () {
    return {
    
    }
  } ,
  mounted:function () {
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    var self=this;
    if (!sessionStorage.usid) {//调试位置
       self.$router.replace({path:'./login',redirect:'/login'});
    }//如果身份不存在
    else{
      console.log('身份存在');
      if (sessionStorage.reload==1) {
        window.location.reload();
        sessionStorage.reload=false;
      }else{
         window.location.href='http://' + window.location.host+'/html/qyStage/?cid='+sessionStorage.cid+'&channel='+sessionStorage.channel+'/#/platformagent'
      }
       window.location.href='http://' + window.location.host+'/html/qyStage/?cid='+sessionStorage.cid+'&channel='+sessionStorage.channel+'/#/platformagent'

    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slidebar{
position: absolute;top: 0;
}
.dataContent{width:80%;margin-left:225px;padding: 0 0 0 25px;}
</style>
