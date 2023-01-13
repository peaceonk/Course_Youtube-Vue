<template>
    <div>
        <button @click="increaseCounter">Add 1</button>
        <p>{{ counter }}</p>
        <br>
        <button @click="decreaseCounter($event)">Subtract 1</button>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            counter: 0
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        increaseCounter() {
            this.counter++
        },
        decreaseCounter(event) {
            console.log(event.target)
            this.counter--
            console.log(event.target.tagName)
        }
    }
}
</script>

<style scoped>

</style>
