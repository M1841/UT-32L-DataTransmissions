// Message displayed in the console
console.log("Hello JavaScript");

// Message displayed in a web page
document.getElementById("message").innerHTML = "Message from JavaScript";

// Variable definitions
let sum = 10;
let name = "Alexandru";
let isActive = true;
let user = { id: 1, name: "Andrei", age: 21 };

user = {
  id: 1,
  name: "Alexandru Cristea",
  username: "acristea ",
  email: " acristea@test.com ",
  address: {
    street: "Padin",
    number: "Ap. 10",
    city: "Cluj - Napoca",
    zipcode: "123456",
    geo: {
      lat: "46.783364",
      lng: "23.546472",
    },
  },
  phone: "004-07xx-123456",
  company: {
    name: "XYZ",
    domain: "Air Traffic Management",
    cities: ["Cluj - Napoca ", " Vienna ", " Paris "],
  },
};

// Displaying properties from the `user` object
console.log(user.name);
console.log(user.address.geo.lat);
console.log(user.company.name);
console.dir(user.company.cities);
console.log(user.company.cities[0]);

// Defining and calling a function
function print(message) {
  console.log(message);
}
print("hello");

// Ternary operator
let password = "123456";
console.log(password == "123456" ? "ALLOW" : "DENY");

// `if` example
if (password == "123456") {
  console.log("permission accepted");
} else {
  console.log("permission accepted");
}
