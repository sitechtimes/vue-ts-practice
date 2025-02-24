<template>
  <div class="flex w-96 items-center justify-center gap-4">
    <div class="size-40 shrink-0 rounded-xl border border-black p-4" :class="getBackgroundColor('r')">red box</div>
    <div class="size-40 shrink-0 rounded-xl border border-black p-4" :class="getBackgroundColor('g')">green box</div>
    <div class="size-40 shrink-0 rounded-xl border border-black p-4" :class="getBackgroundColor('b')">blue box</div>
  </div>
</template>

<script setup lang="ts">
// TODO: fix the colors not being applied to the divs properly

const colors = {
  r: "red",
  g: "green",
  b: "blue"
} as const;

function getBackgroundColor(color: keyof typeof colors) {
  return `bg-${colors[color]}-400`;
}
</script>

<style scoped></style>
