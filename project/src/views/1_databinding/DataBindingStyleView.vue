<template>
    <div>
        <div style="color:blue; font-size: 30px;">스타일 바인딩: 글씨는 blue, 폰트크기: 30px</div>
        <div :style="style1">스타일 바인딩: 글씨는 blue, 폰트크기: 30px</div>
        <button @click="style1.color='yellow'">변경</button>
        <button @click="style1=style2">변경</button>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            /* 왜 변경을 눌렀는데 한번씩만 반응이 있을까요 */
            style1: { color: 'blue', fontSize: '30px' },
            style2: { color: 'green', fontSize: '20px' }
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

</style>
