import axios from "axios";

export function useCreateUser() {
    const createUser = async (
        fullName: string,
        username: string,
        email: string,
        image: string,
        password: string,
    ) => {
        try {
            const response = await axios.post("http://localhost:3000/users", {
                name: fullName,
                username: username,
                email: email,
                password: password,
                image: image,
            });
            console.log("User created", response);
        } catch (error) {
            console.error("Error: ", error);
        }
    };

    return { createUser };
}
