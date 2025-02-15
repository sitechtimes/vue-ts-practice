<template>
  <form @submit.prevent="handleLogin" class="flex w-96 flex-col items-start justify-center gap-2">
    <label for="username">Username</label>
    <input type="text" autocomplete="username" id="username" placeholder="Enter your username" v-model="username" required class="du-input w-full" />
    <label for="password">Password</label>
    <input type="password" id="password" autocomplete="current-password" placeholder="Enter your password" v-model="password" required class="du-input w-full" />
    <button type="submit" class="mt-4 w-full rounded-xl bg-neutral-200 px-5 py-2 hover:bg-green-500">Login</button>
  </form>
</template>

<script setup lang="ts">
// @ts-nocheck
// TODO: fix the runtime error (meaning: error in browser console) that the handleLogin function produces

let user = ref<User>();

let username = ref("");
let password = ref("");

async function handleLogin() {
  // username and password cannot be empty strings
  if (!username.value || !password.value) return;

  // * Remember: hover over function name for documentation
  const loggedInUser = await loginUser(username.value, password.value);
  user = loggedInUser;

  // ! Not running this function would be very bad, so this function MUST run at the end of `handleLogin`.
  updateUser(user.value.id);
}

// ! dont touch anything below this line

/** This is a very important function that must run in order for users to work properly.
 * @param userId - The ID of the user
 */
function updateUser(userId: number) {
  /* ... */
}
</script>

<style scoped></style>
