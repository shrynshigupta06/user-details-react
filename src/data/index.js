import axios from "axios";

export async function getUsers() {
    try {
        const axiosConfig = {
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/users"
        }

        const usersList = await axios(axiosConfig).then(res => res.data);

        return usersList;
    } catch (error) {
        console.error("Error getting country list", error);
    }
}