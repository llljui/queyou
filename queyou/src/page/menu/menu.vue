<template>
  <div class="menu">
 	<el-col :span="12" class="mrt">
      <el-tree
        :data="data2"
        show-checkbox      
        node-key="id"
        @check-change="ckchange"
        @current-change="curchange"
        :props="defaultProps">
      </el-tree>
       <!-- :default-expanded-keys="[2, 3]"
        :default-checked-keys="[5]" -->
  </el-col>
   </el-col>
   <el-col :span="10" :offset="2" >
   	<el-row><el-col :span="24" style="text-align:center;margin-bottom:35px;;"><h4>{{edits}}</h4></el-col></el-row>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
	  <el-form-item label="菜单名称">
	    <el-input v-model="formLabelAlign.menu"></el-input>
	  </el-form-item>
	  <el-form-item label="路由地址">
	    <el-input v-model="formLabelAlign.route"></el-input>
	  </el-form-item>
	  <el-form-item label="父ID">
	    <el-input v-model="formLabelAlign.pid"></el-input>
	  </el-form-item>
	  <el-form-item label="图标">
	    <el-input v-model="formLabelAlign.ico"></el-input>
	  </el-form-item>
	   <el-form-item>
	    <el-button type="primary" @click="submitForm">提交</el-button>
	    <el-button @click="resetForm">重置</el-button>
  	  </el-form-item>
	</el-form>
   </el-col>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
export default {
  name: 'menu',
  data () {
    return {
       data2: [],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
    	menuid:null,
    	menuname:null,
    	menupid:null,
    	menuurl:null,
    	edits:null,
    	labelPosition: 'right',
        formLabelAlign: {
        pid:'',
        name: '',
        route: '',
        ico: '',
        id:null
      }
    }
  },
  methods:{
    curchange:function (val,obj) {
      console.log(val);
      var self =this;
      self.edits="修改菜单";
      self.formLabelAlign.menu=val.name;
      self.formLabelAlign.route=val.ui_sref;
      self.formLabelAlign.pid=val.pid;
      self.formLabelAlign.ico=val.icon;
      self.formLabelAlign.id=val.id;
    },
    ckchange:function (val,ifcheck,nodecheck) {
      console.log(val);
      var self = this;
      self.edits="修改菜单";
      self.formLabelAlign.menu=val.name;
      self.formLabelAlign.route=val.ui_sref;
      self.formLabelAlign.pid=val.pid;
      self.formLabelAlign.ico=val.icon;
      self.formLabelAlign.id=val.id;
    },
  	submitForm() {
  		var self =this;
    		console.log(12)
    		if (self.edits=="修改菜单") {
    			axios.get('http://monkey.queyoujia.com/access/menu/update',{params:{icon:self.formLabelAlign.ico,id:self.formLabelAlign.id,name: self.formLabelAlign.menu,pid:self.formLabelAlign.pid,url:self.formLabelAlign.route,sid:'4edcb921b076802beda26abeae72f64d'}}).then(function (res) {
    				console.log(res);
    				if (res.data.code==0) {
    					self.$message({
				          message: '修改成功',
				          type: 'success'
				        });
                 self.edits="新增菜单";
                 self.formLabelAlign.menu=null;
                 self.formLabelAlign.route=null;
                 self.formLabelAlign.pid=null;
                 self.formLabelAlign.ico=null;
              axios.get('http://monkey.queyoujia.com/access/menu/list',{params:{}}).then(function (res) {
                self.data2=res.data.data.menu;
                self.data2.forEach(function (item,index) {
                  item.label=item.name+"("+item.id+")";
                })
                console.log(res);
              }).catch(function (err) {
                console.log(err);
              })
    				}else{
    					self.$message({
				          message: res.data.message,
				          type: 'info'
				        });
    				}
    			}).catch(function(err){
    				console.log(err);
    			});
    		}else if(self.edits=="新增菜单"){
    			axios.get('http://monkey.queyoujia.com/access/menu/add',{params:{icon:self.formLabelAlign.ico,id:self.menuid,name: self.formLabelAlign.menu,pid:self.formLabelAlign.pid,url:self.formLabelAlign.route}}).then(function (res) {
    				console.log(res);
    				if (res.data.code==0) {
    					self.$message({
				          message: '添加成功',
				          type: 'success'
				        });
               self.edits="新增菜单";
               self.formLabelAlign.menu=null;
               self.formLabelAlign.route=null;
               self.formLabelAlign.pid=null;
               self.formLabelAlign.ico=null;
              axios.get('http://monkey.queyoujia.com/access/menu/list',{params:{}}).then(function (res) {
                self.data2=res.data.data.menu;
                self.data2.forEach(function (item,index) {
                  item.label=item.name+"("+item.id+")";
                })
                console.log(res);
              }).catch(function (err) {
                console.log(err);
              })
    				}else{
    					self.$message({
				          message: res.data.message,
				          type: 'info'
				        });
    				}
    			}).catch(function(err){
    				console.log(err);
    			})
    		}else{return;}
      },
      resetForm() {
       var self =this;
     self.edits="新增菜单";
     self.formLabelAlign.menu=null;
	   self.formLabelAlign.route=null;
	   self.formLabelAlign.pid=null;
	   self.formLabelAlign.ico=null;
      }
  },
  mounted(){
  	console.log(22);
  	var self = this;
  	self.edits='新增菜单';
  	axios.get('http://monkey.queyoujia.com/access/menu/list',{params:{}}).then(function (res) {
      self.data2=res.data.data.menu;
  		self.data2.forEach(function (item,index) {
        item.label=item.name+"("+item.id+")";
  		})
  		console.log(res);
  	}).catch(function (err) {
  		console.log(err);
  	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mrt{margin-top:15px;max-height: 800px;}
 .el-row {
    margin-bottom:0vh;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
  	height: 3vh;
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
  	text-align: left;
  	color: #545454;font-family: '微软雅黑';line-height: 3vh;
    /* background: #d3dce6; */
    padding-left: 1vw;
    cursor: pointer;
    border-bottom: 1px solid #545645;
  }
  .bg-purple:hover{text-decoration: underline;color: red;}
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
   border-radius: 0px;
  }
</style>
