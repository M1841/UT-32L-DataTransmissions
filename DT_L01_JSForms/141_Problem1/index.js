function fetchUser() {
  console.log("[200 OK] GET /user/me");
  return {
    id: "9f57f64e-e178-4c02-a4ea-fb476ec00b8e",
    name: "Mihai Mureșan",
  };
}

const textField = document.getElementById("usernameInput");
const user = fetchUser();
textField.value = user ? user.name : "";

$("#usernameChangeForm").on("submit", (event) => {
  event.preventDefault();
  console.log(`[200 OK] PUT /user/${user.id}?username=${textField.value}`);
});
