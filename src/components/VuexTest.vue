<template>
    <div id="VuexTest">
        <h1>{{title2}}</h1>
        <div class="all_view">
            <div class="div1">

                <p>Students Marks: &nbsp; {{getMarks}}&nbsp;{{getRemark}}</p>

                <form>

                    Mathematics:<br>
                    <input v-model="items.mathematics" required><br>

                    Biology<br>
                    <input v-model="items.biology" required><br>

                    English:<br>
                    <input v-model="items.english" required><br>

                    Kiswahili:<br>
                    <input v-model="items.kiswahili" required><br>

                    Socials:<br>
                    <input v-model="items.socials" required><br>

                    Chemistry:<br>
                    <input v-model="items.chemistry" required><br>

                    Physics:<br>
                    <input v-model="items.physics" required><br>

                </form>

                <br>

                <button type="button" :disabled="submitted" @click="pressed">Add Marks&nbsp;{{getMarks}}</button>
            </div>

            <div class="div2">
                <h2>Bank</h2>
                <p>Account Balance: {{getCash}}</p>
                <form>
                    <input v-model="money_used" required>
                    <button @click="getBalance">Get Balance</button>
                </form>
                <p>Balance: {{getMoney}}</p>

            </div>

        </div>

    </div>
</template>

<script>/* eslint-disable indent */
    export default {
        name: 'VuexTest',

        data () {
            return {
                items: {},
                money_used: null,
                submitted: false,
                cash: 10000,
                getCash: this.$store.state.cash_in_bank,
                getBal: this.$store.state.money_balance
            }
        },

        computed: {

            getMarks () {
                return this.$store.getters.getMarks
            },
            title2 () {
                return this.$store.state.title2
            },
            getRemark () {
                return this.$store.getters.getRemark
            },
            getMoney () {
                return this.$store.state.money_balance
            }
        },

        mounted () {

        },

        methods: {
            pressed () {
                this.$store.commit('addMarks', this.items) // access the mutations direct
                this.items = {}
                this.submitted = true
                return this.getRemark()
                // this.$store.dispatch('addMarks', 2)
            },

            getBalance () {
                this.$store.commit('decrement_cash', this.money_used)
                this.money_used = null
            }

        }
    }
</script>

<style scoped>
    .all_view{
        width: 700px;
        margin: 0 auto;
    }

    h1, h2 {
        font-weight: normal;
    }

    .div1 {

        width: 50%;
        float: left;

    }

    .div2 {

        width: 50%;
        float: left;

    }
</style>
