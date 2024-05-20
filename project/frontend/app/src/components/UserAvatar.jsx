import { useState } from "react";
import { User, Gear, SignOut, CaretDown, CaretUp } from "@phosphor-icons/react";

export default function UserAvatar({ user, src }) {
    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const handleOptionClick = (option) => {
        setShowOptions(false);
    };

    return (
        <div className="flex flex-col items-center relative">
            <div onClick={toggleOptions} className="flex items-center gap-2 cursor-pointer hover:bg-primary/5 hover:text-primary px-3 py-1 rounded-lg duration-300">
                <img
                    className="rounded-full size-12"
                    src={src}
                    alt="Avatar"
                />
                {!showOptions ? <CaretDown size={16} /> : <CaretUp size={16} />}
            </div>

            {showOptions && (
                <div className="bg-secoundary/50 p-2 w-max flex flex-col gap-1 absolute top-full right-0 mt-2 rounded-lg ring-1 z-50 ring-white/20 duration-300">
                    <button
                        className="hover:bg-secoundary/60 duration-200 rounded-lg px-4 py-2 flex items-center gap-2"
                        onClick={() => handleOptionClick("profile")}
                    >
                        <User size={24} /> Profile
                    </button>
                    <button
                        className="hover:bg-secoundary/60 duration-200 rounded-lg px-4 py-2 flex items-center gap-2"
                        onClick={() => handleOptionClick("settings")}
                    >
                        <Gear size={24} /> Settings
                    </button>
                    <button
                        className="hover:bg-secoundary/60 duration-200 rounded-lg px-4 py-2 flex items-center gap-2"
                        onClick={() => handleOptionClick("logout")}
                    >
                        <SignOut size={24} /> Sign out
                    </button>
                </div>
            )}
        </div>
    );
}
