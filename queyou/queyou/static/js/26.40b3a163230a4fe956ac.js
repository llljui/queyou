webpackJsonp([26],{"/E0q":function(e,a,t){"use strict";var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"mobile"},[t("el-popover",{ref:"popover2",attrs:{placement:"bottom",title:"","min-width":"100",trigger:"click",content:""}},[t("el-button",{directives:[{name:"show",rawName:"v-show",value:e.game1,expression:"game1"}],attrs:{size:"mini"},on:{click:function(a){e.change_game(1)}}},[e._v("大冶棋牌")]),e._v(" "),t("el-button",{directives:[{name:"show",rawName:"v-show",value:e.game2,expression:"game2"}],attrs:{size:"mini"},on:{click:function(a){e.change_game(2)}}},[e._v("八道雀神")]),e._v(" "),t("el-button",{directives:[{name:"show",rawName:"v-show",value:e.game3,expression:"game3"}],attrs:{size:"mini"},on:{click:function(a){e.change_game(3)}}},[e._v("全民十三水")]),e._v(" "),t("el-button",{attrs:{size:"mini"},on:{click:function(a){e.change_game(99)}}},[e._v("切换到PC版")])],1),e._v(" "),t("el-col",{staticClass:"m_header",attrs:{span:24}},[e._v("后台管理系统"),t("i",{directives:[{name:"popover",rawName:"v-popover:popover2",arg:"popover2"}],staticClass:"el-icon-fa el-icon-fa-caret-square-o-down",staticStyle:{float:"right",margin:"2vh 1vw","padding-right":"3vw"}},[t("span",{staticStyle:{"font-size":"12px",float:"left","line-height":"2.5vh"}},[e._v(e._s(e.game_channel))])])]),e._v(" "),t("div",{staticClass:"main_info"},[t("el-col",{staticClass:"mrt",attrs:{span:12}},[e._v("今日消耗总量:"),t("span",{staticStyle:{color:"#40AFFF"}},[e._v(e._s(e.from_index.today_consume))])]),e._v(" "),t("el-col",{staticClass:"mrt",attrs:{span:12}},[e._v("昨日消耗总量:"),t("span",{staticStyle:{color:"#40AFFF"}},[e._v(e._s(e.from_index.yestoday_consume))])]),e._v(" "),t("el-col",{staticClass:"mrt",attrs:{span:12}},[e._v("今日充值总额:"),t("span",{staticStyle:{color:"#40AFFF"}},[e._v(e._s(e.from_index.today_incharge_amount))])]),e._v(" "),t("el-col",{staticClass:"mrt",attrs:{span:12}},[e._v("昨日充值总额:"),t("span",{staticStyle:{color:"#40AFFF"}},[e._v(e._s(e.from_index.yestoday_incharge))])]),e._v(" "),t("el-col",{staticClass:"mrt",attrs:{span:12}},[e._v("活跃用户:"),t("span",{staticStyle:{color:"#40AFFF"}},[e._v(e._s(e.from_index.active_user_num))])]),e._v(" "),t("el-col",{staticClass:"mrt",attrs:{span:12}},[e._v("在线用户:"),t("span",{staticStyle:{color:"#40AFFF"}},[e._v(e._s(e.from_index.have_user_now))])])],1),e._v(" "),t("el-col",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"content",attrs:{span:24,"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[[t("el-tabs",{staticStyle:{height:"200px"}},[t("el-tab-pane",{attrs:{label:"人工划账"}},[t("el-form",{ref:"form",staticStyle:{"margin-top":"3vh"},attrs:{model:e.form,"label-width":"70px"}},[t("el-form-item",{attrs:{label:"游戏ID"}},[t("el-input",{attrs:{type:"number",placeholder:"请输入游戏ID"},on:{change:e.checkid},model:{value:e.form.uid,callback:function(a){e.$set(e.form,"uid",a)},expression:"form.uid"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"昵称"}},[t("el-input",{attrs:{placeholder:"待检查...",disabled:""},model:{value:e.form.nickname,callback:function(a){e.$set(e.form,"nickname",a)},expression:"form.nickname"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"钻石"}},[t("el-input",{attrs:{type:"number",placeholder:"请输入划账数量"},model:{value:e.form.count,callback:function(a){e.$set(e.form,"count",a)},expression:"form.count"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"备注"}},[t("el-input",{attrs:{type:"textarea",placeholder:"请输入要备注的内容..."},model:{value:e.form.desc,callback:function(a){e.$set(e.form,"desc",a)},expression:"form.desc"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:24}},[t("el-button",{staticClass:"flt_r mrl",attrs:{type:"primary"},on:{click:e.manu_hz}},[e._v("确定")]),e._v(" "),t("el-button",{staticClass:"flt_r",on:{click:e.reset}},[e._v("重置")])],1)],1),e._v(" "),t("el-tab-pane",{attrs:{label:"人工清钻"}},[t("el-form",{ref:"form1",staticStyle:{"margin-top":"3vh"},attrs:{model:e.form1,"label-width":"70px"}},[t("el-form-item",{attrs:{label:"游戏ID"}},[t("el-input",{attrs:{type:"number",placeholder:"请输入游戏ID"},on:{change:e.checkid_last},model:{value:e.form1.uid,callback:function(a){e.$set(e.form1,"uid",a)},expression:"form1.uid"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"昵称"}},[t("el-input",{attrs:{placeholder:"待检查...",disabled:""},model:{value:e.form1.nickname,callback:function(a){e.$set(e.form1,"nickname",a)},expression:"form1.nickname"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"剩余"}},[t("el-input",{attrs:{placeholder:"待检查...",disabled:""},model:{value:e.form1.last_amount,callback:function(a){e.$set(e.form1,"last_amount",a)},expression:"form1.last_amount"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"钻石"}},[t("el-input",{attrs:{type:"number",placeholder:"请输入划账数量"},model:{value:e.form1.count,callback:function(a){e.$set(e.form1,"count",a)},expression:"form1.count"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"备注"}},[t("el-input",{attrs:{type:"textarea",placeholder:"请输入要备注的内容..."},model:{value:e.form1.desc,callback:function(a){e.$set(e.form1,"desc",a)},expression:"form1.desc"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:24}},[t("el-button",{staticClass:"flt_r mrl",attrs:{type:"primary"},on:{click:e.manu_qz}},[e._v("确定")]),e._v(" "),t("el-button",{staticClass:"flt_r",on:{click:e.reset}},[e._v("重置")])],1)],1),e._v(" "),t("el-tab-pane",{attrs:{label:"推广员授权"}},[t("el-form",{ref:"form2",staticStyle:{"margin-top":"3vh"},attrs:{model:e.form2,"label-width":"70px"}},[t("el-form-item",{attrs:{label:"游戏ID"}},[t("el-input",{attrs:{type:"number",placeholder:"请输入游戏ID"},on:{change:e.checkid_promter},model:{value:e.form2.uid,callback:function(a){e.$set(e.form2,"uid",a)},expression:"form2.uid"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"昵称"}},[t("el-input",{attrs:{placeholder:"待检查...",disabled:""},model:{value:e.form2.nickname,callback:function(a){e.$set(e.form2,"nickname",a)},expression:"form2.nickname"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:24}},[t("el-button",{staticClass:"flt_r mrl",attrs:{type:"info"},on:{click:e.manu_promter}},[e._v("授权")])],1)],1),e._v(" "),t("el-tab-pane",{attrs:{label:"推广员解绑"}},[t("el-form",{ref:"form1",staticStyle:{"margin-top":"3vh"},attrs:{model:e.form3,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"游戏ID"}},[t("el-input",{attrs:{type:"number",placeholder:"请输入游戏ID"},on:{change:e.checkid_unbind},model:{value:e.form3.uid,callback:function(a){e.$set(e.form3,"uid",a)},expression:"form3.uid"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"昵称"}},[t("el-input",{attrs:{placeholder:"待检查...",disabled:""},model:{value:e.form3.nickname,callback:function(a){e.$set(e.form3,"nickname",a)},expression:"form3.nickname"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"所属游戏"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.value3,callback:function(a){e.value3=a},expression:"value3"}},e._l(e.options3,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"所属频道"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.value4,callback:function(a){e.value4=a},expression:"value4"}},e._l(e.options4,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),t("el-button",{staticStyle:{margin:"2vh 18vw"},attrs:{type:"danger"},on:{click:e.unbind_promter}},[e._v("解除绑定")])],1),e._v(" "),t("el-tab-pane",{attrs:{label:"实名认证"}},[e._v("\n        开发中...\n      ")]),e._v(" "),t("el-tab-pane",{attrs:{label:"提现记录"}},[e._v("\n        开发中...\n      ")])],1)]],2),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.show_hid,expression:"show_hid"}],staticClass:"bor_",on:{click:e.hid_show}}),e._v(" "),t("transition",{directives:[{name:"show",rawName:"v-show",value:e.show_hid,expression:"show_hid"}],attrs:{name:"fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.show_hid,expression:"show_hid"}],staticClass:"bor_content"},[t("el-input",{staticStyle:{margin:"2.33vh 2.5%"},attrs:{type:"number",placeholder:"请输入验证码"},model:{value:e.code_check,callback:function(a){e.code_check=a},expression:"code_check"}}),e._v(" "),t("el-button",{staticStyle:{float:"right",margin:"2vw"},attrs:{type:"primary"},on:{click:e.ensure}},[e._v("确认")]),e._v(" "),t("el-button",{staticStyle:{float:"right",margin:"2vw"},on:{click:e.hid_show}},[e._v("取消")])],1)]),e._v(" "),t("el-dialog",{staticStyle:{width:"100%"},attrs:{center:"true",visible:e.dialogVisible,"show-close":!1,"before-close":e.handleClose},on:{"update:visible":function(a){e.dialogVisible=a}}},[t("header",{staticStyle:{"text-align":"center"}},[e._v("确认授权是否继续?")]),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(a){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:e.promter_}},[e._v("确 定")])],1)]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.show_hid_2,expression:"show_hid_2"}],staticClass:"bor_",on:{click:function(a){e.show_hid_2=e.fasle}}}),e._v(" "),t("transition",{directives:[{name:"show",rawName:"v-show",value:e.show_hid_2,expression:"show_hid_2"}],attrs:{name:"fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.show_hid_2,expression:"show_hid_2"}],staticClass:"bor_content"},[t("el-input",{staticStyle:{margin:"2.33vh 2.5%"},attrs:{type:"number",placeholder:"请输入验证码"},model:{value:e.code_check_unbind,callback:function(a){e.code_check_unbind=a},expression:"code_check_unbind"}}),e._v(" "),t("el-button",{staticStyle:{float:"right",margin:"2vw"},attrs:{type:"primary"},on:{click:e.ensure_unbind}},[e._v("确认")]),e._v(" "),t("el-button",{staticStyle:{float:"right",margin:"2vw"},on:{click:e.hid_show}},[e._v("取消")])],1)])],1)},n=[],i={render:o,staticRenderFns:n};a.a=i},"V/u7":function(e,a,t){"use strict";function o(e){t("ueHx")}Object.defineProperty(a,"__esModule",{value:!0});var n=t("iX0n"),i=t("/E0q"),c=t("Z0/y"),s=o,l=c(n.a,i.a,!1,s,"data-v-ac5c09bc",null);a.default=l.exports},Xhnh:function(e,a,t){a=e.exports=t("I71c")(!0),a.push([e.i,"[data-v-ac5c09bc]{font-family:\\\\5B8B\\4F53;margin-left:0}.m_header[data-v-ac5c09bc]{display:block;height:6vh;line-height:6vh;text-indent:1em;background-color:#03a9f4;color:#fff;-webkit-box-shadow:0 0 5px #444;box-shadow:0 0 5px #444;font-weight:700;position:fixed;top:0}.mrt[data-v-ac5c09bc]{text-indent:1em;border-bottom:1px solid #ddd;height:6vh;line-height:6vh;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;color:#5a5e66}.content[data-v-ac5c09bc]{height:75.5vh;margin-top:24.5vh}.main_info[data-v-ac5c09bc]{position:fixed;top:6.5vh;background-color:#fff}.el-input[data-v-ac5c09bc],.el-input__inner[data-v-ac5c09bc],.el-textarea[data-v-ac5c09bc]{width:95%}.flt_r[data-v-ac5c09bc]{float:left}.mrl[data-v-ac5c09bc]{margin-left:8vw}.bor_[data-v-ac5c09bc]{background-color:#000;opacity:.75}.bor_[data-v-ac5c09bc],.bor_content[data-v-ac5c09bc]{position:fixed;top:0;right:0;left:0;bottom:0;margin:auto}.bor_content[data-v-ac5c09bc]{width:90%;height:20vh;background-color:#fff;border:1px solid #ddd;-webkit-box-shadow:0 0 5px #444;box-shadow:0 0 5px #444;border-radius:3.5px}.fade-enter-active[data-v-ac5c09bc],.fade-leave-active[data-v-ac5c09bc]{-webkit-transition:opacity .5s;transition:opacity .5s}.fade-enter[data-v-ac5c09bc],.fade-leave-to[data-v-ac5c09bc]{opacity:0}.el-dialog--small[data-v-ac5c09bc]{width:80%}","",{version:3,sources:["C:/Users/pc/Desktop/monkey后台总代码/queyou/src/page/mobile/mobile.vue"],names:[],mappings:"AACA,kBAAmB,wBAAkB,aAAe,CACnD,AAGD,2BAA2B,cAAe,WAAY,gBAAiB,gBAAiB,yBAAyB,WAAY,gCAAiC,wBAAyB,gBAAkB,eAAe,KAAO,CAC9N,AACD,sBAAsB,gBAAiB,6BAA8B,WAAY,gBAAiB,uBAAwB,mBAAmB,gBAAiB,aAAc,CAC3K,AACD,0BAA0B,cAAe,iBAAmB,CAC3D,AACD,4BAA4B,eAAe,UAAW,qBAAwB,CAC7E,AAGD,2FAA8B,SAAW,CACxC,AACD,wBAAwB,UAAY,CACnC,AACD,sBAAsB,eAAiB,CACtC,AACD,uBAAoF,sBAAwB,WAAc,CACzH,AACD,qDAFuB,eAAe,MAAO,QAAS,OAAQ,SAAU,WAAY,CAGnF,AADD,8BAA8B,UAAW,YAAa,sBAAwB,sBAAsB,gCAAgC,wBAAwB,AAA6D,mBAAqB,CAC7O,AACD,wEACE,+BAAgC,AAChC,sBAAuB,CACxB,AACD,6DACE,SAAU,CACX,AACD,mCAAmC,SAAU,CAC5C",file:"mobile.vue",sourcesContent:["\n*[data-v-ac5c09bc]{font-family: '宋体';margin-left: 0;\n}\nbody[data-v-ac5c09bc]{/* overflow-y: scroll;-webkit-overflow-scrolling : touch;  */\n}\n.m_header[data-v-ac5c09bc]{display: block;height: 6vh;line-height: 6vh;text-indent: 1em;background-color:#03a9f4;color:white;-webkit-box-shadow: 0 0 5px #444;box-shadow: 0 0 5px #444;font-weight: bold;position:fixed;top: 0;\n}\n.mrt[data-v-ac5c09bc]{text-indent: 1em;border-bottom: 1px solid #ddd;height: 6vh;line-height: 6vh;text-overflow: ellipsis;white-space:nowrap;overflow: hidden;color:#5A5E66;\n}\n.content[data-v-ac5c09bc]{height: 75.5vh;margin-top: 24.5vh;/* overflow-y: scroll;-webkit-overflow-scrolling : touch;  */\n}\n.main_info[data-v-ac5c09bc]{position:fixed;top: 6.5vh;background-color: white;\n}\n.el-input[data-v-ac5c09bc], .el-input__inner[data-v-ac5c09bc]{width:95%;\n}\n.el-textarea[data-v-ac5c09bc]{width: 95%;\n}\n.flt_r[data-v-ac5c09bc]{float: left;\n}\n.mrl[data-v-ac5c09bc]{margin-left: 8vw;\n}\n.bor_[data-v-ac5c09bc]{position:fixed;top: 0;right: 0;left: 0;bottom: 0;margin:auto;background-color: black;opacity: 0.75;\n}\n.bor_content[data-v-ac5c09bc]{width: 90%;height: 20vh;background-color: white;border:1px solid #ddd;-webkit-box-shadow:0 0 5px #444;box-shadow:0 0 5px #444;position:fixed;top: 0;right: 0;left: 0;bottom: 0;margin:auto;border-radius: 3.5px;\n}\n.fade-enter-active[data-v-ac5c09bc], .fade-leave-active[data-v-ac5c09bc] {\r\n  -webkit-transition: opacity .5s;\r\n  transition: opacity .5s\n}\n.fade-enter[data-v-ac5c09bc], .fade-leave-to[data-v-ac5c09bc] /* .fade-leave-active in below version 2.1.8 */ {\r\n  opacity: 0\n}\n.el-dialog--small[data-v-ac5c09bc]{width: 80%\n}\r\n"],sourceRoot:""}])},iX0n:function(e,a,t){"use strict";var o=t("BMa3"),n=t.n(o),i=t("DEjr"),c=t.n(i);a.a={name:"mobile",data:function(){return{show_hid_2:!1,code_check_unbind:null,options4:[{value:"hz",label:"杭州"},{value:"fuyang",label:"富阳"},{value:"default",label:"全国"}],value4:"",options3:[{value:"1",label:"大冶棋牌"},{value:"2",label:"八道雀神"},{value:"3",label:"全民十三水"}],value3:"",form3:{uid:null,nickname:null},dialogVisible:!1,form2:{nickname:null,uid:null},game1:null,game2:null,game3:null,from_index:{today_incharge_amount:null,today_consume:null,active_user_num:null,yestoday_consume:null,yestoday_incharge:null,have_user_now:null},loading:!1,game_channel:sessionStorage.gamename,form:{uid:"",desc:"",nickname:"",conut:""},form1:{uid:"",desc:"",nickname:"",conut:"",last_amount:""},show_hid:!1,code_check:"",qz_or_hz:1,orderID:null}},methods:{ensure_unbind:function(){var e=this,a={uid:e.form3.uid,cid:e.value4,channel:e.value3,code:e.code_check_unbind};console.log(a),n.a.post("http://monkey.queyoujia.com/user/unbind_promoter",c.a.stringify(a),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(a){0==a.data.code?(e.$message({message:"解绑成功",type:"success"}),e.show_hid_2=!1):e.$message({message:a.data.message,type:"warning"})}).catch(function(e){console.log(e)})},unbind_promter:function(){this.show_hid_2=!0},checkid_unbind:function(e){var a=this;if(console.log(e),a.form3.uid=e,7==a.form3.uid.length){var t={uid:a.form3.uid};n.a.post("http://monkey.queyoujia.com/user/check",c.a.stringify(t),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){0==e.data.code?a.form3.nickname=e.data.data.nickname:a.form3.nickname=e.data.message}).catch(function(e){console.log(e)})}else a.form3.nickname="请输入正确的游戏ID"},handleClose:function(e){this.dialogVisible=!1},manu_promter:function(){this.dialogVisible=!0},promter_:function(){var e=this,a={uid:e.form2.uid,cid:sessionStorage.cid};n.a.post("http://monkey.queyoujia.com/promoter/agent",c.a.stringify(a),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(a){0==a.data.code?(e.$message({message:"授权成功",type:"success"}),e.dialogVisible=!1):e.$message({message:a.data.message,type:"warning"})}).catch(function(e){console.log(e)})},checkid_promter:function(e){var a=this;if(console.log(e),a.form2.uid=e,7==a.form2.uid.length){var t={uid:a.form2.uid};n.a.post("http://monkey.queyoujia.com/user/check",c.a.stringify(t),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){0==e.data.code?a.form2.nickname=e.data.data.nickname:a.form2.nickname=e.data.message}).catch(function(e){console.log(e)})}else a.form2.nickname="请输入正确的游戏ID"},change_game:function(e){var a=this;console.log(e),1==e?(a.game_channel="大冶棋牌",sessionStorage.cid=1,sessionStorage.channel="hz",document.cookie="cid=1;path=/;",document.cookie="channel=hz;path=/;",a.loading=!0,setTimeout(function(e){a.loading=!1},1e3),n.a.get("http://monkey.queyoujia.com/index/index",{params:{}}).then(function(e){console.log(e),a.from_index.today_incharge_amount=e.data.data.today_incharge_amount,a.from_index.today_consume=e.data.data.today_consume,a.from_index.active_user_num=e.data.data.active_user_num,a.from_index.yestoday_consume=e.data.data.yestoday_consume,a.from_index.yestoday_incharge=e.data.data.yestoday_incharge,a.from_index.have_user_now=e.data.data.have_user_now}).catch(function(e){console.log(e)})):2==e?(a.game_channel="八道雀神",sessionStorage.cid=2,sessionStorage.channel="fuyang",document.cookie="cid=2;path=/;",document.cookie="channel=fuyang;path=/;",a.loading=!0,setTimeout(function(e){a.loading=!1},1e3),n.a.get("http://monkey.queyoujia.com/index/index",{params:{}}).then(function(e){console.log(e),a.from_index.today_incharge_amount=e.data.data.today_incharge_amount,a.from_index.today_consume=e.data.data.today_consume,a.from_index.active_user_num=e.data.data.active_user_num,a.from_index.yestoday_consume=e.data.data.yestoday_consume,a.from_index.yestoday_incharge=e.data.data.yestoday_incharge,a.from_index.have_user_now=e.data.data.have_user_now}).catch(function(e){console.log(e)})):3==e?(a.game_channel="全民十三水",sessionStorage.cid=3,sessionStorage.channel="default",document.cookie="cid=3;path=/;",document.cookie="channel=default;path=/;",a.loading=!0,setTimeout(function(e){a.loading=!1},1e3),n.a.get("http://monkey.queyoujia.com/index/index",{params:{}}).then(function(e){console.log(e),a.from_index.today_incharge_amount=e.data.data.today_incharge_amount,a.from_index.today_consume=e.data.data.today_consume,a.from_index.active_user_num=e.data.data.active_user_num,a.from_index.yestoday_consume=e.data.data.yestoday_consume,a.from_index.yestoday_incharge=e.data.data.yestoday_incharge,a.from_index.have_user_now=e.data.data.have_user_now}).catch(function(e){console.log(e)})):window.location.href="http://"+window.location.host+"/html/qyStage/?cid="+sessionStorage.cid+"&channel="+sessionStorage.channel+"/#/platformagent"},manu_qz:function(){console.log(222);var e=this;e.qz_or_hz=2;var a={amount:e.form1.count,uid:e.form1.uid,amountType:"-1",remark:e.form1.desc};n.a.post("http://monkey.queyoujia.com/rich/manual_dia_order",c.a.stringify(a),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(a){console.log(a),0==a.data.code?(e.orderID=a.data.data.orderId,e.show_hid=!e.show_hid):e.$message({message:a.data.message,type:"warning"})}).catch(function(e){console.log(e)})},checkid_last:function(){var e=this;if(7==e.form1.uid.length){var a={uid:e.form1.uid};n.a.post("http://monkey.queyoujia.com/user/check",c.a.stringify(a),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(a){0==a.data.code?(e.form1.nickname=a.data.data.nickname,e.form1.last_amount=a.data.data.leftDiamond):e.form1.nickname=a.data.message}).catch(function(e){console.log(e)})}else e.form1.nickname="请输入正确的游戏ID"},reset:function(){var e=this;e.form.uid="",e.form.desc=null,e.form.nickname=null,e.form.count=null,e.form1.uid="",e.form1.desc=null,e.form1.nickname=null,e.form1.count=null,e.form1.last_amount=null},hid_show:function(){var e=this;e.show_hid=!e.show_hid},ensure:function(){var e=this;if(1==e.qz_or_hz){var a={checkCode:e.code_check,orderId:e.orderID};n.a.post("http://monkey.queyoujia.com/rich/recharge_notify",c.a.stringify(a),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(a){0==a.data.code?(e.$message({message:"划账成功",type:"success"}),e.show_hid=!e.show_hid):(e.$message({message:a.data.message,type:"warning"}),e.show_hid=!e.show_hid)}).catch(function(e){console.log(e)})}else{var a={checkCode:e.code_check,orderId:e.orderID};n.a.post("http://monkey.queyoujia.com/rich/dec_diamond_notify",c.a.stringify(a),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(a){0==a.data.code?(e.$message({message:"清钻成功",type:"success"}),e.show_hid=!e.show_hid):(e.$message({message:a.data.message,type:"warning"}),e.show_hid=!e.show_hid)}).catch(function(e){console.log(e)})}},checkid:function(){var e=this;if(7==e.form.uid.length){var a={uid:e.form.uid};n.a.post("http://monkey.queyoujia.com/user/check",c.a.stringify(a),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(a){0==a.data.code?e.form.nickname=a.data.data.nickname:e.form.nickname=a.data.message}).catch(function(e){console.log(e)})}else e.form.nickname="请输入正确的游戏ID"},manu_hz:function(){var e=this;e.qz_or_hz=1;var a={amount:e.form.count,remark:e.desc,uid:e.form.uid};n.a.post("http://monkey.queyoujia.com/rich/recharge",c.a.stringify(a),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(a){0==a.data.code?(e.show_hid=!e.show_hid,e.orderID=a.data.data.orderId):e.$message({message:a.data.message,type:"warning"})}).then(function(e){console.log(e)})}},mounted:function(){var e=this,a=JSON.parse(localStorage.union_operation_accountInfo);if(document.cookie="cid="+a.channels[0].id+";path=/;",console.log(a.channels),1==a.channels[0].id)document.cookie="channel=hz;path=/;",e.game_channel="大冶棋牌";else if(2==a.channels[0].id)document.cookie="channel=fuyang;path=/;",e.game_channel="八道雀神";else{if(3!=a.channels[0].id)return;document.cookie="channel=default;path=/;"}a.channels.forEach(function(a,t){1==a.id&&(e.game1=!0),2==a.id&&(e.game2=!0),3==a.id&&(e.game3=!0)}),n.a.get("http://monkey.queyoujia.com/index/index",{params:{}}).then(function(a){console.log(a),e.from_index.today_incharge_amount=a.data.data.today_incharge_amount,e.from_index.today_consume=a.data.data.today_consume,e.from_index.active_user_num=a.data.data.active_user_num,e.from_index.yestoday_consume=a.data.data.yestoday_consume,e.from_index.yestoday_incharge=a.data.data.yestoday_incharge,e.from_index.have_user_now=a.data.data.have_user_now}).catch(function(e){console.log(e)})}}},ueHx:function(e,a,t){var o=t("Xhnh");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t("FIqI")("12477661",o,!0,{})}});
//# sourceMappingURL=26.40b3a163230a4fe956ac.js.map