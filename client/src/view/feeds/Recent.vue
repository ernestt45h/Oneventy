<template>
    <Row class="feeds" type="flex" justify="center">
        <Col :xs=24 :sm=10 :lg=5 v-for="(feed, index) in feeds" :key="index" >
            <div class="feed">
                <Row>
                    <Col :xs=4>
                        <widget/>   
                    </Col>
                    <Col :xs=20>
                        <router-link :to="feed.id">
                            <feed :feed="feed"></feed>
                        </router-link>
                    </Col>
                </Row>
            </div>
        </Col>
    </Row>
</template>
<script>
import { mapState } from 'vuex'
import Feed from '../../components/Feeds/FeedPallet'
import Widget from '../../components/Feeds/FeedsWidget'
export default {
    watch: {
        category(val){
            this.fetchRecent(val)
        }
    },
    props: ['category'],
    components:{Feed, Widget},
    computed: mapState({
        feeds: state=> state.events.recent
    }),
    methods: {
        fetchRecent(val){
            this.$store.dispatch('events/fetchRecent', {category: val})
        }
    },
    created() {
        this.fetchRecent(this.category)
    },
}
</script>
<style scoped>
    .feed{
        margin: 10px;
    }
</style>