webpackJsonp([34],{IuYM:function(e,a,t){a=e.exports=t("I71c")(!0),a.push([e.i,"el-table .warning-row[data-v-10e6936f]{background:oldlace}.el-table .success-row[data-v-10e6936f]{background:#f0f9eb}.mrt[data-v-10e6936f]{margin-top:16px}","",{version:3,sources:["C:/Users/pc/Desktop/monkey后台总代码/queyou/src/page/detailpro/detailpro.vue"],names:[],mappings:"AACA,uCACI,kBAAoB,CACvB,AACD,wCACI,kBAAoB,CACvB,AACD,sBAAsB,eAAgB,CACrC",file:"detailpro.vue",sourcesContent:["\nel-table .warning-row[data-v-10e6936f] {\r\n    background: oldlace;\n}\n.el-table .success-row[data-v-10e6936f] {\r\n    background: #f0f9eb;\n}\n.mrt[data-v-10e6936f]{margin-top:16px;\n}\r\n"],sourceRoot:""}])},"JZ/3":function(e,a,t){var n=t("IuYM");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);t("FIqI")("78155d33",n,!0,{})},YsSo:function(e,a,t){"use strict";function n(e){t("JZ/3")}Object.defineProperty(a,"__esModule",{value:!0});var r=t("h57c"),l=t("b5b1"),o=t("Z0/y"),s=n,c=o(r.a,l.a,!1,s,"data-v-10e6936f",null);a.default=c.exports},b5b1:function(e,a,t){"use strict";var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"detailpro"},[t("el-table",{staticClass:"mrt",staticStyle:{width:"100%"},attrs:{data:e.tableData2,"row-class-name":e.tableRowClassName}},[t("el-table-column",{attrs:{align:"center",prop:"realName",label:"真实姓名"}}),e._v(" "),t("el-table-column",{attrs:{prop:"mobile",align:"center",label:"手机号"}}),e._v(" "),t("el-table-column",{attrs:{prop:"address",align:"center",label:"身份证号"}}),e._v(" "),t("el-table-column",{attrs:{prop:"address",align:"center",label:"剩余钻石"}}),e._v(" "),t("el-table-column",{attrs:{prop:"address",align:"center",label:"上级游戏ID"}}),e._v(" "),t("el-table-column",{attrs:{prop:"address",align:"center",label:"上级昵称"}}),e._v(" "),t("el-table-column",{attrs:{prop:"address",align:"center",label:"剩余砖石"}})],1)],1)},r=[],l={render:n,staticRenderFns:r};a.a=l},h57c:function(e,a,t){"use strict";var n=t("BMa3"),r=t.n(n),l=t("DEjr");t.n(l);a.a={name:"detailpro",data:function(){return{tableData2:[]}},methods:{tableRowClassName:function(e){var a=(e.row,e.rowIndex);return 1===a?"warning-row":3===a?"success-row":""}},mounted:function(){r.a.get("http://monkey.queyoujia.com//user/detail",{params:{sid:"",uid:"2061160"}}).then(function(e){console.log(e.data.data)}).catch(function(e){console.log(e)})}}}});
//# sourceMappingURL=34.61108a2253a2a42e2661.js.map