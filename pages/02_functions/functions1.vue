<template>
  <p>This exercise does not involve any HTML</p>
</template>

<script setup lang="ts">
// TODO: fix this error
onMounted(arrowFunction);
onMounted(regularFunction);

const arrowFunction = () => {
  console.log("running arrowFunction");
};

function regularFunction() {
  console.log("running regularFunction");
}
</script>

<style scoped></style>
