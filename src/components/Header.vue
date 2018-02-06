<template>
    <div class="header">
        <a class="brand" href="">{{ siteName }}</a>
        <ul class="menus">
            <li v-for="(menu, index) in menus" :key="index">
                <router-link :to="menu.url">{{ menu.title }}</router-link>
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
                    {
                        title: "新闻",
                        url: '/news'
                    },
                    {
                        title: "资料",
                        url: '/material'
                    },
                    {
                        title: "作品",
                        url: '/works'
                    },
                    {
                        title: "关于我",
                        url: '/about'
                    }
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
