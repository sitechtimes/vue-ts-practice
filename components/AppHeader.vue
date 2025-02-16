<template>
  <header class="flex h-16 w-full items-center justify-around gap-2 border-b-2 border-neutral-300 bg-white shadow-lg">
    <div :class="{ 'du-tooltip du-tooltip-bottom': currentExerciseIndex <= 0 }" data-tip="You're on the first exercise!">
      <button
        class="flex select-none items-center justify-center gap-2 rounded-xl bg-neutral-200 px-10 py-1.5 active:scale-90"
        :class="currentExerciseIndex > 0 ? 'group hover:bg-neutral-300' : 'cursor-not-allowed opacity-50'"
        :disabled="currentExerciseIndex <= 0"
        type="button"
        @click="router.push(exerciseArray[currentExerciseIndex - 1].route)"
      >
        <img class="size-5 group-hover:-translate-x-1.5" src="/arrowLeft.svg" aria-hidden="true" />
        <span class="translate-y-[0.0625rem] text-xl font-medium">Back</span>
      </button>
    </div>

    <h1 class="select-none text-3xl">
      <span class="font-bold text-green-700">Vue</span>
      <span class="font-semibold text-neutral-900"> +</span>
      <span class="font-bold text-blue-700"> TS</span>
      <span class="font-semibold text-neutral-900"> for Dummies</span>
    </h1>

    <div :class="{ 'du-tooltip du-tooltip-bottom': currentExerciseIndex >= exerciseArray.length - 1 }" data-tip="You're on the last exercise!">
      <button
        class="flex select-none items-center justify-center gap-2 rounded-xl bg-neutral-200 px-10 py-1.5 active:scale-90"
        :class="currentExerciseIndex < exerciseArray.length - 1 ? 'group hover:bg-neutral-300' : 'cursor-not-allowed opacity-50'"
        :disabled="currentExerciseIndex >= exerciseArray.length - 1"
        type="button"
        @click="router.push(exerciseArray[currentExerciseIndex + 1].route)"
      >
        <span class="translate-y-[0.0625rem] text-xl font-medium">Next</span>
        <img class="size-5 group-hover:translate-x-1.5" src="/arrowRight.svg" aria-hidden="true" />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
const props = defineProps<{
  exerciseArray: Exercise[];
  currentExerciseIndex: number;
}>();

const router = useRouter();
</script>

<style scoped></style>
