webpackJsonp([29],{"++E5":function(t,a,e){"use strict";function n(t){e("lMXi")}Object.defineProperty(a,"__esModule",{value:!0});var l=e("CsQw"),o=e("QjZa"),s=e("Z0/y"),c=n,r=s(l.a,o.a,!1,c,"data-v-0d4357ee",null);a.default=r.exports},CsQw:function(t,a,e){"use strict";var n=e("BMa3"),l=e.n(n),o=e("DEjr");e.n(o);a.a={name:"luckdraw",data:function(){return{tableData_wx:[],runnum_wx:null,runnum:null,uids:null,uids_wx:null,loading:!1,tableData:[],currentPage3:1,currentPage3_wx:1,allpage:1,allpage_wx:1,cur_page:null,cur_page_wx:null}},methods:{reset:function(){var t=this;t.tableData=[],t.currentPage3=1,l.a.get("http://monkey.queyoujia.com/active/recodelist",{params:{}}).then(function(a){console.log(a),0==a.data.code&&(t.tableData=a.data.data.list,t.tableData.forEach(function(t,a){console.log(t),"未发放"==t.flag?(t.btnstatus="发放奖品",t.colors="success"):(t.btnstatus="已发放",t.colors="primary")}),t.allpage=a.data.data.total)}).catch(function(t){console.log(t)})},reset_wx:function(){var t=this;t.tableData_wx=[],t.currentPage3_wx=1,l.a.get("http://monkey.queyoujia.com/active/pubrecode",{params:{}}).then(function(a){console.log(a),0==a.data.code&&(t.tableData_wx=a.data.data.list,t.tableData_wx.forEach(function(t,a){console.log(t),"未发放"==t.flag?(t.btnstatus="发放奖品",t.colors="success"):(t.btnstatus="已发放",t.colors="primary")}),t.allpage_wx=a.data.data.total)}).catch(function(t){console.log(t)})},search:function(){var t=this;t.tableData=[],t.currentPage3=1,l.a.get("http://monkey.queyoujia.com/active/recodelist",{params:{uid:t.uids,runnum:t.runnum}}).then(function(a){0==a.data.code&&(t.tableData=a.data.data.list,t.tableData.forEach(function(t,a){console.log(t),"未发放"==t.flag?(t.btnstatus="发放奖品",t.colors="success"):(t.btnstatus="已发放",t.colors="primary")}),t.allpage=a.data.data.total)}).catch(function(t){console.log(t)})},search_wx:function(){var t=this;t.tableData_wx=[],t.currentPage3_wx=1,l.a.get("http://monkey.queyoujia.com/active/pubrecode",{params:{uid:t.uids_wx,runnum:t.runnum_wx}}).then(function(a){0==a.data.code&&(t.tableData_wx=a.data.data.list,t.tableData_wx.forEach(function(t,a){console.log(t),"未发放"==t.flag?(t.btnstatus="发放奖品",t.colors="success"):(t.btnstatus="已发放",t.colors="primary")}),t.allpage_wx=a.data.data.total)}).catch(function(t){console.log(t)})},handleEdit:function(t,a){var e=this;console.log(t,a);var n=this;"发放奖品"==a.btnstatus?this.$confirm("为ID："+a.uid+"发放奖品, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){l.a.get("http://monkey.queyoujia.com/active/updrecode",{params:{id:a.id}}).then(function(t){0==t.data.code?(n.$message({message:"奖品发放成功",type:"success"}),n.tableData=[],n.currentPage3=1,l.a.get("http://monkey.queyoujia.com/active/recodelist",{params:{page:n.cur_page,uid:n.uids}}).then(function(t){console.log(t),0==t.data.code&&(n.tableData=t.data.data.list,n.tableData.forEach(function(t,a){console.log(t),"未发放"==t.flag?(t.btnstatus="发放奖品",t.colors="success"):(t.btnstatus="已发放",t.colors="primary")}),n.allpage=t.data.data.total)}).catch(function(t){console.log(t)})):n.$message({message:t.data.message,type:"warning"})}).catch(function(t){console.log(t)})}).catch(function(){e.$message({type:"info",message:"已取消"})}):n.$message({message:"奖品已发放",type:"warning"})},handleEdit_wx:function(t,a){var e=this;console.log(t,a);var n=this;"发放奖品"==a.btnstatus?this.$confirm("为ID："+a.uid+"发放奖品, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){l.a.get("http://monkey.queyoujia.com/active/pubrecode",{params:{id:a.id}}).then(function(t){0==t.data.code?(n.$message({message:"奖品发放成功",type:"success"}),n.tableData_wx=[],n.currentPage3_wx=1,l.a.get("http://monkey.queyoujia.com/active/pubrecode",{params:{page:n.cur_page_wx,uid:n.uids_wx}}).then(function(t){console.log(t),0==t.data.code&&(n.tableData_wx=t.data.data.list,n.tableData_wx.forEach(function(t,a){console.log(t),"未发放"==t.flag?(t.btnstatus="发放奖品",t.colors="success"):(t.btnstatus="已发放",t.colors="primary")}),n.allpage_wx=t.data.data.total)}).catch(function(t){console.log(t)})):n.$message({message:t.data.message,type:"warning"})}).catch(function(t){console.log(t)})}).catch(function(){e.$message({type:"info",message:"已取消"})}):n.$message({message:"奖品已发放",type:"warning"})},handleSizeChange:function(t){console.log("每页 "+t+" 条")},handleSizeChange_wx:function(t){console.log("每页 "+t+" 条")},handleCurrentChange:function(t){console.log("当前页: "+t);var a=this;a.tableData=[],a.allpage=null,a.loading=!0,a.cur_page=t,l.a.get("http://monkey.queyoujia.com/active/recodelist",{params:{page:t,uid:a.uids}}).then(function(t){console.log(t),0==t.data.code&&(a.tableData=t.data.data.list,a.tableData.forEach(function(t,a){console.log(t),"未发放"==t.flag?(t.btnstatus="发放奖品",t.colors="success"):(t.btnstatus="已发放",t.colors="primary")}),a.allpage=t.data.data.total,a.loading=!1)}).catch(function(t){console.log(t)})},handleCurrentChange_wx:function(t){console.log("当前页: "+t);var a=this;a.tableData_wx=[],a.allpage_wx=null,a.loading=!0,a.cur_page_wx=t,l.a.get("http://monkey.queyoujia.com/active/pubrecode",{params:{page:t,uid:a.uids_wx}}).then(function(t){console.log(t),0==t.data.code&&(a.tableData_wx=t.data.data.list,a.tableData_wx.forEach(function(t,a){console.log(t),"未发放"==t.flag?(t.btnstatus="发放奖品",t.colors="success"):(t.btnstatus="已发放",t.colors="primary")}),a.allpage_wx=t.data.data.total,a.loading=!1)}).catch(function(t){console.log(t)})}},mounted:function(){var t=this;l.a.get("http://monkey.queyoujia.com/active/recodelist",{params:{}}).then(function(a){console.log(a),0==a.data.code&&(t.tableData=a.data.data.list,t.tableData.forEach(function(t,a){console.log(t),"未发放"==t.flag?(t.btnstatus="发放奖品",t.colors="success"):(t.btnstatus="已发放",t.colors="primary")}),t.allpage=a.data.data.total)}).catch(function(t){console.log(t)}),l.a.get("http://monkey.queyoujia.com/active/pubrecode",{params:{}}).then(function(a){console.log(a),0==a.data.code&&(t.tableData_wx=a.data.data.list,t.tableData_wx.forEach(function(t,a){console.log(t),"未发放"==t.flag?(t.btnstatus="发放奖品",t.colors="success"):(t.btnstatus="已发放",t.colors="primary")}),t.allpage_wx=a.data.data.total)}).catch(function(t){console.log(t)})}}},QjZa:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"luckdraw"},[e("el-tabs",{staticClass:"mrt",attrs:{type:"border-card"}},[e("el-tab-pane",{attrs:{label:"客户端抽奖记录"}},[e("el-col",{staticClass:"mrt",attrs:{span:3}},[e("el-input",{attrs:{placeholder:"请输入流水账号"},model:{value:t.runnum,callback:function(a){t.runnum=a},expression:"runnum"}})],1),t._v(" "),e("el-col",{staticClass:"mrt",attrs:{span:3}},[e("el-input",{attrs:{placeholder:"请输入游戏ID"},model:{value:t.uids,callback:function(a){t.uids=a},expression:"uids"}})],1),t._v(" "),e("el-col",{staticClass:"mrt inlineblock",attrs:{span:1}},[e("el-button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")])],1),t._v(" "),e("div",{staticClass:"inlineblock"}),t._v(" "),e("el-col",{staticClass:"mrt",attrs:{span:1}},[e("el-button",{attrs:{type:"danger"},on:{click:t.reset}},[t._v("清空")])],1),t._v(" "),[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[e("el-table-column",{attrs:{label:"中奖记录ID","min-width":"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(a.row.id))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"用户ID",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(a.row.uid))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"奖品ID",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(a.row.prize_id))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"奖品描述",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(a.row.prize))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"用户昵称",align:"center","max-width":"110"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(a.row.nickname))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"流水账号",align:"center","min-width":"110"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(a.row.runnum))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(a.row.flag))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"抽奖时间",align:"center","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(a.row.add_time))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{size:"small",type:a.row.colors},on:{click:function(e){t.handleEdit(a.$index,a.row)}}},[t._v("\n               "+t._s(a.row.btnstatus)+"\n              ")])]}}])})],1)],t._v(" "),e("el-pagination",{staticClass:"mrt flrt",attrs:{"current-page":t.currentPage3,"page-size":1,layout:"prev, pager, next, jumper",total:t.allpage},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(a){t.currentPage3=a}}})],2),t._v(" "),e("el-tab-pane",{attrs:{label:"公总号抽奖记录"}},[e("el-col",{staticClass:"mrt",attrs:{span:3}},[e("el-input",{attrs:{placeholder:"请输入流水账号"},model:{value:t.runnum_wx,callback:function(a){t.runnum_wx=a},expression:"runnum_wx"}})],1),t._v(" "),e("el-col",{staticClass:"mrt",attrs:{span:3}},[e("el-input",{attrs:{placeholder:"请输入游戏ID"},model:{value:t.uids_wx,callback:function(a){t.uids_wx=a},expression:"uids_wx"}})],1),t._v(" "),e("el-col",{staticClass:"mrt inlineblock",attrs:{span:1}},[e("el-button",{attrs:{type:"primary"},on:{click:t.search_wx}},[t._v("查询")])],1),t._v(" "),e("div",{staticClass:"inlineblock"}),t._v(" "),e("el-col",{staticClass:"mrt",attrs:{span:1}},[e("el-button",{attrs:{type:"danger"},on:{click:t.reset_wx}},[t._v("清空")])],1),t._v(" "),[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData_wx}},[e("el-table-column",{attrs:{label:"中奖记录ID","min-width":"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(a.row.id))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"用户ID",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(a.row.uid))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"奖品ID",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(a.row.prize_id))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"奖品描述",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(a.row.prize))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"用户昵称",align:"center","max-width":"110"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(a.row.nickname))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"流水账号",align:"center","min-width":"110"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(a.row.runnum))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(a.row.flag))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"抽奖时间",align:"center","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(a.row.add_time))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{size:"small",type:a.row.colors},on:{click:function(e){t.handleEdit_wx(a.$index,a.row)}}},[t._v("\n               "+t._s(a.row.btnstatus)+"\n              ")])]}}])})],1)],t._v(" "),e("el-pagination",{staticClass:"mrt flrt",attrs:{"current-page":t.currentPage3_wx,"page-size":1,layout:"prev, pager, next, jumper",total:t.allpage_wx},on:{"size-change":t.handleSizeChange_wx,"current-change":t.handleCurrentChange_wx,"update:currentPage":function(a){t.currentPage3_wx=a}}})],2)],1)],1)},l=[],o={render:n,staticRenderFns:l};a.a=o},XzaK:function(t,a,e){a=t.exports=e("I71c")(!0),a.push([t.i,".mrt[data-v-0d4357ee]{margin:15px 5px}.flrt[data-v-0d4357ee]{float:right}.inlineblock[data-v-0d4357ee]{margin-right:12px}","",{version:3,sources:["C:/Users/pc/Desktop/monkey后台总代码/queyou/src/page/luckdraw/luckdraw.vue"],names:[],mappings:"AACA,sBAAsB,eAAgB,CACrC,AACD,uBAAuB,WAAa,CACnC,AACD,8BAA8B,iBAAmB,CAChD",file:"luckdraw.vue",sourcesContent:["\n.mrt[data-v-0d4357ee]{margin:15px 5px;\n}\n.flrt[data-v-0d4357ee]{float: right;\n}\n.inlineblock[data-v-0d4357ee]{margin-right: 12px;\n}\r\n"],sourceRoot:""}])},lMXi:function(t,a,e){var n=e("XzaK");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("FIqI")("1afb4bb3",n,!0,{})}});
//# sourceMappingURL=29.9f6c5c865d0f9d197a59.js.map