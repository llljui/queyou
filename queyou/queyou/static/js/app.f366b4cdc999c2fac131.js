webpackJsonp([44],{"1eUs":function(e,n,t){"use strict";var o=t("y0LP"),a=t("8H3O"),i=t("sdKx");n.a={name:"Layout",components:{slidebar:o.default,datacontent:a.default,topheader:i.default},data:function(){return{}},mounted:function(){var e=(new RegExp("(^| )"+name+"=([^;]*)(;|$)"),this);sessionStorage.usid?(console.log("身份存在"),1==sessionStorage.reload?(window.location.reload(),sessionStorage.reload=!1):window.location.href="http://"+window.location.host+"/html/qyStage/?cid="+sessionStorage.cid+"&channel="+sessionStorage.channel+"/#/platformagent",window.location.href="http://"+window.location.host+"/html/qyStage/?cid="+sessionStorage.cid+"&channel="+sessionStorage.channel+"/#/platformagent"):e.$router.replace({path:"./login",redirect:"/login"})}}},"1z0p":function(e,n){},"4ilh":function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"Layout"},[t("topheader"),e._v(" "),t("slidebar",{staticClass:"slide"}),e._v(" "),t("datacontent")],1)},a=[],i={render:o,staticRenderFns:a};n.a=i},"6VMs":function(e,n){},"7ajc":function(e,n,t){"use strict";function o(e){t("rt65")}Object.defineProperty(n,"__esModule",{value:!0});var a=t("1eUs"),i=t("4ilh"),r=t("Z0/y"),s=o,d=r(a.a,i.a,!1,s,"data-v-e2c81d00",null);n.default=d.exports},"8H3O":function(e,n,t){"use strict";function o(e){t("aSwe")}Object.defineProperty(n,"__esModule",{value:!0});var a=t("ZQ3Q"),i=t("GqJv"),r=t("Z0/y"),s=o,d=r(a.a,i.a,!1,s,"data-v-e00ca59e",null);n.default=d.exports},"8yoK":function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{key:e.keys,staticClass:"slidebar"},[t("el-row",[t("el-col",{style:e.aviheight,attrs:{span:4}},[t("el-menu",{staticClass:"el-menu-vertical-demo slider modalmessage",style:{height:e.slideHeight},attrs:{"default-active":"1",theme:"dark"},on:{open:e.handleOpen,close:e.handleClose}},[t("el-menu-item",{staticClass:"Logo",attrs:{index:"0"}},[t("img",{staticClass:"bglogos",attrs:{src:e.bglogo,alt:"",width:"75%"}}),e._v(" "),t("el-popover",{ref:"popover2",attrs:{placement:"right",width:"200",trigger:"click"}},[t("el-button",{directives:[{name:"show",rawName:"v-show",value:e.game1,expression:"game1"}],attrs:{size:"mini"},on:{click:e.godaye}},[e._v("大冶棋牌")]),e._v(" "),t("el-button",{directives:[{name:"show",rawName:"v-show",value:e.game2,expression:"game2"}],attrs:{size:"mini"},on:{click:e.badao}},[e._v("八道雀神")]),e._v(" "),t("el-button",{directives:[{name:"show",rawName:"v-show",value:e.game3,expression:"game3"}],attrs:{size:"mini"},on:{click:e.jzsx}},[e._v("决战绍兴")]),e._v(" "),t("el-button",{directives:[{name:"show",rawName:"v-show",value:e.game4,expression:"game4"}],attrs:{size:"mini"},on:{click:e.ssshui}},[e._v("全民十三水")])],1),e._v(" "),t("i",{staticClass:"el-icon-fa el-icon-fa-exchange exchange el-icon-fa-5x",on:{click:e.changegame}},[t("span",{directives:[{name:"popover",rawName:"v-popover:popover2",arg:"popover2"}],staticClass:"changefont"},[e._v("切换游戏")])])],1),e._v(" "),e._l(e.menuItems,function(n,o){return t("div",{key:n.id},[0==n.child.length?[t("router-link",{attrs:{to:n.ui_sref}},[t("el-menu-item",{attrs:{index:o.toString()}},[t("i",{class:n.icon}),e._v(e._s(n.name))])],1)]:[t("el-submenu",{attrs:{index:n.id.toString(),router:"true"}},[t("template",{slot:"title"},[t("i",{class:n.icon}),e._v(e._s(n.name))]),e._v(" "),t("el-menu-item-group",[t("template",{slot:"title"}),e._v(" "),e._l(n.child,function(n,a){return t("router-link",{attrs:{to:n.ui_sref}},[t("el-menu-item",{attrs:{"data-id":o.toString()+"-"+a.toString(),index:o.toString()+"-"+a.toString()}},[e._v(e._s(n.name))])],1)})],2)],2)]],2)})],2)],1)],1)],1)},a=[],i={render:o,staticRenderFns:a};n.a=i},A66B:function(e,n,t){e.exports=function(e){return function(){return t("msXg")("./"+e+".vue")}}},CB2N:function(e,n){},Dep7:function(e,n){},GqJv:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{key:e.keys,staticClass:"dataContent",style:{width:e.slideHeight}},[t("router-view",{key:e.key})],1)},a=[],i={render:o,staticRenderFns:a};n.a=i},M93x:function(e,n,t){"use strict";function o(e){t("kjHg")}var a=t("pYh0"),i=t("S70B"),r=t("Z0/y"),s=o,d=r(a.a,i.a,!1,s,null,null);n.a=d.exports},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("VCXJ"),a=t("M93x"),i=t("YaEn"),r=t("+944"),s=t.n(r),d=t("Dep7"),c=(t.n(d),t("6VMs"));t.n(c);o.default.config.productionTip=!1,o.default.use(s.a),sessionStorage.weburl="http://monkey.queyoujia.com/",new o.default({el:"#app",render:function(e){return e(a.a)},router:i.a,template:"<App/>",components:{App:a.a}})},OWw4:function(e,n,t){"use strict";n.a={name:"topheader",data:function(){return{showheader:!0,stagetitle:"",channelss:["杭州____大冶棋牌","富阳____八道雀神"],value:"",Channel:null,selected:null,username:null,show1:"",show2:"",show3:"",showchannel:null}},methods:{channelex:function(e){console.log(e)},userout:function(){var e=this;sessionStorage.usid="",e.$router.replace({path:"/login",redirect:"/login"})},changec:function(){var e=this;console.log(e.Channel)}},watch:{},computed:{keys:function(){if(this.stagetitle=this.$route.name,self.username=sessionStorage.auth,"/rechargedetails2/rechargedetails2"==this.$route.path)return void(this.showheader=!1);self.username=sessionStorage.auth,this.showheader=!0}},mounted:function(){var e=this;if(console.log(location.search.indexOf("channel=fuyang")),-1!=location.search.indexOf("channel=hz"))e.show1="selected",e.show2=!1,e.show3=!1,e.showchannel="杭州",e.username=sessionStorage.auth;else if(-1!=location.search.indexOf("channel=fuyang"))e.username=sessionStorage.auth,e.show1=!1,e.show3=!1,e.show2="selected",e.showchannel="富阳";else{if(-1==location.search.indexOf("channel=default"))return void(e.username=sessionStorage.auth);e.username=sessionStorage.auth,e.show1=!1,e.show2=!1,e.show3="selected",e.showchannel="全国"}e.username=sessionStorage.auth}}},S70B:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"queYouStage"}},[t("router-view")],1)},a=[],i={render:o,staticRenderFns:a};n.a=i},SDlN:function(e,n){e.exports="data:image/png;base64,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"},YaEn:function(e,n,t){"use strict";var o,a,i,r,s,d,c=t("a3Yh"),l=t.n(c),h=t("VCXJ"),u=t("cigS"),p=t("7ajc"),m=t("A66B");h.default.use(u.a),n.a=new u.a({routes:[{path:"/login",name:"注册",component:m("login/index"),hidden:!0},{path:"/authredirect",component:m("login/authredirect"),hidden:!0},{path:"/mobile",name:"雀游后台手机版",component:m("mobile/mobile"),hidden:!0},{path:"/",component:m("login/index"),hidden:!0},{path:"/",component:p.default,redirect:"401",hidden:!0,noDropdown:!0,children:[{path:"401",name:"",component:m("errorPage/401")}]},{path:"/",component:p.default,redirect:"login",hidden:!0,noDropdown:!0,children:[{path:"login",name:"平台概况",component:m("login/index")}]},{path:"/recharge",component:p.default,redirect:"recharge/recharge",hidden:!0,noDropdown:!0,children:[{path:"recharge",name:"充值统计",component:m("recharge/recharge")}]},{path:"/manualdebit",component:p.default,redirect:"manualdebit/manualdebit",hidden:!0,noDropdown:!0,children:[{path:"manualdebit",name:"人工划账",component:m("manualdebit/manualdebit")}]},{path:"/platformagent",component:p.default,redirect:"platformagent/platformagent",hidden:!0,noDropdown:!0,children:[{path:"platformagent",name:" ",component:m("platformagent/platformagent")}]},{path:"/rechargedetails",component:p.default,redirect:"rechargedetails/rechargedetails",hidden:!0,noDropdown:!0,children:[{path:"rechargedetails",name:"充值明细",component:m("rechargedetails/rechargedetails")}]},{path:"/returndetails",component:p.default,redirect:"returndetails/returndetails",hidden:!0,noDropdown:!0,children:[{path:"returndetails",name:"返现明细",component:m("returndetails/returndetails")}]},{path:"/rechargedetails2",component:p.default,redirect:"rechargedetails2/rechargedetails2",hidden:!0,noDropdown:!0,children:[{path:"rechargedetails2",name:"0",component:m("rechargedetails2/rechargedetails2")}]},{path:"/privilege",component:p.default,redirect:"privilege/Privilege",hidden:!0,noDropdown:!0,children:[{path:"privilege",name:"权限设置",component:m("privilege/Privilege")}]},{path:"/promoters",component:p.default,redirect:"promoters/promoters",hidden:!0,noDropdown:!0,children:[{path:"promoters",name:"推广员授权",component:m("promoters/promoters")}]},{path:"/prodetail",component:p.default,redirect:"prodetail/prodetail",hidden:!0,noDropdown:!0,children:[{path:"prodetail",name:"推广员明细",component:m("prodetail/prodetail")}]},{path:"/menu",component:p.default,redirect:"menu/menu",hidden:!0,noDropdown:!0,children:[{path:"menu",name:"菜单管理",component:m("menu/menu")}]},{path:"/rgqz",component:p.default,redirect:"rgqz/rgqz",hidden:!0,noDropdown:!0,children:[{path:"rgqz",name:"人工清钻",component:m("rgqz/rgqz")}]},{path:"/zsjwcx",component:p.default,redirect:"zsjwcx/zsjwcx",hidden:!0,noDropdown:!0,children:[{path:"zsjwcx",name:"玩家账号钻石交往查询",component:m("zsjwcx/zsjwcx")}]},{path:"/ranking",component:p.default,redirect:"ranking/ranking",hidden:!0,noDropdown:!0,children:[{path:"ranking",name:"排行榜",component:m("ranking/ranking")}]},{path:"/detailpro",component:p.default,redirect:"detailpro/detailpro",hidden:!0,noDropdown:!0,children:[{path:"detailpro",name:"用户明细",component:m("detailpro/detailpro")}]},{path:"/giftset",component:p.default,redirect:"giftset/giftset",hidden:!0,noDropdown:!0,children:[{path:"giftset",name:"活动配置",component:m("giftset/giftset")}]},{path:"/smrz",component:p.default,redirect:"smrz/smrz",hidden:!0,noDropdown:!0,children:[{path:"smrz",name:"实名认证",component:m("smrz/smrz")}]},{path:"/withdrawals",component:p.default,redirect:"withdrawals/withdrawals",hidden:!0,noDropdown:!0,children:[{path:"withdrawals",name:"提现记录",component:m("withdrawals/withdrawals")}]},{path:"/luckdraw",component:p.default,redirect:"luckdraw/luckdraw",hidden:!0,noDropdown:!0,children:[{path:"luckdraw",name:"抽奖记录",component:m("luckdraw/luckdraw")}]},{path:"/authority",component:p.default,redirect:"authority/authority",hidden:!0,noDropdown:!0,children:[{path:"authority",name:"接口菜单",component:m("authority/authority")}]},{path:"/packageversion",component:p.default,redirect:"packageversion/packageversion",hidden:!0,noDropdown:!0,children:[{path:"packageversion",name:"游戏包上传配置",component:m("packageversion/packageversion")}]},{path:"/analysis",component:p.default,redirect:"analysis/analysis",hidden:!0,noDropdown:!0,children:[{path:"analysis",name:"人数分析",component:m("analysis/analysis")}]},{path:"/channels",component:p.default,redirect:"channels/channels",hidden:!0,noDropdown:!0,children:[{path:"channels",name:"区域管理",component:m("channels/channels")}]},{path:"/charts",component:p.default,redirect:"charts/charts",hidden:!0,noDropdown:!0,children:[{path:"charts",name:"用户查询",component:m("charts/charts")}]},{path:"/redEnvelope",component:p.default,redirect:"redEnvelope/redEnvelope",hidden:!0,noDropdown:!0,children:[{path:"redEnvelope",name:"红包记录",component:m("redEnvelope/redEnvelope")}]},{path:"/comsumelist",component:p.default,redirect:"comsumelist/comsumelist",hidden:!0,noDropdown:!0,children:[{path:"comsumelist",name:"消耗记录",component:m("comsumelist/comsumelist")}]},{path:"/purpose",component:p.default,redirect:"purpose/purpose",hidden:!0,noDropdown:!0,children:[{path:"purpose",name:"代理申请意向",component:m("purpose/purpose")}]},{path:"/perdetails",component:p.default,redirect:"perdetails/perdetails",hidden:!0,noDropdown:!0,children:[{path:"perdetails",name:"提现/返现明细",component:m("perdetails/perdetails")}]},{path:"/commissionReturn",component:p.default,redirect:"commissionReturn/commissionReturn",hidden:!0,noDropdown:!0,children:[{path:"commissionReturn",name:"代理返佣",component:m("commissionReturn/commissionReturn")}]},{path:"/outline",component:p.default,redirect:"outline/outline",hidden:!0,noDropdown:!0,children:[{path:"outline",name:"用户违规处理",component:m("outline/outline")}]},{path:"/custouser",component:p.default,redirect:"custouser/custouser",hidden:!0,noDropdown:!0,children:[{path:"custouser",name:"代理下级消耗",component:m("custouser/custouser")}]},{path:"/diatocoin",component:p.default,redirect:"diatocoin/diatocoin",hidden:!0,noDropdown:!0,children:[{path:"diatocoin",name:"兑换中心",component:m("diatocoin/diatocoin")}]},{path:"/agent",component:p.default,redirect:"agent/agent",hidden:!0,noDropdown:!0,children:[{path:"agent",name:"代理概况",component:m("agent/agent")}]},(o={path:"/platformagent/login",component:p.default,redirect:"/login",hidden:!0,noDropdown:!0},l()(o,"component",m("login/index")),l()(o,"hidden",!0),o),(a={path:"/returndetails/login",component:p.default,redirect:"/login",hidden:!0,noDropdown:!0},l()(a,"component",m("login/index")),l()(a,"hidden",!0),a),(i={path:"/manualdebit/login",component:p.default,redirect:"/login",hidden:!0,noDropdown:!0},l()(i,"component",m("login/index")),l()(i,"hidden",!0),i),(r={path:"/rechargedetails/login",component:p.default,redirect:"/login",hidden:!0,noDropdown:!0},l()(r,"component",m("login/index")),l()(r,"hidden",!0),r),(s={path:"/recharge/login",component:p.default,redirect:"/login",hidden:!0,noDropdown:!0},l()(s,"component",m("login/index")),l()(s,"hidden",!0),s),(d={path:"/recharge/login",component:p.default,redirect:"/privilege",hidden:!0,noDropdown:!0},l()(d,"component",m("login/index")),l()(d,"hidden",!0),d),{path:"/log",component:p.default,redirect:"log/log",hidden:!0,noDropdown:!0,children:[{path:"log",name:"操作日志",component:m("log/log")}]},{path:"/transfer",component:p.default,redirect:"transfer/transfer",hidden:!0,noDropdown:!0,children:[{path:"transfer",name:"代理后台转账权限",component:m("transfer/transfer")}]},{path:"/teammove",component:p.default,redirect:"teammove/teammove",hidden:!0,noDropdown:!0,children:[{path:"teammove",name:"代理下级会员转移",component:m("teammove/teammove")}]}]})},ZQ3Q:function(e,n,t){"use strict";n.a={name:"dataContent",data:function(){return{slideHeight:null}},computed:{key:function(){return void 0!==this.$route.name?this.$route.name+ +new Date:this.$route+ +new Date},keys:function(){}}}},aSwe:function(e,n){},fl7Z:function(e,n,t){"use strict";var o=t("BMa3"),a=t.n(o),i=t("DEjr");t.n(i);n.a={name:"slidebar",data:function(){return{menuItems:[],aviheight:{},game1:null,game2:null,game3:null,game4:null,slideHeight:"",bglogo:null}},methods:{handleOpen:function(e,n){console.log(e,n)},handleClose:function(e,n){console.log(e,n)},changegame:function(){var e=this;JSON.parse(localStorage.union_operation_accountInfo).channels.forEach(function(n,t){console.log(n.id),1==n.id&&(e.game1=!0),2==n.id&&(e.game2=!0),3==n.id&&(e.game3=!0),8==n.id&&(e.game4=!0)})},godaye:function(){sessionStorage.cid="1",sessionStorage.channel="hz",document.cookie="cid=1;path=/;",document.cookie="channel=hz;path=/;",window.location.href="http://"+window.location.host+"/html/qyStage/?cid=1&channel=hz/#/platformagent"},badao:function(){sessionStorage.cid="2",sessionStorage.channel="fuyang",document.cookie="cid=2;path=/;",document.cookie="channel=fuyang;path=/;",window.location.href="http://"+window.location.host+"/html/qyStage/?cid=2&channel=fuyang/#/platformagent"},jzsx:function(){sessionStorage.cid="3",sessionStorage.channel="default",document.cookie="cid=3;path=/;",document.cookie="channel=default;path=/;",window.location.href="http://"+window.location.host+"/html/qyStage/?cid=3&channel=default/#/platformagent"},ssshui:function(){sessionStorage.cid="8",sessionStorage.channel="default",document.cookie="cid=8;path=/;",document.cookie="channel=default;path=/;",window.location.href="http://"+window.location.host+"/html/qyStage/?cid=8&channel=default/#/platformagent"}},mounted:function(){var e=this;if(a.a.get("http://monkey.queyoujia.com/login/info",{params:{}}).then(function(n){console.log(n.data.data.menus),e.menuItems=n.data.data.menus,"平台概况"==e.menuItems[0].name?console.log("xiba"):e.menuItems=n.data.data.menus.reverse()}).catch(function(e){console.log(e)}),-1!=location.search.indexOf("channel=hz"))console.log(1),e.bglogo="../../../static/dayelogo.png";else if(-1!=location.search.indexOf("channel=fuyang"))console.log(22),e.bglogo="../../../static/bdlogo.png";else if(-1!=location.search.indexOf("channel=default"))e.bglogo="../../../static/ssshui.png";else if(-1!=location.search.indexOf("cid=1"))e.bglogo="../../../static/dayelogo.png";else if(-1!=location.search.indexOf("cid=2"))e.bglogo="../../../static/bdlogo.png";else if(-1!=location.search.indexOf("cid=3"))e.bglogo="../../../static/ssshui.png";else{if(-1==location.search.indexOf("cid=8"))return;e.bglogo="../../../static/ssshui.png"}},computed:{keys:function(){var e=this;window.screen.availHeight<=770?e.slideHeight="720px":window.screen.availHeight>770&&window.screen.availHeight<=910?e.slideHeight="830px":window.screen.availHeight>910&&window.screen.availHeight<=1055?e.slideHeight="920px":window.screen.availHeight>1055&&window.screen.availHeight<=1090?e.slideHeight="955px":e.slideHeight=window.screen.availHeight-20+"px"}}}},kjHg:function(e,n){},lpu7:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"topheader"},[o("div",{staticClass:"userout"},[o("font",{staticClass:"logout"},[o("select",{staticClass:"selectchannle",attrs:{disabled:"disabled"},on:{change:e.channelex}},[o("option",{attrs:{value:"hz"},domProps:{selected:e.show1}},[e._v("杭州")]),e._v(" "),o("option",{attrs:{value:"fuyang"},domProps:{selected:e.show2}},[e._v("富阳")]),e._v(" "),o("option",{attrs:{value:"default"},domProps:{selected:e.show3}},[e._v("全国")])]),o("span",{staticStyle:{color:"#409EFF"}},[e._v(e._s(e.username)+"  ")]),e._v("欢迎您！\n    "),o("img",{staticClass:"getout",attrs:{src:t("SDlN"),alt:"暂无图片",width:"7%"},on:{click:e.userout}})])],1),e._v(" "),o("div",{staticClass:"line_router"}),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.showheader,expression:"showheader"}],key:e.keys,staticClass:"routername"},[o("h3",[e._v(e._s(e.stagetitle))])])])},a=[],i={render:o,staticRenderFns:a};n.a=i},msXg:function(e,n,t){function o(e){var n=a[e];return n?Promise.all(n.slice(1).map(t.e)).then(function(){return t(n[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var a={"./agent/agent.vue":["M82s",40],"./analysis/analysis.vue":["E282",1],"./authority/authority.vue":["ZqYg",5],"./channels/channels.vue":["sjy6",39],"./charts/charts.vue":["ZehD",38],"./commissionReturn/commissionReturn.vue":["G+1q",37],"./comsumelist/comsumelist.vue":["bwJb",36],"./custouser/custouser.vue":["R3sH",35],"./detailpro/detailpro.vue":["YsSo",34],"./diatocoin/diatocoin.vue":["L/hR",33],"./errorPage/401.vue":["/awF",6],"./errorPage/404.vue":["Ygqk",32],"./giftset/giftset.vue":["PAct",4],"./layout/Layout.vue":["7ajc"],"./layout/datacontent.vue":["8H3O"],"./layout/header.vue":["sdKx"],"./layout/mobile.vue":["ZdiF",42],"./layout/navbar.vue":["GUrl",31],"./layout/slidebar.vue":["y0LP"],"./log/log.vue":["rymr",30],"./login/authredirect.vue":["ASrc",41],"./login/index.vue":["fAfb",2],"./luckdraw/luckdraw.vue":["++E5",29],"./manualdebit/manualdebit.vue":["+TJM",28],"./menu/menu.vue":["YWUw",27],"./mobile/mobile.vue":["V/u7",26],"./outline/outline.vue":["N7T3",25],"./packageversion/packageversion.vue":["id6H",24],"./perdetails/perdetails.vue":["4Zdh",23],"./platformagent/platformagent.vue":["7Tjj",0],"./privilege/Privilege.vue":["B+Ze",3],"./prodetail/prodetail.vue":["0CQ7",22],"./promoters/prodetail.vue":["GZov",21],"./promoters/promoters.vue":["ZpVd",20],"./purpose/purpose.vue":["trnI",19],"./ranking/ranking.vue":["Wo/k",18],"./recharge/recharge.vue":["UNc5",17],"./rechargedetails/rechargedetails.vue":["U6Hp",15],"./rechargedetails2/rechargedetails2.vue":["DUCL",16],"./redEnvelope/redEnvelope.vue":["L27d",14],"./returndetails/returndetails.vue":["JDH4",13],"./rgqz/rgqz.vue":["iR6v",12],"./smrz/smrz.vue":["Tp2w",11],"./teammove/teammove.vue":["V3Dw",10],"./transfer/transfer.vue":["SQy3",9],"./withdrawals/withdrawals.vue":["kwQ1",8],"./zsjwcx/zsjwcx.vue":["+hf8",7]};o.keys=function(){return Object.keys(a)},e.exports=o,o.id="msXg"},pYh0:function(e,n,t){"use strict";var o=t("1z0p"),a=(t.n(o),t("zEeJ"));t.n(a);n.a={name:"queYouStage"}},pqQ4:function(e,n){},rt65:function(e,n){},sdKx:function(e,n,t){"use strict";function o(e){t("CB2N")}Object.defineProperty(n,"__esModule",{value:!0});var a=t("OWw4"),i=t("lpu7"),r=t("Z0/y"),s=o,d=r(a.a,i.a,!1,s,"data-v-669b4aeb",null);n.default=d.exports},y0LP:function(e,n,t){"use strict";function o(e){t("pqQ4")}Object.defineProperty(n,"__esModule",{value:!0});var a=t("fl7Z"),i=t("8yoK"),r=t("Z0/y"),s=o,d=r(a.a,i.a,!1,s,"data-v-28919b81",null);n.default=d.exports},zEeJ:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.f366b4cdc999c2fac131.js.map