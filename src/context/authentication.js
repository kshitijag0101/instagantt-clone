import { createContext, useEffect, useState } from "react";
const AuthContext = createContext();

function Provider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        if (localStorage.getItem("userId") && localStorage.getItem("token")) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);
    const store = {
        isLoggedIn,
        setIsLoggedIn,
    };
    return (
        <AuthContext.Provider value={store}>{children}</AuthContext.Provider>
    );
}

export { AuthContext, Provider };
