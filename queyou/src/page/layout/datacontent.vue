<template>
  <div class="dataContent" :key="keys" v-bind:style="{width:slideHeight}">
    	<router-view :key="key"></router-view>
  </div>
</template>
<script>
export default {
  name: 'dataContent',
  data () {
    return {
    slideHeight:null
    }
  },
  computed:{
    key(){
       return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    },
    keys(){
      //this.slideHeight=window.screen.availHeight-40+'px';
    }
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dataContent{clear: both;min-height:550px;background-color: white;min-width: 900px;}
</style>