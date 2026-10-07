<script setup>
import { computed, ref } from 'vue'
import BillInput from '@/components/BillInput.vue'
import TipSelector from '@/components/TipSelector.vue'
import PeopleCountInput from '@/components/PeopleCountInput.vue'
import TipSummary from '@/components/TipSummary.vue'

const peopleCount = ref('')
const billAmount = ref('')
const selectTip = ref(null)
const customTip = ref('')

const isValid = computed(() => {
    const bill = Number(billAmount.value)
    const people = Number(peopleCount.value)
    const tip = Number(tipPercentage.value)

    return (
        billAmount.value !== '' &&
        peopleCount.value !== '' &&
        tipPercentage.value !== null &&
        Number.isFinite(bill) &&
        bill >= 0 &&
        Number.isInteger(people) &&
        people > 0 &&
        Number.isFinite(tip) &&
        tip >= 0
    )
})

const tipPercentage = computed(() => {
    return customTip.value !== '' ? customTip.value : selectTip.value
})

const tipPerPerson = computed(() => {
    if (!isValid.value) return 0

    return (
        (Number(billAmount.value) * Number(tipPercentage.value)) / 100 / Number(peopleCount.value)
    )
})

const totalPerPerson = computed(() => {
    if (!isValid.value) return 0

    return Number(billAmount.value) / Number(peopleCount.value) + tipPerPerson.value
})

const resetCalculator = () => {
    billAmount.value = ''
    peopleCount.value = ''
    selectTip.value = null
    customTip.value = ''
}
</script>

<template>
    <section class="tip-calculator" aria-labelledby="tipcalc-title">
        <div class="tip-calculator__wrapper">
            <h1 id="tipcalc-title" class="sr-only">Tip calculator</h1>

            <form class="tip-calculator__form">
                <div class="tip-calculator__inputs">
                    <BillInput v-model:amount="billAmount" />

                    <TipSelector v-model:selectTip="selectTip" v-model:customTip="customTip" />

                    <PeopleCountInput v-model:people-count="peopleCount" />
                </div>

                <TipSummary
                    :tip-per-person="tipPerPerson"
                    :total-per-person="totalPerPerson"
                    @reset="resetCalculator"
                />
            </form>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.tip-calculator {
    width: 100%;
    container: calculator / inline-size;

    &__wrapper {
        border-radius: $b-radius-25;
        background-color: $c-white;
    }

    &__form {
        display: grid;
        grid-template-columns: 1fr;
        gap: $spacing-600;

        @container calculator (min-width: 960px) {
            grid-template-columns: minmax(0, 1fr) minmax(0, 413px);
        }
    }

    &__inputs {
        display: grid;
        gap: $spacing-500;
    }
}
</style>
