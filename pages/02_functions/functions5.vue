<template>
  <p>This exercise does not involve any HTML</p>
</template>

<script setup lang="ts">
// TODO: fix the function so that all tests in `functions5.test.ts` pass
// TODO: optional challenge - rewrite this function to be readable

const isVip = ref(false);

/** Grants VIP to certain users in your shitty Roblox game */
function grantVip(user: RobloxUser) {
  if (user) {
    if (user.recentlyPlayed.length < 2 && user.recentlyPlayed.includes("Skibidi Ohio Simulator 9000")) {
    } else if (user.recentlyPlayed.length > 3) {
    } else {
      if (user.favoriteGames.includes("Murder Mystery 2") || user.favoriteGames.includes("Jailbreak") || user.favoriteGames.includes("Phantom Forces")) {
        if (user.robux < 50000) {
          console.warn("stop being poor pooron");
        } else {
          if (user.robux > 100000000000) {
            console.log("pls donate");
          }
          if (user.friends > 2 && user.friends < 5) {
            if (user.followers > 10) {
              console.error("why are you following so many children 🤨🤨🤨🤨🤨🤨🤨🤨🤨🤨🤨");
            } else {
              if (user.membershipStatus === "Turbo Builders Club" || user.membershipStatus === "Outrageous Builders Club") {
                if (user.isDarkMode === false) {
                  console.warn("make your theme dark");
                } else {
                  if (user.isDarkMode === true) {
                    if (user.birthday.getTime() > new Date("2007-01-01").getTime()) {
                      if (user.joinDate.getTime() < user.birthday.getTime()) {
                        console.error("how did u make an account before u were born??");
                      } else if (user.joinDate.getTime() >= user.birthday.getTime()) {
                        let totalItemValue = 0;
                        for (let i = 0; i < user.avatarItems.length; i++) {
                          totalItemValue = totalItemValue + user.avatarItems[i].value;
                          if (user.avatarItems[i].isLimited) totalItemValue *= 10;
                        }
                        if (totalItemValue < 10000) {
                          console.error("buy more robux pooron");
                        } else {
                          if (totalItemValue < 50000) {
                            console.error("still too poor pooron");
                          } else {
                            if (totalItemValue < 100000) {
                              console.error("yawn");
                            } else {
                              if (totalItemValue > 50000000000) {
                                let hasBCBadge = false;
                                user.badges.forEach((badge) => {
                                  if (badge === "Welcome To The Club Badge") {
                                    hasBCBadge = true;
                                  } else {
                                    hasBCBadge = false;
                                  }
                                });
                                if (hasBCBadge) {
                                  if (user.groups.includes("StyLiS Studios")) {
                                    isVip.value = true;
                                  } else {
                                    isVip.value = false;
                                  }
                                } else {
                                  console.error("get out of here zoomer");
                                }
                              } else {
                              }
                            }
                          }
                        }
                      }
                    } else {
                      console.error("too old boomer");
                    }
                  } else {
                  }
                }
              } else {
              }
            }
          } else if (user.friends < 2) {
            console.error("make some friends loser");
          } else if (user.friends > 5) {
            console.error("too many friends");
          }
        }
      } else {
      }
    }
  } else {
    console.error("User does not exist");
  }
}

// ! dont touch anything below this line

defineExpose({ isVip, grantVip });
</script>

<style scoped></style>
