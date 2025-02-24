// objects1
/** Represents an object; don't worry about this */
export type SomeObject = Record<string | number | symbol, any>;

//objects2
/** Represents a user profile. */
export type Profile = {
  /** Name of the user. */
  name: string;
  /** Email that the user used when signing up. */
  email: string;
  /** Whether the user prefers light or dark mode. */
  theme: "light" | "dark";
};

/** Fetches a mock user profile from a backend API endpoint */
export function getUserProfile(): Profile {
  return {
    name: "Bob",
    email: "bob@bob.com",
    theme: "dark"
  };
}

/** Sends a mock request to a backend API endpoint to update the user's profile */
export async function updateProfile(profile: Profile) {}

//objects3
/** Represents a hero object. */
export type Character = {
  /** Name of the character that the user made during character select. */
  name: string;
  /** Health of the caracter. The character should faint at 0. */
  health: number;
  /** Mana of the caracter. The character should not be able to cast any spells at 0. */
  mana: number;
  /** Level of the character. */
  level: number;
  /** Stats of the character. */
  stats: {
    /** How much strength the character has. Scales from 1-100.
     *
     * In battles, strength determines how much health the character's attacks deal.
     */
    strength: number;
    /** How much agility the character has. Scales from 1-100.
     *
     * In battles, agility determines the chance to dodge an attack.
     */
    agility: number;
    /** How much intelligence the character has. Scales from 1-100.
     *
     * In battles, intelligence determines how much mana the character regenerates per turn.
     */
    intelligence: number;
  };
};

/** Fetches a mock hero from a backend API endpoint */
export function getCharacter(): Character {
  return {
    name: "Bob",
    health: 100,
    mana: 500,
    level: 30,
    stats: {
      strength: 10,
      agility: 8,
      intelligence: 7
    }
  };
}
