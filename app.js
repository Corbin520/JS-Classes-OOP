

// What is a class?
    // a class is a way to build out a blueprint of an object we would like to create which we can use multiple times
    // it saves us from writing duplicate code. All we have todo to create a new User is just call the "new User" and pass in arguments

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
    
    // creating an Admin class which extends and inharets from our User class
    class Admin extends User { // extends = inhariting all of the "User" properties into our "Admin" class (allows us to use the constructor from "User" and its methods)
    
        deleteUser(user) { // only "Admin" can use this method to delete a user from our "User" class
    
            users = users.filter(u => { // filter method in JavaScript allows us to cycle through each element in the array & filter one or more of the items out
                console.log("U === ", u); // "u" is like "i" in a for loop
                // u.email === is the email property of whatever user "u" we are cycling through at the time of the filter and if its not = user.email then it = true
                    // once our return = false, we will remove that user from the array
                return u.email != user.email // Filters through our array "users" 
            })
            
        }
    }
    
    var corbin = new User("corbin@corbin.com", "Corbin") // new instance of the object
    var mckell = new User("mckell@mckell.com", "Mckell") // new instance of the object
    var admin = new Admin("admin@admin.com", "Administrator") // creating an Admin (has access to "User" & "Admin" classes)
    
    var users = [corbin, mckell]
    admin.deleteUser(corbin)
    console.log(users)
    
    
    // corbin.login() // login method
    // mckell.logout() // logout method
    // corbin.updateScore() // updating the score each time its called
    // corbin.login().updateScore().updateScore().logout() // method chaining (only because we are returning "this" on each method)
    
    