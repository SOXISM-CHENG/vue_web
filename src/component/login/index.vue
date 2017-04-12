<template>
    <div>
        这是{{page}}页面
    </div>
</template>
<script>
    console.log('login');
    export default {
        data: () => ({
            page: 'login'
        })
    }
</script>