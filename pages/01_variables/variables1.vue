<template>
  <p>This task does not involve any HTML</p>
</template>

<script setup lang="ts">
// ! This file has a test! Refer to the README.md of this folder for instructions on how to run the tests

/**
 * Checks if two numbers are equal
 * @param num1 - The first number
 * @param num2 - The second number
 * @returns true if the two numbers are equal, false otherwise
 */
function isEqual(num1: number, num2: number) {
  if ((num1 = num2)) {
    return true;
  } else {
    return false;
  }

  // TODO: fix this function
  // TODO: bonus points for refactoring this function to only use 1 line (ignoring these comment lines)
}

// ! dont touch anything below this line

onMounted(isEqual);
defineExpose({ isEqual });
</script>

<style scoped></style>
