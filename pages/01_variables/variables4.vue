<template>
  <p>This exercise does not involve any HTML</p>
</template>

<script setup lang="ts">
// TODO: fix this file so that all tests in `variables4.test.ts` pass

// mock pinia store
const userStore = reactive({
  userInfo: {
    loggedInUser: {
      premiumUser: {
        user: undefined as User | undefined // this `as User | undefined` just tells TypeScrpt that the object is of type `User` or type `undefined`
      }
    }
  }
});

async function login(username: string, password: string) {
  let user = userStore.userInfo.loggedInUser.premiumUser.user;
  user = await loginUser(username, password);
}

// ! dont touch anything below this line

onMounted(login);
defineExpose({ userStore, login });
</script>

<style scoped></style>
