<template>
    <div id="navbar" class="primary">
        <Row>
            <img src="../../assets/img/logo.png" height="50px" id="logo">
            <Col :xs=24>
                <h3>oneventy</h3>
            </Col>
            <Icon @click="drawer = true" class="menu-button" type="md-menu"></Icon>
            <Drawer title="Menu" placement="left" :closable="false" v-model="drawer">
                <Divider></Divider>
                <div class="bottom">
                    <Button @click="$store.dispatch('user/signOut')" class="dropdown-item">
                        <Col :xs=4>
                            <Icon class="complement-text" type="md-log-out"></Icon>
                        </Col>
                        <Col :xs=20>Logout</Col>
                    </Button>
                </div>
            </Drawer>
        </Row>      
    </div>
</template>
<script>
export default {
    data() {
        return {
            drawer: false
        }
    },
}
</script>

<style scoped>
    #navbar{
        width: 100vw;
        height: 50px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .15);
        text-transform: uppercase;
        text-align: center;
    }
    h3{
        position: relative;
        margin-top: 15px;
    }

    .menu-button{
        text-align: left;
        z-index: 999;
        position: absolute;
        top: 15px;
        right: 20px;
        font-size: 15px;
        cursor: pointer
    }


    .dropdown-item{
        min-width: 100%;
    }

    .bottom{
        position: fixed;
        bottom: 10px;
        width: 225px;
    }

    #logo{
        position: absolute;
        left: 10px;
    }

</style>
