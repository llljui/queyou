webpackJsonp([38],{"2Rqz":function(t,a,e){"use strict";var l=e("BMa3"),s=e.n(l),n=e("DEjr");e.n(n);a.a={name:"charts",data:function(){return{nUid:null,agent_id:null,user_id:null,currentPage3:1,tableData2:[],colspan:"8",cusspan:"8",inputuid:null,allpage1:null,allpage2:null,currentPage1:1,currentPage2:1,nickname:" ",total_incharge:" ",uid:" ",register_time:" ",proid:" ",tel:" ",yescus:" ",yesres:" ",dateline:null,nowdia:" ",gridData1:[],gridData2:[],dialogTableVisible1:!1,dialogTableVisible2:!1,options:[{value:"1",label:"用户ID"},{value:"2",label:"手机号"},{value:"3",label:"邀请码"}],value:"1",par:null}},methods:{toNickname:function(){var t=this;s.a.get("http://monkey.queyoujia.com/realname/rename",{params:{uid:t.nUid}}).then(function(a){0==a.data.code?t.$message({message:"转换成功!",type:"success"}):t.$message({message:a.data.message,type:"warning"})}).catch(function(t){console.log(t)})},search_had:function(){var t=this,a={};t.agent_id?a.agent_id=t.agent_id:a.uid=t.user_id,t.tableData2=[],s.a.get("http://monkey.queyoujia.com/user/account",{params:a}).then(function(a){if(console.log(a),0==a.data.code){t.tableData2=a.data.data;for(var e in t.tableData2){var l=t.tableData2[e];1==l.cid?l.cid="全民大冶游戏":2==l.cid?l.cid="八道乐游":3==l.cid?l.cid="决战绍兴":8==l.cid&&(l.cid="全民十三水"),0==l.isSend?l.isSend="未领取":l.isSend="已领取",0==l.sync?l.sync="未同步":l.sync="已同步"}}else t.$message({message:a.data.message,type:"warning"})}).catch(function(t){console.log(t)})},handleSizeChange:function(t){console.log("每页 "+t+" 条")},handleCurrentChange:function(t){console.log("当前页: "+t)},tableRowClassName:function(t){var a=(t.row,t.rowIndex);return 1===a?"warning-row":3===a?"success-row":""},search:function(){var t=this;console.log(t.value),console.log(t.inputuid),s.a.get("http://monkey.queyoujia.com/user/search",{params:{type:t.value,var:t.inputuid}}).then(function(a){console.log(a),0==a.data.code?(t.nickname=a.data.data.nickname,t.uid=a.data.data.uid,t.proid=a.data.data.no,t.tel=a.data.data.mobile,t.yescus=a.data.data.yestoday_consume,t.dateline=a.data.data.last_login_time,t.nowdia=a.data.data.left_diamond,t.yesres=a.data.data.yestoday_incharge,t.total_incharge=a.data.data.total_incharge,t.register_time=a.data.data.register_time,t.tel?t.colspan="8":t.colspan="11",t.dateline?t.cusspan="6":t.cusspan="11"):t.$message({message:a.data.message,type:"warning"})}).catch(function(t){console.log(t)})},handleSizeChange1:function(t){console.log("每页 "+t+" 条")},handleCurrentChange1:function(t){console.log("当前页: "+t)},handleSizeChange2:function(t){console.log("每页 "+t+" 条")},handleCurrentChange2:function(t){console.log("当前页: "+t)},getlogin:function(){this.dialogTableVisible1=!0},recharge:function(){this.dialogTableVisible2=!0}}}},"3P4x":function(t,a,e){"use strict";var l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"charts"},[e("el-tabs",{staticStyle:{"margin-top":"10px"},attrs:{type:"border-card"}},[e("el-tab-pane",[e("span",{attrs:{slot:"label"},slot:"label"},[t._v("用户查询")]),t._v(" "),e("el-col",{staticClass:"mrt",attrs:{span:3}},[e("el-select",{attrs:{placeholder:"请选择",size:"small"},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}},t._l(t.options,function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),e("el-col",{staticClass:"mrt",attrs:{span:3}},[e("el-input",{attrs:{placeholder:"请输入游戏ID",size:"small"},model:{value:t.inputuid,callback:function(a){t.inputuid=a},expression:"inputuid"}})],1),t._v(" "),e("el-button",{staticClass:"mrt",attrs:{type:"primary",size:"small"},on:{click:t.search}},[t._v("查询")]),t._v(" "),e("el-col",{attrs:{span:24}},[e("div",{staticClass:"thead"})]),t._v(" "),e("el-col",{attrs:{span:24}},[e("div",{staticClass:"bottoms"},[e("el-col",{staticClass:"txts tcolor",attrs:{span:3}},[t._v("昵称：")]),t._v(" "),e("el-col",{staticClass:"txts",attrs:{span:3}},[t._v(t._s(t.nickname))])],1)]),t._v(" "),e("el-col",{attrs:{span:24}},[e("div",{staticClass:"bottoms"},[e("el-col",{staticClass:"txts tcolor",attrs:{span:3}},[t._v("游戏ID：")]),t._v(" "),e("el-col",{staticClass:"txts",attrs:{span:3}},[t._v(t._s(t.uid))])],1)]),t._v(" "),e("el-col",{attrs:{span:24}},[e("div",{staticClass:"bottoms"},[e("el-col",{staticClass:"txts tcolor",attrs:{span:3}},[t._v("推广ID：")]),t._v(" "),e("el-col",{staticClass:"txts",attrs:{span:3}},[t._v(t._s(t.proid))]),t._v(" "),e("el-col",{staticClass:"txts tcolor",attrs:{span:2,offset:8}},[t._v("昨日充值：")]),t._v(" "),e("el-col",{staticClass:"txts",attrs:{span:3}},[t._v(t._s(t.yesres))])],1)]),t._v(" "),e("el-col",{attrs:{span:24}},[e("div",{staticClass:"bottoms"},[e("el-col",{staticClass:"txts tcolor",attrs:{span:3}},[t._v("手机号码：")]),t._v(" "),e("el-col",{staticClass:"txts",attrs:{span:3}},[t._v(t._s(t.tel))]),t._v(" "),e("el-col",{staticClass:"txts tcolor",attrs:{span:2,offset:t.colspan}},[t._v("充值总量：")]),t._v(" "),e("el-col",{staticClass:"txts",attrs:{span:3}},[t._v(t._s(t.total_incharge))])],1)]),t._v(" "),e("el-col",{attrs:{span:24}},[e("div",{staticClass:"bottoms"},[e("el-col",{staticClass:"txts tcolor",attrs:{span:3}},[t._v("最后登录时间：")]),t._v(" "),e("el-col",{staticClass:"txts",attrs:{span:5}},[t._v(t._s(t.dateline))]),t._v(" "),e("el-col",{staticClass:"txts tcolor",attrs:{span:3,offset:t.cusspan}},[t._v("昨日钻石消耗：")]),t._v(" "),e("el-col",{staticClass:"txts",attrs:{span:3}},[t._v(t._s(t.yescus))])],1)]),t._v(" "),e("el-col",{attrs:{span:24}},[e("div",{staticClass:"bottoms"},[e("el-col",{staticClass:"txts tcolor",attrs:{span:3}},[t._v("注册时间")]),t._v(" "),e("el-col",{staticClass:"txts",attrs:{span:3}},[t._v(t._s(t.register_time))]),t._v(" "),e("el-col",{staticClass:"txts tcolor",attrs:{span:3,offset:8}},[t._v("剩余钻石数量：")]),t._v(" "),e("el-col",{staticClass:"txts",attrs:{span:3}},[t._v(t._s(t.nowdia))])],1)]),t._v(" "),e("el-dialog",{attrs:{"custom-class":"dialogs",title:"ssssss",visible:t.dialogTableVisible1},on:{"update:visible":function(a){t.dialogTableVisible1=a}}},[e("el-table",{attrs:{data:t.gridData1}},[e("el-table-column",{attrs:{property:"date",label:"日期",width:"150"}}),t._v(" "),e("el-table-column",{attrs:{property:"name",label:"姓名",width:"200"}}),t._v(" "),e("el-table-column",{attrs:{property:"address",label:"地址"}})],1),t._v(" "),e("el-pagination",{staticClass:"tbflrt",attrs:{"current-page":t.currentPage1,"page-size":1,layout:"prev, pager, next, jumper",total:t.allpage1},on:{"size-change":t.handleSizeChange1,"current-change":t.handleCurrentChange1,"update:currentPage":function(a){t.currentPage1=a}}})],1),t._v(" "),e("el-dialog",{attrs:{title:"","custom-class":"dialogs",visible:t.dialogTableVisible2},on:{"update:visible":function(a){t.dialogTableVisible2=a}}},[e("el-table",{attrs:{data:t.gridData2}},[e("el-table-column",{attrs:{property:"date",label:"日期",width:"150"}}),t._v(" "),e("el-table-column",{attrs:{property:"name",label:"姓名",width:"200"}}),t._v(" "),e("el-table-column",{attrs:{property:"address",label:"地址"}})],1),t._v(" "),e("el-pagination",{staticClass:"tbflrt",attrs:{"current-page":t.currentPage2,"page-size":1,layout:"prev, pager, next, jumper",total:t.allpage2},on:{"size-change":t.handleSizeChange2,"current-change":t.handleCurrentChange2,"update:currentPage":function(a){t.currentPage2=a}}})],1)],1),t._v(" "),e("el-tab-pane",{attrs:{label:"迁移管理"}},[e("el-col",{attrs:{span:4}},[e("el-input",{attrs:{placeholder:"请输入代理id",size:"small"},model:{value:t.agent_id,callback:function(a){t.agent_id=a},expression:"agent_id"}})],1),t._v(" "),e("el-col",{staticStyle:{"margin-left":"10px"},attrs:{span:4,offset:1}},[e("el-input",{attrs:{placeholder:"请输入某个用户id",size:"small"},model:{value:t.user_id,callback:function(a){t.user_id=a},expression:"user_id"}})],1),t._v(" "),e("el-col",{staticStyle:{"margin-left":"10px"},attrs:{span:3,offset:1}},[e("el-button",{staticStyle:{width:"50px",height:"30px"},attrs:{type:"primary",size:"mini"},on:{click:t.search_had}},[t._v("查询")])],1),t._v(" "),e("el-col",{staticClass:"mrb mrt",attrs:{span:3}}),t._v(" "),[e("el-table",{staticClass:"mrt",staticStyle:{width:"100%"},attrs:{data:t.tableData2,"row-class-name":t.tableRowClassName}},[e("el-table-column",{attrs:{align:"center","show-overflow-tooltip":"",prop:"uid",label:"用户ID"}}),t._v(" "),e("el-table-column",{attrs:{prop:"newOpenid","show-overflow-tooltip":"",align:"center",label:"新openid"}}),t._v(" "),e("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"oldOpenid","show-overflow-tooltip":"",align:"center",label:"老openid"}}),t._v(" "),e("el-table-column",{attrs:{align:"center","show-overflow-tooltip":"",prop:"newUnionid",label:"新unionid"}}),t._v(" "),e("el-table-column",{attrs:{align:"center","show-overflow-tooltip":"",prop:"oldUnionid",label:"旧unionid"}}),t._v(" "),e("el-table-column",{attrs:{align:"center","show-overflow-tooltip":"",prop:"creat_time",label:"添加时间"}}),t._v(" "),e("el-table-column",{attrs:{align:"center","show-overflow-tooltip":"",prop:"cid",label:"所属游戏"}}),t._v(" "),e("el-table-column",{attrs:{align:"center","show-overflow-tooltip":"",prop:"isSend",label:"是否领取奖励"}}),t._v(" "),e("el-table-column",{attrs:{align:"center","show-overflow-tooltip":"",prop:"sync",label:"是否同步"}})],1)],t._v(" "),e("el-pagination",{staticClass:"mrt flrt",attrs:{"current-page":t.currentPage3,"page-size":1,layout:"prev, pager, next, jumper",total:1},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(a){t.currentPage3=a}}})],2),t._v(" "),e("el-tab-pane",{attrs:{label:"微信昵称转换"}},[e("el-col",{attrs:{span:5}},[e("el-input",{attrs:{type:"number"},model:{value:t.nUid,callback:function(a){t.nUid=a},expression:"nUid"}})],1),t._v(" "),e("el-col",{staticStyle:{"margin-left":"10px"},attrs:{span:3}},[e("el-button",{attrs:{type:"primary"},on:{click:t.toNickname}},[t._v("转换")])],1)],1)],1)],1)},s=[],n={render:l,staticRenderFns:s};a.a=n},ZehD:function(t,a,e){"use strict";function l(t){e("kKN7")}Object.defineProperty(a,"__esModule",{value:!0});var s=e("2Rqz"),n=e("3P4x"),o=e("Z0/y"),i=l,r=o(s.a,n.a,!1,i,"data-v-26cfbef1",null);a.default=r.exports},kKN7:function(t,a,e){var l=e("s/Co");"string"==typeof l&&(l=[[t.i,l,""]]),l.locals&&(t.exports=l.locals);e("FIqI")("32c76cc4",l,!0,{})},"s/Co":function(t,a,e){a=t.exports=e("UTlt")(!0),a.push([t.i,".mrb[data-v-26cfbef1]{margin-bottom:30px;height:1px}.mflt li[data-v-26cfbef1]{float:right;margin:0 5px}.inlineblock[data-v-26cfbef1]{display:inline-block;width:10px;height:15px}.mrt[data-v-26cfbef1]{margin-top:15px;margin-left:10px}.flrt[data-v-26cfbef1]{float:right}.block[data-v-26cfbef1]{margin:0 10px;display:inline-block;width:1px}.thead[data-v-26cfbef1]{width:100%;height:25px;background-color:#a7b7bf;margin-top:10px;margin-left:10px}.bottoms[data-v-26cfbef1]{border-bottom:1px solid #e4e4e4;margin-left:10px;height:60px}.txts[data-v-26cfbef1]{line-height:60px;font-size:18px;font-family:Times New Roman,Georgia,Serif}.tcolor[data-v-26cfbef1]{color:#878d99}.tbflrt[data-v-26cfbef1]{float:right;margin-top:10px;margin-bottom:10px}.el-table .warning-row[data-v-26cfbef1]{background:oldlace}.nbsp[data-v-26cfbef1]{width:10px;display:inline-block;height:1px;margin:0 10px}.el-table .success-row[data-v-26cfbef1]{background:#f0f9eb}","",{version:3,sources:["C:/Users/pc/Desktop/雀游PC后台总代码/queyou/queyou/src/page/charts/charts.vue"],names:[],mappings:"AACA,sBAAsB,mBAAoB,UAAY,CACrD,AACD,0BAA0B,YAAa,YAAc,CACpD,AACD,8BAA8B,qBAAsB,WAAY,WAAa,CAC5E,AACD,sBAAsB,gBAAiB,gBAAiB,CACvD,AACD,uBAAuB,WAAa,CACnC,AACD,wBAAwB,cAAe,qBAAsB,SAAW,CACvE,AACD,wBAAwB,WAAY,YAAa,yBAA0B,gBAAiB,gBAAkB,CAC7G,AACD,0BAA0B,gCAAiC,iBAAkB,WAAa,CACzF,AACD,uBAAuB,iBAAkB,eAAgB,yCAA6C,CACrG,AACD,yBAAyB,aAAe,CACvC,AACD,yBAAyB,YAAa,gBAAiB,kBAAoB,CAC1E,AACD,wCACE,kBAAoB,CACrB,AACD,uBAAuB,WAAY,qBAAsB,WAAY,aAAc,CAClF,AACD,wCACE,kBAAoB,CACrB",file:"charts.vue",sourcesContent:['\n.mrb[data-v-26cfbef1]{margin-bottom: 30px;height: 1px;\n}\n.mflt li[data-v-26cfbef1]{float: right;margin: 0 5px;\n}\n.inlineblock[data-v-26cfbef1]{display: inline-block;width: 10px;height: 15px;\n}\n.mrt[data-v-26cfbef1]{margin-top: 15px;margin-left: 10px\n}\n.flrt[data-v-26cfbef1]{float: right;\n}\n.block[data-v-26cfbef1]{margin: 0 10px;display: inline-block;width: 1px;\n}\n.thead[data-v-26cfbef1]{width: 100%;height: 25px;background-color: #a7b7bf;margin-top: 10px;margin-left: 10px;\n}\n.bottoms[data-v-26cfbef1]{border-bottom: 1px solid #e4e4e4;margin-left: 10px;height: 60px;\n}\n.txts[data-v-26cfbef1]{line-height: 60px;font-size: 18px;font-family: "Times New Roman",Georgia,Serif;\n}\n.tcolor[data-v-26cfbef1]{color: #878D99;\n}\n.tbflrt[data-v-26cfbef1]{float: right;margin-top: 10px;margin-bottom: 10px;\n}\n.el-table .warning-row[data-v-26cfbef1] {\r\n  background: oldlace;\n}\n.nbsp[data-v-26cfbef1]{width: 10px;display: inline-block;height: 1px;margin:0 10px;\n}\n.el-table .success-row[data-v-26cfbef1] {\r\n  background: #f0f9eb;\n}\r\n'],sourceRoot:""}])}});
//# sourceMappingURL=38.89557082e8124cb5b176.js.map