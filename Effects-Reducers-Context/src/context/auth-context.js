import React, { useState, useEffect } from 'react';

// returns an object whitch holds a component
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (email, password) => { }
});

export const AuthContextProvider = props => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    //Executes after the component is rendered and if the dependencies are changed!
    useEffect(() => {
        const isLoggedInData = localStorage.getItem('isLoggedIn');
        if (isLoggedInData === 'true')
            setIsLoggedIn(true);
    }, []);

    const loginHandler = (email, password) => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
    };

    const logoutHandler = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;