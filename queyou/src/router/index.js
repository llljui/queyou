import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)
import Layout from '../page/layout/Layout'
export default new Router({
  routes: [
  	{ path: '/login',name:'注册',component: _import('login/index'), hidden: true },
    { path: '/authredirect', component: _import('login/authredirect'), hidden: true },
    { path: '/mobile',name:'雀游后台手机版',component: _import('mobile/mobile'), hidden: true },
    { path: '/', component: _import('login/index'), hidden: true },
    //{ path: '/401', component: _import('errorPage/401'), hidden: true },
    {
      path: '/',
      component: Layout,
      redirect: '401',
      hidden: true,
      noDropdown: true,
      children: [{ path: '401',name:'', component: _import('errorPage/401') }]
    },
    //////////
    {
      path: '/',
      component: Layout,
      redirect: 'login',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'login',name:'平台概况', component: _import('login/index') }]
    },
    {
      path:'/recharge',
      component:Layout,
      redirect: 'recharge/recharge',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'recharge', name:'充值统计', component: _import('recharge/recharge') }]
    },
    {
      path:'/manualdebit',
      component:Layout,
      redirect: 'manualdebit/manualdebit',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'manualdebit', name:'人工划账', component: _import('manualdebit/manualdebit') }]
    },
    {
      path:'/platformagent',
      component:Layout,
      redirect: 'platformagent/platformagent',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'platformagent',  name:' ', component: _import('platformagent/platformagent')}]
    },
    {
      path:'/rechargedetails',
      component:Layout,
      redirect: 'rechargedetails/rechargedetails',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'rechargedetails', name:'充值明细', component: _import('rechargedetails/rechargedetails') }]
    },
    {
      path:'/returndetails',
      component:Layout,
      redirect: 'returndetails/returndetails',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'returndetails',name:'返现明细', component: _import('returndetails/returndetails') }]
    },
     {
      path:'/rechargedetails2',
      component:Layout,
      redirect: 'rechargedetails2/rechargedetails2',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'rechargedetails2', name:'0', component: _import('rechargedetails2/rechargedetails2') }]
    },
     {
      path:'/privilege',
      component:Layout,
      redirect: 'privilege/Privilege',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'privilege', name:'权限设置', component: _import('privilege/Privilege') }]
    },
    {
      path:'/promoters',
      component:Layout,
      redirect: 'promoters/promoters',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'promoters', name:'推广员授权', component: _import('promoters/promoters') }]
    },
    {
      path:'/prodetail',
      component:Layout,
      redirect: 'prodetail/prodetail',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'prodetail', name:'推广员明细', component: _import('prodetail/prodetail') }]
    },{
      path:'/menu',
      component:Layout,
      redirect: 'menu/menu',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'menu', name:'菜单管理', component: _import('menu/menu') }]
    },
    {
      path:'/rgqz',
      component:Layout,
      redirect: 'rgqz/rgqz',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'rgqz', name:'人工清钻', component: _import('rgqz/rgqz') }]
    },
    {
      path:'/zsjwcx',
      component:Layout,
      redirect: 'zsjwcx/zsjwcx',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'zsjwcx', name:'玩家账号钻石交往查询', component: _import('zsjwcx/zsjwcx') }]
    },
    {
      path:'/ranking',
      component:Layout,
      redirect: 'ranking/ranking',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'ranking', name:'排行榜', component: _import('ranking/ranking') }]
    },
    {
      path:'/detailpro',
      component:Layout,
      redirect: 'detailpro/detailpro',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'detailpro', name:'用户明细', component: _import('detailpro/detailpro') }]
    },
    {
      path:'/giftset',
      component:Layout,
      redirect: 'giftset/giftset',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'giftset', name:'活动配置', component: _import('giftset/giftset') }]
    },
    {
      path:'/smrz',
      component:Layout,
      redirect: 'smrz/smrz',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'smrz', name:'实名认证', component: _import('smrz/smrz') }]
    },
    {
      path:'/withdrawals',
      component:Layout,
      redirect: 'withdrawals/withdrawals',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'withdrawals', name:'提现记录', component: _import('withdrawals/withdrawals') }]
    },
    {
      path:'/luckdraw',
      component:Layout,
      redirect: 'luckdraw/luckdraw',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'luckdraw', name:'抽奖记录', component: _import('luckdraw/luckdraw') }]
    },{
      path:'/authority',
      component:Layout,
      redirect: 'authority/authority',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'authority', name:'接口菜单', component: _import('authority/authority') }]
    },{
      path:'/packageversion',
      component:Layout,
      redirect: 'packageversion/packageversion',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'packageversion', name:'游戏包上传配置', component: _import('packageversion/packageversion') }]
    },{
      path:'/analysis',
      component:Layout,
      redirect: 'analysis/analysis',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'analysis', name:'人数分析', component: _import('analysis/analysis') }]
    },{
      path:'/channels',
      component:Layout,
      redirect: 'channels/channels',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'channels', name:'区域管理', component: _import('channels/channels') }]
    },{
      path:'/charts',
      component:Layout,
      redirect: 'charts/charts',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'charts', name:'用户查询', component: _import('charts/charts') }]
    },
    {
      path:'/redEnvelope',
      component:Layout,
      redirect: 'redEnvelope/redEnvelope',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'redEnvelope', name:'红包记录', component: _import('redEnvelope/redEnvelope') }]
    },
    {
      path:'/comsumelist',
      component:Layout,
      redirect: 'comsumelist/comsumelist',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'comsumelist', name:'消耗记录', component: _import('comsumelist/comsumelist') }]
    },
    {
      path:'/purpose',
      component:Layout,
      redirect: 'purpose/purpose',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'purpose', name:'代理申请意向', component: _import('purpose/purpose') }]
    },
    {
      path:'/perdetails',
      component:Layout,
      redirect: 'perdetails/perdetails',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'perdetails', name:'提现/返现明细', component: _import('perdetails/perdetails') }]
    },
    {
      path:'/commissionReturn',
      component:Layout,
      redirect: 'commissionReturn/commissionReturn',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'commissionReturn', name:'代理返佣', component: _import('commissionReturn/commissionReturn')}]
    },
    {
      path:'/outline',
      component:Layout,
      redirect: 'outline/outline',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'outline', name:'用户违规处理', component: _import('outline/outline') }]
    },
    {
      path:'/custouser',
      component:Layout,
      redirect: 'custouser/custouser',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'custouser', name:'代理下级消耗', component: _import('custouser/custouser') }]
    },
    {
      path:'/diatocoin',
      component:Layout,
      redirect: 'diatocoin/diatocoin',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'diatocoin', name:'兑换中心', component: _import('diatocoin/diatocoin') }]
    },
    {
      path:'/agent',
      component:Layout,
      redirect: 'agent/agent',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'agent', name:'代理概况', component: _import('agent/agent') }]
    },
    {
      path:'/platformagent/login',
      component:Layout,
      redirect: '/login',
      hidden: true,
      noDropdown: true,
      component: _import('login/index'), hidden: true
    },
   {
      path:'/returndetails/login',
      component:Layout,
      redirect: '/login',
      hidden: true,
      noDropdown: true,
      component: _import('login/index'), hidden: true
    },
   {
      path:'/manualdebit/login',
      component:Layout,
      redirect: '/login',
      hidden: true,
      noDropdown: true,
      component: _import('login/index'), hidden: true
    },
   {
      path:'/rechargedetails/login',
      component:Layout,
      redirect: '/login',
      hidden: true,
      noDropdown: true,
      component: _import('login/index'), hidden: true
    },
   {
      path:'/recharge/login',
      component:Layout,
      redirect: '/login',
      hidden: true,
      noDropdown: true,
      component: _import('login/index'), hidden: true
    },
    {
      path:'/recharge/login',
      component:Layout,
      redirect: '/privilege',
      hidden: true,
      noDropdown: true,
      component: _import('login/index'), hidden: true
    },
    {
      path:'/log',
      component:Layout,
      redirect: 'log/log',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'log', name:'操作日志', component: _import('log/log') }]
    },
    {
      path:'/transfer',
      component:Layout,
      redirect: 'transfer/transfer',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'transfer',name:'代理后台转账权限', component: _import('transfer/transfer')}]
    },
    {
      path:'/teammove',
      component:Layout,
      redirect: 'teammove/teammove',
      hidden: true,
      noDropdown: true,
      children: [{ path: 'teammove',name:'代理下级会员转移', component: _import('teammove/teammove')}]
    }
  ]
})
