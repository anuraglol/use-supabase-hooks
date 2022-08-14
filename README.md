<p align="center">
  <img src="https://user-images.githubusercontent.com/77309809/183580340-29c69e0a-bb03-4f35-afd5-41846b947976.svg" />
</p>

## use-supabase-hooks

`use-supabase-hooks` contains react hooks for common supabase functions, with type safety!

Website: https://use-supabase-hooks.vercel.app

## Installation

`use-supabase-hooks` is available as a npm package, you can install it using your preferred package manager.

```
$ npm i use-supabase-hooks
```

## Usage

Currently `use-supabase-hooks` exports a total of 8 hooks, using them is pretty straight forward. The list of hooks along with their usage is below:

### using the `useUser` hook:

```jsx
import { useUser } from "use-supabase-hooks";

const { user, loading, error } = useUser(client);
```

In the above example, `client` is the Supabase client, and the hook returns the current user, loading and error state.

### using the `useAuth` hook

Signing Up using email and password combination:

```jsx
import { useAuth } from "use-supabase-hooks";

const { signIn, signUp } = useAuth(client);

const { user, session, error } = await signIn({
  email: "eddiemunson@st.com",
  password: "dusty-bun",
});
```

Signing In using email and password combination:

```jsx
import { useAuth } from "use-supabase-hooks";

const { signIn } = useAuth(client);

const { user, session, error } = await signIn({
  email: "eddiemunson@st.com",
  password: "dusty-bun",
  redirectTo: "http://localhost:3000/dashboard",
});
```

Signing In using third party providers

```jsx
import { useAuth } from "use-supabase-hooks";

const { signIn } = useAuth(client);

const { user, session, error } = await signIn({
  provider: "google", // accepts any valid supabase provider
  redirectTo: "http://localhost:3000/dashboard",
});
```

### using the `useSelectData` hook:

```jsx
import { useSelectData } from "use-supabase-hooks";

const { data, loading, error } = useSelectData(client, "users", {
  picks: ["name", "email"], // columns to pick
  eqs: ["id", 1], // equality conditions
});
```

### using the `useInsertData` hook:

```jsx
import { useInsertData } from "use-supabase-hooks";

const { data, loading, error } = useInsertData(client, "users", data: {
  id: 1,
  name: "Eddie Munson",
  email: "eddiemunson@st.com",
});
```

### using the `useUpdateData` hook:

```jsx
import { useUpdateData } from "use-supabase-hooks";

const { data, loading, error } = useUpdateData(client, "users", data: {
  id: 1,
  name: "Eddie the Banished",
  email: "eddiemunson@st.com",
}, eqs: ["id", 1]);
```

### using the `useUpsertData` hook:

```jsx
import { useUpsertData } from "use-supabase-hooks";

const { data, loading, error } = useUpsertData(client, "users", data: {
  id: 1,
  name: "Steve Harrington",
  email: "steve@st.com",
});
```

### using the `useDeleteData` hook:

```jsx
import { useDeleteData } from "use-supabase-hooks";

const { data, loading, error } = useDeleteData(client, "users", eqs: ["id", 1]);
```

And thats a wrap for this one! Hope you find this useful!
