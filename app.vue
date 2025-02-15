<template>
  <AppHeader :exercise-array="exerciseArray" :current-exercise-index="currentExerciseIndex" />

  <div class="flex w-full items-start justify-between">
    <AppSidebar :current-exercise-index="currentExerciseIndex" />
    <div class="flex w-full flex-col items-center justify-center gap-8 p-8">
      <h2 class="text-3xl font-bold underline">{{ currentExercise.name }}</h2>
      <NuxtPage />

      <div class="flex w-full flex-col items-center justify-center gap-2">
        <h2 class="text-2xl font-bold underline">Hints</h2>
        <div v-for="(hint, index) in currentExercise.hints" :key="index" class="w-2/3">
          <div
            v-if="index === 0 || currentExerciseHints[index - 1] === true"
            class="relative flex w-full items-center justify-center rounded-xl bg-neutral-200 p-6"
            :class="{ 'cursor-pointer hover:bg-neutral-300': !currentExerciseHints[index] }"
            @click="currentExerciseHints[index] = true"
          >
            <span v-if="!currentExerciseHints[index]" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold">Click to reveal hint!</span>
            <span class="text-wrap text-center" :class="{ 'blur-md': !currentExerciseHints[index] }">{{ hint }}</span>
          </div>
        </div>
        <p v-if="!currentExercise.hints.length" class="text-lg italic text-neutral-600">No hints available for this exercise!</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

const exerciseArray = Object.values(exercises).flat();

/** show hint if true at index */
const currentExerciseHints = ref<[boolean, boolean, boolean]>([false, false, false]);

const currentRoute = computed(() => router.currentRoute.value.path);

const currentExerciseIndex = computed(() => exerciseArray.findIndex((exercise) => exercise.route === currentRoute.value));
const currentExercise = computed(() => {
  currentExerciseHints.value = [false, false, false];
  return exerciseArray[currentExerciseIndex.value];
});
</script>

<style scoped></style>
