webpackJsonp([12],{"1cHd":function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading2,expression:"loading2"}],staticClass:"menu"},[o("el-form",{ref:"form",staticClass:"mrt",attrs:{model:e.form,"label-width":"80px"}},[o("el-form-item",{attrs:{label:"游戏ID"}},[o("el-input",{on:{change:function(t){e.checkid()}},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"昵称"}},[o("el-col",{attrs:{span:3}},[o("el-input",{attrs:{type:"text",disabled:""},model:{value:e.form.nickname,callback:function(t){e.$set(e.form,"nickname",t)},expression:"form.nickname"}})],1)],1),e._v(" "),o("el-form-item",{attrs:{label:"剩余钻石"}},[o("el-col",{attrs:{span:4}},[o("el-input",{attrs:{type:"text",disabled:""},model:{value:e.form.surplus,callback:function(t){e.$set(e.form,"surplus",t)},expression:"form.surplus"}})],1)],1),e._v(" "),o("el-form-item",{attrs:{label:"操作方式"}},[o("el-cascader",{attrs:{options:e.options},on:{change:e.handleChange},model:{value:e.selectedOptions,callback:function(t){e.selectedOptions=t},expression:"selectedOptions"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"操作数量"}},[o("el-col",{attrs:{span:4}},[o("el-input",{attrs:{type:"number",placeholder:"钻石数量"},model:{value:e.form.count,callback:function(t){e.$set(e.form,"count",t)},expression:"form.count"}})],1)],1),e._v(" "),o("el-form-item",{attrs:{label:"备注"}},[o("el-col",{attrs:{span:10}},[o("el-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1)],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("确定")]),e._v(" "),o("el-button",[e._v("取消")])],1)],1)],1)},a=[],s={render:n,staticRenderFns:a};t.a=s},Gy0a:function(e,t,o){var n=o("XV/H");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);o("FIqI")("4a8391cd",n,!0,{})},"XV/H":function(e,t,o){t=e.exports=o("UTlt")(!0),t.push([e.i,".bor[data-v-6e06701f]{border:0}.mrt[data-v-6e06701f]{margin-top:2vh}","",{version:3,sources:["C:/Users/pc/Desktop/雀游PC后台总代码/queyou/queyou/src/page/rgqz/rgqz.vue"],names:[],mappings:"AACA,sBAAsB,QAAS,CAC9B,AACD,sBAAsB,cAAgB,CACrC",file:"rgqz.vue",sourcesContent:["\n.bor[data-v-6e06701f]{border:0;\n}\n.mrt[data-v-6e06701f]{margin-top: 2vh;\n}\r\n"],sourceRoot:""}])},iR6v:function(e,t,o){"use strict";function n(e){o("Gy0a")}Object.defineProperty(t,"__esModule",{value:!0});var a=o("k8pG"),s=o("1cHd"),r=o("Z0/y"),c=n,l=r(a.a,s.a,!1,c,"data-v-6e06701f",null);t.default=l.exports},k8pG:function(e,t,o){"use strict";var n=o("BMa3"),a=o.n(n),s=o("DEjr"),r=o.n(s);t.a={name:"menu",data:function(){return{options:[{value:"-1",label:"减少"}],form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:"",nickname:"",count:null},selectedOptions:[],selectedOptions2:[],jianshao:null,surplus:null,loading2:!1}},methods:{czfs:function(e){},onSubmit:function(){var e=this;if(e.loading2=!0,console.log(e.form.count+""+e.form.name+e.jianshao+e.form.desc),e.form.count&&e.form.name&&e.jianshao){var t={amount:e.form.count,uid:e.form.name,amountType:e.jianshao,remark:e.form.desc};a.a.post("http://monkey.queyoujia.com/rich/manual_dia_order",r.a.stringify(t),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){var o=this;0==t.data.code?e.$prompt("请输入管理员验证码","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(o){var n=o.value,s={checkCode:n,orderId:t.data.data.orderId};a.a.post("http://monkey.queyoujia.com/rich/dec_diamond_notify",r.a.stringify(s),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){return console.log(t.data.code),0==t.data.code?void e.$notify({title:"成功",message:"扣钻成功",type:"success"}):void e.$notify.error({title:"错误",message:"验证码验证失败"})}).catch(function(e){console.log(e)})}).catch(function(){o.$message({type:"info",message:"取消输入"})}):e.$message({message:t.data.message,type:"warning"}),e.loading2=!1}).catch(function(e){console.log(e)})}else e.$message({message:"请检查输入是否正确",type:"warning"})},nickname:function(){},handleChange:function(e){var t=this;console.log(e[0]),t.jianshao=e[0]},checkid:function(){var e=this;if(console.log(e.form.name),7==e.form.name.length){var t={ch:"hz",uid:e.form.name};a.a.post("http://monkey.queyoujia.com/user/check",r.a.stringify(t),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){console.log(t.data.data),e.form.nickname=t.data.data.nickname,e.form.surplus=t.data.data.leftDiamond}).catch(function(e){console.log(e)})}else console.log("长度不一")}}}}});
//# sourceMappingURL=12.3c3d65b16797e8d09e9a.js.map