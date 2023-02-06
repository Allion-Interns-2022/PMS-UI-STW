export default function authHeader() {
  const userData = localStorage.getItem("user");
  let user;
  if (userData) {
    user = JSON.parse(userData);
    console.log("userData", userData);
    console.log("user", user);
  }

  if (user) {
    console.log("userx", user);
    return { Authorization: "Bearer " + user };
  } else {
    return {};
  }
}
