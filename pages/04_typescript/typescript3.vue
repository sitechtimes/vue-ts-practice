<template>
  <p>This exercise does not involve any HTML</p>
</template>

<script setup lang="ts">
type user = {
  name: string;
};

// * There's not really a problem to solve in this file, but look at this variable.
// * At first glance it's hard to tell apart the variable name and its type - you have to really look at it to see the difference
// ! this is a reminder to use PascalCase for type and interface names to avoid situations like this!!!!!
// TODO: rename the user type to use PascalCase
const user: user = {
  name: "yo mama"
};
</script>

<style scoped></style>
