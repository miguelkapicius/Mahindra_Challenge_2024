import { atom } from "recoil";

export const authState = atom({
    key: "authAtom",
    default: {
        isAuthenticated: false,
        user: null,
    }
})