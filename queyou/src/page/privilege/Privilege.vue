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
      <el-form-item label="角色" prop="region2" >
      <el-select v-model="cosChose"  placeholder="请选择角色属性" @change="actiontype">
        <el-option v-for="role in options_new" :label="role.name" style="display:block;" :value="role.id" :key="role.id"></el-option>
        <el-option label="超级管理员" value="-6"></el-option>
      </el-select>
      </el-form-item>
    </el-col>


    <template>
      <el-col :span='22' :offset="2" style="margin-bottom:15px;">
      <el-checkbox-group v-model="checkList" @change="current_change">
        <label class="el-form-item__label" style="display: inline-block;height: 20px;line-height: 20px;padding: 0 13px 0 2px;">渠道</label>
        <el-checkbox :label="item.id" v-for="item in channelarr" :key="item.id">{{item.chars}}</el-checkbox>
      </el-checkbox-group>
      </el-col>
    </template>

    <template>
    <div v-for="(item,index) in channelarr"  v-if="item.checked==true" ref="checkChannel" :data-channels='JSON.stringify(item)' :key='item.id'>
      <el-col :span="17">
        <el-form-item label="游戏ID">
              <el-input v-model="item.uid" type='number' :placeholder="'请输入'+item.name+'游戏ID'" ></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="4" :offset='1'>
        <el-button type="primary" @click="channel_new(item.uid,item.id)">检查</el-button>
      </el-col>
    </div>
    </template>


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

  <el-form-item label="角色名称" class="fromname" style="margin-bottom:10px;">
    <el-input v-model="form6.name"></el-input>
  </el-form-item>
  <el-col :span="11" :offset="1">
  <el-form-item label="导航分配">
    <el-tree
      style="height:60vh;overflow:scroll;"
      :data="data2"
      show-checkbox
      @check-change="ckchange_nav"
      node-key="id"
      ref="tree1"
      highlight-current
      :props="defaultProps">
    </el-tree>
  </el-form-item>
  </el-col>
  <el-col :span="10" :offset="1">
  <el-form-item label="权限分配">
    <el-tree
      style="height:60vh;overflow:scroll;"
      :data="data3"
      show-checkbox
      @check-change="ckchange_ope"
      node-key="id"
      ref="tree2"
      highlight-current
      :props="defaultProps">
    </el-tree>
  </el-form-item>
  </el-col>
  <el-col :span="23" :offset="1">
  <el-form-item>
    <el-button type="primary" @click="onSubmit6">立即创建</el-button>
    <el-button @click="cosshow">取消</el-button>
  </el-form-item>
