<template>
    <div>
        <!-- <select name="" id="" @change="changeCity" v-model="selectedCityCode"> -->
        <select name="" id="" v-on:change="changeCity" v-model="selectedCityCode">
            <option value="">도시선택</option>
            <option :value="city.cityCode" :key="city.cityCode" v-for="city in cityList" >{{ city.cityTitle }}</option>
        </select>
        <select name="" id="" :disabled="selectedCityCode === ''">
            <option value="">동선택</option>
            <option :value="dong.dongCode" :key="dong.dongCode" v-for="dong in selectedDongList">{{ dong.dongTitle }}</option>
        </select>
        <br>
        <select name="" id="" v-model="selectedCityCode2">
            <option value="">도시선택</option>
            <option :value="city.cityCode" :key="city.cityCode" v-for="city in cityList" >{{ city.cityTitle }}</option>
        </select>
        <select name="" id="" :disabled="selectedCityCode2 === ''">
            <option value="">동선택</option>
            <option :value="dong.dongCode" :key="dong.dongCode" v-for="dong in this.dongList.filter(dong => dong.cityCode === this.selectedCityCode2)">{{ dong.dongTitle }}</option>
        </select>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            cityList: [
                { cityCode: '02', cityTitle: '서울' },
                { cityCode: '051', cityTitle: '부산' },
                { cityCode: '064', cityTitle: '제주' }
            ],
            selectedCityCode: '',
            selectedCityCode2: '',
            dongList: [
                { cityCode: '02', dongCode: '1', dongTitle: '서울 1동' },
                { cityCode: '02', dongCode: '2', dongTitle: '서울 2동' },
                { cityCode: '02', dongCode: '3', dongTitle: '서울 3동' },
                { cityCode: '02', dongCode: '4', dongTitle: '서울 4동' },
                { cityCode: '051', dongCode: '1', dongTitle: '부산 1동' },
                { cityCode: '051', dongCode: '2', dongTitle: '부산 2동' },
                { cityCode: '051', dongCode: '3', dongTitle: '부산 3동' },
                { cityCode: '064', dongCode: '1', dongTitle: '제주 1동' },
                { cityCode: '064', dongCode: '2', dongTitle: '제주 2동' }
            ],
            selectedDongList: []
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        changeCity() {
            this.selectedDongList = this.dongList.filter(dong => dong.cityCode === this.selectedCityCode)
        }
    }
}
</script>

<style scoped>

</style>
