<template>
  <div class="flex w-96 flex-col items-center justify-center gap-2">
    <div class="flex flex-col items-start justify-center gap-2 rounded-xl bg-neutral-200/50 p-8">
      <h2 class="text-xl font-semibold">Current Profile:</h2>
      <p>Name: {{ profile?.name }}</p>
      <p>Email: {{ profile?.email }}</p>
      <p>Theme: {{ profile?.theme }}</p>
    </div>

    <h2 class="mt-5 text-xl font-semibold">Edit Your Profile</h2>
    <form id="change-profile" @submit.prevent="saveChanges" class="flex w-96 flex-col items-start justify-center gap-2">
      <label for="name">Name</label>
      <input type="text" id="name" placeholder="Enter your name" v-model="editableProfile.name" required class="du-input w-full" />

      <label for="email">Email</label>
      <input type="text" id="email" placeholder="Enter your email" v-model="editableProfile.email" required class="du-input w-full" />

      <label for="theme">Theme</label>
      <select id="theme" v-model="editableProfile.theme">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </form>

    <div class="flex w-full items-center justify-center gap-2">
      <button type="submit" form="change-profile" class="mt-4 w-full rounded-xl bg-green-100 px-5 py-2 hover:bg-green-400">Save Changes</button>
      <button type="button" @click="resetChanges" class="mt-4 w-full rounded-xl bg-red-100 px-5 py-2 hover:bg-red-400">Discard Changes</button>
    </div>
  </div>
</template>

<script setup lang="ts">
// TODO: fix the bug where resetChanges() doesnt do anything

const profile = reactive(getUserProfile());
const editableProfile = reactive(profile);

async function saveChanges() {
  if (!profile || !editableProfile) return;

  profile.name = editableProfile.name;
  profile.email = editableProfile.email;
  profile.theme = editableProfile.theme;

  await updateProfile(profile);
}

function resetChanges() {
  if (!profile || !editableProfile) return;

  editableProfile.name = profile.name;
  editableProfile.email = profile.email;
  editableProfile.theme = profile.theme;
}
</script>
