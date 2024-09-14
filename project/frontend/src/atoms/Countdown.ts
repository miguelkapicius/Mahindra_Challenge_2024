import { atom } from "recoil";

export const countdownAtom = atom({
    key: "countdown",
    default: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    }
});