<template>
  <div class="flex flex-col items-center justify-center">
    <p>field 1: {{ meeting?.name?.slice(0) }}</p>
    <p>field 2: {{ meeting?.date?.toLocaleString() }}</p>
    <p>field 3: {{ meeting?.description?.slice(0) }}</p>
    <p>field 4: {{ meeting?.email?.slice(0) }}</p>
    <p>field 5: {{ meeting?.time?.slice(0) }}</p>
    <p>field 6: {{ meeting?.amountOfMoney?.toFixed(2) }}</p>
    <p>field 7: {{ meeting?.id?.toFixed(2) }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  meeting: Meeting;
}>();

onMounted(() => {
  if (props.meeting) return;

  for (const prop of ["name", "date", "description", "email", "time", "amountOfMoney", "id"]) {
    try {
      // simulate errors for each prop
      throw new Error(`Uncaught (in promise) TypeError: Cannot read properties of undefined (reading "${prop}")`);
    } catch (error) {
      console.error(error);
    }
  }
});
</script>

<style scoped></style>
