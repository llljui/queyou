<template>
  <div class="returDetails">
  <el-form :inline="true" :model="formInline" class="form-inline">
<!--     <el-form-item label="显示方式">
  <el-radio-group v-model="formInline.type">
    <el-radio label="以天为单位" v-on:click="rechargeAll"></el-radio>
    <el-radio label="以月为单位"></el-radio>
    <el-radio label="以年为单位"></el-radio>
  </el-radio-group>
</el-form-item> -->
  <el-row class="searchAll">
    <el-col :span='24' class="formSearch">
      <el-form :inline="true" :model="searchform">
        <el-form-item label="">
          <el-input v-model="searchform.user" placeholder="充值用户ID"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="searchform.region" placeholder="订单号"></el-input>
        </el-form-item>
      <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-input type="reset" class="searchRest" value='重置'></el-input>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
    <el-form-item label="" class="chosedata">
    <el-row>
      <el-col :span="11">
        <el-date-picker type="date" placeholder="时间段" @change='datapicker1' v-model="formInline.date1" style="width: 100%;"></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">&nbsp&nbsp至</el-col>
      <el-col :span="11">
        <el-date-picker type="date" placeholder="时间段" @change='datapicker2' v-model="formInline.date2" style="width: 100%;"></el-date-picker>
      </el-col>
    </el-row>
    <el-row style="float:right">
      <el-col :span="24" class="chosebtn">
         <el-button v-on:click="yesterDay(lvs)" v-bind:data-lv="lvs">昨天</el-button>
         <el-button v-on:click="nerarSeDay(lvs)" v-bind:data-lv="lvs">最近七天</el-button>
         <el-button v-on:click="nearMonth(lvs)" v-bind:data-lv="lvs">最近1个月</el-button>
         <el-button v-on:click="nearYear(lvs)"  v-bind:data-lv="lvs">最近一年</el-button>
      </el-col>
    </el-row>
    </el-form-item>
  </el-form>
   <el-table
    :data="tableData"
    style="width: 100%;">
    <el-table-column
      prop="id"
      label="ID"
      v-bind:width='wid'
      align="center">
    </el-table-column>
    <el-table-column
      prop="uid"
      v-bind:width="wuid"
      label="游戏ID"
      align="center">
    </el-table-column>
    <el-table-column
      prop="nickname"
      label="游戏昵称"
      show-overflow-tooltip
      align="center">
    </el-table-column>
    <el-table-column
      prop="orderId"
      show-overflow-tooltip
      label="订单号"
      align="center">
    </el-table-column>
    <el-table-column
      prop="reward"
      label="返利金额"
      v-bind:width="wreward"
      align="center">
    </el-table-column>
    <el-table-column
      prop="amount"
      v-bind:width="wamount"
      label="订单总额"
      align="center">
    </el-table-column>
     <el-table-column
      prop="rechargeUid"
      width="wrechargeUid"
      label="充值用户ID"
      align="center">
    </el-table-column>
    <el-table-column
      prop="Rnickname"
      v-bind:width="wRnickname"
      label="用户昵称"
       show-overflow-tooltip
      align="center">
    </el-table-column>
    <el-table-column
      prop="dateline"

      label="付款时间"
      show-overflow-tooltip
      align="center">
    </el-table-column>
  </el-table>
  <div class="pagetag" :key="key">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="1"
      layout="prev, pager, next, jumper"
      :total="pageSize">
    </el-pagination>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'returDetails',
  data () {
    return {
        pick1:false,
        pick2:false,
        lvs:0,
        wid:'70',
        wuid:'95',
        wnickname:'110',
        worderId:'250',
        wreward:'95',
        wamount:'95',
        wrechargeUid:'150',
        wRnickname:'110',
        wdateline:'120',
        formInline: {
          user: '',
          region: '',
          type:'',
          date1:'',
          date2:'',
          neartime:''
        },
        searchform:{
          user:'',
          region:''
        },
        tableData:[],//每次后台获取20条数据
        tableDataAll:[],
        currentPage1:1,
        pageSize:0,
        tableDataDay:[],
        tableDataSe:[],
        tableDataMonth:[],
        tableDataYear:[],
        tableWho:[]
    }
  },
    methods: {
      onSubmit() {
       var self=this;
       self.pick1=false;
       self.pick2=false;
        self.tableData=[]
        var tableTemp=[];
        var params={
           rechargeUid:this.searchform.user,
           orderId:this.searchform.region
        }
        axios.post('http://monkey.queyoujia.com/rebate/rebate',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
            /*self.tableData=res;*/
            console.log(res.data.data)
            self.pageSize=res.data.data.total
            tableTemp=[res.data.data.list];
            tableTemp=tableTemp[0];
             for(let x in tableTemp){
              self.tableData.push( tableTemp[x])
             }
        }).catch(function (err) {
          console.log(err);
        })
      },
        handleEdit(index, row) {
        console.log(index, row);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
         var self=this;
         console.log(this.lvs)
         if (self.pick1==true&&self.pick2==true) {
          console.log('pick')
         var tableTemp2=[]
         self.tableData=[]
         var tableTemp=[];
         function timeChangetype(stringTime1,stringTime2){
             var time={timestamp1:0,timestamp2:0}
             time.timestamp1 = Number(Date.parse(stringTime1)/1000);
             time.timestamp2 = Number(Date.parse(stringTime2)/1000)+86399;
             return time;
            }
        var picktime=timeChangetype(self.formInline.date1,self.formInline.date2);
        var params={
                  startTime:picktime.timestamp1,
                  endTime:picktime.timestamp2,
                  page:val
                }
                axios.post('http://monkey.queyoujia.com/rebate/rebate',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
                  tableTemp=[res.data.data];
                  tableTemp=tableTemp[0].list;
                  tableTemp2=[res.data.data];
                 // console.log(tableTemp2)
                  self.pageSize=tableTemp2[0].total;
                   for(let x in tableTemp){
                    self.tableData.push( tableTemp[x])
                   /* console.log(tableTemp[x])*/
                   }
                 // console.log(self.tableData)
                }).catch(function (err) {
                  console.log(err)
            });
                return;
         }
         if (self.lvs>0) {
          console.log(this.lvs);
            if (this.lvs==4) {
              var tableTemp2=[]
              self.tableData=[]
              //console.log(self.tableData)
              var tableTemp=[];
              var endTime=new Date();
              endTime=(Number(endTime.setHours('00', '00', '00', '0'))/1000)-1;
              var startTime=endTime-86400*365+1;
              var params={
                startTime:startTime,
                endTime:endTime,
                page:val
              }
              //console.log(endTime);
              axios.post('http://monkey.queyoujia.com/rebate/rebate',qs.stringify(params),{headers: {
                                  'Content-Type': 'application/x-www-form-urlencoded'
                            }}).then(function (res) {
              tableTemp=[res.data.data];
              tableTemp=tableTemp[0].list;
              tableTemp2=[res.data.data];
              //console.log(tableTemp2)
              self.pageSize=tableTemp2[0].total;
               for(let x in tableTemp){
                self.tableData.push( tableTemp[x])
               /* console.log(tableTemp[x])*/
               }
               // console.log(self.tableData)

              }).catch(function (err) {
                console.log(err);
              })
           return;
            }
             if (self.lvs==3) {
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
                var tableTemp2=[]
                self.tableData=[]
                var tableTemp=[];
                var endTime=new Date();
                endTime=(Number(endTime.setHours('00', '00', '00', '0'))/1000)-1;
                var startTime=endTime-(86400*getCountDays())+1;
                console.log(startTime)
                var params={
                  startTime:startTime,
                  endTime:endTime,
                  page:val
                }
                //console.log(endTime-startTime);
                //console.log(endTime);
                axios.post('http://monkey.queyoujia.com/rebate/rebate',qs.stringify(params),{headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded'
                              }}).then(function (res) {
                tableTemp=[res.data.data];
                tableTemp=tableTemp[0].list;
                tableTemp2=[res.data.data];
                self.pageSize=tableTemp2[0].total;
                 for(let x in tableTemp){
                  self.tableData.push( tableTemp[x])
                 }
                }).catch(function (err) {
                  console.log(err);
                });
                return;
            }
              if (self.lvs==2) {
                var tableTemp2=[]
                self.tableData=[]
                var tableTemp2=[]
                self.tableData=[]
                var tableTemp=[];
                var endTime=new Date();
                endTime=(Number(endTime.setHours('00', '00', '00', '0'))/1000)-1;
                var startTime=endTime-864000*7+1;
                var params={
                  startTime:startTime,
                  endTime:endTime,
                  page:val
                }
                //console.log(endTime);
                axios.post('http://monkey.queyoujia.com/rebate/rebate',qs.stringify(params),{headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded'
                              }}).then(function (res) {
                tableTemp=[res.data.data];
                tableTemp=tableTemp[0].list;
                tableTemp2=[res.data.data];
                self.pageSize=tableTemp2[0].total;
                ///console.log(tableTemp)
                 for(let x in tableTemp){
                  self.tableData.push( tableTemp[x])
                //  console.log(tableTemp[x])
                 }
                //  console.log(self.tableData)

                }).catch(function (err) {
                  console.log(err);
                })
                return;
              }
              else{
                  console.log('lv1')
                  var tableTemp2=[]
                  self.tableData=[]
                  var tableTemp=[];
                  var endTime=new Date();
                  endTime=(Number(endTime.setHours('00', '00', '00', '0'))/1000)-1;
                  var startTime=endTime-86400+1;
                  console.log(endTime);
                  var params={
                    startTime:startTime,
                    endTime:endTime,
                    page:val
                  }
                  axios.post('http://monkey.queyoujia.com/rebate/rebate',qs.stringify(params),{headers: {
                                      'Content-Type': 'application/x-www-form-urlencoded'
                                }}).then(function (res) {
                  tableTemp=[res.data.data];
                  tableTemp=tableTemp[0].list;
                  tableTemp2=[res.data.data];
                  self.pageSize=tableTemp2[0].total;
                  //console.log(tableTemp)
                   for(let x in tableTemp){
                    self.tableData.push( tableTemp[x])
                   // console.log(tableTemp[x])
                   }
                    //console.log(self.tableData)

                  }).catch(function (err) {
                    console.log(err);
                  })
              }

         }
         else{
            self.tableData=[]
            var tableTemp=[];
            val=val.toString();
            var params={
              page:val
            }
            //console.log(typeof(val));
            axios.post('http://monkey.queyoujia.com/rebate/rebate',qs.stringify(params),{headers: {
                                'Content-Type': 'application/x-www-form-urlencoded'
                          }}).then(function (res) {
            tableTemp=[res.data.data];
            tableTemp=tableTemp[0].list;
         console.log(res)
         for(let x in tableTemp){
          self.tableData.push( tableTemp[x])
         // console.log(tableTemp[x])
         }
         // console.log(self.tableData)

        }).catch(function (err) {
          console.log(err);
        })
         }
      },
     yesterDay:function () {
        var self=this;
        self.pick1=false;
        self.pick2=false;
        self.lvs=1;
        self.currentPage1=1
        var tableTemp2=[]
        self.tableData=[]
        var tableTemp=[];
        var endTime=new Date();
        endTime=(Number(endTime.setHours('00', '00', '00', '0'))/1000)-1;
        var startTime=endTime-86400+1;
        console.log(endTime);
        var params={
          startTime:startTime,
          endTime:endTime
        }
        axios.post('http://monkey.queyoujia.com/rebate/rebate',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
        tableTemp=[res.data.data];
        tableTemp=tableTemp[0].list;
        tableTemp2=[res.data.data];
        self.pageSize=tableTemp2[0].total;
        //console.log(tableTemp)
         for(let x in tableTemp){
          self.tableData.push( tableTemp[x])
         // console.log(tableTemp[x])
         }
          //console.log(self.tableData)

        }).catch(function (err) {
          console.log(err);
        })
      },
       nerarSeDay:function () {
         var self=this;
         self.pick1=false;
         self.pick2=false;
         self.currentPage1=1
         self.lvs=2;
        var tableTemp2=[]
        self.tableData=[]
        var tableTemp=[];
        var endTime=new Date();
        endTime=(Number(endTime.setHours('00', '00', '00', '0'))/1000)-1;
        var startTime=endTime-86400*7+1;
        var params={
          startTime:startTime,
          endTime:endTime
        }
        //console.log(endTime);
        axios.post('http://monkey.queyoujia.com/rebate/rebate',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
        tableTemp=[res.data.data];
        tableTemp=tableTemp[0].list;
        tableTemp2=[res.data.data];
        self.pageSize=tableTemp2[0].total;
        ///console.log(tableTemp)
         for(let x in tableTemp){
          self.tableData.push( tableTemp[x])
        //  console.log(tableTemp[x])
         }
        //  console.log(self.tableData)

        }).catch(function (err) {
          console.log(err);
        })
      },
     nearMonth:function () {
         var self=this;
         self.pick1=false;
         self.pick2=false;
         self.currentPage1=1
         self.lvs=3;
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
        var tableTemp2=[]
        self.tableData=[]
        var tableTemp=[];
        var endTime=new Date();
        endTime=(Number(endTime.setHours('00', '00', '00', '0'))/1000)-1;
        var startTime=endTime-86400*getCountDays()+1;
        var params={
          startTime:startTime,
          endTime:endTime
        }
        //console.log(endTime-startTime);
        //console.log(endTime);
        axios.post('http://monkey.queyoujia.com/rebate/rebate',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
        tableTemp=[res.data.data];
        tableTemp=tableTemp[0].list;
        tableTemp2=[res.data.data];
        self.pageSize=tableTemp2[0].total;
         for(let x in tableTemp){
          self.tableData.push( tableTemp[x])
         }
        }).catch(function (err) {
          console.log(err);
        })
      },
      nearYear:function () {
        var self=this;
        self.pick1=false;
        self.pick2=false;
        self.currentPage1=1
        self.lvs=4;
        var tableTemp2=[]
        self.tableData=[]
        //console.log(self.tableData)
        var tableTemp=[];
        var endTime=new Date();
        endTime=(Number(endTime.setHours('00', '00', '00', '0'))/1000)-1;
        var startTime=endTime-86400*365+1;
        var params={
          startTime:startTime,
          endTime:endTime
        }
        //console.log(endTime);
        axios.post('http://monkey.queyoujia.com/rebate/rebate',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
        tableTemp=[res.data.data];
        tableTemp=tableTemp[0].list;
        tableTemp2=[res.data.data];
        //console.log(tableTemp2)
        self.pageSize=tableTemp2[0].total;
         for(let x in tableTemp){
          self.tableData.push( tableTemp[x])
         /* console.log(tableTemp[x])*/
         }
         // console.log(self.tableData)

        }).catch(function (err) {
          console.log(err);
        })
      },
      datapicker1:function () {
         var self=this;
         self.pick1=true;
         self.lvs=0;
         var tableTemp2=[]
         self.tableData=[]
         var tableTemp=[];
         function timeChangetype(stringTime1,stringTime2){
             var time={timestamp1:0,timestamp2:0}
             time.timestamp1 = Number(Date.parse(stringTime1)/1000);
             time.timestamp2 = Number(Date.parse(stringTime2)/1000)+86399;
             return time;
            }
        var picktime=timeChangetype(self.formInline.date1,self.formInline.date2);
        if (picktime.timestamp1&&picktime.timestamp2) {
          if (picktime.timestamp2-picktime.timestamp1>0) {
                var params={
                  startTime:picktime.timestamp1,
                  endTime:picktime.timestamp2
                }
                axios.post('http://monkey.queyoujia.com/rebate/rebate',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
                  tableTemp=[res.data.data];
                  tableTemp=tableTemp[0].list;
                  tableTemp2=[res.data.data];
                 // console.log(tableTemp2)
                  self.pageSize=tableTemp2[0].total;
                   for(let x in tableTemp){
                    self.tableData.push( tableTemp[x])
                   /* console.log(tableTemp[x])*/
                   }
                 // console.log(self.tableData)
                }).catch(function (err) {
                  console.log(err)
            })
          }
            else{
               this.$notify({
                title: '警告',
                message: '请选择真确的时间',
                type: 'warning'
            });
            }

          }
        else{
           return;
        }
      },
      datapicker2:function () {
        var self=this;
        self.lvs=0;
        self.pick2=true;
        var tableTemp2=[]
        self.tableData=[]
        var tableTemp=[];
         function timeChangetype(stringTime1,stringTime2){
             var time={timestamp1:0,timestamp2:0}
             time.timestamp1 = Number(Date.parse(stringTime1)/1000);
             time.timestamp2 = Number(Date.parse(stringTime2)/1000)+86399;
             return time;
            }
        var picktime=timeChangetype(self.formInline.date1,self.formInline.date2);
        if (picktime.timestamp1&&picktime.timestamp2) {
            if (picktime.timestamp2-picktime.timestamp1>0) {
              var params={
                  startTime:picktime.timestamp1,
                  endTime:picktime.timestamp2
                }
                axios.post('http://monkey.queyoujia.com/rebate/rebate',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
                  tableTemp=[res.data.data];
                  tableTemp=tableTemp[0].list;
                  tableTemp2=[res.data.data];
                  //console.log(tableTemp2)
                  self.pageSize=tableTemp2[0].total;
                   for(let x in tableTemp){
                    self.tableData.push( tableTemp[x])
                   /* console.log(tableTemp[x])*/
                   }
                 // console.log(self.tableData)
                }).catch(function (err) {
                  console.log(err)
            })
          }
            else{
               this.$notify({
                title: '警告',
                message: '请选择真确的时间',
                type: 'warning'
            });
            }

          }
          else{
            return;
          }
      }

    },
    computed:{
      key(){
         //this.pageSize=this.tableData.length;
       }
    },
    mounted:function(){
      var self=this;
      this.slideHeight=window.screen.availHeight+'px';
      if (window.screen.availWidth>1900) {
        self.wid='';
        self.wuid='';
        self.wnickname='';
        self.worderId='';
        self.wreward='';
        self.wamount='';
        self.wrechargeUid='';
        self.wRnickname='';
        self.wdateline='';
      }
      axios.get('http://monkey.queyoujia.com/rebate/rebate').then(function (res) {
      self.tableData=[res.data]
      self.tableData=self.tableData[0].data.list
      self.tableDataAll=self.tableData
      self.tableWho=self.tableDataAll
      self.pageSize= res.data.data.total;
      self.tableData=[]
      self.tableDataAll.forEach(function (item,index) {
          if (index<20) {
            self.tableData.push(item);
            //console.log(self.tableData)
          }
          else{
              console.log(index)
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
.searchAll{position: absolute;margin-top: 30px}
.returDetails{margin-top: 10px;}
.form-inline{padding-bottom:18px; }
.recharge{margin-top: 10px;}
.chosedata{float: right;}
.chosebtn{float: right;}
.chosebtn button{height: 1.8rem;margin-top: 5px;line-height: 50%;}
.formSearch{margin-top: -10px;}
.searchRest{width:60px;height: 36px;margin-left: 10px;}
.pagetag{/* position: absolute;bottom: 5px;right: 15px; */float: right;}
</style>
