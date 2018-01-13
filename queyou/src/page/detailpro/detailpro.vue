<template>
  <div class="detailpro">
  <el-table
    class="mrt"
    :data="tableData2"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      align="center"
      prop="realName"
      label="真实姓名">
    </el-table-column>
    <el-table-column
      prop="mobile"
      align="center"
      label="手机号">
    </el-table-column>
    <el-table-column
      prop="address"
      align="center"
      label="身份证号">
    </el-table-column>
    <el-table-column
      prop="address"
      align="center"
      label="剩余钻石">
    </el-table-column>
    <el-table-column
      prop="address"
      align="center"
      label="上级游戏ID">
    </el-table-column>
    <el-table-column
      prop="address"
      align="center"
      label="上级昵称">
    </el-table-column>
    <el-table-column
      prop="address"
      align="center"
      label="剩余砖石">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import axios from 'axios';
import qs from "qs";
export default {
  name: 'detailpro',
  data () {
    return {
     tableData2: []
    }
  },
  methods:{
    tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
  },
  mounted(){
    var self=this;
    axios.get('http://monkey.queyoujia.com//user/detail',{params:{'sid':'',uid:'2061160'}}).then(function (res) {
      console.log(res.data.data);
      //self.tableData2=res.data.data;
    }).catch(function (err) {
      console.log(err);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .mrt{margin-top:16px;}
</style>
