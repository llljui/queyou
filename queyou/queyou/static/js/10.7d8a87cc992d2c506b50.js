webpackJsonp([10],{"9Ird":function(e,t,a){var n=a("h4tg");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("FIqI")("4f77fef2",n,!0,{})},V3Dw:function(e,t,a){"use strict";function n(e){a("9Ird")}Object.defineProperty(t,"__esModule",{value:!0});var o=a("YKpo"),s=a("xhNv"),c=a("Z0/y"),l=n,r=c(o.a,s.a,!1,l,"data-v-724366c1",null);t.default=r.exports},YKpo:function(e,t,a){"use strict";var n=a("BMa3"),o=a.n(n);t.a={name:"teammove",data:function(){return{checknames1:"等待验证...",checknames2:"等待验证...",userid:"",beuserid:"",allpage:1,tableData:[],currentPage:1}},mounted:function(){var e=this;o.a.get(sessionStorage.weburl+"promoter/movelog",{params:{}}).then(function(t){console.log(t),e.tableData=t.data.data.list,e.allpage=t.data.data.total}).catch(function(e){console.log(e)})},methods:{checkname1:function(){var e=this;7==e.userid.length&&o.a.get(sessionStorage.weburl+"user/check",{params:{uid:e.userid}}).then(function(t){console.log(t),0==t.data.code?e.checknames1=t.data.data.nickname:e.checknames1=t.data.message}).catch(function(e){console.log(e)})},checkname2:function(){var e=this;7==e.beuserid.length&&o.a.get(sessionStorage.weburl+"user/check",{params:{uid:e.beuserid}}).then(function(t){console.log(t),e.checknames2=t.data.data.nickname,0==t.data.code?e.checknames1=t.data.data.nickname:e.checknames1=t.data.message}).catch(function(e){console.log(e)})},handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){console.log("当前页: "+e);var t=this;t.tableData=[],o.a.get(sessionStorage.weburl+"promoter/movelog",{params:{page:e}}).then(function(e){console.log(e),t.tableData=e.data.data.list,t.allpage=e.data.data.total}).catch(function(e){console.log(e)})},addAdmin:function(){var e=this;7==e.userid.length&&7==e.beuserid.length?e.$prompt("请输入游戏ID","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(t){var a=t.value;o.a.get(sessionStorage.weburl+"promoter/userchange",{params:{uid:e.userid,pid:e.beuserid,code:a}}).then(function(t){console.log(t),0==t.data.code?(e.$message({type:"success",message:"添加成功!"}),e.tableData=[],e.currentPage=1,o.a.get(sessionStorage.weburl+"promoter/movelog",{params:{page:1}}).then(function(t){console.log(t),e.tableData=t.data.data.list,e.allpage=t.data.data.total}).catch(function(e){console.log(e)})):e.$message({type:"warning",message:t.data.message})}).catch(function(e){console.log(e)}),e.$message({type:"success",message:"添加成功!"})}).catch(function(){e.$message({type:"info",message:"取消输入"})}):e.$message({type:"info",message:"uid输入不全"})}}}},h4tg:function(e,t,a){t=e.exports=a("I71c")(!0),t.push([e.i,".mrt[data-v-724366c1]{margin:10px}.flrt[data-v-724366c1]{margin:10px;float:right}","",{version:3,sources:["C:/Users/pc/Desktop/monkey后台总代码/queyou/src/page/teammove/teammove.vue"],names:[],mappings:"AACA,sBAAsB,WAAY,CACjC,AACD,uBAAuB,YAAa,WAAa,CAChD",file:"teammove.vue",sourcesContent:["\n.mrt[data-v-724366c1]{margin:10px;\n}\n.flrt[data-v-724366c1]{margin: 10px;float: right;\n}\r\n"],sourceRoot:""}])},xhNv:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"teammove"},[a("el-col",{attrs:{span:4}},[a("el-input",{staticClass:"mrt",staticStyle:{"margin-left":"15px",width:"95%"},attrs:{type:"number",placeholder:"请输入转移人的id"},on:{change:e.checkname1},model:{value:e.userid,callback:function(t){e.userid=t},expression:"userid"}})],1),e._v(" "),a("el-col",{attrs:{span:4}},[a("el-input",{staticClass:"mrt",staticStyle:{"margin-left":"15px",width:"95%"},attrs:{type:"number",placeholder:"请输入转入代理的id"},on:{change:e.checkname2},model:{value:e.beuserid,callback:function(t){e.beuserid=t},expression:"beuserid"}})],1),e._v(" "),a("el-button",{staticClass:"mrt",attrs:{type:"primary"},on:{click:e.addAdmin}},[e._v("添加转移权限")]),e._v(" "),a("el-row",[a("el-col",{staticStyle:{"text-align":"left","margin-bottom":"5px",color:"#656565","font-size":"14px","text-indent":"1.5em"},attrs:{span:4}},[a("span",[e._v(e._s(e.checknames1))])]),e._v(" "),a("el-col",{staticStyle:{"text-align":"left","margin-bottom":"5px",color:"#656565","font-size":"14px","text-indent":"1.5em"},attrs:{span:5}},[a("span",[e._v(e._s(e.checknames2))])])],1),e._v(" "),[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{label:"转移人id","show-overflow-tooltip":"",align:"center",prop:"uid"}}),e._v(" "),a("el-table-column",{attrs:{label:"转入代理id",prop:"pid","show-overflow-tooltip":"",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"时间",prop:"dateline","show-overflow-tooltip":"",align:"center"}})],1),e._v(" "),a("el-pagination",{staticClass:"flrt",attrs:{"current-page":e.currentPage,"page-size":1,layout:"prev, pager, next, jumper",total:e.allpage},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}})]],2)},o=[],s={render:n,staticRenderFns:o};t.a=s}});
//# sourceMappingURL=10.7d8a87cc992d2c506b50.js.map