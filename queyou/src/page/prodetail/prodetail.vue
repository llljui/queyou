<template>
  <div class="prodetail"
    :key="scrrens"
    v-loading="loading2"
   element-loading-text="拼命加载中"
  > <!--  -->
  <el-row>
    <el-col :span="2" :class="{mrt:btn,bt1:btn1}"><div @click="chose(1)">直属会员</div></el-col>
    <el-col :span="1" :class="{mrt:btn,bt2:btn2}"><div @click="chose(2)">代理商</div></el-col>
    <el-col :span="1" :class="{mrt:btn,bt3:btn3}"><div @click="chose(3)">玩家</div></el-col>
    <el-col :span="3" :offset="2" class="mrts"><el-input type="number" placeholder="请输入游戏ID" v-model="uids" size="small"></el-input></el-col>
    <el-col :span="1"  class="mrts" style="margin-left:1vw"><el-button type="primary" size="small" @click="search">搜索</el-button></el-col>
    <el-col :span="1"  class="mrts"><el-button size="small" @click="reset">重置</el-button></el-col>
    <el-col :span="scr_x2"  :offset="scr_x1">
    <ul class="btnchose">
      <li><el-button size="small" @click="btns(1)" :class="{btnshow:showbtn1}">昨天</el-button></li>
      <li><el-button size="small" @click="btns(2)" :class="{btnshow:showbtn2}">近七天</el-button></li>
      <li><el-button size="small" @click="btns(3)" :class="{btnshow:showbtn3}">近一个月</el-button></li>
      <li><el-button size="small" @click="btns(4)" :class="{btnshow:showbtn4}">近一年</el-button></li>
    </ul>
    </el-col>
    <el-col :span="2" class="mrts" style="{styleObj}">
      <el-date-picker
      @change="picktime"
       size="small"
      class="picktime"
      v-model="value1"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions0">
    </el-date-picker>
    </el-col>
    <el-col :span="2" class="mrts" style="{styleObj};margin-left:10px">
      <el-date-picker
      @change="picktime"
       size="small"
      class="picktime"
      v-model="value2"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions0">
    </el-date-picker>
    </el-col>
  </el-row>
  <div>
     <el-table
      class="mrts"
     align="center"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="uid"
      align="center"
      label="游戏ID"
      min-width="120">
    </el-table-column>
    <el-table-column
      prop="nickname"
      label="用户昵称"
       align="center"
      min-width="120">
    </el-table-column>
    <el-table-column
    min-width="120"
     align="center"
      prop="dateline"
      label="注册时间">
    </el-table-column>
     <el-table-column label="操作"  align="center">
      <template scope="scope">
       <el-button
         align="center"
         size="small"
         type="primary"
         @click="handleEdit(scope.$index, scope.row)">查看明细</el-button>
      </template>
    </el-table-column>
  </el-table>
  </el-row>
  <el-row class="pagetab">
     <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="1"
      layout="prev, pager, next, jumper"
      :total="allpage">
    </el-pagination>
  </el-row>
</div>
<el-dialog title="用户明细" :visible.sync="dialogTableVisible">
  <el-table :data="gridData">
    <el-table-column property="realName" label="真实姓名" align="center"></el-table-column>
    <el-table-column property="mobile" label="手机号" align="center"></el-table-column>
    <el-table-column property="idcard" label="身份证号" align="center"></el-table-column>
    <el-table-column property="diamond" label="剩余钻石" align="center"></el-table-column>
    <el-table-column property="pid" label="上一级uid" align="center"></el-table-column>
    <el-table-column property="pnickname" label="上级昵称" align="center"></el-table-column>
    <!-- <el-table-column property="iroomkeynum" label="剩余钻石" align="center"></el-table-column> -->
  </el-table>
</el-dialog>
  </div>
</template>

