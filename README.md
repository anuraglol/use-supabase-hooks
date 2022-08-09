<p align="center">
  <img src="https://user-images.githubusercontent.com/77309809/183580340-29c69e0a-bb03-4f35-afd5-41846b947976.svg" />
</p>

## use-supabase-hooks

`use-supabase-hooks` contains react hooks for common supabase functions, with type safety!

Demo: https://use-supabase-hooks.vercel.app

## Installation

`use-supabase-hooks` is available as a npm package, you can install it using your preferred package manager.

```
$ npm i use-supabase-hooks
```

## Usage

Currently `use-supabase-hooks` exports a total of 8 hooks, using them is pretty straight forward. Some examples are give below:

### using the `useUser` hook:

```jsx
import { useUser } from "use-supabase-hooks";

const { user, loading, error } = useUser(client);
```

In the above example, `client` is the Supabase client, and the hook returns the current user, loading and error state.

### using the `useSelectData` hook:

```jsx
import { useSelectData } from "use-supabase-hooks";

const { data, loading, error } = useSelectData(client, "users", {
  picks: ["name", "email"],
  eqs: { id: 1 },
});
```

In the above example, `client` is the Supabase client, picks are the fields to select, and eqs are the equality conditions.
