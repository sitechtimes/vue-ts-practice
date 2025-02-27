<template>
  <p>This exercise does not involve any HTML</p>
</template>

<script setup lang="ts">
// TODO: make this code type-safe (ensure everything has a type associated with it (no `any`s))
// ! DO NOT explicitly type anything that does not need to be explicitly typed

const user = ref({});
const userList = ref([]);

const totalUsers = ref(0);

const veryImportantObject = reactive({});

async function authUser(user: any) {
  const response = await fetchFromBackend("/auth");
  const data = response.json();

  user.value = data;
  userList.value = false as any;
  (veryImportantObject as any) = undefined as any;

  if (data as any) {
    totalUsers.value = parseData(await data) as any;
  }
}

// ! dont touch anything below this line

onMounted(() => {
  try {
    authUser(user);
  } catch (error) {
    console.error(error);
  }
});
</script>

<style scoped></style>
