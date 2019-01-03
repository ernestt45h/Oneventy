<template>
    <div>
        <Row type="flex" justify="center">
            <Col v-if="error">
                <h1>Sorry Event Not Found</h1>
            </Col>
            <Col v-if="feed" :xs="24">
                <progressive-img 
                    width="100%" 
                    :src="feed.image" 
                    :blur="30"
                    :placeholder="feed.image"
                    />
                <div class="content">
                    <Row type="flex" justify="center">
                        <Col :xs=22>
                            <h1>{{feed.title}}</h1>
                            <p>{{feed.description}}</p>
                        </Col>
                    </Row>

                    {{feed}}
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            feed: null,
            error: false
        }
    },
    created() {
        this.$store.dispatch('events/fetchById', this.$route.params.id).then((result) => {
            this.feed = result
        }).catch((err) => {
            this.error = true
        });
    },
}
</script>
<style scoped>
    .content{
        text-align: center;
        margin-top: -5px;
        background: #333;
        color: #fff;
    }
</style>
