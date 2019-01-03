<template>
    <Row v-if="condition" justify="center" type="flex" class="primary">
        <Select placeholder="All" v-model="category" >
            <Option v-for="item in categories" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
    </Row>
</template>
<script>
export default {
    props:['value'],
    watch: {
        category(val){
            this.$emit('on-change', val)
        }
    },
    data() {
        return {
            condition: this.$route.name == 'Recent' || this.$route.name == 'Favorites',
            category: this.value,
            categories: [
                {value: '*', label: 'All'},
                {value: 'gaming', label: 'Gaming'}
            ]
        }
    },
}
</script>

