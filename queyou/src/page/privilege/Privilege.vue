<template>
  <div class="privilege">
   <el-tabs type="border-card" :key="prikey">
    <el-tab-pane label="管理员配置" @click="handleClick">
      <el-row>
        <el-col :span="4" >
          <el-input placeholder="输入管理员手机号" type="number" class="cosSearch" v-model="adminTel" @change="changeTel"></el-input>
        </el-col>
        <el-col :span="2" class="addbtn">
          <el-button type="info" @click="searchIfo">查询</el-button>
        </el-col> 
        <el-col :span="1">
          <el-button type="primary" @click="addAdminstor">添加管理员</el-button>
        </el-col>      
      </el-row>
     <el-table
     class="etable"
      ref="multipleTable"
      :data="tableData3"
      border
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <!-- <el-table-column
        type="selection"
        width="55">
      </el-table-column> -->
      <el-table-column
      label="姓名"
      prop='name'
      align='center'
      width="120">
     <!--  <template scope="scope">{{ scope.row.name }}</template> -->
    </el-table-column>
      <el-table-column
        prop="mobile"
        align='center'
        label="电话">
      </el-table-column>
  <!--     <el-table-column
    prop="uid"
    align='center'
    label="游戏id">
  </el-table-column> -->
      <el-table-column
        prop="role"
        label="角色"
        align='center'
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="company"
        label="公司"
        align='center'
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="isAlone"
        label="扣量类型"
        align='center'
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="status"
        label="账号状态"
        align='center'
        show-overflow-tooltip>
      </el-table-column>
     <el-table-column
        prop="lastLogin"
        label="上次登录"
        align='center'
        show-overflow-tooltip>
      </el-table-column>
     <el-table-column
        prop="dateline"
        label="创建时间"
        align='center'
        show-overflow-tooltip>
      </el-table-column>
        <el-table-column label="操作" width="220" align="center">
      <template scope="scope">
        <el-button
          size="small"
          type="info"
          @click="handleEdit(scope.$index, scope.row)">修改</el-button>
        <el-button
          size="small"
          type="warning"
          @click="handleDisable(scope.$index, scope.row)">禁用</el-button>
          <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)" >删除</el-button>
      </template>
    </el-table-column>
     </el-table>
      <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="20"
            layout="prev, pager, next, jumper"
            :total="pageSize">
          </el-pagination>
        </div>
    </el-tab-pane>
    <el-tab-pane label="合伙人管理" @click="handleClick">
      <el-col :span="4">
        <el-input type="number" placeholder="请输入合伙人ID" v-model="hhrid"></el-input>
      </el-col>
       <el-col :span="1" style="margin-left:2vw;">
       <el-button type="primary" @click="searchHHR">查询</el-button>
      </el-col> 
       <el-col :span="2" style="margin-left:1vw;">
       <el-button type="danger" @click="addHHR">添加合伙人</el-button>
      </el-col>
      <el-col :span="24">&nbsp</el-col>
      <el-table
      :data="tableData6"
      style="width: 100%">
      <el-table-column
        align="center"
        prop="nickname"
        label="昵称">
      </el-table-column>
      <el-table-column
        align="center"
        prop="partnerId"
        label="游戏ID">
      </el-table-column>
      <el-table-column
        prop="dateline"
         align="center"
        label="注册日期">
      </el-table-column>
    </el-table>

    </el-tab-pane>
    <el-tab-pane label="角色管理" @click="handleClick">
      <el-button type="info" @click="addcos">添加角色</el-button>
      <el-col :span="24">&nbsp</el-col>
         <el-table
          :data="tableData9"
          style="width: 100%">
          <el-table-column
            align="center"
            prop="id"
            label="角色ID">
          </el-table-column>
          <el-table-column
            align="center"
            prop="name"
            label="角色名">
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template scope="scope">
              <el-button
                size="small"
                type="danger"
                @click="Edit(scope.$index, scope.row)">编辑</el-button>
          </template>
          </el-table-column>
        </el-table>
    </el-tab-pane>
