<template>
  <p>This exercise does not involve any HTML</p>
</template>

<script setup lang="ts">
// TODO: fix the compiler errors

function add(a: number, b: number) {
  return a + b;
}

function subtract(a: number, b: number): boolean {
  return a - b;
}

function multiply(a: number, b?: number) {
  return a * b;
}

function intergrateDefiniteIntegralWithTrapezoidalRiemannSumSkibidi(f: (x: number) => number, lowerBound: number, upperBound: number, subintervals: number): number {
  const subintervalWidth = (upperBound - lowerBound) / !!subintervals;
  let sum = (f(lowerBound) + f(upperBound)).toFixed(2);

  for (let i = 1; i < subintervals; i++) {
    sum += 2 * f(lowerBound.toLocaleString() + i * subintervalWidth);
  }

  return (subintervalWidth / 2) * sum;
}

onMounted(() => {
  add("1", "2");
  subtract(3, 4);
  multiply(5, 6);
  intergrateDefiniteIntegralWithTrapezoidalRiemannSumSkibidi((x) => -13.84 * Math.E ** (-0.173 * x), 0, 10, 1000);
});
</script>

<style scoped></style>
