import { mountSuspended } from "@nuxt/test-utils/runtime";
import File from "~/pages/01_variables/variables1.vue";
import { describe, expect, test } from "vitest";

describe("isEqual", () => {
  test("4 should be equal to 4", async () => {
    const page = await mountSuspended(File);

    // ! These `expect` statements are the actual tests
    expect(page.vm.isEqual(4, 4)).toBe(true);
  });

  test("4 should not be equal to 20", async () => {
    const page = await mountSuspended(File);

    expect(page.vm.isEqual(4, 20)).toBe(false);
  });
});
