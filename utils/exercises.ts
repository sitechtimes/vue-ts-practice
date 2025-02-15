export type Exercise = {
  name: string;
  route: string;
  hints: Component[];
};

export const exercises: Readonly<Record<number, Exercise>> = {
  0: {
    name: "Why TypeScript?",
    route: "/00_intro/intro1",
    hints: []
  }
};
