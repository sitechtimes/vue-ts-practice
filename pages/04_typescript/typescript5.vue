<template>
  <p>This exercise does not involve any HTML</p>
</template>

<script setup lang="ts">
// TODO: fix the compiler errors while keeping type safety (no `any`s)

const wendys = ref<Wendys[]>([]);
const burgerKings = ref<BurgerKing[]>([]);

onMounted(async () => {
  const wendysLocations = await getAllWendys();
  const burgerKingLocations = await getAllBurgerKings();
  wendys.value = findNearbyLocations(wendysLocations, 5);
  burgerKings.value = findNearbyLocations(burgerKingLocations, 5);
});

function findNearbyLocations(locations: (Wendys | BurgerKing)[], maxDistance: number) {
  return locations.filter((location) => location.distance <= maxDistance);
}
</script>

<style scoped></style>
