<template>
  <div v-if="questionsCorrect && numOfQuestions" class="flex h-full w-full flex-col items-center justify-center rounded-xl bg-neutral-200/50 p-6">
    <h3 class="text-2xl">Assignment Statistics</h3>
    <p class="mb-5 py-1 text-xl font-medium">Grade: {{ ((questionsCorrect / numOfQuestions) * 100).toFixed(0) }}%</p>

    <div class="relative mb-10 h-8 w-full max-w-lg overflow-hidden rounded-full border-[1.5px] border-gray-300">
      <div class="absolute inset-0 bg-red-500" :style="{ width: '100%' }"></div>
      <div class="absolute h-full bg-green-500" :style="{ width: (questionsCorrect / numOfQuestions) * 100 + '%' }"></div>
      <div class="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">{{ questionsCorrect }} / {{ numOfQuestions }}</div>
    </div>

    <div class="header-row grid w-full grid-cols-5 gap-4 border-b px-4 py-2 text-lg font-bold">
      <div>Question</div>
      <div>Question Preview</div>
      <div>Your Answer</div>
      <div>Correct Answer</div>
      <div>Results</div>
    </div>

    <div v-for="(question, index) in questions" :key="question.id" class="bg-gray group du-collapse text-sm hover:bg-neutral-300">
      <input type="checkbox" />
      <div class="py-15 du-collapse-title relative grid grid-cols-5 gap-4 px-4 text-lg font-medium">
        <div>{{ index + 1 }}</div>
        <div>{{ stripHtml(truncateString(question.text, 25)) }}...</div>
        <div>{{ getUserAnswerText(question.answers.find((answer) => answer.isSelected)?.id, question.answers) }}</div>
        <div>{{ getCorrectAnswerText(question.answers) }}</div>
        <div>
          <span :class="getResultClass(question)">{{ getResultText(question) }}</span>
        </div>
        <p class="absolute bottom-0 right-4 text-sm opacity-0 group-hover:opacity-100">Click to expand</p>
      </div>

      <div class="py-15 du-collapse-content px-4 text-lg font-medium">
        <p class="mb-4" v-html="question.text"></p>
        <ul>
          <li
            v-for="answer in question.answers"
            :key="answer.id"
            :class="{
              'font-bold text-blue-500': answer.isSelected && !answer.isCorrect,
              'font-bold text-green-500': answer.isCorrect
            }"
            class="mb-2 flex items-center gap-2"
          >
            <span class="flex w-4 justify-center">
              <span v-if="answer.isCorrect">✔️</span>
              <span v-else-if="answer.isSelected && !answer.isCorrect">❌</span>
              <span v-else>•</span>
            </span>
            <span>{{ stripHtml(answer.text) }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// TODO: remove as much useless code and refactor as much bad code as you can while keeping all functionality on the page
// ?     ^^ this includes EVERYTHING, both in the <script> and the <template>
// ?     ^^ you can do WHATEVER you want to this code, there's no "right way" to optimize it - you do you!

// * Context: this code is for a DeltaMath-style assignment, where the user must answer questions correctly to proceed to the next question.
// * This page specifically is about viewing assignment results after completing it.
// * This code is adapted from the code of a student in the Advanced class. Let's see if you can code better than them!
// ! Remember: don't go into the code of any functions that aren't defined in this file; read their documentation by hovering over things instead

// ! dont touch these ---------------------------------------------------
const currentAssignment = ref<Assignment>();

const assignmentId = computed(() => currentAssignment.value?.id);
const questions = computed(() => currentAssignment.value?.questions);

const questionsCorrect = computed(() => questions.value?.filter((question) => question.answers.some((answer) => answer.isSelected && answer.isCorrect)).length);
const numOfQuestions = computed(() => questions.value?.length);
// ! --------------------------------------------------------------------

onBeforeMount(async () => {
  try {
    const assignment = await getCurrentAssignment();
    currentAssignment.value = assignment;
  } catch (error) {
    console.error(error);
  }
});

function getCorrectAnswerText(answers: Answer[]) {
  const correctAnswer = answers.find(function (answer) {
    return answer.isCorrect;
  });
  return correctAnswer ? stripHtml(correctAnswer.text) : "N/A";
}

function getUserAnswerText(userAnswerId: number | undefined, answers: Answer[]) {
  const userAnswer = answers.find(function (answer) {
    return answer.id === userAnswerId;
  });
  return userAnswer ? stripHtml(userAnswer.text) : "No Answer Selected";
}

function stripHtml(html: string) {
  return html.replace(/<\/?(h3|p)>/g, "");
}

function getResultText(question: Question) {
  const correctAnswerId = question.answers.find(function (answer) {
    return answer.isCorrect;
  })?.id;
  const userAnswerId = question.answers.find(function (answer) {
    return answer.isSelected;
  })?.id;
  return correctAnswerId === userAnswerId ? "Correct" : "Incorrect";
}

function getResultClass(questionInstance: Question) {
  const isCorrect = getResultText(questionInstance) === "Correct";
  return isCorrect ? "text-green-500 font-bold" : "text-red-500 font-bold";
}

function truncateString(str: string, maxLength: number) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength);
  } else {
    return str;
  }
}
</script>

<style scoped></style>
