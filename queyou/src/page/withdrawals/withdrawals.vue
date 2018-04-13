<template>
  <div class="withdrawals">
    <el-col :span="4" class="mrt">
      <el-input placeholder="请输入游戏ID" type="number" v-model="uids"></el-input>
    </el-col>
    <div class="lineblock"></div>
     <el-select class="mrt" v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <div class="lineblock"></div>
    <el-button type="primary" @click="search">搜索</el-button>
    <el-button @click='reset'>清空</el-button>
     <el-table
     class="mrt"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      align="center"
      show-overflow-tooltip
      label="ID">
      <template scope="scope">
        {{ scope.row.id }}
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      show-overflow-tooltip
      label="游戏id">
      <template scope="scope">
        {{ scope.row.uid }}
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      show-overflow-tooltip
      label="昵称">
      <template scope="scope">
        {{ scope.row.nickname }}
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      show-overflow-tooltip
      show-overflow-tooltip
      label="订单号">
      <template scope="scope">
          {{ scope.row.orderId }}
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      show-overflow-tooltip
      label="提现金额（元）">
      <template scope="scope">
         {{ scope.row.amount }}
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      show-overflow-tooltip
      label="结算金额（元）">
      <template scope="scope">
         {{ scope.row.money }}
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      show-overflow-tooltip
      label="税率">
      <template scope="scope">
         {{ scope.row.tax }}
      </template>
    </el-table-column>
    <el-table-column
      align="center"
    show-overflow-tooltip
      label="状态">
      <template scope="scope">
         {{ scope.row.status }}
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      show-overflow-tooltip
      label="申请时间">
      <template scope="scope">
         {{ scope.row.applyTime }}
      </template>
    </el-table-column>
    <el-table-column label="操作" min-width="120" align="center">
      <template scope="scope">
        <el-button
          size="small"
          :type="scope.row.color"
          @click="handleEdit(scope.$index, scope.row)">{{scope.row.canedit}}</el-button>
          <el-button
          size="small"
          type="warning"
          @click="watchDetails(scope.$index, scope.row)">明细</el-button>
      </template>
    </el-table-column>
  </el-table>
   <el-pagination
      class="mrt flrt"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="1"
      layout="prev, pager, next, jumper"
      :total="allpage">
    </el-pagination>
    <el-dialog
    title="提现审核"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose">
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <!-- <el-form-item label="验证码">
        <el-input v-model="formLabelAlign.code" type="number"></el-input>
      </el-form-item> -->
      <el-form-item label="游戏id">
        <el-input v-model="formLabelAlign.uid" type="number" disabled></el-input>
      </el-form-item>
      <el-form-item label="订单号">
        <el-input v-model="formLabelAlign.orderid" disabled></el-input>
      </el-form-item>
      <el-form-item label="打款金额">
        <el-input v-model="formLabelAlign.amount" disabled></el-input>
      </el-form-item>
      <el-form-item label="操作">
         <el-select v-model="value2" @change="chose" placeholder="请选择">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="submit">确 定</el-button>
    </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
