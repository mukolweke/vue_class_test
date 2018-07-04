import Vuex from 'vuex'
import Vue from 'vue'
/* eslint-disable indent */
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        marks: 0,
        count: 0,
        title: 'myBlog.me',
        title2: 'vueClass',
        remark1: 'Below Average',
        remark2: 'Good',
        remark3: 'Excellent',
        cash_in_bank: 10000,
        money_balance: 0
    },

    mutations: { // always synchronous

        addMarks (state, items) {
            state.marks = (Number(items.mathematics) + Number(items.biology) + Number(items.chemistry) + Number(items.physics) + Number(items.socials) + Number(items.kiswahili) + Number(items.english))
        },

        increment_bank (state, payload) {
            this.cash_in_bank += payload
        },

        decrement_cash (state, payload) {
            this.money_balance = (this.cash_in_bank - Number(payload))
        }
    },

    getters: {

        getMarks (state) {
          return state.marks
        },

        getRemarks (state) {
            if (this.marks < 50) {
                return state.remark1
            } else if (this.marks < 70) {
                return state.remark2
            } else {
                return state.remark3
            }
        },

        getCash (state) {
            return this.cash_in_bank
        },
        getMoneyBalance (state) {
            return this.money_balance
        }

    }
})

export default store
