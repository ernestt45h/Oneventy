<template>
    <div>
        <Card class="feed">
            <Row type="flex" justify="center">
                <h3>{{feed.title}}</h3>
            </Row>
        </Card>
        <progressive-img 
            width="100%" 
            :src="feed.image" 
            :blur="30"
            :placeholder="feed.image"
            />
        <Card class="feed">
            <Row type="flex" justify="center">
                <h3><Icon type="md-time"></Icon> <Time :time="Date.now() + 60 * 60 * 24 * 3 * 1000"></Time></h3>
            </Row>
        </Card>
    </div>
</template>
<script>
import PImage from 'vue-progressive-image'
export default {
    props:['feed'],
    components:{PImage},
    data() {
        return {
            onLoad: false,
            onError: false
        }
    },
}
</script>
<style scoped>
    .feed{
        background: #333;
        color: #fff;
    }

    img{
        box-shadow: 0 2px 4px rgba(0, 0, 0, .25)
    }
</style>

