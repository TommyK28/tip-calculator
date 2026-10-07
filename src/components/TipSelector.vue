<script setup>
const tip = defineModel('selectTip')
const customTip = defineModel('customTip')
</script>

<template>
    <fieldset class="field">
        <legend>Select Tip %</legend>

        <div class="tip-grid" role="radiogroup" aria-label="Tip percentage">
            <label class="tip-option" id="tip-5">
                <input
                    id="tip-5"
                    type="radio"
                    name="tip"
                    v-model.number="tip"
                    :value="5"
                    @change="customTip = ''"
                />
                <span>5%</span>
            </label>

            <label class="tip-option" id="tip-10">
                <input
                    id="tip-10"
                    type="radio"
                    name="tip"
                    v-model.number="tip"
                    :value="10"
                    @change="customTip = ''"
                />
                <span>10%</span>
            </label>

            <label class="tip-option" id="tip-15">
                <input
                    id="tip-15"
                    type="radio"
                    name="tip"
                    v-model.number="tip"
                    :value="15"
                    @change="customTip = ''"
                />
                <span>15%</span>
            </label>

            <label class="tip-option" id="tip-25">
                <input
                    id="tip-25"
                    type="radio"
                    name="tip"
                    v-model.number="tip"
                    :value="25"
                    @change="customTip = ''"
                />
                <span>25%</span>
            </label>

            <label class="tip-option" id="tip-50">
                <input
                    id="tip-50"
                    type="radio"
                    name="tip"
                    v-model.number="tip"
                    :value="50"
                    @change="customTip = ''"
                />
                <span>50%</span>
            </label>

            <div class="tip-custom">
                <label for="tip-custom" class="sr-only">Custom tip percentage</label>
                <input
                    id="tip-custom"
                    name="tip-custom"
                    type="number"
                    inputmode="numeric"
                    min="0"
                    step="1"
                    placeholder="Custom"
                    autocomplete="off"
                    v-model.number="customTip"
                    @input="tip = null"
                />
            </div>
        </div>
    </fieldset>
</template>

<style lang="scss" scoped>
.field {
    outline: none;
    border: none;
    padding: 0;
    margin: 0;
}

legend {
    font-size: 1.6rem;
    color: $c-grey-500;
    margin-bottom: $spacing-100;
}

.tip-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: $spacing-200;
}

.tip-option {
    font-size: 2.4rem;
    color: $c-white;
    text-align: center;
    background-color: $c-green-900;
    border-radius: $b-radius-5;
    padding: $spacing-100;
    transition: $transition-default ease-in-out;
    cursor: pointer;

    input {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    }

    &:has(input:checked) {
        background-color: $c-green-400;
        color: $c-green-900;
    }

    &:hover {
        background-color: $c-green-200;
        color: $c-green-900;
    }

    &:focus-within {
        background-color: $c-green-200;
        color: $c-green-900;
    }
}

.tip-custom {
    color: $c-grey-550;
    background-color: $c-grey-50;
    transition: $transition-default ease-in-out;
    cursor: pointer;

    input {
        width: 100%;
        font-size: 2.4rem;
        text-align: center;
        background-color: inherit;
        border: 1px solid transparent;
        border-radius: $b-radius-5;
        padding: $spacing-100;

        &:focus-visible {
            border-color: $c-green-400;
            outline-color: $c-green-400;
        }
    }
}
</style>
