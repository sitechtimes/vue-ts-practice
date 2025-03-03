import { mountSuspended } from "@nuxt/test-utils/runtime";
import File from "~/pages/02_functions/functions5.vue";
import { describe, expect, test } from "vitest";

describe("grantVip", () => {
  test("should not be granted vip", async () => {
    const page = await mountSuspended(File);
    const isVip = ref(page.vm.isVip);
    const grantVip = page.vm.grantVip;

    const user: RobloxUser = {
      recentlyPlayed: [],
      favoriteGames: [],
      robux: 0,
      friends: 0,
      followers: 0,
      membershipStatus: null,
      isDarkMode: false,
      birthday: new Date(),
      joinDate: new Date(),
      avatarItems: [],
      badges: [],
      groups: []
    };

    grantVip(user);

    expect(isVip.value).toBe(false);
  });

  test("also should not be granted vip", async () => {
    const page = await mountSuspended(File);
    const isVip = ref(page.vm.isVip);
    const grantVip = page.vm.grantVip;

    const user: RobloxUser = {
      recentlyPlayed: ["Murder Mystery 2", "Jailbreak"],
      favoriteGames: ["Jailbreak"],
      robux: 2309,
      friends: 50,
      followers: 20,
      membershipStatus: "Outrageous Builders Club",
      isDarkMode: true,
      birthday: new Date("2011-06-16"),
      joinDate: new Date("2016-09-04"),
      avatarItems: [],
      badges: ["Veteran Badge", "Welcome To The Club Badge", "Bricksmith Badge"],
      groups: ["Paradoxium Games", "StyLiS Studios"]
    };

    grantVip(user);

    expect(isVip.value).toBe(false);
  });

  test("should be granted vip", async () => {
    const page = await mountSuspended(File);
    const isVip = ref(page.vm.isVip);
    const grantVip = page.vm.grantVip;

    const user: RobloxUser = {
      recentlyPlayed: ["Murder Mystery 2", "Jailbreak"],
      favoriteGames: ["Jailbreak"],
      robux: 99999999999999,
      friends: 3,
      followers: 9,
      membershipStatus: "Outrageous Builders Club",
      isDarkMode: true,
      birthday: new Date("2011-06-16"),
      joinDate: new Date("2016-09-04"),
      avatarItems: [
        {
          value: 20000000000,
          isLimited: true
        }
      ],
      badges: ["Veteran Badge", "Welcome To The Club Badge", "Bricksmith Badge"],
      groups: ["Paradoxium Games", "StyLiS Studios"]
    };

    grantVip(user);

    expect(isVip.value).toBe(true);
  });
});