</el-tabs>
<div class="modalbor" @click="modalClose" v-show='modalshow'></div>
<div class="modalmessage" v-show='modalshow' v-bind:style="{height:modalHeight}">
  <header class="modalhead">{{deitsth}}</header>
  <el-form :label-position="labelPosition" label-width="90px" :model="formLabelAlign">
    <el-col :span="22">
      <el-form-item label="姓名">
        <el-input v-model="formLabelAlign.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="22">
        <el-form-item label="电话" :rules="[
      { required: true, message: '手机号不能为空', trigger: 'blur' },
      { min:'11',max:'11', message: '请输入正确的手机号', trigger: 'blur,change' }
    ]">
          <el-input v-model="formLabelAlign.tel" type='number' placeholder="请输入电话"></el-input>
        </el-form-item>
    </el-col>

    <el-col :span="22">
      <el-form-item label="公司">
        <el-input v-model="formLabelAlign.company" placeholder="请输入公司名称"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="22">
      <el-form-item label="角色" prop="region2">
      <el-select v-model="formLabelAlign.region2" placeholder="请选择角色属性" @change="actiontype">
        <el-option v-for="role in rolechose" :label="role.name" :value="role.id" :key="role.id"></el-option>
        <el-option label="超级管理员" value="-6"></el-option>
      </el-select>
      </el-form-item>
    </el-col>
    <el-col :span='22'>
       <el-form-item label="渠道" prop="resource">
        <el-checkbox-group v-model="formLabelAlign.resource" @change="channel">
          <!-- <el-checkbox label="1" name="resource">杭州</el-checkbox>
          <el-checkbox label="2" name="resource">富阳</el-checkbox>
          <el-checkbox label="3" name="resource">全国</el-checkbox> -->
          <el-checkbox :label="chanl.id" v-for="chanl in channelarr" :name="chanl.chars" :checked="chanl.checked" :key="chanl.id">{{chanl.chars}}</el-checkbox>
        </el-checkbox-group>
       </el-form-item>
    </el-col>
    
    <div v-show="cns1">
    <el-col :span="22">
      <el-form-item label="游戏ID" :rules="[
        { required: true, message: '游戏ID不能为空', trigger: 'blur' },
        { min:'11',max:'11', message: '请输入正确的游戏ID', trigger: 'blur,change' }
      ]">
            <el-input v-model="formLabelAlign.uid" type='number' placeholder="请输入大冶棋牌游戏ID" @change="inputId(1)"></el-input>
          </el-form-item>
    </el-col>
     <el-col :span="22">
      <el-form-item label="检验id">
        <el-input v-model="formLabelAlign.checkid" placeholder="待检查..." disabled class="textclass"></el-input>
      </el-form-item>
    </el-col>
    </div>

    <div v-show="cns2">
    <el-col :span="22">
      <el-form-item label="游戏ID" :rules="[
        { required: true, message: '游戏ID不能为空', trigger: 'blur' },
        { min:'11',max:'11', message: '请输入正确的游戏ID', trigger: 'blur,change' }
      ]">
            <el-input v-model="formLabelAlign.uid2" type='number' placeholder="请输入八道雀神游戏ID" @change="inputId(2)"></el-input>
      </el-form-item>
    </el-col>
     <el-col :span="22">
      <el-form-item label="检验id">
        <el-input v-model="formLabelAlign.checkid2" placeholder="待检查..." disabled class="textclass"></el-input>
      </el-form-item>
    </el-col>
    </div>
    
    <div v-show="cns3">
    <el-col :span="22">
      <el-form-item label="游戏ID" :rules="[
        { required: true, message: '游戏ID不能为空', trigger: 'blur' },
        { min:'11',max:'11', message: '请输入正确的游戏ID', trigger: 'blur,change' }
      ]">
            <el-input v-model="formLabelAlign.uid3" type='number' placeholder="请输入决战绍兴游戏ID" @change="inputId(3)"></el-input>
          </el-form-item>
    </el-col>
     <el-col :span="22">
      <el-form-item label="检验id">
        <el-input v-model="formLabelAlign.checkid3" placeholder="待检查..." disabled class="textclass"></el-input>
      </el-form-item>
    </el-col>
    </div>
    
    <div v-show="cns4">
    <el-col :span="22">
      <el-form-item label="游戏ID" :rules="[
        { required: true, message: '游戏ID不能为空', trigger: 'blur' },
        { min:'11',max:'11', message: '请输入正确的游戏ID', trigger: 'blur,change' }
      ]">
            <el-input v-model="formLabelAlign.uid4" type='number' placeholder="请输入新-全民十三水游戏ID" @change="inputId(4)"></el-input>
          </el-form-item>
    </el-col>
     <el-col :span="22">
      <el-form-item label="检验id">
        <el-input v-model="formLabelAlign.checkid4" placeholder="待检查..." disabled class="textclass"></el-input>
      </el-form-item>
    </el-col>
    </div>

    <el-col :span="22">
      <el-form-item label="类型" prop="klType">
      <el-select v-model="formLabelAlign.klType" placeholder="请选择扣量类型" @change="useraction">
        <el-option label="整体扣量" value="0"></el-option>
        <el-option label="单体扣量" value="1"></el-option>
      </el-select>
      </el-form-item>
    </el-col>
    <el-col :span="22" v-show="kouLiang1">
      <el-form-item label="比例">
          <el-input v-model="formLabelAlign.liang" type='number' placeholder="请输入0-1之间，需扣量60%即输入0.4"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="22" v-show="kouLiang2">
      <!-- <el-form-item label="比例" >
       </el-form-item> -->
       <el-form-item label="累计注册" :rule=[]>
          <el-input v-model="formLabelAlign.addup" type='number' placeholder="请输入0-1之间，需扣量60%即输入0.4"></el-input>
       </el-form-item>
       <el-form-item label="新增用户">
          <el-input v-model="formLabelAlign.adduser" type='number' placeholder="请输入0-1之间，需扣量60%即输入0.4"></el-input>
       </el-form-item>
       <el-form-item label="UV">
          <el-input v-model="formLabelAlign.uv" type='number' placeholder="请输入0-1之间，需扣量60%即输入0.4"></el-input>
       </el-form-item> 
       <el-form-item label="PV">
          <el-input v-model="formLabelAlign.pv" type='number' placeholder="请输入0-1之间，需扣量60%即输入0.4"></el-input>
       </el-form-item> 
       <el-form-item label="IP数">
          <el-input v-model="formLabelAlign.ip" type='number' placeholder="请输入0-1之间，需扣量60%即输入0.4"></el-input>
       </el-form-item>
       <el-form-item label="充值人数">
          <el-input v-model="formLabelAlign.recharge" type='number' placeholder="请输入0-1之间，需扣量60%即输入0.4"></el-input>
       </el-form-item> 
       <el-form-item label="首冲人数">
          <el-input v-model="formLabelAlign.firstrecharge" type='number' placeholder="请输入0-1之间，需扣量60%即输入0.4"></el-input>
       </el-form-item>
       <el-form-item label="总充值">
          <el-input v-model="formLabelAlign.allrecharge" type='number' placeholder="请输入0-1之间，需扣量60%即输入0.4"></el-input>
       </el-form-item> 
       <el-form-item label="消费人数">
          <el-input v-model="formLabelAlign.consumer" type='number' placeholder="请输入0-1之间，需扣量60%即输入0.4"></el-input>
       </el-form-item>
       <el-form-item label="消费钻石">
          <el-input v-model="formLabelAlign.diamond" type='number' placeholder="请输入0-1之间，需扣量60%即输入0.4"></el-input>
       </el-form-item> 
       <el-form-item label="消费金额">
          <el-input v-model="formLabelAlign.consumermoney" type='number' placeholder="请输入0-1之间，需扣量60%即输入0.4"></el-input>
       </el-form-item>    
    </el-col>
    <el-col :span="22">
      <el-form-item style="float:right">
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button @click="modalClose">取消</el-button>
      </el-form-item>
    </el-col>
