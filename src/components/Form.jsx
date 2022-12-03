import React from "react";
import { validation } from "./validation";

export default function Form(props) {
    const [userData, setUserData] = React.useState({
    username: "",
    password: "",
    });

    const [errors, setErrors] = React.useState({
    username:"",
    password:"",
    });

    function handleInputChange(e) {
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

function handleSubmit(e) {
    e.preventDefault();
        props.login(userData);
}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    value={userData.username}
                    onChange={handleInputChange}
                />
                {errors.username && <p>{errors.username}</p>}
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleInputChange}
                />
                {errors.password && <p>{errors.password}</p>}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
