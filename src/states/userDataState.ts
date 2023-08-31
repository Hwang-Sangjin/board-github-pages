import { atom } from "recoil";

const userDataState = atom({
  key: "userDataState", // unique ID (with respect to other atoms/selectors)
  default: {
    id: 0,
    username: '',
    email: '',
  }, // default value (aka initial value)
});

export default userDataState;
