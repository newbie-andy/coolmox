<template>
    <div class="news-page">
        <section>
           <div class="news">
               <article>

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
               newsTypes: []
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
                }).catch((error)=>{
                    console.log(error);
                });
            }
        }
    }
</script>

<style scoped>
   .news {
       width: 100%;
       box-sizing: border-box;
       padding: 30px 150px;
   }
   .news article {
       background: #ccc;
       height: 200px;
   }
</style>