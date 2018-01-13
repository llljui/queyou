<template>
  <div class="platformAgent" :key="keys">
    <el-col :span="24" style="margin-bottom:20px;">
       <el-col :span="12">
        <div class="ckxq">
          <span style="float:left;font-size:18px;font-weight:bold;color:black;">实时概况</span>
          <span class="fordetail"><!-- 查看详情 --> &nbsp</span>
        </div>
       </el-col>
    </el-col>
    <el-col :span="12">
      <el-col :span="8" class="tac">
        <el-col :span="24" class="tac tac1">{{animatedNumber}}</el-col>
        <el-col :span="24" class="tac" style="margin:0 0 25px 0;">
          <el-col :span="10" style="text-align:right;">
            <img :src="url1" alt="loading" class="upto">
          </el-col>
          <el-col :span="12" :offset="1" style="text-align:left">
            {{animatedNumber2}}
          </el-col>
        </el-col>
        <el-col :span="24" class="tac">
          <el-col :span="8"  style="text-align:right;min-width:30px!important;">
           <img src="../../../static/money.png" alt="loading"  style="margin-right:5px;margin-top:1px;">
          </el-col>
          <el-col :span="14" style="text-align:left;">
           今日充值金额
          </el-col>
        </el-col>
      </el-col>

      <el-col :span="8" class="tac brl">
        <el-col :span="24" class="tac tac1">{{animatedNumber3}}</el-col>
        <el-col :span="24" class="tac">
          <el-col :span="10" style="text-align:right;margin:0 0 25px 0;">
            <img :src="url2" alt="loading" class="upto">
          </el-col>
          <el-col :span="12" :offset="1" style="text-align:left">
           {{animatedNumber4}}
          </el-col>
        </el-col>
        <el-col :span="24" class="tac">
          <el-col :span="8"  style="text-align:right;min-width:30px!important;">
           <img src="../../../static/dia.png" alt="loading" style="margin-right:5px;margin-top:1px;">
          </el-col>
          <el-col :span="14" style="text-align:left;">
           今日钻石消耗
          </el-col>
        </el-col>
      </el-col>

      <el-col :span="8" class="tac">
        <el-col :span="24" class="tac tac1">{{animatedNumber5}}</el-col>
        <el-col :span="24" class="tac">
          <el-col :span="10" style="text-align:right;margin:0 0 25px 0;">
            <img :src="url3" class="upto" alt="loading">
          </el-col>
          <el-col :span="12" :offset="1" style="text-align:left">
            {{animatedNumber6}}
          </el-col>
        </el-col>
        <el-col :span="24" class="tac">
          <el-col :span="10"  style="text-align:right;min-width:30px!important;">
           <img src="../../../static/user.png" alt="loading" style="margin-right:5px;margin-top:1px;">
          </el-col>
          <el-col :span="11" style="text-align:left;">
           活跃用户
          </el-col>
        </el-col>
      </el-col>
    </el-col>

    <el-col :span="11" :offset="1" style="margin-top:-62px;">
      <!-- <div class="dayand">
        <el-button size="mini" :type="colors1" @click="chosetime(1)">今天</el-button>
        <el-button size="mini" :type="colors2" @click="chosetime(2)">昨天</el-button>
        <el-button size="mini" :type="colors3" @click="chosetime(3)">近七天</el-button>
      </div> -->
      <div id="myChart" :style="{width: '100%', height: '300px','display':'inline-block'}"></div>
    </el-col>

    <el-col :span="24" v-loading="loading" style="margin-top:-50px;">
      <h3 class="comtitle">代理概况</h3>
      <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        align="center"
        prop="uid"
        label="游戏ID">
      </el-table-column>
      <el-table-column
        align="center"
        prop="no"
        label="邀请码">
      </el-table-column>
      <el-table-column
        prop="nickname"
        align="center"
        show-overflow-tooltip
        label="微信昵称">
      </el-table-column>
      <el-table-column
       align="center"
       show-overflow-tooltip
        prop="pid_nickname"
        label="上级代理">
      </el-table-column>
      <el-table-column
        prop="today_incharge"
        align="center"
        label="今日充值">
      </el-table-column>
      <el-table-column
        prop="today_consume"
        align="center"
        label="今日消耗">
      </el-table-column>
      <el-table-column
        prop="yestoday_incharge"
        align="center"
        label="昨日充值">
      </el-table-column>
      <el-table-column
        prop="yestoday_consume"
        align="center"
        label="昨日消耗"
        >
      </el-table-column>
      <el-table-column
        prop="total_consume"
        align="center"
        label="钻石总消耗">
      </el-table-column>
      <el-table-column
      show-overflow-tooltip
        prop="last_login_time"
        min-width="120"
        align="center"
        label="最后登录时间">
      </el-table-column>
      <el-table-column
      show-overflow-tooltip
        prop="register_time"
        align="center"
        min-width="120"
        label="注册时间">
      </el-table-column>
    </el-table>
    <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="1"
      layout="prev, pager, next, jumper"
      :total="allpage">
    </el-pagination>
  </div>
    </el-col>
  </div>