export default {
  name: 'withdrawals',
  data () {
    return {
       options2: [{
          value: '0',
          label: '审核通过'
        }, {
          value: '5',
          label: '审核失败'
        }],
        value2: '',
      dialogVisible: false,
      uids:null,
      allpage:null,
      options: [],
      value: '',
      tableData: [{},{}],
      currentPage3: 1,
      labelPosition: 'right',
      formLabelAlign: {
          code: '',
          amount: '',
          uid: '',
          orderid:null
        }
      }
  },
  methods:{
    watchDetails:function (index,row) {
      console.log(row);
      var self=this;
      sessionStorage.details_uid=row.uid;
      self.$router.push({path: '/perdetails/perdetails'});
      //self.router.push('');
    },
    chose:function (val) {
      console.log(val);
      console.log(this.value2);
    },
    submit:function () {
      var self=this;
      axios.get('http://monkey.queyoujia.com/withdraw/check',{params:{code:'1009'/*self.formLabelAlign.code*/,orderId:self.formLabelAlign.orderid,status:self.value2,uid:self.formLabelAlign.uid}}).then(function(res){
        if (res.data.code==0) {
           self.$message({
            message: '审核成功',
            type: 'success'
          });
          self.tableData=[];
       self.allpage=null;
       self.currentPage3=1;
       axios.get('http://monkey.queyoujia.com/withdraw/list',{params:{}}).then(function (res) {
          console.log(res);
          self.tableData=res.data.data.list;
          self.allpage=res.data.data.total;
          self.tableData.forEach(function (item,index) {
            item.amount=item.amount+'元';
            if (item.status=='申请提现等待审批'||item.status=='审核失败') {
              item.canedit='审核';
              item.color="info";
            }else{
              item.canedit='已审核';
              item.color="success";
            }
          })
      //self.options=res.data.data.allStatus;
      for(let x in res.data.data.allStatus){
        self.options.push({'value':x,'label':res.data.data.allStatus[x]});
        //console.log(x);
      }
    }).catch(function (err) {
      console.log(err);
    })

        }else{
           self.$message({
            message: res.data.message,
            type: 'warning'
          });
        }
        console.log(res);
      }).catch(function (err) {
       console.log(err);
      })
      self.dialogVisible = false;
    },
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      reset:function () {
       var self=this;
       self.tableData=[];
       self.allpage=null;
       self.currentPage3=1;
       axios.get('http://monkey.queyoujia.com/withdraw/list',{params:{page:1}}).then(function (res) {
       console.log(res);
       self.tableData=res.data.data.list;
       self.allpage=res.data.data.total;
       self.tableData.forEach(function (item,index) {
        item.amount=item.amount+'元';
        if (item.status=='申请提现等待审批'||item.status=='审核失败') {
          item.canedit='审核';
          item.color="info"
        }else{
          item.canedit='已审核';
          item.color="success";
        }
      })
      //self.options=res.data.data.allStatus;
      for(let x in res.data.data.allStatus){
        self.options.push({'value':x,'label':res.data.data.allStatus[x]});
        //console.log(x);
      }
    }).catch(function (err) {
      console.log(err);
    })
      },
      search:function () {
        var self=this;
        self.tableData=[];
        var params={};
        self.currentPage3=1;
        if (self.value) {
          params={params:{page:1,uid:self.uids,status:self.value}}
        }else{params={params:{page:1,uid:self.uids}}}
        axios.get('http://monkey.queyoujia.com/withdraw/list',params).then(function (res) {
        console.log(res);
        self.tableData=res.data.data.list;
        self.allpage=1;
        self.allpage=res.data.data.total;
         self.tableData.forEach(function (item,index) {
        item.amount=item.amount+'元';
        if (item.status=='申请提现等待审批'||item.status=='审核失败') {
          item.canedit='审核';
          item.color="info"
        }else{
          item.canedit='已审核';
          item.color="success";
        }
      })
      }).catch(function (err) {
        console.log(err);
      })
      },
      handleEdit(index, row) {
        var self=this;
        self.formLabelAlign.uid=row.uid;
        self.formLabelAlign.orderid=row.orderId;
        self.formLabelAlign.amount=row.amount;
        self.dialogVisible=true;
       /* axios.get('http://monkey.queyoujia.com/withdraw/code',{params:{}}).then(function (res) {
           if (res.data.code==0) {
             self.$message({
              message: '已向管理员发送验证码',
              type: 'success'
            });
             setTimeout(function(){
              self.dialogVisible=true;
             },1000)
           }else{
             self.$message({
              message: res.data.message,
              type: 'error'
            });
           }
        }).catch(function (err) {
           console.log(err);
        })*/
      },
       handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        var self=this;
         self.allpage=null;
         self.tableData=[];
        axios.get('http://monkey.queyoujia.com/withdraw/list',{params:{page:val}}).then(function (res) {
      console.log(res);
      self.tableData=res.data.data.list;
      self.allpage=res.data.data.total;
       self.tableData.forEach(function (item,index) {
        item.amount=item.amount+'元';
        if (item.status=='申请提现等待审批'||item.status=='审核失败') {
          item.canedit='审核';
          item.color="info"
        }else{
          item.canedit='已审核';
          item.color="success";
        }
      })
    }).catch(function (err) {
      console.log(err);
    })
      }
  },
  mounted(){
    var self=this;
    axios.get('http://monkey.queyoujia.com/withdraw/list',{params:{}}).then(function (res) {
      console.log(res);
      self.tableData=res.data.data.list;
      self.allpage=res.data.data.total;
      self.tableData.forEach(function (item,index) {
        item.amount=item.amount+'元';
        if (item.status=='申请提现等待审批'||item.status=='审核失败') {
          item.canedit='审核';
          item.color="info";
        }else{
          item.canedit='已审核';
          item.color="success";
        }
      })
      //self.options=res.data.data.allStatus;
      for(let x in res.data.data.allStatus){
        self.options.push({'value':x,'label':res.data.data.allStatus[x]});
        //console.log(x);
      }
    }).catch(function (err) {
      console.log(err);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lineblock{display: inline-block;width: 10px;}
.mrt{margin-top: 15px;}
.flrt{float: right;}
</style>
