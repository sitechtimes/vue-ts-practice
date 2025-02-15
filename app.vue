<template>
  <AppHeader :exercise-array="exerciseArray" :current-exercise-index="currentExerciseIndex" />

  <div class="flex w-full items-start justify-between">
    <AppSidebar :current-exercise-index="currentExerciseIndex" />
    <NuxtPage class="w-full p-8" />
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

const currentRoute = computed(() => router.currentRoute.value.path);

const exerciseArray = Object.values(exercises).flat();
const currentExerciseIndex = computed(() => exerciseArray.findIndex((exercise) => exercise.route === currentRoute.value));
</script>

<style scoped></style>
