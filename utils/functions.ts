const robloxGames = ["Murder Mystery 2", "Jailbreak", "Phantom Forces", "Skibidi Ohio Simulator 9000"] as const;
type RobloxGame = (typeof robloxGames)[number];

const robloxBadges = ["Veteran Badge", "Welcome To The Club Badge", "Bricksmith Badge", "Combat Initiation Badge"] as const;
type RobloxBadge = (typeof robloxBadges)[number];

const robloxGroups = ["Chillz Studios", "Paradoxium Games", "ROLVe", "StyLiS Studios"] as const;
type RobloxGroup = (typeof robloxGroups)[number];

type RobloxItem = {
  /** Value of the avatar item, in robux. */
  readonly value: number;
  /** Whether or not the item is classified as limited or not, as part of our scheme to squeeze as much money out of these dumb children */
  readonly isLimited: boolean;
};

export type RobloxUser = {
  /** An array of the user's most recently played games. */
  readonly recentlyPlayed: RobloxGame[];
  /** An array of games that the user has marked as a favorite. */
  readonly favoriteGames: RobloxGame[];
  /** Amount of robux this user has. */
  readonly robux: number;
  /** Number of friends this user has. */
  readonly friends: number;
  /** Number of followers this user has. */
  readonly followers: number;
  /** The user's membership status. */
  readonly membershipStatus: "Builders Club" | "Turbo Builders Club" | "Outrageous Builders Club" | null;
  /** The user's preferred theme. */
  readonly isDarkMode: boolean;
  /** The user's birthday, as indicated from their initial signup. */
  readonly birthday: Date;
  /** The date the user joined the hit children's game Roblox */
  readonly joinDate: Date;
  /** Array of items the user has acquired in their inventory. */
  readonly avatarItems: RobloxItem[];
  /** Array of badges the user has acquired. */
  readonly badges: RobloxBadge[];
  /** Array of groups the user has joined. */
  readonly groups: RobloxGroup[];
};
