<template>
  <p>This exercise does not involve any HTML</p>
</template>

<script setup lang="ts">
// TODO: fix the function so that all tests in `objects1.test.ts` pass

/** Compares two objects and determines whether or not their contents are equal.
 * @param obj1 - The first object to compare.
 * @param obj2 - The second object to compare.
 */
function isEqual(obj1: SomeObject, obj2: SomeObject): boolean {
  return obj1 === obj2;
}

// ! dont touch anything below this line

defineExpose({ isEqual });
</script>

<style scoped></style>
