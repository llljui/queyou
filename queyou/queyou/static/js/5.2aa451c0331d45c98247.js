webpackJsonp([5],{"3cXf":function(e,a,t){e.exports={default:t("4rP4"),__esModule:!0}},"4rP4":function(e,a,t){var n=t("UusJ"),o=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},"5qrQ":function(e,a,t){"use strict";var n=t("3cXf"),o=t.n(n),l=t("a3Yh"),r=t.n(l),i=t("BMa3"),s=t.n(i),c=t("DEjr");t.n(c);a.a={name:"authority",data:function(){return r()({ids:null,title:"添加接口",auth:null,labelPosition:"right",formLabelAlign:{name:"",region:"",type:""},data2:[],defaultProps:{children:"children",label:"label"},addorup:1},"ids",null)},methods:{Delete:function(){var e=this;s.a.get("http://monkey.queyoujia.com/access/operate/delete",{params:{id:e.ids}}).then(function(a){0==a.data.code?(e.$message({message:"删除成功",type:"success"}),s.a.get("http://monkey.queyoujia.com/access/operate/newlist",{params:{}}).then(function(a){e.data2=a.data.data.operate,e.data2.forEach(function(e,a){e.label=e.name+"("+e.id+")",e.children=e.child,e.children.length>0?(console.log(e.children),e.children.forEach(function(e,a){console.log(e),e.label=e.name})):console.log("nochild")})}).catch(function(e){console.log(e)})):e.$message({message:a.data.message,type:"warning"})}).catch(function(e){console.log(e)})},saverouter:function(){var e,a=this;1==a.addorup?e="http://monkey.queyoujia.com/access/operate/add":2==a.addorup?e="http://monkey.queyoujia.com/access/operate/update":alert("未知错误"),s.a.get(e,{params:{id:a.ids,name:a.formLabelAlign.name,pid:a.formLabelAlign.type,router:a.formLabelAlign.region}}).then(function(e){0==e.data.code?(a.$message({message:"保存成功",type:"success"}),s.a.get("http://monkey.queyoujia.com/access/operate/newlist",{params:{}}).then(function(e){console.log(e),a.data2=e.data.data.operate,a.data2.forEach(function(e,a){e.label=e.name+"("+e.id+")",e.children=e.child,e.children.length>0?(console.log(e.children),e.children.forEach(function(e,a){console.log(e),e.label=e.name})):console.log("nochild")})}).catch(function(e){console.log(e)})):a.$message({message:e.data.message,type:"warning"})}).catch(function(e){console.log(e)})},reset:function(){var e=this;e.title="添加接口",e.formLabelAlign.name=null,e.formLabelAlign.region=null,e.formLabelAlign.type=null,e.auth=null,e.addorup=1,e.ids=null},changeval:function(e,a){console.log(o()(e)),console.log(a);var t=this;t.auth=e.name,t.formLabelAlign.name=e.name,t.formLabelAlign.region=e.router,t.formLabelAlign.type=e.pid,t.title="修改接口",t.addorup=2,t.ids=e.id},changecheck:function(e,a,t){var n=this;n.addorup=2,n.auth=e.name,n.auth=e.name,n.formLabelAlign.name=e.name,n.formLabelAlign.region=e.router,n.formLabelAlign.type=e.pid,n.title="修改接口",n.ids=e.id,console.log(e),console.log(a),console.log(t)}},mounted:function(){var e=this;s.a.get("http://monkey.queyoujia.com/access/operate/newlist",{params:{}}).then(function(a){console.log(a),e.data2=a.data.data.operate,e.data2.forEach(function(e,a){e.label=e.name+"("+e.id+")",e.children=e.child,e.children.length>0?(console.log(e.children),e.children.forEach(function(e,a){console.log(e),e.label=e.name})):console.log("nochild")})}).catch(function(e){console.log(e)})}}},EWrB:function(e,a,t){var n=t("MwB3");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);t("FIqI")("05785f06",n,!0,{})},MwB3:function(e,a,t){a=e.exports=t("I71c")(!0),a.push([e.i,".mrt[data-v-688b2d32]{margin:15px 0}.mrl[data-v-688b2d32]{margin-left:40px}.flr[data-v-688b2d32]{float:right}.mrr[data-v-688b2d32]{margin-left:20px}","",{version:3,sources:["C:/Users/pc/Desktop/monkey后台总代码/queyou/src/page/authority/authority.vue"],names:[],mappings:"AACA,sBAAsB,aAAc,CACnC,AACD,sBAAsB,gBAAkB,CACvC,AACD,sBAAsB,WAAa,CAClC,AACD,sBAAsB,gBAAkB,CACvC",file:"authority.vue",sourcesContent:["\n.mrt[data-v-688b2d32]{margin:15px 0;\n}\n.mrl[data-v-688b2d32]{margin-left: 40px;\n}\n.flr[data-v-688b2d32]{float: right;\n}\n.mrr[data-v-688b2d32]{margin-left: 20px;\n}\r\n"],sourceRoot:""}])},ZqYg:function(e,a,t){"use strict";function n(e){t("EWrB")}Object.defineProperty(a,"__esModule",{value:!0});var o=t("5qrQ"),l=t("rjk0"),r=t("Z0/y"),i=n,s=r(o.a,l.a,!1,i,"data-v-688b2d32",null);a.default=s.exports},rjk0:function(e,a,t){"use strict";var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"authority"},[t("el-col",{staticClass:"mrt",attrs:{span:12}},[t("el-tree",{attrs:{data:e.data2,"show-checkbox":"","node-key":"id",props:e.defaultProps},on:{"current-change":e.changeval,"check-change":e.changecheck}})],1),e._v(" "),t("el-col",{staticClass:"mrt mrl",attrs:{span:10}},[t("h4",[e._v(e._s(e.title)+"--"+e._s(e.auth))]),e._v(" "),t("el-form",{attrs:{"label-position":e.labelPosition,"label-width":"80px",model:e.formLabelAlign}},[t("el-form-item",{attrs:{label:"接口名称"}},[t("el-input",{model:{value:e.formLabelAlign.name,callback:function(a){e.$set(e.formLabelAlign,"name",a)},expression:"formLabelAlign.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"路由地址"}},[t("el-input",{model:{value:e.formLabelAlign.region,callback:function(a){e.$set(e.formLabelAlign,"region",a)},expression:"formLabelAlign.region"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"父id"}},[t("el-input",{model:{value:e.formLabelAlign.type,callback:function(a){e.$set(e.formLabelAlign,"type",a)},expression:"formLabelAlign.type"}})],1)],1),e._v(" "),t("el-button",{staticStyle:{"margin-left":"40px"},on:{click:e.reset}},[e._v("重置")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:e.saverouter}},[e._v("保存")]),e._v(" "),t("el-button",{staticStyle:{float:"right"},attrs:{type:"danger"},on:{click:e.Delete}},[e._v("删除")])],1)],1)},o=[],l={render:n,staticRenderFns:o};a.a=l}});
//# sourceMappingURL=5.2aa451c0331d45c98247.js.map