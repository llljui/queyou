<template>
  <div class="zsjwcx" v-loading="loading2" :key="scrrens">
    <el-row>
    <el-col :span="3" :offset="1" class="mrt">
      <el-input type="text" size="small" placeholder="游戏ID" v-model="uids"></el-input>
    </el-col>
    <el-col :span="scr_x1" :offset="1" class="mrt kg">
     <el-dropdown split-button size="small"  @command="handleClick">
     {{leixin}}
      <el-dropdown-menu slot="dropdown" >
        <el-dropdown-item command="开房消耗">开房消耗</el-dropdown-item>
        <el-dropdown-item command="钻石充值">钻石充值</el-dropdown-item>
        <el-dropdown-item command="后台赠送">后台赠送</el-dropdown-item>
        <el-dropdown-item command="代理转赠">代理转赠</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown> 
    </el-col>
    <el-col :span="1" class="mrt"><el-button type="primary" size="small" @click="search">搜索</el-button></el-col>
    <el-col :span="1" class="mrt"><el-button  size="small" @click="resets">清除</el-button></el-col>
    <el-col :span="scr_x2" :offset="scr_x5">
      <ul class="times">
        <li><el-button size="small" :class="{btnshow:showbtn1}" @click="btnact(1)">昨天</el-button></li>
        <li><el-button size="small" :class="{btnshow:showbtn2}" @click="btnact(2)">最近七天</el-button></li>
        <li><el-button size="small" :class="{btnshow:showbtn3}" @click="btnact(3)">近一个月</el-button></li>
        <li><el-button size="small" :class="{btnshow:showbtn4}" @click="btnact(4)">近一年</el-button></li>
      </ul>
    </el-col>
    <el-col :span="3">
      <ul class="pick">
         <el-date-picker
            @change="picktimes"
            v-model="value1"
            type="date"
            size="small"
            placeholder="选择日期"
            :picker-options="pickerOptions0">
         </el-date-picker>
      </ul>
    </el-col>
    <el-col :span="3" :style="{marginLeft:scr_x4}">
      <ul class="pick">
         <el-date-picker
         size="small"
         @change="picktimes"
            v-model="value2"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions0">
         </el-date-picker>
      </ul>
    </el-col>
    </el-row>
    <el-table
    v-show="qita"
    :data="tableData2"
    style="width: 100%"
    align="center"
    :row-class-name="tableRowClassName">
    <el-table-column
    align="center"
      prop="uid"
      label="玩家ID">
    </el-table-column>
    <el-table-column
    align="center"
      prop="nickname"
      label="玩家昵称">
    </el-table-column>
    <el-table-column
    sortable
    align="center"
    min-width="145"
      prop="dateline"
      label="时间">
    </el-table-column>
    <el-table-column
    align="center"
      prop="type"
      label="明细">
    </el-table-column>
    <el-table-column
    sortable
    align="center"
      prop="amount"
      label="数量">
    </el-table-column>
  </el-table>
  <el-table
    v-show="dlzz"
    :data="tableData2"
    style="width: 100%"
    align="center"
    :row-class-name="tableRowClassName">
    <el-table-column
    align="center"
      prop="uid"
      label="玩家ID">
    </el-table-column>
    <el-table-column
    align="center"
      prop="nickname"
      label="玩家昵称">
    </el-table-column>
    <el-table-column
    sortable
    align="center"
    min-width="145"
      prop="dateline"
      label="时间">
    </el-table-column>
    <el-table-column
    align="center"
      prop="type"
      label="明细">
    </el-table-column>
    <el-table-column
    sortable
    align="center"
      prop="amount"
      label="数量">
    </el-table-column>
    <el-table-column
    sortable
    align="center"
      prop="toUid"
      label="转入账户">
    </el-table-column>
    <el-table-column
    sortable
    align="center"
      prop="toNickname"
      label="转入玩家昵称">
    </el-table-column>
  </el-table>
  <el-pagination
      class="mrt flo"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="1"
      layout="prev, pager, next, jumper"
      :total="allpage">
     </el-pagination>
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
export default {
  name: 'zsjwcx',
  data () {
    return {
      scr_x1:2,
      scr_x2:6,
      scr_x4:'70px',
      scr_x5:2,
      qita:true,
      dlzz:false,
      wjzz:false,
      uids:null,
    pickerOptions0: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        },
        loading2:false,
        allpage:null,
        value1:null,
        value2:null,
        showbtn1:false,
        showbtn2:false,
        showbtn3:false,
        showbtn4:false,
        tableData2: [],
        currentPage3: 1,
        leixin:'代理转赠',
        chosetype:1,
        times:null,
        startTime:null,
        endTime:null
    }
  },
  methods:{
    search:function () {
     var self = this;
     self.times=0;
     self.showbtn1=false;
     self.showbtn2=false;
     self.showbtn3=false;
     self.showbtn4=false;
     console.log(self.chosetype);
     if (self.chosetype==1) {
      self.qita=false;
      self.dlzz=true;
     }else{
      self.qita=true;
      self.dlzz=false;
     }
      axios.get('http://monkey.queyoujia.com/rich/Transfer/List',{params:{uid:self.uids,type:self.chosetype,page:1,startTime:self.startTime,endTime:self.endTime}}).then(function (res) {
      self.currentPage3=1;
      self.tableData2=[];
      self.tableData2=res.data.data.list;
      self.allpage=res.data.data.totalPage;
      self.tableData2.forEach(function (item,index) {
        console.log(item);
        if (item.type=='1') {item.type='转赠';}
        else if(item.type=='2'){item.type='后台转账';}
        else if(item.type=='3'){item.type='充值';}
        else{item.type='消耗';}
      })
      console.log(res);
    }).catch(function (err) {
      console.log(err);
    });
    },
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
    handleCurrentChange(val) {
        //console.log(`当前页: ${val}`);
        var self = this;
        if (self.times==0) {
          axios.get('http://monkey.queyoujia.com/rich/Transfer/List',{params:{uid:self.uids,type:self.chosetype,page:val}}).then(function (res) {
          self.tableData2=[];
          self.tableData2=res.data.data.list;
          self.allpage=res.data.data.totalPage;
          self.tableData2.forEach(function (item,index) {
            console.log(item);
            if (item.type=='1') {item.type='转赠';}
            else if(item.type=='2'){item.type='后台转账';}
            else if(item.type=='3'){item.type='充值';}
            else{item.type='消耗';}
          })
          console.log(res);
        }).catch(function (err) {
          console.log(err);
        });
        }else{
          axios.get('http://monkey.queyoujia.com/rich/Transfer/List',{params:{uid:self.uids,type:self.chosetype,page:val,startTime:self.startTime,endTime:self.endTime}}).then(function (res) {
          self.tableData2=[];
          self.tableData2=res.data.data.list;
          self.allpage=res.data.data.totalPage;
          self.tableData2.forEach(function (item,index) {
            console.log(item);
            if (item.type=='1') {item.type='转赠';}
            else if(item.type=='2'){item.type='后台转账';}
            else if(item.type=='3'){item.type='充值';}
            else{item.type='消耗';}
          })
          console.log(res);
        }).catch(function (err) {
          console.log(err);
        });
        }      
        //
      },
     handleClick(command) {
        console.log(command);
        var self =this;
        self.leixin=command;
        if (self.leixin=='开房消耗') {self.chosetype='4'}
        else if(self.leixin=='钻石充值'){self.chosetype='3'}
        else if(self.leixin=='后台赠送'){self.chosetype='2'}
        else {self.chosetype='1'}
        
      },
      btnact:function (btn) { 
        var self = this; 
        console.log(btn);
        if (self.chosetype==1) {
          self.qita=false;
          self.dlzz=true;
         }else{
          self.qita=true;
          self.dlzz=false;
         }
        for (var i=1;i<5;i++) {
          if (btn==1) {
            self.times=1;
            var endTime=new Date();
            endTime=endTime.setHours('00', '00', '00', '0');
            var startTime=endTime-86400000;
            //console.log(endTime);
            self.startTime=startTime/1000;
            self.endTime=endTime/1000;
           // console.log(self.chosetype);
            self.showbtn1=true;
            self.showbtn2=false;
            self.showbtn3=false;
            self.showbtn4=false;
            axios.get('http://monkey.queyoujia.com/rich/Transfer/List',{params:{uid:self.uids,type:self.chosetype,page:1,startTime:self.startTime,endTime:self.endTime}}).then(function (res) {
             // console.log(res);
              self.currentPage3=1;
              self.tableData2=[];
              self.tableData2=res.data.data.list;
              self.allpage=res.data.data.totalPage;
              self.tableData2.forEach(function (item,index) {
                //console.log(item);
                if (item.type=='1') {item.type='转赠';}
                else if(item.type=='2'){item.type='后台转账';}
                else if(item.type=='3'){item.type='充值';}
                else{item.type='消耗';}});
            }).catch(function (err) {
              console.log(err);
            })
          }
          else if(btn==2){ 
            var endTime=new Date();
            endTime=endTime.setHours('00', '00', '00', '0');
            var startTime=endTime-86400000*7;
           // console.log(endTime);
            self.startTime=startTime/1000;
            self.endTime=endTime/1000;
            //console.log(self.chosetype);
            self.showbtn1=false;
            self.showbtn2=true;
            self.showbtn3=false;
            self.showbtn4=false;
            axios.get('http://monkey.queyoujia.com/rich/Transfer/List',{params:{uid:self.uids,type:self.chosetype,page:1,startTime:self.startTime,endTime:self.endTime}}).then(function (res) {
             // console.log(res);
              self.currentPage3=1;
              self.tableData2=[];
              self.tableData2=res.data.data.list;
              self.allpage=res.data.data.totalPage;
              self.tableData2.forEach(function (item,index) {
                //console.log(item);
                if (item.type=='1') {item.type='转赠';}
                else if(item.type=='2'){item.type='后台转账';}
                else if(item.type=='3'){item.type='充值';}
                else{item.type='消耗';}});
            }).catch(function (err) {
              console.log(err);
            })
          }
          else if(btn==3){ 
            self.times=1;self.showbtn3=true;self.showbtn2=false;self.showbtn1=false;self.showbtn4=false;
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
                //console.log(endTime);
                self.startTime=startTime/1000;
                self.endTime=endTime/1000;
                //console.log(self.chosetype);
                self.showbtn1=false;
                self.showbtn2=false;
                self.showbtn3=true;
                self.showbtn4=false;
                axios.get('http://monkey.queyoujia.com/rich/Transfer/List',{params:{uid:self.uids,type:self.chosetype,page:1,startTime:self.startTime,endTime:self.endTime}}).then(function (res) {
                  //console.log(res);
                  self.currentPage3=1;
                  self.tableData2=[];
                  self.tableData2=res.data.data.list;
                  self.allpage=res.data.data.totalPage;
                  self.tableData2.forEach(function (item,index) {
                   // console.log(item);
                    if (item.type=='1') {item.type='转赠';}
                    else if(item.type=='2'){item.type='后台转账';}
                    else if(item.type=='3'){item.type='充值';}
                    else{item.type='消耗';}});
                }).catch(function (err) {
                  console.log(err);
                })

          }
          else if(btn==4){ 
            self.times=1;
            self.showbtn4=true;
            self.showbtn2=false;
            self.showbtn3=false;
            self.showbtn1=false;
             var endTime=new Date();
            endTime=endTime.setHours('00', '00', '00', '0');
            var startTime=endTime-86400000*365;
            //console.log(endTime);
            self.startTime=startTime/1000;
            self.endTime=endTime/1000;
            //console.log(self.chosetype);
            axios.get('http://monkey.queyoujia.com/rich/Transfer/List',{params:{uid:self.uids,type:self.chosetype,page:1,startTime:self.startTime,endTime:self.endTime}}).then(function (res) {
             // console.log(res);
              self.currentPage3=1;
              self.tableData2=[];
              self.tableData2=res.data.data.list;
              self.allpage=res.data.data.totalPage;
              self.tableData2.forEach(function (item,index) {
                console.log(item);
                if (item.type=='1') {item.type='转赠';}
                else if(item.type=='2'){item.type='后台转账';}
                else if(item.type=='3'){item.type='充值';}
                else{item.type='消耗';}});
            }).catch(function (err) {
              console.log(err);
            })
          }
          else{return;}
        }        
      },
       tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      picktimes:function () {
        var self=this;
        if (self.value1&&self.value2) {
          if ((self.value2-self.value1)<0) {
            self.$message({
              message: '请检查日期，确保输入正确',
              type: 'warning'
            });
          }else{
            self.times=1;
            var endTime=self.value2;
            endTime=endTime.setHours('00', '00', '00', '0');
            var startTime=self.value1;
            startTime=startTime.setHours('00', '00', '00', '0');
            //console.log(endTime);
            self.startTime=startTime/1000;
            self.endTime=endTime/1000;
            console.log(self.startTime+','+self.endTime);
           // console.log(self.chosetype);
            self.showbtn1=false;
            self.showbtn2=false;
            self.showbtn3=false;
            self.showbtn4=false;
            axios.get('http://monkey.queyoujia.com/rich/Transfer/List',{params:{uid:self.uids,type:self.chosetype,page:1,startTime:self.startTime,endTime:self.endTime}}).then(function (res) {
             // console.log(res);
              self.currentPage3=1;
              self.tableData2=[];
              self.tableData2=res.data.data.list;
              self.allpage=res.data.data.totalPage;
              self.tableData2.forEach(function (item,index) {
                //console.log(item);
                if (item.type=='1') {item.type='转赠';}
                else if(item.type=='2'){item.type='后台转账';}
                else if(item.type=='3'){item.type='充值';}
                else{item.type='消耗';}});
            }).catch(function (err) {
              console.log(err);
            })}

        }else{
          return;
          self.$message({
          message: '请检查日期，确保输入正确',
          type: 'warning'
        });
        }      
      },
      resets:function () {
        var self = this;
         self.uids=null;
         self.value1=null;
         self.value2=null;
         self.startTime=null;
         self.endTime=null;
         self.showbtn1=false;
         self.showbtn2=false;
         self.showbtn3=false;
         self.showbtn4=false;

      }
  },
  mounted(){
    var self = this;
    axios.get('http://monkey.queyoujia.com/rich/Transfer/List',{params:{type:self.chosetype}}).then(function (res) {
      self.tableData2=res.data.data.list;
      self.allpage=res.data.data.totalPage;
      self.tableData2.forEach(function (item,index) {
        console.log(item);
        if (item.type=='1') {item.type='转赠';}
        else if(item.type=='2'){item.type='后台转账';}
        else if(item.type=='3'){item.type='充值';}
        else{item.type='消耗';}
      })
      console.log(res);
    }).catch(function (err) {
      console.log(err);
    });
//1:转赠 2：后台划账 3：充值 4：消耗startTime endTime page
  },
  computed:{
    scrrens(){
      var self = this;
      console.log(window.screen.availWidth);
      if (window.screen.availWidth<1600) {self.scr_x1=3;self.scr_x2=6;self.scr_x4="70px";self.scr_x5=1;}else{self.scr_x1=2;self.scr_x2=5;self.scr_x4="20px";self.scr_x5=5;}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.mrt{margin:2vh 0;}
 .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .kg{margin-left:1vw;}
  .times li{float: left;display: inline-block;margin-left:0.5vw; }
  ul{padding: 0;}
  .btnshow{background-color: #409EFF;color: white;}
   .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .flo{float: right;}
</style>
