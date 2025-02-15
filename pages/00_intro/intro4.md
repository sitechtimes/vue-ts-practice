First, if you haven't already, click the "next" button in your browser and move to http://localhost:3000/00_intro/intro3.

If you haven't fixed all of the errors, you may see a big bad error message and freak out. That's okay! It's meant to error out.

## Lets review the file:

### Firstly, the User type:

```js
type User = {
  id: number;
  name: string;
  email: string;
  nickname: string;
  ipv4: string;
  address: string;
  wifiPassword: string;
  socialSecurityNumber: string;
  parents: {
    mother: {
      maidenName: string;
    };
    father?: {
      name: string;
    };
  };
  bankDetails: {
    username: string;
    password: string;
    routingNumber: string;
    accountNumber: string;
  };
};
```

First off, notice how each line ends with a semicolon. This isn't required, you could use commas, or even nothing, if you wanted. Semicolons are just standard.

Also notice how `User.parents.father` has a `?` next to it. This means it's an optional property: a `User` object can either have it or not have it, and TypeScript won't complain. This `?` is pretty common in TypeScript, and it usually means "optional".

The rest of the properties in `User` do not have a `?` next to them: this means they're required, and TypeScript WILL complain if a required property is missing.

### Let's look at an example
