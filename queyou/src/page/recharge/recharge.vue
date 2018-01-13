<template>
  <div class="recharge">
  
  <div class="jModal" v-show="openmodal"  v-bind:style="{width:modalWidth,height:modalHeight}">
   <header>至{{tabetitle}}的数据</header>
    <el-table
    :data="tableData2"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="date"
      label="订单号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="游戏ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="昵称">
    </el-table-column>
    <el-table-column
      prop="date"
      label="人民币"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="钻石"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="充值方式">
    </el-table-column>
    <el-table-column
      prop="date"
      label="付款时间"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="备注"
      width="180">
    </el-table-column>
  </el-table>
  </div>
  <div class="j-bor" :key="borkey" v-bind:style="{width:borWidth,height:borHeight}" v-show="openbor" v-on:click="closebor"></div>
  <el-form :inline="true" :model="formInline" class="form-inline">
  <el-row class="searchAll">
     <el-checkbox label="以天为单位" @change="byday"   v-bind:data-lv="lv1" name="type"></el-checkbox>
     <el-checkbox label="以月为单位" @change="bymonth" v-bind:data-lv="lv2" name="type"></el-checkbox>
     <el-checkbox label="以年为单位" @change="byyear"  v-bind:data-lv="lv3" name="type"></el-checkbox>
    </el-col> 
  </el-row>
    <el-form-item label="" class="chosedata">
    <el-row>
      <el-col :span="11">
        <el-date-picker type="date" placeholder="时间段" v-model="formInline.date1" @change="datapicker1" style="width: 100%;"></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">&nbsp&nbsp至</el-col>
      <el-col :span="11">
        <el-date-picker type="date" placeholder="时间段" v-model="formInline.date2" @change="datapicker2" style="width: 100%;"></el-date-picker>
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
      prop="time"
      label="日期"
      width="180"
      align="center">
    </el-table-column>
    <el-table-column
      prop="prices"
      label="付款金额（元）"
      width="180"
      align="center">
    </el-table-column>
    <el-table-column
      prop="uid"
      label="付费人数"
      align="center">
    </el-table-column>
    <el-table-column
      prop="count"
      label="付费次数"
      align="center">
    </el-table-column>
    <el-table-column  align="center" label="付款明细">
      <template scope="scope">
        <el-button
          size="small"
          type="primary"
          @click="handleEdit(scope.$index, scope.row)">查看明细</el-button>
      </template>
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
  name: 'recharge',
  data () {
    return {
      lv1:false,
      lv2:false,
      lv3:false,
      pick1:false,
      pick2:false,
      lvs:0,
      openbor:false,
      openmodal:false,
      borWidth:'',
      borHeight:'',
      modalWidth:'',
      modalHeight:'',
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
        tableData: [],
        currentPage1:1,
        pageSize:null,
        tabetitle:'',
        tableData2: []
    }
  },
    methods: {
      closebor:function(){
        var self = this;
        self.openbor=false;
        self.openmodal=false;
      },
       tableRowClassName(row, index) {
        if (index === 1) {
          return 'info-row';
        } else if (index === 3) {
          return 'positive-row';
        }
        return '';
      },
      byday:function () {
        var self=this;
        self.pick1=false;
        self.pick2=false;
        self.lvs=0;
        if (self.lv1==false) {
          self.lv1=true;
        }else{
          self.lv1=false
        }
        if (self.lv2==false&&self.lv3==false) {
          var params={
          
          }
         if (self.lv1=true) {
           axios.post('http://monkey.queyoujia.com/rebate/daystatistics',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
                        let tableTemp=[];
                         self.tableData=[];
                         tableTemp=[res.data.data];
                         tableTemp=tableTemp[0].list;
                         self.pageSize=res.data.data.total
                         tableTemp.forEach(function (item,index) {                        
                           self.tableData.push(item)
                           //console.log(self.tableData)
                         })         
                      }).catch(function (err) {
                        console.log(err);
                      })
         }else{
          return;
         }
        }else{
          return;
        }
        console.log(self.lv1)
      },
      bymonth:function () {
        var self=this;
        console.log('ll')
        self.pick1=false;
        self.pick2=false;
        self.lvs=0;
        if (self.lv2==false) {
          self.lv2=true;
        }else{
          self.lv2=false
        }
         if (self.lv3==false) {
         var params={
          
          }
          if (self.lv2==true) {
            axios.post('http://monkey.queyoujia.com/rebate/monthstatistics',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
                         let tableTemp=[];
                         self.tableData=[];
                         tableTemp=[res.data.data];
                         tableTemp=tableTemp[0].list;
                         self.pageSize=res.data.data.total
                         tableTemp.forEach(function (item,index) {                        
                           self.tableData.push(item)
                           //console.log(self.tableData)
                         })             
                      }).catch(function (err) {
                        console.log(err);
                      })
          }else{
            return;
          }
        }else{
          return;
        }
      },
      byyear:function () {
        var self=this;
        self.pick1=false;
        self.pick2=false;
        self.lvs=0;
        if (self.lv3==false) {
            self.lv3=true;
        }else{
          self.lv3=false
        }
        var params={
          
          }
          if (self.lv3==true) {
          axios.post('http://monkey.queyoujia.com/rebate/yearstatistics',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
                       let tableTemp=[];
                         self.tableData=[];
                         tableTemp=[res.data.data];
                         tableTemp=tableTemp[0].list;
                         console.log(tableTemp)
                         self.pageSize=res.data.data.total
                         tableTemp.forEach(function (item,index) {                        
                           self.tableData.push(item)
                           //console.log(self.tableData)
                         })         
                      }).catch(function (err) {
                        console.log(err);
                      })
          }else{
            return;
          }
      },
      /*onSubmit() {
        console.log('submit!');
        var self=this;
        self.pick1=false;
        self.pick2=false;
        var params={
          uid:self.searchform.user,
          orderId:self.searchform.region
        }
        axios.post('',{

        }).then(function (res) {
          
        }).catch(function  (err) {
          console.log(err)
        })
      },*/
        handleEdit(index, row) {
        var self = this;
        console.log(Date.parse(row.time)/*.substring(5,7)*/)
        if (self.lv3==true) {
           var endTime=Date.parse(row.time)+86400000*365;
            //console.log(endTime);
            sessionStorage.Dates='年'
            sessionStorage.title=row.time;
            sessionStorage.startTime=Date.parse(row.time)-28800000;
            sessionStorage.endTime=endTime;
    /*        self.tabetitle=row.time*/
             self.$router.push({path: '/rechargedetails2/rechargedetails2'})
             return;
        }
        if (self.lv2==true) {
            sessionStorage.Dates='月'

            function getDaysInOneMonth(year, month){  
              month = parseInt(month, 10);  
              var d= new Date(year, month, 0);  
              return d.getDate();  
            } 
            var endTime=Date.parse(row.time)+86400000*getDaysInOneMonth(row.time.substring(0,4),row.time.substring(5,7));
            //console.log(endTime);
            sessionStorage.title=row.time;
            sessionStorage.startTime=Date.parse(row.time)-28800000;
            sessionStorage.endTime=endTime;
    /*        self.tabetitle=row.time*/
             self.$router.push({path: '/rechargedetails2/rechargedetails2'})
             return;
        }
        if (self.lv1==true) {
            sessionStorage.Dates='日'
            var endTime=Date.parse(row.time)+86400000;
            //console.log(endTime);
            sessionStorage.title=row.time;
            sessionStorage.startTime=Date.parse(row.time)-28800000;
            sessionStorage.endTime=endTime;
    /*        self.tabetitle=row.time*/
             self.$router.push({path: '/rechargedetails2/rechargedetails2'})
             return;
        }
        else{
            console.log(index);
            //console.log(row);
            sessionStorage.Dates='日'
            //self.openbor=false;
            //self.openmodal=false;
            var endTime=Date.parse(row.time)+86400000;
           // console.log(endTime);
            sessionStorage.title=row.time;
            sessionStorage.startTime=Date.parse(row.time)-28800000;
            sessionStorage.endTime=endTime;
    /*        self.tabetitle=row.time*/
             self.$router.push({path: '/rechargedetails2/rechargedetails2'})
             return;
        }
       
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        //console.log(`当前页: ${val}`);
        var self=this;
        self.tableData=[]
        var tableTemp=[];
        val=val.toString();
        var params={
          page:val
        }
        if (self.pick1==true&&self.pick2==true) {
            // console.log('pick')
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
                        page:val
                      }
                axios.post('http://monkey.queyoujia.com/rebate/daystatistics',qs.stringify(params),{headers: {
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
              endTime=endTime.setHours('00', '00', '00', '0');
              var startTime=endTime-86400000*365;
              var params={
                startTime:startTime,
                endTime:endTime,
                page:val
              }
              //console.log(endTime);
              axios.post('http://monkey.queyoujia.com/rebate/daystatistics',qs.stringify(params),{headers: {
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
                endTime=endTime.setHours('00', '00', '00', '0');
                var startTime=endTime-(86400000*getCountDays());
                //console.log(startTime)
                var params={
                  startTime:startTime,
                  endTime:endTime,
                  page:val
                }
                //console.log(endTime-startTime);
                //console.log(endTime);
                axios.post('http://monkey.queyoujia.com/rebate/daystatistics',qs.stringify(params),{headers: {
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
                  page:val
                }
                //console.log(endTime);
                axios.post('http://monkey.queyoujia.com/rebate/daystatistics',qs.stringify(params),{headers: {
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
                 // console.log('lv1')
                  var tableTemp2=[]
                  self.tableData=[]
                  var tableTemp=[];
                  var endTime=new Date();
                  endTime=endTime.setHours('00', '00', '00', '0');
                  var startTime=endTime-86400000;
                  //console.log(endTime);
                  var params={
                    startTime:startTime,
                    endTime:endTime,
                    page:val
                  }
                  axios.post('http://monkey.queyoujia.com/rebate/daystatistics',qs.stringify(params),{headers: {
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
                  return;
              }
         
         }

        if (self.lv3==true) {
            axios.post('http://monkey.queyoujia.com/rebate/yearstatistics',qs.stringify(params),{headers: {
                                'Content-Type': 'application/x-www-form-urlencoded'
                          }}).then(function (res) {
            tableTemp=[res.data.data];
            tableTemp=tableTemp[0].list;
             //console.log(res)
             for(let x in tableTemp){
              self.tableData.push( tableTemp[x])

             }


            }).catch(function (err) {
              console.log(err);
            }) 
        }else{
          if(self.lv2==true){
             //console.log(typeof(val));
            axios.post('http://monkey.queyoujia.com/rebate/monthstatistics',qs.stringify(params),{headers: {
                                'Content-Type': 'application/x-www-form-urlencoded'
                          }}).then(function (res) {
            tableTemp=[res.data.data];
            tableTemp=tableTemp[0].list;
            // console.log(res)
             for(let x in tableTemp){
              self.tableData.push( tableTemp[x])
             // console.log(tableTemp[x])
             }
             // console.log(self.tableData)

            }).catch(function (err) {
              console.log(err);
            }) 
          }else{
             //console.log(typeof(val));
            axios.post('http://monkey.queyoujia.com/rebate/daystatistics',qs.stringify(params),{headers: {
                                'Content-Type': 'application/x-www-form-urlencoded'
                          }}).then(function (res) {
            tableTemp=[res.data.data];
            tableTemp=tableTemp[0].list;
            // console.log(res)
             for(let x in tableTemp){
              self.tableData.push( tableTemp[x])
             // console.log(tableTemp[x])
             }
             // console.log(self.tableData)

            }).catch(function (err) {
              console.log(err);
            }) 
          }
        }  
      },
      rechargeAll:function () {
       console.log(33);
      },
      yesterDay:function () {
        var self=this;
        self.pick1=false;
        self.pick2=false;
        self.lvs=1;
        var tableTemp2=[]
        self.tableData=[]
        var tableTemp=[];
        var endTime=new Date();
        endTime=endTime.setHours('00', '00', '00', '0');
        var startTime=endTime-8640000;
        //console.log(endTime);
        var params={
          startTime:startTime,
          endTime:endTime,
          sid:'4a1e0a553ddcfe5a54c72e0cab7239fc'
        }
        axios.post('http://monkey.queyoujia.com/rebate/daystatistics',qs.stringify(params),{headers: {
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
        self.lvs=2;
        var tableTemp2=[]
        self.tableData=[]
        var tableTemp=[];
        var endTime=new Date();
        endTime=endTime.setHours('00', '00', '00', '0');
        var startTime=endTime-86400000*7;
        //console.log(startTime)
        var params={
          startTime:startTime,
          endTime:endTime
        }
        //console.log(endTime);
        axios.post('http://monkey.queyoujia.com/rebate/daystatistics',qs.stringify(params),{headers: {
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
        axios.post('http://monkey.queyoujia.com/rebate/daystatistics',qs.stringify(params),{headers: {
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
        axios.post('http://monkey.queyoujia.com/rebate/daystatistics',qs.stringify(params),{headers: {
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
         self.lvs=0;
         self.pick1=true;
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
                  endTime:picktime.timestamp2
                }
                axios.post('http://monkey.queyoujia.com/rebate/daystatistics',qs.stringify(params),{headers: {
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
                  endTime:picktime.timestamp2
                }
                axios.post('http://monkey.queyoujia.com/rebate/daystatistics',qs.stringify(params),{headers: {
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
     mounted:function(){
      var self=this;
      this.slideHeight=window.screen.availHeight+'px';
      axios.get('http://monkey.queyoujia.com/rebate/daystatistics',{params:{}}).then(function (res) {
      self.tableData=[res.data.data]
      //console.log(self.tableData)
      self.tableData=self.tableData[0].list
      self.tableDataAll=self.tableData
      //console.log(self.tableDataAll)
      self.tableWho=self.tableDataAll
      self.pageSize= res.data.data.total
      self.tableData=[]
      self.tableDataAll.forEach(function (item,index) {
            self.tableData.push(item);
            //console.log(self.tableData)
        })
      }).catch(function (err) {
        console.log(err);
      })
    },
    computed:{
      key(){
         //this.pageSize=this.tableData.length;
       },
       borkey(){
        var self = this;
        self.borWidth=window.screen.availWidth+'px';
        self.borHeight=window.screen.availHeight+'px';
        self.modalWidth=window.screen.availWidth/1.5+'px'
        self.modalHeight=window.screen.availHeight/1.5+'px';

        //console.log(window.screen);
       }     
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
header{margin:20px 0;font-size: 20px;}
.searchAll{position: absolute;margin-top: 30px}
.form-inline{padding-bottom:18px; }
.recharge{margin-top: 10px;}
.chosedata{float: right;}
.chosebtn{float: right;}
.chosebtn button{height: 1.8rem;margin-top: 5px;line-height: 50%;}
.formSearch{margin-top: -10px;}
.searchRest{width:60px;height: 36px;margin-left: 10px;}
.pagetag{/* position: absolute;bottom: 5px;right: 15px; */float: right;}
.j-bor{position: fixed;top: 0;right: 0;left: 0;bottom: 0;text-align: center;background: black;opacity: 0.5;z-index: 999;}
.jModal{position: fixed;top: 0;right: 0;left: 0;bottom: 0;margin:auto auto;text-align: center;z-index:1000;background: white;box-shadow: 0 0 5px #48576a;max-height:650px;overflow-y: scroll;}
el-table .info-row {
    background: #c9e5f5;
  }
  .el-table .positive-row {
    background: #e2f0e4;
  }
</style>