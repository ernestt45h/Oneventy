<template>
    <div id="auth">
        <div class="content">
            <Row type="flex" justify="center">
                <Col :xs="20" :sm="8" :lg="10">
                    <div class="info">
                        <h1><slot name="title"></slot></h1>
                        <h3><slot name="content"></slot></h3>
                    </div>
                </Col>
                <Col :xs="20" :sm="8" :lg="6">
                    <Card>
                        <div class="form">
                            <slot></slot>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    </div>
</template>
<style scoped>
    #auth{
        background: #eee;
        background-image: url('../assets/svg/route1.svg');
        background-size: 350px;
        background-repeat: no-repeat;
        background-position: 40%;
        color: #333;
        width: 100vw;
        height: 100vh;
    }

    

    h1{
        text-align: center;
        color: #26b99a;
        font-size: 50px;
        text-transform: uppercase;
    }

    h3{
        color: #ed8a19;
    }

    .form{
        margin-top: 20px; 
    }

    @media screen and (min-width: 400px) {
        .content{
            padding-top: 20vh;
        }    
    }
    
</style>
