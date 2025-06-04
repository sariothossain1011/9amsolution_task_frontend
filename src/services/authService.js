import { jwtDecode } from "jwt-decode";

export const removeUserInfo = (key) => {
  return localStorage.removeItem(key);
};

export const storeUserInfo = ({ token }) => {
  return localStorage.setItem("token", token);
};

export const getUserInfo = () => {
  const authToken = localStorage.getItem("token");
  if (authToken) {
    const decodedData = jwtDecode(authToken);
    return decodedData;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = localStorage.getItem("token");
  const decodedData = authToken ? jwtDecode(authToken) : null;
  if (decodedData) {
    const exp = decodedData?.exp * 1000;
    const currentTime = new Date().getTime();
    console.log("exp",exp,"currentTime",currentTime)
    if (currentTime > exp) {
      removeUserInfo("token");
    }
  }
  return !!authToken;
};
