<template>
  <div class="manulDebit">
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="游戏ID">
          <el-input v-model="form.gameId" type="number" v-on:change="getUserName"></el-input>
        </el-form-item>
        <el-form-item label="昵称">
          <el-col v-html="form.userName" :span="24" v-bind:class="{userName:uName}"></el-col>
        </el-form-item>
        <el-form-item label="操作类型">
          <el-select v-model="form.region" placeholder="请选择操作类型">
            <el-option label="增加" value="renggong"></el-option>
          </el-select>
        </el-form-item>
         <el-form-item label="钻石">
          <el-input v-model="form.masonry" type="number"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确定</el-button>
          <el-button>取消</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'manulDebit',
  data () {
    return {
     form: {
          userName: '--',
          region: '',
          masonry:'',
          gameId:'',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
     uName:false,
     messcode:''
    }
  },
  methods:{
     onSubmit() {
        console.log('submit!');
        var self=this;
        var params={
          'amount':self.form.masonry,
          'ch':'hz',//'目前就只有一种'
          'remark':self.form.desc,
          'uid':self.form.gameId,
          'cid':sessionStorage.cid,
          
          //'sid':'5333cabb88e643eddcbb26cddf3ec11c'//调试
        }
          if (params.amount&&params.remark&&params.uid&&params.ch) {
               console.log(1)
               axios.post('http://monkey.queyoujia.com/rich/recharge',qs.stringify(params),{headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }}).then(function (res) {
                      //console.log(res.data);
                      self.$prompt('请输入验证码', '已向管理员发送验证码', {
                      confirmButtonText: '确定',
                      cancelButtonText: '取消',
                     /* inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,*/
                      inputErrorMessage: '验证码错误'
                    }).then(({ value }) => {
                       //console.log(res.data.data);
                       var params1={
                        checkCode:value,
                        orderId:res.data.data.orderId
                       }
                       axios.post('http://monkey.queyoujia.com/rich/recharge_notify',qs.stringify(params1),{headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }}).then(function (res) {
                  console.log(res.data.code)
                 if (res.data.code==0) {
                   self.$notify({
                    title: '成功',
                    message:'充值成功' ,
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
                      self.$message({
                        type: 'info',
                        message: '取消输入'
                      });       
                    });                     
                   }).catch(function (err) {
                     console.log(err);
                })
          }
          else{
             self.$notify({
                title: '警告',
                message:'请输入正确的账号' ,
                type: 'warning'
            });
             return;
          }
      },
      getUserName:function () {
        var self=this;
        console.log(22);
        self.form.userName=''
        var params={
          'ch':'hz',
          'uid':self.form.gameId
          //'sid':'5333cabb88e643eddcbb26cddf3ec11c'
        }
        axios.post('http://monkey.queyoujia.com/user/check?ch=hz&uid=1755604',qs.stringify(params),{headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
              }}).then(function (res) {
              console.log(res.data.data);
              self.form.userName=res.data.data.nickname;
       }).catch(function (error) {
         console.log(error);
       })
        if (self.form.gameId) {
          self.uName=false;
        }
        else{
          this.uName=true;;
        }
      }
  },
 computed:{

 },
 mounted:function () {
 }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.manulDebit form{margin-top: 60px;}
.userName{color: red;}
</style>