</el-col>
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
      tempnickname:[null,null,null,null,null,null,null,null,null,null,null,null],
      cosChose:null,
      options_new:[],
      value_new:null,
      checkList: [],
      arr1:[],
      arr2:[],
      data2:[],
      data3:[],
      operateAll:{},
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
                  addored:null,
              defaultProps: {
                    children: 'children',
                    label: 'label'
                  },
              channels_new:[],
            }
  },
  props: ['form7.type'],
  methods:{
    channel_new:function (uid,cid) {
      var self=this;
      uid=uid.toString();
      if (uid.length==7) {
        axios.get('http://monkey.queyoujia.com/user/check',{params:{uid:uid,cid:cid}}).then(function (res) {
          if (res.data.code==0) {
            self.$message({
              message: '用户昵称为：'+res.data.data.nickname,
              type: 'success'
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
      }
    },
    current_change:function (val) {
      var self=this;
      var chose=[];
      self.channelarr.forEach(function (item,index) {
        console.log(item.id);
        for (var i = 0; i < val.length; i++) {
             if (val[i]==item.id) {
               item.checked=true;
               chose.push(item.id);
            }
        }
      })
      self.channelarr.forEach(function (item,index) {
        if (chose.indexOf(item.id)==-1) {
          item.checked=false;
        }
      })
      console.log(val);
    },
    checkUserId:function (uid,cid) {
      var self=this;
      var arr=null;
      var brr=[];
      console.log(self.channelarr);
      self.channelarr.forEach(function (item,index) {
        if (item.checked==true) {
          axios.get('http://monkey.queyoujia.com/user/check',{params:{uid:item.uid,cid:item.id}}).then(function (res) {
            if (res.data.code==0) {
              item.nickname=res.data.data.nickname;
              brr.push({uid:uid,channel:cid});
              self.channels_new=brr;
              console.log(brr);
            }else{
              item.nickname=res.data.message;
            }
          }).catch(function (err) {
           console.log(err);
          })
        }
      });
      arr= self.channelarr;
      self.channelarr=[];
      self.channelarr=arr;
    },
    ckchange_nav:function () {
      var self = this;
      // self.$refs.tree1.getCheckedNodes().forEach(function (item,index) {
      //   self.arr1.push(item.id);
      //   console.log('已存在!');
      //   for (var i=0;i<self.arr1.length;i++) {
      //       if (self.arr1[i]==item.pid) {
      //         console.log('已存在!');
      //       }else{
      //         self.arr1.push(item.pid);
      //       }
      //   }
      // })
    //  console.log(self.$refs.tree1.getCheckedNodes());
    },
    ckchange_ope:function () {
      var self = this;
    //  console.log(self.$refs.tree2.getCheckedNodes());
    },
     resetChecked() {
       this.$refs.tree.setCheckedKeys([]);
     },
    onSubmit6() {
        var self = this;
        if(self.addored==1){//添加
          //console.log(self.form6.name);
          var arr1=[];
          var arr2=[];
          //console.log(self.$refs.tree1.getCheckedNodes())
          self.$refs.tree1.getCheckedNodes().forEach(function (item,index) {
            arr1.push(item.id);
            console.log('已存在!');
            for (var i=0;i<arr1.length;i++) {
                if (arr[i]==item.pid) {
                  console.log('已存在!');
                }else{
                  arr1.push(item.pid);
                }
            }
          })
          self.$refs.tree2.getCheckedNodes().forEach(function (item,index) {
            arr2.push(item.id);
          })
          self.operateAll.menu=arr1;
          self.operateAll.operate=arr2;
          console.log(JSON.stringify(self.operateAll));
          axios.get('http://monkey.queyoujia.com/access/role/add',{params:{ch:'hz',name:self.form6.name,operations:JSON.stringify(self.operateAll)}}).then(function (res) {
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
          var arr1=[];
          var arr2=[];
          self.$refs.tree1.getCheckedNodes().forEach(function (item,index) {
            arr1.push(item.id);
            arr1.push(item.pid);
          })
          self.$refs.tree2.getCheckedNodes().forEach(function (item,index) {
            arr2.push(item.id);
            arr1.push(item.pid);
          });

          Array.prototype.distinct = function (){
           var arr = this,
            result = [],
            len = arr.length;
           arr.forEach(function(v, i ,arr){  //这里利用map，filter方法也可以实现
            var bool = arr.indexOf(v,i+1);  //从传入参数的下一个索引值开始寻找是否存在重复
            if(bool === -1){
             result.push(v);
            }
           })
           return result;
          };

          self.operateAll.menu=arr1.distinct();
          self.operateAll.operate=arr2.distinct();
          axios.get('http://monkey.queyoujia.com/access/role/update',{params:{ch:'hz',id:self.cosid,name:self.form6.name,operations:JSON.stringify(self.operateAll)}}).then(function (res) {
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
        self.$refs.tree1.setCheckedKeys([]);
        self.$refs.tree2.setCheckedKeys([]);
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
        var arr=[];
        for (var i = 0; i < self.$refs.checkChannel.length; i++) {
          console.log(JSON.parse(self.$refs.checkChannel[i].dataset.channels));
          arr.push({"uid":JSON.parse(self.$refs.checkChannel[i].dataset.channels).uid.toString(),"channel":JSON.parse(self.$refs.checkChannel[i].dataset.channels).id.toString()})
        }
        //console.log(self.$refs.checkChannel);
        if(self.cosChose=='超级管理员'){
          self.cosChose=-6;
        }
        console.log(JSON.stringify(arr));
        var params={};
        self.geturl='http://monkey.queyoujia.com/access/user/updateV2';
        if (self.formLabelAlign.tel&&arr) {
             if (self.kouLiang1==true&&self.kouLiang2==false) {
                self.isAlone=0;
                params={
                  id:self.masterid,
                  /*uid:self.formLabelAlign.uid,*/
                  channels:JSON.stringify(arr),
                  company:self.formLabelAlign.company,//不变
                  isAlone:self.isAlone,//不变
                  mobile:self.formLabelAlign.tel,//不变
                  name:self.formLabelAlign.name,//不变
                  percent:self.formLabelAlign.liang,//不变
                  roleId:self.cosChose
                };
                //console.log(params);
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
        self.checkList=[];
        axios.get('http://monkey.queyoujia.com/access/user/userChannel',{params:{userId:row.id}}).then(function (res) {
          if (res.data.data.userInfo.roleId==0) {
            self.cosChose='超级管理员';
          }else {
            self.cosChose=res.data.data.userInfo.roleId;
          }
          res.data.data.channels.forEach(function (item,index) {
            if (item.checked==true) {
              self.checkList.push(item.id);
            }
          })
          self.formLabelAlign.klType=res.data.data.userInfo.isAlone.toString();
          self.formLabelAlign.liang=res.data.data.userInfo.percent;
          self.channelarr=res.data.data.channels;
            console.log(self.channelarr);
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
        self.channelarr=[];
        self.checkList=[];
        self.cosChose=null;
        self.isAlone=null;
        self.formLabelAlign.klType=null;
        self.tempnickname=[null,null,null,null,null,null,null,null,null,null,null,null];
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
          self.channelarr=res.data.data.channels;
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
        console.log('现在是'+val);

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
              //console.log(res.data.data);
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
        console.log(row);
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
        axios.get('http://monkey.queyoujia.com/access/role/newresource',{params:{roleId:row.id}}).then(function (res) {
         /*self.form6.type1=null;
         self.form6.type2=null;*/
         // self.data2=[];
         // self.data3=[];
         var navChecked=[];
         var operateChecked=[];
         //self.data2=res.data.data.menu;
         //self.data3=res.data.data.operate;
         //console.log(self.data2);
     		 res.data.data.menu.forEach(function (item,index) {
           item.label=item.name+"("+item.id+")";
           //item.children=item.child;
           if (item.children.length>0) {
            // console.log(item.children);
             item.children.forEach(function (item_d,index) {
              // console.log(item_d);
               item_d.label=item_d.name;
               if (item_d.checked==true) {
                 navChecked.push(item_d);
               }
             })
           }else{
             if (item.checked==true) {
               navChecked.push(item);
             }
             console.log('nochild');
           }
     		})
              //  self.$refs.tree.setCheckedNodes(navChecked);
         res.data.data.operate.forEach(function (item,index) {
           item.label=item.name+"("+item.id+")";
           //item.children=item.child;
           if (item.children.length>0) {
            // console.log(item.children);
             item.children.forEach(function (item_d,index) {
               // console.log(navChecked);
              item_d.label=item_d.name;
              if (item_d.checked==true) {
                //console.log(item_d.checked);
                operateChecked.push(item_d);
              }
             })
           }else{
             if (item.checked==true) {
               operateChecked.push(item);
             }
             console.log('nochild');
           }
     		})
         console.log(operateChecked);
         self.$refs.tree1.setCheckedNodes(navChecked);
         self.$refs.tree2.setCheckedNodes(operateChecked);
         self.form6.name=row.name;
         self.cosid=row.id;
        }).catch(function (err) {
          console.log(err);
        });
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
    axios.get('http://monkey.queyoujia.com/access/role/newresource',{params:{}}).then(function (res) {
        console.log(res);
        self.data2=res.data.data.menu;
        self.data3=res.data.data.operate;
      //  console.log(self.data2);
    		self.data2.forEach(function (item,index) {
          item.label=item.name+"("+item.id+")";
          //item.children=item.child;
          if (item.children.length>0) {
          //  console.log(item.children);
            item.children.forEach(function (item_d,index) {
            //  console.log(item_d);
              item_d.label=item_d.name;
            })
          }else{
            console.log('nochild');
          }
    		})
        self.data3.forEach(function (item,index) {
          item.label=item.name+"("+item.id+")";
          //item.children=item.child;
          if (item.children.length>0) {
          //  console.log(item.children);
            item.children.forEach(function (item_d,index) {
            //  console.log(item_d);
              item_d.label=item_d.name;
            })
          }else{
            console.log('nochild');
          }
    		})
    		console.log(res);
    }).catch(function (err) {
      console.log(err);
    })


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
               self.options_new=res.data.data.role;
               console.log('hres');
               console.log(self.options_new);
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
