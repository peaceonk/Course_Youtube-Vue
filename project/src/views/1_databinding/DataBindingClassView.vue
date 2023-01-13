<template>
    <div>
        <!-- 클래스가 한 단어이면 ''로 안넣어주어도 적용 -->
        <div :class="{active: isActive, 'text-red': hasError}">클래스 바인딩</div>
        <button @click="hasError = !hasError">변경</button>
        <button @click="isActive = !isActive">변경2</button>
        <br>
        <div :class="class2">클래스 바인딩2</div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            isActive: false,
            hasError: false,
            /* 클래스 true/false는 조절 안되는지? */
            class2: ['active', 'text-red']
        }
    },
    setup() { },
    created() { },
    mounted() { },
    unmounted() { },
    methods: {}
}
</script>

<style scoped>
    .active {
        background-color: greenyellow;
        font-weight: bold;
    }

    .text-red{
        color: red;
    }
</style>
