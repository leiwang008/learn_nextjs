import React, {useState} from "react";  

interface UserContextType {
    user: string;
    message: string;
    setUser: (user: string) => void;
    setMessage: (message: string) => void; 
}

export const UserContext = React.createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [user, setUser] = useState<string>("lei");
    const [message, setMessage] = useState<string>("this is cool");

    return (
        <UserContext.Provider value={{user, message, setUser, setMessage}}>
            {children}
        </UserContext.Provider>
    );
}