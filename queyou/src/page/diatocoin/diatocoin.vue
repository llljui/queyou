<template>
  <div class="diatocoin">
  <template>
    <el-button type="primary" class="mrt1" @click="addexchange">添加兑换商品</el-button>
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
      label="兑换类型">
      <template scope="scope">
        {{ scope.row.productType }}
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      label="兑换数量">
      <template scope="scope">
        {{ scope.row.depProduct  }}
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      show-overflow-tooltip
      label="赠送数量">
      <template scope="scope">
        {{ scope.row.sendProduct  }}
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      label="支付的类型">
      <template scope="scope">
        {{ scope.row.payType  }}
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      label="支付的数量">
      <template scope="scope">
        {{ scope.row.payAmount }}
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      label="描述">
      <template scope="scope">
        {{ scope.row.body}}
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      label="排序">
      <template scope="scope">
        {{ scope.row.serial}}
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
<el-dialog title="兑换配置" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="排序" type="number" :label-width="formLabelWidth">
      <el-input v-model="form.serial" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="兑入币种" :label-width="formLabelWidth">
      <el-select v-model="form.incoin" placeholder="请选择兑入币种">
        <!-- <el-option label="金币" value="2"></el-option>
        <el-option label="钻石" value="1"></el-option> -->
        <el-option v-for="item in inoptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="兑入数量" :label-width="formLabelWidth">
      <el-input v-model="form.incount" type="number" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="兑出币种" :label-width="formLabelWidth">
      <el-select v-model="form.outcoin" placeholder="请选兑出币种">
        <!-- <el-option label="金币" value="2"></el-option>
        <el-option label="钻石" value="1"></el-option> -->
        <el-option v-for="item in outoptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="兑出数量" type="number" :label-width="formLabelWidth">
      <el-input v-model="form.outcount" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="赠送数量" type="number" :label-width="formLabelWidth">
      <el-input v-model="form.extracount" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="备注" :label-width="formLabelWidth">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="addset">确 定</el-button>
  </div>
</el-dialog>
<!-- <div class=""><iframe src="http://www.baidu.com"></iframe></div> -->
</div>
</template>

<script>
import axios from "axios";
import qs from 'qs';
export default {
  name: 'diatocoin',
  data () {
    return {
     iframe_show:false,
     dialogVisible: false,
     tableData: [{}],
     gridData: [],
     dialogFormVisible: false,
     inoptions:[{
        value: '1',
        label: '钻石'
      }, {
        value: '2',
        label: '金币'
      }],
      outoptions:[{
         value: '1',
         label: '钻石'
       }, {
         value: '2',
         label: '金币'
       }],
     form: {
       outcount:'',
       incoin:'1',
       outcoin:'2',
       desc: '',
       injinbi:'',
       india:'',
       outjinbi:'',
       outdia:'',
       extracount:'',
       id:'',
       serial:0
     },
     addorupdate:null,
     formLabelWidth: '120px',
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
    addexchange:function () {
      var self=this;
      self.dialogFormVisible = true;
      self.addorupdate=1;
      self.form.id='';
      self.form.outcount=''
      self.form.incount='';
      self.form.incoin='1';
      self.form.outcoin='2';
      self.form.desc='';
      self.form.extracount='';
    },
    chosegame:function (val) {
     console.log(val);
     var self=this;
     self.formLabelAlign.cid=val;
/*     console.log(self.formLabelAlign.type);*/
    },
    submit:function () {
      var self=this;

    },
    addset:function () {
      var self=this;
      if (self.addorupdate==1) {
        axios.get('http://monkey.queyoujia.com/exchange/add',{params:{serial:self.form.serial,cid:sessionStorage.cid,channel:sessionStorage.channel,productType:self.form.outcoin,depProduct:self.form.outcount,sendProduct:self.form.extracount,payType:self.form.incoin,payAmount:self.form.incount,body:self.form.desc}}).then(function (res) {
          console.log(res);
          if(res.data.code==0){
          self.$message({
           message: '添加成功!',
           type: 'success'
            });
            axios.get('http://monkey.queyoujia.com/exchange/list',{params:{cid:sessionStorage.cid,channel:sessionStorage.channel}}).then(function (res) {
              console.log(res);
              self.tableData=res.data.data.list;
              self.tableData.forEach(function (item,index) {
                if (item.productType==1) {
                  item.productType='钻石';
                }else{
                  item.productType='金币';
                }
                if (item.payType==1) {
                  item.payType='钻石';
                }else{
                  item.payType='金币';
                }
              })
              self.dialogFormVisible=false;
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
        });
      }else{
        axios.get('http://monkey.queyoujia.com/exchange/update',{params:{serial:self.form.serial,cid:sessionStorage.cid,channel:sessionStorage.channel,id:self.form.id,productType:self.form.outcoin,depProduct:self.form.outcount,sendProduct:self.form.extracount,payType:self.form.incoin,payAmount:self.form.incount,body:self.form.desc}}).then(function (res) {
          console.log(res);
          if(res.data.code==0){
          self.$message({
           message: '更新成功!',
           type: 'success'
            });
            axios.get('http://monkey.queyoujia.com/exchange/list',{params:{cid:sessionStorage.cid,channel:sessionStorage.channel}}).then(function (res) {
              console.log(res);
              self.tableData=res.data.data.list;
              self.tableData.forEach(function (item,index) {
                if (item.productType==1) {
                  item.productType='钻石';
                }else{
                  item.productType='金币';
                }
                if (item.payType==1) {
                  item.payType='钻石';
                }else{
                  item.payType='金币';
                }
              })
              self.dialogFormVisible=false;
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
        });
      }
    },
     handleEdit(index, row) {
        console.log(index, row);
        var self=this;
        self.dialogFormVisible=true;
        axios.get('http://monkey.queyoujia.com/exchange/edit',{params:{cid:sessionStorage.cid,channel:sessionStorage.channel,id:row.id}}).then(function (res) {
          console.log(res);
          if(res.data.code==0){
            self.form.id=row.id;
            self.form.outcount=res.data.data.depProduct;
            self.form.incount=res.data.data.payAmount;
            self.form.incoin=res.data.data.payType;
            self.form.outcoin=res.data.data.productType;
            self.form.desc=res.data.data.body;
            self.form.extracount=res.data.data.sendProduct;
            self.form.serial=row.serial;
          }else{
            return;
          }
        }).catch(function (err) {
          console.log(err);
        });
        self.addorupdate=2;
      },
      handleDelete(index, row) {
        var self =this;
        self.$confirm('删除该配置, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          axios.get('http://monkey.queyoujia.com/exchange/delete',{params:{cid:sessionStorage.cid,channel:sessionStorage.channel,id:row.id}}).then(function (res) {
              console.log(res);
              if (res.data.code==0) {
                self.$message({
                  type: 'success',
                  message: '删除成功!'
                });
                axios.get('http://monkey.queyoujia.com/exchange/list',{params:{cid:sessionStorage.cid,channel:sessionStorage.channel}}).then(function (res) {
                  console.log(res);
                  self.tableData=res.data.data.list;
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
      axios.get('http://monkey.queyoujia.com/exchange/list',{params:{cid:sessionStorage.cid,channel:sessionStorage.channel}}).then(function (res) {
        console.log(res);
        self.tableData=res.data.data.list;
        self.tableData.forEach(function (item,index) {
          if (item.productType==1) {
            item.productType='钻石';
          }else{
            item.productType='金币';
          }
          if (item.payType==1) {
            item.payType='钻石';
          }else{
            item.payType='金币';
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
