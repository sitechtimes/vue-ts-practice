<template>
  <AppHeader :exercise-array="exerciseArray" :current-exercise-index="currentExerciseIndex" />

  <div class="flex w-full items-start justify-between">
    <AppSidebar :current-exercise-index="currentExerciseIndex" />
    <div class="flex w-full flex-col items-center justify-center gap-8 p-8">
      <h2 class="text-3xl font-bold underline">{{ currentExercise?.name }}</h2>
      <NuxtPage />

      <div class="flex w-full flex-col items-center justify-center gap-2">
        <h2 class="text-2xl font-bold underline">Hints</h2>
        <div v-for="(hint, index) in currentExercise?.hints" :key="index" class="w-2/3">
          <Hint @click="currentExerciseHints[index] = true" :hint="hint" :index="index" :current-exercise-hints="currentExerciseHints" />
        </div>
        <p v-if="!currentExercise?.hints.length" class="text-lg italic text-neutral-600">No hints available for this exercise!</p>
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
const currentExercise = computed<Exercise | undefined>(() => {
  currentExerciseHints.value = [false, false, false];
  return exerciseArray[currentExerciseIndex.value];
});
</script>

<style scoped></style>
