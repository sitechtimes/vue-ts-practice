// variables2
export type ServerStatus = {
  status: "online" | "offline" | "maintenance";
  message?: string;
  version: string;
  lastUpdated: Date;
};

/** Mocks a request to an example backend API endpoint. Returns the status of the server */
export async function getServerStatus(): Promise<ServerStatus> {
  return {
    status: "online",
    message: "Server is online on http://localhost:3001",
    version: "v4.2.0",
    lastUpdated: new Date()
  };
}

//variables3
export type User = {
  id: number;
  name: string;
  email?: string;
  provider: "Google" | "Facebook" | "X";
  lastLoggedIn: Date;
};

/** Mocks a request to an example backend API endpoint. Returns the logged in user.
 * @docs You can assume that this fetch call will **never** fail. It will **always** return a user.
 * @param username - The username of the user (can be anything in this exercise)
 * @param password - The password of the user (can be anything in this exercise)
 */
export async function loginUser(username: string, password: string): Promise<User> {
  return {
    id: 0,
    name: "Bob",
    email: "bob@bob.com",
    provider: "Google",
    lastLoggedIn: new Date()
  };
}
