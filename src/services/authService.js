//import {auth, signInWithEmailAndPassword , createUserWithEmailAndPassword} from '@/plugins/firebase';
import { signInWithEmailAndPassword } from '@/plugins/firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();


export const authService = {
  async autenticar(email, password) {
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      return { status: true, user };
    } catch (error) {
      console.log("error: ");
      console.log(error);
      return { status: false, message: error.message };
    }
  },

  async createUser(email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("createUser");
      console.log(userCredential);
      const user = userCredential.user;
      return { success: true, user };
    } catch (error) {
      console.log(error);
      return { success: false, error: error.message };
    }
  },


};