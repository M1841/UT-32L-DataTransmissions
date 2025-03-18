function fetchUser() {
  return {
    id: "9f57f64e",
    name: "mihai_muresan",
  };
}

const textField = document.getElementById("usernameInput");
const user = fetchUser();
textField.value = user ? user.name : "";

$("#usernameChangeForm").on("submit", (event) => {
  event.preventDefault();
  user.name = textField.value;
  console.log("Updated user", user);
});
