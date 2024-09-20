import axios from "axios";

export function useCreateUser() {
    const createUser = async (
        e: Event,
        fullName: string,
        username: string,
        email: string,
        image: string,
        password: string
    ) => {
        try {
            e.preventDefault();
            const response = await axios.post("http://localhost:3000/users", {
                name: fullName,
                username: username,
                email: email,
                password: password,
                image_url: image,
            });
            console.log(response);
        } catch (error) {
            console.error("Error: ", error);
        }
    };

    return { createUser };
}
