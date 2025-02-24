So, did you find anything wrong or unclear in the code? Hopefully you did! 🔎

## First, let's open the console in our browser, refresh the page, and we'll come back to it later.

For now, let's go over every bad thing about it: ⚠️

### Let's start with userInfo in the mock pinia store.

```js
userStore = reactive({
  userInfo: ref({
    id: 0,
    name: "",
    email: "",
    nickname: "",
    ipv4: "",
    address: "",
    wifiPassword: "",
    socialSecurityNumber: "",
    parents: {
      mother: {
        maidenName: ""
      }
    },
    bankDetails: {
      username: "",
      password: "",
      routingNumber: "",
      accountNumber: ""
    }
  }),
  ...
});
```

Do you see the problem? We need to initialize every value with a default value! 🔧

##### What if our user object had 500 bajillion fields?

We would need to manually create 500 bajillion fields when we initialize our user! 🔨

### Next, let's look at userInfo.meetings.

```js
userStore = reactive({
  ...,
  meetings: ref([])
});
```

Obviously userInfo.meetings is an array of meetings, but.. what data does a meeting have❓ Who knows `¯\_(ツ)\_/¯`

### Okay, let's take a look at the onMounted:

```js
onMounted(() => {
  const someVariable = importedObjectJs.something;
  console.log(someVariable);
});
```

Did you have a hard time guessing what properties `importedObjectJs` has? Maybe you looked at what the object had by console.logging it and looking at it in the console, but that's alot of effort just to find out what an object has! 🧩

That's because JavaScript has absolutely no idea what `importedObjectJs` is. All it knows is that it's.. something.. that you're.. importing. Not very convenient! 📦

If only JavaScript could be smarter... 🧠

### Now let's skip ahead and look at the bookMeeting function.

```js
async function bookMeeting() {
  const data = await fetchNearestNigerianPrince();
  userStore.meetings.push(data);
}
```

Immediately, your question should be: what data does "data" have❓
Of course, if you didn't go into the function code, and instead hovered over the function as you were instructed to, you would know: nothing. 🚫
The function is still a black box; who _knows_ what it does, let's just hope whoever coded it ensured it works! 📦

And of course, we still have the problem of not knowing what data userStore.meetings holds! 🧠

### Okay, let's go back and look at the toggleMeetings function now.

```js
function toggleMeetings() {
  const showMeetings = ref(false);
  showMeetings.value = !showMeetings.value;
}
```

On the surface, it looks fine. It's just changing the value of a ref. 🔄

##### But we're trying to use the value of showMeetings in a button in the template!

This code will not run because showMeetings is only valid within the scope of this function. But we didn't know because JavaScript didn't throw any errors! 🚫
Even when we run this code, it's not immediately clear that we fucked up somewhere: 🚧

```sh
[Vue warn]: Property "showMeetings" was accessed during render but is not defined on instance.
  at <Intro1 onVnodeUnmounted=fn<onVnodeUnmounted> ref=Ref< undefined > >
  at <Anonymous key="/00_intro/intro1" vnode= {__v_isVNode: true, __v_skip: true, type: {…}, props: {…}, key: null, …} route= {fullPath: '/00_intro/intro1', hash: '', query: {…}, name: '00_intro-intro1', path: '/00_intro/intro1', …} ... >
  at <Anonymous key="/00_intro/intro1" vnode= {__blah_blah: blah, __blah_blah: blah, if: {…}, youre: {…}, reading: this, …} name= {your: 'final/pull/request/', \"armadillo armor accelerates aimlessly around\": for, +5/points: {…}, …}  ... >
  at <Anonymous key="/00_intro/intro1" vnode= {__v_isVNode: true, __v_skip: true, type: {…}, props: {…}, key: null, …} route= {fullPath: '/00_intro/intro1', hash: '', query: {…}, name: '00_intro-intro1', path: '/00_intro/intro1', …} ... >
  at <RouterView name=undefined route=undefined >
  at <NuxtPage >
  at <App key=4 >
  at <NuxtRoot>
```

There's also another problem with the if statement in this function - can you find it? 🔍

TODO: ✏️

<!-- TODO: describe the problem with the if statement (in 1 sentence, plain english, no shakespeare) -->
<!-- TODO: write here >>>>                 -->

Alright, let's move `showMeetings` out of the function and into the global scope to fix this function. 🚚

<!-- TODO: move `showMeetings` out of the function and into the global scope -->

### Now, let's go all the way up to the template and look at the component.

```vue
<div class="..." v-if="showMeetings" @click="showMeetings = false">
  <IntroMeeting @click.stop />
</div>
```

Looks fine, right? It's just a component that gets rendered when `showMeetings` becomes true. 😕

Let's test it out in the browser - click the toggle button with your new and improved code and look at what appears in the console. 🧪

7 errors? What? But I don't see any errors in my code... Let's get back to this later. ❌

##### Now, to summarize: Would you rather see errors in VSCode _BEFORE_ you spend time testing in your browser, or after?

TypeScript's strictness not only lets us see our errors before they hit the browser, but also improves our code quality overall by removing ambiguities that come as a result of JavaScript's leniency. 📈

Also, TypeScript is just infinitely smarter - TypeScript is like your cousin that your parents always compare you to, and JavaScript is.. you. 🏆

TL;DR: JavaScript is extremely lenient and lets us ship any code, no matter how bad, to the web. But maybe that's a bad thing. 🚢

TL;DR^2: js 👎👎👎👎👎, ts 👍👍👍👍👍
