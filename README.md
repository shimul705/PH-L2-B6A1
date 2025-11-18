
---
# TypeScript Blog - Interface ও Type এর পার্থক্য, Union ও Intersection এর বিস্তারিত উদাহরণ।

**লেখক:** শিমুল মাহমুদ রুমেল  
**তারিখ:** ১৮ নভেম্বর, ২০২৫

---

Hello Everyone, আজকের এই ব্লগে আমরা TypeScript এর দুইটা জিনিস নিয়ে আলোচনা করব। একটা হলো Interface আর Type এর মধ্যে পার্থক্য আর আরেকটা হলো Union আর Intersection Types এর ব্যাবহার ও উদাহরণ।
তো চলো শুরু করি--

## ১. Interface আর Type এর পার্থক্য

### Interface কী?

Interface হলো object এর structure define করার একটা উপায়। সাধারণত object shape বা class structure বানাতে use করা হয়।
যেমনঃ

```ts
interface User {
  name: string;
  age: number;
  email: string;
}

const user: User = {
  name: "Karim",
  age: 25,
  email: "karim@example.com"
};
```

### Type কী?

Type হলো যেকোনো ধরনের type define করার জন্য। Union, intersection বা complex types বানাতে এটা বেশি flexible।
যেমনঃ

```ts
type ID = string | number;
type Status = "active" | "inactive";

let userId: ID = "abc123";
let userStatus: Status = "active";
```

### তো এদের মধ্যে মুল পার্থক্য টা কী?

Interface এ একই name এ multiple declaration করা হলে সেটা merge হয়ে যায়, কিন্তু type এ error দেয়। Type এ আবার union বানানো সহজ, তবে interface এ extends করাটা natural লাগে।

### চলো এবার একটা Combined Example দেখে নেয়া যাক
এখানে interface ও type দুইটাই ব্যাবহার করা হয়েছে। 

```ts
interface Person {
  name: string;
  age: number;
}

type Role = "admin" | "user" | "guest";

type Employee = Person & {
  role: Role;
  employeeId: string;
}

const employee: Employee = {
  name: "Rahman",
  age: 30,
  role: "admin",
  employeeId: "EMP001"
};
```
তো, আমরা ছোট্ট করে দেখে ফেললাম interface ও type এর মধ্যে পার্থক্য।
---

## ২. Union আর Intersection Types

এখন চলো Union ও Intersection টাইপ সম্পর্কে কিছু জানা যাক উদাহরণ সহ।

### Union Types (|)

Union type বলতে সহজে যা বুঝায় তা হলো- একটা variable একাধিক type এর হতে পারে। যখন আমাদের value different types হয় তখন আমরা এটা use করতে পারি।
যেমনঃ

```ts
type PaymentMethod = "bkash" | "nagad" | "card";

function processPayment(method: PaymentMethod, amount: number) {
  console.log(`Processing ${amount} via ${method}`);
}
```

### Intersection Types (&)

Intersection type বলতে বুঝায় multiple types একসাথে combine করা। যখন একটা object এ সব properties একসাথে লাগে তখন আমরা এটা use করতে পারি।
যেমনঃ

```ts
type ContactInfo = {
  email: string;
  phone: string;
}

type Address = {
  city: string;
  area: string;
}

type FullProfile = ContactInfo & Address;
```

### তো এখন একটা Real Scenario Example দেখে নেই।

এখানে union আর intersection দুইটাই use করা হয়েছে। এটা একটা authentication system এর example যেখানে different user types আছে কিন্তু সবার কিছু common properties আছে।

```ts
type Admin = {
  role: "admin";
  permissions: string[];
}

type RegularUser = {
  role: "user";
  userId: string;
}

type AuthUser = (Admin | RegularUser) & {
  token: string;
  isActive: boolean;
}

const adminUser: AuthUser = {
  role: "admin",
  permissions: ["read", "write", "delete"],
  token: "xyz789",
  isActive: true
};
```
এখানে আমরা দেখতে পাচ্ছি যে Admin আর RegularUser নামে দুইটা টাইপ ডিফাইন করা হয়েছে, যাদের প্রপার্টি হলো role এবং তাদের নিজস্ব আলাদা প্রপার্টি (permissions বা userId)।

তারপর AuthUser টাইপে আমরা union ব্যবহার করেছি, যার মানে — ইউজারটি Admin অথবা RegularUser, যেকোনো একটি হতে পারে। আর এর সাথে intersection ব্যবহার করে আগের টাইপের সাথে অতিরিক্ত দুটি প্রপার্টি (token এবং isActive) যুক্ত করা হয়েছে।
---

## আজকে এই পর্যন্তই থাকলো, শেষ কথা হচ্ছে

Interface object structure এর জন্য ভালো, Type flexible types এর জন্য ভালো। Union দিয়ে options define করা হয়, Intersection দিয়ে combine করা হয়।