</el-form>
</div>
<div v-show="cosbor" class="cosbod"  @click="cosshow"></div>
<div class="coscon" v-show="cosbor">
  <header>{{cosheader}}</header>
  <el-form ref="form6" :model="form6" label-width="80px">
  <el-form-item label="角色名称" class="fromname">
    <el-input v-model="form6.name"></el-input>
  </el-form-item>
  <el-col :span="22" :offset="1">
  <el-form-item label="导航分配">
    <el-checkbox-group v-model="form6.type1"><!-- v-model="form6.type"-->
      <el-col style="color:red">老后台菜单</el-col>

      <el-checkbox  v-for="menucheck1 in menutable1" :label="menucheck1.id" @change="check_it(menucheck1.id)" :checked="menucheck1.checked" :name="menucheck1.name"  :key="menucheck1.id">{{menucheck1.name}}</el-checkbox>
      </el-checkbox-group>
      <hr>
      <el-checkbox-group v-model="form6.type2"><!-- v-model="form6.type"-->
        <el-col style="color:red">新后台菜单</el-col>
        <el-checkbox  v-for="menucheck2 in menutable2" :label="menucheck2.id" :checked="menucheck2.checked" @change="check_it(menucheck2.id)" :name="menucheck2.name"  :key="menucheck2.id">{{menucheck2.name}}</el-checkbox>
      <hr>
        </el-checkbox-group>
  </el-form-item>
  </el-col>
  <el-col :span="22" :offset="1">
  <el-form-item label="权限分配">
    <el-checkbox-group v-model="form7.type">
      <el-checkbox :label="operate.id" :name="operate.name" v-for="operate in operatetable" :checked="operate.checked" :key="operate.id">{{operate.name}}</el-checkbox>

      <hr>
    </el-checkbox-group>
  </el-form-item>
  </el-col>
  <el-form-item>
    <el-button type="primary" @click="onSubmit6">立即创建</el-button>
    <el-button @click="cosshow">取消</el-button>
  </el-form-item>
