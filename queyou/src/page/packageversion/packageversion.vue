<template>
  <div class="packageversion">
  <template>
    <el-button type="primary" class="mrt1" @click="addset">添加新配置</el-button>
  <el-table
  class="mrt"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      align="center"
      label="ID">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.id }}</span>
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      label="所属游戏">
      <template scope="scope">
        {{ scope.row.cid }}
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      label="标题">
      <template scope="scope">
        {{ scope.row.title }}
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      show-overflow-tooltip
      label="下载地址">
      <template scope="scope">
        {{ scope.row.url }}
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      label="设备">
      <template scope="scope">
        {{ scope.row.type }}
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      label="安装包大小">
      <template scope="scope">
        {{ scope.row.size }} M
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      label="安装包版本">
      <template scope="scope">
        {{ scope.row.version }}
      </template>
    </el-table-column>
    <el-table-column label="操作"  align="center">
      <template scope="scope">
        <el-button
          size="mini"
          type="primary"
          @click="handleEdit(scope.$index, scope.row)">
        编辑
      </el-button>
      <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">
        删除
      </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<el-pagination
  class="flrt"
  layout="prev, pager, next"
  :total="1">
</el-pagination>
<el-dialog
  style="top:28vh"
  title="游戏上传项配置"
  :visible.sync="dialogVisible"
  custom-class="dia"
  :before-close="handleClose">
  <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
    <el-form-item label="所属游戏">
       <el-select v-model="formLabelAlign.cid" placeholder="请选择" @change="chosegame">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
       </el-select>
    </el-form-item>
    <el-form-item label="标题内容">
      <el-input v-model="formLabelAlign.title"></el-input>
    </el-form-item>
    <el-form-item label="下载地址">
      <el-input v-model="formLabelAlign.url"></el-input>
    </el-form-item>
    <el-form-item label="设备类型">
      <el-radio-group v-model="formLabelAlign.type">
      <el-radio :label="1">安卓</el-radio>
      <el-radio :label="2">IOS</el-radio>
    </el-radio-group>
    </el-form-item>
    <el-form-item label="版本号">
      <el-input v-model="formLabelAlign.ver"></el-input>
    </el-form-item>
    <el-form-item label="包大小(M)">
      <el-input v-model="formLabelAlign.size" type="number"></el-input>
    </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false;iframe_show=false;">取 消</el-button>
    <el-button type="primary" @click="submit">确 定</el-button>
  </span>
</el-dialog>
<div class="ifms" v-show="iframe_show">
  <iframe v-show="iframe_show" src="http://monkey.queyoujia.com/html/upload/build/"></iframe>
</div>
<!-- <div class=""><iframe src="http://www.baidu.com"></iframe></div> -->
</div>
</template>

