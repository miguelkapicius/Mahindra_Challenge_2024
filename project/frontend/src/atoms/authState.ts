import { atom } from "recoil";

export const authState = atom({
    key: "authAtom",
    default: {
        isAuthenticated: true,
        user: null,
    }
})