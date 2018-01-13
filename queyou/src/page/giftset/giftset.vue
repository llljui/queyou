<template>
  <div class="giftset" v-loading="loading">
     <!-- <el-col :span="4"><el-input class="mrt" size="small"></el-input></el-col>
     <el-col :span="1"><el-button type="primary" size="small" class="mrt mrlt">查询</el-button></el-col> -->
    <el-col :span="1" style="margin-right:13px;"><el-button type="info" size="small" @click="lookact" class="mrt mrlt">查看奖品列表</el-button></el-col>
    <el-col :span="2" :offset='1'><el-button type="danger" size="small" class="mrt" @click="gitadd">添加活动</el-button></el-col>
    <el-col :span="2"><el-button type="info" size="small" class="mrt" @click="set_alert">弹窗配置</el-button></el-col>
    <el-col :span="2"><el-button  size="small" type="info"  class="mrt" @click="set_phb">排行榜配置</el-button></el-col>
    <!-- <el-col :span="2"><el-button  size="small" type="info"  class="mrt" @click="poster_set">代理海报生成器</el-button></el-col> -->
  <template >
  <el-table
  class="mrt"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      align="center"
      label="编号">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.id }}</span>
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      label="活动名称">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.title }}</span>
      </template>
    </el-table-column>
     <el-table-column
      align="center"
      label="游戏名称">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.cid }}</span>
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      label="活动内容">
      <template scope="scope">
        <img :src="scope.row.content" alt="loading..." width="50" height="50" style="margin-top:10px;">
       <!--  <span style="margin-left: 10px">{{ scope.row.content }}</span> -->
      </template>
    </el-table-column>
<!--     <el-table-column
  align="center"
  label="区域">
  <template scope="scope">
    <span style="margin-left: 10px">{{ scope.row.cid }}</span>
  </template>
</el-table-column> -->
    <!-- <el-table-column
      align="center"
      label="活动日期">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.dateline }}</span>
      </template>
    </el-table-column> -->
    <el-table-column label="操作" align="center">
      <template scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <!-- <el-button
          size="mini"
          type="primary"
          @click="handleLook(scope.$index, scope.row)">详情</el-button> -->
          <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
   <el-pagination
   class="fft"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="1"
      layout="prev, pager, next, jumper"
      :total="allpage">
    </el-pagination>
  <div v-show="setbor3" class="bord" @click="borshow"></div>
  <div v-show="setbor2" class="borcon modalmessage" >
    <header id="header" class="mtt">
      活动详情配置
    </header><!-- /header -->
    <el-row>
      <el-col :span="22" :offset="1">
  <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
  <el-form-item
    v-for="(domain, index) in dynamicValidateForm.domains"
    :label="'奖品' + index"
    :key="domain.key"
    :prop="'domains.' + index + '.value'"
  ><br><!-- :rules="{
      required: true, message: '奖品不能为空', trigger: 'blur'
    }" -->
    <el-input v-model="domain.name" placeholder="请输入奖品名称" class="forminput"></el-input>
    <label>奖品类型</label>
    <el-radio v-model="domain.value" label="1">红包</el-radio>
    <el-radio v-model="domain.value" label="2">钻石</el-radio>
    
    <el-upload
      class="avatar-uploader"
      action="http://monkey.queyoujia.com/public/upload"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <label>奖品图标</label>
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="btnup">点击上传</i>
    </el-upload>
    <el-input v-model="domain.gailv" placeholder="请输入奖品概率" type="number" class="mtt forminput"></el-input>   
    <el-input v-model="domain.shuliang" placeholder="请输入奖品数量" type="number" class="mtt forminput"></el-input> 
    <el-button @click.prevent="removeDomain(domain)">删除</el-button>
     <!-- <el-button @click="addDomain" type="danger">新增奖品</el-button> -->
        </el-form-item>
 <el-button @click="addDomain2" type="danger" class="mtt">新增奖品</el-button>
        <el-form-item>
          <el-button type="primary" @click="submitForm('dynamicValidateForm')" class="fft">提交</el-button>
        </el-form-item>
        </el-form>
      </el-col> 
    </el-row>
  </div>
<!----------------------------------------------------------------------------------- -->

  <div v-show="setbor" class="borcon2 modalmessage" >
    <header id="header" class="mtt">
      活动详情配置
    </header>
    <el-row>
      <el-col :span="22" :offset="1">
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign2">
          <el-form-item label="活动名称">
            <el-input v-model="formLabelAlign2.name"></el-input>
          </el-form-item>
          <el-form-item label="游戏名称">
           <el-select v-model="value" placeholder="请选择" @change="chosecid">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          </el-form-item>
         <el-form-item label="活动图标">
            <el-upload
              class="avatar-uploader"
              action="http://monkey.queyoujia.com/public/upload"
              :show-file-list="false"
              :on-success="handleAvatarSuccess2"
              :before-upload="beforeAvatarUpload2">
              <img v-if="imageUrl2" :src="imageUrl2" class="avatar" width="100" height="40">
             <i v-else class="el-icon-plus avatar-uploader-icon" style="margin-top:10px;"></i>
              <div slot="tip" class="el-upload__tip">图片大小必须是480*126</div>
            </el-upload>

         </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">保存</el-button>
            <el-button @click="borshow">取消</el-button>
          </el-form-item>
       </el-form>
      </el-col> 
    </el-row>
  </div>
</template>
<el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="20%"
  :before-close="handleClose">
  <span>配置相关参数</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="cannels">确 定</el-button>
  </span>
</el-dialog>

