<template>
  <div class="flex w-96 flex-col items-start justify-center gap-2">
    <button class="w-full rounded-xl bg-neutral-200 px-5 py-2 hover:bg-green-500" type="button" @click="stringToNumber">Turn "1" into a number</button>
    <p>output: {{ displayNumber }}</p>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
// TODO: fix displayNumber turning into NaN WITHOUT passing a value to stringToNumber (must use the default parameter)

const displayNumber = ref<number>();

// * Reminder: this is a default parameter; if you don't pass a value, it will assume the value of "1"
function stringToNumber(stringToConvert = "1") {
  displayNumber.value = Number(stringToConvert);
}
</script>

<style scoped></style>
