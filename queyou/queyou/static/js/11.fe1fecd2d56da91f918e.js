webpackJsonp([11],{CN7k:function(t,a,e){var s=e("RRP6");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("FIqI")("107e3e35",s,!0,{})},Dewg:function(t,a,e){"use strict";var s=e("BMa3"),l=e.n(s),n=e("DEjr");e.n(n);a.a={name:"smrz",data:function(){return{seruid:null,allpage:1,resone:null,desc:null,loading:!1,imgurl1:null,imgurl2:null,cids:null,uids:null,idcard:null,tel:null,realname:null,guoji:null,options2:[{value:"1",label:"审核通过"},{value:"2",label:"审核失败"}],value2:"",dialogVisible:!1,options:[{value:"0",label:"未审核"},{value:"1",label:"审核通过"},{value:"2",label:"审核失败"}],value:"",chose2:null,tableData2:[],btncolor:null,btnstatus:null,currentPage3:1,val:null}},methods:{search:function(t){var a=this;l.a.get("http://monkey.queyoujia.com/realname/list",{params:{page:1,uid:a.seruid}}).then(function(t){console.log(t),a.tableData2=t.data.data.list,a.allpage=t.data.data.total,a.tableData2.forEach(function(t,e){console.log(t.status),"审核中"==t.status?(t.edit="审核",t.color="info",a.btnstatus=1):"审核通过"==t.status?(t.edit="审核成功",t.color="success",a.btnstatus=2):"审核失败"==t.status?(t.edit="审核失败",t.color="danger",a.btnstatus=3):(t.edit="暂无操作",t.color="danger",a.btnstatus=4)})}).catch(function(t){console.log(t)})},reset:function(t){var a=this;a.tableData2=[],a.allpage=null,a.currentPage3=1,l.a.get("http://monkey.queyoujia.com/realname/list",{params:{page:1}}).then(function(t){console.log(t),a.tableData2=t.data.data.list,a.allpage=t.data.data.total,a.tableData2.forEach(function(t,e){console.log(t.status),"审核中"==t.status?(t.edit="审核",t.color="info",a.btnstatus=1):"审核通过"==t.status?(t.edit="审核成功",t.color="success",a.btnstatus=2):"审核失败"==t.status?(t.edit="审核失败",t.color="danger",a.btnstatus=3):(t.edit="暂无操作",t.color="danger",a.btnstatus=4)})}).catch(function(t){console.log(t)})},handleSizeChange:function(t){console.log("每页 "+t+" 条")},handleCurrentChange:function(t){var a=this;a.tableData2=[],l.a.get("http://monkey.queyoujia.com/realname/list",{params:{page:t,status:a.val}}).then(function(t){console.log(t),a.tableData2=t.data.data.list,a.allpage=t.data.data.total,a.tableData2.forEach(function(t,e){console.log(t.status),"审核中"==t.status?(t.edit="审核",t.color="info",a.btnstatus=1):"审核通过"==t.status?(t.edit="审核成功",t.color="success",a.btnstatus=2):"审核失败"==t.status?(t.edit="审核失败",t.color="danger",a.btnstatus=3):(t.edit="暂无操作",t.color="danger",a.btnstatus=4)})}).catch(function(t){console.log(t)})},enchose:function(){var t=this;if("1"==t.chose2)l.a.get("http://monkey.queyoujia.com/realname/check",{params:{status:t.chose2,uid:t.uids,ch:t.cids}}).then(function(a){0==a.data.code?(t.$message({message:"审核完成",type:"success"}),l.a.get("http://monkey.queyoujia.com/realname/list",{params:{page:1}}).then(function(a){console.log(a),t.currentPage3=1,t.tableData2=a.data.data.list,t.allpage=a.data.data.total,t.tableData2.forEach(function(a,e){console.log(a.status),"审核中"==a.status?(a.edit="审核",a.color="info",t.btnstatus=1):"审核通过"==a.status?(a.edit="审核成功",a.color="success",t.btnstatus=2):"审核失败"==a.status?(a.edit="审核失败",a.color="danger",t.btnstatus=3):(a.edit="暂无操作",a.color="danger",t.btnstatus=4)})}).catch(function(t){console.log(t)})):t.$message({message:a.data.message,type:"error"}),t.dialogVisible=!1}).catch(function(t){console.log(t)});else{if("2"!=t.chose2)return;l.a.get("http://monkey.queyoujia.com/realname/check",{params:{status:t.chose2,uid:t.uids,ch:t.cids,reason:t.desc}}).then(function(a){0==a.data.code?(t.$message({message:"审核完成",type:"success"}),t.tableData2=[],t.allpage=null,t.currentPage3=1,l.a.get("http://monkey.queyoujia.com/realname/list",{params:{page:1}}).then(function(a){console.log(a),t.tableData2=a.data.data.list,t.allpage=a.data.data.total,t.tableData2.forEach(function(a,e){console.log(a.status),"审核中"==a.status?(a.edit="审核",a.color="info",t.btnstatus=1):"审核通过"==a.status?(a.edit="审核成功",a.color="success",t.btnstatus=2):"审核失败"==a.status?(a.edit="审核失败",a.color="danger",t.btnstatus=3):(a.edit="暂无操作",a.color="danger",t.btnstatus=4)})}).catch(function(t){console.log(t)})):t.$message({message:a.data.message,type:"error"}),t.dialogVisible=!1}).catch(function(t){console.log(t)})}},changeStatus:function(t){console.log(t);var a=this;a.val=t,a.currentPage3=1,l.a.get("http://monkey.queyoujia.com/realname/list",{params:{page:1,status:a.val}}).then(function(t){console.log(t),a.tableData2=t.data.data.list,a.allpage=t.data.data.total,a.tableData2.forEach(function(t,e){console.log(t.status),"审核中"==t.status?(t.edit="审核",t.color="info",a.btnstatus=1):"审核通过"==t.status?(t.edit="审核成功",t.color="success",a.btnstatus=2):"审核失败"==t.status?(t.edit="审核失败",t.color="danger",a.btnstatus=3):(t.edit="暂无操作",t.color="danger",a.btnstatus=4)})}).catch(function(t){console.log(t)})},tableRowClassName:function(t){var a=(t.row,t.rowIndex);return 1===a?"warning-row":3===a?"success-row":""},handleEdit:function(t,a){var e=this;"审核中"==a.status&&(e.dialogVisible=!0,e.loading=!0,e.guoji=a.nationality,e.realname=a.realname,e.tel=a.mobile,e.idcard=a.idcard,e.uids=a.uid,"1"==a.cid&&(e.cids="大冶棋牌"),"2"==a.cid&&(e.cids="八道雀神"),"3"==a.cid&&(e.cids="全民十三水"),e.imgurl1=a.photo_a,e.imgurl2=a.photo_b,console.log(t,a),e.loading=!1)},handleDelete:function(t,a){console.log(t,a)},select2:function(t){console.log(t);var a=this;a.resone="1"!=t&&"2"==t,a.chose2=t}},mounted:function(){var t=this;l.a.get("http://monkey.queyoujia.com/realname/list",{params:{page:1}}).then(function(a){console.log(a),t.tableData2=a.data.data.list,t.allpage=a.data.data.total,t.tableData2.forEach(function(a,e){console.log(a.status),"审核中"==a.status?(a.edit="审核",a.color="info",t.btnstatus=1):"审核通过"==a.status?(a.edit="审核成功",a.color="success",t.btnstatus=2):"审核失败"==a.status?(a.edit="审核失败",a.color="danger",t.btnstatus=3):(a.edit="暂无操作",a.color="danger",t.btnstatus=4)})}).catch(function(t){console.log(t)})}}},RRP6:function(t,a,e){a=t.exports=e("UTlt")(!0),a.push([t.i,".mrt[data-v-0d451d6e]{margin-top:10px}.flt[data-v-0d451d6e]{margin-left:10px}.mtt[data-v-0d451d6e]{margin-top:20px}.contxt[data-v-0d451d6e]{color:#000;font-family:\\\\5FAE\\8F6F\\96C5\\9ED1;margin:5px 0;font-size:16.5px;color:#2d2f33;font-weight:400}.tct[data-v-0d451d6e]{color:#5a5e66;font-weight:400;margin-left:15px}.frl[data-v-0d451d6e]{float:right;margin:15px}","",{version:3,sources:["C:/Users/pc/Desktop/雀游PC后台总代码/queyou/queyou/src/page/smrz/smrz.vue"],names:[],mappings:"AACA,sBAAsB,eAAiB,CACtC,AACD,sBAAsB,gBAAkB,CACvC,AACD,sBAAsB,eAAiB,CACtC,AACD,yBAAyB,WAAa,kCAAoB,aAAc,iBAAkB,cAAe,eAAmB,CAC3H,AACD,sBAAsB,cAAc,gBAAmB,gBAAkB,CACxE,AACD,sBAAsB,YAAa,WAAa,CAC/C",file:"smrz.vue",sourcesContent:['\n.mrt[data-v-0d451d6e]{margin-top: 10px;\n}\n.flt[data-v-0d451d6e]{margin-left: 10px;\n}\n.mtt[data-v-0d451d6e]{margin-top: 20px;\n}\n.contxt[data-v-0d451d6e]{color: black;font-family: "微软雅黑";margin: 5px 0;font-size: 16.5px;color:#2D2F33 ;font-weight: normal\n}\n.tct[data-v-0d451d6e]{color:#5A5E66;font-weight:normal;margin-left: 15px;\n}\n.frl[data-v-0d451d6e]{float: right;margin: 15px;\n}\r\n'],sourceRoot:""}])},Tp2w:function(t,a,e){"use strict";function s(t){e("CN7k")}Object.defineProperty(a,"__esModule",{value:!0});var l=e("Dewg"),n=e("vngS"),o=e("Z0/y"),c=s,i=o(l.a,n.a,!1,c,"data-v-0d451d6e",null);a.default=i.exports},vngS:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"smrz"},[e("el-col",{staticClass:"mrt",attrs:{span:3}},[e("el-input",{attrs:{placeholder:"请输入游戏ID",type:"number"},model:{value:t.seruid,callback:function(a){t.seruid=a},expression:"seruid"}})],1),t._v(" "),e("el-col",{staticClass:"mrt flt",attrs:{span:3}},[e("el-select",{attrs:{placeholder:"审核状态"},on:{change:t.changeStatus},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}},t._l(t.options,function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),e("el-col",{staticClass:"mrt flt",attrs:{span:3}},[e("el-button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")]),t._v(" "),e("el-button",{attrs:{type:"danger"},on:{click:t.reset}},[t._v("重置")])],1),t._v(" "),e("el-col",{staticClass:"mtt",attrs:{span:24}}),t._v(" "),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData2,"row-class-name":t.tableRowClassName}},[e("el-table-column",{attrs:{align:"center",prop:"id",label:"编号"}}),t._v(" "),e("el-table-column",{attrs:{align:"center",prop:"uid",label:"游戏ID"}}),t._v(" "),e("el-table-column",{attrs:{align:"center",prop:"realname",label:"真实姓名"}}),t._v(" "),e("el-table-column",{attrs:{align:"center",prop:"idcard",label:"身份证"}}),t._v(" "),e("el-table-column",{attrs:{sortable:"",align:"center",prop:"status",label:"审核状态"}}),t._v(" "),e("el-table-column",{attrs:{align:"center",prop:"operator",label:"操作人"}}),t._v(" "),e("el-table-column",{attrs:{align:"center",prop:"dateline",label:"申请时间"}}),t._v(" "),e("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{size:"small",type:a.row.color},on:{click:function(e){t.handleEdit(a.$index,a.row)}}},[t._v(t._s(a.row.edit))])]}}])})],1),t._v(" "),e("el-pagination",{staticClass:"frl",attrs:{"current-page":t.currentPage3,"page-size":1,layout:"prev, pager, next, jumper",total:t.allpage},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(a){t.currentPage3=a}}}),t._v(" "),e("el-dialog",{attrs:{title:"实名审核",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(a){t.dialogVisible=a}}},[e("el-col",{staticClass:"contxt",attrs:{span:12}},[t._v("\n    国籍："),e("span",{staticClass:"tct"},[t._v(t._s(t.guoji))])]),t._v(" "),e("el-col",{staticClass:"contxt",attrs:{span:12}},[t._v("\n    真实姓名:"),e("span",{staticClass:"tct"},[t._v(t._s(t.realname))])]),t._v(" "),e("el-col",{staticClass:"contxt",attrs:{span:12}},[t._v("\n    手机号码:"),e("span",{staticClass:"tct"},[t._v(t._s(t.tel))])]),t._v(" "),e("el-col",{staticClass:"contxt",attrs:{span:12}},[t._v("\n    证件号:"),e("span",{staticClass:"tct"},[t._v(t._s(t.idcard))])]),t._v(" "),e("el-col",{staticClass:"contxt",attrs:{span:12}},[t._v("\n    已审核游戏ID:"),e("span",{staticClass:"tct"},[t._v(t._s(t.uids))])]),t._v(" "),e("el-col",{staticClass:"contxt",attrs:{span:12}},[t._v("\n    区域:"),e("span",{staticClass:"tct"},[t._v(t._s(t.cids))])]),t._v(" "),e("el-col",{staticClass:"contxt",attrs:{span:12}},[t._v("\n    证件正面照：\n  ")]),t._v(" "),e("el-col",{staticClass:"contxt",attrs:{span:12}},[t._v("\n    证件反面照：\n  ")]),t._v(" "),e("el-col",{staticClass:"contxt",attrs:{span:12}},[e("img",{attrs:{src:t.imgurl1,alt:"loading...",width:"50%",height:"200"}})]),t._v(" "),e("el-col",{staticClass:"contxt",attrs:{span:12}},[e("img",{attrs:{src:t.imgurl2,alt:"loading...",width:"50%",height:"200"}})]),t._v(" "),e("el-col",{staticClass:"contxt",attrs:{span:24}},[t._v("\n    操作:\n    "),e("el-select",{attrs:{placeholder:"请选择"},on:{change:t.select2},model:{value:t.value2,callback:function(a){t.value2=a},expression:"value2"}},t._l(t.options2,function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),e("el-col",{directives:[{name:"show",rawName:"v-show",value:t.resone,expression:"resone"}],attrs:{span:24}},[e("el-input",{attrs:{type:"textarea",placeholder:"请输入审核失败理由"},model:{value:t.desc,callback:function(a){t.desc=a},expression:"desc"}})],1),t._v(" "),e("el-col",{attrs:{span:24}},[e("el-button",{staticClass:"frl",attrs:{type:"primary"},on:{click:t.enchose}},[t._v("确 定")]),t._v(" "),e("el-button",{staticClass:"frl",on:{click:function(a){t.dialogVisible=!1}}},[t._v("取 消")])],1)],1)],1)},l=[],n={render:s,staticRenderFns:l};a.a=n}});
//# sourceMappingURL=11.fe1fecd2d56da91f918e.js.map