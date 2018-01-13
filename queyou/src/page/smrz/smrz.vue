<template>
  <div class="smrz" v-loading="loading">
    <el-col :span="3" class="mrt">
      <el-input placeholder="请输入游戏ID" type="number" v-model="seruid"></el-input>
    </el-col>
    <el-col :span="3" class="mrt flt">
      <el-select v-model="value" placeholder="审核状态" @change="changeStatus">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    </el-col>
    <el-col :span="3" class="mrt flt">
       <el-button type="primary" @click="search">查询</el-button>
       <el-button type="danger"  @click="reset">重置</el-button>
    </el-col>
    <el-col :span="24" class="mtt"></el-col>
    <el-table
    :data="tableData2"
    style="width: 100%;"
    :row-class-name="tableRowClassName">
    <el-table-column
      align="center"
      prop="id"
      label="编号">
    </el-table-column>
    <el-table-column
      align="center"
      prop="uid"
      label="游戏ID">
    </el-table-column>
    <el-table-column
      align="center"
      prop="realname"
      label="真实姓名">
    </el-table-column>
    <el-table-column
      align="center"
      prop="idcard"
      label="身份证">
    </el-table-column>
    <el-table-column
      sortable
      align="center"
      prop="status"
      label="审核状态">
    </el-table-column>
    <el-table-column
      align="center"
      prop="operator"
      label="操作人">
    </el-table-column>
    <el-table-column
      align="center"
      prop="dateline"
      label="申请时间">
    </el-table-column>
    <el-table-column
      align="center"
      label="操作">
       <template scope="scope">
        <el-button
          size="small"
          :type="scope.row.color"
          @click="handleEdit(scope.$index, scope.row)">{{scope.row.edit}}</el-button>
      </template>
    </el-table-column>
  </el-table>
   <el-pagination
      class="frl"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="1"
      layout="prev, pager, next, jumper"
      :total="allpage">
    </el-pagination>
  <el-dialog
  title="实名审核"
  :visible.sync="dialogVisible"
  width="30%">
  <el-col :span="12" class="contxt">
    国籍：<span class="tct">{{guoji}}</span>
  </el-col>
  <el-col :span="12" class="contxt">
    真实姓名:<span class="tct">{{realname}}</span>
  </el-col>
  <el-col :span="12" class="contxt">
    手机号码:<span class="tct">{{tel}}</span>
  </el-col>
  <el-col :span="12" class="contxt">
    证件号:<span class="tct">{{idcard}}</span>
  </el-col>
  <el-col :span="12" class="contxt">
    已审核游戏ID:<span class="tct">{{uids}}</span>
  </el-col>
  <el-col :span="12" class="contxt">
    区域:<span class="tct">{{cids}}</span>
  </el-col>
  <el-col :span="12" class="contxt">
    证件正面照：
  </el-col>
  <el-col :span="12" class="contxt">
    证件反面照：
  </el-col>
  <el-col :span="12" class="contxt">
    <img :src="imgurl1" alt="loading..." width="50%" height="200">
  </el-col>
  <el-col :span="12" class="contxt">
    <img :src="imgurl2" alt="loading..."  width="50%" height="200">
  </el-col>
  <el-col :span="24" class="contxt">
    操作:
    <el-select v-model="value2" placeholder="请选择" @change="select2">
      <el-option
        v-for="item in options2"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </el-col>
  <el-col :span="24" v-show="resone">
      <el-input type="textarea" v-model="desc" placeholder="请输入审核失败理由"></el-input>
  </el-col>
  <el-col :span="24" >
    <el-button type="primary" @click="enchose" class="frl">确 定</el-button>
    <el-button @click="dialogVisible = false" class="frl">取 消</el-button>
  </el-col>
</el-dialog>
  </div>
</template>

