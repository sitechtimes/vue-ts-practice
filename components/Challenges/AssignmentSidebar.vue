<template>
  <div class="sticky left-0 top-0 flex h-full w-72 shrink-0 flex-col items-start justify-start border-r border-neutral-300">
    <button class="group my-4 ml-4 flex items-center justify-center gap-2 rounded-xl px-5 py-2 hover:bg-neutral-200" type="button" @click="emit('close')">
      <img class="size-4 group-hover:-translate-x-1" src="/arrowLeft.svg" aria-hidden="true" />
      Back to course
    </button>

    <ul class="flex h-[50dvh] w-full shrink-0 flex-col items-start justify-start overflow-y-scroll border-y border-neutral-300 px-4">
      <li
        v-for="(num, index) in assignment.questions.length"
        :key="index"
        class="w-full border-l-4 border-neutral-200 py-0.5 pl-4 first:mt-6 last:mb-6"
        :class="{
          'border-neutral-400 hover:border-neutral-500': currentQuestionIndex === index, // current
          'border-green-400 hover:border-green-500': assignment.questionInterfaces[index]?.answers.some((answer) => answer.isSelected) // completed
        }"
      >
        <button
          class="w-full rounded-xl px-5 py-2 text-left hover:bg-neutral-200"
          :class="{ 'bg-neutral-200': currentQuestionIndex === index, 'text-neutral-400 hover:text-black': currentQuestionIndex < index }"
          type="button"
          @click="changeRouteQuery({ q: index }, 'push')"
        >
          Question {{ num }}
        </button>
      </li>
    </ul>

    <div class="flex h-full w-full flex-col items-start justify-start p-4">
      <h4 class="w-64 overflow-hidden overflow-ellipsis text-nowrap text-2xl font-medium">{{ assignment.name }}</h4>
      <p class="text-sm"><strong class="text-sm font-bold">Started</strong> {{ formatDate(assignment.dueDate, currentDate) }}</p>

      <div class="mt-10 w-full" :class="{ 'du-tooltip': !assignmentIsComplete }" data-tip="Complete all questions first!">
        <button class="w-full rounded-xl bg-green-300 px-5 py-1.5 text-lg font-medium hover:bg-green-400" :class="{ grayscale: !assignmentIsComplete }" type="button" @click="submit">Proceed</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  assignment: Assignment;
  currentQuestionIndex: number;
}>();
const emit = defineEmits<{ close: [void] }>();

const currentDate = new Date();
const assignmentIsComplete = computed(() => Object.values(props.assignment.questionInterfaces).every((questionInterface) => questionInterface.answers.some((answer) => answer.isSelected)));

async function submit() {
  console.log("non functional for this exercise");
}

function formatDate(target: Date, current: Date) {
  const dateHour = target.toLocaleString("default", { hour12: true, hour: "numeric", minute: "2-digit" });
  const week = target.toLocaleDateString("default", { weekday: "long" });
  const long = `${target.toLocaleString("default", { year: target.getFullYear() === current.getFullYear() ? undefined : "numeric", month: "short", day: "numeric" })} at ${target.toLocaleString("default", { hour12: true, hour: "numeric", minute: "2-digit" })}`;

  const inputDate = new Date(target).setHours(0, 0, 0, 0);
  const now = new Date(current).setHours(0, 0, 0, 0);
  const diffDays = Math.round((inputDate - now) / (24 * 60 * 60 * 1000));

  const labels: Readonly<Record<string, string>> = {
    "0": `today at ${dateHour}`,
    "1": `tomorrow at ${dateHour}`,
    "-1": `yesterday at ${dateHour}`
  };

  return labels[String(diffDays)] || (diffDays > 1 && diffDays <= 7 ? week : diffDays < -1 && diffDays >= -7 ? `last ${week}` : long);
}
</script>

<style scoped>
.list-overlay {
  background: linear-gradient(to bottom, var(--bg-color), transparent 10%, transparent 90%, var(--bg-color));
}
</style>
