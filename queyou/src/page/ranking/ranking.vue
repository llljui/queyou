<template>
  <div class="ranking" 
  :key="scrrens"
   v-loading="loading2" 
   element-loading-text="拼命加载中"
    ><!-- v-loading="loading2" element-loading-text="拼命加载中" -->
    <el-col :span="scr_x1" class="mrt btn">
      <el-button size="small" :class="{btnchose:btns1}" @click="cwho(1)">总钻石排行榜</el-button>
      <el-button size="small" :class="{btnchose:btns2}" @click="cwho(2)">代理钻石排行榜</el-button>
      <el-button size="small" :class="{btnchose:btns3}" @click="cwho(3)">玩家钻石排行榜</el-button>
    </el-col>
    <el-col :span="3" class="mrt idput">
     <el-input placeholder="游戏ID" v-model="uids" size="small"></el-input>
    </el-col>
    <el-col :span="2">
      <el-button size="small" class="mrt" type="primary" @click="search">搜索</el-button>
      <el-button size="small" class="mrt" @click="clear" type="danger">清除</el-button>
    </el-col>
     <el-col :span="scr_x2" :style="mr" :offset="scr_x3">
      <ul class="times">
        <li><el-button size="small" :class="{btnshow:showbtn1}" @click="btnact(1)">昨天</el-button></li>
        <li><el-button size="small" :class="{btnshow:showbtn2}" @click="btnact(2)">最近七天</el-button></li>
        <li><el-button size="small" :class="{btnshow:showbtn3}" @click="btnact(3)">近一个月</el-button></li>
        <li><el-button size="small" :class="{btnshow:showbtn4}" @click="btnact(4)">近一年</el-button></li>
      </ul>
    </el-col>
    <el-col :span="2" v-bind:style="{marginLeft:scr_x6,marginRight:scr_x7}">
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
   <!--  <el-col :span="1" class="mrt mrt1">至</el-col> -->
    <el-col :span="2" >
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
    <el-table
    :data="tableData2"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      align="center"
      prop="pm"
      label="排名">
    </el-table-column>
    <el-table-column
      align="center"
      prop="uid"
      label="游戏ID">
    </el-table-column>
    <el-table-column
      prop="cnt"
      align="center"
      label="钻石数量">
    </el-table-column>
    <el-table-column
      prop="dateline"
      align="center"
      label="消耗时间">
    </el-table-column>
    <el-table-column
      prop="registerTime"
      align="center"
      label="注册时间">
    </el-table-column>
    <el-table-column
      prop="lastLoginTime"
      align="center"
      label="最后登录时间">
    </el-table-column>
  </el-table>
   <el-pagination
      class="tabp"
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
  name: 'ranking',
  data () {
    return {
    mr:{},
    scr_x1:6,
    scr_x2:3,
    scr_x3:1,
    scr_x6:'0px',
    scr_x7:'0px',
    loading2: false,
    btns1:true,
    btns2:false,
    btns3:false,
    allpage:1,
    currentPage3: 1,
    uids:null,
    showbtn1:null,
    showbtn2:null,
    showbtn3:null,
    showbtn4:null,
    value1:null,
    value2:null,
    startTime:null,
    endTime:null,
    ifchosetime:null,
    pickerOptions0: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        },
    tableData2: []
      }
  },
  methods:{
    clear:function () {
      var self = this;
      self.uids=null;
      self.showbtn1=false;
      self.showbtn2=false;
      self.showbtn3=false;
      self.showbtn4=false;
      self.btns1=false;
      self.btns2=false;
      self.btns3=false;
      self.tableData2=[];
      self.allpage=1;
      axios.get('http://monkey.queyoujia.com/Ranking/allDiamondRank',{params:{}}).then(function (res) {
      console.log(res);
      self.allpage=res.data.data.total;
      self.tableData2=res.data.data.list;
      self.tableData2.forEach(function (item,index) {
        item.pm=index+1;
      })
    }).catch(function (err) {
      console.log(err);
    })


    },
    search:function () {
      var self=this;
      self.tableData2=[];
      var params={uid:self.uids}
      axios.post('http://monkey.queyoujia.com/Ranking/allDiamondRank',qs.stringify(params),{headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                  }}).then(function (res) {
          console.log(res);
          self.allpage=res.data.data.total;
          self.tableData2=res.data.data.list;
          self.tableData2.forEach(function (item,index) {
            item.pm=index+1;
          })
        }).catch(function (err) {
          console.log(err);
        });
    },
    btnact:function (val) {
    var self=this;
        if (val==1) {
          self.showbtn1=true;
          self.showbtn2=false;
          self.showbtn3=false;
          self.showbtn4=false;
          self.loading2=true;
          self.ifchosetime=1;
          var url;
          var endTime=new Date();
          endTime=endTime.setHours('00', '00', '00', '0');
          var startTime=endTime-86400000;
          //console.log(endTime);
          self.startTime=startTime/1000;
          self.endTime=endTime/1000;
          if (self.btns1==true) {url='http://monkey.queyoujia.com/Ranking/allDiamondRank'}
          else if(self.btns2==true){url='http://monkey.queyoujia.com/Ranking/agentDiamondRank'}
          else if(self.btns3==true){url='http://monkey.queyoujia.com/Ranking/userDiamondRank'}
          else{return;}
          axios.get(url,{params:{startTime:self.startTime,endTime:self.endTime,page:1}}).then(function (res) {
          console.log(res);
          self.currentPage3=1;
          self.tableData2=[];
          self.allpage=res.data.data.total;
          self.tableData2=res.data.data.list;
          self.tableData2.forEach(function (item,index) {
            item.pm=20*val-20+index+1;
          })
          self.loading2=false;
        }).catch(function (err) {
          console.log(err);
        })

        }
        else if(val==2){
          self.showbtn1=false;
          self.showbtn2=true;
          self.showbtn3=false;
          self.showbtn4=false;
          self.loading2=true;
          self.ifchosetime=1;
          var url;
          var endTime=new Date();
          endTime=endTime.setHours('00', '00', '00', '0');
          var startTime=endTime-86400000*7;
          //console.log(endTime);
          self.startTime=startTime/1000;
          self.endTime=endTime/1000;
          if (self.btns1==true) {url='http://monkey.queyoujia.com/Ranking/allDiamondRank'}
          else if(self.btns2==true){url='http://monkey.queyoujia.com/Ranking/agentDiamondRank'}
          else if(self.btns3==true){url='http://monkey.queyoujia.com/Ranking/userDiamondRank'}
          else{return;}
          axios.get(url,{params:{startTime:self.startTime,endTime:self.endTime,page:1}}).then(function (res) {
          console.log(res);
          self.currentPage3=1;
          self.tableData2=[];
          self.allpage=res.data.data.total;
          self.tableData2=res.data.data.list;
          self.tableData2.forEach(function (item,index) {
            item.pm=20*val-20+index+1;
          })
          self.loading2=false;
        }).catch(function (err) {
          console.log(err);
        })
        }
        else if(val==3){
          self.showbtn1=false;
          self.showbtn2=false;
          self.showbtn3=true;
          self.showbtn4=false;
          self.ifchosetime=1;
          self.loading2=true;
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
          if (self.btns1==true) {url='http://monkey.queyoujia.com/Ranking/allDiamondRank'}
          else if(self.btns2==true){url='http://monkey.queyoujia.com/Ranking/agentDiamondRank'}
          else if(self.btns3==true){url='http://monkey.queyoujia.com/Ranking/userDiamondRank'}
          else{return;}
          axios.get(url,{params:{startTime:self.startTime,endTime:self.endTime,page:1}}).then(function (res) {
          console.log(res);
          self.currentPage3=1;
          self.tableData2=[];
          self.allpage=res.data.data.total;
          self.tableData2=res.data.data.list;
          self.tableData2.forEach(function (item,index) {
            item.pm=20*val-20+index+1;
          })
          self.loading2=false;
        }).catch(function (err) {
          console.log(err);
        })
        }else if(val==4){
          self.showbtn1=false;
          self.showbtn2=false;
          self.showbtn3=false;
          self.showbtn4=true;
          self.ifchosetime=1;
          self.ifchosetime=1;
          var url;
          self.loading2=true;
          var endTime=new Date();
          //endTime=endTime.setHours('00', '00', '00', '0');
          var startTime=endTime-86400000*365;
          //console.log(endTime);
          self.startTime=startTime/1000;
          self.endTime=endTime/1000;
          if (self.btns1==true) {url='http://monkey.queyoujia.com/Ranking/allDiamondRank'}
          else if(self.btns2==true){url='http://monkey.queyoujia.com/Ranking/agentDiamondRank'}
          else if(self.btns3==true){url='http://monkey.queyoujia.com/Ranking/userDiamondRank'}
          else{return;}
          axios.get(url,{params:{startTime:self.startTime,endTime:self.endTime,page:1}}).then(function (res) {
          console.log(res);
          self.currentPage3=1;
          self.tableData2=[];
          self.allpage=res.data.data.total;
          self.tableData2=res.data.data.list;
          self.tableData2.forEach(function (item,index) {
            item.pm=20*val-20+index+1;
          })
          self.loading2=false;
        }).catch(function (err) {
          console.log(err);
        })
        }else{
          self.showbtn1=false;
          self.showbtn2=false;
          self.showbtn3=false;
          self.showbtn4=false;
          self.ifchosetime=1;
        }
    },
    picktimes:function () {
     console.log(323);
     var self=this;
     if (self.value1&&self.value2) {
        if ((self.value2-self.value1)>0) {
           var url;
          var endTime=self.value2;
          //endTime=endTime.setHours('00', '00', '00', '0');
          var startTime=self.value1;
          //console.log(endTime);
          self.startTime=Date.parse(startTime)/1000;
          self.endTime=Date.parse(endTime)/1000;
          if (self.btns1==true) {url='http://monkey.queyoujia.com/Ranking/allDiamondRank'}
          else if(self.btns2==true){url='http://monkey.queyoujia.com/Ranking/agentDiamondRank'}
          else if(self.btns3==true){url='http://monkey.queyoujia.com/Ranking/userDiamondRank'}
          else{return;}
          axios.get(url,{params:{startTime:self.startTime,endTime:self.endTime,page:1}}).then(function (res) {
          console.log(res);
          self.currentPage3=1;
          self.tableData2=[];
          self.allpage=res.data.data.total;
          self.tableData2=res.data.data.list;
          self.tableData2.forEach(function (item,index) {
            item.pm=index+1;
          })
          self.loading2=false;
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
    tableRowClassName({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        var self = this;
        if (self.ifchosetime==0) {
          self.loading2=true;
          var url;
          if (self.btns1==true) {url='http://monkey.queyoujia.com/Ranking/allDiamondRank'}
          else if(self.btns2==true){url='http://monkey.queyoujia.com/Ranking/agentDiamondRank'}
          else if(self.btns3==true){url='http://monkey.queyoujia.com/Ranking/userDiamondRank'}
          else{return;}
          axios.get(url,{params:{page:val}}).then(function (res) {
            console.log(res);
            self.tableData2=[];
            self.allpage=res.data.data.total;
            self.tableData2=res.data.data.list;
            self.tableData2.forEach(function (item,index) {
              item.pm=20*val-20+index+1;
            })
            self.loading2=false;
          }).catch(function (err) {
            console.log(err);
          })
        }else{
          self.loading2=true;
          var url;
          if (self.btns1==true) {url='http://monkey.queyoujia.com/Ranking/allDiamondRank'}
          else if(self.btns2==true){url='http://monkey.queyoujia.com/Ranking/agentDiamondRank'}
          else if(self.btns3==true){url='http://monkey.queyoujia.com/Ranking/userDiamondRank'}
          else{console.log('其他');url='http://monkey.queyoujia.com/Ranking/allDiamondRank'}
          axios.get(url,{params:{page:val,startTime:self.startTime,endTime:self.endTime}}).then(function (res) {
            console.log(res);
            self.tableData2=[];
            self.allpage=res.data.data.total;
            self.tableData2=res.data.data.list;
            self.tableData2.forEach(function (item,index) {
              item.pm=20*val-20+index+1;
            })
            self.loading2=false;
          }).catch(function (err) {
            console.log(err);
          })
          }
        
      },
      cwho:function (btn) {
        var self=this;
        if (btn==1) {
          self.loading2=true;
          self.btns1=true;
          self.btns2=false;
          self.btns3=false;
          self.ifchosetime=0;
          self.tableData2=[];
          axios.get('http://monkey.queyoujia.com/Ranking/allDiamondRank',{params:{page:1}}).then(function (res) {
          console.log(res);
          self.currentPage3=1;
          self.allpage=res.data.data.total;
          self.tableData2=res.data.data.list;
          self.tableData2.forEach(function (item,index) {
            item.pm=index+1;
          })
          self.loading2=false;
        }).catch(function (err) {
          console.log(err);
        });
        }
        else if(btn==2){
          self.loading2=true;
          self.btns1=false;
          self.btns2=true;
          self.btns3=false;
          self.ifchosetime=0;
          self.tableData2=[];
          axios.get('http://monkey.queyoujia.com/Ranking/agentDiamondRank',{params:{page:1}}).then(function (res) {
          self.currentPage3=1;
          console.log(res);
          self.allpage=res.data.data.total;
          self.tableData2=res.data.data.list;
          self.tableData2.forEach(function (item,index) {
            item.pm=index+1;
          })
          self.loading2=false;
        }).catch(function (err) {
          console.log(err);
        });
        }
        else if(btn==3){
          self.loading2=true;
          self.btns1=false;
          self.btns2=false;
          self.btns3=true;
          self.ifchosetime=0;
          self.tableData2=[];
          axios.get('http://monkey.queyoujia.com/Ranking/userDiamondRank',{params:{page:1}}).then(function (res) {
            self.currentPage3=1;
          console.log(res);
          self.allpage=res.data.data.total;
          self.tableData2=res.data.data.list;
          self.tableData2.forEach(function (item,index) {
            item.pm=index+1;
          })
          self.loading2=false;
        }).catch(function (err) {
          console.log(err);
        });
        }else{
          self.btns1=false;
          self.btns2=false;
          self.btns3=false;
          self.ifchosetime=0;
        }
      }
  },
  mounted(){
    var self = this;
    axios.get('http://monkey.queyoujia.com/Ranking/allDiamondRank',{params:{}}).then(function (res) {
      console.log(res);
      self.allpage=res.data.data.total;
      self.tableData2=res.data.data.list;
      self.tableData2.forEach(function (item,index) {
        item.pm=index+1;
      })
    }).catch(function (err) {
      console.log(err);
    })
  },
  computed:{
   scrrens(){
        var self = this;
        console.log(window.screen.availWidth);
        if (window.screen.availWidth<=1600) {
          if (window.screen.availWidth<=1367) {
            console.log('daozheli ');
            self.mr.marginLeft='-45px';
            self.mr.marginRight=' 10px';
             self.scr_x1=7;self.scr_x2=7;self.scr_x3=0;self.scr_x6="-25px";self.scr_x7="25px";
          }else{
            console.log('daozheli ');
             self.scr_x1=7;self.scr_x2=7;self.scr_x3=0;self.scr_x6="-25px";self.scr_x7="25px";
          }
         
        }else{self.scr_x1=6;self.scr_x3=3;self.scr_x2=5;self.scr_x6="25px";self.scr_x7="10px"}
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mrt{margin:16px 0;text-align: center;}
.mrt1{width: 20px;margin-right: 20px;margin-top: 22px;}
.btn{min-width: 330px;max-width: 330px;}
.idput{margin-right: 1vw;margin-left: 1vw;}
.times li{float: left;display: inline-block;margin-left:0.5vw; }
.btnshow{background-color: #409EFF;color: white;}
.pick{padding:0 0vw;}
.el-date-editor.el-input[data-v-98aef68a]{width: 120px;}
.el-col-5[data-v-98aef68a]{min-width:300px;}
.el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .tabp{float: right;margin-top: 16px;}
  .btnchose{background-color:#409EFF;color: white;border-color:#409EFF}
  .el-col-2[data-v-98aef68a]{min-width: 97.5px;}
</style>
