<template>
  <div class="flex w-96 flex-col items-start justify-center gap-2">
    <button class="w-full rounded-xl bg-neutral-200 px-5 py-2 hover:bg-green-500" type="button" @click="addListener">Add click listener</button>
    <button class="w-full rounded-xl bg-neutral-200 px-5 py-2 hover:bg-green-500" type="button" @click="removeListener">Remove click listener</button>
  </div>
</template>

<script setup lang="ts">
// ? Click the "Add click listener" button, click around, and then click the "Remove click listener" button. This SHOULD remove the click listener, but it doesn't.
// TODO: fix the bug described above ^^

function addListener() {
  document.addEventListener("click", (event) => handleClick(event));
}

function removeListener() {
  document.removeEventListener("click", (event) => handleClick(event));
}

// In real vue code, we wouldn't use native JS click eventListeners, we'd just add @click to an element.
// There are still uses for native JS eventListeners though, like resize events.
// In this exercise, however, I used click events because they're easier to reproduce - just click anywhere on the page, instead of resize events, where you'd have to constantly resize your window.
function handleClick(event: MouseEvent) {
  console.log(`click detected at x: ${event.clientX}, y: ${event.clientY}`);
}
</script>

<style scoped></style>
