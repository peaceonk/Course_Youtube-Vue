<template>
    <div>
        <input type="text" name="" id="" v-bind:value="userId" readonly />
        <input type="text" name="" id="" :value="userId2" readonly />
        <br>
        <img :src="imgSrc" alt=""  style="width:100px; height:auto;" />
        <br>
        <input type="search" name="" id="" v-model="txt1">
        <button :disabled="txt1 === ''" @click="alert( txt1 )">조회</button>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            userId: 'peace',
            userId2: 'world',
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Peace_symbol.svg/768px-Peace_symbol.svg.png',
            txt1: ''
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        alert(msg) {
            alert(msg)
        }
    }
}
</script>

<style scoped>

</style>
