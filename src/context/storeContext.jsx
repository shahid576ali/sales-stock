import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [user, setUser] = useState({});
  const apiKey = import.meta.env.VITE_MY_API_KEY;

  const userDetails = async (userId) => {
    if (!userId) {
      console.error("Invalid userId");
      return;
    }

    if (!apiKey) {
      console.error("API Key is not defined in environment variables");
      return;
    }

    try {
      const response = await axios.get(`${apiKey}/user/details`, {
        params: { userId },
        withCredentials: true,
      });
      const data = response.data;
      setUser(data.userDetails);
    } catch (error) {
      console.error("Error connecting to the server:", error);
    }
  };

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (userId) {
      userDetails(userId);
    }
  }, [userId]);

  const contextValue = {
    userDetails,
    user,
    apiKey
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