<script>
import axios from "axios";
import qs from 'qs';
export default {
  name: 'packageversion',
  data () {
    return {
     iframe_show:false,
     dialogVisible: false,
     tableData: [{}],
      labelPosition: 'right',
        formLabelAlign: {
          title: '',
          cid: '',
          type: '',
          size:'',
          url:'',
          ver:''
        },
         options: [{
          value: '1',
          label: '大冶棋牌'
        }, {
          value: '2',
          label: '八道雀神'
        }, {
          value: '3',
          label: '决战绍兴'
        },
        {
          value: '8',
          label: '全民十三水'
        }],
        value: '',
        sb:null,
        ids:null
      }
  },
  methods: {
    chosegame:function (val) {
     console.log(val);
     var self=this;
     self.formLabelAlign.cid=val;
/*     console.log(self.formLabelAlign.type);*/
    },
    submit:function () {
      var self=this;
      self.dialogVisible = false;
      self.iframe_show=false;
      if (self.sb==1) {
              var params={cid:self.formLabelAlign.cid,title:self.formLabelAlign.title,type:self.formLabelAlign.type,size:self.formLabelAlign.size,url:self.formLabelAlign.url,version:self.formLabelAlign.ver}
              axios.post('http://monkey.queyoujia.com/apkconfig/add',qs.stringify(params),{headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }}).then(function (res) {
                if (res.data.code==0) {
                  self.$message({
                  showClose: true,
                  message: '添加成功',
                  type: 'success'
                });
             self.tableData=[];
             axios.get('http://monkey.queyoujia.com/apkconfig/list',{params:{}}).then(function (res) {
                console.log(res);
                self.tableData=res.data.data.list;
                self.tableData.forEach(function (item,index) {
                  if (item.cid==1) {item.cid="大冶棋牌"}
                    else if(item.cid==2) {item.cid="八道雀神"}
                      else if(item.cid==3) {item.cid="决战绍兴"}
                        else if(item.cid==8) {item.cid="全民十三水"}
                          else{return;}
                })
              }).catch(function (err) {
                console.log(err);
              })
                }else{
                  self.$message({
                  showClose: true,
                  message: res.data.message,
                  type: 'warning'
                });
                }
              }).then(function (err) {
                console.log(err);
              })
      }else{
        self.options.forEach(function(item,index){
            console.log(item.value);
            console.log(item.label);
            if (self.formLabelAlign.cid==item.label) {
              self.formLabelAlign.cid=item.value;
            }
          });
          var params={cid:self.formLabelAlign.cid,title:self.formLabelAlign.title,type:self.formLabelAlign.type,size:self.formLabelAlign.size,url:self.formLabelAlign.url,version:self.formLabelAlign.ver,id:self.ids}
              axios.post('http://monkey.queyoujia.com/apkconfig/update',qs.stringify(params),{headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }}).then(function (res) {
                if (res.data.code==0) {
                  self.$message({
                  showClose: true,
                  message: '修改成功',
                  type: 'success'
                });
                   self.tableData=[];
               axios.get('http://monkey.queyoujia.com/apkconfig/list',{params:{}}).then(function (res) {
                  console.log(res);
                  self.tableData=res.data.data.list;
                  self.tableData.forEach(function (item,index) {
                    if (item.cid==1) {item.cid="大冶棋牌"}
                      else if(item.cid==2) {item.cid="八道雀神"}
                        else if(item.cid==3) {item.cid="决战绍兴"}
                          else if(item.cid==8) {item.cid="全民十三水"}
                            else{return;}
                  })
                }).catch(function (err) {
                  console.log(err);
                })
                }else{
                  self.$message({
                  showClose: true,
                  message: res.data.message,
                  type: 'warning'
                });
                }
              }).then(function (err) {
                console.log(err);
              })
      }
    },
    addset:function () {
      var self=this;
      self.dialogVisible=true;
      self.iframe_show=true;
      self.sb=1;
      self.formLabelAlign.cid=null;
      self.formLabelAlign.title=null;
      self.formLabelAlign.type=null;
      self.formLabelAlign.size=null;
      self.formLabelAlign.url=null;
      self.formLabelAlign.ver=null;
    },
     handleClose(done) {
      var self=this;
        this.$confirm('确认关闭？')
          .then(_ => {
            self.iframe_show=false;
            done();
          })
          .catch(_ => {});
      },
      handleEdit(index, row) {
        console.log(index, row);
        var self=this;
        self.dialogVisible=true;
        self.iframe_show=true;
        self.sb=2;
        self.ids=row.id;
        axios.get('http://monkey.queyoujia.com/apkconfig/edit',{params:{id:row.id}}).then(function (res) {
          self.formLabelAlign.title=res.data.data.title;
          self.formLabelAlign.type=res.data.data.type;
          self.formLabelAlign.size=res.data.data.size;
          self.formLabelAlign.url=res.data.data.url;
          self.formLabelAlign.ver=res.data.data.version;
          self.options.forEach(function(item,index){
            console.log(item.value);
            console.log(item.label);
            if (res.data.data.cid==item.value) {
              self.formLabelAlign.cid=item.label;
            }
          });
        }).catch(function (err) {
          console.log(err);
        })
      },
      handleDelete(index, row) {
        var self =this;
        self.$confirm('删除该配置, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          axios.get('http://monkey.queyoujia.com/apkconfig/delete',{params:{id:row.id}}).then(function (res) {
              console.log(res);
              if (res.data.code==0) {
                self.$message({
                  type: 'success',
                  message: '删除成功!'
                });
                axios.get('http://monkey.queyoujia.com/apkconfig/list',{params:{}}).then(function (res) {
                console.log(res);
                self.tableData=res.data.data.list;
                self.tableData.forEach(function (item,index) {
                  if (item.cid==1) {item.cid="大冶棋牌"}
                    else if(item.cid==2) {item.cid="八道雀神"}
                      else if(item.cid==3) {item.cid="决战绍兴"}
                        else if(item.cid==8) {item.cid="全民十三水"}
                         else{return;}
                })
              }).catch(function (err) {
                console.log(err);
              })
              }else{
                self.$message({
                  type: 'warning',
                  message: res.data.message
                });
              }
            }).catch(function (err) {
              console.log(err);
            })
        }).catch(() => {
          self.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
        console.log(index, row);
      }
    },
    mounted(){
      var self=this;
      axios.get('http://monkey.queyoujia.com/apkconfig/list',{params:{}}).then(function (res) {
        console.log(res);
        self.tableData=res.data.data.list;
        self.tableData.forEach(function (item,index) {
          if (item.cid==1) {item.cid="大冶棋牌"}
            else if(item.cid==2) {item.cid="八道雀神"}
              else if(item.cid==3) {item.cid="决战绍兴"}
                else if(item.cid==8) {item.cid="全民十三水"}
                  else{return;}
        })
      }).catch(function (err) {
        console.log(err);
      })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mrt{margin: 15px;}
.flrt{float: right;}
.mrt1{margin-top: 15px;margin-left: 15px;}
.dia{width: 30%;}
.ifms{width: 50vw;
    position: fixed;
    z-index: 10000;
    display: block;
    top: 2vh;
    left: 25vw;
    border-radius: 5px;}
iframe{display: block;
    width: 100%;
    height: 35vh;
    border-radius: 5px;}
</style>
