import React, { useEffect} from "react";
import { UserContext } from "./UserContext";


const Message: React.FC = () => {
    const context = React.useContext(UserContext);
    
    if (!context) {
        throw new Error("Message must be used within a UserProvider");
    }

    useEffect(() => {
      const timer = setTimeout(() => {
        context.setUser("timer changed lei");
        context.setMessage("timer changed this is cool");
      }, 1000);
      return () => clearTimeout(timer);
    }, []); // Empty dependency array to run only once on mount

    return(
      <div>
         <div>Message {context.message} from {context.user}</div>
         <input type="text" value={context.user} onChange={(e) => context.setUser(e.target.value)} />
         <input type="text" value={context.message} onChange={(e) => context.setMessage(e.target.value)} />
     </div>
    );

}

export default Message;