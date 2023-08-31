import { atom } from "recoil";

const userDataState = atom({
  key: "userDataState", // unique ID (with respect to other atoms/selectors)
  default: {
    id: 1,
    username: "jin",
    password: "",
    name: "Hwang Sangjin",
  }, // default value (aka initial value)
});

export default userDataState;
