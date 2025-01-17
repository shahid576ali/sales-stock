import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [user, setUser] = useState({});

const userDetails = async (userId) => {
  if (!userId) {
    console.error("Invalid userId");
    return;
  }

  try {
    const response = await axios.get(`http://localhost:4000/user/details`, {
      params: { userId },
      withCredentials: true
    });
    const data = response.data;
    setUser(data.userDetails);
  } catch (error) {
    console.error(
      "Error to connect with server",
    );
  }
};
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (userId) {
      userDetails(userId);
    }
  }, []);

  const contextValue = {
    userDetails,
    user,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
