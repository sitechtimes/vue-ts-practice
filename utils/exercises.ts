/** Returns a random integer between `min` and `max`, inclusive. */
export function getRandomInt(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

/** Returns a random item from an array. */
export function getRandomItem<T>(arr: T[]) {
  return arr[getRandomInt(0, arr.length - 1)];
}

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
        "Do you know why one test works and the other fails? - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment#return_value",
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality - Assignment and Comparison are not the same."
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
      hints: ["https://developer.mozilla.org/en-US/docs/Glossary/Hoisting"]
    },
    {
      name: "Callbacks",
      route: "/02_functions/functions2",
      hints: [
        "Arrow functions are anonymous functions - https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener",
        "Read the paragraph under the code block - https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#memory_issues",
        "Using an arrow function in the addEventListener()'s and removeEventListener()'s callback basically means we're creating a new function in each case, which means removeEventListener() can't find the function we used in addEventListener()."
      ]
    },
    {
      name: "Parameters",
      route: "/02_functions/functions3",
      hints: [
        "What is stringToConvert ACTUALLY equal to when the function gets called?",
        "Why is stringToConvert a MouseEvent?",
        "How can we stop the from receiving a MouseEvent without overriding the default value of stringToConvert?"
      ]
    },
    {
      name: "Tailwind",
      route: "/02_functions/functions4",
      hints: [
        "Try changing the color shade in the function; try bg-300, bg-200, bg-500. Notice how each variation causes different boxes to be colored.",
        "Tailwind classes just don't get applied if returned from a function :) Find a different way to color the divs"
      ]
    },
    {
      name: "On Guard",
      route: "/02_functions/functions5",
      hints: [
        "Go down the if/else hellhole and try to mentally go through the function as you go through each if/else block.",
        "https://www.geeksforgeeks.org/guard-clause-in-javascript - try rewriting the function using guard clauses instead of the if/else hell it currently is."
      ]
    }
  ],
  Objects: [
    {
      name: "Equality",
      route: "/03_objects/objects1",
      hints: ["Can objects be compared using equality operators?", "Should we be comparing these two objects using equality operators?", "How do we compare every key and value of these two objects?"]
    },
    {
      name: "Profile Problems",
      route: "/03_objects/objects2",
      hints: ["https://developer.mozilla.org/en-US/docs/Glossary/Object_reference", "How is editableProfile being created?"]
    },
    {
      name: "Character Chaos",
      route: "/03_objects/objects3",
      hints: ["https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy", "Should we be using a shallow copy?", "https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy"]
    }
  ],
  TypeScript: [
    {
      name: "Compiler Catastrophe",
      route: "/04_typescript/typescript1",
      hints: []
    },
    {
      name: "Interface Pitfalls",
      route: "/04_typescript/typescript2",
      hints: ["https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-interfaces - It's a \"feature\" but imo it's more of a hinderance. Use types instead of interfaces!"]
    },
    {
      name: "Naming Matters!",
      route: "/04_typescript/typescript3",
      hints: []
    },
    {
      name: "Excessive Any",
      route: "/04_typescript/typescript4",
      hints: [
        "Overusing the `any` type can disable type checking, leading to unexpected runtime errors. Asserting an incorrect type with the `as` keyword can mask real type issues and cause runtime failures.",
        "You may have the masculine urge to assert every type with `any` so TypeScript stops yelling at you, but that's the point of TypeScript. Stop being a bitch"
      ]
    },
    {
      name: "Generic Problems",
      route: "/04_typescript/typescript5",
      hints: [
        "https://www.typescriptlang.org/docs/handbook/2/generics.html - Type Generics are extremely important for writing clean, reusuable code.",
        "https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints - You can constrain your generic type to certain types"
      ]
    }
  ],
  Challenges: [
    {
      // Abeh Gale
      name: "Challenge I",
      route: "/99_challenges/challenges1",
      hints: []
    },
    {
      // Rye Lin
      name: "Challenge II",
      route: "/99_challenges/challenges2",
      hints: []
    },
    {
      // Reye Inch en.
      name: "Challenge III",
      route: "/99_challenges/challenges3",
      hints: []
    },
    {
      // Cannae thing
      name: "Challenge IV",
      route: "/99_challenges/challenges4",
      hints: []
    },
    {
      name: "Challenge V",
      route: "/99_challenges/challenges5",
      hints: []
    }
  ]
};
