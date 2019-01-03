<template>
    <div>
        <navbar class="navbar"></navbar>
        <navs class="navs"></navs>
        <div class="wrapper">
            <event-type @on-change="changeCategory" :value="category"></event-type>
            <keep-alive>
                <slide-y-down-transition mode="out-in">
                    <router-view :category="category"></router-view>
                </slide-y-down-transition>
            </keep-alive>
        </div>
    </div>
</template>
<script>
import EventType from '../../components/Navbar/EventTypes'
import Navbar from '../../components/Navbar'
import Navs from '../../components/Navbar/Navs'
export default {
    components:{Navbar,Navs, EventType},
    data() {
        return {
            category: '*'
        }
    },
    methods: {
        changeCategory(val){
            console.log(val)
            this.category = val
        }
    },
}
</script>
<style scoped>
.navs, .navbar{
    position: fixed;
}

.navbar{
    top: 0;
}
.navs{
    bottom: 0;
}

.wrapper{
    margin: 50px 0;
    height: calc(100vh - 100px);
    overflow: auto;
}
</style>

