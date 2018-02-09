<template>
    <div class="news-box">
        <section class="news-detail">
            <div class="news-header">
                <p class="title">{{ newDetail.title }}</p>
                <p class="sub-title">
                    <span>{{ newDetail.category }}</span>
                    <span>{{ newDetail.src }}</span>
                    <span>{{ newDetail.time }}</span>
                </p>
            </div>
            <article>
                <img v-if="newDetail.pic" :src="newDetail.pic" />
                <div v-html="newDetail.content"></div>
            </article>
            <div class="sub-footer">
                <a :href="newDetail.url"></a>
                <a :href="newDetail.weburl"></a>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "NewsDetail",
        props:['newProps'],
        data() {
            return {
                hasProps: true,
                newDetail: ''
            }
        },
        created: function() {
            var newDetail = JSON.parse(localStorage.getItem('newdetail'));
            if(!!this.newProps) {
                var newDetailStr = JSON.stringify(this.newProps);
                localStorage.setItem('newdetail', newDetailStr);
                this.newDetail = this.newProps;
            }else if(!this.newProps && newDetail) {
                this.hasProps = false;
                this.newDetail = newDetail;
            }else {
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
    .news-detail {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 3% 15%;
    }
    .news-header {
        text-align: center;
    }
    .news-header .title {
        font-size: 24px;
        margin-bottom: 20px;
    }
    .sub-title {
        text-align: center; 
    }
    .sub-title span {
        padding: 0 10px;
    }
    .news-detail>article {
        margin-top: 100px; 
    }
    .news-detail>article>img {
        width: 100%;
        margin-bottom: 15px;
    }
</style>