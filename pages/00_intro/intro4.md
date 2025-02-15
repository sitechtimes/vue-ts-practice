First, if you haven't already, click the "next" button in your browser and move to http://localhost:3000/00_intro/intro3. ▶️

If you haven't fixed all of the errors, you may see a big bad error message and freak out. That's okay! It's meant to error out. 💥

## Lets review the file:

### Firstly, the User type:

```ts
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

First off, notice how each line ends with a semicolon. This isn't required, you could use commas, or even nothing, if you wanted. Semicolons are just standard. 📃

Also notice how `User.parents.father` has a `?` next to it. This means it's an optional property: a `User` object can either have it or not have it, and TypeScript won't complain. This `?` is pretty common in TypeScript, and it usually means "optional". 🔮

The rest of the properties in `User` do not have a `?` next to them: this means they're required, and TypeScript WILL complain if a required property is missing. 🪓

### Let's look at an example in the login function.

```ts
function login() {
  const mockFetchRequest: User = {
    id: 0,
    name: "Bob",
    email: "bob@bob.com",
    ipv4: "127.0.0.1",
    address: "123 Sesame St",
    wifiPassword: "8==========D",
    socialSecurityNumber: "1234567890",
    parents: {
      mother: {
        maidenName: "Bobette"
      }
    },
    bankDetails: {
      username: "bob",
      password: "bob",
      routingNumber: "abcdefghijk",
      accountNumber: "lmnopqrstuv"
    }
  };
}
```

Let's take a look at the error when we hover over `mockFetchRequest`:

<img alt="mockFetchRequest error" src="https://github.com/sitechtimes/vue-ts-practice/blob/main/public/intro3_1.png" height="300" />

Okay, so a literal translation would be "property `nickname` is missing in type { ...mockFetchRequest } but required in type `User`."

When you first read the error, you may have noticed how there's a big chunk of code in the middle. _The big chunk of code may look scary_, but **if you understand what it's trying to say, you can easily abstract it away**, just like how I did in the text above. The big chunk of code in this case is just `mockFetchRequest`.

Okay, so to fix this error, we simply add a `nickname` property to `mockFetchRequest`. Simple enough.

##### But before we fix the code, let's open the website and test the function.

When you click the "login" button, you may have expected an error in the console. But that's strange, no error appeared?

That's because TypeScript points out **`TypeError`**s (but sometimes also actual errors). TypeErrors are simply guides to help you write good code; they're more of suggestions than rules. This is because, again, of JavaScript's leniency.

However, we **WANT** TypeErrors in VSCode rather than in the browser. Fixing code in one go is easier than fixing code, testing it, fixing it again, testing it again, and so on and so forth.

### Okay, let's move on to the next problem: the toggleMeetings function.

```ts
function toggleMeetings() {
  if (userStore.userInfo.id) {
    console.log("this logged-in user is using this very awesome and cool feature");
  }
}
```

Alright, let's do the same thing and just read the error.

<img alt="userStore.userInfo error" src="https://github.com/sitechtimes/vue-ts-practice/blob/main/public/intro3_2.png" height="200" />

Okay, this is a much more readable error. "`userStore.userInfo` is possibly undefined."

Well, this goes back to how we defined `userStore.userInfo` at the top. As a recap, because we didn't specify a value when we created the variable, it **IS** undefined at creation time. Even if we assign it a value 0.000000000001ms after creating it, the variable is _still_ undefined during that 0.000000000001ms.

Therefore, TypeScript will tell us that the variable _may_ be undefined, so we must handle any case where the variable _is_ undefined.

The solution to this problem would be to use the **Optional Chaining** operator, which is actually already a JavaScript feature, but you probably never used it before. [Read more about it here.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

```ts
function toggleMeetings() {
  // correct code ✅
  if (userStore.userInfo?.id) {
    console.log("this logged-in user is using this very awesome and cool feature");
  }
}
```

### Onto the last problem: the component.

```vue
<div v-if="showMeetings === true">
  <IntroMeeting />
</div>
```

As always, let's read the error first.

<img alt="IntroMeeting error" src="https://github.com/sitechtimes/vue-ts-practice/blob/main/public/intro3_3.png" height="350" />

Well, this certainly isn't as readable. As a rule of thumb, if an error looks super complex, just read the bottom part of the error.

The bottom part of the error reads "Property `meeting` is missing in type `{}` but required in type `{ readonly meeting: Meeting }`".

Okay, well the `{}` part must mean the props that we've passed to the component, which is nothing. The `{ readonly meeting: Meeting }` part must mean it's the component's props (since it's readonly), and that fits with the "property `meeting` is missing" part, since it clearly shows that the component's props requires a `meeting` prop.

Knowing how to read, process, and digest errors is a learning process; you won't get it immediately (probably).

So, let's pass an object with type `Meeting` as a prop to the component. Here's the correct code (among many implementations):

```vue
<div v-if="showMeetings === true">
  <!-- this implementation will only work if there's a meeting in userStore.meetings! -->
  <IntroMeeting :meeting="userStore.meetings[0]" />
</div>
```

Now that we have an understanding of why we use TypeScript + a basic understanding of TypeScript, let's move on to the actual exercises!