</el-form>
</div>
<!-- <el-button class="deluser" type="danger">删除</el-button> -->
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'privilege',
  data () {
    return {
      channelarr:[],
      menutable1:null,
      menutable2:null,
      operatetable:[1,2,3],
      rolechose:null,
      cns1:null,
      cns2:null,
      cns3:null,
      cns4:null,
       masterid:null,
       ifcheck:[],
       cosid:null,
       cosname:null,
       form7:{
        type:[]
       },
       form6: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          type1: [],
          type2: [],
          resource: '',
          desc: ''
        },
      cosheader:'添加角色',
      cosbor:false,
       tableData9:[],
        tableData6:[],
        hhrid:null,
        geturl:null,
        deitstatus:null,
        deitsth:null,
        tableData3: [],
        isAlone:null,
        tabHeight:'',
        formInline: {
              user: '',
              region: ''
            },
        activeName2:'first',
        adminTel:'',
        currentPage3: 1,
        pageSize:null,
        modalshow:false,
        labelPosition: 'right',
            formLabelAlign: {
                yqm:'',
                yqm2:'',
                yqm3:'',
                checkid:null,
                checkid2:null,
                checkid3:null,
                checkid4:null,
                uid:null,
                uid2:null,
                uid3:null,
                uid4:null,
                name: '',
                region: '',
                type: '',
                tel:'',
                company:'',
                klType:'',
                resource:[],
                region2: [
                { required: true, message: '请选择角色属性', trigger: 'change' }
              ],
                region3:[{ required: true, message: '请选择扣量类型', trigger: 'change' }],
                liang:'',
                addup:'',
                consumermoney:'',
                diamond:'',
                consumer:'',
                allrecharge:'',
                firstrecharge:'',
                recharge:'',
                ip:'',
                pv:'',
                uv:'',
                adduser:'',
                channels:{}
              },
                  kouLiang1:false,
                  kouLiang2:false,
                  modalHeight:'',
                  actor:null,
                  HHRID:null,
                  cosstatus:null,
                  addored:null
              } 
  },
  props: ['form7.type'],
  methods:{
    check_it:function (val) {
      console.log(val);
    },
    onSubmit6() {
        var self = this;
        if(self.addored==1){//添加
          console.log(self.form6.name);
          var operations={};
          operations.menu=self.form6.type1.concat(self.form6.type2);
          operations.operate=self.form7.type;
          console.log(JSON.stringify(operations));
          axios.get('http://monkey.queyoujia.com/access/role/add',{params:{ch:'hz',name:self.form6.name,operations:JSON.stringify(operations)}}).then(function (res) {
           console.log(res);
           if(res.data.code==0){
             self.$message({
              message: '添加成功',
              type: 'success'
            });
             self.cosbor=false;
              axios.get(' http://monkey.queyoujia.com/access/role/list',{params:{}}).then(function (res) {
               console.log(res);
               self.tableData9=res.data.data.role;
             }).catch(function (err) {
               console.log(err);
             });         
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
          var operations={};
          operations.menu=self.form6.type1.concat(self.form6.type2);
          operations.operate=self.form7.type;
          console.log(JSON.stringify(operations));
          axios.get('http://monkey.queyoujia.com/access/role/update',{params:{ch:'hz',id:self.cosid,name:self.form6.name,operations:JSON.stringify(operations)}}).then(function (res) {
           console.log(res);
           if(res.data.code==0){
             self.$message({
              message: '修改成功',
              type: 'success'
            });
             self.cosbor=false;
              axios.get(' http://monkey.queyoujia.com/access/role/list',{params:{}}).then(function (res) {
               console.log(res);
               self.tableData9=res.data.data.role;
             }).catch(function (err) {
               console.log(err);
             });         
           }else{
            self.$message({
              message: res.data.message,
              type: 'warning'
            });
           }
        }).catch(function (err) {
          console.log(err);
        });
        }//编辑
        //console.log(self.cosname);
        //console.log(self.cosid);
       // console.log(self.form6.name);
        /*axios.get('http://monkey.queyoujia.com/access/role/update',{params:{ch:hz,id:self.cosid,name:self.form6.name,operations:}}).then(function (res) {
           console.log(res);
        }).catch(function (err) {
          console.log(err);
        });
*/
      },
      addcos:function () {
        console.log(22);
        var self = this;
        self.addored=1;
        self.cosbor=true;
        self.cosheader="添加角色";
        self.form6.type1=[];
        self.form6.type2=[];
        self.form7.type=[];
        //self.operatetable=[];
        self.menutable1.forEach(function (item,index) {
          item.checked=false;
        })
        self.menutable2.forEach(function (item,index) {
          item.checked=false;
        })
        self.operatetable.forEach(function (item,index) {
          item.checked=false;
        })       
      },
      addHHR:function () {
      var self =this ;
      self.$prompt('请输入游戏ID', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(({ value }) => {
          var params={cid:sessionStorage.cid,channel:sessionStorage.channel,uid:value}
             axios.post('http://monkey.queyoujia.com/promoter/partner',qs.stringify(params),{headers: {
                          'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {                       
                           console.log(res);
                           if (res.data.code==0) {
                               self.$message({
                                type: 'success',
                                message:'添加成功'
                              });  
                           }else{
                            self.$message({
                                type: 'info',
                                message:res.data.message
                              });  
                          }
                      }).catch(function (err) {
                           console.log(err);
                      });
        }).catch(() => {
          self.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },
      searchHHR:function () {
       console.log(33);
       var self =this;
       axios.get('http://monkey.queyoujia.com/Promoter/partnerList',{params:{uid:self.hhrid,page:1}}).then(function (res) {
         console.log(res);
         self.tableData6=res.data.data.list;
       }).catch(function (err) {
         console.log(err);
       })
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      onSubmit() {
        //console.log(this.formLabelAlign);
        var self=this;
        //self.formLabelAlign.channels=JSON.stringify(self.formLabelAlign.channels);
        console.log(JSON.stringify(self.formLabelAlign.channels));
        var params={};
       // console.log(self.deitstatus);
        if (self.deitstatus=='1') {
          console.log(1);
          self.geturl='http://monkey.queyoujia.com/access/user/updateV2';
        }else if(self.deitstatus=='2'){
          console.log(2);
          self.geturl='http://monkey.queyoujia.com/access/user/updateV2';
        }
        else{console.log('其他');}
        if (self.formLabelAlign.tel&&self.formLabelAlign.channels) {
             if (self.kouLiang1==true&&self.kouLiang2==false) {
                self.isAlone=0;
                params={
                  id:self.masterid,
                  /*uid:self.formLabelAlign.uid,*/
                  channels:JSON.stringify(self.formLabelAlign.channels),
                  company:self.formLabelAlign.company,
                  isAlone:self.isAlone,
                  mobile:self.formLabelAlign.tel,
                  name:self.formLabelAlign.name,
                  percent:self.formLabelAlign.liang,
                  cid:'2',
                  channel:'fuyang',
                  roleId:self.actor};
                   axios.post(self.geturl,qs.stringify(params),{headers: {
                          'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
                           sessionStorage.restemp=res;
                           console.log(sessionStorage.restemp);
                           console.log(res.data.code);
                           if (res.data.code==0) {
                               self.modalshow=false;
                               self.$message({
                                  title: '成功',
                                  message:res.data.message ,
                                  type: 'success'
                                });
                               self.tableData3=[];
                               var params={}
                               axios.post('http://monkey.queyoujia.com/access/user/list',qs.stringify(params),{headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
              }}).then(function (res) {
                        //console.log(res.data.data.users)
                        self.tableData3=res.data.data.users;
                        //console.log(self.tableData3);
                        self.pageSize=self.tableData3.length;
                        self.tableData3.forEach(function (item,index) {
                         // console.log(item);
                          if (item.status=='0') {
                            item.status='正常';
                          }
                          else{
                            if (item.status=='1') {
                            item.status='已禁止';
                            }
                        
                          }
                            if (item.isAlone=='0') {
                            console.log(item.isAlone);
                            item.isAlone='整体扣量';
                          }
                          else{
                            if (item.isAlone=='1') {
                            item.isAlone='单体扣量';
                            }
                          }
                        })
                      }).catch(function (err) {
                        console.log(err);
                      });


                           }else{
                            self.$message({
                                  title: '提示',
                                  message:res.data.message ,
                                  type: 'info'
                                });
                           }
                      }).catch(function (err) {
                           console.log(err);
                      })
            console.log(params);
            }else{
              if (self.kouLiang1==false&&self.kouLiang2==true) {
               self.isAlone=1;
               params={
                id:self.masterid,
               /* uid:self.formLabelAlign.uid,*/
                channels:JSON.stringify(self.formLabelAlign.channels),
                company:self.formLabelAlign.company,
                isAlone:self.isAlone,
                mobile:self.formLabelAlign.tel,
                name:self.formLabelAlign.name,
                roleId:self.actor,
                ip:self.formLabelAlign.ip,
                pv:self.formLabelAlign.pv,
                uv:self.formLabelAlign.uv,
                newUser:self.formLabelAlign.adduser,
                userRegister:self.formLabelAlign.addup,
                rechargeUser:self.formLabelAlign.recharge,
                firstRecharge:self.formLabelAlign.firstrecharge,
                recharge:self.formLabelAlign.allrecharge,
                consumeUser:self.formLabelAlign.consumer,
                consumeCoin:self.formLabelAlign.diamond,
                consume:self.formLabelAlign.consumermoney
                
              };
               axios.post(self.geturl,qs.stringify(params),{headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }}).then(function (res) {
                         sessionStorage.restemp=res;
                         console.log(sessionStorage.restemp);
                         console.log(res.data.data.code);
                          if (res.data.code==0) {
                               self.modalshow=false;
                               self.$message({
                                  title: '成功',
                                  message:res.data.data.message ,
                                  type: 'success'
                                });
                               self.tableData3=[];
                               var params={}
                               axios.post('http://monkey.queyoujia.com/access/user/list',qs.stringify(params),{headers: {
                                'Content-Type': 'application/x-www-form-urlencoded'
                          }}).then(function (res) {
                                    //console.log(res.data.data.users)
                        self.tableData3=res.data.data.users;
                        //console.log(self.tableData3);
                        self.pageSize=self.tableData3.length;
                        self.tableData3.forEach(function (item,index) {
                         // console.log(item);
                          if (item.status=='0') {
                            item.status='正常';
                          }
                          else{
                            if (item.status=='1') {
                            item.status='已禁止';
                            }
                        
                          }
                            if (item.isAlone=='0') {
                            console.log(item.isAlone);
                            item.isAlone='整体扣量';
                          }
                          else{
                            if (item.isAlone=='1') {
                            item.isAlone='单体扣量';
                            }
                          }
                        })
                      }).catch(function (err) {
                        console.log(err);
                      });
                           }else{
                            self.$message({
                                  title: '提示',
                                  message:res.data.data.message ,
                                  type: 'info'
                                });
                           }
                    }).catch(function (err) {
                         console.log(err);
                    })
            console.log(params);
              }
              self.$notify({
                title: '警告',
                message: '请检查是否输入有误',
                type: 'warning'
              });
                return;
            }
        }else{
          self.$notify({
          title: '警告',
          message: '请检查是否输入有误',
          type: 'warning'
        });
          return;
        }
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      searchIfo:function () {
        var self=this;
        self.tableData3=[];
        var params={mobile:self.adminTel,page:'1'}
        axios.post('http://monkey.queyoujia.com/access/user/list',qs.stringify(params),{headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }}).then(function (res) {
                  //console.log(res.data.data.users);
                  if (res) {
                     self.tableData3=res.data.data.users;
                  }else{
                     this.$message({
                      message: '输入有误，查询不到信息',
                      type: 'warning'
                    });
                  }
                }).catch(function (err) {
                  console.log(err);
                })

      },
      changeTel:function () {
       console.log(22);
      },
      handleEdit(index, row) {
        var self =this;
        axios.get('http://monkey.queyoujia.com/access/user/userChannel',{params:{userId:row.id}}).then(function (res) {
          self.channelarr=res.data.data.channels;
          self.channelarr.forEach(function (item,index) {
            if(item.checked=='false'){item.checked=false;}
            if(item.checked=='true'){item.checked=true;}
          })

        }).catch(function (err) {
          console.log(err)
        })  



        self.formLabelAlign.channels=null;
        self.formLabelAlign.channels={};
        self.deitsth="修改信息";
        self.formLabelAlign.name=row.name;
        self.formLabelAlign.tel=row.mobile;
        self.formLabelAlign.company=row.company;
        self.formLabelAlign.uid=row.uid;
        self.masterid=row.id;
        console.log(index, row);
        self.deitstatus='2';
        self.modalshow=true; 

      },
      handleDelete(index, row) {
        console.log(index, row);
        var self=this;
          self.$confirm('此操作将永久删除该管理员, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
           axios.get('http://monkey.queyoujia.com/access/user/delete',{params:{userId:row.id}}).then(function (res) {
          if(res.data.code==0){
            self.$message({
              message: '删除成功',
              type: 'success'
            });
            self.tableData3=[];
              var params={}
              axios.post('http://monkey.queyoujia.com/access/user/list',qs.stringify(params),{headers: {
                      'Content-Type': 'application/x-www-form-urlencoded'
                }}).then(function (res) {
                          //console.log(res.data.data.users)
                          self.tableData3=res.data.data.users;
                          //console.log(self.tableData3);
                          self.pageSize=self.tableData3.length;
                          self.tableData3.forEach(function (item,index) {
                           // console.log(item);
                            if (item.status=='0') {
                              item.status='正常';
                            }
                            else{
                              if (item.status=='1') {
                              item.status='已禁止';
                              }
                          
                            }
                              if (item.isAlone=='0') {
                              console.log(item.isAlone);
                              item.isAlone='整体扣量';
                            }
                            else{
                              if (item.isAlone=='1') {
                              item.isAlone='单体扣量';
                              }
                            }
                          })
                        }).catch(function (err) {
                          console.log(err);
                      });
          }else{
            self.$message({
              message: res.data.message,
              type: 'warning'
            });
          }
        }).catch(function (err) {
         console.log(err);
        })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });

       
      },
      handleDisable:function (index,row) {
        console.log(row);
        var nowstatus=null;
        if (row.status=='正常') {nowstatus=1;}else{
           nowstatus=0;
        }
        axios.get('http://monkey.queyoujia.com/access/user/status',{params:{id:row.id,status:nowstatus}}).then(function (res) {
          console.log(res.data.code);
          if (res.data.code==0) {
            if (row.status=="正常") {row.status="已禁止"}
            else{row.status="正常"}
          }
        }).catch(function (err) {
          console.log(err);
        });
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      addAdminstor:function () {
        var self=this;
        self.deitstatus=1;//添加管理员标识
        self.deitsth="添加管理员";
        self.formLabelAlign.name=null;
        self.formLabelAlign.tel=null;
        self.formLabelAlign.company=null;
        self.formLabelAlign.uid=null;
        self.modalshow=true;
        var params={}
        axios.post('http://monkey.queyoujia.com/access/user/userChannel',qs.stringify(params),{headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }}).then(function (res) {
           console.log(res);
        }).catch(function (err) {
          console.log(err);
        })
      },
      modalClose:function () {
        var self = this;
        self.modalshow=false;
      },
      useraction:function (val) {
        var self= this;
        self.kouLiang1=false;
        if (val=='0') {
            self.kouLiang1=true;
            self.kouLiang2=false;
            self.modalHeight='520px'
        }else{
          if (val=='1') {
          self.kouLiang1=false;
          self.kouLiang2=true;
          self.modalHeight='60%'
          }
          else{return;}
        }
      },
      kouLiang:function () {
       console.log(33);
      },
      actiontype:function (val) {
        var self=this;
        console.log(val);
        self.actor=val;

      },
      channel:function (val) {
        var self=this;
        console.log(val);
        self.cns1=false;
        self.cns2=false;
        self.cns3=false;
        self.cns4=false;
        var channel=[];
        val.forEach(function (item,index) {
          //console.log(item);
          if(item==1){self.cns1=true;channel.push({uid:self.formLabelAlign.uid,channel:'1'})}
          if(item==2){self.cns2=true;channel.push({uid:self.formLabelAlign.uid2,channel:'2'})}
          if(item==3){self.cns3=true;channel.push({uid:self.formLabelAlign.uid3,channel:'3'})}
          if(item==8){self.cns4=true;channel.push({uid:self.formLabelAlign.uid4,channel:'8'})}
        })
        self.formLabelAlign.channels=channel;
        console.log(JSON.stringify(self.formLabelAlign.channels));
       // {"channels":[3,2,1]}
        /*if (val=='杭州') {
          self.resource=1;
          self.formLabelAlign.channels='{"channels":[1]}';
          //console.log(self.formLabelAlign.channels);
        }else{
          if (val=='其他') {
          self.resource=null;
          self.formLabelAlign.channels='{"channels":[]}';
          //console.log(self.formLabelAlign.channels);
          }
        } */  
      },
      inputId:function (val) {
        var self =this;
        
        //console.log(self.formLabelAlign.uid);
        if(val==1){  
           self.formLabelAlign.checkid=null;
           self.formLabelAlign.channels.forEach(function (item,index) {
             console.log(item);
             if(item.channel==1){item.uid=self.formLabelAlign.uid}
             if(item.channel==2){item.uid=self.formLabelAlign.uid2}
             if(item.channel==3){item.uid=self.formLabelAlign.uid3}
             if(item.channel==4){item.uid=self.formLabelAlign.uid4}
           })      
           //console.log(JSON.stringify(self.formLabelAlign.channels.channels))
           if (self.formLabelAlign.uid.length==7) {
            axios.get('http://monkey.queyoujia.com/user/check',{params:{uid:self.formLabelAlign.uid,cid:'1'}}).then(function (res) {
              console.log(res.data.data);
              self.formLabelAlign.checkid=res.data.data.nickname;
            }).catch(function (err) {
             console.log(err);
            })
          }
        else{
          return;
        }
        }
        else if(val==2){
          self.formLabelAlign.checkid2=null;
          self.formLabelAlign.channels.forEach(function (item,index) {
             console.log(item);
             if(item.channel==1){item.uid=self.formLabelAlign.uid}
             if(item.channel==2){item.uid=self.formLabelAlign.uid2}
             if(item.channel==3){item.uid=self.formLabelAlign.uid3}
             if(item.channel==4){item.uid=self.formLabelAlign.uid4}
           })
           if (self.formLabelAlign.uid2.length==7) {
            axios.get('http://monkey.queyoujia.com/user/check',{params:{uid:self.formLabelAlign.uid2,cid:'2'}}).then(function (res) {
              console.log(res.data.data);
              self.formLabelAlign.checkid2=res.data.data.nickname;
            }).catch(function (err) {
             console.log(err);
            })
          }
        else{
          return;
        }
        }
        else if(val==3){
          self.formLabelAlign.checkid3=null;
          self.formLabelAlign.channels.forEach(function (item,index) {
             console.log(item);
             if(item.channel==1){item.uid=self.formLabelAlign.uid}
             if(item.channel==2){item.uid=self.formLabelAlign.uid2}
             if(item.channel==3){item.uid=self.formLabelAlign.uid3}
             if(item.channel==4){item.uid=self.formLabelAlign.uid4}
           })
           if (self.formLabelAlign.uid3.length==7) {
            axios.get('http://monkey.queyoujia.com/user/check',{params:{uid:self.formLabelAlign.uid3,cid:'3'}}).then(function (res) {
              console.log(res.data.data);
              self.formLabelAlign.checkid3=res.data.data.nickname;
            }).catch(function (err) {
             console.log(err);
            })
          }
        else{
          return;
        }
        }
         else if(val==4){
          self.formLabelAlign.checkid4=null;
          self.formLabelAlign.channels.forEach(function (item,index) {
             console.log(item);
             if(item.channel==1){item.uid=self.formLabelAlign.uid}
             if(item.channel==2){item.uid=self.formLabelAlign.uid2}
             if(item.channel==3){item.uid=self.formLabelAlign.uid3}
             if(item.channel==4){item.uid=self.formLabelAlign.uid4}
           })
           if (self.formLabelAlign.uid4.length==7) {
            axios.get('http://monkey.queyoujia.com/user/check',{params:{uid:self.formLabelAlign.uid4,cid:'8'}}).then(function (res) {
              console.log(res.data.data);
              self.formLabelAlign.checkid4=res.data.data.nickname;
            }).catch(function (err) {
             console.log(err);
            })
          }
        else{
          return;
        }
        }
          else{}
       
      },
      Edit:function (index,row) {
        //console.log(row);
        var self = this;
        self.cosbor=true;
        self.addored=2;
        self.cosheader="修改角色";
        self.menutable1=[];
        self.menutable2=[];
        self.form6.type1=[];
        self.form6.type2=[];
        self.operatetable=[];
        self.form7.type=[];
        axios.get('http://monkey.queyoujia.com/access/role/resource',{params:{roleId:row.id}}).then(function (res) {
         /*self.form6.type1=null;
         self.form6.type2=null;*/
         res.data.data.operate.forEach(function (item,index) {
            if(item.checked=="false"){ item.checked=false;}
            if(item.checked=="true"){ item.checked=true;}
            self.operatetable.push(item);
          });
          res.data.data.menu.forEach(function (item,index) {
           // console.log(item)
            if(item.checked=="false"){ item.checked=false;}
            if(item.checked=="true"){ item.checked=true;}
            if(item.id<12){
              self.menutable1.push(item);
            }else{
              self.menutable2.push(item);
            }
          })
        }).catch(function (err) {
          console.log(err);
        });
        console.log(self.form7.type)
        self.cosid=row.id;
        self.form6.name=row.name;
      },
      cosshow:function () {
       console.log(33);
       var self = this;
       self.cosbor=false;
      }

  },
  computed:{
    prikey(){
      //console.log(window.screen.availHeight)
      this.tabHeight=window.screen.availHeight-200+"px"
    }

  },
  mounted(){
    var self =this;
    self.tableData3=[]
    var params={}
    self.menutable1=[];
    self.menutable2=[];
    self.form6.type1=[];
    self.form6.type2=[];
    self.form7.type=[];
    self.operatetable=[];
    axios.post('http://monkey.queyoujia.com/access/user/list',qs.stringify(params),{headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
              }}).then(function (res) {
                        //console.log(res.data.data.users)
                        self.tableData3=res.data.data.users;
                        //console.log(self.tableData3);
                        self.pageSize=self.tableData3.length;
                        self.tableData3.forEach(function (item,index) {
                         // console.log(item);
                          if (item.status=='0') {
                            item.status='正常';
                          }
                          else{
                            if (item.status=='1') {
                            item.status='已禁止';
                            }
                        
                          }
                            if (item.isAlone=='0') {
                            console.log(item.isAlone);
                            item.isAlone='整体扣量';
                          }
                          else{
                            if (item.isAlone=='1') {
                            item.isAlone='单体扣量';
                            }
                          }
                        })
                      }).catch(function (err) {
                        console.log(err);
                      });
              axios.get('http://monkey.queyoujia.com/Promoter/partnerList',{params:{}}).then(function (res) {
              // console.log(res);
               self.tableData6=res.data.data.list;
             }).catch(function (err) {
               console.log(err);
             });
             axios.get(' http://monkey.queyoujia.com/access/role/list',{params:{}}).then(function (res) {
              // console.log(res);
               self.tableData9=res.data.data.role;
               self.rolechose=res.data.data.role;
             }).catch(function (err) {
               console.log(err);
             });

              axios.get('http://monkey.queyoujia.com/access/user/userChannel',{params:{}}).then(function (res) {
          self.channelarr=res.data.data.channels;

        }).catch(function (err) {
          console.log(err)
        })

             axios.get('http://monkey.queyoujia.com/access/role/resource',{params:{}}).then(function (res) {
         /*self.form6.type1=null;
         self.form6.type2=null;*/
         res.data.data.operate.forEach(function (item,index) {
            if(item.checked=="false"){ item.checked=false;}
            if(item.checked=="true"){ item.checked=true;}
            self.operatetable.push(item);
          });
          res.data.data.menu.forEach(function (item,index) {
           // console.log(item)
            if(item.checked=="false"){ item.checked=false;}
            if(item.checked=="true"){ item.checked=true;}
            if(item.id<12){
              self.menutable1.push(item);
            }else{
              self.menutable2.push(item);
            }
          })
        }).catch(function (err) {
          console.log(err);
        });
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
}

a {
  color: #42b983;
}
.addbtn{margin:0 0 0 10px;}
.cosSearch{}
.privilege{margin-top: 10px;}
.etable{margin-top: 15px;}
.deluser{position: absolute;bottom:1rem;margin:10px 20px;}
.block{float: right;margin-top: 10px;}
.modalbor,.modalmessage{position: fixed;top: 0;right: 0;left: 0;bottom: 0;margin:auto;width:100%;opacity: 0.5;background: black;height:100%;z-index: 998}
.modalmessage{width:580px;height: 520px;background: white;opacity: 1;box-shadow: 0px 0px 3px #666;border-radius: 5px;padding-top: 20px;overflow-y: scroll;}
.modalhead{margin-bottom: 20px;text-align: center;font-size:20px;color: #48576a;}
.modalmessage::-webkit-scrollbar{border-radius: 10px;width: 5px;background-color:#b5b1b1;height: 5px;}
.modalmessage::-webkit-scrollbar-track{border-radius: 10px;background-color:#E5E9F2;} 
.modalmessage::-webkit-scrollbar-thumb{border-radius: 10px;box-shadow: inset 0 0 6px rgba(0,0,0,.3); background-color:#324057;}
.textclass[data-v-18498011] input{color: #545454;}
.cosbod,.coscon{z-index: 9999;position: fixed;top: 0;right:0;bottom: 0;left: 0;margin:auto;background-color: black;opacity: 0.75;width: 100%;height: 100%;}
.coscon{z-index: 99999;background-color: white;min-width:600px;height: 80%;max-width: 60%; opacity: 1;overflow-y: scroll;border-radius: 5px;}
.coscon>header{text-align: center;padding:2vh 0;font-size:22px;color: #445454;background-color: white;}
.coscon::-webkit-scrollbar{border-radius: 10px;width: 5px;background-color:#b5b1b1;height: 5px;}
.coscon::-webkit-scrollbar-track{border-radius: 10px;background-color:#E5E9F2;} 
.coscon::-webkit-scrollbar-thumb{border-radius: 10px;box-shadow: inset 0 0 6px rgba(0,0,0,.3); background-color:#324057;}
.fromname{width:91.3333%;margin: auto;}
</style>
