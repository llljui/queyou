<template>
  <div class="rechargeDetails">
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
          <el-input v-model="searchform.user" placeholder="游戏ID"></el-input>
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
        <el-date-picker type="date" placeholder="时间段" @change="datapicker2" v-model="formInline.date2" style="width: 100%;"></el-date-picker>
      </el-col>
    </el-row>
    <el-row style="float:right">
      <el-col :span="24" class="chosebtn">
         <el-button v-on:click="yesterDay">昨天</el-button>
         <el-button v-on:click="nerarSeDay">最近七天</el-button>
         <el-button v-on:click="nearMonth">最近1个月</el-button>
         <el-button v-on:click="nearYear">最近一年</el-button>
      </el-col>
    </el-row>
    </el-form-item>
  </el-form>
   <el-table
    :data="tableData"
    style="width: 100%;">
    <el-table-column
      prop="orderId"
      label="订单号"
      width="280"
      align="center">
    </el-table-column>
    <el-table-column
      prop="uid"
      label="游戏ID"
      width='100'
      align="center">
    </el-table-column>
    <el-table-column
      prop="nickname"
      label="昵称"
      show-overflow-tooltip
      align="center">
    </el-table-column>
    <el-table-column
      prop="price"
      label="人民币"
      align="center">
    </el-table-column>
    <el-table-column
      prop="depDiamond"
      label="钻石"
      align="center">
    </el-table-column>
     <el-table-column
      prop="channel"
      label="充值方式"
      align="center">
    </el-table-column>
    <el-table-column
      prop="dateline"
      width="200"
      label="付款时间"
      align="center">
    </el-table-column>
    <el-table-column
      prop="body"
      label="备注"
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
  name: 'rechargeDetails',
  data () {
    return {
        pick1:false,
        pick2:false,
        lvs:0,
      formInline: {
          user: '',
          region: '',
          type:'',
          date1:null,
          date2:null,
          neartime:''
        },
        searchform:{
          user:'',
          region:''
        },
        tableData: [],
        currentPage1:1,
        pageSize:0
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
           uid:this.searchform.user,
           orderId:this.searchform.region
        }
        axios.post('http://monkey.queyoujia.com/rebate/recharge',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
        console.log(res.data.data.list)
        self.pageSize=res.data.data.total
        tableTemp=[res.data.data.list];
        tableTemp=tableTemp[0];
       // console.log(tableTemp)
         for(let x in tableTemp){
          self.tableData.push( tableTemp[x])
         // console.log(tableTemp[x])
         }
         // console.log(self.tableData)

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
        console.log(`当前页: ${val}`);
        var self=this;
        console.log(this.lvs)
         if (self.pick1==true&&self.pick2==true) {
          console.log('pick')
         var tableTemp2=[]
         self.tableData=[]
         var tableTemp=[];
         function timeChangetype(stringTime1,stringTime2){
             var time={timestamp1:0,timestamp2:0} 
             time.timestamp1 = Date.parse(stringTime1); 
             time.timestamp2 = Date.parse(stringTime2); 
             return time;  
            }
            var picktime=timeChangetype(self.formInline.date1,self.formInline.date2);
            var params={
                      startTime:picktime.timestamp1,
                      endTime:picktime.timestamp2,
                      page:val,
                      
                }
                axios.post('http://monkey.queyoujia.com/rebate/recharge',qs.stringify(params),{headers: {
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
         if (self.lvs>0) {
          console.log(this.lvs);
            if (this.lvs==4) {
              var tableTemp2=[]
              self.tableData=[]
              //console.log(self.tableData)
              var tableTemp=[];
              var endTime=new Date();
              endTime=endTime.setHours('00', '00', '00', '0');
              var startTime=endTime-86400000*365;
              var params={
                startTime:startTime,
                endTime:endTime,
                page:val,
                
              }
              //console.log(endTime);
              axios.post('http://monkey.queyoujia.com/rebate/recharge',qs.stringify(params),{headers: {
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
              });
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
                endTime=endTime.setHours('00', '00', '00', '0');
                var startTime=endTime-(86400000*getCountDays());
                console.log(startTime)
                var params={
                  startTime:startTime,
                  endTime:endTime,
                  page:val,
                
                }
                //console.log(endTime-startTime);
                //console.log(endTime);
                axios.post('http://monkey.queyoujia.com/rebate/recharge',qs.stringify(params),{headers: {
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
                endTime=endTime.setHours('00', '00', '00', '0');
                var startTime=endTime-86400000*7;
                var params={
                  startTime:startTime,
                  endTime:endTime,
                  page:val,
                
                }
                //console.log(endTime);
                axios.post('http://monkey.queyoujia.com/rebate/recharge',qs.stringify(params),{headers: {
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
                });
                return;
              }
              else{
                  console.log('lv1')
                  var tableTemp2=[]
                  self.tableData=[]
                  var tableTemp=[];
                  var endTime=new Date();
                  endTime=endTime.setHours('00', '00', '00', '0');
                  var startTime=endTime-86400000;
                  console.log(endTime);
                  var params={
                    startTime:startTime,
                    endTime:endTime,
                    page:val,
                
                  }
                  axios.post('http://monkey.queyoujia.com/rebate/recharge',qs.stringify(params),{headers: {
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
              page:val,
              
            }
            //console.log(typeof(val));
            axios.post('http://monkey.queyoujia.com/rebate/recharge',qs.stringify(params),{headers: {
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
        endTime=endTime.setHours('00', '00', '00', '0');
        var startTime=endTime-86400000;
        console.log(endTime);
        var params={
          startTime:startTime,
          endTime:endTime
        }
        axios.post('http://monkey.queyoujia.com/rebate/recharge',qs.stringify(params),{headers: {
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
        endTime=endTime.setHours('00', '00', '00', '0');
        var startTime=endTime-86400000*7;
        var params={
          startTime:startTime,
          endTime:endTime
        }
        //console.log(endTime);
        axios.post('http://monkey.queyoujia.com/rebate/recharge',qs.stringify(params),{headers: {
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
        endTime=endTime.setHours('00', '00', '00', '0');
        var startTime=endTime-86400000*getCountDays();
        var params={
          startTime:startTime,
          endTime:endTime
        }
        //console.log(endTime-startTime);
        //console.log(endTime);
        axios.post('http://monkey.queyoujia.com/rebate/recharge',qs.stringify(params),{headers: {
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
        endTime=endTime.setHours('00', '00', '00', '0');
        var startTime=endTime-86400000*365;
        var params={
          startTime:startTime,
          endTime:endTime
        }
        //console.log(endTime);
        axios.post('http://monkey.queyoujia.com/rebate/recharge',qs.stringify(params),{headers: {
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
             time.timestamp1 = Date.parse(stringTime1); 
             time.timestamp2 = Date.parse(stringTime2); 
             return time;  
            }
        var picktime=timeChangetype(self.formInline.date1,self.formInline.date2);  
        if (picktime.timestamp1&&picktime.timestamp2) {
          if (picktime.timestamp2-picktime.timestamp1>0) {
                var params={
                  startTime:picktime.timestamp1,
                  endTime:picktime.timestamp2,
                
                }
                axios.post('http://monkey.queyoujia.com/rebate/recharge',qs.stringify(params),{headers: {
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
             time.timestamp1 = Date.parse(stringTime1); 
             time.timestamp2 = Date.parse(stringTime2); 
             return time;  
            }  
        var picktime=timeChangetype(self.formInline.date1,self.formInline.date2);
        if (picktime.timestamp1&&picktime.timestamp2) {
            if (picktime.timestamp2-picktime.timestamp1>0) {
              var params={
                  startTime:picktime.timestamp1,
                  endTime:picktime.timestamp2,
                
                }
                axios.post('http://monkey.queyoujia.com/rebate/recharge',qs.stringify(params),{headers: {
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
         /*this.pageSize=this.tableData.length;*/
       }     
    },
    watch:{

    },
    mounted:function(){
      var self=this;
        self.tableData=[]
        var tableTemp=[];
        var tableTemp2=[]
        var params={
           uid:this.searchform.user,
           orderId:this.searchform.region,
                
        }
        axios.post('http://monkey.queyoujia.com/rebate/recharge',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
        tableTemp=[res.data.data];
        tableTemp=tableTemp[0].list;
        tableTemp2=[res.data.data];
        self.pageSize=tableTemp2[0].total;
       // console.log(tableTemp)
         for(let x in tableTemp){
          self.tableData.push( tableTemp[x])
          /*console.log(tableTemp[x])*/
         }
          /*console.log(self.tableData)*/

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
.rechargeDetails{margin-top: 10px}
.searchAll{position: absolute;margin-top: 30px}
.form-inline{padding-bottom:18px; }
.recharge{margin-top: 10px;}
.chosedata{float: right;}
.chosebtn{float: right;}
.chosebtn button{height: 1.8rem;margin-top: 5px;line-height: 50%;}
.formSearch{margin-top: -10px;}
.searchRest{width:60px;height: 36px;margin-left: 10px;}
.pagetag{/* position: absolute;bottom: 5px;right: 15px; */float: right;}
</style>