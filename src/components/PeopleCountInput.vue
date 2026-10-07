<script setup>
import { ref } from 'vue'

const peopleCount = defineModel('peopleCount')
const errorMessage = ref('')

const handleInput = (e) => {
    const value = e.target.value

    if (e.target.validity.badInput) {
        errorMessage.value = 'Enter a whole number greater than zero.'
        e.target.value = String(peopleCount.value ?? '')
        return
    }

    if (value === '') {
        peopleCount.value = ''
        errorMessage.value = ''
        return
    }

    const number = Number(value)

    if (Number.isInteger(number) && number > 0) {
        peopleCount.value = number
        errorMessage.value = ''
    } else {
        errorMessage.value = 'Enter a whole number greater than zero.'
        e.target.value = String(peopleCount.value ?? '')
    }
}
</script>

<template>
    <div class="field">
        <div class="field__header">
            <label for="people">Number of people</label>
            <p v-if="errorMessage" id="people-error" class="field__error" role="alert">
                {{ errorMessage }}
            </p>
        </div>

        <div class="field__control">
            <span arial-hiden="true"></span>

            <input
                name="people"
                id="people"
                type="number"
                inputmode="numeric"
                min="1"
                step="1"
                placeholder="1"
                autocomplete="off"
                :value="peopleCount"
                :aria-invalid="errorMessage ? 'true' : undefined"
                :aria-describedby="errorMessage ? 'people-error' : undefined"
                @input="handleInput"
            />
        </div>
    </div>
</template>
