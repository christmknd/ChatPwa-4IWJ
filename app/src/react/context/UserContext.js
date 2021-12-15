import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = function ({ children }) {
    const [user,setUser] = useState({})

    const [isConnect,setIsConnect] = useState(false)


    const actions = {
        setIsConnect: function () {
            setIsConnect(!isConnect)
        },
        setUser: function (user) {
            setUser(user)
        },
    };

    const selectors = {
        getIsConnect: function getIsConnect() {
            return isConnect;
        },
        getUser: function getUser() {
            return user;
        },
    };

    return (
        <UserContext.Provider value={{ selectors, actions }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
