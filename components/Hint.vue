<template>
  <div
    v-if="index === 0 || currentExerciseHints[index - 1] === true"
    class="relative flex w-full items-center justify-center rounded-xl bg-neutral-200 p-6"
    :class="{ 'cursor-pointer select-none hover:bg-neutral-300': !currentExerciseHints[index] }"
  >
    <span v-if="!currentExerciseHints[index]" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold">Click to reveal hint!</span>
    <span class="text-wrap text-center" :class="{ 'blur-md': !currentExerciseHints[index] }">{{ hint }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  hint: string;
  index: number;
  currentExerciseHints: [boolean, boolean, boolean];
}>();
</script>

<style scoped></style>
