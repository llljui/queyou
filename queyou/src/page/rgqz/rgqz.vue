<template>
  <div class="menu" v-loading="loading2">
 <el-form ref="form" :model="form" label-width="80px" class="mrt">
  <el-form-item label="游戏ID" >
    <el-input v-model="form.name" @change="checkid()"></el-input>
  </el-form-item>
  <el-form-item label="昵称">
    <el-col :span="3">
       <el-input type="text" disabled v-model="form.nickname"></el-input>
    </el-col>
  </el-form-item>
 <el-form-item label="剩余钻石">
    <el-col :span="4">
       <el-input type="text" disabled v-model="form.surplus"></el-input>
    </el-col>
  </el-form-item>
 <el-form-item label="操作方式">
  <el-cascader
    :options="options"
    v-model="selectedOptions"
    @change="handleChange">
  </el-cascader>
  </el-form-item>
   <el-form-item label="操作数量">
    <el-col :span="4">
       <el-input type="number" v-model="form.count" placeholder="钻石数量"></el-input>
    </el-col>
  </el-form-item>
  <el-form-item label="备注">
    <el-col :span="10">
     <el-input type="textarea" v-model="form.desc"></el-input>
    </el-col>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">确定</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
export default {
  name: 'menu',
  data() {
      return {
        options:[
          {value: '-1',
          label: '减少'}],
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          nickname:'',
          count:null
        },
         selectedOptions: [],
         selectedOptions2: [],
         jianshao:null,
         surplus:null,
         loading2:false
      }
    },
    methods: {
      czfs:function (val) {
        var self =this;
      },
      onSubmit() {
        var self=this;
        self.loading2=true;
        console.log(self.form.count+''+self.form.name+''+self.jianshao+''+self.form.desc)
      if (self.form.count&&self.form.name&&self.jianshao) {
         var params={amount:self.form.count,uid:self.form.name,amountType:self.jianshao,remark:self.form.desc}
        axios.post('http://monkey.queyoujia.com/rich/manual_dia_order',qs.stringify(params),{headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }}).then(function (res) {
                  if (res.data.code==0) {
                     self.$prompt('请输入管理员验证码', '提示', {
                      confirmButtonText: '确定',
                      cancelButtonText: '取消'
                    }).then(({ value }) => {
                     var params1={
                        checkCode:value,
                        orderId:res.data.data.orderId
                       }
                       axios.post('http://monkey.queyoujia.com/rich/dec_diamond_notify',qs.stringify(params1),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }}).then(function (res) {
                          console.log(res.data.code)
                         if (res.data.code==0) {
                           self.$notify({
                            title: '成功',
                            message:'扣钻成功' ,
                            type: 'success'
                        });
                         return;
                         }else{
                          self.$notify.error({
                            title: '错误',
                            message:'验证码验证失败'
                        });
                         return;
                         }
                        }).catch(function (err) {
                          console.log(err);
                        })
                    }).catch(() => {
                      this.$message({
                        type: 'info',
                        message: '取消输入'
                      });       
                    });
                  }else{
                    self.$message({
                    message: res.data.message,
                    type: 'warning'
                  });
                  }
                  self.loading2=false;
                }).catch(function (err) {
                  console.log(err);
      })
      }else{
         self.$message({
          message: '请检查输入是否正确',
          type: 'warning'
        });
      }


      },
      nickname:function () {
      },
       handleChange(value) {
        var self = this;
        console.log(value[0]);
        self.jianshao=value[0];
      },
      checkid:function () {
        var self =this;
        console.log(self.form.name);
        if (self.form.name.length==7) {
          var params={
            'ch':'hz',
            'uid':self.form.name
          }
           axios.post('http://monkey.queyoujia.com/user/check',qs.stringify(params),{headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                  }}).then(function (res) {
                  console.log(res.data.data);
                  self.form.nickname=res.data.data.nickname;
                  self.form.surplus=res.data.data.leftDiamond;
           }).catch(function (error) {
             console.log(error);
           });
        }else{
          console.log('长度不一');
        }
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bor{border:0;}
.mrt{margin-top: 2vh;}
</style>
