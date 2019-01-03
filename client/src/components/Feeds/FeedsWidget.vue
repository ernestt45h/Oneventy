<template>
    <div>
        <Row type="flex" justify="center">
            <Button shape="circle" icon="md-musical-notes" class="widget top complement-text"></Button>
        </Row>
        <Card class="widget">
            <Col><Icon class="icon" type="md-share"></Icon></Col>
            <Col><Icon class="icon" type="ios-chatbubbles"></Icon></Col>
            <Col><Icon class="icon" type="md-pin"></Icon></Col>
            <Col><Icon class="icon" type="md-heart"></Icon></Col>
        </Card>
    </div>
</template>
<style scoped>
    .widget{
        color: #fff;
        background: #333;
        margin-right: 5px;
        border-radius: 20px 0;
        text-align: center;
    }

    .icon{
        font-size: 20px;
        margin: 15px 0;
    }



    .top{
        margin-bottom: 20px;
    }
</style>
