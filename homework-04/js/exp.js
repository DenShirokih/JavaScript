function askPassword(ok, fail) {
  let password = prompt("Password?");
  if (password === "rock") {
    ok();
  } else {
    fail();
  }
}

const user = {
  name: "Денис",

  login(result) {
    console.log(this.name + (result ? " logged in" : " failed to log in"));
  },
};
askPassword(user.login.bind(user, true), user.login.bind(user, false));
