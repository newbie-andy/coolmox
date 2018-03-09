<template>
  <div>
      <div class="blogs-box">
        <section v-for="(blog, index) in blogs" :key="index" class="blog-item">
            <span class="circle"></span>
            <div class="item-header">{{ blog.title }}</div>
            <div class="item-content">{{ blog.summary }}</div>
            <div class="item-footer">
                <span>浏览次数：{{ blog.views }}</span>
                <span>被赞次数：{{ blog.likes }}</span>
                <span>发布时间：{{ blog.publish }}</span>
            </div>
        </section>
      </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPage',
  data() {
      return {
          blogs: [
              {
                  title: '习近平与越共中央总书记阮富仲互致新年贺信',
                  summary: '新华社北京2月8日电2月8日，中共中央总书记、国家主席习近平与越共中央总书记阮富仲互致新年贺信。新华社北京2月8日电2月8日，中共中央总书记、国家主席习近平与越共中央总书记阮富仲互致新年贺信。新华社北京2月8日电2月8日，中共中央总书记、国家主席习近平与越共中央总书记阮富仲互致新年贺信。新华社北京2月8日电2月8日，中共中央总书记、国家主席习近平与越共中央总书记阮富仲互致新年贺信。',
                  views: 320,
                  likes: 120,
                  publish: '2018-2-9'
              },
              {
                  title: '习近平与越共中央总书记阮富仲互致新年贺信',
                  summary: '新华社北京2月8日电2月8日，中共中央总书记、国家主席习近平与越共中央总书记阮富仲互致新年贺信。新华社北京2月8日电2月8日，中共中央总书记、国家主席习近平与越共中央总书记阮富仲互致新年贺信。新华社北京2月8日电2月8日，中共中央总书记、国家主席习近平与越共中央总书记阮富仲互致新年贺信。新华社北京2月8日电2月8日，中共中央总书记、国家主席习近平与越共中央总书记阮富仲互致新年贺信。',
                  views: 320,
                  likes: 120,
                  publish: '2018-2-9'
              },
              {
                  title: '习近平与越共中央总书记阮富仲互致新年贺信',
                  summary: '新华社北京2月8日电2月8日，中共中央总书记、国家主席习近平与越共中央总书记阮富仲互致新年贺信。新华社北京2月8日电2月8日，中共中央总书记、国家主席习近平与越共中央总书记阮富仲互致新年贺信。新华社北京2月8日电2月8日，中共中央总书记、国家主席习近平与越共中央总书记阮富仲互致新年贺信。新华社北京2月8日电2月8日，中共中央总书记、国家主席习近平与越共中央总书记阮富仲互致新年贺信。',
                  views: 320,
                  likes: 120,
                  publish: '2018-2-9'
              },
              {
                  title: '习近平与越共中央总书记阮富仲互致新年贺信',
                  summary: '新华社北京2月8日电2月8日，中共中央总书记、国家主席习近平与越共中央总书记阮富仲互致新年贺信。新华社北京2月8日电2月8日，中共中央总书记、国家主席习近平与越共中央总书记阮富仲互致新年贺信。新华社北京2月8日电2月8日，中共中央总书记、国家主席习近平与越共中央总书记阮富仲互致新年贺信。新华社北京2月8日电2月8日，中共中央总书记、国家主席习近平与越共中央总书记阮富仲互致新年贺信。',
                  views: 320,
                  likes: 120,
                  publish: '2018-2-9'
              }
          ]
      }
  },
  computed: {

  },
  created: function() {

  }
}
</script>

<style scoped>
    .blogs-box {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 300px;
    }
    .blog-item {
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
        padding: 20px;
        border-radius: 14px 0 0 0;
        box-shadow: 0 0 16px 2px rgb(195, 195, 195);
        position: relative;
        background: #ffffff;
        cursor: pointer;
    }
    .item-header {
        color: #3e3e3e;
        font-size: 20px;
    }
    .item-content {
        padding: 15px 0;
        text-indent: 2em;
        color: #464444
    }
    .item-footer {
        font-size: 14px;
    }
    .item-footer span {
        padding: 0 5px;
    }
    .circle {
        position: absolute;
        width: 12px;
        height: 12px;
        top: 6px;
        left: 6px;
        border-radius: 50%;
        box-shadow: 0 0 1px 1px rgb(195, 195, 195) inset;
        border: 2px solid #4A148C;
    }
</style>



