
const users = {
    Vladimir: {
        age: 21,
        activity: 'student',
        isAdmin: true
    },
    John: {
        age: 30,
        isAdmin: true,
        function(user) {
            console.log(`${user} student`)
        }
    }
}
console.log(users)
users.John.function('hello')
// ===========================================================

const user = [
    {
        name: 'John',
        age: 30,
        isAdmin: false
    },
    {
        name: 'alex',
        age: 30,
        isAdmin: false
    },
    {
        name: 'Vladimir',
        age: 30,
        isAdmin: true
    }
]
for (let i = 0; i < user.length; i++) {
    if (user[i] !== 'isAdmin') {
        console.log('user[i]'.name)
    }
} 
