import { mountSuspended } from "@nuxt/test-utils/runtime";
import File from "~/pages/03_objects/objects1.vue";
import { loginUserResult } from "@/utils/variables";
import { describe, expect, test } from "vitest";

describe("login", () => {
  test("the same object should be equal to itself", async () => {
    const page = await mountSuspended(File);
    const isEqual = page.vm.isEqual;

    const testObj1 = { a: 1 };

    expect(isEqual(testObj1, testObj1)).toBe(true);
  });

  test("different objects with the same content should be equal", async () => {
    const page = await mountSuspended(File);
    const isEqual = page.vm.isEqual;

    const testObj1 = { a: 1 };
    const testObj2 = { a: 1 };

    expect(isEqual(testObj1, testObj2)).toBe(true);
  });

  test("different objects with different content should not be equal", async () => {
    const page = await mountSuspended(File);
    const isEqual = page.vm.isEqual;

    const testObj1 = { a: 1 };
    const testObj2 = { 1: "a" };

    expect(isEqual(testObj1, testObj2)).toBe(false);
  });
});
