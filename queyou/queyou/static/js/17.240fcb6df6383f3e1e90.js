webpackJsonp([17],{"63DB":function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"recharge"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.openmodal,expression:"openmodal"}],staticClass:"jModal",style:{width:t.modalWidth,height:t.modalHeight}},[e("header",[t._v("至"+t._s(t.tabetitle)+"的数据")]),t._v(" "),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData2,"row-class-name":t.tableRowClassName}},[e("el-table-column",{attrs:{prop:"date",label:"订单号",width:"180"}}),t._v(" "),e("el-table-column",{attrs:{prop:"name",label:"游戏ID",width:"180"}}),t._v(" "),e("el-table-column",{attrs:{prop:"address",label:"昵称"}}),t._v(" "),e("el-table-column",{attrs:{prop:"date",label:"人民币",width:"180"}}),t._v(" "),e("el-table-column",{attrs:{prop:"name",label:"钻石",width:"180"}}),t._v(" "),e("el-table-column",{attrs:{prop:"address",label:"充值方式"}}),t._v(" "),e("el-table-column",{attrs:{prop:"date",label:"付款时间",width:"180"}}),t._v(" "),e("el-table-column",{attrs:{prop:"name",label:"备注",width:"180"}})],1)],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.openbor,expression:"openbor"}],key:t.borkey,staticClass:"j-bor",style:{width:t.borWidth,height:t.borHeight},on:{click:t.closebor}}),t._v(" "),e("el-form",{staticClass:"form-inline",attrs:{inline:!0,model:t.formInline}},[e("el-row",{staticClass:"searchAll"},[e("el-checkbox",{attrs:{label:"以天为单位","data-lv":t.lv1,name:"type"},on:{change:t.byday}}),t._v(" "),e("el-checkbox",{attrs:{label:"以月为单位","data-lv":t.lv2,name:"type"},on:{change:t.bymonth}}),t._v(" "),e("el-checkbox",{attrs:{label:"以年为单位","data-lv":t.lv3,name:"type"},on:{change:t.byyear}})],1),t._v(" "),e("el-form-item",{staticClass:"chosedata",attrs:{label:""}},[e("el-row",[e("el-col",{attrs:{span:11}},[e("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"时间段"},on:{change:t.datapicker1},model:{value:t.formInline.date1,callback:function(a){t.$set(t.formInline,"date1",a)},expression:"formInline.date1"}})],1),t._v(" "),e("el-col",{staticClass:"line",attrs:{span:2}},[t._v("  至")]),t._v(" "),e("el-col",{attrs:{span:11}},[e("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"时间段"},on:{change:t.datapicker2},model:{value:t.formInline.date2,callback:function(a){t.$set(t.formInline,"date2",a)},expression:"formInline.date2"}})],1)],1),t._v(" "),e("el-row",{staticStyle:{float:"right"}},[e("el-col",{staticClass:"chosebtn",attrs:{span:24}},[e("el-button",{on:{click:t.yesterDay}},[t._v("昨天")]),t._v(" "),e("el-button",{on:{click:t.nerarSeDay}},[t._v("最近七天")]),t._v(" "),e("el-button",{on:{click:t.nearMonth}},[t._v("最近1个月")]),t._v(" "),e("el-button",{on:{click:t.nearYear}},[t._v("最近一年")])],1)],1)],1)],1),t._v(" "),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[e("el-table-column",{attrs:{prop:"time",label:"日期","show-overflow-tooltip":"",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{prop:"prices","show-overflow-tooltip":"",align:"center",label:"付款金额（元）"}}),t._v(" "),e("el-table-column",{attrs:{prop:"uid","show-overflow-tooltip":"",align:"center",label:"付费人数"}}),t._v(" "),e("el-table-column",{attrs:{prop:"count","show-overflow-tooltip":"",align:"center",label:"付费次数"}}),t._v(" "),e("el-table-column",{attrs:{align:"center",label:"付款明细"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){t.handleEdit(a.$index,a.row)}}},[t._v("查看明细")])]}}])})],1),t._v(" "),e("div",{key:t.key,staticClass:"pagetag"},[e("el-pagination",{attrs:{"current-page":t.currentPage1,"page-size":1,layout:"prev, pager, next, jumper",total:t.pageSize},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(a){t.currentPage1=a}}})],1)],1)},n=[],i={render:o,staticRenderFns:n};a.a=i},MQqs:function(t,a,e){var o=e("ayia");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e("FIqI")("0a3a1fac",o,!0,{})},UNc5:function(t,a,e){"use strict";function o(t){e("MQqs")}Object.defineProperty(a,"__esModule",{value:!0});var n=e("UVXc"),i=e("63DB"),r=e("Z0/y"),l=o,s=r(n.a,i.a,!1,l,"data-v-16281b6f",null);a.default=s.exports},UVXc:function(t,a,e){"use strict";var o=e("BMa3"),n=e.n(o),i=e("DEjr"),r=e.n(i);a.a={name:"recharge",data:function(){return{lv1:!1,lv2:!1,lv3:!1,pick1:!1,pick2:!1,lvs:0,openbor:!1,openmodal:!1,borWidth:"",borHeight:"",modalWidth:"",modalHeight:"",formInline:{user:"",region:"",type:"",date1:"",date2:"",neartime:""},searchform:{user:"",region:""},tableData:[],currentPage1:1,pageSize:null,tabetitle:"",tableData2:[]}},methods:{closebor:function(){var t=this;t.openbor=!1,t.openmodal=!1},tableRowClassName:function(t,a){return 1===a?"info-row":3===a?"positive-row":""},byday:function(){var t=this;if(t.pick1=!1,t.pick2=!1,t.lvs=0,0==t.lv1?t.lv1=!0:t.lv1=!1,0==t.lv2&&0==t.lv3){var a={};(t.lv1=!0)&&(n.a.post("http://monkey.queyoujia.com/rebate/daystatistics",r.a.stringify(a),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(a){var e=[];t.tableData=[],e=[a.data.data],e=e[0].list,t.pageSize=a.data.data.total,e.forEach(function(a,e){t.tableData.push(a)})}).catch(function(t){console.log(t)}),console.log(t.lv1))}},bymonth:function(){var t=this;if(console.log("ll"),t.pick1=!1,t.pick2=!1,t.lvs=0,0==t.lv2?t.lv2=!0:t.lv2=!1,0==t.lv3){var a={};1==t.lv2&&n.a.post("http://monkey.queyoujia.com/rebate/monthstatistics",r.a.stringify(a),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(a){var e=[];t.tableData=[],e=[a.data.data],e=e[0].list,t.pageSize=a.data.data.total,e.forEach(function(a,e){t.tableData.push(a)})}).catch(function(t){console.log(t)})}},byyear:function(){var t=this;t.pick1=!1,t.pick2=!1,t.lvs=0,0==t.lv3?t.lv3=!0:t.lv3=!1;var a={};1==t.lv3&&n.a.post("http://monkey.queyoujia.com/rebate/yearstatistics",r.a.stringify(a),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(a){var e=[];t.tableData=[],e=[a.data.data],e=e[0].list,console.log(e),t.pageSize=a.data.data.total,e.forEach(function(a,e){t.tableData.push(a)})}).catch(function(t){console.log(t)})},handleEdit:function(t,a){var e=this;if(sessionStorage.startTime=new Date(a.time+" 00:00:00").getTime()/1e3,console.log(sessionStorage.startTime),1==e.lv3)return sessionStorage.endTime=new Date(Number(a.time+1).toString()+" 00:00:00").getTime()/1e3-1,sessionStorage.Dates="年",sessionStorage.title=a.time,void e.$router.push({path:"/rechargedetails2/rechargedetails2"});if(1==e.lv2){return sessionStorage.Dates="月",sessionStorage.endTime=Number(new Date(a.time+" 00:00:00").getTime()/1e3)+Number(86400*function(t,a){return a=parseInt(a,10),new Date(t,a,0).getDate()}(a.time.substring(0,4),a.time.substring(5,7)))-1,sessionStorage.title=a.time,e.tabetitle=a.time,void e.$router.push({path:"/rechargedetails2/rechargedetails2"})}return e.lv1,sessionStorage.Dates="日",sessionStorage.title=a.time,sessionStorage.endTime=Number(new Date(a.time+" 00:00:00").getTime()/1e3)+86400-1,void e.$router.push({path:"/rechargedetails2/rechargedetails2"})},handleSizeChange:function(t){console.log("每页 "+t+" 条")},handleCurrentChange:function(t){var a=this;a.tableData=[];var e=[];t=t.toString();var o={page:t};if(1==a.pick1&&1==a.pick2){var i=[];a.tableData=[];var e=[],l=function(t,a){var e={timestamp1:0,timestamp2:0};return e.timestamp1=Number(Date.parse(t)/1e3),e.timestamp2=Number(Date.parse(a)/1e3)+86399,e}(a.formInline.date1,a.formInline.date2),o={startTime:l.timestamp1,endTime:l.timestamp2,page:t};return void n.a.post("http://monkey.queyoujia.com/rebate/daystatistics",r.a.stringify(o),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){e=[t.data.data],e=e[0].list,i=[t.data.data],a.pageSize=i[0].total;for(var o in e)a.tableData.push(e[o])}).catch(function(t){console.log(t)})}if(a.lvs>0){if(console.log(this.lvs),4==this.lvs){var i=[];a.tableData=[];var e=[],s=new Date;s=Number(s.setHours("00","00","00","0"))/1e3-1;var c=s-31536e3+1,o={startTime:c,endTime:s,page:t};return void n.a.post("http://monkey.queyoujia.com/rebate/daystatistics",r.a.stringify(o),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){e=[t.data.data],e=e[0].list,i=[t.data.data],a.pageSize=i[0].total;for(var o in e)a.tableData.push(e[o])}).catch(function(t){console.log(t)})}if(3==a.lvs){var i=[];a.tableData=[];var e=[],s=new Date;s=Number(s.setHours("00","00","00","0"))/1e3-1;var c=s-86400*function(){var t=new Date,a=t.getMonth();return t.setMonth(a+1),t.setDate(0),t.getDate()}()+1,o={startTime:c,endTime:s,page:t};return void n.a.post("http://monkey.queyoujia.com/rebate/daystatistics",r.a.stringify(o),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){e=[t.data.data],e=e[0].list,i=[t.data.data],a.pageSize=i[0].total;for(var o in e)a.tableData.push(e[o])}).catch(function(t){console.log(t)})}if(2==a.lvs){var i=[];a.tableData=[];var i=[];a.tableData=[];var e=[],s=new Date;s=Number(s.setHours("00","00","00","0"))/1e3-1;var c=s-6048e3+1,o={startTime:c,endTime:s,page:t};return void n.a.post("http://monkey.queyoujia.com/rebate/daystatistics",r.a.stringify(o),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){e=[t.data.data],e=e[0].list,i=[t.data.data],a.pageSize=i[0].total;for(var o in e)a.tableData.push(e[o])}).catch(function(t){console.log(t)})}var i=[];a.tableData=[];var e=[],s=new Date;s=Number(s.setHours("00","00","00","0"))/1e3-1;var c=s-86400+1,o={startTime:c,endTime:s,page:t};return void n.a.post("http://monkey.queyoujia.com/rebate/daystatistics",r.a.stringify(o),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){e=[t.data.data],e=e[0].list,i=[t.data.data],a.pageSize=i[0].total;for(var o in e)a.tableData.push(e[o])}).catch(function(t){console.log(t)})}1==a.lv3?n.a.post("http://monkey.queyoujia.com/rebate/yearstatistics",r.a.stringify(o),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){e=[t.data.data],e=e[0].list;for(var o in e)a.tableData.push(e[o])}).catch(function(t){console.log(t)}):1==a.lv2?n.a.post("http://monkey.queyoujia.com/rebate/monthstatistics",r.a.stringify(o),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){e=[t.data.data],e=e[0].list;for(var o in e)a.tableData.push(e[o])}).catch(function(t){console.log(t)}):n.a.post("http://monkey.queyoujia.com/rebate/daystatistics",r.a.stringify(o),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){e=[t.data.data],e=e[0].list;for(var o in e)a.tableData.push(e[o])}).catch(function(t){console.log(t)})},rechargeAll:function(){console.log(33)},yesterDay:function(){var t=this;t.pick1=!1,t.pick2=!1,t.lvs=1;var a=[];t.tableData=[];var e=[],o=new Date;o=Number(o.setHours("00","00","00","0"))/1e3-1;var i=o-86400+1;console.log(o);var l={startTime:i,endTime:o};n.a.post("http://monkey.queyoujia.com/rebate/daystatistics",r.a.stringify(l),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(o){e=[o.data.data],e=e[0].list,a=[o.data.data],t.pageSize=a[0].total;for(var n in e)t.tableData.push(e[n])}).catch(function(t){console.log(t)})},nerarSeDay:function(){var t=this;t.pick1=!1,t.pick2=!1,t.lvs=2;var a=[];t.tableData=[];var e=[],o=new Date;o=Number(o.setHours("00","00","00","0"))/1e3-1;var i=o-604800+1,l={startTime:i,endTime:o};n.a.post("http://monkey.queyoujia.com/rebate/daystatistics",r.a.stringify(l),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(o){e=[o.data.data],e=e[0].list,a=[o.data.data],t.pageSize=a[0].total;for(var n in e)t.tableData.push(e[n])}).catch(function(t){console.log(t)})},nearMonth:function(){var t=this;t.pick1=!1,t.pick2=!1,t.lvs=3;var a=[];t.tableData=[];var e=[],o=new Date;o=Number(o.setHours("00","00","00","0"))/1e3-1;var i=o-86400*function(){var t=new Date,a=t.getMonth();return t.setMonth(a+1),t.setDate(0),t.getDate()}()+1,l={startTime:i,endTime:o};n.a.post("http://monkey.queyoujia.com/rebate/daystatistics",r.a.stringify(l),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(o){e=[o.data.data],e=e[0].list,a=[o.data.data],t.pageSize=a[0].total;for(var n in e)t.tableData.push(e[n])}).catch(function(t){console.log(t)})},nearYear:function(){var t=this;t.pick1=!1,t.pick2=!1,t.lvs=4;var a=[];t.tableData=[];var e=[],o=new Date;o=Number(o.setHours("00","00","00","0"))/1e3-1;var i=o-31536e3+1,l={startTime:i,endTime:o};n.a.post("http://monkey.queyoujia.com/rebate/daystatistics",r.a.stringify(l),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(o){e=[o.data.data],e=e[0].list,a=[o.data.data],t.pageSize=a[0].total;for(var n in e)t.tableData.push(e[n])}).catch(function(t){console.log(t)})},datapicker1:function(){var t=this;t.lvs=0,t.pick1=!0;var a=[];t.tableData=[];var e=[],o=function(t,a){var e={timestamp1:0,timestamp2:0};return e.timestamp1=Number(Date.parse(t)/1e3),e.timestamp2=Number(Date.parse(a)/1e3)+86399,e}(t.formInline.date1,t.formInline.date2);if(console.log(o),o.timestamp1&&o.timestamp2)if(o.timestamp2-o.timestamp1>0){var i={startTime:o.timestamp1,endTime:o.timestamp2};n.a.post("http://monkey.queyoujia.com/rebate/daystatistics",r.a.stringify(i),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(o){e=[o.data.data],e=e[0].list,a=[o.data.data],t.pageSize=a[0].total;for(var n in e)t.tableData.push(e[n])}).catch(function(t){console.log(t)})}else this.$notify({title:"警告",message:"请选择真确的时间",type:"warning"})},datapicker2:function(){var t=this;t.lvs=0,t.pick2=!0;var a=[];t.tableData=[];var e=[],o=function(t,a){var e={timestamp1:0,timestamp2:0};return e.timestamp1=Number(Date.parse(t)/1e3),e.timestamp2=Number(Date.parse(a)/1e3)+86399,e}(t.formInline.date1,t.formInline.date2);if(console.log(o),o.timestamp1&&o.timestamp2)if(o.timestamp2-o.timestamp1>0){var i={startTime:o.timestamp1,endTime:o.timestamp2};n.a.post("http://monkey.queyoujia.com/rebate/daystatistics",r.a.stringify(i),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(o){e=[o.data.data],e=e[0].list,a=[o.data.data],t.pageSize=a[0].total;for(var n in e)t.tableData.push(e[n])}).catch(function(t){console.log(t)})}else this.$notify({title:"警告",message:"请选择真确的时间",type:"warning"})}},mounted:function(){var t=this;this.slideHeight=window.screen.availHeight+"px",n.a.get("http://monkey.queyoujia.com/rebate/daystatistics",{params:{}}).then(function(a){t.tableData=[a.data.data],t.tableData=t.tableData[0].list,t.tableDataAll=t.tableData,t.tableWho=t.tableDataAll,t.pageSize=a.data.data.total,t.tableData=[],t.tableDataAll.forEach(function(a,e){t.tableData.push(a)})}).catch(function(t){console.log(t)})},computed:{key:function(){},borkey:function(){var t=this;t.borWidth=window.screen.availWidth+"px",t.borHeight=window.screen.availHeight+"px",t.modalWidth=window.screen.availWidth/1.5+"px",t.modalHeight=window.screen.availHeight/1.5+"px"}}}},ayia:function(t,a,e){a=t.exports=e("I71c")(!0),a.push([t.i,"h1[data-v-16281b6f],h2[data-v-16281b6f]{font-weight:400}ul[data-v-16281b6f]{list-style-type:none;padding:0}li[data-v-16281b6f]{display:inline-block;margin:0 10px}a[data-v-16281b6f]{color:#42b983}header[data-v-16281b6f]{margin:20px 0;font-size:20px}.searchAll[data-v-16281b6f]{position:absolute;margin-top:30px}.form-inline[data-v-16281b6f]{padding-bottom:18px}.recharge[data-v-16281b6f]{margin-top:10px}.chosebtn[data-v-16281b6f],.chosedata[data-v-16281b6f]{float:right}.chosebtn button[data-v-16281b6f]{height:1.8rem;margin-top:5px;line-height:50%}.formSearch[data-v-16281b6f]{margin-top:-10px}.searchRest[data-v-16281b6f]{width:60px;height:36px;margin-left:10px}.pagetag[data-v-16281b6f]{float:right}.j-bor[data-v-16281b6f]{background:#000;opacity:.5;z-index:999}.j-bor[data-v-16281b6f],.jModal[data-v-16281b6f]{position:fixed;top:0;right:0;left:0;bottom:0;text-align:center}.jModal[data-v-16281b6f]{margin:auto;z-index:1000;background:#fff;-webkit-box-shadow:0 0 5px #48576a;box-shadow:0 0 5px #48576a;max-height:650px;overflow-y:scroll}el-table .info-row[data-v-16281b6f]{background:#c9e5f5}.el-table .positive-row[data-v-16281b6f]{background:#e2f0e4}","",{version:3,sources:["C:/Users/pc/Desktop/monkey后台总代码/queyou/src/page/recharge/recharge.vue"],names:[],mappings:"AACA,wCACE,eAAoB,CACrB,AACD,oBACE,qBAAsB,AACtB,SAAW,CACZ,AACD,oBACE,qBAAsB,AACtB,aAAe,CAChB,AACD,mBACE,aAAe,CAChB,AACD,wBAAwB,cAAc,cAAgB,CACrD,AACD,4BAA4B,kBAAmB,eAAgB,CAC9D,AACD,8BAA8B,mBAAoB,CACjD,AACD,2BAA2B,eAAiB,CAC3C,AAGD,uDAA2B,WAAa,CACvC,AACD,kCAAkC,cAAe,eAAgB,eAAiB,CACjF,AACD,6BAA6B,gBAAkB,CAC9C,AACD,6BAA6B,WAAW,YAAa,gBAAkB,CACtE,AACD,0BAA2E,WAAa,CACvF,AACD,wBAA6F,gBAAkB,WAAa,WAAa,CACxI,AACD,iDAFwB,eAAgB,MAAO,QAAS,OAAQ,SAAU,iBAAmB,CAG5F,AADD,yBAA2E,YAAiB,AAAmB,aAAa,gBAAkB,mCAAoC,2BAA4B,iBAAiB,iBAAmB,CACjP,AACD,oCACI,kBAAoB,CACvB,AACD,yCACI,kBAAoB,CACvB",file:"recharge.vue",sourcesContent:["\nh1[data-v-16281b6f], h2[data-v-16281b6f] {\r\n  font-weight: normal;\n}\nul[data-v-16281b6f] {\r\n  list-style-type: none;\r\n  padding: 0;\n}\nli[data-v-16281b6f] {\r\n  display: inline-block;\r\n  margin: 0 10px;\n}\na[data-v-16281b6f] {\r\n  color: #42b983;\n}\nheader[data-v-16281b6f]{margin:20px 0;font-size: 20px;\n}\n.searchAll[data-v-16281b6f]{position: absolute;margin-top: 30px\n}\n.form-inline[data-v-16281b6f]{padding-bottom:18px;\n}\n.recharge[data-v-16281b6f]{margin-top: 10px;\n}\n.chosedata[data-v-16281b6f]{float: right;\n}\n.chosebtn[data-v-16281b6f]{float: right;\n}\n.chosebtn button[data-v-16281b6f]{height: 1.8rem;margin-top: 5px;line-height: 50%;\n}\n.formSearch[data-v-16281b6f]{margin-top: -10px;\n}\n.searchRest[data-v-16281b6f]{width:60px;height: 36px;margin-left: 10px;\n}\n.pagetag[data-v-16281b6f]{/* position: absolute;bottom: 5px;right: 15px; */float: right;\n}\n.j-bor[data-v-16281b6f]{position: fixed;top: 0;right: 0;left: 0;bottom: 0;text-align: center;background: black;opacity: 0.5;z-index: 999;\n}\n.jModal[data-v-16281b6f]{position: fixed;top: 0;right: 0;left: 0;bottom: 0;margin:auto auto;text-align: center;z-index:1000;background: white;-webkit-box-shadow: 0 0 5px #48576a;box-shadow: 0 0 5px #48576a;max-height:650px;overflow-y: scroll;\n}\nel-table .info-row[data-v-16281b6f] {\r\n    background: #c9e5f5;\n}\n.el-table .positive-row[data-v-16281b6f] {\r\n    background: #e2f0e4;\n}\r\n\r\n"],sourceRoot:""}])}});
//# sourceMappingURL=17.240fcb6df6383f3e1e90.js.map