<template>
  <div class="login" :key="screen">
     <div class="loginContent">
       <h3 class="loginhead">雀游后台管理系统</h3>
         <!-- <div class="counticon"></div> -->
         <el-input type="text" name="username" value="" v-model="username" class="userName" placeholder="请输入登录账号">
          <i class="el-icon-fa el-icon-fa-user-o"></i>
         </el-input>
         <el-input type="text" name="verCode" value="" v-model="vcode" placeholder="验证码" class="verCode"></el-input>
         <el-button class="Code" type="info" @click="getCode" v-bind:disabled="ifDisable"  v-html="codetext" v-bind:style="{cursor:isAllowed}"></el-button>
          <input type="button" class="loginSubmit" value="登录" @click="login"></input>
     </div>
  </div>
</template>
<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'login',
  data () {
    return {
      screenWidth:'',
      screenHeight:'',
      username:null,
      vcode:'',
      codetext:'获取验证码',
      isAllowed:'pointer',
      ifDisable:false,
      dateclick:'',
      IsPC_:null
    }
  },
  computed:{
    screen:function () {
      this.screenWidth=window.screen.availWidth+'px'
      this.screenHeight=window.screen.availHeight-95+'px'
    }
  },
  methods:{
    recode:function(){
      console.log('refresh')
    },
    login:function () {
      var self=this;
      var params={
        mobile:self.username,
        code:self.vcode
      }
      if (!sessionStorage.firstclick) {
         sessionStorage.firstclick=Date.parse(new Date());
         axios.post('http://monkey.queyoujia.com/login/submit', qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
            if (res.data.code<0) {
              self.$notify({
                  title: '警告',
                  message:'验证码有误' ,
                  type: 'warning'
              });
            }else{
              localStorage.union_operation_accountInfo = JSON.stringify(res.data.data);
              sessionStorage.usid=res.data.data.sid;
              sessionStorage.cid=res.data.data.channels[0].id;
              sessionStorage.channel=res.data.data.channels[0].cname;
              document.cookie="cid="+res.data.data.channels[0].id+";path=/;";
              document.cookie="channel="+res.data.data.channels[0].cname+";path=/;";
              console.log(document.cookie)
              sessionStorage.auth=JSON.parse(localStorage.union_operation_accountInfo).userInfo.name;
/*              var exdate=new Date()
              exdate.setDate(exdate.getDate()+expiredays)
              document.cookie=c_name+ "=" +escape(value)+
              ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())*/
              /*if (res.data.data.channels.length==3) {
                  sessionStorage.cid='1';
                  sessionStorage.channel='hz';
              }
              if (res.data.data.channels.length==2) {
                  sessionStorage.cid=res.data.data.channels[0].id;
                  sessionStorage.channel=res.data.data.channels[0].cname;
              }
              if (res.data.data.channels.length==1) {
                  sessionStorage.cid=res.data.data.channels[0].id;
                  sessionStorage.channel=res.data.data.channels[0].cname;
              }*/
              //console.log(sessionStorage.usid)
              //sessionStorage.usid=1//调试
              //超级管理员
              /*if (res.data.data.userInfo.roleId==0) {
                  sessionStorage.mycid=[1,2];
                  sessionStorage.mychannel=['hz','fuyang'];
              }//超级管理员
              //合作方
              else if(res.data.data.userInfo.partnerId!=0){

              }//合作方
              //代理
              else{

              }//代理*/
              sessionStorage.reload=1;
              if (self.IsPC_==true) {
                window.location.href='http://' + window.location.host+'/html/qyStage/?cid='+sessionStorage.cid+'&channel='+sessionStorage.channel+'/#/platformagent';
              }else{
                console.log('手机端');
                window.location.href='http://' + window.location.host+'/html/qyStage/?cid=1&channel=hz/#/mobile';
              }
            }
            }).catch(function (err) {
              self.$notify({
                      title: '警告',
                      message:err ,
                      type: 'warning'
                  });
            })
      }else{
            if ( (Date.parse(new Date())/1000) - (sessionStorage.firstclick/1000)>=5) {
                sessionStorage.firstclick=Date.parse(new Date());
                axios.post('http://monkey.queyoujia.com/login/submit', qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
            if (res.data.code<0) {
              self.$notify({
                  title: '警告',
                  message:'验证码有误' ,
                  type: 'warning'
              });
            }else{
              //localStorage.union_operation_accountInfo.res=res;
              localStorage.union_operation_accountInfo = JSON.stringify(res.data.data);
              sessionStorage.usid=res.data.data.sid;
              //console.log(sessionStorage.usid)
              //sessionStorage.usid=1//调试
              sessionStorage.reload=1;
              //self.$router.push({path:'/platformagent'})
              sessionStorage.usid=res.data.data.sid;
              sessionStorage.cid=res.data.data.channels[0].id;
              sessionStorage.channel=res.data.data.channels[0].cname;
              document.cookie="cid="+res.data.data.channels[0].id+";path=/;";
              document.cookie="channel="+res.data.data.channels[0].cname+";path=/;";
              console.log(document.cookie)
               sessionStorage.auth=JSON.parse(localStorage.union_operation_accountInfo).userInfo.name;
                if (self.IsPC_==true) {
                window.location.href='http://' + window.location.host+'/html/qyStage/?cid=1&channel=hz/#/platformagent';
              }else{
                console.log('手机端');
                 window.location.href='http://' + window.location.host+'/html/qyStage/?cid=1&channel=hz/#/mobile';
              }
            }
            }).catch(function (err) {
              self.$notify({
                      title: '警告',
                      message:err ,
                      type: 'warning'
                  });
            })
            }else{
                console.log(Date.parse(new Date())/1000-(sessionStorage.firstclick)/1000)
                self.$notify({
                  title: '警告',
                  message:'5秒内请不要重复点击登录' ,
                  type: 'warning'
              });
            }
      }
    },
    getCode:function () {
       var self=this;
       var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1})|(14[0-9]{1}))+\d{8})$/;
       var params={mobile:self.username}
       if (!myreg.test(self.username)) {
        this.$notify({
                title: '警告',
                message:'请输入正确的账号' ,
                type: 'warning'
            });
        return;
      }
      axios.post('http://monkey.queyoujia.com/login/send', qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
          for(let i=60;i>=0;i--){
          setTimeout(function () {
            if (i==0) {
               self.codetext='重新获取验证码';
               self.isAllowed='pointer';
               self.ifDisable=false;
            }else{
               self.codetext=i.toString()+'秒';
               self.isAllowed='not-allowed';
               self.ifDisable=true;
            }
          },(60000-1000*i));
         }
      }).catch(function (err) {
        this.$notify({
                title: '警告',
                message:err ,
                type: 'warning'
            });
      })
    },
    forgetPassword:function(){
       this.$message({
            type: 'success',
            message: '验证码已发到绑定的手机',
          });
       setTimeout(()=>{
           this.$prompt('请输入验证码', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
          /*inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,*/
         /* inputErrorMessage: '邮箱格式不正确'*/
        }).then(({ value }) => {
          if (true) {
             this.$message({
              type: 'success',
              message: '验证码正确',
          });
             let pamams={ mobile:self.username,code:self.vcode}
             axios.post('http://monkey.queyoujia.com/login/submit',qs.stringify(params),{headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }}).then(function (res) {
                     if (res.data.code==0) {
                        setTimeout(function(){
                        window.location.href='./platformagent/platformagent'
                      },1500);
                     }else{
                      return;
                     }
                }).catch(function (err) {
                 console.log(err)
                })
          }
          else{
             this.$message({
            type: 'error',
            message: '验证码错误'
          });
          }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      },3000);

    }
  },
  mounted(){
      var self = this;
      function IsPC() {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad",
        "iPod"];    //常用的手机系统版本
        var flag = true;    //建立标志
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;    //如果是手机版本返回false
                break;
            }
        }
            return flag;
    }
    self.IsPC_=IsPC();//电脑是true，手机是false
    console.log(self.IsPC_);
    if (sessionStorage.firstin) {
           console.log('hasreload');
           }else{
           sessionStorage.firstin=1;
           window.location.reload();
           }
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.el-checkbox{margin-top: 5px;margin-left: 12.66%;color:#646464;font-family:Microsoft YaHei}
.login{position: absolute;top: 0;background:#223341;width: 100vw;height: 100vh;overflow: hidden;}
.loginContent{
  border: 1px solid #253700;
  width:  350px;
  height: 300px;
  margin: 0 auto;
  margin-top: 16%;
  border-radius: 5px;
  background: white;
  box-shadow:0 0 5px #090909;
}
.allowed{cursor: not-allowed;}
.el-input{width:75%;margin: 0 auto;display: block;border-radius: 5px}
.loginhead{text-align: center;color:#646464;font-family:Microsoft YaHei}
.loginSubmit{cursor: pointer;display: block;width:75%;height:2.5rem;margin:10px auto;border-radius:3px;border:1px solid #20A0F0;background-color: #3366FF;color: white;margin-top: 30px;}
.loginSubmit:hover{background-color: #244CC6}
.forget{font-size: 14px;float: right;line-height: 200%;cursor: pointer;color:#1f2d3d;margin-right: 12.66%;color:#646464;font-family:Microsoft YaHei}
.Code{width: 34%;height:28px;display: inline-block;vertical-align: middle;border:1px solid #9EADB9;cursor: pointer;text-align:center;line-height: 0%;}
.verCode{width: 39%;display: inline-block;margin-left: 12.66%;margin-top: 10px;}
.counticon{background-image: url('../../../static/count.png');background-repeat: no-repeat; height: 2.5rem;background-position: 50% 40%;z-index: 666;position: absolute;width:40px;background-size: 60%;margin-left: 2.5%;vertical-align:middle;}
.passWord{margin-top: 5px}
.userName{margin-top: 50px;}
/* .passwordicon{background-image: url('../../../static/password.png');background-repeat: no-repeat; height: 2.5rem;background-position: 50% 40%;z-index: 666;position: absolute;width:40px;background-size: 60%;margin-left: 2.5%;vertical-align:middle;margin-top: 5px;} */
/* .passWord .el-input__inner,.userName .el-input__inner{padding-left: 12.5%;font-size: 18px;font-family:Microsoft YaHeiLight} */

</style>
