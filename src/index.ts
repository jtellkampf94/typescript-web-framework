import { User } from "./models/User";
import { UserForm } from "./views/UserForm";

const user = User.buildUser({ name: "Michael", age: 66 });

const userForm = new UserForm(document.getElementById("root"), user);

userForm.render();
