<template>
    <div class="news">
        <div class="news_list" v-for="(news, index) in allNews.articles" :key="index">
            <div class="posts">
                <div class="title">
                    {{ news.title }}
                </div>
                <div class="content">
                    {{ news.content }}
                </div>
                <div class="author">
                    {{ news.author }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'NewsPage',
    computed: {
        ...mapGetters(['allNews']),
    },
    mounted() {
        this.getAllNews()
    },
    methods: {
        ...mapActions(['getAllNews'])
    }
}
</script>

<style lang="scss" scoped>
.news {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    overflow-x:hidden;
}
.posts {
    border: 0.6px #c3c3c3 solid;
    padding: 15px;
    .title {
        font-size: 20px;
        font-weight: 700;
    }
    .author {
        font-size: 15px;
        font-weight: 500;
    }
}
</style>