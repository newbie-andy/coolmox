<template>
    <div class="news">
        <section>
            <ul class="news-types">
                <li class="news-item" v-for="(item, index) in newsTypes" :key="index">
                    <router-link :to="{name: 'channel', params:{ channel: item }}">{{ item }}</router-link>
                </li>
            </ul>
            <router-view></router-view>
        </section>
    </div>
</template>

<script>
    export default {
        name: "NewsList",
        data() {
            return {
               newsTypes: []
            }
        },
        created: function() {
            //这里其实可以本地存储一下信息的
            let config = {
                url: this.coustomApi.api.getChannel,
                baseURL: 'https://way.jd.com/jisuapi/',
                method: 'POST',
                header:{
                    'Access-Control-Allow-Origin': '*',
                },
                params: {
                    'appkey': '1e58cd8eefb3ed489f9f3ddc00ad5486'
                }
            }
            this.axios(config).then((res)=>{
                //此新闻中没有全部的频道
                this.newsTypes = res.data.result.result;
            }).catch((error)=>{
                console.log(error);
            });
        }
    }
</script>

<style scoped>
    .news {
        flex-direction: column;
    }
    ul.news-types {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }
    ul.news-types li {
        margin: 15px 15px;
    }
    li.news-item a {
        height: 66px;
        line-height: 60px;
        padding: 6px 20px;
        border: 1px solid #E0E0E0;
        border-radius: 30px;
        color: #424242;
        transition: .5s all;
    }
    li.news-item a:hover {
        background: #673AB7;
        border-color: #673AB7;
        color: #ffffff;
    }
    li.news-item a.router-link-active {
        background: #673AB7;
        border-color: #673AB7;
        color: #ffffff;
    }
</style>