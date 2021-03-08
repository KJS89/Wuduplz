import { observable, action } from "mobx";

class RootStore {
    // observable means global varaible
    @observable UserName = "";

    @observable PassWord = "";

    @observable Email = "";

    @observable UserId = "";

    @observable status = false;

    @action setUserId(userid){
        this.UserId = userid;
    }

    @action setPassWord(password){
        this.PassWord = password;
    }

    @action setEmail(email){
        this.Email = email;
    }

    @action setUserName(username){
        this.UserName = username;
    }
    // action changename is a function can change global variable
    @action changeName(name) {
        this.name = name;
    }
    @action setStatus(status){
        this.status=status;
    }
}

export default new RootStore();