<template>
    <div class="header">
        <a class="brand" href="">{{ siteName }}</a>
        <ul class="menus">
            <li v-for="(menu, index) in menus" :key="index">
                <a href="">{{ menu.title }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                siteName: "coolMox",
                menus: [
                    {title: "新闻"},
                    {title: "资料"},
                    {title: "作品"},
                    {title: "关于我"}
                ]
            }
        }
    }
</script>

<style scoped>
    .header {
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10%;
        background: #4A148C;
    }

    .header a {
        display: flex;
        align-items: center;
        height: 60px;
        padding: 0 15px;
        color: #fff;
    }

    .header a.brand {
        font-size: 26px;
    }
</style>
