<template>
  <div class="flex w-96 flex-col items-center justify-center gap-2">
    <h2 class="text-xl font-semibold">Character Select</h2>
    <p>Level: {{ editableCharacter.level }}</p>
    <p>Stat Points left: {{ totalStatPoints - spentStatPoints }}</p>
    <form id="character-select" @submit.prevent="updateCharacter" class="flex w-96 flex-col items-start justify-center gap-1">
      <label for="name">Name</label>
      <input type="text" id="name" placeholder="Enter your name" v-model="editableCharacter.name" required class="du-input du-input-sm w-full" />

      <label for="strength">Strength</label>
      <input type="number" id="strength" placeholder="Enter a new strength value" v-model.number="editableCharacter.stats.strength" required class="du-input du-input-sm w-full" />

      <label for="agility">Agility</label>
      <input type="number" id="agility" placeholder="Enter a new agility value" v-model.number="editableCharacter.stats.agility" required class="du-input du-input-sm w-full" />

      <label for="intelligence">Intelligence</label>
      <input type="number" id="intelligence" placeholder="Enter a new intelligence value" v-model.number="editableCharacter.stats.intelligence" required class="du-input du-input-sm w-full" />
    </form>

    <div class="my-6 flex w-full flex-wrap items-center justify-center gap-2">
      <button type="submit" form="character-select" class="w-40 rounded-xl bg-green-100 px-5 py-2 hover:bg-green-400">Save Changes</button>
      <button class="w-40 rounded-xl bg-red-100 px-5 py-2 hover:bg-red-400" type="button" @click="resetCharacter">Reset Changes</button>
      <button class="w-40 rounded-xl bg-blue-100 px-5 py-2 hover:bg-blue-400" type="button" @click="increaseStrength">Level Up!</button>
      <button class="w-40 rounded-xl bg-orange-100 px-5 py-2 hover:bg-orange-400" type="button" @click="randomizeStats">Randomize Stats</button>
    </div>

    <div class="flex flex-col items-start justify-center gap-2 rounded-xl bg-neutral-200/50 p-8">
      <h3 class="text-xl font-medium">Character Preview</h3>

      <p class="text-neutral-600">Name: {{ playerCharacter.name }}</p>
      <p class="text-neutral-600">Strength: {{ playerCharacter.stats.strength }}</p>
      <p class="text-neutral-600">Agility: {{ playerCharacter.stats.agility }}</p>
      <p class="text-neutral-600">Intelligence: {{ playerCharacter.stats.intelligence }}</p>

      <h5 class="text-xl font-medium">Power: {{ characterPower }}</h5>
    </div>
  </div>
</template>

<script setup lang="ts">
// TODO: fix the bug where resetCharacter() doesnt do anything

const playerCharacter = reactive(getCharacter());
const editableCharacter = reactive({ ...playerCharacter });

const totalStatPoints = computed(() => editableCharacter.level * 3);
const spentStatPoints = computed(() => editableCharacter.stats.strength + editableCharacter.stats.agility + editableCharacter.stats.intelligence);
const characterPower = computed(() => editableCharacter.stats.strength * 2 + editableCharacter.stats.agility + editableCharacter.stats.intelligence);

watchEffect(() => {
  if (spentStatPoints.value > totalStatPoints.value) {
    while (spentStatPoints.value > totalStatPoints.value && editableCharacter.stats.strength > 0) editableCharacter.stats.strength -= 1;
    while (spentStatPoints.value > totalStatPoints.value && editableCharacter.stats.agility > 0) editableCharacter.stats.agility -= 1;
    while (spentStatPoints.value > totalStatPoints.value && editableCharacter.stats.intelligence > 0) editableCharacter.stats.intelligence -= 1;
  }
});

function increaseStrength() {
  editableCharacter.level++;
}

function updateCharacter() {
  playerCharacter.name = editableCharacter.name;
  playerCharacter.stats.strength = editableCharacter.stats.strength;
  playerCharacter.stats.agility = editableCharacter.stats.agility;
  playerCharacter.stats.intelligence = editableCharacter.stats.intelligence;
}

function randomizeStats() {
  let points = totalStatPoints.value;

  const strength = Math.floor(Math.random() * points);
  editableCharacter.stats.strength = strength;
  points -= strength;

  const agility = Math.floor(Math.random() * points);
  editableCharacter.stats.agility = agility;
  points -= agility;

  editableCharacter.stats.intelligence = points;
}

function resetCharacter() {
  editableCharacter.name = playerCharacter.name;
  editableCharacter.stats.strength = playerCharacter.stats.strength;
  editableCharacter.stats.agility = playerCharacter.stats.agility;
  editableCharacter.stats.intelligence = playerCharacter.stats.intelligence;
}
</script>
