import { USER_URL } from "@/constants";

export const HandleRegister = async (
    fullname,
    email,
    password,
    repeatpassword,
    router
) => {
    try {
        const response = await fetch(USER_URL.signup, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: fullname,
                email: email,
                password: password,
                repeatpassword: repeatpassword,
            }),
        });
        const data = await response.json();
        if (response.status === 201) {
            router.push("/login");
        } else {
            console.log(data.error);
        }
    } catch (err) {
        console.log(err);
    }
};

export const HandleLogin = async (email, password, router, setIsLoggedIn) => {
    try {
        const response = await fetch(USER_URL.login, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        const data = await response.json();
        if (response.status === 200) {
            const token = data.token;
            const userId = data.userId;
            localStorage.setItem("token", token);
            localStorage.setItem("userId", userId);
            setIsLoggedIn(true);

            router.push("/");
        } else {
            console.log(data.error);
        }
    } catch (err) {
        console.log(err);
    }
};
