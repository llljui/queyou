<template>
  <div class="nopermission">
<h1 class="text"><!-- 您无权访问 -->平台内测中....</h1>
<!-- <vue-editor v-model="content"></vue-editor> -->
<img src="../../../static/404.jpg" alt="loading" width="50%">
  </div>
</template>

<script>

export default {
  name: 'nopermission',
  data () {
    return {
    content:''
    }
  },
  component:{
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{margin:0 auto;display: block;}
.text{text-align: center;}
</style>
