import { IWrite } from "./iwrite";
import { User } from "./user";

export class WriteDisplay implements IWrite {

    write(user: User) {
        alert("User Name = " + user.userName);
        alert("User Email = " + user.userEmail);
        alert("User Phone = " + user.userPhones);
        alert("User Color = " + user.userColor);
    }
}