import { mountSuspended } from "@nuxt/test-utils/runtime";
import File from "~/pages/01_variables/variables4.vue";
import { loginUserResult } from "@/utils/variables";
import { describe, expect, test } from "vitest";

describe("login", () => {
  test("user should be logged in after login function is called", async () => {
    const page = await mountSuspended(File);
    const userStore = page.vm.userStore;

    // calls the login function
    await page.vm.login("sithsadmin", "abc123");

    // ! `user` should be equal to the result of the `loginUser` function
    expect(userStore.userInfo.loggedInUser.premiumUser.user).toMatchObject(loginUserResult);
  });
});
