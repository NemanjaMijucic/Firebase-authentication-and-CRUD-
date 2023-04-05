import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  //function for creating user (returns a promise)
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  //function for loging into server (you can use code to login into any server just change functions)
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  //function for logging out
  function logout() {
    return auth.signOut();
  }

  //function for reseting password
  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  //function for updating email
  function updateEmail(email) {
    return auth.currentUser.updateEmail(email);
  }

  //function for updating password
  function updatePassword(password) {
    return auth.currentUser.updatePassword(password);
  }

  useEffect(() => {
    //     //this is method from firebase that notifies you when user is set
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