<script>
import axios from 'axios';
import qs from "qs";
export default {
  name: 'prodetail',
  data () {
    return {
      styleObj:{
        margin:"0px 5px 0 10px",
        width:'8.33333%'
      },
      scr_x2:0,
    gridData: [],
    dialogTableVisible: false,
    chosetime:null,
    uids:null,
    allpage:1,
    pickerOptions0: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
    showbtn1:null,
    showbtn2:null,
    showbtn3:null,
    showbtn4:null,
    loading2:false,
    btn:true,
    btn1:true,
    btn2:false,
    btn3:false,
    value1:null,
    value2:null,
    type:1,
    tableData: [],
    currentPage3: 1,
    startTime:null,
    endTime:null
    }
  },
  methods:{
    picktime:function(){
      var self = this;
      self.chosetime=1;
      self.showbtn1=false;
      self.showbtn2=false;
      self.showbtn3=false;
      self.showbtn4=false;
      console.log(self.value1);
      if (self.value1&&self.value2) {
        if (self.value2-self.value1>0) {
          self.startTime=Date.parse(self.value1)/1000;
          self.endTime=Date.parse(self.value2)/1000;
          axios.get('http://monkey.queyoujia.com/user/list',{params:{type:self.type,page:1,startTime:self.startTime,endTime:self.endTime}}).then(function (res) {
          console.log(res);
          self.tableData=[];
          self.tableData=res.data.data.list;
          self.allpage=res.data.data.totalPage;
          self.loading2=false;
          self.currentPage3=1;
          }).catch(function (err) {
           console.log(err);
          })
        }else{
          self.$message({
          message: '请检查日期，确保输入正确',
          type: 'warning'
        });
        }
      }else{
        return;
      }
    },
    chose:function (val) {
      var self =this;
      console.log(val);
      if (val==1) {
        self.chosetime=0;
        self.btn1=true;
        self.btn2=false;
        self.btn3=false;
        self.type=1;
        self.showbtn1=false;
        self.showbtn2=false;
        self.showbtn3=false;
        self.showbtn4=false;
        self.loading2=true;
        axios.get('http://monkey.queyoujia.com/user/list',{params:{type:self.type,page:1}}).then(function (res) {
        console.log(res);
        self.tableData=[];
        self.tableData=res.data.data.list;
        self.allpage=res.data.data.totalPage;
        self.loading2=false;
        self.currentPage3=1;
      }).catch(function (err) {
       console.log(err);
      })
      }else if(val==2){
        self.showbtn1=false;
        self.showbtn2=false;
        self.showbtn3=false;
        self.showbtn4=false;
        self.chosetime=0;
        self.btn1=false;
        self.btn2=true;
        self.btn3=false;
        self.type=2;
        self.loading2=true;
        axios.get('http://monkey.queyoujia.com/user/list',{params:{type:self.type,page:1}}).then(function (res) {
        console.log(res);
        self.tableData=[];
        self.tableData=res.data.data.list;
        self.allpage=res.data.data.totalPage;
        self.loading2=false;
        self.currentPage3=1;
      }).catch(function (err) {
       console.log(err);
      })
      }else if(val==3){
        self.showbtn1=false;
        self.showbtn2=false;
        self.showbtn3=false;
        self.showbtn4=false;
        self.chosetime=0;
        self.btn1=false;
        self.btn2=false;
        self.btn3=true;
        self.type=3;
        self.loading2=true;
        axios.get('http://monkey.queyoujia.com/user/list',{params:{type:self.type,page:1}}).then(function (res) {
        console.log(res);
        self.tableData=[];
        self.tableData=res.data.data.list;
        self.allpage=res.data.data.totalPage;
        self.loading2=false;
        self.currentPage3=1;
      }).catch(function (err) {
       console.log(err);
      })
      }else{
        self.btn1=false;
        self.btn2=false;
        self.btn3=false;}
    },
     handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        var self=this;
        self.loading2=true;
        if (self.chosetime==0) {
          axios.get('http://monkey.queyoujia.com/user/list',{params:{page:val,type:self.type}}).then(function (res) {
          console.log(res);
          self.tableData=[];
          self.tableData=res.data.data.list;
          self.allpage=res.data.data.totalPage;
          self.loading2=false;
        }).catch(function (err) {
         console.log(err);
        })
        }else if(self.chosetime==1){
          axios.get('http://monkey.queyoujia.com/user/list',{params:{page:val,type:self.type,startTime:self.startTime,endTime:self.endTime}}).then(function (res) {
          console.log(res);
          self.tableData=[];
          self.tableData=res.data.data.list;
          self.allpage=res.data.data.totalPage;
          self.loading2=false;
        }).catch(function (err) {
         console.log(err);
        })
        }
        else{
         axios.get('http://monkey.queyoujia.com/user/list',{params:{page:val,type:self.type}}).then(function (res) {
          console.log(res);
          self.tableData=[];
          self.tableData=res.data.data.list;
          self.allpage=res.data.data.totalPage;
          self.loading2=false;
        }).catch(function (err) {
         console.log(err);
        })}
      },
      handleEdit(index, row) {
        var self=this;
        //console.log(row);
        self.dialogTableVisible=true;
         self.gridData=[];
        axios.get('http://monkey.queyoujia.com/user/detail',{params:{uid:row.uid}}).then(function (res) {
          console.log(res.data.data);
          self.gridData=[res.data.data];
          console.log(self.gridData);
        }).catch(function (err) {
          console.log(err);
        })
       /* self.$router.push({path: '/detailpro/detailpro'})*/
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      btns:function (btn) {
        var self=this;
       if(btn==1){
          self.showbtn1=true;
          self.showbtn2=false;
          self.showbtn3=false;
          self.showbtn4=false;
          self.loading2=true;
          self.chosetime=1;
          var endTime=new Date();
          endTime=endTime.setHours('00', '00', '00', '0');
          var startTime=endTime-86400000;
          //console.log(endTime);
          self.startTime=startTime/1000;
          self.endTime=endTime/1000;
          axios.get('http://monkey.queyoujia.com/user/list',{params:{startTime:self.startTime,endTime:self.endTime,type:self.type,page:1}}).then(function (res) {
          console.log(res);
          self.tableData=[];
          self.tableData=res.data.data.list;
          self.allpage=res.data.data.totalPage;
        }).catch(function (err) {
         console.log(err);
        })
        self.loading2=false;
       }else if(btn==2){
          self.showbtn1=false;
          self.showbtn2=true;
          self.showbtn3=false;
          self.showbtn4=false;
          self.loading2=true;
          self.chosetime=1;
           var endTime=new Date();
          endTime=endTime.setHours('00', '00', '00', '0');
          var startTime=endTime-86400000*7;
          //console.log(endTime);
          self.startTime=startTime/1000;
          self.endTime=endTime/1000;
          axios.get('http://monkey.queyoujia.com/user/list',{params:{startTime:self.startTime,endTime:self.endTime,type:self.type,page:1}}).then(function (res) {
          console.log(res);
          self.tableData=[];
          self.tableData=res.data.data.list;
          self.allpage=res.data.data.totalPage;
        }).catch(function (err) {
         console.log(err);
        })
        self.loading2=false;
       }else if(btn==3){
          self.showbtn1=false;
          self.showbtn2=false;
          self.showbtn3=true;
          self.showbtn4=false;
          self.loading2=true;
          self.chosetime=1;
         function getCountDays() {
             var curDate = new Date();
              /* 获取当前月份 */
             var curMonth = curDate.getMonth();
            /*  生成实际的月份: 由于curMonth会比实际月份小1, 故需加1 */
            curDate.setMonth(curMonth + 1);
            curDate.setDate(0);
            /* 返回当月的天数 */
        return curDate.getDate();
      }
        var endTime=new Date();
        endTime=endTime.setHours('00', '00', '00', '0');
        var startTime=endTime-(86400000*getCountDays());
        axios.get('http://monkey.queyoujia.com/user/list',{params:{startTime:self.startTime,endTime:self.endTime,type:self.type,page:1}}).then(function (res) {
          console.log(res);
          self.tableData=[];
          self.tableData=res.data.data.list;
          self.allpage=res.data.data.totalPage;
        }).catch(function (err) {
         console.log(err);
        })
        self.loading2=false;
       }else if(btn==4){
          self.showbtn1=false;
          self.showbtn2=false;
          self.showbtn3=false;
          self.showbtn4=true;
          self.loading2=true;
          self.chosetime=1;
          var endTime=new Date();
          endTime=endTime.setHours('00', '00', '00', '0');
          var startTime=endTime-86400000*365;
          //console.log(endTime);
          self.startTime=startTime/1000;
          self.endTime=endTime/1000;
          axios.get('http://monkey.queyoujia.com/user/list',{params:{startTime:self.startTime,endTime:self.endTime,type:self.type,page:1}}).then(function (res) {
          console.log(res);
          self.tableData=[];
          self.tableData=res.data.data.list;
          self.allpage=res.data.data.totalPage;
        }).catch(function (err) {
         console.log(err);
        })
        self.loading2=false;
       }else{
          self.showbtn1=false;
          self.showbtn2=false;
          self.showbtn3=false;
          self.showbtn4=false;
       }
      },
      search:function () {
        var self = this;
        self.loading2=true;
        axios.get('http://monkey.queyoujia.com/user/list',{params:{page:1,uid:self.uids,type:self.type}}).then(function (res) {
          console.log(res);
           self.tableData=[];
          self.tableData=res.data.data.list;
          self.allpage=res.data.data.totalPage;
           self.loading2=false;
        }).catch(function (err) {
         console.log(err);
        })
      },
      reset:function () {
       var self=this;
       self.tableData=[];
       self.allpage=1;
       self.uids=null;
       self.currentPage3=1;
       self.btn1=true;
        axios.get('http://monkey.queyoujia.com/user/list',{params:{type:1}}).then(function (res) {
        console.log(res);
        self.tableData=res.data.data.list;
        self.allpage=res.data.data.totalPage;
      }).catch(function (err) {
       console.log(err);
      })
      }
  },
  mounted(){
    var self=this;
    axios.get('http://monkey.queyoujia.com/user/list',{params:{type:1}}).then(function (res) {
      console.log(res);
      self.tableData=res.data.data.list;
      self.allpage=res.data.data.totalPage;
    }).catch(function (err) {
     console.log(err);
    })
  },
  computed:{
    scrrens(){
        var self = this;
        console.log(window.screen.availWidth);
        if (window.screen.availWidth<1600) {self.scr_x1=0;self.scr_x2=6;self.styleObj.width="10.333%";}else{self.scr_x1=3;self.scr_x2=5}
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mrt{margin-top: 2vh;text-align: center;width: 80px;height: 3vh;line-height: 2.8vh;border:1px solid #ddd;border-radius: 5px;margin-left:0vw;cursor:pointer;font-size:15px;font-family: '微软雅黑';color:#1f2d3d;}
.mrt:active{border-color:#878D99;}
.bt1,.bt2,.bt3{background-color: #409EFF;color: white;}
.mrts{margin-top: 2vh;}
.btnchose li{float: left;margin-right: 5px;}
.btnchose li button:active{background-color: #409EFF;color: white;}
.picktime{width:100%;}
.pagetab{float: right;margin-top:1vh;}
.btnshow{background-color:#409EFF;color: white;border-color:#409EFF}
</style>
