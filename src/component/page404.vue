<template>
    <div>
        这是{{page}}页面
    </div>
</template>
<script>
    console.log('about');
    export default {
        data: () => ({
            page: '404'
        })
    }
</script>