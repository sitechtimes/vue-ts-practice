<template>
  <div class="relative flex flex-col items-center justify-center gap-1">
    <input
      class="input input-bordered mb-6 h-10 w-96 rounded-lg border-2 px-2 py-1 transition duration-500 focus:bg-[var(--bg-color)] focus:outline focus:outline-2 focus:outline-[color:var(--primary)]"
      type="text"
      placeholder="Search Student..."
      v-model="searchTerm"
    />
    <div class="items relative overflow-x-auto rounded-b-box rounded-se-box">
      <table class="table items-center justify-center">
        <thead>
          <tr>
            <th class="px-10 py-3">Student ID</th>
            <th class="px-10 py-3">First Name</th>
            <th class="px-10 py-3">Last Name</th>
            <th class="px-10 py-3">Remove Student</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-t" v-for="(student, index) in filteredStudents" :key="student.id">
            <th class="px-10 py-3">{{ student.id }}</th>
            <td class="px-10 py-3">{{ student.firstName }}</td>
            <td class="px-10 py-3">{{ student.lastName }}</td>
            <td class="flex items-center justify-center px-10 py-3">
              <button @click="removeStudent(index)" class="btn btn-sm transition-300 flex h-8 w-8 items-center justify-center rounded-full hover:bg-neutral-200">✕</button>
            </td>
          </tr>
          <tr v-if="filteredStudents.length === 0" class="border-t">
            <td colspan="4" class="items-center justify-center px-10 py-3 text-center">No results found</td>
          </tr>
        </tbody>
      </table>
    </div>
    <button @click="goHome" class="mt-4 rounded-lg bg-green-400 px-5 py-2">Return To Class Page</button>
  </div>
</template>

<script setup lang="ts">
// TODO: remove as much useless code and refactor as much bad code as you can while keeping all functionality on the page
// ?     ^^ this includes EVERYTHING, both in the <script> and the <template>
// ?     ^^ you can do WHATEVER you want to this code, there's no "right way" to optimize it - you do you!

// * Context: this code is for a teacher's view of a Google Classroom student roster.
// * This code is adapted from the code of a student in the Advanced class. Let's see if you can code better than them!

const router = useRouter();

const searchTerm = ref("");

type Student = {
  id: number;
  firstName: string;
  lastName: string;
};

const students: Student[] = [
  { id: 1, firstName: "Emerson", lastName: "Yang" },
  { id: 2, firstName: "idk", lastName: "the rest" },
  { id: 3, firstName: "of your", lastName: "names" }
];
const filteredStudents = computed(() => {
  return students.filter((student) => student.firstName.toLowerCase().includes(searchTerm.value.toLowerCase()) || student.lastName.toLowerCase().includes(searchTerm.value.toLowerCase()));
});

function removeStudent(index: number) {
  students.splice(index, 1);
}

function goHome() {
  router.push("/");
}
</script>
