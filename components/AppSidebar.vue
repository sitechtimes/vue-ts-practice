<template>
  <div class="sticky left-0 top-16 flex h-[calc(100dvh-4rem)] w-80 shrink-0 flex-col items-center justify-start border-r-2 border-neutral-300 bg-white p-4 shadow-lg">
    <h2 class="select-none text-center text-2xl font-semibold">Quick Navigation</h2>

    <ul class="mt-4 flex h-[80dvh] w-full flex-col items-start justify-start gap-2 overflow-y-scroll">
      <li class="w-full px-4 py-2" v-for="(exerciseArray, chapter, chapterIndex) in exercises" :id="chapter">
        <h3 class="mb-2 border-b-2 border-neutral-300 text-xl font-medium">{{ chapter }}</h3>
        <ul class="ml-2 flex w-full flex-col items-start justify-start">
          <NuxtLink
            v-for="(exercise, index) in exerciseArray"
            :to="exercise.route"
            class="w-full overflow-hidden overflow-ellipsis border-l-4 px-3 py-0.5 italic"
            :class="route.path === exercise.route ? 'border-blue-400 hover:border-blue-600' : 'border-neutral-300 text-neutral-500 hover:border-blue-400 hover:text-neutral-800'"
          >
            {{ exercise.name }}
          </NuxtLink>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  currentExerciseIndex: number;
}>();

const route = useRoute();
const router = useRouter();
</script>

<style scoped></style>
