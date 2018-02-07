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

</style>