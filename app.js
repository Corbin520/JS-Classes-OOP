class User {
    constructor(email, name) { // building out the blueprint of our object using a constructor
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login() {
        console.log(this.email, "Just logged in..")
        return this; // this = each instance of the object
    }
    logout() {
        console.log(this.email, "Just logged out..")
        return this; // ethis = each instance of the object
    }
    updateScore() {
        this.score++
        console.log(this.email, "Score is now: ", this.score)
        return this; // this = each instance of the object
    }
}

var corbin = new User("corbin@corbin.com", "Corbin") // new instance of the object
var mckell = new User("mckell@mckell.com", "Mckell") // new instance of the object



corbin.logout()
mckell.login()