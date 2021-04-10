import { User } from "./models/User";

const user = new User({ name: "Sam", age: 20 });
user.set({ name: "John", age: 40 });

user.on("change", () => {
  console.log("Change 1");
});

user.on("change", () => {
  console.log("Change 2");
});

user.on("change", () => {
  console.log("Change 3");
});

user.trigger("change");
