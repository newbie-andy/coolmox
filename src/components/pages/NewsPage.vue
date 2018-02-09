<template>
    <div class="news-page">
        <section>
           <div class="news-list">
            <article v-for="(value, index) in news" :key="index" @click="pushTo(value)">
                <div class="left bgsize"
                    :style="{background: 'url('+value.pic+') center center/cover no-repeat'}">
                </div>
                <div class="right">
                    <div class="news-title">
                        <span class="category">{{ value.category }}</span>
                        <span>{{ value.title }}</span>
                    </div>
                    <div class="out-message">
                        <span v-if="value.src">{{ value.src }}</span>
                        <span v-else>{{ '无出处' }}</span>
                        <span>{{ value.time }}</span>
                    </div>
                </div>
            </article>
           </div>
           <article class="load-more">
             <span id="load-sign"></span>
             <span>正在努力的加载中...</span>
           </article>
        </section>
    </div>
</template>

<script>
    export default {
        name: "NewsPage",
        data() {
            return {
               fetching: false,
               config: {
                    url: this.coustomApi.api.getNews,
                    baseURL: '/api',
                    method: 'POST',
                    params: {
                        'channel': '',
                        'num': 20,
                        'start': 0,
                        'appkey': this.coustomApi.appcode
                    },
                    page: 0,
               },
               news: []
            }
        },
        created: function() {
           this.getByChangeChannel();
           document.addEventListener('scroll', () => {
               var docuemntHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
               var dynamicScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
               var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
               if((dynamicScrollTop + clientHeight + 300 >= docuemntHeight) && !this.fetching) {
                   this.config.params.start = (++this.config.page) * this.config.params.num;
                   this.fetchData();
               }
           })
        },
        watch: {
            '$route': 'getByChangeChannel'
        },
        methods: {
            getByChangeChannel() {
                this.config.params.channel = this.$route.params.channel;
                this.config.page = 0;
                this.news = [];
                this.fetchData();
            },
            fetchData() {
                if(this.fetching) {
                    return;
                }else{
                    this.fetching = true;
                }
                //这里预留加载的动画
                this.axios(this.config).then((res)=>{
                    //加载的动画执行成，并提示用户数据加载成功
                    this.news = this.news.concat(res.data.result.result.list);
                    this.fetching = false;
                }).catch((error)=>{
                    console.log(error);
                });
            },
            pushTo(params) {
                this.$router.push({
                    name: 'detail',
                    params: {
                        newProps: params,
                        title: params.title
                    }
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
       padding: 5px 5px;
   }
   .news-list article>.right>.news-title {
       display: -webkit-box;
       text-overflow:ellipsis;
       -webkit-line-clamp: 1;  /*限制在一个块元素显示的文本的行数*/
       -webkit-box-orient: vertical;
       overflow: hidden;
   }
   .category {
       padding: 1px 3px;
       border-radius: 3px;
       background: #673AB7;
       color: #fff;
       border: 1px solid #673AB7;
   }
   .out-message {
       display: flex;
       justify-content: space-between;
       font-size: 14px;
       margin-top: 5px;
       color:#424242;
   }
   .out-message>span {
       line-height: 20px;
   } 
   .load-more {
       display: flex;
       justify-content: center;
   }
   .load-more span:nth-child(2) {
       padding: 5px 20px;
       box-shadow: 0 0 16px 2px rgb(195, 195, 195);
       background: #ffffff;
   }
</style>