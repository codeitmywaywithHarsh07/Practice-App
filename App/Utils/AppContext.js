import React, { createContext, useEffect, useState } from 'react'
import firebase from '../Authentication/FirebaseAuth';

const AppContext = createContext();

const AppProvider = ({children})=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);
    const [profileImg, setProfileImg] = useState(null);
    const [loading, setLoading] = useState(false);


    // Initialize the User if it exists
    useEffect(()=>{
        const unsubscribe = firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                setUser(user);
            } else{
                setUser(null);
            }
        });

        return ()=> unsubscribe(); 
    }, []);

    // Sign up Functionality

    const signup = async ()=>{
        setLoading(true);
        try {
            const userCred = await firebase.auth().createUserWithEmailAndPassword(email, password);
            await userCred.user.updateProfile({displayName:name});
            setUser(userCred.user);
            setName("");
            setEmail("");
            setPassword("");
            console.log("User Signed Up!");
        } catch (error) {
            console.error("Error signing up:", error);
        }
        setLoading(false);
    }

    // Log In Functionality

    const login = async () =>{
        setLoading(true);
        try {
            const userCred = await firebase.auth().signInWithEmailAndPassword(email, password);
            console.log("User Logged In");
        } catch (error) {
            console.log("Error Logging In", error);
        }
        setLoading(false);

    }

    // logout Functionality

    const logout = async () =>{
        setLoading(true);
        try {
            await firebase.auth().signOut();
            console.log("User Logged Out");
        } catch (error) {
            console.log("Error Logging Out", error);
        }
        setLoading(false);
    }

    // Update Profile

    const uploadProfilePicture = async (uri) => {
        const response = await fetch(uri);
        const blob = await response.blob();
        const user = firebase.auth().currentUser;
        console.log("USER : ",user.uid)
        const ref = firebase.storage().ref().child(`profile_pictures/${user.uid}`);
        await ref.put(blob);
        const url = await ref.getDownloadURL();
        return url;
    };

    return (
        <AppContext.Provider value={{user,setUser,profileImg,setProfileImg, name, email, password, setName, setEmail, setPassword, login, logout, signup, uploadProfilePicture}}>
            {children}
        </AppContext.Provider>
    );
}

export {AppContext,AppProvider};