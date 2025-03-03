function fetchUser() {
  return {
    id: "9f57f64e-e178-4c02-a4ea-fb476ec00b8e",
    name: "mihai_muresan",
  };
}

const textField = document.getElementById("usernameInput");
const user = fetchUser();
textField.value = user ? user.name : "";

$("#usernameChangeForm").on("submit", (event) => {
  event.preventDefault();
  user.name = textField.value;
  console.log(user);
});
