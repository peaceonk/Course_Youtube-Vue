<template>
    <div>
        <!-- <input type="search" name="" id="" @keyup="checkEnter($event)" v-model="searchText" /> -->
        <input type="search" name="" id="" @keyup.enter="doSearch()" v-model="searchText" />
        <!--
            .enter
            .tab
            .delete
            .space
            .esc
            .down
            .left
            .up
            .right
            .ctrl.enter
            .stop - evnet.stopPropagation()
            .prevent - evnet.preventDefault()
        -->
        <button @click="doSearch()">조회</button>
        <button @click.prevent="doSearch()">조회</button>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            searchText: '',
            selectedCityCode2: ''
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        doSearch() {
            console.log(this.searchText)
        },
        checkEnter(event) {
            if (event.keyCode === 13) {
                this.doSearch()
            }
        }
    }
}
</script>

<style scoped>

</style>
