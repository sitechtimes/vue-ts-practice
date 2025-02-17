<template>
  <div class="m-auto items-center text-center">
    <div id="display" class="border-bg-neutral-600 m-auto mt-[2%] flex h-fit w-[96%] flex-col overflow-y-auto scroll-smooth rounded-[24px] border-[2px] bg-neutral-200">
      <div v-html="userStore.qText" class="my-[10px] ml-[15px] mr-[15px] text-[40px] font-semibold"></div>
      <div class="items-center justify-center text-center">
        <div class="items-center justify-center text-center">
          <button
            v-for="answer in userStore.answers"
            v-html="answer.text"
            class="m-[10px] mb-[50px] h-[320px] w-[23%] flex-wrap rounded-[24px] border-[5px] border-black text-[30px] font-medium focus:bg-primary focus:bg-opacity-50"
            @click="updateAnswer(answer.id)"
            :key="answer.id"
          ></button>
        </div>
      </div>
    </div>
    <button
      @click="(submitAnswer(tempAnswer), (tempAnswer = -1))"
      class="m-auto mb-[20px] mt-[2%] h-[60px] w-[350px] rounded-[24px] border-[1px] border-black bg-neutral-100/25 text-[40px] font-semibold shadow-lg shadow-[#525148] hover:shadow-none"
    >
      Submit Answer
    </button>
    <div class="m-auto flex w-[96%] flex-row">
      <h2 class="border-bg-neutral-600 m-auto h-[60px] w-[60%] items-end rounded-[24px] border-[2px] bg-neutral-200 text-center text-[37px] font-semibold">
        {{ userStore.qLeft }}
        Questions Left
      </h2>
      <h2 class="border-bg-neutral-600 m-auto h-[60px] w-[60%] items-end rounded-[24px] border-[2px] bg-neutral-200 text-center text-[37px] font-semibold" v-if="userStore.timerStyle !== 'unlimited'">
        Time Left - {{ min }} min {{ sec }} sec
      </h2>
      <h2 class="border-bg-neutral-600 m-auto h-[60px] w-[60%] items-end rounded-[24px] border-[2px] bg-neutral-200 text-center text-[37px] font-semibold" v-if="userStore.timerStyle == 'unlimited'">
        Unlimited Time
      </h2>
      <h2 class="border-bg-neutral-600 m-auto h-[60px] w-[60%] items-end rounded-[24px] border-[2px] bg-neutral-200 text-center text-[37px] font-semibold">
        {{ userStore.attemptsRemaining }} Attempts Left
      </h2>
    </div>
  </div>
</template>

<script setup lang="ts">
// TODO: remove as much useless code and refactor as much bad code as you can while IMPROVING all functionality on the page (this code is actual dogwater)
// ?     ^^ this includes EVERYTHING, both in the <script> and the <template>
// ?     ^^ you can do WHATEVER you want to this code, there's no "right way" to optimize it - you do you! (you can even rewrite the entire file wink wink nudge nudge)

// * Context: this code is for a DeltaMath-style assignment, where the user must answer questions correctly to proceed to the next question.
// * This code is adapted from the code of a student in the Advanced class. Let's see if you can code better than them!

// mock pinia store
const userStore = reactive({
  timeAllotted: 69420,
  assignmentStatus: "Current",
  attemptsRemaining: 5,
  qLeft: 5,
  qText: "erm what the sigma",
  timerStyle: "unlimited",
  answers: [
    {
      id: 0,
      text: "erm what the skibidi",
      isCorrect: false,
      isSelected: false
    },
    {
      id: 1,
      text: "erm what the erm",
      isCorrect: true,
      isSelected: false
    },
    {
      id: 2,
      text: "erm what the rizz",
      isCorrect: false,
      isSelected: false
    },
    {
      id: 3,
      text: "erm what the heck",
      isCorrect: false,
      isSelected: false
    }
  ] as Answer[]
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

function toggleAssignments() {
  currentStatus.value = !currentStatus.value;
  pastStatus.value = !pastStatus.value;
  if (assignmentStatus === "Current") {
    currentStatus.value = true;
    pastStatus.value = false;
  } else if (assignmentStatus === "Past") {
    currentStatus.value = false;
    pastStatus.value = true;
  } else {
    console.error();
  }
}

function updateAnswer(id: number) {
  tempAnswer.value = id;
}

function submitAnswer(answerId: number) {
  // * I don't even know what this code is supposed to do 💀
  // TODO: optional challenge - rewrite this function but with good code 🙏
  // https://github.com/sitechtimes/regents-prep-app-frontend/blob/20cd52ce0f87ccce0589b978cd37ba914ab4d5eb/stores/questions.ts#L165
}
</script>

<style scoped></style>
