import React from "react";
import { validation } from "./validation";

export default function Form() {
    const [userData, setUserData] = React.useState({
    username: "",
    password: "",
    });

    const [errors, setErrors] = React.useState({
    username:"",
    password:"",
    });

    function handleChange(e) {
        setErrors(
            validation({
                ...userData,
                [e.target.name]: e.target.value,
        })
        );

        setUserData({
            ...userData,
        [e.target.name]: e.target.value,
    });
}

    return (
        <div>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                name="username"
                value={userData.username}
                onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}

            <button type="submit">Submit</button>
        </div>
    );
}
