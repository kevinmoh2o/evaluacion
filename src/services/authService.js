import {auth, signInWithEmailAndPassword } from '@/plugins/firebase';

//const auth = getAuth();


export const authService = {
  async autenticar(email, password) {
    try {
        //console.log({auth, email, password})
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      //console.log({userCredential})
      const user = userCredential.user;
      // Aquí puedes realizar otras acciones después de que el usuario se registre correctamente
      return { success: true, user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },
  // Otros métodos de autenticación
};
