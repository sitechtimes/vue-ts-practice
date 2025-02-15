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
      name: "References and Values",
      route: "/01_variables/variables3",
      hints: ["Find a way to find where the error comes from", "Something is causing `user.value` to become undefined", "Remove the `// @ts-nocheck` comment at the top of the script"]
    }
  ]
};
