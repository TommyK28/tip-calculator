<script setup>
const peopleCount = defineModel('peopleCount')
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
                v-model.number="peopleCount"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