<div v-show="setbor4" class="lookgift modalmessage">
  <header id="header" class="mtt" style="margin:15px;">
      活动奖品配置
    </header>
  <el-table
    :data="tableData2"
    style="width: 100%">
    <el-table-column
    align="center"
      label="ID">
        <template scope="scope">
          {{ scope.row.id }}
      </template>
    </el-table-column>
    <el-table-column
    align="center"
      label="所属游戏">
        <template scope="scope">
          {{ scope.row.cid }}
      </template>
    </el-table-column>
    <el-table-column
    align="center"
      label="奖品类型">
        <template scope="scope">
          {{ scope.row.cate }}
      </template>
    </el-table-column>
    <el-table-column
     align="center"
      label="奖品">
      <template scope="scope">
          {{ scope.row.prize }}
      </template>
    </el-table-column>
    <el-table-column
    align="center"
      label="数量">
        <template scope="scope">
          {{ scope.row.num }}
      </template>
    </el-table-column>
     <el-table-column
    align="center"
      label="奖品额度">
        <template scope="scope">
          {{ scope.row.amount }}
      </template>
    </el-table-column>
    <el-table-column
    align="center"
      label="概率">
        <template scope="scope">
          {{ scope.row.chance }}
      </template>
    </el-table-column>
    <el-table-column
    align="center"
      label="图标">
        <template scope="scope">
          <img :src="scope.row.icon" alt="loading..." width="40" height="40" style="margin-top:10px;">
          <!-- {{ scope.row.icon }} -->
      </template>
    </el-table-column>
    <el-table-column label="操作" align="center" min-width="110">
      <template scope="scope">
        <el-button
          size="mini"
          @click="handleEdit2(scope.$index, scope.row)">编辑</el-button>
          <el-button
          size="mini"
          type="danger"
          @click="handleDelete2(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
   <el-pagination
   style="margin-top:10px;"
   class="fft"
      @size-change="handleSizeChange2"
      @current-change="handleCurrentChange2"
      :current-page.sync="currentPage4"
      :page-size="1"
      layout="prev, pager, next, jumper"
      :total="allpage2">
    </el-pagination>
    <el-button type="primary" size="small" style="margin:15px;" @click="handleEdit2(9001)">添加奖品</el-button>
  </div>
  <div v-show="setbor9" class="xggift">
    <el-col :span="3" :offset="1" style="color:white;text-align:center;margin-top:10px;">所属游戏</el-col>
    <el-col :span="3" style="color:white;text-align:center;margin-top:10px;">奖品类型</el-col>
    <el-col :span="3" style="color:white;text-align:center;margin-top:10px;">奖品</el-col>
    <el-col :span="3" style="color:white;text-align:center;margin-top:10px;">数量</el-col>
    <el-col :span="3" style="color:white;text-align:center;margin-top:10px;">奖品额度</el-col>
    <el-col :span="3" style="color:white;text-align:center;margin-top:10px;">概率 ‰</el-col>
    <el-col :span="3" style="color:white;text-align:center;margin-top:10px;">图标</el-col>

    <el-col :span="3" :offset="1" style="color:white;text-align:center;margin-top:10px;">
      <el-select v-model="value2" placeholder="请选择" size="medium" class="editinput">
      <el-option
      v-for="item in options2"
      :key="item.value"
      :label="item.label"
      :value="item.value">
     </el-option>
     </el-select>
    </el-col>
    <el-col :span="3" style="color:white;text-align:center;margin-top:10px;">
      <el-select v-model="value3" placeholder="请选择" size="medium" class="editinput">
      <el-option
      v-for="item in options3"
      :key="item.value"
      :label="item.label"
      :value="item.value">
     </el-option>
     </el-select>
    </el-col>
    <el-col :span="3" style="color:white;text-align:center;margin-top:10px;">
      <el-input placeholder="请输入奖品名称" size="samll" class="editinput" v-model="giftname"></el-input>
    </el-col>
    <el-col :span="3" style="color:white;text-align:center;margin-top:10px;">
      <el-input placeholder="请输入奖品数量" size="samll" v-model="giftcnt" class="editinput" type="number"></el-input>
    </el-col>
    <el-col :span="3" style="color:white;text-align:center;margin-top:10px;">
      <el-input placeholder="请输入奖品额度" size="samll" v-model="giftamount" class="editinput" type="number"></el-input>
    </el-col>
    <el-col :span="3" style="color:white;text-align:center;margin-top:10px;">
      <el-input placeholder="请输入奖品概率" size="samll" v-model="giftrand" class="editinput" type="number"></el-input>
    </el-col>
    <el-col :span="3" style="color:white;text-align:center;margin-top:10px;">
        <el-upload
          class="avatar-uploader"
          action="http://monkey.queyoujia.com/public/upload"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar" width="100" height="40">
           <i v-else class="el-icon-plus avatar-uploader-icon" style="margin-top:10px;"></i>
        </el-upload>
    </el-col>
    <el-col :span="24" style="color:white;text-align:center;margin-top:10px;">
      <el-button type="primary" @click="savegift" size="small" class="savegift">保存</el-button>
      <el-button type="danger" @click="cannelgift" size="small" class="savegift">取消</el-button>
    </el-col>
  </div>
<!--   --------------------------------------------------------------------------------------------------------- -->
  <div class="dialog3_bg" v-show="dia_3" @click="cancel_3"></div>
  <div class="dialog3_con" v-show="dia_3">
    <el-col :span="24"><header>客户端弹出窗配置</header></el-col>
    <div class="gift_set_list">
      <el-table
      :data="tableData_3"
      style="width: 100%">
      <el-table-column
        show-overflow-tooltip
        align="center"
        prop="serial"
        sortable
        label="排序">
      </el-table-column>
      <el-table-column
        show-overflow-tooltip
        align="center"
        prop="tag"
        label="标识">
      </el-table-column>
      <el-table-column
        show-overflow-tooltip
        align="center"
        prop="cid"
        label="游戏">
      </el-table-column>
      <el-table-column
        show-overflow-tooltip
        align="center"
        prop="channel"
        label="区域">
      </el-table-column>
  
      <el-table-column
        show-overflow-tooltip
        align="center"
        prop="status"
        label="是否显示">
      </el-table-column>
      <el-table-column
        show-overflow-tooltip
        align="center"
        prop="dateline"
        label="时间">
      </el-table-column>
      <el-table-column label="操作" align="center">
      <template scope="scope">
        <el-button
          size="mini"
          @click="handleEdit_3(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete_3(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
  <el-col :span="24">
    <el-button class="btn_3" @click="add_set_3">添加新配置</el-button>
  </el-col>
  </div>
 
  <div class="add_set_3_bg" @click="cancel_set_3" v-show="dia_set_3"></div>
  <div v-show="dia_set_3" class="add_content_set_3">
    <div class="_thead">
      <ul>
        <li class="">排序</li>
        <li class="">标识</li>
        <li class="">游戏</li>
        <li class="">区域</li>
        <li class="">状态</li>
      </ul>
    </div>
    <div class="_tbody">
      <ul>
        <li class="">
          <el-input type="number" placeholder="请输入序号" v-model="serial" @change="_select_tag_5"></el-input>
        </li>
        <li class="">
           <el-select v-model="value_3" placeholder="请选择" @change="_select_tag_1">
            <el-option
              v-for="item in options_3"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
           </el-select>
        </li>
        <li class="">
          <el-select v-model="value_3_2" placeholder="请选择" @change="_select_tag_2">
            <el-option
              v-for="item in options_3_2"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </li>
        <li class="">
           <el-select v-model="value_3_3" placeholder="请选择" @change="_select_tag_3">
            <el-option
              v-for="item in options_3_3"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
           </el-select>
        </li>
        <li class="">
          <el-switch
              @change="_select_tag_4"
              v-model="value3_1"
              active-text="关闭"
              inactive-text="开启">
            </el-switch>
        </li>
      </ul>
    </div>
    <el-col :span="24">
      <div style="width:95%;margin:auto;text-align:right;">
        <el-button type="danger" @click="add_pop">确定</el-button>
        <el-button  @click="cancel_set_3">取消</el-button>
      </div>
    </el-col>
  </div>

  <div class="dialog3_bg" v-show="dia_4" @click="cancel_3"></div>
  <div class="dialog3_con" v-show="dia_4">
    <el-col :span="24"><header>客户端排行榜配置</header></el-col>
    <div class="gift_set_list">
        <el-table
      :data="tableData_4"
      style="width: 100%">
      <el-table-column
        show-overflow-tooltip
        align="center"
        sortable
        prop="cid"
        label="游戏">
      </el-table-column>
      <el-table-column
        show-overflow-tooltip
        align="center"
        prop="channel"
        label="区域">
      </el-table-column>
      <el-table-column
        show-overflow-tooltip
        align="center"
        prop="iuserid"
        label="用户ID">
      </el-table-column>
      <el-table-column
        show-overflow-tooltip
        align="center"
        prop="consume"
        sortable
        label="钻石消耗">
      </el-table-column>
  
      <el-table-column
        show-overflow-tooltip
        align="center"
        prop="nickname"
        label="用户昵称">
      </el-table-column>
      <el-table-column label="操作" align="center">
      <template scope="scope">
        <el-button
          size="mini"
          @click="handleEdit_4(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete_4(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
  <el-col :span="24">
     <el-button class="btn_3" @click="add_set_4">添加新配置</el-button>
    </el-col>
  </div>
  <div class="add_set_3_bg" @click="cancel_set_3" v-show="dia_set_4"></div>
  <div v-show="dia_set_4" class="add_content_set_3">
    <div class="_thead">
      <ul>
        <li class="">游戏</li>
        <li class="">区域</li>
        <li class="">用户ID</li>
        <li class="">钻石消耗</li>
        <li class="">用户昵称</li>
      </ul>
    </div>
    <div class="_tbody">
      <ul>
        <li class="">
          <el-select v-model="phb_.value_1" placeholder="请选择" @change="php_value1">
            <el-option
              v-for="item in phb_.options1"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
           </el-select>
        </li>
        <li class="">
           <el-select v-model="phb_.value_2" placeholder="请选择">
            <el-option
              v-for="item in phb_.options2"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
           </el-select>
        </li>
        <li class="">
           <el-input type="number" placeholder="请输入游戏ID" v-model="phb_.uid" style="width:80%;"></el-input>
        </li>
        <li class="">
            <el-input type="number" placeholder="请输入钻石消耗" v-model="phb_.consume" style="width:80%;"></el-input>
        </li>
        <li class="">
            <el-input  placeholder="请输入用户昵称" v-model="phb_.nickname" style="width:80%;"></el-input>
        </li>
      </ul>
    </div>
    <el-col :span="24">
      <div style="width:95%;margin:auto;text-align:right;">
        <el-button type="danger" @click="add_phb">确定</el-button>
        <el-button  @click="cancel_set_3">取消</el-button>
      </div>
    </el-col>
  </div>
  </div>
