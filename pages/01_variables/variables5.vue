<template>
  <div class="flex w-96 flex-col items-start justify-center gap-2">
    <h3 class="text-2xl font-medium">Shopping Cart Calculator</h3>

    <div class="flex w-full items-center justify-between">
      <button
        v-for="item in items"
        :key="item"
        class="grow bg-neutral-200 p-3 text-lg font-medium first:rounded-l-xl last:rounded-r-xl hover:bg-neutral-300"
        :class="{ 'bg-green-500 hover:bg-green-600': currentItem === item }"
        type="button"
        @click="currentItem = item"
      >
        {{ item }}
      </button>
    </div>

    <label for="donation">Donation</label>
    <input id="donation" placeholder="Please donate to the Students Against AP Literature and Composition campaign" autocomplete="off" required v-model.number="donation" class="du-input w-full" />

    <label for="price" class="capitalize">Price of {{ currentItem }}s (in USD)</label>
    <input id="price" :placeholder="`Enter the price of ${currentItem}s`" v-model="price" autocomplete="off" required class="du-input w-full placeholder:capitalize" />

    <p>Your total will be: ${{ totalPrice }}</p>
  </div>
</template>

<script setup lang="ts">
const items = ["apple", "banana", "orange", "kiwi"] as const;
const currentItem = ref<(typeof items)[number]>("apple");

const price = ref(0);
const donation = ref(0);

// ? Play around with the inputs and see what totalPrice is doing
// TODO: fix totalPrice not adding correctly
const totalPrice = computed(() => donation.value + price.value);
</script>

<style scoped></style>
