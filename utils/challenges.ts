// challenges2

/** Represents an answer choice that the user can choose. */
export type Answer = {
  /** The ID of the answer object.
   * @instance This ID is unique per question; no `Answer` in the same `Question` will have the same ID.
   * @warning IDs are ***ONLY*** unique to each `Answer`; an `Answer` ***MAY*** have the same ID as an `Question`.
   * @warning IDs are ***NOT*** unique across multiple questions; an `Answer` ***MAY*** have the same ID as another `Answer` in a different `Question`.
   * @readonly */
  readonly id: number;
  /** The text that will be displayed to the user.
   * @instance This text is formatted as an HTML string. It is not a regular string.
   * @readonly */
  readonly text: string;
  /** Whether or not this answer choice is correct. */
  readonly isCorrect: boolean;
  /** Whether or not the user has selected this answer choice. Defaults to `false`.
   * @warning Only 1 answer in each question should be able to be selected at a time.
   * @readonly
   */
  isSelected: boolean;
};

/** An instance of a question. */
export class Question {
  /** The ID of the question object.
   * @instance This ID is unique; no `Question` will have the same ID.
   * @warning IDs are ***ONLY*** unique to each `Question`; a `Question` ***MAY*** have the same ID as an `Answer`.
   * @readonly */
  readonly id: number;
  /** The text that will be displayed to the user.
   * @instance This text is formatted as an HTML string. It is not a regular string.
   * @readonly */
  readonly text: string;
  /** Array of answer choices.
   * @instance Each `Question` will have a **minimum** of 2 choices, and a **maximum** of 4.
   * @readonly
   */
  readonly answers: Answer[];

  constructor(id: number, text: string, answers: Answer[]) {
    this.id = id;
    this.text = text;
    this.answers = answers;
    if (Math.random() < 0.5) getRandomItem(this.answers).isSelected = true;
  }

  /**
   * Selects an answer for the question by its ID.
   * @param answerId - The ID of the answer to select. If no answer with this ID exists, the function does nothing.
   * @instance This function ensures that only one answer is selected at any given time by first deselecting all answers and then selecting the specified answer. */
  selectAnswer(answerId: number) {
    const answer = this.answers.find((answer) => answer.id === answerId);
    if (!answer) return;

    this.answers.forEach((answer) => (answer.isSelected = false));
    answer.isSelected = true;
  }
}

const question1 = new Question(1, "<h3>Where were you on January 6th?</h3>", [
  {
    id: 1,
    text: "<p>No comment</p>",
    isCorrect: false,
    isSelected: false
  },
  {
    id: 2,
    text: "<p>I invoke the fifth and refuse to speak further on this matter until my lawyer is present</p>",
    isCorrect: true,
    isSelected: false
  }
]);

const question2 = new Question(2, "<h3>How much wood could a woodchuck chuck if a woodchuck could chuck wood?</h3>", [
  {
    id: 1,
    text: "<p>None</p>",
    isCorrect: false,
    isSelected: false
  },
  {
    id: 2,
    text: "<p>700 pounds</p>",
    isCorrect: false,
    isSelected: false
  },
  {
    id: 3,
    text: "<p>70 pounds</p>",
    isCorrect: false,
    isSelected: false
  },
  {
    id: 69,
    text: "<p>ur mom</p>",
    isCorrect: true,
    isSelected: false
  }
]);

const question3 = new Question(
  3,
  "<h3>Sally sells seashells by the seashore. She sells seashells on the seashell shore. The total number of seashells she sells on a given day can be modeled by the function s(x). If the seashells she sells are seashore shells, find d/ds[s(x)] in terms of s, where s is the number of seashells sold per hour, at hour 6.</h3>",
  [
    {
      id: 69,
      text: "<p>fuck</p>",
      isCorrect: false,
      isSelected: false
    },
    {
      id: 3,
      text: "<p>the answer is C</p>",
      isCorrect: false,
      isSelected: false
    },
    {
      id: 2,
      text: "<p>idk man i give up</p>",
      isCorrect: false,
      isSelected: false
    },
    {
      id: 1,
      text: "<p>All of the above</p>",
      isCorrect: true,
      isSelected: false
    }
  ]
);

