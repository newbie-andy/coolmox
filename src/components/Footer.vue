<template>
    <div class="footer">
        <p>{{ footerMessage }}</p>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {
                footerMessage: "coolMox 版权所有"
            }
        }
    }
</script>

<style scoped>
    .footer{
        width: 100%;
        display: flex;
        height: 80px;
        align-items: center;
        justify-content: center;
        background: #212121;
        color: #CCCCCC;
    }
</style>