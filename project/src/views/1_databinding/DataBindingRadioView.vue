<template>
    <div>
        <div>
            <input type="radio" id="html" name="" value="HTML" v-model="favoriteLang" />
            <label for="html">HTML</label>
            <input type="radio" id="css" name="" value="CSS" v-model="favoriteLang" />
            <label for="css">CSS</label>
            <input type="radio" id="js" name="" value="JS" v-model="favoriteLang" />
            <label for="js">JS</label>
        </div>
        <div>
            선택한 언어: {{ favoriteLang }}
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            favoriteLang: 'JS'
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
