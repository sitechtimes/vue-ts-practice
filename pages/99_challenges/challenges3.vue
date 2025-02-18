<template>
  <div class="m-auto items-center text-center">
    <div id="display" class="border-bg-neutral-600 m-auto mt-[2px] flex h-fit w-[100%] flex-col overflow-y-auto scroll-smooth rounded-[24px] border-[2px] bg-neutral-200">
      <div v-html="userStore.qText" class="my-[12px] ml-[16px] mr-[16px] text-[40px] font-semibold"></div>
      <div class="items-center justify-center text-center">
        <div class="items-center justify-center text-center">
          <button
            v-for="answer in userStore.answers"
            v-html="answer.text"
            class="m-[12px] mb-[50px] h-[320px] w-[25%] flex-wrap rounded-[24px] border-[4px] border-black text-[30px] font-medium focus:bg-primary focus:bg-opacity-50"
            @click="updateAnswer(answer.id)"
            :key="answer.id"
          ></button>
        </div>
      </div>
    </div>
    <button
      @click="(submitAnswer(tempAnswer), (tempAnswer = -1))"
      class="m-auto mb-[20px] mt-[2px] h-[64px] w-[320px] rounded-[24px] border-[1px] border-black bg-neutral-100/25 text-[40px] font-semibold shadow-lg hover:shadow-none"
    >
      Submit Answer
    </button>
    <div class="m-auto flex w-[96%] flex-row">
      <h2 class="border-bg-neutral-600 m-auto h-[64px] w-[50%] items-end rounded-[24px] border-[2px] bg-neutral-200 text-center text-[36px] font-semibold">
        {{ userStore.qLeft }}
        Questions Left
      </h2>
      <h2 class="border-bg-neutral-600 m-auto h-[64px] w-[50%] items-end rounded-[24px] border-[2px] bg-neutral-200 text-center text-[36px] font-semibold" v-if="userStore.timerStyle !== 'unlimited'">
        Time Left - {{ min }} min {{ sec }} sec
      </h2>
      <h2 class="border-bg-neutral-600 m-auto h-[64px] w-[50%] items-end rounded-[24px] border-[2px] bg-neutral-200 text-center text-[36px] font-semibold" v-if="userStore.timerStyle == 'unlimited'">
        Unlimited Time
      </h2>
      <h2 class="border-bg-neutral-600 text- m-auto h-[64px] w-[50%] items-end rounded-[24px] border-[2px] bg-neutral-200 text-center text-[36px] font-semibold">
        {{ userStore.attemptsRemaining }} Attempts Left
      </h2>
    </div>
  </div>
</template>

<script setup lang="ts">
// TODO: remove as much useless code and refactor as much bad code as you can while IMPROVING all functionality on the page
// ?     ^^ this includes EVERYTHING, both in the <script> and the <template>
// ?     ^^ you can do WHATEVER you want to this code, there's no "right way" to optimize it - you do you!

// * Context: this code is for a DeltaMath-style assignment, where the user must answer questions correctly to proceed to the next question.
// * This code is adapted from the code of a student in the Advanced class. Let's see if you can code better than them!

// mock pinia store
const userStore = reactive({
  timeAllotted: 69420,
  assignmentStatus: ref<"Current" | "Past">("Current"),
  attemptsRemaining: 5,
  qLeft: 5,
  qText: "erm what the sigma",
  timerStyle: "unlimited",
  answers: ref<Answer[]>(getAnswers())
});

const tempAnswer = ref(-1);

const totalTime = ref(userStore.timeAllotted.valueOf());
const min = ref(Math.trunc(totalTime.value / 60));
const sec = ref(totalTime.value % 60);

const assignmentStatus = userStore.assignmentStatus;
const currentStatus = ref(true);
const pastStatus = ref(false);

function delay(ms: number): Promise<void> {
  return new Promise((executor: () => void) => setTimeout(executor, ms));
}

function updateAnswer(id: number) {
  tempAnswer.value = id;
}

(async function () {
  for (let i = 0; i < userStore.timeAllotted; i++) {
    await delay(1000);
    if (sec.value !== 0) {
      userStore.timeAllotted -= 1;
      sec.value -= 1;
    } else {
      userStore.timeAllotted -= 1;
      min.value -= 1;
      sec.value += 59;
    }
  }
})();

function submitAnswer(answerId: number) {
  currentStatus.value = !currentStatus.value;
  pastStatus.value = !pastStatus.value;
  if (answerId) {
    if (assignmentStatus === "Current") {
      currentStatus.value = true;
      pastStatus.value = false;
    } else if (assignmentStatus === "Past") {
      currentStatus.value = false;
      pastStatus.value = true;
    } else {
      console.error();
    }
  } else {
    console.error();
  }
}
</script>

<style scoped></style>
