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
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md space-y-6 font-sans">
        <div className="text-gray-800 text-lg">
          <p>
            <strong>Message:</strong> {context.message}
          </p>
          <p>
            <strong>From:</strong> {context.user}
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">User</label>
          <input
            type="text"
            value={context.user}
            onChange={(e) => context.setUser(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <input
            type="text"
            value={context.message}
            onChange={(e) => context.setMessage(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type a message"
          />
        </div>
      </div>

    );

}

export default Message;