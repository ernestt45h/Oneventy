<template>
    <div>
        <Row class="nav-list primary" type="flex" justify="center">

            <router-link :class="{'primary-darker': path == 'Favorites'}" class="nav-link" :to="{name: 'Favorites'}">
                <Icon type="md-heart"/>
                <p>favorites</p>
            </router-link>

            <router-link :class="{'primary-darker': path == 'Recent'}"  class="nav-link" :to="{name: 'Recent'}">
                <Icon type="md-refresh"/>
                <p>recent</p>
            </router-link>

            <router-link :class="{'primary-darker': path == 'Nearby'}"  class="nav-link" :to="{ name:'Nearby'}">
                <Icon type="md-pin"/>
                <p>nearby</p>
            </router-link>

        </Row>            
    </div>
</template>
<script>
export default {
    name: 'navs',
    watch: {
        "$route.name"(val){
            console.log
            this.path = val
        }
    },
    created() {
        console.log(this.$route)
    },
    data(){
        return{
            path: this.$route.name || ''
        }
    },
}
</script>

<style scoped>
    div{
        height: 50px;
        width: 100vw;
    }
    .nav-list{
        text-transform: capitalize;
        text-align: center;
    }
    .nav-link{
        color: #fff;
        font-size: 20px;
        width: 33vw;
    }

    p{
        font-size: 14px;
    }


</style>
