<script setup lang="ts">
// * Alright! So now that we know about all of JavaScript's shortcomings, how can TypeScript alleviate our pain?
// TODO: Read over this entire file (including <template>) WITHOUT looking at the console in your browser. See if you can find anything wrong/unclear with this code.
// TODO: This time, if you find an error, hover over the error, read it, and fix it accordingly.
// ? If you get stuck on an error, no worries! TypeScript is a learning curve. You can skip over the problems and read the solutions in the next .md file.
// ! Reminder: DO NOT look into other files (components, external functions, etc) besides this file in order to simulate real world code.

// Here, we define a type called `User` to represent what a user object should look like.
// Any future object that we say should look like this User type MUST adhere to this structure or else TypeScript will show an error on your screen.
type User = {
  id: number;
  name: string;
  email: string;
  nickname: string;
  ipv4: string;
  address: string;
  wifiPassword: string;
  socialSecurityNumber: string;
  parents: {
    mother: {
      maidenName: string;
    };
    father?: {
      name: string;
    };
  };
  bankDetails: {
    username: string;
    password: string;
    routingNumber: string;
    accountNumber: string;
  };
};

// mock pinia store
const userStore = reactive({
  // We tell TypeScript that userStore.userInfo must follow the structure of the `User` type that we defined earlier
  // Notice how we do not pass a default value to the ref. If we do not pass a default value, then TypeScript will let us know that `undefined` may be one of userInfo's types.
  // Hover over userInfo (ignore the `GlobalThis` part and focus on the types inside): `User | undefined` (User OR undefined)
  userInfo: ref<User>(),
  // This `Meeting` type is just like the User type that we defined earlier, except I defined it in another file and imported it here.
  // Remember that imports are automatic in Nuxt, so there's no import statement at the top of this file.
  // Here, instead of saying userStore.meetings should be a `Meeting` object, we are saying it should be an ARRAY of `Meeting` objects.
  meetings: ref<Array<Meeting>>([])
});

function login() {
  // We are saying `mockFetchRequest` must follow the structure of the `User` type.
  // TODO: hover over this error and see if you can figure out the problem and fix it.
  const mockFetchRequest: User = {
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
  // * Try adding a dot after importedObjectTs and look at all of the properties!
  const someVariable = importedObjectTs.actualPiniaStore;
  console.log(someVariable);
});

const showMeetings = ref(false);

function toggleMeetings() {
  showMeetings.value = !showMeetings.value;

  // only allow users that are logged in to access this part of the code
  // TODO: fix this error
  if (userStore.userInfo.id) {
    console.log("this logged-in user is using this very awesome and cool feature");
  }
}

async function bookMeeting() {
  // TODO: hover over the function name and read the documentation. Is it clearer than before?
  // Notice how the return value is `Promise<Meeting>` instead of `Meeting`? That's because async functions always return a promise.
  // If you hover over `data`, you can see that, once we await it, it becomes a `Meeting` type. (ignore the `GlobalThis.` part, that's just how Nuxt does auto imports)
  const data = await fetchNearestNigerianPrince(true);

  userStore.meetings.push(data);
}
</script>

<template>
  <div>
    <h1>Nigerian Prince Bank</h1>
    <p>Welcome to Nigerian Prince Bank</p>

    <button @click="login">login</button>

    <button @click="bookMeeting">book a meeting with your local nigerian prince</button>
    <button @click="toggleMeetings">toggle your meetings list</button>

    <div v-if="showMeetings === true">
      <!-- TODO: fix this error -->
      <!-- ! Remember: No looking at the code of any components! -->
      <!-- * No shame if you can't figure it out; move on if you feel stuck! -->
      <IntroMeeting :meeting="userStore.meetings[0]" />
    </div>
  </div>
</template>

<style scoped></style>
