<template>
    <div>
        <h1>Hello {{ userName }}</h1>
        <p>{{ userMessage }}</p>
    </div>
</template>

<script>
export default {
    // view 안에서는 function을 앞에 굳이 안써줘도 됨.
    data() {
        return {
            userName: 'John Doe',
            userMessage: 'Welcome Peace World',
            sex: 'Male',
            sight: 0.9,
            size: [178, 68]
        }
    }
}
</script>

<style scoped> /* scoped는 이 파일에서만 적용  보통 공통 css 는 assets위치에 공통으로 만들기 때문에 파일에서는 scoped를 적용*/
    .text-red {
        color: red;
    }
</style>
