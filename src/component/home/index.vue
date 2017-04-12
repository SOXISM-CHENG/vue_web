<template>
    <div class='page_home'>
        <div class="banner-wrap">
            <div class="block">
                <el-carousel height="150px">
                <el-carousel-item v-for="item in 4">
                    <h3>{{ item }}</h3>
                </el-carousel-item>
                </el-carousel>
            </div>
            <div class="content">
                <div class="right-box">
                    ff
                </div>
            </div>
            <div>
                dd
            </div>
        </div>
    </div>
</template>
<script>
    console.log('home');
    export default {
        data: () => ({
            page: 'home'
        })
    }
</script>
<style lang="less">
  @import "./index.less";
</style>