</template>
<script>
import axios from 'axios'
import qs from 'qs'
import echarts from 'echarts'
import TWEEN from 'tween.js'
export default {
  name: 'platformAgent',
  data () {
    return {
      loading:false,
      allpage:null,
      url3:null,
      url2:null,
      url1:null,
      colors1:'primary',
      colors2:null,
      colors3:null,
      vn:1500,
      animatedNumber: 0,
      animatedNumber2:0,
      animatedNumber3:0,
      animatedNumber4:0,
      animatedNumber5:0,
      animatedNumber6:0,
     newheight:'100px',
     newhid:'hidden',
     plTitle:'欢迎您！上海雀游有限公司',
     number: 0,
     number2:0,
     number3:0,
     number4:0,
     number5:0,
     number6:0,
     tableData: [],
     currentPage3:1,
     notHeight1:null,
     notHeight2:null,
     dayIncome:null,
     chartTime:[]
    }
  }, 
  mounted(){
    var self =this;
    self.drawLine();
    axios.get('http://monkey.queyoujia.com/index/index',{params:{}}).then(function(res){
        console.log(res.data.data.list);
        self.number=res.data.data.today_incharge_amount;//今日总充值
        self.number2=res.data.data.dec_incharge_amount; //实时相对充值
        self.number3=res.data.data.today_consume;//今日总消耗
        self.number4=res.data.data.dec_consume;//相对消耗
        self.number5=res.data.data.active_user_num;//活跃用户
        self.number6=res.data.data.dec_active_user_num;//相对活跃
        if (self.number2>=0) {
          self.url1='../../../static/up.png'
        }else{
          self.url1='../../../static/down.png'
        }
        if (self.number4>=0) {
          self.url2='../../../static/up.png'
        }else{
          self.url2='../../../static/down.png'
        }
        if (self.number6>=0) {
          self.url3='../../../static/up.png'
        }else{
          self.url3='../../../static/down.png'
        }
      }).catch(function(err){
        console.log(err);
      });
    axios.get('http://monkey.queyoujia.com/index/get_promoter_list',{params:{}}).then(function(res){
         // console.log(res.data.data.list);
          self.tableData=res.data.data.list;
          self.allpage=res.data.data.total;
        }).catch(function(err){
          console.log(err);
        });
  setInterval(function () {
      self.drawLine();
      axios.get('http://monkey.queyoujia.com/index/index',{params:{}}).then(function(res){
          console.log(res.data.data.list);
      self.number=res.data.data.today_incharge_amount;//今日总充值
      self.number2=res.data.data.dec_incharge_amount; //实时相对充值
      self.number3=res.data.data.today_consume;//今日总消耗
      self.number4=res.data.data.dec_consume;//相对消耗
      self.number5=res.data.data.active_user_num;//活跃用户
      self.number6=res.data.data.dec_active_user_num;//相对活跃
      if (Number(self.number2)>=0) {
        self.url1='../../../static/up.png'
      }else{
        self.url1='../../../static/down.png'
      }
      if (Number(self.number4)>=0) {
        self.url2='../../../static/up.png'
      }else{
        self.url2='../../../static/down.png'
      }
      if (Number(self.number6)>=0) {
        self.url3='../../../static/up.png'
      }else{
        self.url3='../../../static/down.png'
      }
    }).catch(function(err){
      console.log(err);
    });
    },180000);
  },
  methods:{
    chosetime:function (val) {
        console.log(val);
        var self=this;
        if (val==1) {self.colors1='primary';self.colors2=null;self.colors3=null;}
        else if(val==2) {self.colors2='primary';self.colors1=null;self.colors3=null;}
        else{self.colors3='primary';self.colors2=null;self.colors1=null;}
    },
    drawLine(){
      var self = this;
      self.chartTime=[];
      var chardate=[];
      var seriesdata_1=[];
      var seriesdata_2=[];
      var seriesdata_3=[];
      axios.get('http://monkey.queyoujia.com/index/online_num',{params:{}}).then(function (res) {
         for(let x in  res.data.data){
          // console.log(res.data.data[x]);
           seriesdata_1.unshift(res.data.data[x].today);
           seriesdata_2.unshift(res.data.data[x].yestoday);
           seriesdata_3.unshift(res.data.data[x].firstday)
           chardate.unshift(x);
         }
          let myChart=echarts.init(document.getElementById('myChart'));
    // 绘制图表
    myChart.setOption({
        title: { text: '概况分析' },
        tooltip: { trigger: 'axis'},
        legend: {
        data:['今天','昨天','一周前']
        },
        xAxis: {
            type : 'category',
            boundaryGap : false,
            data: chardate
        },
        dataZoom: [{
          type: 'inside',
          start: 80,
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
            name: '今天',
            type: 'line',
            data: seriesdata_1
        },{
            name: '昨天',
            type: 'line',
            data: seriesdata_2
        },
        {
            name: '一周前',
            type: 'line',
            data: seriesdata_3
        }]
    });
      }).catch(function (err) {
        console.log(err);
      });
   
},
  handleSizeChange(val) {
   // console.log(`每页 ${val} 条`);
  },
  handleCurrentChange(val) {
    console.log(val);
    var self=this;
    self.allpage=null;
    self.tableData=[];
    setTimeout(function () {  
      self.loading=true;  
       axios.get('http://monkey.queyoujia.com/index/get_promoter_list',{params:{page:val}}).then(function(res){
          //console.log(res.data.data.list);
          self.tableData=res.data.data.list;
          self.allpage=res.data.data.total;
        }).catch(function(err){
          console.log(err);
        });
    },50);
   setTimeout(function () {
    self.loading=false;
   },500);
  },
  mdedit:function(){
    
  }
},
  watch: {
    number: function(newValue, oldValue) {
      var vm = this
      function animate () {
        if (TWEEN.update()) {
          requestAnimationFrame(animate)
        }
      }
      new TWEEN.Tween({ tweeningNumber: oldValue })
              .easing(TWEEN.Easing.Quadratic.Out)
              .to({ tweeningNumber: newValue }, vm.vn)
              .onUpdate(function () {
                vm.animatedNumber = this.tweeningNumber.toFixed(0);
              })
              .start()
      animate()
    },
    number2: function(newValue, oldValue) {
      var vm = this
      function animate () {
        if (TWEEN.update()) {
          requestAnimationFrame(animate)
        }
      }
      new TWEEN.Tween({ tweeningNumber: oldValue })
              .easing(TWEEN.Easing.Quadratic.Out)
              .to({ tweeningNumber: newValue }, vm.vn)
              .onUpdate(function () {
                vm.animatedNumber2 = this.tweeningNumber.toFixed(0);
              })
              .start()
      animate()
    },
    number3: function(newValue, oldValue) {
      var vm = this
      function animate () {
        if (TWEEN.update()) {
          requestAnimationFrame(animate)
        }
      }
      new TWEEN.Tween({ tweeningNumber: oldValue })
              .easing(TWEEN.Easing.Quadratic.Out)
              .to({ tweeningNumber: newValue }, vm.vn)
              .onUpdate(function () {
                vm.animatedNumber3 = this.tweeningNumber.toFixed(0);
              })
              .start()
      animate()
    },
    number4: function(newValue, oldValue) {
      var vm = this
      function animate () {
        if (TWEEN.update()) {
          requestAnimationFrame(animate)
        }
      }
      new TWEEN.Tween({ tweeningNumber: oldValue })
              .easing(TWEEN.Easing.Quadratic.Out)
              .to({ tweeningNumber: newValue }, vm.vn)
              .onUpdate(function () {
                vm.animatedNumber4 = this.tweeningNumber.toFixed(0);
              })
              .start()
      animate()
    },
     number5: function(newValue, oldValue) {
      var vm = this
      function animate () {
        if (TWEEN.update()) {
          requestAnimationFrame(animate)
        }
      }
      new TWEEN.Tween({ tweeningNumber: oldValue })
              .easing(TWEEN.Easing.Quadratic.Out)
              .to({ tweeningNumber: newValue }, vm.vn)
              .onUpdate(function () {
                vm.animatedNumber5 = this.tweeningNumber.toFixed(0);
              })
              .start()
      animate()
    },
     number6: function(newValue, oldValue) {
      var vm = this
      function animate () {
        if (TWEEN.update()) {
          requestAnimationFrame(animate)
        }
      }
      new TWEEN.Tween({ tweeningNumber: oldValue })
              .easing(TWEEN.Easing.Quadratic.Out)
              .to({ tweeningNumber: newValue }, vm.vn)
              .onUpdate(function () {
                vm.animatedNumber6 = this.tweeningNumber.toFixed(0);
              })
              .start()
      animate()
    }
  },
computed:{
  keys:function () {
   // console.log(2);

  },
  notHeight:function(){
     // console.log(this);
    }
},
beforeDestroy(){
  var self=this;
  for(var i = 0; i < 9999; i++) {
    clearInterval(i)
}
  console.log(666);
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tac{text-align: center;}
.brl{border-left: 1px solid #545454;border-right: 1px solid #545454;}
.tac1{font-size: 30px;color:#4083FF;margin: 5px 0 15px 0;}
.dayand{position: absolute;right:200px;margin-top:10px;z-index: 99999;}


br{display: block;height: 1px}
.plat1{border-left:5px solid #1d90e6;height:200px;box-shadow: -1px 0 0 #7194FB}
.plat1>div{padding-left: 30px;}
.plat1>div>h2{color: #505f6b;font-family: MicroSoftYaHei;font-size:30px;font-weight:normal;display: inline-block;}
.con1{width: 49%;display: inline-block}
.edit{background-image: url('../../../static/edit.png');background-repeat: no-repeat;background-position: 10% 100%;width: 25px;height:25px;display: inline-block;cursor: pointer;float: right;margin-top: 30px;margin-right: 35%;background-size: 75%;}
.new1 font,.new1 h4{display: inline-block;color: #697782;}
.new1 h4{font-size: 16px;font-weight: normal;color: #68ACFF;margin-left: 10px;}
.newtime{margin-left: 30px;color: #8A9AA6;}
.mirkefu{display: inline-block;color: #697782;margin-top: 5px;}
.con2{width: 45%;display: inline-block;float: right;border-left: 2px solid #ddd;}
.con2>h3,.con3>h3{color:#697782;font-family: '微软雅黑'}
.noticeAll li{font-size: 1rem;color:#6c8191;font-family: '微软雅黑';display: block;margin-top: 10px;margin-left: 0px;cursor: pointer;height: 22px;}
.noticeAll li:hover{background-color:#e9FAFf;}
.noticeAll li span{display: inline-block;float: right;color: #20a0ff;margin-right: 30%;}
.bortop{/* border-top: 5px solid #eee */}
.con3{width:68%;height: 290px;}
.survey>ul>li{float: left;}
.rechargeAll,.carduseAll,.useractAll{color:#20a0ff;font-size: 33px;font-weight: lighter;margin-top: 10px;display: inline-block;height: 230px;width:208px;}
.carduseAll{border-left: 1px solid #c3c3c3;border-right: 1px solid #c3c3c3;}
.rechargeAll>font,.carduseAll>font,.useractAll>font{display: block;text-align: center}
.rechargeAll>i,.carduseAll>i,.useractAll>i{display: inline-block;color: #7E8B95;font-size: 16px;margin:0 auto;}
.rechargeAll>i,.carduseAll>i,.useractAll>i{background-image: url('../../../static/money.png');width: 150px;height:30px;background-repeat: no-repeat;background-position: 20% 0%;margin:0 auto;text-align: center;padding-left: 5px;width: 230px;}
.carduseAll>i{background-image: url('../../../static/card.png');background-position: 19% 0%;display: inline-block;margin:0 auto;}
.useractAll>i{background-image: url('../../../static/user.png');background-position: 26% 0%;}
.reallcount1{font-size: 22px;color: #20a0ff;text-align: center;margin:8px 0;}
.reallcount2{font-size: 16px;color: #556572;text-align: center;display:inline-block;}
.inlineblock{display: inline-block}
.carduseAll>div,.useractAll>div{float: left;margin-left: 15px;line-height: 75%}
.con4{display: inline-block;width: 34%;position: absolute;right: 1rem;margin-top: -260px;}
.databutton{float: left;display:inline-block;height:2rem;background:#1d90e6;color: white;border:1px solid #50bfff;margin-left: 5px;border-radius: 5px;cursor: pointer;width: 80px}
.databtnAll{position: absolute;margin-top: -340px;right: 4rem;display: none}
.comtitle{color: black;}
.block{float: right;margin-top: 20px;}
.new1{width: 500px;height:60px; white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}
.new1>h4{width: 180px;height:20px; display: inline-block}
@media screen and (min-width:1900px){
.edit{margin-right: 45%;}
.con4{
  right: 8%;
  width: 35%;
}
.rechargeAll{
  width: 222px;
}
.carduseAll{padding: 0 30px;}
}
@media screen and (max-width:1440px){
  .con1>h2{
    font-size: 26px!important
  }
  .edit{background-position: 100% 0%;}
  .rechargeAll{width: 160px;}
  .rechargeAll>i{background-position: 21% 0%;margin-left: -30px}

}
@media screen and (max-width:1440px){
  .con4{right: 0}
}
.ckxq{border-bottom:1px dotted black;text-align: right;margin:10px 0 ;padding-bottom: 10px; }
.fordetail{color: #7d888e;cursor: pointer;font-size: 14px;}
.fordetail:hover{color: #409EFF;}
.upto{
    animation:mymove 1.5s infinite;
    animation-direction:alternate;
  -webkit-animation:mymove 1.5s infinite; 
  -webkit-animation-direction:alternate;
}
  @keyframes mymove
{
  from {opacity: 1;}
  to {opacity: 0.5;}
}

@-webkit-keyframes mymove
{
 from {opacity: 1;}
  to {opacity: 0.5;}
}
</style>