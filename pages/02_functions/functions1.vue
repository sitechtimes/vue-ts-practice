<template>
  <p>This exercise does not involve any HTML</p>
</template>

<script setup lang="ts">
try {
  // TODO: fix this error
  // TODO: also remove the try catch once you've fixed it
  onMounted(arrowFunction);
  onMounted(regularFunction);
} catch (error) {
  console.error(error);
}

const arrowFunction = () => {
  console.log("running arrowFunction");
};

function regularFunction() {
  console.log("running regularFunction");
}
</script>

<style scoped></style>
