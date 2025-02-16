export type Exercise = {
  name: string;
  route: string;
  hints: string[];
};

export const exercises: Readonly<Record<string, Exercise[]>> = {
  Intro: [
    {
      name: "JavaScript Hell",
      route: "/00_intro/intro1",
      hints: []
    },
    {
      name: "TypeScript Heaven",
      route: "/00_intro/intro3",
      hints: []
    }
  ],
  Variables: [
    {
      name: "Assignment & Comparison",
      route: "/01_variables/variables1",
      hints: [
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment",
        "Do you know why one test works and the other fails?\n\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment#return_value",
        "Assignment and Comparison are not the same\n\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality"
      ]
    },
    {
      name: "To Be or Not To Be",
      route: "/01_variables/variables2",
      hints: [
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator",
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator#syntax"
      ]
    },
    {
      name: "Re-assignment",
      route: "/01_variables/variables3",
      hints: ["Find a way to find where the error comes from", "Something is causing `user.value` to become undefined", "Remove the `// @ts-nocheck` comment at the top of the script"]
    },
    {
      name: "References and Values",
      route: "/01_variables/variables4",
      hints: [
        "What does `userStore.userInfo.loggedInUser.premiumUser.user` look like after the login function is called?",
        "Are `userStore.userInfo.loggedInUser.premiumUser.user` and `user` the same after the login function is called?",
        "Is the result of the login function really being assigned to `userStore.userInfo.loggedInUser.premiumUser.user`?"
      ]
    },
    {
      name: "Type Conversions",
      route: "/01_variables/variables5",
      hints: ["What's causing totalPrice to add `donations` and `price` literally instead of mathematically?", "What data types cause this behavior with the `+` operator?", "Why is `price` a string?"]
    }
  ],
  Functions: [
    {
      name: "Arrow Functions",
      route: "/02_functions/functions1",
      hints: []
    }
  ]
};
