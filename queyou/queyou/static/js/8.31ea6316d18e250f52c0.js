webpackJsonp([8],{"5BGp":function(t,a,e){a=t.exports=e("UTlt")(!0),a.push([t.i,".lineblock[data-v-f6b679e6]{display:inline-block;width:10px}.mrt[data-v-f6b679e6]{margin-top:15px}.flrt[data-v-f6b679e6]{float:right}","",{version:3,sources:["C:/Users/pc/Desktop/雀游PC后台总代码/queyou/queyou/src/page/withdrawals/withdrawals.vue"],names:[],mappings:"AACA,4BAA4B,qBAAsB,UAAY,CAC7D,AACD,sBAAsB,eAAiB,CACtC,AACD,uBAAuB,WAAa,CACnC",file:"withdrawals.vue",sourcesContent:["\n.lineblock[data-v-f6b679e6]{display: inline-block;width: 10px;\n}\n.mrt[data-v-f6b679e6]{margin-top: 15px;\n}\n.flrt[data-v-f6b679e6]{float: right;\n}\r\n"],sourceRoot:""}])},fQo9:function(t,a,e){"use strict";var l=e("BMa3"),o=e.n(l),n=e("DEjr");e.n(n);a.a={name:"withdrawals",data:function(){return{options2:[{value:"0",label:"审核通过"},{value:"5",label:"审核失败"}],value2:"",dialogVisible:!1,uids:null,allpage:null,options:[],value:"",tableData:[{},{}],currentPage3:1,labelPosition:"right",formLabelAlign:{code:"",amount:"",uid:"",orderid:null}}},methods:{watchDetails:function(t,a){console.log(a);var e=this;sessionStorage.details_uid=a.uid,e.$router.push({path:"/perdetails/perdetails"})},chose:function(t){console.log(t),console.log(this.value2)},submit:function(){var t=this;o.a.get("http://monkey.queyoujia.com/withdraw/check",{params:{code:"1009",orderId:t.formLabelAlign.orderid,status:t.value2,uid:t.formLabelAlign.uid}}).then(function(a){0==a.data.code?(t.$message({message:"审核成功",type:"success"}),t.tableData=[],t.allpage=null,t.currentPage3=1,o.a.get("http://monkey.queyoujia.com/withdraw/list",{params:{}}).then(function(a){console.log(a),t.tableData=a.data.data.list,t.allpage=a.data.data.total,t.tableData.forEach(function(t,a){t.amount=t.amount+"元","申请提现等待审批"==t.status||"审核失败"==t.status?(t.canedit="审核",t.color="info"):(t.canedit="已审核",t.color="success")});for(var e in a.data.data.allStatus)t.options.push({value:e,label:a.data.data.allStatus[e]})}).catch(function(t){console.log(t)})):t.$message({message:a.data.message,type:"warning"}),console.log(a)}).catch(function(t){console.log(t)}),t.dialogVisible=!1},handleClose:function(t){this.$confirm("确认关闭？").then(function(a){t()}).catch(function(t){})},reset:function(){var t=this;t.tableData=[],t.allpage=null,t.currentPage3=1,o.a.get("http://monkey.queyoujia.com/withdraw/list",{params:{page:1}}).then(function(a){console.log(a),t.tableData=a.data.data.list,t.allpage=a.data.data.total,t.tableData.forEach(function(t,a){t.amount=t.amount+"元","申请提现等待审批"==t.status||"审核失败"==t.status?(t.canedit="审核",t.color="info"):(t.canedit="已审核",t.color="success")});for(var e in a.data.data.allStatus)t.options.push({value:e,label:a.data.data.allStatus[e]})}).catch(function(t){console.log(t)})},search:function(){var t=this;t.tableData=[];var a={};t.currentPage3=1,a=t.value?{params:{page:1,uid:t.uids,status:t.value}}:{params:{page:1,uid:t.uids}},o.a.get("http://monkey.queyoujia.com/withdraw/list",a).then(function(a){console.log(a),t.tableData=a.data.data.list,t.allpage=1,t.allpage=a.data.data.total,t.tableData.forEach(function(t,a){t.amount=t.amount+"元","申请提现等待审批"==t.status||"审核失败"==t.status?(t.canedit="审核",t.color="info"):(t.canedit="已审核",t.color="success")})}).catch(function(t){console.log(t)})},handleEdit:function(t,a){var e=this;e.formLabelAlign.uid=a.uid,e.formLabelAlign.orderid=a.orderId,e.formLabelAlign.amount=a.amount,e.dialogVisible=!0},handleSizeChange:function(t){console.log("每页 "+t+" 条")},handleCurrentChange:function(t){console.log("当前页: "+t);var a=this;a.allpage=null,a.tableData=[],o.a.get("http://monkey.queyoujia.com/withdraw/list",{params:{page:t}}).then(function(t){console.log(t),a.tableData=t.data.data.list,a.allpage=t.data.data.total,a.tableData.forEach(function(t,a){t.amount=t.amount+"元","申请提现等待审批"==t.status||"审核失败"==t.status?(t.canedit="审核",t.color="info"):(t.canedit="已审核",t.color="success")})}).catch(function(t){console.log(t)})}},mounted:function(){var t=this;o.a.get("http://monkey.queyoujia.com/withdraw/list",{params:{}}).then(function(a){console.log(a),t.tableData=a.data.data.list,t.allpage=a.data.data.total,t.tableData.forEach(function(t,a){t.amount=t.amount+"元","申请提现等待审批"==t.status||"审核失败"==t.status?(t.canedit="审核",t.color="info"):(t.canedit="已审核",t.color="success")});for(var e in a.data.data.allStatus)t.options.push({value:e,label:a.data.data.allStatus[e]})}).catch(function(t){console.log(t)})}}},kwQ1:function(t,a,e){"use strict";function l(t){e("xL1v")}Object.defineProperty(a,"__esModule",{value:!0});var o=e("fQo9"),n=e("xczL"),s=e("Z0/y"),i=l,r=s(o.a,n.a,!1,i,"data-v-f6b679e6",null);a.default=r.exports},xL1v:function(t,a,e){var l=e("5BGp");"string"==typeof l&&(l=[[t.i,l,""]]),l.locals&&(t.exports=l.locals);e("FIqI")("8ec659be",l,!0,{})},xczL:function(t,a,e){"use strict";var l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"withdrawals"},[e("el-col",{staticClass:"mrt",attrs:{span:4}},[e("el-input",{attrs:{placeholder:"请输入游戏ID",type:"number"},model:{value:t.uids,callback:function(a){t.uids=a},expression:"uids"}})],1),t._v(" "),e("div",{staticClass:"lineblock"}),t._v(" "),e("el-select",{staticClass:"mrt",attrs:{placeholder:"请选择"},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}},t._l(t.options,function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),t._v(" "),e("div",{staticClass:"lineblock"}),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("搜索")]),t._v(" "),e("el-button",{on:{click:t.reset}},[t._v("清空")]),t._v(" "),e("el-table",{staticClass:"mrt",staticStyle:{width:"100%"},attrs:{data:t.tableData}},[e("el-table-column",{attrs:{align:"center","show-overflow-tooltip":"",label:"ID"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v("\n      "+t._s(a.row.id)+"\n    ")]}}])}),t._v(" "),e("el-table-column",{attrs:{align:"center","show-overflow-tooltip":"",label:"游戏id"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v("\n      "+t._s(a.row.uid)+"\n    ")]}}])}),t._v(" "),e("el-table-column",{attrs:{align:"center","show-overflow-tooltip":"",label:"昵称"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v("\n      "+t._s(a.row.nickname)+"\n    ")]}}])}),t._v(" "),e("el-table-column",{attrs:{align:"center","show-overflow-tooltip":"","show-overflow-tooltip":"",label:"订单号"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v("\n        "+t._s(a.row.orderId)+"\n    ")]}}])}),t._v(" "),e("el-table-column",{attrs:{align:"center","show-overflow-tooltip":"",label:"提现金额（元）"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v("\n       "+t._s(a.row.amount)+"\n    ")]}}])}),t._v(" "),e("el-table-column",{attrs:{align:"center","show-overflow-tooltip":"",label:"结算金额（元）"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v("\n       "+t._s(a.row.money)+"\n    ")]}}])}),t._v(" "),e("el-table-column",{attrs:{align:"center","show-overflow-tooltip":"",label:"税率"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v("\n       "+t._s(a.row.tax)+"\n    ")]}}])}),t._v(" "),e("el-table-column",{attrs:{align:"center","show-overflow-tooltip":"",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v("\n       "+t._s(a.row.status)+"\n    ")]}}])}),t._v(" "),e("el-table-column",{attrs:{align:"center","show-overflow-tooltip":"",label:"申请时间"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v("\n       "+t._s(a.row.applyTime)+"\n    ")]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"操作","min-width":"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{size:"small",type:a.row.color},on:{click:function(e){t.handleEdit(a.$index,a.row)}}},[t._v(t._s(a.row.canedit))]),t._v(" "),e("el-button",{attrs:{size:"small",type:"warning"},on:{click:function(e){t.watchDetails(a.$index,a.row)}}},[t._v("明细")])]}}])})],1),t._v(" "),e("el-pagination",{staticClass:"mrt flrt",attrs:{"current-page":t.currentPage3,"page-size":1,layout:"prev, pager, next, jumper",total:t.allpage},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(a){t.currentPage3=a}}}),t._v(" "),e("el-dialog",{attrs:{title:"提现审核",visible:t.dialogVisible,width:"30%","before-close":t.handleClose},on:{"update:visible":function(a){t.dialogVisible=a}}},[e("el-form",{attrs:{"label-position":t.labelPosition,"label-width":"80px",model:t.formLabelAlign}},[e("el-form-item",{attrs:{label:"游戏id"}},[e("el-input",{attrs:{type:"number",disabled:""},model:{value:t.formLabelAlign.uid,callback:function(a){t.$set(t.formLabelAlign,"uid",a)},expression:"formLabelAlign.uid"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"订单号"}},[e("el-input",{attrs:{disabled:""},model:{value:t.formLabelAlign.orderid,callback:function(a){t.$set(t.formLabelAlign,"orderid",a)},expression:"formLabelAlign.orderid"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"打款金额"}},[e("el-input",{attrs:{disabled:""},model:{value:t.formLabelAlign.amount,callback:function(a){t.$set(t.formLabelAlign,"amount",a)},expression:"formLabelAlign.amount"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"操作"}},[e("el-select",{attrs:{placeholder:"请选择"},on:{change:t.chose},model:{value:t.value2,callback:function(a){t.value2=a},expression:"value2"}},t._l(t.options2,function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)],1),t._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(a){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("确 定")])],1)],1)],1)},o=[],n={render:l,staticRenderFns:o};a.a=n}});
//# sourceMappingURL=8.31ea6316d18e250f52c0.js.map