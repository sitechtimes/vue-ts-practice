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
