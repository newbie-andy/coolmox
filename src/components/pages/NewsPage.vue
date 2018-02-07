<template>
    <div class="news-page">
        <section>
           <div class="news-list">
            <article v-for="(value, index) in news" :key="index">
                <div class="left">
                    <img :src="value.pic"/>
                </div>
                <div class="right">
                    <p>{{ value.title }}</p>
                </div>
            </article>
           </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "NewsPage",
        data() {
            return {
               news: []
            }
        },
        created: function() {
           
        },
        watch: {
            '$route': 'fetchData'
        },
        methods: {
            fetchData() {
                //这里预留加载的动画
                let config = {
                    url: this.coustomApi.api.getNews,
                    baseURL: '/api',
                    method: 'POST',
                    params: {
                        'channel': this.$route.params.channel,
                        'num': 30,
                        'start': 0,
                        'appkey': '1e58cd8eefb3ed489f9f3ddc00ad5486'
                    }
                }
                this.axios(config).then((res)=>{
                    //加载的动画执行成，并提示用户数据加载成功
                    console.log(res.data.result.result.list);
                    this.news = res.data.result.result.list;
                }).catch((error)=>{
                    console.log(error);
                });
            }
        }
    }
</script>

<style scoped>
   .news-list {
       display: flex;
       flex-wrap: wrap;
       width: 100%;
       box-sizing: border-box;
       padding: 30px 100px;
   }
   .news-list article {
       display: flex;
       width: 22%;
       flex-direction: column;
       margin: 0 1.5% 25px ;
       box-shadow: 0 0 16px 2px rgb(195, 195, 195);
       background: #fff;
       box-sizing: border-box;
   }
   .news-list article>.left {
       height: 200px;
       overflow: hidden;
   }
   .news-list article>.right {
       text-align: justify;
       padding: 5px 5px;
       overflow: hidden;
   }
   .news-list article>.left img {
       height: 100%;
   }
</style>