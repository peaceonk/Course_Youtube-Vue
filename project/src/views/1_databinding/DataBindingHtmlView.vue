<template>
    <div>문자열로 바인딩 : {{ htmlString }}</div>
    <div v-html="htmlString"></div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            htmlString: '<p style="color:blue;">파란색 문자</p>'
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>

<style scoped>
    .text-blue {
        color: blue;
    }
</style>
