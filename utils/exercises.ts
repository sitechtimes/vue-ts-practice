export type Exercise = {
  chapter: string;
  name: string;
  route: string;
  hints: Component[];
};

export const exercises: Readonly<Record<string, Exercise[]>> = {
  Intro: [
    {
      chapter: "Why TypeScript?",
      name: "JavaScript Hell",
      route: "/00_intro/intro1",
      hints: []
    },
    {
      chapter: "Why TypeScript?",
      name: "TypeScript Heaven",
      route: "/00_intro/intro3",
      hints: []
    }
  ]
};
