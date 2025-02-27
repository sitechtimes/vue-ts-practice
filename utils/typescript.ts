/** Mocks a request to a backend API endpoint */
export async function fetchFromBackend(route: string, ...args: any[]) {
  return {
    json: (): any => {
      if (Math.random() < 0.5)
        return {
          user: "skibid",
          ssn: "123456789",
          address: {
            street: "123 Sesame St",
            city: "Nowhere",
            state: "Somewhere",
            country: "Everywhere",
            apartment: null,
            zip: 12345
          }
        };

      return {
        user: "huzz",
        ssn: "skibidiskibidigyatt",
        address: {
          street: "456 Sesame St",
          city: "England",
          state: "United Kingdom",
          country: "Europe",
          apartment: "2R"
        }
      };
    }
  } as Response;
}

export function parseData<T>(data: T) {
  return false;
}

export type Wendys = {
  /** Distance, in miles per freedom, the user is from this location */
  readonly distance: number;
  /** How savage the social media manager is on Twitter/X, on a scale from 0-10. */
  readonly socialMediaManagerSavageness: number;
};

export type BurgerKing = {
  /** Distance, in miles per freedom, the user is from this location */
  readonly distance: number;
  /** Array of menu item names */
  readonly menu: string[];
};

/** Returns an array of every Wendys location ever */
export async function getAllWendys(): Promise<Wendys[]> {
  return [
    {
      distance: 2,
      socialMediaManagerSavageness: 10
    },
    {
      distance: 3,
      socialMediaManagerSavageness: 4
    }
  ];
}

/** Returns an array of every Burger King location ever */
export async function getAllBurgerKings(): Promise<BurgerKing[]> {
  return [
    {
      distance: 2,
      menu: ["#15 Burger King foot lettuce"]
    },
    {
      distance: 3,
      menu: ["ur mom"]
    }
  ];
}
