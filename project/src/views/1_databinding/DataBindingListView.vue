<template>
    <div>
        <div>
            <select name="" id="">
                <option value=""></option>
                <option :value="city.code" :key="city.code" v-for="city in cities">{{ city.title }}</option>
            </select>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>제품번호</th>
                        <th>제품명</th>
                        <th>가격</th>
                        <th>주문수량</th>
                        <th>합계</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- <tr :key='i' v-for="(drink, i) in drinkList"></tr> -->
                    <tr :key='drink.drinkId' v-for="drink in drinkList">
                        <td>{{ drink.drinkId }}</td>
                        <td>{{ drink.drinkName }}</td>
                        <td>{{ drink.price }}</td>
                        <td><input type="number" name="" id="" v-model="drink.orders" @keyup="sum()"/></td>
                        <td>{{ drink.price * drink.orders }}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><input type="number" :value="totalOrders" readonly /></td>
                        <td>{{ totalPrice }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            cities: [
                { title: '서울', code: '02' },
                { title: '부산', code: '051' },
                { title: '제주', code: '054' }
            ],
            drinkList: [
                { drinkId: '1', drinkName: '코카콜라', price: 700, orders: 0 },
                { drinkId: '2', drinkName: '델몬트오렌지주스', price: 1200, orders: 0 },
                { drinkId: '3', drinkName: '카누', price: 500, orders: 0 },
                { drinkId: '4', drinkName: '삼다수', price: 600, orders: 0 },
                { drinkId: '5', drinkName: '옥수수수염차', price: 1100, orders: 0 },
                { drinkId: '6', drinkName: '포카리', price: 900, orders: 0 },
                { drinkId: '7', drinkName: '스프라이트', price: 800, orders: 0 }
            ],
            totalOrders: 0,
            totalPrice: 0
        }
    },
    setup() { },
    created() { },
    mounted() { },
    unmounted() { },
    methods: {
        sum() {
            let totalOrders = 0
            let totalPrice = 0
            this.drinkList.forEach(function(drink) {
                totalOrders += parseInt(drink.orders)
                totalPrice += parseInt(drink.price * drink.orders)
            })
            this.totalOrders = totalOrders
            this.totalPrice = totalPrice
        }
    }
}
</script>

<style scoped>

</style>