/** An instance of an assignment. */
export type Assignment = {
  /** The ID of the assignment object. */
  readonly id: number;
  /** The name of the assignment. */
  readonly name: string;
  /** The due date of the assignment. */
  readonly dueDate: Date;
  /** Array of questions. */
  readonly questions: Question[];
  /**
   * Used to store already-fetched `QuestionInterface`s for easy access when going back and forth.
   *
   * Each key is the index of the question in the assignment.
   * @warning Must be manually added to `StudentAssignment`; this field is not returned from the API.
   * @warning **Questions at certain indices may not exist yet**; the question must be fetched from the API first before being added.
   */
  readonly questionInterfaces: Record<number, Question>;
};

/** Fetches the current assignment from a backend API endpoint.
 * @warning **Has a 50% chance of failing.**
 */
export async function getCurrentAssignment(): Promise<Assignment> {
  return {
    id: 69420,
    name: "IQ Test",
    dueDate: new Date("2020-03-15T22:06:00.000Z"),
    questions: [question1, question2, question3],
    questionInterfaces: {}
  };
}

/**
 * Strips specific HTML tags from a given string.
 *
 * @param html - The HTML string to be processed. Can be undefined.
 * @returns The input string with <h3> and <p> tags removed. If the input is undefined, returns undefined.
 */

export function stripHtml(html: string | undefined) {
  return html?.replace(/<\/?(h3|p)>/g, "");
}

/** Mocks a call to the backend to get the current answers */
export function getAnswers(): Answer[] {
  return [
    {
      id: 0,
      text: "erm what the skibidi",
      isCorrect: false,
      isSelected: false
    },
    {
      id: 1,
      text: "erm what the erm",
      isCorrect: true,
      isSelected: false
    },
    {
      id: 2,
      text: "erm what the rizz",
      isCorrect: false,
      isSelected: false
    },
    {
      id: 3,
      text: "erm what the heck",
      isCorrect: false,
      isSelected: false
    }
  ];
}

// challenges4

export type Quiz = {
  /** @readonly ID of the quiz. */
  id: number;
  /** @readonly Name of the quiz. */
  name: string;
  /** @readonly Name of the high-score holder in First Name Last Name format.
   * @example "Michael Whalen"
   */
  highScoreHolder: string;
  /** @readonly Difficulty of the quiz from 1-10. */
  difficulty: number;
  /** @readonly Subject of the quiz. */
  subject: "Trivia" | "Math" | "General" | "History" | "Random";
  /** Array of assignments in this quiz. */
  assignments: Assignment[];
};

/** Replacement for `route.param.x` for this exercise */
export function getQuizId() {
  return 0;
}

/** Mocks a call to the backend to get the current quiz */
export function getCurrentQuiz(): Quiz {
  return {
    id: 0,
    name: "Math",
    highScoreHolder: "Wichael Mhalen",
    difficulty: 6,
    subject: "Math",
    assignments: [
      {
        id: 0,
        name: "IQ Test",
        dueDate: new Date("2020-03-15T22:06:00.000Z"),
        questions: [question1, question2, question3],
        questionInterfaces: {}
      }
    ]
  };
}

/**
 * Modifies the current route's query parameters while keeping other existing query parameters.
 *
 * @param query - An object representing the query parameters to add or update.
 * @param replace - Whether to use `router.push` or `router.replace` to change the route. Defaults to `replace`.
 * @example changeRouteQuery({ u: 0 }) -> router.replace({ query: { ...route.query, u: 0 } })
 */
export async function changeRouteQuery(query: Record<string, string | number | undefined>, method: "replace" | "push" = "replace"): Promise<void> {
  const route = useRoute();
  const router = useRouter();

  if (method === "replace") return void (await router.replace({ query: { ...route.query, ...query } }));
  await router.push({ query: { ...route.query, ...query } });
}

/** Fetches a question from a backend API endpoint at the given index. Returns `null` if the question does not exist. */
export async function getQuestion(assignmentId: number, questionIndex: number): Promise<Question | null> {
  switch (questionIndex) {
    case 0:
      return question1;
    case 1:
      return question2;
    case 2:
      return question3;
    default:
      return null;
  }
}
