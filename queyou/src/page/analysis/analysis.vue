<template>
  <div class="analysis">
  	 <div id="myChart" :style="{width: '100%', height: '300px','display':'inline-block'}"></div>
  	 <el-col :span="24">&nbsp</el-col>
  	 <span style="margin-right:10px;">显示方式</span>
	  <el-radio-group v-model="radio2" @change="chosetime">
		    <el-radio :label="1">单位（日）</el-radio>
		    <el-radio :label="2">单位（月）</el-radio>
		    <el-radio :label="3">单位（年）</el-radio>
	  </el-radio-group>
	  <el-date-picker
	  	  @change="selectTime(2)"
		  size="small"
		  class="flrt"  	  
	      v-model="value2"
	      type="date"
	      placeholder="选择日期">
  	  </el-date-picker>
  	  <el-date-picker
  	   @change="selectTime(1)"
  	 	  class="flrt"
  	 	  size="small"
	      v-model="value1"
	      type="date"
	      placeholder="选择日期">
   	  </el-date-picker>
   <el-table
   class="mrt"
	    :data="tableData"
	    style="width: 100%">
    <el-table-column
      label="日期"
      align="center"
      >
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.time }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="最高在线人数"
      align="center"
      >
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.max_num }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="新增人数"
      align="center"
      >
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.new_inc }}</span>
      </template>
    </el-table-column>
    <el-table-column
   	  align="center"
      label="活跃用户"
      width="180">
      <template scope="scope">
		<span style="margin-left: 10px">{{ scope.row.active_num }}</span>
      </template>
    </el-table-column>
    <!-- <el-table-column
       	  align="center"
      label="IOS用户"
      width="180">
      <template scope="scope">
    		
      </template>
    </el-table-column>
    <el-table-column
       	  align="center"
      label="安卓用户"
      width="180">
      <template scope="scope">
    
      </template>
    </el-table-column>
    <el-table-column
       	  align="center"
      label="登录人数"
      width="180">
      <template scope="scope">
    
      </template>
    </el-table-column> -->
    <el-table-column label="操作" align="center">
      <template scope="scope">
        <el-button
          size="mini"
          type="primary"
          @click="handleEdit(scope.$index, scope.row)">获取明细</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
  	  class="flrt mrt"
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
import axios from 'axios'
import qs from 'qs'
import echarts from 'echarts'
export default {
  name: 'analysis',
  data () {
    return {
    	allpage:1,
    	currentPage3: 1,
    	value1:null,
    	value2:null,
  		radio2:1,
  		tableData: [],
  		date:0,
  		timetype:0
    }
  },
  methods:{
  	selectTime:function (val) {
  		console.log(val);
  		var self=this;
  		self.timetype=1;
  		if (self.value2&&self.value1) {
  			if (self.value2>=self.value1) {
  				axios.get('http://monkey.queyoujia.com/online/list',{params:{start_time:Date.parse(self.value1)/1000,end_time:Date.parse(self.value2)/1000}}).then(function (res) {
  					if (self.radio2=='1') {

  					}else{
  						self.tableData=res.data.data.list;
  					}
  				}).catch(function (err) {
  					console.log(err);
  				})
  			}else{
  				  self.$message({
		          message: '请验证输入时间',
		          type: 'warning'
		        });
  			}
  		}else{
  			return;
  		}
  	},
  	chosetime:function (val) {
  		console.log(val);
  		var self=this;
  		self.value1=null;
  		self.value2=null;
  		self.timetype=0;
  		self.tableData=[];
  		self.allpage=null;
  		axios.get('http://monkey.queyoujia.com/online/list',{params:{type:self.radio2,page:1}}).then(function (res) {
  			console.log(res);
  			self.tableData=res.data.data.list;
  			self.allpage=res.data.data.total;
  		}).catch(function (err) {
  			console.log(err);
  		})
  	},
  	 handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        var self=this;
  		self.tableData=[];
  		self.allpage=null;
  		if (self.timetype==0) {
  			axios.get('http://monkey.queyoujia.com/online/list',{params:{type:self.radio2,page:val}}).then(function (res) {
  			console.log(res);
  			self.tableData=res.data.data.list;
  			if (self.radio2=='1') {

  					}else{
  						self.tableData=res.data.data.list;
  					}
  			self.allpage=res.data.data.total;
  		}).catch(function (err) {
  			console.log(err);
  		})
  	}else if(self.timetype==1){
  		axios.get('http://monkey.queyoujia.com/online/list',{params:{type:self.radio2,page:val,startTime:Date.parse(self.value1)/1000,endTime:Date.parse(self.value2)/1000}}).then(function (res) {
  			console.log(res);
  			self.tableData=res.data.data.list;
  			self.allpage=res.data.data.total;
  		}).catch(function (err) {
  			console.log(err);
  		})
  	}  		
      },
  	handleEdit(index, row) {
        console.log(index, row);
        var self=this;
        self.date=row.time;
        self.drawLine();
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
  	 drawLine(){
      var self = this;
      self.chartTime=[];
      var chardate=[];
      var seriesdata_1=[];
      var seriesdata_2=[];
      var seriesdata_3=[];
      axios.get('http://monkey.queyoujia.com/online/online_num',{params:{type:self.radio2,date:self.date}}).then(function (res) {
      	if (self.radio2=='1') {
      		 for(let x in  res.data.data){
	          // console.log(res.data.data[x]);
	           seriesdata_1.push(res.data.data[x].today);
	           seriesdata_2.push(res.data.data[x].before_day);
	           //seriesdata_3.unshift(res.data.data[x].firstday)
	           chardate.push(x);
	         }
	     }else{
	     	 for(let x in  res.data.data){
          // console.log(res.data.data[x]);
           seriesdata_1.push(res.data.data[x].today);
           seriesdata_2.push(res.data.data[x].before_day);
           //seriesdata_3.unshift(res.data.data[x].firstday)
           chardate.push(x);
         }
	     }
        
          let myChart=echarts.init(document.getElementById('myChart'));
    // 绘制图表
    var daytype1=null;
    var daytype2=null;
    if (self.radio2=='1') {daytype1='今天';daytype2='昨天';}
    else if(self.radio2=='2'){daytype1='这个月';daytype2='上个月';}
    else{daytype1='今年';daytype2='去年';}
    myChart.setOption({
        title: { text: self.date,textStyle:{color:'#545454',fontWeight:'normal',align:'center','fontSize':'18'},left:'8%',top:'20'},
        tooltip: { trigger: 'axis'},
        legend: {
        data:[daytype1,daytype2]
        },
        xAxis: {
            type : 'category',
            boundaryGap : false,
            data: chardate
        },
        dataZoom: [{
          type: 'inside',
          start: 0,
          end: 100
          }, {
          start: 0,
          end: 10,
          handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
          handleSize: '75%',
          handleStyle: {
              color: '#fff',
              shadowBlur: 3,
              shadowColor: 'rgba(0, 0, 0, 0.6)',
              shadowOffsetX: 2,
              shadowOffsetY: 2
            }
        }],
        yAxis: {type: 'value'},
        series: [{
            name: daytype1,
            type: 'line',
            data: seriesdata_1
        },{
            name: daytype2,
            type: 'line',
            data: seriesdata_2
        }/*,
        {
            name: '一周前',
            type: 'line',
            data: seriesdata_3
        }*/]
    });
      }).catch(function (err) {
        console.log(err);
      });
  }
},
  mounted(){
     var self=this;
     var nowDate = new Date();
	 var year = nowDate.getFullYear();
	 var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1)
	  : nowDate.getMonth() + 1;
	 var day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate
	  .getDate();
	 var dateStr = year + "-" + month + "-" + day;
	 self.date=dateStr;
  	 self.drawLine();
  	 axios.get('http://monkey.queyoujia.com/online/list',{params:{}}).then(function (res) {
  	 	console.log(res);
  	 	self.tableData=res.data.data.list;
  	 	JSON.stringify(self.tableData);
  	 	self.allpage=res.data.data.total;
  	 }).catch(function (err) {
  	 	console.log(err);
  	 })
}}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flrt{float: right;margin:0 10px 10px 10px;}
.mrt{margin-top: 10px;}
</style>
