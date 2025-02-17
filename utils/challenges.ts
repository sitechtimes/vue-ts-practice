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
    getRandomItem(this.answers).isSelected = true;
  }
}

const question1 = new Question(1, "<h3>Where were you on January 6th?</h3>", [
  {
    id: 1,
    text: "<p>At home</p>",
    isCorrect: false,
    isSelected: false
  },
  {
    id: 2,
    text: "<p>Washington D.C.</p>",
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
  /** Array of questions. */
  readonly questions: Question[];
};

/** Fetches the current assignment from a backend API endpoint.
 * @warning **Has a 50% chance of failing.**
 */
export async function getCurrentAssignment(): Promise<Assignment> {
  return {
    id: 69420,
    questions: [question1, question2, question3]
  };
}
