type AuthUser = {
  username: string;
  password: string;
};

class ApiService {
  constructor() {}

  /** Mocks a request to a SQL database.
   * @param query - The SQL query to execute. Can be anything in this exercise
   * @returns An array of users
   */
  async sql(query: string): Promise<AuthUser[]> {
    return [
      {
        username: "bob",
        password: "password"
      },
      {
        username: "alice",
        password: "password"
      },
      {
        username: "charlie",
        password: "password"
      }
    ];
  }
}

export const apiService = new ApiService();
