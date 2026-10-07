<script setup>
const peopleCount = defineModel('peopleCount')

const handleInput = (e) => {
    const value = e.target.value

    if (value === '') {
        peopleCount.value = ''
        e.target.value = ''
        return
    }

    const number = Number(value)

    if (Number.isInteger(number) && number > 0) {
        peopleCount.value = number
    } else {
        e.target.value = String(peopleCount.value ?? '')
    }
}
</script>

<template>
    <div class="field">
        <div class="field__header">
            <label for="">Number of people</label>
            <p class="field__error" role="alert"></p>
        </div>

        <div class="field__control">
            <span arial-hiden="true"></span>

            <input
                name="people"
                type="number"
                inputmode="numeric"
                min="1"
                step="1"
                placeholder="1"
                autocomplete="off"
                :value="peopleCount"
                @input="handleInput"
            />
        </div>
    </div>
</template>