</template>

<script>
import axios from "axios";
import qs from 'qs';
/*import { quillEditor } from 'vue-quill-editor'*/
/*var dataURL = canvas.toDataURL();
console.log(dataURL);*/

export default {
  name: 'giftset',
/*  components: {
    quillEditor
  },*/
  data () {
    return {
      hb_show:true,
      phb_:{uid:'',channel:'',consume:'',nickname:'',cid:'',options1:[{
        value: '1',
        label: '大冶棋牌'
      },{
        value: '2',
        label: '八道雀神'
      },{
        value: '3',
        label: '全民十三水'
      }],
      options2:[{
        value: 'hz',
        label: '杭州'
      },{
        value: 'fuyang',
        label: '富阳'
      },{
        value: 'default',
        label: '全国'
      }],value_1:'',value_2:'',de_or_ad:null,id:null},
      dia_set_4:false,
      tableData_4:[],
        dia_4:false,     
        add_or_edit_:null,
        pops:{
          tag:null,
          channel:null,
          cid:null,
          status:null,
          id:null
        },
        serial:'',
        value3_1: true,
        options_3:[{
          value: '1',
          label: '活动'
        }, {
          value: '2',
          label: '抽奖'
        }, {
          value: '3',
          label: '通知'
        }],
        value_3: '',
        options_3_2:[{
          value: '1',
          label: '大冶棋牌'
        }, {
          value: '2',
          label: '八道雀神'
        }, {
          value: '3',
          label: '全民十三水'
        }],
        value_3_2: '',
        options_3_3:[{
          value: 'hz',
          label: '杭州'
        }, {
          value: 'fuyang',
          label: '富阳'
        }, {
          value: 'default',
          label: '全国'
        }],
        value_3_3: '',
        dia_3:false,
        tableData_3: [],
        dia_set_3:false,
        private2:'',
        imageUrl2:'',
        loading:false,
        ids:null,
        giftamount:null,
        giftname:null,
        giftcnt:null,
        giftrand:null,
        options2: [{
          value: '1',
          label: '大冶棋牌'
        }, {
          value: '2',
          label: '八道雀神'
        }, {
          value: '3',
          label: '全民十三水'
        }],
        value2: '',
        options3: [{
          value: '1',
          label: '钻石'
        }, {
          value: '2',
          label: '红包'
        }],
        value3: '',
      setbor9:false,
      allpage2:1,
      currentPage4:1,
       tableData2: [],
       options: [{
          value: '1',
          label: '大冶棋牌'
        }, {
          value: '2',
          label: '八道雀神'
        },
        {
          value: '3',
          label: '十三水'
        }],
      value: '',
      allpage:1,
      currentPage3: 1,
      content:null,
      editorOption: {},
      jiang2:false,
      dialogVisible: false,
      posturl:"http://monkey.queyoujia.com/public/static",
      labelPosition: 'right',
      fileList: [],//{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
      setbor:false,
      setbor2:false,
      setbor3:false,
      setbor4:false,
      dynamicValidateForm: {
          domains: [{
            radio:'1',
            value: '2',
            gailv:'',
            leixing:'',
            tubiao:'',
            shuliang:'',
            name:''
          }],
          teartext: ''
        },
        formLabelAlign2: {
        gifttype:'',
          name: '',
          region: '',
          type: '',
          value1:null,
          desc:null
        },
     tableData: [],
     imageUrl: '',
     private1:null,
     listid:null,
     edorad:null,
     haledad:null
    }
  },
   methods: {
    php_value1:function (val) {
      var self=this;
      self.phb_.value_1=val;
    },
    poster_set:function () {
      window.open('http://monkey.queyoujia.com/html/qyStage/compositing.html');
    },
    add_phb:function () {
      var self=this;
      self.tableData_4=[];
      if (self.de_or_ad==1) {
         var params={cid:self.phb_.value_1,channel:self.phb_.value_2,nickname:self.phb_.nickname,iuserid:self.phb_.uid,consume:-self.phb_.consume};
        axios.post('http://monkey.queyoujia.com/fake/add',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
                        if (res.data.code==0) {
                           self.$message({
                              type: 'success',
                              message: '添加成功!'
                            });
                            self.dia_set_4=false;
                        axios.get('http://monkey.queyoujia.com/fake/list',{params:{}}).then(function (res) {
                    console.log(res);
                    self.tableData_4=res.data.data.list;
                    self.tableData_4.forEach(function (item,index) {
                    if (item.cid==1) {item.cid='大冶棋牌';item.channel='杭州'}else if(item.cid==2){item.cid='八道雀神';item.channel='富阳'}else{item.cid='全民十三水';item.channel='全国'}
                    item.consume=-Number(item.consume);
                              });
                    }).catch(function (err) {
                      console.log(err)
                    })
                        }else{

                        }
                      }).catch(function(err){
                        console.log(err);
                      })
      }
      else{
        console.log(self.phb_.value_2);
        console.log(self.phb_.value_1);
        if (self.phb_.value_2=='hz'||self.phb_.value_2=='杭州') {self.phb_.value_1=1;self.phb_.value_2='hz'}
        else if(self.phb_.value_2=='fuyang'||self.phb_.value_2=='富阳'){self.phb_.value_1=2;self.phb_.value_2='fuyang'}
        else{self.phb_.value_1=3;self.phb_.value_2='default'}
         var params={cid:self.phb_.value_1,channel:self.phb_.value_2,nickname:self.phb_.nickname,iuserid:self.phb_.uid,consume:-self.phb_.consume,id:self.phb_.id};
        axios.post('http://monkey.queyoujia.com/fake/update',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
                        if (res.data.code==0) {
                           self.$message({
                              type: 'success',
                              message: '修改成功!'
                            });
                            self.dia_set_4=false;
                        axios.get('http://monkey.queyoujia.com/fake/list',{params:{}}).then(function (res) {
                    console.log(res);
                    self.tableData_4=res.data.data.list;
                    self.tableData_4.forEach(function (item,index) {
                    if (item.cid==1) {item.cid='大冶棋牌';item.channel='杭州'}else if(item.cid==2){item.cid='八道雀神';item.channel='富阳'}else{item.cid='全民十三水';item.channel='全国'}
                    item.consume=-Number(item.consume);
                              });
                    }).catch(function (err) {
                      console.log(err)
                    })
                        }else{

                        }
                      }).catch(function(err){
                        console.log(err);
                      })
      }
    },
    add_pop:function () {
      var self=this;
      self.tableData_3=[];
      if (self.value3_1==true) {
        self.pops.status=1;
      }else if(self.value3_1==false){self.pops.status=0;}else{};
      if (self.add_or_edit_==1) {
         var params={cid:self.pops.cid,channel:self.pops.channel,serial:self.serial,status:self.pops.status,tag:self.pops.tag};
           axios.post('http://monkey.queyoujia.com/pop/add',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
                        if (res.data.code==0) {
                            self.$message({
                              type: 'success',
                              message: '添加成功!'
                            });
                             axios.get('http://monkey.queyoujia.com/pop/list',{params:{page:1}}).then(function (res) {
                               // console.log(res);
                                self.tableData_3=res.data.data.list;
                                self.tableData_3.forEach(function (item,index) {
                                 if (item.status==0) {
                                  item.status='否';
                                 }else{item.status='是';}

                                 if (item.tag==1) {
                                  item.tag='活动';
                                 }else if(item.tag==2){
                                  item.tag='抽奖'
                                 }else{ item.tag='通知'}

                                 if (item.cid==1) {
                                    item.cid='大冶棋牌';
                                    self.value_3_2='大冶棋牌';
                                    self.pops.cid=1;
                                  }else if(item.cid==2){
                                   item.cid='八道雀神';
                                   self.value_3_2='八道雀神';
                                  self.pops.cid=2;
                                  }else{item.cid='全民十三水';self.value_3_2='全民十三水';self.pops.cid=3;}

                                })
                              }).catch(function (err) {
                                console.log(err);// body...
                              })
                              self.dia_set_3=false;
                        }else{
                          self.$message({
                              type: 'warning',
                              message: res.data.message
                            });
                        }
                      }).catch(function (err) {
                        console.log(err);
                      })
      }else{
        console.log(self.pops.cid);
         if (self.pops.tag=='活动'||self.pops.tag==1) {
            self.pops.tag=1;

          }else if(self.pops.tag=='抽奖'||self.pops.tag==2){
            self.pops.tag=2;
          }else{self.pops.tag=3;}
          
          if (self.pops.cid=='大冶棋牌'||self.pops.cid==1) {
            self.pops.cid=1;
          }else if(self.pops.cid=='八道雀神'||self.pops.cid==2){
            self.pops.cid=2;
          }else{self.pops.cid=3;}
       
          if (self.pops.channel=='杭州'||self.pops.channel=='hz') {
            self.pops.channel='hz';
          }else if(self.pops.channel=='富阳'||self.pops.channel=='fuyang'){
            self.pops.channel='fuyang';
          }else/*(res.data.data.channel=='default')*/{self.pops.channel='default';}

          if (self.pops.status==true) {
            self.pops.status=1;
          }else{
            self.pops.status=0;
          }
         var params={cid:self.pops.cid,channel:self.pops.channel,serial:self.serial,status:self.pops.status,tag:self.pops.tag,id:self.pops.id};
           axios.post('http://monkey.queyoujia.com/pop/update',qs.stringify(params),{headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }}).then(function (res) {
                        if (res.data.code==0) {
                            self.$message({
                              type: 'success',
                              message: '修改成功!'
                            });
                             axios.get('http://monkey.queyoujia.com/pop/list',{params:{page:1}}).then(function (res) {
                                self.tableData_3=res.data.data.list;
                                self.tableData_3.forEach(function (item,index) {
                                 if (item.status==0) {
                                  item.status='否';
                                 }else{item.status='是';}
                                 console.log(item.tag);
                                 if (item.tag==1) {
                                  item.tag='活动';
                                 }else if(item.tag==2){
                                  item.tag='抽奖'
                                 }else{ item.tag='通知'}

                                if (item.cid==1) {
                                    item.cid='大冶棋牌';
                                    self.value_3_2='大冶棋牌';
                                    self.pops.cid=1;
                                  }else if(item.cid==2){
                                   item.cid='八道雀神';
                                   self.value_3_2='八道雀神';
                                  self.pops.cid=2;
                                  }else{item.cid='全民十三水';self.value_3_2='全民十三水';self.pops.cid=3;}

                                })
                              }).catch(function (err) {
                                console.log(err);// body...
                              })
                              self.dia_set_3=false;
                        }else{
                          self.$message({
                              type: 'warning',
                              message: res.data.message
                            });
                        }
                      }).catch(function (err) {
                        console.log(err);
                      })
      }
     
    },
     handleEdit_4(index, row) {
      var self=this;
      self.de_or_ad=2;
      self.dia_set_4=true;
      self.phb_.id=row.id;
      self.phb_.cid=row.cid;
      axios.get('http://monkey.queyoujia.com/fake/edit',{params:{id:row.id}}).then(function (res) {
        console.log(res);
        self.phb_.value_1=res.data.data.cid;
        if (self.phb_.value_1==1) {self.phb_.value_1='大冶棋牌';self.phb_.value_2='杭州'}else if(self.phb_.value_1==2){self.phb_.value_1='八道雀神';self.phb_.value_2='富阳'}else{self.phb_.value_1='全民十三水';self.phb_.value_2='全国'}
        self.phb_.nickname=res.data.data.nickname;
        self.phb_.uid=res.data.data.iuserid;
        self.phb_.consume=-res.data.data.consume;
      }).catch(function (err) {
        console.log(err);
      })
     },
     handleDelete_4(index, row){
      console.log(row);
      var self=this;
       self.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
           axios.get('http://monkey.queyoujia.com/fake/delete',{params:{id:row.id}}).then(function (res) {
        if (res.data.code==0) {
          self.$message({
            type: 'success',
            message: '删除成功!'
          });
           axios.get('http://monkey.queyoujia.com/fake/list',{params:{}}).then(function (res) {
          console.log(res);
          self.tableData_4=res.data.data.list;
          self.tableData_4.forEach(function (item,index) {
            if (item.cid==1) {item.cid='大冶棋牌';item.channel='杭州'}else if(item.cid==2){item.cid='八道雀神';item.channel='富阳'}else{item.cid='全民十三水';item.channel='全国'}
            item.consume=-Number(item.consume);
          });
          self.dia_set_4=false;
        }).catch(function (err) {
          console.log(err)
        })
        }else{
          self.$message({
            type: 'warning',
            message: res.data.message
          });
        }
      }).catch(function (err) {
       console.log(err);
      })

        }).catch(() => {
          self.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
     },
     handleEdit_3(index, row) {
        console.log(index, row);
        var self=this;
        self.add_or_edit_=2;
        self.dia_set_3=true;
        axios.get('http://monkey.queyoujia.com/pop/edit',{params:{id:row.id}}).then(function (res) {
          if (res.data.code==0) {
             console.log(res.data.data)
             self.pops.id=res.data.data.id;
 /*          for(let x in res.data.data){
            console.log(res.data.data[x]);

           }*/
          self.serial=res.data.data.serial;
          if (res.data.data.tag==1) {
            self.value_3='活动';
            self.pops.tag=1;
            console.log(self.pops.tag);
          }else if(res.data.data.tag==2){
            self.value_3='抽奖';
            self.pops.tag=2;
          }else{self.value_3='通知';self.pops.tag=3;}
          
          if (res.data.data.cid==1) {
            self.value_3_2='大冶棋牌';
            self.pops.cid=1;
          }else if(res.data.data.cid==2){
            self.value_3_2='八道雀神';
            self.pops.cid=2;
          }else{self.value_3_2='全民十三水';self.pops.cid=3;}

          if (res.data.data.channel=='hz') {
            self.value_3_3='杭州';
            self.pops.channel='hz';
          }else if(res.data.data.channel=='fuyang'){
            self.value_3_3='富阳';
            self.pops.channel='fuyang';
          }else if(res.data.data.channel=='default'){self.value_3_3='全国';self.pops.channel='default';}
          else{}

          if (res.data.data.status==1) {
            self.value_3_1=true;
            self.pops.status=1;
          }else{
            self.value_3_1=false;
            self.pops.status=0;
          }
         }
          console.log(self.pops.cid);

        }).catch(function (err) {
          console.log(err);
        })
      },
      handleDelete_3(index, row) {
        console.log(index, row);
        var self=this;
         self.$confirm('确定删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          axios.get('http://monkey.queyoujia.com/pop/delete',{params:{id:row.id}}).then(function (res) {
          if (res.data.code==0) {           
          self.$message({
            type: 'success',
            message: '删除成功!'
          });
            axios.get('http://monkey.queyoujia.com/pop/list',{params:{page:1}}).then(function (res) {
             // console.log(res);
              self.tableData_3=res.data.data.list;
              self.tableData_3.forEach(function (item,index) {
               if (item.status==0) {
                item.status='否';
               }else{item.status='是';}
               if (item.tag==1) {
                item.tag=='活动';
               }else if(item.tag==2){
                item.tag='抽奖'
               }else{ item.tag='通知'}
                if (item.cid==1) {
                self.value_3_2='大冶棋牌';
                self.pops.cid=1;
              }else if(item.cid==2){
                self.value_3_2='八道雀神';
                self.pops.cid=2;
              }else{self.value_3_2='全民十三水';self.pops.cid=3;}

              })
            }).catch(function (err) {
              console.log(err);// body...
            })
          }else{
            this.$message({
            type: 'warning',
            message: res.data.message
          });
          }
        }).catch(function (err) {
         console.log(err);
        });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },


    cannelgift:function () {
      var self=this;
      self.setbor9=false;
    },
    savegift:function () {
     // console.log(666); 
      var self=this;
      if (self.haledad==1) {
        var params={cid:self.value2,prize:self.giftname,num:self.giftcnt,chance:self.giftrand,cate:self.value3,icon:self.private1,amount:self.giftamount}
        axios.post('http://monkey.queyoujia.com/prize/add',qs.stringify(params),{headers: {
                                  'Content-Type': 'application/x-www-form-urlencoded'
                            }}).then(function (res) {
          if (res.data.code==0) {
             self.$message({
              message: '添加成功',
              type: 'success'
            });
             self.setbor9=false;
             self.tableData2=[];
             axios.get('http://monkey.queyoujia.com/prize/list',{params:{page:1}}).then(function (res) {
              self.tableData2=res.data.data.list;
              self.allpage2=res.data.data.total;
             
              console.log(self.tableData2.icon);
              self.tableData2.forEach(function (item,index) {
                if (item.cate==1) {item.cate="钻石"}else{item.cate="红包"}
              });
              self.tableData2.forEach(function (item,index) {
                if (item.cid==1) {item.cid="大冶棋牌"}else if(item.cid==2){item.cid="八道雀神"}else{item.cid="十三水"}
              });
              console.log(res);
            }).catch(function (err) {
              console.log(err)
            });

           }
          else{
             self.$message({
              message: '添加失败',
              type: 'warning'
            });
          }
        }).catch(function (err) {
          console.log(err)
        })
      }else{
        var gamename=self.value2;
        var gamecate=self.value3;
        if (gamename=='大冶棋牌') {gamename=1}
        if (gamename=='八道雀神') {gamename=2}
        if (gamename=="十三水"||gamename=="全民十三水") {gamename=3}
        if (gamecate=="红包") {gamecate=2}
        if (gamecate=="钻石") {gamecate=1}
          //console.log(self.value2+""+self.giftname+""+self.giftcnt+""+self.giftrand+""+self.private1+""+self.value3)
          var params={cid:gamename,prize:self.giftname,num:self.giftcnt,chance:self.giftrand,cate:gamecate,icon:self.private1,amount:self.giftamount,id:self.ids}
        axios.post('http://monkey.queyoujia.com/prize/update',qs.stringify(params),{headers: {
                                  'Content-Type': 'application/x-www-form-urlencoded'
                            }}).then(function (res) {
          if (res.data.code==0) {
             self.$message({
              message: '更新成功',
              type: 'success'
            });
             self.setbor9=false;
             self.tableData2=[];
             axios.get('http://monkey.queyoujia.com/prize/list',{params:{page:1}}).then(function (res) {
              self.tableData2=res.data.data.list;
              self.allpage2=res.data.data.total;
              /*self.tableData2.forEach(function (item,index) {
               item.icon='http://ouao6zxy5.bkt.clouddn.com/'+item.icon;
              });*/
              console.log(self.tableData2.icon);
              self.tableData2.forEach(function (item,index) {
                if (item.cate==1) {item.cate="钻石"}else{item.cate="红包"}
              });
              self.tableData2.forEach(function (item,index) {
                if (item.cid==1) {item.cid="大冶棋牌"}else if(item.cid==2){item.cid="八道雀神"}else{item.cid="十三水"}
              });
              console.log(res);
            }).catch(function (err) {
              console.log(err)
            });

           }
          else{
             self.$message({
              message: '更新失败',
              type: 'warning'
            });
          }
        }).catch(function (err) {
          console.log(err)
        })

      } 
    },
    handleSizeChange2:function (val) {
      console.log(val) // body...
    },
    handleCurrentChange2:function (val) {
      console.log(val)
      var self=this;
       self.tableData2=[];
       axios.get('http://monkey.queyoujia.com/prize/list',{params:{page:val}}).then(function (res) {
      self.tableData2=res.data.data.list;
      self.allpage2=res.data.data.total;
      self.tableData2.forEach(function (item,index) {
      item.icon='http://ouao6zxy5.bkt.clouddn.com/'+item.icon;
      });
      self.tableData2.forEach(function (item,index) {
        if (item.cate==1) {item.cate="钻石"}else{item.cate="红包"}
      });
      self.tableData2.forEach(function (item,index) {
        if (item.cid==1) {item.cid="大冶棋牌"}else if(item.cid==2){item.cid="八道雀神"}else{item.cid="十三水"}
      });
      console.log(res);
    }).catch(function (err) {
      console.log(err)
    });

    },
     handleEdit2(index, row) {
      var self=this;
        console.log(index, row);
        if (index==9001) {
          self.haledad=1;
          self.setbor9=true;
          self.giftname=null;
          self.giftcnt=null;
          self.giftrand=null;
          self.value3=null;
          self.value2=null;
          self.giftamount=null;
          self.ids=null;
        }else{
          self.haledad=2;
          self.setbor9=true;
          axios.get('http://monkey.queyoujia.com/prize/edit',{params:{id:row.id}}).then(function (res) {
            console.log(res);
            self.giftname=res.data.data.prize;
            self.giftcnt=res.data.data.num;
            self.giftrand=res.data.data.chance;
            self.giftamount=res.data.data.amount;
            self.private1=res.data.data.icon;
            self.ids=row.id;
            self.imageUrl=res.data.data.icon;
            if (res.data.data.cid==1) {self.value2="大冶棋牌"}else if(res.data.data.cid==2){self.value2="八道雀神"}else{self.value2="全民十三水"}
              if (res.data.data.cate==1) {self.value3="钻石"}else{self.value3="红包"}
          }).catch(function (err) {
            console.log(err);
          })
        }
      },
      handleDelete2(index, row) {
        console.log(index, row);
        var self=this;
        axios.get('http://monkey.queyoujia.com/prize/delete',{params:{id:row.id}}).then(function (res) {
          console.log(res);
          if (res.data.code==0) {
            self.$message({
              message: '删除成功',
              type: 'success'
            });
            self.setbor9=false;
             self.tableData2=[];
             axios.get('http://monkey.queyoujia.com/prize/list',{params:{page:1}}).then(function (res) {
              self.tableData2=res.data.data.list;
              self.allpage2=res.data.data.total;
              self.tableData2.forEach(function (item,index) {
                if (item.cate==1) {item.cate="钻石"}else{item.cate="红包"}
              });
              self.tableData2.forEach(function (item,index) {
                if (item.cid==1) {item.cid="大冶棋牌"}else if(item.cid==2){item.cid="八道雀神"}else{item.cid="十三水"}
              });
              console.log(res);
            }).catch(function (err) {
              console.log(err)
            });

          }else{
            self.$message({
              message:res.data.message,
              type: 'warning'
            });
          }
        }).catch(function (err) {
          console.log(err);
        })
      },
    lookact:function () {
      var self=this;
    //  self.loading=true;
      self.setbor3=true;
      self.setbor4=true;
       axios.get('http://monkey.queyoujia.com/prize/list',{params:{page:1}}).then(function (res) {
        // self.loading=false;
      self.tableData2=res.data.data.list;
      self.allpage2=res.data.data.total;
      self.tableData2.forEach(function (item,index) {
        if (item.cate==1) {item.cate="钻石"}else{item.cate="红包"}
      });
      self.tableData2.forEach(function (item,index) {
        if (item.cid==1) {item.cid="大冶棋牌"}else if(item.cid==2){item.cid="八道雀神"}else{item.cid="十三水"}
      });
      console.log(res);
    }).catch(function (err) {
      console.log(err)
    });

    },
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        var self = this;
          self.tableData=[];
         self.allpage=null;
         axios.get('http://monkey.queyoujia.com/activeconf/list',{params:{page:val}}).then(function (res) {
      self.tableData=res.data.data.list;
      self.allpage=res.data.data.total;
      self.tableData.forEach(function (item,index) {
        if (item.cid==1) {
          item.cid='大冶棋牌'
        }else if(item.cid==2){
          item.cid='八道雀神'
        }else if(item.cid==3){
          item.cid='十三水'
        }
        else{
          item.cid='未知游戏'
        }
      })
      console.log(res);
    }).catch(function (err) {
      console.log(err)
    })

      },
    onEditorBlur:function (event) {
      console.log(event);
    },
    onEditorReady:function (event) {
      console.log(event);
    },
    onEditorFocus:function (event) {
      console.log(event);
    },
    submitForm(formName) {
      var self =this;
        self.$refs[formName].validate((valid) => {
          if (valid) {
           // alert('submit!');
           console.log(valid);
            console.log(self.dynamicValidateForm);
           
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
        if (this.dynamicValidateForm.domains.length==0) {this.jiang2=true;}
        if (this.dynamicValidateForm.domains.length>0) {this.jiang2=false;}
        /*console.log(this.dynamicValidateForm.domains.length);*/
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          value: '',
          key: Date.now()
        });
      },
      addDomain2() {
        this.dynamicValidateForm.domains.push({
          value: '',
          key: Date.now(),
          tubiao:''
        });
        if (this.dynamicValidateForm.domains.length>0) {this.jiang2=false;}
      },
    cannels:function () {
     var self=this;
     self.dialogVisible = false;
     setTimeout(function () {
       self.setbor=false;
       self.setbor2=true;
       self.setbor3=true;// body...
     },500)
    },
     handleClose(done) {
      var self =this;
        self.$confirm('确认关闭？')
          .then(_ => {

            done();
          })
          .catch(_ => {});
    },
    onSubmit:function () {
      var self = this ;
      console.log('到这里了');
      if ( self.edorad==1) {
         if (self.formLabelAlign2.name&&self.value&&self.formLabelAlign2.desc) {
         var params={title:self.formLabelAlign2.name,cid:self.value,content:self.formLabelAlign2.desc};
      axios.post('http://monkey.queyoujia.com/activeconf/add',qs.stringify(params),{headers: {
                                  'Content-Type': 'application/x-www-form-urlencoded'
                            }}).then(function (res) {
        console.log(res);
        self.listid=res.data.data.id;
        console.log(self.listid);
        if (res.data.code==0) {
          self.$message({
            message: '保存成功',
            type: 'success'
          });
           axios.get('http://monkey.queyoujia.com/activeconf/list',{params:{page:1}}).then(function (res) {
            self.tableData=res.data.data.list;
            self.allpage=res.data.data.total;
            self.tableData.forEach(function (item,index) {
              if (item.cid==1) {
                item.cid='大冶棋牌'
              }else if(item.cid==2){
                item.cid='八道雀神'
              }else if(item.cid==3){
                item.cid='十三水'
              }
              else{
                item.cid='未知游戏'
              }
            })
            console.log(res);
          }).catch(function (err) {
            console.log(err)
          });
          setTimeout(function () {
           self.setbor=false;
           self.setbor2=false;
           self.setbor3=false;
           //self.dialogVisible=true;
          },2000)
        }else{
          self.$message({
            message: '添加失败',
            type: 'warning'
          });
        }
      }).catch(function (err) {
        console.log(err);
      })
    }else{
      self.$message({
            message: '请检查输入是否正确',
            type: 'warning'
          });
    }
      }
  else{
         if (self.formLabelAlign2.name&&self.value&&self.formLabelAlign2.desc) {
         var params={title:self.formLabelAlign2.name,cid:self.value,content:self.formLabelAlign2.desc,id:self.listid};
      axios.post('http://monkey.queyoujia.com/activeconf/update',qs.stringify(params),{headers: {
                                  'Content-Type': 'application/x-www-form-urlencoded'
                            }}).then(function (res) {
        console.log(res);
        self.listid=res.data.data.id;
        console.log(self.listid);
        if (res.data.code==0) {
          self.$message({
            message: '保存成功',
            type: 'success'
          });
           axios.get('http://monkey.queyoujia.com/activeconf/list',{params:{page:1}}).then(function (res) {
            self.tableData=res.data.data.list;
            self.allpage=res.data.data.total;
            self.tableData.forEach(function (item,index) {
              if (item.cid==1) {
                item.cid='大冶棋牌'
              }else if(item.cid==2){
                item.cid='八道雀神'
              }else if(item.cid==3){
                item.cid='十三水'
              }
              else{
                item.cid='未知游戏'
              }
            })
            console.log(res);
          }).catch(function (err) {
            console.log(err)
          });
          setTimeout(function () {
           self.setbor=false;
           self.setbor2=false;
           self.setbor3=false;
          // self.dialogVisible=true;
          },2000)
        }else{
          self.$message({
            message: '添加失败',
            type: 'warning'
          });
        }
      }).catch(function (err) {
        console.log(err);
      })
    }else{
      self.$message({
            message: '请检查输入是否正确',
            type: 'warning'
          });
    }
     
      }
     
    },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      handleAvatarSuccess2(res, file) {
        this.imageUrl2 = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        var self =this;
        console.log(1)
       // const isJPG = file.type === 'image/jpeg';
        //const isLt2M = file.size / 1024 / 1024 < 8;
        var reader = new FileReader();
        reader.readAsDataURL(file);

      /*  if (!isJPG) {
          this.$message.error('上传图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传图片大小不能超过 8MB!');
        }*/
         reader.onload = function(e){ 
            this.result // 这个就是base64编码了
            console.log(this.result);
            var params={file:this.result}
            axios.post('http://pay.queyoujia.com/public/upload',qs.stringify(params),{headers: {
                                            'Content-Type': 'application/x-www-form-urlencoded'
                        }}).then(function (res) {
                          if (res.data.code==0) {
                            self.private1='http://ouao6zxy5.bkt.clouddn.com/'+res.data.data.key.substring(8);
                            //console.log(self.private1.substring(8));
                            console.log(res.data.data.key);
                        /*  self.$message({
                            message: '上传成功',
                            type: 'success'
                          });*/
                        }else{
                          self.$message({
                          message: '上传失败',
                          type: 'warning'
                        });
                        }                      
                        }).catch(function (err) {
                          console.log(err);
                        })
        }
       // return isJPG && isLt2M;
      },
      beforeAvatarUpload2(file) {
        var self =this;
        console.log(1)
        var reader = new FileReader();
        reader.readAsDataURL(file);
         reader.onload = function(e){ 
            this.result // 这个就是base64编码了
            console.log(this.result);
            var params={file:this.result}
            axios.post('http://pay.queyoujia.com/public/upload',qs.stringify(params),{headers: {
                                            'Content-Type': 'application/x-www-form-urlencoded'
                        }}).then(function (res) {
                          if (res.data.code==0) {
                            self.formLabelAlign2.desc='http://ouao6zxy5.bkt.clouddn.com/'+res.data.data.key.substring(8);
                           // console.log(self.private2.substring(8));
                            //console.log(res.data.data.key);
                        }else{
                          self.$message({
                          message: '上传失败',
                          type: 'warning'
                        });
                        }                      
                        }).catch(function (err) {
                          console.log(err);
                        })
        }
      },
      handleLook:function (index,row) {
       console.log(index, row);
      },
      handleEdit(index, row) {
        console.log(index, row);
        var self=this;
        self.edorad=2;
        self.setbor=true;
        self.setbor2=false;
        self.setbor3=true;
        self.listid=row.id;
        axios.get('http://monkey.queyoujia.com/activeconf/edit',{params:{id:self.listid}}).then(function (res) {
          console.log(res);
          self.formLabelAlign2.name=res.data.data.title;
          self.formLabelAlign2.desc=res.data.data.content;
        }).catch(function (err) {
          console.log(err);
        });
      },
      handleDelete(index, row) {
        var self=this;
        console.log(index, row);
        self.listid=row.id;
        this.$confirm('此操作将删除该活动, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          axios.get('http://monkey.queyoujia.com/activeconf/delete',{params:{id:self.listid}}).then(function (res) {
          console.log(res);
          if (res.data.code==0) {
             self.$message({
            message: '成功删除',
            type: 'success'
          });
             self.tableData=[];
              axios.get('http://monkey.queyoujia.com/activeconf/list',{params:{page:1}}).then(function (res) {
            self.tableData=res.data.data.list;
            self.allpage=res.data.data.total;
           /* self.tableData.forEach(function (item,index) {
              item.content='http://ouao6zxy5.bkt.clouddn.com/'+item.content;
            })*/
            
            self.tableData.forEach(function (item,index) {
              if (item.cid==1) {
                item.cid='大冶棋牌'
              }else if(item.cid==2){
                item.cid='八道雀神'
              }else if(item.cid==3){
                item.cid='十三水'
              }
              else{
                item.cid='未知游戏'
              }
            })
            console.log(res);
          }).catch(function (err) {
            console.log(err)
          });
           }else{
             self.$message({
            message: '失败',
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
         
        /*self.setbor*/
      },
      borshow:function () {
        var self =this;
        self.setbor=false;
        self.setbor2=false;
        self.setbor3=false;
        self.setbor4=false;
        self.setbor9=false;
      },
      gitadd:function () {
        var self =this;
        self.setbor=true;
        self.setbor3=true;
        self.setbor2=false;
        self.edorad=1;
        self.formLabelAlign2.name=null;
        self.formLabelAlign2.desc=null;
        self.value=null;
      },
       handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      handlesuccess:function (response, file, fileList) {
        console.log(22);
       console.log(JSON.stringify(response)+""+JSON.stringify(file)+""+JSON.stringify(fileList));
      },
      onEditorChange:function (event) {
        var self = this;
        console.log(event.html);
        self.dynamicValidateForm.teartext=event.html;

      },
      chosecid:function (val) {
        var self=this;
        self.value=val;
       console.log(val);
      },
      set_alert:function () {
        var self=this;
        self.dia_3=true;
        console.log(2222);// body...
        axios.get('http://monkey.queyoujia.com/pop/list',{params:{page:1}}).then(function (res) {
        console.log(res);
        self.tableData_3=res.data.data.list;
        self.tableData_3.forEach(function (item,index) {
          //console.log(item.tag);
           if (item.tag==1||item.tag=='1') {
          item.tag='活动';
         }else if(item.tag==2||item.tag=='2'){
          item.tag='抽奖'
         }else{ item.tag='通知'}

         if (item.status==0) {
          item.status='否';
         }else{item.status='是';}
        
        if (item.cid==1) {
          item.cid='大冶棋牌';;
        }else if(item.cid==2){
         item.cid='八道雀神';
        }else{item.cid='全民十三水';}


        })
      }).catch(function (err) {
        console.log(err);// body...
      })
      },
      cancel_3:function () {
        var self=this;// body...
        self.dia_3=false;
        self.dia_4=false;
      },
      cancel_set_3:function () {
        var self=this;// body...
        self.dia_set_3=false;
        self.dia_set_4=false;
      },
      add_set_3:function () {
        var self=this;
        self.add_or_edit_=1;
        self.value_3='';
        self.value_3_1='';
        self.value_3_2='';
        self.value_3_3='';
        self.serial='';
        self.dia_set_3=true;
      },
      add_set_4:function () {
        var self=this;
        self.de_or_ad=1;
        self.dia_set_4=true;
      },
      _select_tag_1:function (val) {
        var self=this;
        self.pops.tag=val;
      },
      _select_tag_2:function (val) {
        var self=this;
        self.pops.cid=val;
      },
      _select_tag_3:function (val) {
        var self=this;
        console.log(val)
        self.pops.channel=val;
      },
      _select_tag_4:function (val) {
        var self=this;
        if (val==true) {
          val=1;
        }else{val=0;}
        self.pops.status=val;
      },
      _select_tag_5:function (val) {
        console.log(val);
        var self=this;
        self.serial=val;
      },
      set_phb:function () {
       console.log(23);
       var self=this;
        self.dia_4=true;
        axios.get('http://monkey.queyoujia.com/fake/list',{params:{}}).then(function (res) {
          console.log(res);
          self.tableData_4=res.data.data.list;
          self.tableData_4.forEach(function (item,index) {
            if (item.cid==1) {item.cid='大冶棋牌';item.channel='杭州'}else if(item.cid==2){item.cid='八道雀神';item.channel='富阳'}else{item.cid='全民十三水';item.channel='全国'}
            item.consume=-Number(item.consume);
          });
        }).catch(function (err) {
          console.log(err)
        })
      }

    },
    mounted() { 
      var self=this;


    axios.get('http://monkey.queyoujia.com/activeconf/list',{params:{page:1}}).then(function (res) {
      self.tableData=res.data.data.list;
      self.allpage=res.data.data.total;
      console.log(res.data.data.list);
      self.tableData.forEach(function (item,index) {
        if (item.cid==1) {
          item.cid='大冶棋牌'
        }else if(item.cid==2){
          item.cid='八道雀神'
        }else if(item.cid==3){
          item.cid='十三水'
        }
        else{
          item.cid='未知游戏'
        }
      })
      console.log(res);
    }).catch(function (err) {
      console.log(err)
    });
    //2
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mrt{margin: 10px 0;}
.mrlt{margin-left:10px;}
.bord,.borcon,.hb_bg{position: absolute;top: 0;left: 0;right: 0;bottom: 0;width: 100%;height: 100%;background-color: black;opacity: 0.55;margin: auto;z-index:666}
.borcon{width: 60%;height: 90%;background-color: white;margin: auto;z-index:667;min-width: 900px;opacity: 1;border-radius: 3px;}
.mtt{margin:10px auto;text-align: center;}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

.modalmessage{width:580px;height:720px;background: white;opacity: 1;box-shadow: 0px 0px 3px #666;border-radius: 5px;padding-top: 20px;overflow-y: scroll;}
.modalmessage::-webkit-scrollbar{border-radius: 10px;width: 5px;background-color:#b5b1b1;height: 5px;}
.modalmessage::-webkit-scrollbar-track{border-radius: 10px;background-color:#E5E9F2;} 
.modalmessage::-webkit-scrollbar-thumb{border-radius: 10px;box-shadow: inset 0 0 6px rgba(0,0,0,.3); background-color:#324057;}
.btnup{display:inline-block;background-color: #2196f3;color:white;width: 80px;height: 30px;line-height: 30px;}
.el-form-item{margin:5px 0;}
.el-select-dropdown{}
.mtt{margin:5px 0;}
.fft{float: right;}
.forminput{width: 200px;display: block}
.borcon2{position: absolute;top: 0;left: 0;right: 0;bottom: 0;margin: auto;z-index:666;width: 40%;height: 30%;background-color: white;margin: auto;z-index:667;min-width: 500px;opacity: 1;border-radius: 3px;}
.el-dialog--small{width:20%; }
.lookgift{position: absolute;top: 0;left: 0;right: 0;bottom: 0;margin: auto;z-index:666;width: 70%;height: 70%;background-color: white;margin: auto;z-index:667;min-width: 800px;opacity: 1;border-radius: 3px;}
.xggift{position: absolute;top:0;left: 0;right: 0;bottom: 0;margin: auto;z-index:666;width: 70%;height:130px;background-color: #545454;margin: auto;z-index:668;min-width: 800px;opacity: 1;border-radius: 3px;}
.savegift{float: right;margin-right: 10px;}
.el-col-4[data-v-5cbd7eb3]{width: 15.33%;margin-left: 1%;}
.editinput{width: 80%;}
.dialog3_bg,.add_set_3_bg{width: 100%;height: 100%;position:fixed;top:0;right: 0;left:0;bottom: 0;margin:auto;opacity: 0.75;background-color: black;z-index: 1233;}
.add_set_3_bg{z-index: 1255;}
.dialog3_con{position:fixed;top:0;right: 0;left:0;bottom: 0;margin:auto;background-color: white;z-index: 1234;width: 70vw;height: 70vh;border-radius: 5px;box-shadow: 0 0 3px #ddd;overflow-y: hidden;}
.dialog3_con div header{text-align: center;font-size: 18px;height:40px;line-height: 40px;border-bottom: 1px solid #ddd;}
.gift_set_list{width: 100%;height: 88%;overflow-y: scroll;}
.gift_set_list::-webkit-scrollbar{border-radius: 10px;width: 5px;background-color:#b5b1b1;height: 5px;}
.gift_set_list::-webkit-scrollbar-track{border-radius: 10px;background-color:#E5E9F2;} 
.gift_set_list::-webkit-scrollbar-thumb{border-radius: 10px;box-shadow: inset 0 0 6px rgba(0,0,0,.3); background-color:#324057;}
.btn_3{width: 100%;background-color: #878D99;color: white;border:1px solid white;}
.btn_3:hover{border:1px solid #878D99;background-color: #878D99;}
.btn_3:active{color: white;border:1px solid white;background-color: #878a99;}
.add_content_set_3{position:fixed;top:0;right: 0;left:0;bottom: 0;margin:auto;background-color: white;z-index: 1434;width: 70vw;height:150px;border-radius: 5px;box-shadow: 0 0 3px #ddd;overflow-y: hidden;}
._thead{width: 100%;height: 40px;border-bottom: 1px solid #e4e4e4;}
._tbody{margin-top: 10px;}
._thead ul,._tbody ul{display: block;height: 40px;padding: 0;margin-top: 0;}
._thead ul li,._tbody ul li{float: left;width: 20%;line-height:40px;text-align: center;height: 40px;display: inline-block;padding: 0;margin-top: 0;}
._tbody ul li:first-child{padding-left:2%;width: 18%}

</style>
