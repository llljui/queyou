<template>
  <div class="mobile">
    <el-popover
      ref="popover2"
      placement="bottom"
      title=""
      min-width="100"
      trigger="click"
      content="">
      <el-button size="mini" @click="change_game(1)" v-show="game1">大冶棋牌</el-button>
      <el-button size="mini" @click="change_game(2)" v-show="game2">八道友乐</el-button>
      <el-button size="mini" @click="change_game(3)" v-show="game3">绍兴游戏</el-button>
      <el-button size="mini" @click="change_game(99)">切换到PC版</el-button>
    </el-popover>

    <el-col :span="24" class="m_header">后台管理系统<i class="el-icon-fa el-icon-fa-caret-square-o-down" style="float:right;margin:2vh 1vw;padding-right:3vw;" v-popover:popover2><span style="font-size:12px;float:left;line-height:2.5vh;">{{game_channel}}</span></i></el-col>
    <div class="main_info">
      <el-col :span="12" class="mrt">今日消耗总量:<span style="color:#40AFFF">{{from_index.today_consume}}</span></el-col>
      <el-col :span="12" class="mrt">昨日消耗总量:<span style="color:#40AFFF">{{from_index.yestoday_consume}}</span></el-col>
      <el-col :span="12" class="mrt">今日充值总额:<span style="color:#40AFFF">{{from_index.today_incharge_amount}}</span></el-col>
      <el-col :span="12" class="mrt">昨日充值总额:<span style="color:#40AFFF">{{from_index.yestoday_incharge}}</span></el-col>
      <el-col :span="12" class="mrt">活跃用户:<span style="color:#40AFFF">{{from_index.active_user_num}}</span></el-col>
      <el-col :span="12" class="mrt">在线用户:<span style="color:#40AFFF">{{from_index.have_user_now}}</span></el-col>
    </div>
    <el-col :span="24" class="content"  v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)">
    <template>
      <el-tabs style="height: 200px;">
        <el-tab-pane label="人工划账">     
          <el-form ref="form" :model="form" label-width="70px" style="margin-top:3vh;">
            <el-form-item label="游戏ID">
              <el-input v-model="form.uid" @change="checkid"  type="number" placeholder="请输入游戏ID"></el-input>
            </el-form-item>
            <el-form-item label="昵称">
              <el-input v-model="form.nickname" placeholder='待检查...'  disabled></el-input>
            </el-form-item>
            <el-form-item label="钻石">
              <el-input v-model="form.count" type="number"  placeholder="请输入划账数量"></el-input>
            </el-form-item>
              <el-form-item label="备注">
                <el-input type="textarea" v-model="form.desc" placeholder="请输入要备注的内容..."></el-input>
              </el-form-item>
          </el-form>
          <el-col :span="24">
            
              <el-button type="primary" class="flt_r mrl" @click="manu_hz">确定</el-button>
              <el-button class="flt_r" @click="reset">重置</el-button>   
                
          </el-col>
        </el-tab-pane>
        <el-tab-pane label="人工清钻">
          <el-form ref="form1" :model="form1" label-width="70px" style="margin-top:3vh;">
            <el-form-item label="游戏ID">
              <el-input v-model="form1.uid" @change="checkid_last"  type="number" placeholder="请输入游戏ID"></el-input>
            </el-form-item>
            <el-form-item label="昵称">
              <el-input v-model="form1.nickname" placeholder='待检查...'  disabled></el-input>
            </el-form-item>
            <el-form-item label="剩余">
              <el-input v-model="form1.last_amount" placeholder='待检查...'  disabled></el-input>
            </el-form-item>
            <el-form-item label="钻石">
              <el-input v-model="form1.count" type="number"  placeholder="请输入划账数量"></el-input>
            </el-form-item>
              <el-form-item label="备注">
                <el-input type="textarea" v-model="form1.desc" placeholder="请输入要备注的内容..."></el-input>
              </el-form-item>
          </el-form>
          <el-col :span="24">         
              <el-button type="primary" class="flt_r mrl" @click="manu_qz">确定</el-button>
              <el-button class="flt_r" @click="reset">重置</el-button>   
                
          </el-col>
        </el-tab-pane>
        <el-tab-pane label="推广员授权">
           <el-form ref="form2" :model="form2" label-width="70px" style="margin-top:3vh;">
             <el-form-item label="所属游戏">
                  <el-select v-model="form2.value3" placeholder="请选择">
                    <el-option
                      v-for="item in options3"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
            </el-form-item>
            <el-form-item label="游戏ID">
              <el-input v-model="form2.uid" @change="checkid_promter"  type="number" placeholder="请输入游戏ID"></el-input>
            </el-form-item>
            <el-form-item label="昵称">
              <el-input v-model="form2.nickname" placeholder='待检查...'  disabled></el-input>
            </el-form-item>
          </el-form>
          <el-col :span="24">         
              <el-button type="info" class="flt_r mrl" @click="manu_promter">授权</el-button>
          </el-col>
        </el-tab-pane>
        <el-tab-pane label="推广员解绑">
          <el-form ref="form1" :model="form3" label-width="80px" style="margin-top:3vh;">
            <el-form-item label="游戏ID">
              <el-input v-model="form3.uid" @change="checkid_unbind"  type="number" placeholder="请输入游戏ID"></el-input>
            </el-form-item>
            <el-form-item label="昵称">
              <el-input v-model="form3.nickname" placeholder='待检查...'  disabled></el-input>
            </el-form-item>
            <el-form-item label="所属游戏">
                  <el-select v-model="value3" placeholder="请选择">
                    <el-option
                      v-for="item in options3"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
            </el-form-item>
            <el-form-item label="所属频道">
                 <el-select v-model="value4" placeholder="请选择">
                  <el-option
                    v-for="item in options4"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
            </el-form-item>
          </el-form>
           <el-button type="danger" style="margin:2vh 18vw;" @click="unbind_promter">解除绑定</el-button>
        </el-tab-pane>
        <el-tab-pane label="代理转移">
          <el-form :inline="true" :model="form5">
            <el-form-item label="转移人的uid">
              <el-input v-model="form5.uid" @change="ckform5(1)" placeholder="请输入转移人的uid"></el-input>
            </el-form-item>
            <el-form-item label="昵称">
              <el-input v-model="form2.nickname1" placeholder='待检查...'  disabled></el-input>
            </el-form-item>
            <el-form-item label="转入代理的uid">
              <el-input v-model="form5.pid"  @change="ckform5(2)" placeholder="请输入转入代理的uid"></el-input>
            </el-form-item>
            <el-form-item label="昵称">
              <el-input v-model="form2.nickname2" placeholder='待检查...'  disabled></el-input>
            </el-form-item>
            <el-form-item label="验证码">
              <el-input v-model="form5.code"  placeholder="请输入转入代理的验证码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="dlzy_submit">转移代理</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="提现记录">
          开发中...
        </el-tab-pane>
      </el-tabs>
    </template>
    </el-col>
    <div class="bor_" v-show="show_hid" @click="hid_show"></div>
    <transition name="fade" v-show="show_hid">
      <div class="bor_content" v-show="show_hid">
        <el-input type="number" style="margin:2.33vh 2.5%;" v-model="code_check" placeholder="请输入验证码"></el-input>
        <el-button type="primary" style="float:right;margin:2vw;" @click="ensure">确认</el-button>
        <el-button  style="float:right;margin:2vw;" @click="hid_show">取消</el-button>
      </div>
    </transition>
    <el-dialog
      center="true"
      :visible.sync="dialogVisible"
      :show-close="false"
      style="width:100%"
      :before-close="handleClose">
      <header style="text-align:center">确认授权是否继续?</header>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="promter_">确 定</el-button>
      </span>
    </el-dialog>
    <div class="bor_" v-show="show_hid_2" @click="show_hid_2=fasle"></div>
    <transition name="fade" v-show="show_hid_2">
      <div class="bor_content" v-show="show_hid_2">
        <el-input type="number" style="margin:2.33vh 2.5%;" v-model="code_check_unbind" placeholder="请输入验证码"></el-input>
        <el-button type="primary" style="float:right;margin:2vw;" @click="ensure_unbind">确认</el-button>
        <el-button  style="float:right;margin:2vw;" @click="hid_show">取消</el-button>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'mobile',
  data () {
     return {
      form5:{uid:null,pid:null,nickname1:'',nickname2:'',code:''},
      show_hid_2:false,
      code_check_unbind:null,
       options4: [{
            value: 'hz',
            label: '杭州'
          }, {
            value: 'fuyang',
            label: '富阳'
          }, {
            value: 'default',
            label: '全国'
          }],
       value4: '',
       options3: [{
          value: '1',
          label: '决战大冶棋牌'
        }, {
          value: '2',
          label: '八道友乐'
        }, {
          value: '3',
          label: '决战绍兴游戏'
        }],
      value3: '',
      form3:{
        uid:null,
        nickname:null
        
      },
      dialogVisible: false,
      form2:{
        nickname:null,
        uid:null,
        cid:null,
        value3:null
      },
      game1:null,
      game2:null,
      game3:null,
      from_index:{
        today_incharge_amount:null,
        today_consume:null,
        active_user_num:null,
        yestoday_consume:null,
        yestoday_incharge:null,
        have_user_now:null
      },
      loading:false,
      game_channel:sessionStorage.gamename,
        form: {
          uid: '',
          desc: '',
          nickname:'',
          conut:''
        },
        form1: {
          uid: '',
          desc: '',
          nickname:'',
          conut:'',
          last_amount:''
        },
        show_hid:false,
        code_check:'',
        qz_or_hz:1,
        orderID:null
      };
  },
   methods: {
     dlzy_submit:function(){
       var self=this;
        var params={uid:self.form5.uid,pid:self.form5.pid,code:self.form5.code}
          axios.post('http://monkey.queyoujia.com/promoter/userchange',qs.stringify(params),{headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded'
                              }}).then(function (res) {
            if (res.data.code==0) {
                 self.$message({
                    message:'转移成功',
                    type: 'success'
                  });
            }else{
                self.$message({
                    message:res.data.message,
                    type: 'warning'
                  });
            }
          }).catch(function (err) {
            console.log(err);
        })
     },
     ckform5:function(val){
       var self=this;
       if (self.form5.uid.length==7||self.form5.pid.length==7) {
          if (val==1) {
         var params={uid:self.form5.uid}
          axios.post('http://monkey.queyoujia.com/user/check',qs.stringify(params),{headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded'
                              }}).then(function (res) {
            if (res.data.code==0) {
              self.form5.nickname1=res.data.data.nickname1;
            }else{
                self.form5.nickname1=res.data.message;
            }
          }).catch(function (err) {
            console.log(err);
        })
       }else{
          var params={uid:self.form5.pid}
          axios.post('http://monkey.queyoujia.com/user/check',qs.stringify(params),{headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded'
                              }}).then(function (res) {
            if (res.data.code==0) {
              self.form5.nickname2=res.data.data.nickname;
            }else{
              self.form5.nickname2=res.data.message;
            }
          }).catch(function (err) {
            console.log(err);
        })
       }
       }
      
     },
    ensure_unbind:function () {
      var self=this;
       var params={uid:self.form3.uid,cid:self.value4,channel:self.value3,code:self.code_check_unbind}
      console.log(params)
           axios.post('http://monkey.queyoujia.com/user/unbind_promoter',qs.stringify(params),{headers: {
                                  'Content-Type': 'application/x-www-form-urlencoded'
                            }}).then(function (res) {
                             if (res.data.code==0) {
                              self.$message({
                                        message:'解绑成功',
                                        type: 'success'
                                      });
                              self.show_hid_2=false;
                             }else{
                                    self.$message({
                                        message:res.data.message,
                                        type: 'warning'
                                      });}
                            }).catch(function (err) {
                              console.log(err);
                            })
    },
    unbind_promter:function () {
      var self=this;
      self.show_hid_2=true;
    },
    checkid_unbind:function (val) {
       var self=this;
       console.log(val)
       self.form3.uid=val;
       if (self.form3.uid.length==7) {
         var params={uid:self.form3.uid}
        axios.post('http://monkey.queyoujia.com/user/check',qs.stringify(params),{headers: {
                                  'Content-Type': 'application/x-www-form-urlencoded'
                            }}).then(function (res) {
          if (res.data.code==0) {
             self.form3.nickname=res.data.data.nickname;
          }else{
              self.form3.nickname=res.data.message;
          }
        }).catch(function (err) {
          console.log(err);
        })
       }else{
        self.form3.nickname='请输入正确的游戏ID';
       }
    },
      handleClose(done) {
        var self=this;
       self.dialogVisible=false;
      },
    manu_promter:function () {
      var self=this;
      self.dialogVisible=true;
    },
    promter_:function () {
      var self=this;
      var params={uid:self.form2.uid,cid:self.form2.value3}
           axios.post('http://monkey.queyoujia.com/promoter/agent',qs.stringify(params),{headers: {
                                  'Content-Type': 'application/x-www-form-urlencoded'
                            }}).then(function (res) {
                             if (res.data.code==0) {
                              self.$message({
                                        message:'授权成功',
                                        type: 'success'
                                      });
                              self.dialogVisible=false;
                             }else{
                                    self.$message({
                                        message:res.data.message,
                                        type: 'warning'
                                      });
                                      }
                            }).catch(function (err) {
                              console.log(err);
                            })
    },
    checkid_promter:function (val) {
       var self=this;
       console.log(val)
       self.form2.uid=val;
       if (self.form2.uid.length==7) {
         var params={uid:self.form2.uid}
        axios.post('http://monkey.queyoujia.com/user/check',qs.stringify(params),{headers: {
                                  'Content-Type': 'application/x-www-form-urlencoded'
                            }}).then(function (res) {
          if (res.data.code==0) {
             self.form2.nickname=res.data.data.nickname;
          }else{
              self.form2.nickname=res.data.message;
          }
        }).catch(function (err) {
          console.log(err);
        })
       }else{
        self.form2.nickname='请输入正确的游戏ID';
       }
    },
    change_game:function (channel) {
      var self=this;
      console.log(channel)
      if(channel==1){
        self.game_channel='大冶棋牌';
        sessionStorage.cid=1;
        sessionStorage.channel='hz';
        document.cookie="cid=1;path=/;";
        document.cookie="channel=hz;path=/;";
        self.loading=true;
        setTimeout(function (argument) {
          self.loading=false;
        },1000);
        axios.get('http://monkey.queyoujia.com/index/index',{params:{}}).then(function (res) {
        console.log(res);
        self.from_index.today_incharge_amount=res.data.data.today_incharge_amount;//今天充值总额
        self.from_index.today_consume=res.data.data.today_consume;//今日消耗
        self.from_index.active_user_num=res.data.data.active_user_num//活跃用户
        self.from_index.yestoday_consume=res.data.data.yestoday_consume//昨日消耗
        self.from_index.yestoday_incharge=res.data.data.yestoday_incharge//昨日充值
        self.from_index.have_user_now=res.data.data.have_user_now//在线人数
      }).catch(function (err) {
        console.log(err);
      })
      }else if(channel==2){
        self.game_channel='八道雀神';
        sessionStorage.cid=2;
        sessionStorage.channel='fuyang';
        document.cookie="cid=2;path=/;";
        document.cookie="channel=fuyang;path=/;";
         self.loading=true;
        setTimeout(function (argument) {
          self.loading=false;
        },1000);
        axios.get('http://monkey.queyoujia.com/index/index',{params:{}}).then(function (res) {
        console.log(res);
        self.from_index.today_incharge_amount=res.data.data.today_incharge_amount;//今天充值总额
        self.from_index.today_consume=res.data.data.today_consume;//今日消耗
        self.from_index.active_user_num=res.data.data.active_user_num//活跃用户
        self.from_index.yestoday_consume=res.data.data.yestoday_consume//昨日消耗
        self.from_index.yestoday_incharge=res.data.data.yestoday_incharge//昨日充值
        self.from_index.have_user_now=res.data.data.have_user_now//在线人数
      }).catch(function (err) {
        console.log(err);
      })
      }else if(channel==3){
        self.game_channel='全民十三水';
        sessionStorage.cid=3;
        sessionStorage.channel='default';
        document.cookie="cid=3;path=/;";
        document.cookie="channel=default;path=/;";
         self.loading=true;
        setTimeout(function (argument) {
          self.loading=false;
        },1000);
        axios.get('http://monkey.queyoujia.com/index/index',{params:{}}).then(function (res) {
        console.log(res);
        self.from_index.today_incharge_amount=res.data.data.today_incharge_amount;//今天充值总额
        self.from_index.today_consume=res.data.data.today_consume;//今日消耗
        self.from_index.active_user_num=res.data.data.active_user_num//活跃用户
        self.from_index.yestoday_consume=res.data.data.yestoday_consume//昨日消耗
        self.from_index.yestoday_incharge=res.data.data.yestoday_incharge//昨日充值
        self.from_index.have_user_now=res.data.data.have_user_now//在线人数
      }).catch(function (err) {
        console.log(err);
      })
      }else{ window.location.href='http://' + window.location.host+'/html/qyStage/?cid='+sessionStorage.cid+'&channel='+sessionStorage.channel+'/#/platformagent'}
    },
      manu_qz:function () {
        console.log(222);
        var self=this;
        self.qz_or_hz=2;
        var params={amount:self.form1.count,uid:self.form1.uid,amountType:'-1',remark:self.form1.desc};
        axios.post('http://monkey.queyoujia.com/rich/manual_dia_order',qs.stringify(params),{headers: {
                                  'Content-Type': 'application/x-www-form-urlencoded'
                            }}).then(function (res) {
          console.log(res);
          if (res.data.code==0) {
             self.orderID=res.data.data.orderId;
             self.show_hid=!self.show_hid;
          }else{
             self.$message({
              message:res.data.message,
              type: 'warning'
            });
          }
        }).catch(function (err) {
          console.log(err);
        })
      },
      checkid_last:function () {
         var self=this;
       if (self.form1.uid.length==7) {
         var params={uid:self.form1.uid}
        axios.post('http://monkey.queyoujia.com/user/check',qs.stringify(params),{headers: {
                                  'Content-Type': 'application/x-www-form-urlencoded'
                            }}).then(function (res) {
          if (res.data.code==0) {
             self.form1.nickname=res.data.data.nickname;
             self.form1.last_amount=res.data.data.leftDiamond;
          }else{
              self.form1.nickname=res.data.message;
          }
        }).catch(function (err) {
          console.log(err);
        })
       }else{
        self.form1.nickname='请输入正确的游戏ID';
       }
      },
      reset:function () {
        var self=this;
        self.form.uid='';
        self.form.desc=null;
        self.form.nickname=null;
        self.form.count=null;

        self.form1.uid='';
        self.form1.desc=null;
        self.form1.nickname=null;
        self.form1.count=null;
        self.form1.last_amount=null;
      },
      hid_show:function () {
        var self =this ;
        self.show_hid=!self.show_hid;
      },
      ensure:function () {
       var self=this;
       if (self.qz_or_hz==1) {
         var params={checkCode:self.code_check,orderId:self.orderID}
       axios.post('http://monkey.queyoujia.com/rich/recharge_notify',qs.stringify(params),{headers: {
                                  'Content-Type': 'application/x-www-form-urlencoded'
                            }}).then(function (res) {
         if(res.data.code==0){
           self.$message({
              message:'划账成功',
              type: 'success'
            });
           self.show_hid=!self.show_hid;
         }else{
            self.$message({
              message: res.data.message,
              type: 'warning'
            });
            self.show_hid=!self.show_hid;
          }
       }).catch(function (err) {
        console.log(err);
       })
       }else{
       var params={checkCode:self.code_check,orderId:self.orderID}
       axios.post('http://monkey.queyoujia.com/rich/dec_diamond_notify',qs.stringify(params),{headers: {
                                  'Content-Type': 'application/x-www-form-urlencoded'
                            }}).then(function (res) {
         if(res.data.code==0){
           self.$message({
              message:'清钻成功',
              type: 'success'
            });
           self.show_hid=!self.show_hid;
         }else{
            self.$message({
              message: res.data.message,
              type: 'warning'
            });
            self.show_hid=!self.show_hid;
          }
       }).catch(function (err) {
        console.log(err);
       })
       }
      },
      checkid:function () {
       var self=this;
       if (self.form.uid.length==7) {
         var params={uid:self.form.uid}
        axios.post('http://monkey.queyoujia.com/user/check',qs.stringify(params),{headers: {
                                  'Content-Type': 'application/x-www-form-urlencoded'
                            }}).then(function (res) {
          if (res.data.code==0) {
             self.form.nickname=res.data.data.nickname;
          }else{
              self.form.nickname=res.data.message;
          }
        }).catch(function (err) {
          console.log(err);
        })
       }else{
        self.form.nickname='请输入正确的游戏ID';
       }
      },
      manu_hz:function () {
        var self=this;
        self.qz_or_hz=1;
        var params={amount:self.form.count,remark:self.desc,uid:self.form.uid};
        axios.post('http://monkey.queyoujia.com/rich/recharge',qs.stringify(params),{headers: {
                                  'Content-Type': 'application/x-www-form-urlencoded'
                            }}).then(function (res) {
                              if (res.data.code==0) {
                                self.show_hid=!self.show_hid;
                                 self.orderID=res.data.data.orderId;
                              }else{
                                 self.$message({
                                    message: res.data.message,
                                    type: 'warning'
                                  });
                              }
                            }).then(function (err) {
                              console.log(err)// body...
                            })
      }
    },
    mounted(){
      var self=this;
      var local=JSON.parse(localStorage.union_operation_accountInfo);
      document.cookie="cid="+local.channels[0].id+";path=/;";
      console.log(local.channels);
      if(local.channels[0].id==1){ document.cookie="channel="+'hz'+";path=/;"; self.game_channel='大冶棋牌'}
      else if(local.channels[0].id==2){ document.cookie="channel="+'fuyang'+";path=/;"; self.game_channel='八道雀神'}
      else if(local.channels[0].id==3){ document.cookie="channel="+'default'+";path=/;";}else{return; self.game_channel='全民十三水'}
      local.channels.forEach(function (item,index){
      
      if (item.id==1) {self.game1=true;}
      if (item.id==2) {self.game2=true;}
      if (item.id==3) {self.game3=true;}
    });
      axios.get('http://monkey.queyoujia.com/index/index',{params:{}}).then(function (res) {
        console.log(res);
        self.from_index.today_incharge_amount=res.data.data.today_incharge_amount;//今天充值总额
        self.from_index.today_consume=res.data.data.today_consume;//今日消耗
        self.from_index.active_user_num=res.data.data.active_user_num//活跃用户
        self.from_index.yestoday_consume=res.data.data.yestoday_consume//昨日消耗
        self.from_index.yestoday_incharge=res.data.data.yestoday_incharge//昨日充值
        self.from_index.have_user_now=res.data.data.have_user_now//在线人数
      }).catch(function (err) {
        console.log(err);
      })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{font-family: '宋体';margin-left: 0;}
body{/* overflow-y: scroll;-webkit-overflow-scrolling : touch;  */}
.m_header{display: block;height: 6vh;line-height: 6vh;text-indent: 1em;background-color:#03a9f4;color:white;box-shadow: 0 0 5px #444;font-weight: bold;position:fixed;top: 0;}
.mrt{text-indent: 1em;border-bottom: 1px solid #ddd;height: 6vh;line-height: 6vh;text-overflow: ellipsis;white-space:nowrap;overflow: hidden;color:#5A5E66;}
.content{height: 75.5vh;margin-top: 24.5vh;/* overflow-y: scroll;-webkit-overflow-scrolling : touch;  */}
.main_info{position:fixed;top: 6.5vh;background-color: white;}
.el-input, .el-input__inner{width:95%;}
.el-textarea{width: 95%;}
.flt_r{float: left;}
.mrl{margin-left: 8vw;}
.bor_{position:fixed;top: 0;right: 0;left: 0;bottom: 0;margin:auto;background-color: black;opacity: 0.75;}
.bor_content{width: 90%;height: 20vh;background-color: white;border:1px solid #ddd;box-shadow:0 0 5px #444;position:fixed;top: 0;right: 0;left: 0;bottom: 0;margin:auto;border-radius: 3.5px;}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
.el-dialog--small{width: 80%}
</style>
