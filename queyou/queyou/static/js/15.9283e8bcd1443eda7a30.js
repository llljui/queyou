webpackJsonp([15],{"83qM":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"rechargeDetails"},[a("el-form",{staticClass:"form-inline",attrs:{inline:!0,model:e.formInline}},[a("el-row",{staticClass:"searchAll"},[a("el-col",{staticClass:"formSearch",attrs:{span:24}},[a("el-form",{attrs:{inline:!0,model:e.searchform}},[a("el-form-item",{attrs:{label:""}},[a("el-input",{attrs:{placeholder:"游戏ID"},model:{value:e.searchform.user,callback:function(t){e.$set(e.searchform,"user",t)},expression:"searchform.user"}})],1),e._v(" "),a("el-form-item",{attrs:{label:""}},[a("el-input",{attrs:{placeholder:"订单号"},model:{value:e.searchform.region,callback:function(t){e.$set(e.searchform,"region",t)},expression:"searchform.region"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")]),e._v(" "),a("el-input",{staticClass:"searchRest",attrs:{type:"reset",value:"重置"}}),e._v(" "),a("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"danger"},on:{click:e.toexcel}},[e._v("开启excel功能")])],1)],1)],1)],1),e._v(" "),a("el-form-item",{staticClass:"chosedata",attrs:{label:""}},[a("el-row",[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"时间段"},on:{change:e.datapicker1},model:{value:e.formInline.date1,callback:function(t){e.$set(e.formInline,"date1",t)},expression:"formInline.date1"}})],1),e._v(" "),a("el-col",{staticClass:"line",attrs:{span:2}},[e._v("  至")]),e._v(" "),a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"时间段"},on:{change:e.datapicker2},model:{value:e.formInline.date2,callback:function(t){e.$set(e.formInline,"date2",t)},expression:"formInline.date2"}})],1)],1),e._v(" "),a("el-row",{staticStyle:{float:"right"}},[a("el-col",{staticClass:"chosebtn",attrs:{span:24}},[a("el-button",{on:{click:e.yesterDay}},[e._v("昨天")]),e._v(" "),a("el-button",{on:{click:e.nerarSeDay}},[e._v("最近七天")]),e._v(" "),a("el-button",{on:{click:e.nearMonth}},[e._v("最近1个月")]),e._v(" "),a("el-button",{on:{click:e.nearYear}},[e._v("最近一年")])],1)],1)],1)],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{prop:"orderId",label:"订单号",width:"280",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"uid",label:"游戏ID",width:"100",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"nickname",label:"昵称","show-overflow-tooltip":"",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"price",label:"人民币",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"depDiamond",label:"钻石",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"channel",label:"充值方式",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"dateline",width:"200",label:"付款时间",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"body",label:"备注",align:"center"}})],1),e._v(" "),a("div",{key:e.key,staticClass:"pagetag"},[a("el-pagination",{attrs:{"current-page":e.currentPage1,"page-size":1,layout:"prev, pager, next, jumper",total:e.pageSize},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage1=t}}})],1),e._v(" "),a("iframe",{directives:[{name:"show",rawName:"v-show",value:e.toexcelshow,expression:"toexcelshow"}],staticClass:"toex",attrs:{src:e.eurl}}),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.toexcelshow,expression:"toexcelshow"}],staticClass:"bord",on:{click:e.tobord}})],1)},o=[],i={render:n,staticRenderFns:o};t.a=i},U6Hp:function(e,t,a){"use strict";function n(e){a("aI/w")}Object.defineProperty(t,"__esModule",{value:!0});var o=a("nK54"),i=a("83qM"),r=a("Z0/y"),l=n,c=r(o.a,i.a,!1,l,"data-v-bd0e1e6c",null);t.default=c.exports},"aI/w":function(e,t,a){var n=a("qDZJ");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("FIqI")("a5b1f9a0",n,!0,{})},nK54:function(e,t,a){"use strict";var n=a("BMa3"),o=a.n(n),i=a("DEjr"),r=a.n(i);t.a={name:"rechargeDetails",data:function(){return{sTime:null,eTime:null,toexcelshow:!1,eurl:null,pick1:!1,pick2:!1,lvs:0,formInline:{user:"",region:"",type:"",date1:null,date2:null,neartime:""},searchform:{user:"",region:""},tableData:[],currentPage1:1,pageSize:0,toexcelTime1:null,toexcelTime2:null}},methods:{tobord:function(){var e=this;e.toexcelshow=!e.toexcelshow},toexcel:function(){var e=this;e.toexcelshow=!e.toexcelshow;var t=null,a=null;console.log(11221),location.search.replace(/\?/g,"").split("&").forEach(function(e,n){e.indexOf("uid="),-1!=e.indexOf("cid=")&&(a=e.substring(e.indexOf("=")+1)),-1!=e.indexOf("channel=")&&(t=e.substring(e.indexOf("=")+1),-1!=e.indexOf("cid=")&&(t="hz"))}),e.eurl="http://monkey.queyoujia.com/html/toexcel?cid="+a+"&channel="+t+"&startTime="+e.toexcelTime1+"&endTime="+e.toexcelTime2+"&weburl=/rebate/rechargeExcel&random="+Math.random()},onSubmit:function(){var e=this;e.pick1=!1,e.pick2=!1,e.tableData=[];var t=[],a={uid:this.searchform.user,orderId:this.searchform.region};o.a.post("http://monkey.queyoujia.com/rebate/recharge",r.a.stringify(a),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(a){console.log(a.data.data.list),e.pageSize=a.data.data.total,t=[a.data.data.list],t=t[0];for(var n in t)e.tableData.push(t[n])}).catch(function(e){console.log(e)})},handleEdit:function(e,t){console.log(e,t)},handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){console.log("当前页: "+e);var t=this;if(console.log(this.lvs),1==t.pick1&&1==t.pick2){console.log("pick");var a=[];t.tableData=[];var n=[],i=function(e,t){var a={timestamp1:0,timestamp2:0};return a.timestamp1=Number(Date.parse(e)/1e3),a.timestamp2=Number(Date.parse(t)/1e3)+86399,a}(t.formInline.date1,t.formInline.date2),l={startTime:i.timestamp1,endTime:i.timestamp2,page:e};t.sTime=i.timestamp1,t.eTime=i.timestamp2,o.a.post("http://monkey.queyoujia.com/rebate/recharge",r.a.stringify(l),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){n=[e.data.data],n=n[0].list,a=[e.data.data],t.pageSize=a[0].total;for(var o in n)t.tableData.push(n[o])}).catch(function(e){console.log(e)})}if(t.lvs>0){if(console.log(this.lvs),4==this.lvs){var a=[];t.tableData=[];var n=[],c=new Date;c=Number(c.setHours("00","00","00","0"))/1e3-1;var s=c-31536e3+1,l={startTime:s,endTime:c,page:e};return t.sTime=s,t.eTime=c,void o.a.post("http://monkey.queyoujia.com/rebate/recharge",r.a.stringify(l),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){n=[e.data.data],n=n[0].list,a=[e.data.data],t.pageSize=a[0].total;for(var o in n)t.tableData.push(n[o])}).catch(function(e){console.log(e)})}if(3==t.lvs){var a=[];t.tableData=[];var n=[],c=new Date;c=Number(c.setHours("00","00","00","0"))/1e3-1;var s=c-86400*function(){var e=new Date,t=e.getMonth();return e.setMonth(t+1),e.setDate(0),e.getDate()}()+1;console.log(s);var l={startTime:s,endTime:c,page:e};return t.sTime=s,t.eTime=c,void o.a.post("http://monkey.queyoujia.com/rebate/recharge",r.a.stringify(l),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){n=[e.data.data],n=n[0].list,a=[e.data.data],t.pageSize=a[0].total;for(var o in n)t.tableData.push(n[o])}).catch(function(e){console.log(e)})}if(2==t.lvs){var a=[];t.tableData=[];var a=[];t.tableData=[];var n=[],c=new Date;c=Number(c.setHours("00","00","00","0"))/1e3-1;var s=c-6048e3+1,l={startTime:s,endTime:c,page:e};return t.sTime=s,t.eTime=c,void o.a.post("http://monkey.queyoujia.com/rebate/recharge",r.a.stringify(l),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){n=[e.data.data],n=n[0].list,a=[e.data.data],t.pageSize=a[0].total;for(var o in n)t.tableData.push(n[o])}).catch(function(e){console.log(e)})}console.log("lv1");var a=[];t.tableData=[];var n=[],c=new Date;c=Number(c.setHours("00","00","00","0"))/1e3-1;var s=c-86400+1;console.log(c);var l={startTime:s,endTime:c,page:e};t.sTime=s,t.eTime=c,o.a.post("http://monkey.queyoujia.com/rebate/recharge",r.a.stringify(l),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){n=[e.data.data],n=n[0].list,a=[e.data.data],t.pageSize=a[0].total;for(var o in n)t.tableData.push(n[o])}).catch(function(e){console.log(e)})}else{console.log("meidomngxi"),t.tableData=[];var n=[];e=e.toString();var l={page:e,startTime:t.sTime,endTime:t.eTime};o.a.post("http://monkey.queyoujia.com/rebate/recharge",r.a.stringify(l),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){n=[e.data.data],n=n[0].list,console.log(e);for(var a in n)t.tableData.push(n[a])}).catch(function(e){console.log(e)})}},yesterDay:function(){var e=this;e.pick1=!1,e.pick2=!1,e.lvs=1,e.currentPage1=1;var t=[];e.tableData=[];var a=[],n=new Date;n=Number(n.setHours("00","00","00","0"))/1e3-1;var i=n-86400+1;console.log(n);var l={startTime:i,endTime:n};e.toexcelTime1=i,e.toexcelTime2=n,o.a.post("http://monkey.queyoujia.com/rebate/recharge",r.a.stringify(l),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(n){a=[n.data.data],a=a[0].list,t=[n.data.data],e.pageSize=t[0].total;for(var o in a)e.tableData.push(a[o])}).catch(function(e){console.log(e)})},nerarSeDay:function(){var e=this;e.pick1=!1,e.pick2=!1,e.currentPage1=1,e.lvs=2;var t=[];e.tableData=[];var a=[],n=new Date;n=Number(n.setHours("00","00","00","0"))/1e3-1;var i=n-604800+1,l={startTime:i,endTime:n};e.toexcelTime1=i,e.toexcelTime2=n,o.a.post("http://monkey.queyoujia.com/rebate/recharge",r.a.stringify(l),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(n){a=[n.data.data],a=a[0].list,t=[n.data.data],e.pageSize=t[0].total;for(var o in a)e.tableData.push(a[o])}).catch(function(e){console.log(e)})},nearMonth:function(){var e=this;e.pick1=!1,e.pick2=!1,e.currentPage1=1,e.lvs=3;var t=[];e.tableData=[];var a=[],n=new Date;n=Number(n.setHours("00","00","00","0"))/1e3-1;var i=n-86400*function(){var e=new Date,t=e.getMonth();return e.setMonth(t+1),e.setDate(0),e.getDate()}()+1,l={startTime:i,endTime:n};e.toexcelTime1=i,e.toexcelTime2=n,o.a.post("http://monkey.queyoujia.com/rebate/recharge",r.a.stringify(l),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(n){a=[n.data.data],a=a[0].list,t=[n.data.data],e.pageSize=t[0].total;for(var o in a)e.tableData.push(a[o])}).catch(function(e){console.log(e)})},nearYear:function(){var e=this;e.pick1=!1,e.pick2=!1,e.currentPage1=1,e.lvs=4;var t=[];e.tableData=[];var a=[],n=new Date;n=Number(n.setHours("00","00","00","0"))/1e3-1;var i=n-31536e3+1,l={startTime:i,endTime:n};e.toexcelTime1=i,e.toexcelTime2=n,o.a.post("http://monkey.queyoujia.com/rebate/recharge",r.a.stringify(l),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(n){a=[n.data.data],a=a[0].list,t=[n.data.data],e.pageSize=t[0].total;for(var o in a)e.tableData.push(a[o])}).catch(function(e){console.log(e)})},datapicker1:function(){var e=this;e.pick1=!0,e.lvs=0;var t=[];e.tableData=[];var a=[],n=function(e,t){var a={timestamp1:0,timestamp2:0};return a.timestamp1=Number(Date.parse(e)/1e3),a.timestamp2=Number(Date.parse(t)/1e3)+86399,a}(e.formInline.date1,e.formInline.date2);if(n.timestamp1&&n.timestamp2)if(n.timestamp2-n.timestamp1>0){var i={startTime:n.timestamp1,endTime:n.timestamp2};e.toexcelTime1=startTime,e.toexcelTime2=endTime,o.a.post("http://monkey.queyoujia.com/rebate/recharge",r.a.stringify(i),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(n){a=[n.data.data],a=a[0].list,t=[n.data.data],e.pageSize=t[0].total;for(var o in a)e.tableData.push(a[o])}).catch(function(e){console.log(e)})}else this.$notify({title:"警告",message:"请选择真确的时间",type:"warning"})},datapicker2:function(){var e=this;e.lvs=0,e.pick2=!0;var t=[];e.tableData=[];var a=[],n=function(e,t){var a={timestamp1:0,timestamp2:0};return a.timestamp1=Number(Date.parse(e)/1e3),a.timestamp2=Number(Date.parse(t)/1e3)+86399,a}(e.formInline.date1,e.formInline.date2);if(n.timestamp1&&n.timestamp2)if(n.timestamp2-n.timestamp1>0){var i={startTime:n.timestamp1,endTime:n.timestamp2};e.toexcelTime1=n.timestamp1,e.toexcelTime2=n.timestamp2,o.a.post("http://monkey.queyoujia.com/rebate/recharge",r.a.stringify(i),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(n){a=[n.data.data],a=a[0].list,t=[n.data.data],e.pageSize=t[0].total;for(var o in a)e.tableData.push(a[o])}).catch(function(e){console.log(e)})}else this.$notify({title:"警告",message:"请选择真确的时间",type:"warning"})}},computed:{key:function(){}},watch:{},mounted:function(){var e=this;e.tableData=[];var t=[],a=[],n={uid:this.searchform.user,orderId:this.searchform.region};o.a.post("http://monkey.queyoujia.com/rebate/recharge",r.a.stringify(n),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(n){t=[n.data.data],t=t[0].list,a=[n.data.data],e.pageSize=a[0].total;for(var o in t)e.tableData.push(t[o])}).catch(function(e){console.log(e)})}}},qDZJ:function(e,t,a){t=e.exports=a("I71c")(!0),t.push([e.i,"h1[data-v-bd0e1e6c],h2[data-v-bd0e1e6c]{font-weight:400}ul[data-v-bd0e1e6c]{list-style-type:none;padding:0}li[data-v-bd0e1e6c]{display:inline-block;margin:0 10px}a[data-v-bd0e1e6c]{color:#42b983}.rechargeDetails[data-v-bd0e1e6c]{margin-top:10px}.searchAll[data-v-bd0e1e6c]{position:absolute;margin-top:30px}.form-inline[data-v-bd0e1e6c]{padding-bottom:18px}.recharge[data-v-bd0e1e6c]{margin-top:10px}.chosebtn[data-v-bd0e1e6c],.chosedata[data-v-bd0e1e6c]{float:right}.chosebtn button[data-v-bd0e1e6c]{height:1.8rem;margin-top:5px;line-height:50%}.formSearch[data-v-bd0e1e6c]{margin-top:-10px}.searchRest[data-v-bd0e1e6c]{width:60px;height:36px;margin-left:10px}.pagetag[data-v-bd0e1e6c]{float:right}.toex[data-v-bd0e1e6c]{width:80vw;height:30vh;z-index:7}.bord[data-v-bd0e1e6c],.toex[data-v-bd0e1e6c]{position:fixed;top:0;left:0;bottom:0;right:0;margin:auto}.bord[data-v-bd0e1e6c]{width:100vw;height:100vh;background:#000;opacity:.6;z-index:6}","",{version:3,sources:["C:/Users/pc/Desktop/monkey后台总代码/queyou/src/page/rechargedetails/rechargedetails.vue"],names:[],mappings:"AACA,wCACE,eAAoB,CACrB,AACD,oBACE,qBAAsB,AACtB,SAAW,CACZ,AACD,oBACE,qBAAsB,AACtB,aAAe,CAChB,AACD,mBACE,aAAe,CAChB,AACD,kCAAkC,eAAgB,CACjD,AACD,4BAA4B,kBAAmB,eAAgB,CAC9D,AACD,8BAA8B,mBAAoB,CACjD,AACD,2BAA2B,eAAiB,CAC3C,AAGD,uDAA2B,WAAa,CACvC,AACD,kCAAkC,cAAe,eAAgB,eAAiB,CACjF,AACD,6BAA6B,gBAAkB,CAC9C,AACD,6BAA6B,WAAW,YAAa,gBAAkB,CACtE,AACD,0BAA2E,WAAa,CACvF,AACD,uBAAuB,WAAY,YAAa,AAA8D,SAAU,CACvH,AACD,8CAFgD,eAAgB,MAAM,OAAQ,SAAU,QAAS,WAAa,CAG7G,AADD,uBAAuB,YAAa,aAAc,AAA8D,gBAAkB,WAAa,SAAW,CACzJ",file:"rechargedetails.vue",sourcesContent:["\nh1[data-v-bd0e1e6c], h2[data-v-bd0e1e6c] {\r\n  font-weight: normal;\n}\nul[data-v-bd0e1e6c] {\r\n  list-style-type: none;\r\n  padding: 0;\n}\nli[data-v-bd0e1e6c] {\r\n  display: inline-block;\r\n  margin: 0 10px;\n}\na[data-v-bd0e1e6c] {\r\n  color: #42b983;\n}\n.rechargeDetails[data-v-bd0e1e6c]{margin-top: 10px\n}\n.searchAll[data-v-bd0e1e6c]{position: absolute;margin-top: 30px\n}\n.form-inline[data-v-bd0e1e6c]{padding-bottom:18px;\n}\n.recharge[data-v-bd0e1e6c]{margin-top: 10px;\n}\n.chosedata[data-v-bd0e1e6c]{float: right;\n}\n.chosebtn[data-v-bd0e1e6c]{float: right;\n}\n.chosebtn button[data-v-bd0e1e6c]{height: 1.8rem;margin-top: 5px;line-height: 50%;\n}\n.formSearch[data-v-bd0e1e6c]{margin-top: -10px;\n}\n.searchRest[data-v-bd0e1e6c]{width:60px;height: 36px;margin-left: 10px;\n}\n.pagetag[data-v-bd0e1e6c]{/* position: absolute;bottom: 5px;right: 15px; */float: right;\n}\n.toex[data-v-bd0e1e6c]{width: 80vw;height: 30vh;position: fixed;top:0;left: 0;bottom: 0;right: 0;margin: auto;z-index: 7\n}\n.bord[data-v-bd0e1e6c]{width: 100vw;height: 100vh;position: fixed;top:0;left: 0;bottom: 0;right: 0;margin: auto;background: black;opacity: 0.6;z-index: 6;\n}\r\n"],sourceRoot:""}])}});
//# sourceMappingURL=15.9283e8bcd1443eda7a30.js.map