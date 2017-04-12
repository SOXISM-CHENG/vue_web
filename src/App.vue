<template>
  <div>
    <router-view
      class="App-view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
  </div>
</template>

<script>
  export default {
    components: {}
  }
</script>
<style lang="less">
  @import "./style/learner";
</style>
