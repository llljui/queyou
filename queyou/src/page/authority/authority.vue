<template>
  <div class="authority">
    <el-col :span="12" class="mrt">
    <el-tree
      :data="data2"
      show-checkbox
      node-key="id"
      @current-change="changeval"
      @check-change="changecheck"
      :props="defaultProps">
    </el-tree>     <!--  :default-expanded-keys="[2, 3]"
      :default-checked-keys="[5]" -->
    </el-col>
    <el-col :span="10" class="mrt mrl">
      <h4>{{title}}--{{auth}}</h4>
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="接口名称">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="路由地址">
          <el-input v-model="formLabelAlign.region"></el-input>
        </el-form-item>
        <el-form-item label="父id">
          <el-input v-model="formLabelAlign.type"></el-input>
        </el-form-item>
      </el-form>
       <el-button  @click="reset" style="margin-left:40px;">重置</el-button>
       <el-button type="primary"  @click="saverouter">保存</el-button>
       <el-button  @click="Delete" type="danger" style="float:right">删除</el-button>
    </el-col>
  </div>
</template>

<script>
import axios from "axios";
import qs from 'qs';
export default {
  name: 'authority',
  data() {
      return {
        ids:null,
        title:'添加接口',
        auth:null,
         labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
        data2: [],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        addorup:1,
        ids:null
      };
    },
    methods:{
      Delete:function () {
        var self=this;
        axios.get('http://monkey.queyoujia.com/access/operate/delete',{params:{id:self.ids}}).then(function (res) {
            if (res.data.code==0) {
              self.$message({
                 message: '删除成功',
                 type: 'success'
               });
               axios.get('http://monkey.queyoujia.com/access/operate/newlist',{params:{}}).then(function (res) {
                 self.data2=res.data.data.operate;
                 self.data2.forEach(function (item,index) {
                   item.label=item.name+"("+item.id+")";
                   item.children=item.child;
                   if (item.children.length>0) {
                     console.log(item.children);
                     item.children.forEach(function (item_d,index) {
                       console.log(item_d);
                       item_d.label=item_d.name;
                     })
                   }else{
                     console.log('nochild');
                   }
                })
               }).catch(function (err) {
                 console.log(err);
               })
         }else{
           self.$message({
              message: res.data.message,
                type: 'warning'
              });
         }
        }).catch(function (err) {
          console.log(err);
        })
      },
      saverouter:function () {
        var self=this;// body...
        var url;
        if(self.addorup==1){url='http://monkey.queyoujia.com/access/operate/add'}
        else if(self.addorup==2){url='http://monkey.queyoujia.com/access/operate/update'}
        else{alert('未知错误');}
        axios.get(url,{params:{id:self.ids,name:self.formLabelAlign.name,pid:self.formLabelAlign.type,router:self.formLabelAlign.region}}).then(function (res) {
          if(res.data.code==0){
            self.$message({
              message: '保存成功',
              type: 'success'
            });
            axios.get('http://monkey.queyoujia.com/access/operate/newlist',{params:{}}).then(function (res) {
              console.log(res);
              self.data2=res.data.data.operate;
              self.data2.forEach(function (item,index) {
                item.label=item.name+"("+item.id+")";
                item.children=item.child;
                if (item.children.length>0) {
                  console.log(item.children);
                  item.children.forEach(function (item_d,index) {
                    console.log(item_d);
                    item_d.label=item_d.name;
                  })
                }else{
                  console.log('nochild');
                }
              })
            }).catch(function (err) {
              console.log(err);
            })
          }else{
            self.$message({
              message: res.data.message,
              type: 'warning'
            });
          }
        }).catch(function (err) {
          console.log(err);
        })
      },
      reset:function () {
       var self=this;
       self.title="添加接口";
       self.formLabelAlign.name=null;
       self.formLabelAlign.region=null;
       self.formLabelAlign.type=null;
       self.auth=null;
       self.addorup=1;
       self.ids=null;
      },
      changeval:function (val,obj) {
        console.log(JSON.stringify(val));
        console.log(obj);
        var self=this;
        self.auth=val.name;
        self.formLabelAlign.name=val.name;
        self.formLabelAlign.region=val.router;
        self.formLabelAlign.type=val.pid;
        self.title="修改接口";
        self.addorup=2;
        self.ids=val.id;
      },
      changecheck:function (val,ifcheck,nodecheck) {
        var self=this;
        self.addorup=2;
        self.auth=val.name;
        self.auth=val.name;
        self.formLabelAlign.name=val.name;
        self.formLabelAlign.region=val.router;
        self.formLabelAlign.type=val.pid;
        self.title="修改接口";
        self.ids=val.id;
        console.log(val);
        console.log(ifcheck);
        console.log(nodecheck);
      }
    },
    mounted(){
      var self = this;
      axios.get('http://monkey.queyoujia.com/access/operate/newlist',{params:{}}).then(function (res) {
        console.log(res);
        self.data2=res.data.data.operate;
        self.data2.forEach(function (item,index) {
          item.label=item.name+"("+item.id+")";
          item.children=item.child;
          if (item.children.length>0) {
            console.log(item.children);
            item.children.forEach(function (item_d,index) {
              console.log(item_d);
              item_d.label=item_d.name;
            })
          }else{
            console.log('nochild');
          }
        })
      }).catch(function (err) {
        console.log(err);
      })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mrt{margin:15px 0;}
.mrl{margin-left: 40px;}
.flr{float: right;}
.mrr{margin-left: 20px;}
</style>
