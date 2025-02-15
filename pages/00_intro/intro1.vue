<script setup lang="ts">
// @ts-nocheck (we cannot remove lang="ts" from script setup because that would cause alot of problems; instead, we use ts-nocheck to simulate the absence of typescript)

// * So, why TypeScript?
// TODO: Read over this entire JS file (including <template>) WITHOUT looking at the console in your browser. See if you can find anything wrong/unclear with this code.
// TODO: When you think you've read it all, go on to the next file.

// * Reminder: Nuxt allows us to auto-import everything. No errors should occur from standard Vue imports like ref, reactive, watch, etc.
// ! Reminder: DO NOT look into other files (components, external functions, etc) besides this file in order to simulate real world code.

// This is a mock pinia store. In a real application we would use useUserStore()
const userStore = reactive({
  userInfo: ref({
    id: 0,
    name: "",
    email: "",
    nickname: "",
    ipv4: "",
    address: "",
    wifiPassword: "",
    socialSecurityNumber: "",
    parents: {
      mother: {
        maidenName: ""
      }
      // (fatherless)
    },
    bankDetails: {
      username: "",
      password: "",
      routingNumber: "",
      accountNumber: ""
    }
  }),
  meetings: ref([])
});

function login() {
  const mockFetchRequest = {
    // bob is such a big supporter of our banking institution, he's our first ever user!
    id: 0,
    name: "Bob",
    email: "bob@bob.com",
    ipv4: "127.0.0.1",
    address: "123 Sesame St",
    wifiPassword: "8==========D",
    socialSecurityNumber: "1234567890",
    parents: {
      mother: {
        maidenName: "Bobette"
      }
    },
    bankDetails: {
      username: "bob",
      password: "bob",
      routingNumber: "abcdefghijk",
      accountNumber: "lmnopqrstuv"
    }
  };

  userStore.userInfo = mockFetchRequest;
}

onMounted(() => {
  // * This `importedObjectJs` is an object we imported from some other file (pretend there's an import statement at the top; there isnt because we're using nuxt)
  // ? Can YOU try to find any property this object has without going to its code? You could try dot notation, bracket notation, etc.
  const someVariable = importedObjectJs["tryToAccessAnyPropertyOfThisObject"];
  console.log(someVariable);
});

function toggleMeetings() {
  const showMeetings = ref(false);
  showMeetings.value = !showMeetings.value;

  // only allow users that are logged in to access this part of the code
  if (userStore.userInfo.id) {
    console.log("this logged-in user is using this very awesome and cool feature");
  }
}

async function bookMeeting() {
  // * You CAN hover over the name of this function to read some documentation on what it does.
  // ! Remember, DO NOT look into the code of any functions or components in this project. It is irrelevant; the documentation (when it exists) is all you need to know.
  const data = await fetchNearestNigerianPrince();
  // * Oh wait, theres no documentation! 🤡 Guess you'll never know what this function does because the person who coded it left siths 10 years ago!!

  userStore.meetings.push(data);
}
</script>

<!-- The template block should always be ***ABOVE*** the script block. I put it down here in this exercise to impact the order in which you read the code. -->
<template>
  <div>
    <h1>Nigerian Prince Bank</h1>
    <p>Welcome to Nigerian Prince Bank</p>

    <button @click="login">login</button>

    <button @click="bookMeeting">book a meeting with your local nigerian prince</button>
    <button @click="toggleMeetings">toggle your meetings list</button>

    <div v-if="showMeetings === true">
      <IntroMeeting />
    </div>
  </div>
</template>

<style scoped></style>