<script>
import axios from 'axios';
import qs from "qs";
export default {
  name: 'smrz',
  data () {
    return {
      seruid:null,
      allpage:1,
      resone:null,
      desc:null,
      loading:false,
      imgurl1:null,
      imgurl2:null,
      cids:null,
      uids:null,
      idcard:null,
      tel:null,
      realname:null,
      guoji:null,
       options2: [{
          value: '1',
          label: '审核通过'
        }, {
          value: '2',
          label: '审核失败'
        }],
        value2: '',
       dialogVisible: false,
       options: [{
          value: '0',
          label: '未审核'
        }, {
          value: '1',
          label: '审核通过'
        }, {
          value: '2',
          label: '审核失败'
        }],
        value: '',
        chose2:null,
       tableData2: [],
       btncolor:null,
       btnstatus:null,
       currentPage3: 1,
       val:null
    }
  },
  methods:{
    search:function (val) {
      var self = this;
      axios.get('http://monkey.queyoujia.com/realname/list',{params:{page:1,uid:self.seruid}}).then(function (res) {
      console.log(res);
      self.tableData2=res.data.data.list;
      self.allpage=res.data.data.total;
      self.tableData2.forEach(function (item,index) {
        console.log(item.status);
        if (item.status=="审核中") {
          item.edit="审核";
          item.color="info";
          self.btnstatus=1;
        }else if(item.status=="审核通过"){
          item.edit="审核成功";
          item.color="success";
           self.btnstatus=2;
        }else if(item.status=="审核失败"){
          item.edit="审核失败";
          item.color="danger";
           self.btnstatus=3;
        }else{
          item.edit="暂无操作";
          item.color="danger";
           self.btnstatus=4;
        }
        
      })
    }).catch(function (err) {
      console.log(err)
    })
    },
    reset:function (val) {
      var self = this;
      self.tableData2=[];
      self.allpage=null;
      self.currentPage3=1;
      axios.get('http://monkey.queyoujia.com/realname/list',{params:{page:1}}).then(function (res) {
      console.log(res);
      self.tableData2=res.data.data.list;
      self.allpage=res.data.data.total;
      self.tableData2.forEach(function (item,index) {
        console.log(item.status);
        if (item.status=="审核中") {
          item.edit="审核";
          item.color="info";
          self.btnstatus=1;
        }else if(item.status=="审核通过"){
          item.edit="审核成功";
          item.color="success";
           self.btnstatus=2;
        }else if(item.status=="审核失败"){
          item.edit="审核失败";
          item.color="danger";
           self.btnstatus=3;
        }else{
          item.edit="暂无操作";
          item.color="danger";
           self.btnstatus=4;
        }
        
      })
    }).catch(function (err) {
      console.log(err)
    })
    },
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        var self=this;
         self.tableData2=[];
        axios.get('http://monkey.queyoujia.com/realname/list',{params:{page:val,status:self.val}}).then(function (res) {
      console.log(res);
      self.tableData2=res.data.data.list;
      self.allpage=res.data.data.total;
      self.tableData2.forEach(function (item,index) {
        console.log(item.status);
        if (item.status=="审核中") {
          item.edit="审核";
          item.color="info";
          self.btnstatus=1;
        }else if(item.status=="审核通过"){
          item.edit="审核成功";
          item.color="success";
           self.btnstatus=2;
        }else if(item.status=="审核失败"){
          item.edit="审核失败";
          item.color="danger";
           self.btnstatus=3;
        }else{
          item.edit="暂无操作";
          item.color="danger";
           self.btnstatus=4;
        }
        
      })
    }).catch(function (err) {
      console.log(err)
    })

      },
    enchose:function () {
     var self=this;
     if (self.chose2=="1") {
       axios.get('http://monkey.queyoujia.com/realname/check',{params:{status:self.chose2,uid:self.uids,ch:self.cids}}).then(function (res) {
       if (res.data.code==0) {
         self.$message({
          message: '审核完成',
          type: 'success'
        });
      axios.get('http://monkey.queyoujia.com/realname/list',{params:{page:1}}).then(function (res) {
      console.log(res);
      self.currentPage3=1;
      self.tableData2=res.data.data.list;
      self.allpage=res.data.data.total;
      self.tableData2.forEach(function (item,index) {
        console.log(item.status);
        if (item.status=="审核中") {
          item.edit="审核";
          item.color="info";
          self.btnstatus=1;
        }else if(item.status=="审核通过"){
          item.edit="审核成功";
          item.color="success";
           self.btnstatus=2;
        }else if(item.status=="审核失败"){
          item.edit="审核失败";
          item.color="danger";
           self.btnstatus=3;
        }else{
          item.edit="暂无操作";
          item.color="danger";
           self.btnstatus=4;
        }
        
      })
    }).catch(function (err) {
      console.log(err)
    });

       }else{
        self.$message({
          message: res.data.message,
          type: 'error'
        });
       }
       self.dialogVisible = false;
     }).catch(function (err) {
       console.log(err);
     })
   }else if(self.chose2=="2"){
    axios.get('http://monkey.queyoujia.com/realname/check',{params:{status:self.chose2,uid:self.uids,ch:self.cids,reason:self.desc}}).then(function (res) {
       if (res.data.code==0) {
         self.$message({
          message: '审核完成',
          type: 'success'
        });
          self.tableData2=[];
          self.allpage=null;
          self.currentPage3=1;
          axios.get('http://monkey.queyoujia.com/realname/list',{params:{page:1}}).then(function (res) {
          console.log(res);
          self.tableData2=res.data.data.list;
          self.allpage=res.data.data.total;
          self.tableData2.forEach(function (item,index) {
            console.log(item.status);
            if (item.status=="审核中") {
              item.edit="审核";
              item.color="info";
              self.btnstatus=1;
            }else if(item.status=="审核通过"){
              item.edit="审核成功";
              item.color="success";
               self.btnstatus=2;
            }else if(item.status=="审核失败"){
              item.edit="审核失败";
              item.color="danger";
               self.btnstatus=3;
            }else{
              item.edit="暂无操作";
              item.color="danger";
               self.btnstatus=4;
            }
            
      })
    }).catch(function (err) {
      console.log(err)
    })
       }else{
        self.$message({
          message: res.data.message,
          type: 'error'
        });
       }
       self.dialogVisible = false;
     }).catch(function (err) {
       console.log(err);
     })
   }else{return}
    
    },
    changeStatus:function (val) {
      console.log(val);
       var self=this;
      self.val=val;
      self.currentPage3=1
     axios.get('http://monkey.queyoujia.com/realname/list',{params:{page:1,status:self.val}}).then(function (res) {
      console.log(res);
      self.tableData2=res.data.data.list;
      self.allpage=res.data.data.total;
      self.tableData2.forEach(function (item,index) {
        console.log(item.status);
        if (item.status=="审核中") {
          item.edit="审核";
          item.color="info";
          self.btnstatus=1;
        }else if(item.status=="审核通过"){
          item.edit="审核成功";
          item.color="success";
           self.btnstatus=2;
        }else if(item.status=="审核失败"){
          item.edit="审核失败";
          item.color="danger";
           self.btnstatus=3;
        }else{
          item.edit="暂无操作";
          item.color="danger";
           self.btnstatus=4;
        }
        
      })
    }).catch(function (err) {
      console.log(err)
    })
    },
    tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
       handleEdit(index, row) {
        var self=this;
        if(row.status=="审核中"){
          self.dialogVisible=true;
          self.loading=true;
        }else{return;}
        self.guoji=row.nationality;
        self.realname=row.realname;
        self.tel=row.mobile;
        self.idcard=row.idcard;
        self.uids=row.uid;
        if (row.cid=="1") {self.cids="大冶棋牌"}
        if (row.cid=="2") {self.cids="八道雀神"}
        if (row.cid=="3") {self.cids="全民十三水"}
        self.imgurl1=row.photo_a;
        self.imgurl2=row.photo_b;
        console.log(index, row);
        self.loading=false;
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      select2:function (val) {
        console.log(val);
        var self =this;
        if (val=="1") {
          self.resone=false;
        }
        else if(val=="2") {
          self.resone=true;
        }else{
        self.resone=false;
        }
        self.chose2=val;
      }
  },
  mounted(){
    var self = this;
    axios.get('http://monkey.queyoujia.com/realname/list',{params:{page:1}}).then(function (res) {
      console.log(res);
      self.tableData2=res.data.data.list;
      self.allpage=res.data.data.total;
      self.tableData2.forEach(function (item,index) {
        console.log(item.status);
        if (item.status=="审核中") {
          item.edit="审核";
          item.color="info";
          self.btnstatus=1;
        }else if(item.status=="审核通过"){
          item.edit="审核成功";
          item.color="success";
           self.btnstatus=2;
        }else if(item.status=="审核失败"){
          item.edit="审核失败";
          item.color="danger";
           self.btnstatus=3;
        }else{
          item.edit="暂无操作";
          item.color="danger";
           self.btnstatus=4;
        }
        
      })
    }).catch(function (err) {
      console.log(err)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mrt{margin-top: 10px;}
.flt{margin-left: 10px;}
.mtt{margin-top: 20px;}
.contxt{color: black;font-family: "微软雅黑";margin: 5px 0;font-size: 16.5px;color:#2D2F33 ;font-weight: normal}
.tct{color:#5A5E66;font-weight:normal;margin-left: 15px;}
.frl{float: right;margin: 15px;}
</style>
