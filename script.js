let database = [
  {
    username: "Eric",
    password: "totallySecure"
  },
  {
    username: "Ingrid",
    password: "totallySecure1"
  },
  {
    username: "Tim",
    password: "totallySecure2"
  }
]

let newsFeed = [
  {
    username: "Bobby",
    timeline: "So tired of learning."
  },
  {
    username: "Sarah",
    timeline: "Javascript will be my career path"
  }
];

function isUserValid(user, pw) {
  for (var i = 0; i < database.length; i++) {
    if (database[i].username === user && database[i].password === pw) {
      return true;
    }
  }
  return false;
}

function signIn(user, pw) {
  if (isUserValid(user, pw)) {
    console.log(newsFeed);
  } else {
    alert("Sorry, wrong logIn information.")
  }
}

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("Enter your password.");

signIn(userNamePrompt, passwordPrompt);
