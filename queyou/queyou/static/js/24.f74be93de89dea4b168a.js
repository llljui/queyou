webpackJsonp([24],{"0xR9":function(e,a,t){a=e.exports=t("I71c")(!0),a.push([e.i,".mrt[data-v-5ec33aef]{margin:15px}.flrt[data-v-5ec33aef]{float:right}.mrt1[data-v-5ec33aef]{margin-top:15px;margin-left:15px}.dia[data-v-5ec33aef]{width:30%}.ifms[data-v-5ec33aef]{width:50vw;position:fixed;z-index:10000;display:block;top:2vh;left:25vw;border-radius:5px}iframe[data-v-5ec33aef]{display:block;width:100%;height:35vh;border-radius:5px}","",{version:3,sources:["C:/Users/pc/Desktop/monkey后台总代码/queyou/src/page/packageversion/packageversion.vue"],names:[],mappings:"AACA,sBAAsB,WAAa,CAClC,AACD,uBAAuB,WAAa,CACnC,AACD,uBAAuB,gBAAiB,gBAAkB,CACzD,AACD,sBAAsB,SAAW,CAChC,AACD,uBAAuB,WAAY,AAC/B,eAAgB,AAChB,cAAe,AACf,cAAe,AACf,QAAS,AACT,UAAW,AACX,iBAAmB,CACtB,AACD,wBAAwB,cAAe,AACnC,WAAY,AACZ,YAAa,AACb,iBAAmB,CACtB",file:"packageversion.vue",sourcesContent:["\n.mrt[data-v-5ec33aef]{margin: 15px;\n}\n.flrt[data-v-5ec33aef]{float: right;\n}\n.mrt1[data-v-5ec33aef]{margin-top: 15px;margin-left: 15px;\n}\n.dia[data-v-5ec33aef]{width: 30%;\n}\n.ifms[data-v-5ec33aef]{width: 50vw;\r\n    position: fixed;\r\n    z-index: 10000;\r\n    display: block;\r\n    top: 2vh;\r\n    left: 25vw;\r\n    border-radius: 5px;\n}\niframe[data-v-5ec33aef]{display: block;\r\n    width: 100%;\r\n    height: 35vh;\r\n    border-radius: 5px;\n}\r\n"],sourceRoot:""}])},JqUC:function(e,a,t){"use strict";var l=t("BMa3"),i=t.n(l),n=t("DEjr"),o=t.n(n);a.a={name:"packageversion",data:function(){return{iframe_show:!1,dialogVisible:!1,tableData:[{}],labelPosition:"right",formLabelAlign:{title:"",cid:"",type:"",size:"",url:"",ver:""},options:[{value:"1",label:"大冶棋牌"},{value:"2",label:"八道雀神"},{value:"3",label:"决战绍兴"},{value:"8",label:"全民十三水"}],value:"",sb:null,ids:null}},methods:{chosegame:function(e){console.log(e),this.formLabelAlign.cid=e},submit:function(){var e=this;if(e.dialogVisible=!1,e.iframe_show=!1,1==e.sb){var a={cid:e.formLabelAlign.cid,title:e.formLabelAlign.title,type:e.formLabelAlign.type,size:e.formLabelAlign.size,url:e.formLabelAlign.url,version:e.formLabelAlign.ver};i.a.post("http://monkey.queyoujia.com/apkconfig/add",o.a.stringify(a),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(a){0==a.data.code?(e.$message({showClose:!0,message:"添加成功",type:"success"}),e.tableData=[],i.a.get("http://monkey.queyoujia.com/apkconfig/list",{params:{}}).then(function(a){console.log(a),e.tableData=a.data.data.list,e.tableData.forEach(function(e,a){if(1==e.cid)e.cid="大冶棋牌";else if(2==e.cid)e.cid="八道雀神";else if(3==e.cid)e.cid="决战绍兴";else{if(8!=e.cid)return;e.cid="全民十三水"}})}).catch(function(e){console.log(e)})):e.$message({showClose:!0,message:a.data.message,type:"warning"})}).then(function(e){console.log(e)})}else{e.options.forEach(function(a,t){console.log(a.value),console.log(a.label),e.formLabelAlign.cid==a.label&&(e.formLabelAlign.cid=a.value)});var a={cid:e.formLabelAlign.cid,title:e.formLabelAlign.title,type:e.formLabelAlign.type,size:e.formLabelAlign.size,url:e.formLabelAlign.url,version:e.formLabelAlign.ver,id:e.ids};i.a.post("http://monkey.queyoujia.com/apkconfig/update",o.a.stringify(a),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(a){0==a.data.code?(e.$message({showClose:!0,message:"修改成功",type:"success"}),e.tableData=[],i.a.get("http://monkey.queyoujia.com/apkconfig/list",{params:{}}).then(function(a){console.log(a),e.tableData=a.data.data.list,e.tableData.forEach(function(e,a){if(1==e.cid)e.cid="大冶棋牌";else if(2==e.cid)e.cid="八道雀神";else if(3==e.cid)e.cid="决战绍兴";else{if(8!=e.cid)return;e.cid="全民十三水"}})}).catch(function(e){console.log(e)})):e.$message({showClose:!0,message:a.data.message,type:"warning"})}).then(function(e){console.log(e)})}},addset:function(){var e=this;e.dialogVisible=!0,e.iframe_show=!0,e.sb=1,e.formLabelAlign.cid=null,e.formLabelAlign.title=null,e.formLabelAlign.type=null,e.formLabelAlign.size=null,e.formLabelAlign.url=null,e.formLabelAlign.ver=null},handleClose:function(e){var a=this;this.$confirm("确认关闭？").then(function(t){a.iframe_show=!1,e()}).catch(function(e){})},handleEdit:function(e,a){console.log(e,a);var t=this;t.dialogVisible=!0,t.iframe_show=!0,t.sb=2,t.ids=a.id,i.a.get("http://monkey.queyoujia.com/apkconfig/edit",{params:{id:a.id}}).then(function(e){t.formLabelAlign.title=e.data.data.title,t.formLabelAlign.type=e.data.data.type,t.formLabelAlign.size=e.data.data.size,t.formLabelAlign.url=e.data.data.url,t.formLabelAlign.ver=e.data.data.version,t.options.forEach(function(a,l){console.log(a.value),console.log(a.label),e.data.data.cid==a.value&&(t.formLabelAlign.cid=a.label)})}).catch(function(e){console.log(e)})},handleDelete:function(e,a){var t=this;t.$confirm("删除该配置, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){i.a.get("http://monkey.queyoujia.com/apkconfig/delete",{params:{id:a.id}}).then(function(e){console.log(e),0==e.data.code?(t.$message({type:"success",message:"删除成功!"}),i.a.get("http://monkey.queyoujia.com/apkconfig/list",{params:{}}).then(function(e){console.log(e),t.tableData=e.data.data.list,t.tableData.forEach(function(e,a){if(1==e.cid)e.cid="大冶棋牌";else if(2==e.cid)e.cid="八道雀神";else if(3==e.cid)e.cid="决战绍兴";else{if(8!=e.cid)return;e.cid="全民十三水"}})}).catch(function(e){console.log(e)})):t.$message({type:"warning",message:e.data.message})}).catch(function(e){console.log(e)})}).catch(function(){t.$message({type:"info",message:"已取消删除"})}),console.log(e,a)}},mounted:function(){var e=this;i.a.get("http://monkey.queyoujia.com/apkconfig/list",{params:{}}).then(function(a){console.log(a),e.tableData=a.data.data.list,e.tableData.forEach(function(e,a){if(1==e.cid)e.cid="大冶棋牌";else if(2==e.cid)e.cid="八道雀神";else if(3==e.cid)e.cid="决战绍兴";else{if(8!=e.cid)return;e.cid="全民十三水"}})}).catch(function(e){console.log(e)})}}},gxZk:function(e,a,t){"use strict";var l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"packageversion"},[[t("el-button",{staticClass:"mrt1",attrs:{type:"primary"},on:{click:e.addset}},[e._v("添加新配置")]),e._v(" "),t("el-table",{staticClass:"mrt",staticStyle:{width:"100%"},attrs:{data:e.tableData}},[t("el-table-column",{attrs:{align:"center",label:"ID"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(a.row.id))])]}}])}),e._v(" "),t("el-table-column",{attrs:{align:"center",label:"所属游戏"},scopedSlots:e._u([{key:"default",fn:function(a){return[e._v("\n        "+e._s(a.row.cid)+"\n      ")]}}])}),e._v(" "),t("el-table-column",{attrs:{align:"center",label:"标题"},scopedSlots:e._u([{key:"default",fn:function(a){return[e._v("\n        "+e._s(a.row.title)+"\n      ")]}}])}),e._v(" "),t("el-table-column",{attrs:{align:"center","show-overflow-tooltip":"",label:"下载地址"},scopedSlots:e._u([{key:"default",fn:function(a){return[e._v("\n        "+e._s(a.row.url)+"\n      ")]}}])}),e._v(" "),t("el-table-column",{attrs:{align:"center",label:"设备"},scopedSlots:e._u([{key:"default",fn:function(a){return[e._v("\n        "+e._s(a.row.type)+"\n      ")]}}])}),e._v(" "),t("el-table-column",{attrs:{align:"center",label:"安装包大小"},scopedSlots:e._u([{key:"default",fn:function(a){return[e._v("\n        "+e._s(a.row.size)+" M\n      ")]}}])}),e._v(" "),t("el-table-column",{attrs:{align:"center",label:"安装包版本"},scopedSlots:e._u([{key:"default",fn:function(a){return[e._v("\n        "+e._s(a.row.version)+"\n      ")]}}])}),e._v(" "),t("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){e.handleEdit(a.$index,a.row)}}},[e._v("\n        编辑\n      ")]),e._v(" "),t("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){e.handleDelete(a.$index,a.row)}}},[e._v("\n        删除\n      ")])]}}])})],1)],e._v(" "),t("el-pagination",{staticClass:"flrt",attrs:{layout:"prev, pager, next",total:1}}),e._v(" "),t("el-dialog",{staticStyle:{top:"28vh"},attrs:{title:"游戏上传项配置",visible:e.dialogVisible,"custom-class":"dia","before-close":e.handleClose},on:{"update:visible":function(a){e.dialogVisible=a}}},[t("el-form",{attrs:{"label-position":e.labelPosition,"label-width":"80px",model:e.formLabelAlign}},[t("el-form-item",{attrs:{label:"所属游戏"}},[t("el-select",{attrs:{placeholder:"请选择"},on:{change:e.chosegame},model:{value:e.formLabelAlign.cid,callback:function(a){e.$set(e.formLabelAlign,"cid",a)},expression:"formLabelAlign.cid"}},e._l(e.options,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"标题内容"}},[t("el-input",{model:{value:e.formLabelAlign.title,callback:function(a){e.$set(e.formLabelAlign,"title",a)},expression:"formLabelAlign.title"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"下载地址"}},[t("el-input",{model:{value:e.formLabelAlign.url,callback:function(a){e.$set(e.formLabelAlign,"url",a)},expression:"formLabelAlign.url"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"设备类型"}},[t("el-radio-group",{model:{value:e.formLabelAlign.type,callback:function(a){e.$set(e.formLabelAlign,"type",a)},expression:"formLabelAlign.type"}},[t("el-radio",{attrs:{label:1}},[e._v("安卓")]),e._v(" "),t("el-radio",{attrs:{label:2}},[e._v("IOS")])],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"版本号"}},[t("el-input",{model:{value:e.formLabelAlign.ver,callback:function(a){e.$set(e.formLabelAlign,"ver",a)},expression:"formLabelAlign.ver"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"包大小(M)"}},[t("el-input",{attrs:{type:"number"},model:{value:e.formLabelAlign.size,callback:function(a){e.$set(e.formLabelAlign,"size",a)},expression:"formLabelAlign.size"}})],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(a){e.dialogVisible=!1,e.iframe_show=!1}}},[e._v("取 消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("确 定")])],1)],1),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.iframe_show,expression:"iframe_show"}],staticClass:"ifms"},[t("iframe",{directives:[{name:"show",rawName:"v-show",value:e.iframe_show,expression:"iframe_show"}],attrs:{src:"http://monkey.queyoujia.com/html/upload/build/"}})])],2)},i=[],n={render:l,staticRenderFns:i};a.a=n},id6H:function(e,a,t){"use strict";function l(e){t("o5xM")}Object.defineProperty(a,"__esModule",{value:!0});var i=t("JqUC"),n=t("gxZk"),o=t("Z0/y"),s=l,r=o(i.a,n.a,!1,s,"data-v-5ec33aef",null);a.default=r.exports},o5xM:function(e,a,t){var l=t("0xR9");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);t("FIqI")("5c404048",l,!0,{})}});
//# sourceMappingURL=24.f74be93de89dea4b168a.js.map