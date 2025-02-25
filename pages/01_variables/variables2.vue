<template>
  <p>This exercise does not involve any HTML</p>
</template>

<script setup lang="ts">
onMounted(async () => {
  const serverStatus = await getServerStatus();

  // TODO: refactor the below code to make `serverIsOnline` a `const` variable instead of `let`
  let serverIsOnline: boolean;

  if (serverStatus.status === "online") {
    serverIsOnline = true;
  } else {
    serverIsOnline = false;
  }
});
</script>

<style scoped></style>
