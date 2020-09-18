import { requests } from "../agent";

import jwtDecode from "jwt-decode";

const tokenKey = "token";

// export async function login(phoneNumber, password) {
//   const { data: jwt } = await requests.post(apiEndpoint, {
//     phoneNumber,
//     password,
//   });
//   localStorage.setItem(tokenKey, jwt);
// }

export async function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export async function logout() {
  localStorage.removeItem("token");
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    console.log(jwt);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}

// export function isInRoleAdmin() {
//   var user = getCurrentUser();
// if(!user || )
// }

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  logout,
  getCurrentUser,
  loginWithJwt,
  getJwt,
};
