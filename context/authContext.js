import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userDetails, setUserDetails] = useState({ email: "" });

    const logIn = (email) => {
        setIsLoggedIn(true);
        setUserDetails({ email });
    };

    const logOut = () => {
        setIsLoggedIn(false);
        alert("Você foi deslogado!");
    };

    return (
        <AuthContext.Provider
            value={{ isLoggedIn, userDetails, logIn, logOut }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
