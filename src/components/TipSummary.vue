<script setup>
defineProps({
    tipPerPerson: {
        type: Number,
        required: true,
    },
    totalPerPerson: {
        type: Number,
        required: true,
    },
})

const emits = defineEmits(['reset'])
</script>

<template>
    <aside class="tip-calculator__summary" aria-label="Summary">
        <div class="summary-wrapper">
            <div class="summary-row">
                <div class="summary-text">
                    <p class="summary-lable">Tip Amount</p>
                    <p class="summary-sub">/ person</p>
                </div>

                <output class="summary-value" aria-live="polite">{{
                    tipPerPerson.toFixed(2)
                }}</output>
            </div>

            <div class="summary-row">
                <div class="summary-text">
                    <p class="summary-label">Total</p>
                    <p class="summary-sub">/ person</p>
                </div>

                <output class="summary-value" aria-live="polite">{{
                    totalPerPerson.toFixed(2)
                }}</output>
            </div>
        </div>

        <button class="summary-reset" type="button" @click="emits('reset')">RESET</button>
    </aside>
</template>

<style lang="scss" scope>
.tip-calculator__summary {
    display: grid;
    background-color: $c-green-900;
    border-radius: $b-radius-15;
    padding: $spacing-450 $spacing-500;
}

.summary-wrapper {
    display: grid;
    align-self: start;
    gap: $spacing-300;
}

.summary-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.summary-text {
    color: $c-white;
    font-size: 1.6rem;

    p {
        margin: 0;
    }
}

.summary-sub {
    font-size: 1.3rem;
    color: $c-grey-400;
}

.summary-value {
    font-size: 4.8rem;
    color: $c-green-400;
}

.summary-reset {
    width: 100%;
    align-self: end;
    font-size: 2rem;
    color: $c-green-900;
    border-radius: $b-radius-5;
    background-color: $c-green-400;
    padding: $spacing-100;
    transition: $transition-default ease-in-out;

    &:hover {
        background-color: $c-green-200;
    }

    &:focus-visible {
        background-color: $c-green-200;
    }
}
</style>
