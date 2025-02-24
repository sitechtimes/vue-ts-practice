<template>
  <div class="flex h-full w-full flex-col items-center justify-start">
    <div v-if="userStore.currentQuiz && currentAssignment" class="flex h-full w-full flex-col items-center justify-center gap-10">
      <Transition name="menu-slide">
        <div v-if="quizInProgress" class="flex h-full w-full items-center justify-center rounded-xl bg-white shadow-lg">
          <ChallengesAssignmentSidebar :assignment="currentAssignment" :current-question-index="currentQuestionIndex" @close="quizInProgress = false" />

          <div class="flex h-full w-full flex-col items-center justify-center px-24 py-12">
            <h2 class="text-3xl font-semibold">Question {{ currentQuestionIndex + 1 }}</h2>
            <p class="text-neutral-700">{{ stripHtml(userStore.currentQuestion?.text) }}</p>

            <div class="flex h-96 w-full items-center justify-center gap-2">
              <button
                v-for="choice in userStore.currentQuestion?.answers"
                class="mt-8 h-full w-full rounded-xl bg-neutral-100 p-8 hover:bg-neutral-200"
                :class="{ 'bg-neutral-200': choice.isSelected }"
                type="button"
                @click="userStore.currentQuestion?.selectAnswer(choice.id)"
                v-html="choice.text"
              ></button>
            </div>

            <div class="mt-8 flex w-full items-center justify-end gap-6 px-10">
              <button class="group flex items-center justify-center gap-2 rounded-xl bg-neutral-100 px-16 py-2 text-xl hover:bg-neutral-200" type="button" @click="switchQuestion('previous')">
                <img class="size-5 group-hover:-translate-x-1" src="/arrowLeft.svg" aria-hidden="true" />
                Back
              </button>
              <button class="group flex items-center justify-center gap-2 rounded-xl bg-neutral-100 px-16 py-2 text-xl hover:bg-neutral-200" type="button" @click="switchQuestion('next')">
                Next
                <img class="size-5 group-hover:translate-x-1" src="/arrowRight.svg" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        <button v-else class="rounded-xl bg-neutral-200 px-7 py-1.5 text-xl hover:bg-green-400" @click="quizInProgress = true">Start quiz</button>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
// TODO: remove as much useless code and refactor as much bad code as you can while keeping all functionality on the page
// ?     ^^ this includes EVERYTHING, both in the <script> and the <template>
// ?     ^^ you can do WHATEVER you want to this code, there's no "right way" to optimize it - you do you!

// * Context: this code is for a quiz game, where the user must answer questions correctly as they proceed toward a prize.
// * Each quiz is comprised of assignments (challenges) that must be completed as part of the gameshow.
// * This code is adapted from the code of a student in the Advanced class. Let's see if you can code better than them!

const route = useRoute();
const router = useRouter();

// mock pinia store
const userStore = reactive({
  currentQuiz: ref<Quiz>(getCurrentQuiz()),
  currentQuestion: ref<Question>()
});

const currentAssignment = computed(() => userStore.currentQuiz?.assignments.find((assignment) => assignment.id === getQuizId()));

const quizInProgress = ref(false);
watch(quizInProgress, (val) => {
  if (!val) setTimeout(() => void router.push("/99_challenges/challenges4"), 200);
});

let lastQuestionIndex = 0;
const currentQuestionIndex = computed(() => {
  const query = Number(route.query.q);
  const index = Number.isNaN(query) ? lastQuestionIndex : query;
  lastQuestionIndex = index;
  return index;
});

watch(
  currentQuestionIndex,
  async () => {
    if (!currentAssignment.value) return;

    const alreadyFetchedQuestion = currentAssignment.value.questionInterfaces[currentQuestionIndex.value] as Question | undefined;
    if (alreadyFetchedQuestion) return (userStore.currentQuestion = alreadyFetchedQuestion);

    try {
      const question = await getQuestion(currentAssignment.value.id, currentQuestionIndex.value);
      if (!question) return;

      currentAssignment.value.questionInterfaces[currentQuestionIndex.value] = question;
      userStore.currentQuestion = question;
    } catch (error) {
      console.error(error);
    }
  },
  { immediate: true }
);

async function switchQuestion(direction: "previous" | "next") {
  if (!currentAssignment.value) return;

  if (direction === "previous" && currentQuestionIndex.value > 0) await changeRouteQuery({ q: currentQuestionIndex.value - 1 });
  if (direction === "next" && currentQuestionIndex.value < currentAssignment.value.questions.length - 1) await changeRouteQuery({ q: currentQuestionIndex.value + 1 });
}

function warnForUnsavedChanges(event: BeforeUnloadEvent) {
  event.preventDefault();
}

onBeforeMount(() => {
  if (!route.query.q) void changeRouteQuery({ q: 0 });
});

onMounted(() => {
  quizInProgress.value = true;
  window.addEventListener("beforeunload", warnForUnsavedChanges);
});

onBeforeUnmount(() => window.removeEventListener("beforeunload", warnForUnsavedChanges));
</script>

<style scoped>
.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: all 0.2s ease-in-out;
}
.menu-slide-enter-from,
.menu-slide-leave-to {
  opacity: 0;
  transform: translateY(5rem);
}
</style>
