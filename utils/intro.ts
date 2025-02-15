export type Meeting = {
  name: string;
  date: Date;
  description: string;
  email: string;
  time: string;
  amountOfMoney: number;
  id: number;
};

export async function fetchNearestNigerianPrince(showType?: false, radius?: number): Promise<any>;
/** Fetches the nearest Nigerian Prince within a certain radius of the user and book a meeting.
 * @param showType - If true, activates the documentation you're reading right now :) This is completely unnecessary; usually you want your documentation to always be on!
 * @param radius - The radius, in miles, from the user to check for Nigerian Princes. This is optional; by default, it will be set to 25 miles.
 * @returns The details of the meeting with the Nigerian Prince.
 */
export async function fetchNearestNigerianPrince(showType?: true, radius?: number): Promise<Meeting>;
export async function fetchNearestNigerianPrince(showType = false, radius = 25) {
  const meeting: Meeting = {
    name: "nigerian prince^2",
    date: new Date(),
    description: "double the prince, double the price",
    email: "nigerianprince@nigerianprince.com",
    time: "10:00AM",
    amountOfMoney: 9999999999,
    id: 5
  };
  if (!showType) return meeting as any;
  return meeting;
}

export const importedObjectJs = {
  someValue: "maybe this could be like a global constant or smth",
  apiKey: "obviously this isnt how you implement an actual apiKey in your project",
  actualPiniaStore: "a pinia store is basically just an object that you import (technically its a function but wtv nerd)"
} as any;

export const importedObjectTs = {
  someValue: "maybe this could be like a global constant or smth",
  apiKey: "obviously this isnt how you implement an actual apiKey in your project",
  actualPiniaStore: "a pinia store is basically just an object that you import (technically its a function but wtv nerd)"
};
