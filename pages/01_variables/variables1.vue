<template>
  <p>This exercise does not involve any HTML</p>
</template>

<script setup lang="ts">
// ! This file has a test! Refer to the README.md of this folder for instructions on how to run the tests

function isEqual(num1: number, num2: number) {
  if ((num1 = num2)) {
    return true;
  } else {
    return false;
  }

  // TODO: fix this function so that all tests in `variables1.test.ts` pass
  // TODO: optional challenge - refactor this function to only use 1 line (ignoring these comment lines)
}

// ! dont touch anything below this line

onMounted(isEqual);
defineExpose({ isEqual });
</script>

<style scoped></style>
