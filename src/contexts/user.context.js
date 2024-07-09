import { createContext, useState } from "react";
import { App, Credentials } from "realm-web";
import { APP_ID } from "../realm/constants";
 
// Creating a Realm App Instance
const app = new App(APP_ID);
 
// Creating a user context to manage and access all the user related functions
// across different components and pages.
export const UserContext = createContext();
 
export const UserProvider = ({ children }) => {
 const [user, setUser] = useState(null);
 
 // Function to log in user into our App Service app using their email & password
 const usernamePasswordLogin = async (username, password) => {
   const credentials = credentials.usernamePassword(username, password);
   const authenticatedUser = await app.logIn(credentials);
   setUser(authenticatedUser);
   return authenticatedUser;
 };

 // Function to fetch the user (if the user is already logged in) from local storage
 const fetchUser = async () => {
    if (!app.currentUser) return false;
    try {
      await app.currentUser.refreshCustomData();
      // Now, if we have a user, we are setting it to our user context
      // so that we can use it in our app across different components.
      setUser(app.currentUser);
      return app.currentUser;
    } catch (error) {
      throw error;
    }
  }
  
  // Function to logout user from our App Services app
  const logOutUser = async () => {
    if (!app.currentUser) return false;
    try {
      await app.currentUser.logOut();
      // Setting the user to null once loggedOut.
      setUser(null);
      return true;
    } catch (error) {
      throw error
    }
  }
  
  return <UserContext.Provider value={{ user, setUser, fetchUser, usernamePasswordLogin, logOutUser }}>
    {children}
  </UserContext.Provider>;
}