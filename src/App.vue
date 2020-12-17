<template>
  <div id="app">
  <router-view ></router-view>
  </div>
</template>
<script>
export default {
  name:'App',
  componets:{

  },
  beforeCreate:function(){
    this.$router.push("/login")
  }
 
}
</script>
<style>

</style>
