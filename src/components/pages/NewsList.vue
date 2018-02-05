<template>
    <div class="news">
        <section>
            <ul class="news-types">
                <li class="news-item">
                    <a href=""></a>
                </li>
            </ul>
            <div></div>
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
            // let config = {
            //     url: this.coustomApi.api.getChannel,
            //     baseURL: '/api',
            //     method: 'POST',
            //     data: {
            //         'appkey': '1e58cd8eefb3ed489f9f3ddc00ad5486'
            //     }
            // }
            // let newTypes = this.coustomApi.coustomRequest(config, function(data) {
            //     console.log(data);
            // }, function(error) {
            //     console.log(error);
            // })
            this.axios({
                method: 'post',
                url: 'api/channel',
                params: {
                    appkey: '1e58cd8eefb3ed489f9f3ddc00ad5486'
                }
            });
        }
    }
</script>

<style scoped>
    .news {
        display: flex;
        flex-direction: column;
    }
    ul.news-types {
        display: flex;
        width: 100%;
    }
    li.news-item a {
        padding: 8px 15px;
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
</style>