import auth from "@/firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  User,
} from "firebase/auth";
import { createContext, useEffect, useState, ReactNode } from "react";
import { toast } from "react-toastify";

// Define the AuthContext type
interface AuthContextType {
  user: User | null;
  loading: boolean;
  createUser: (email: string, password: string) => Promise<void>;
  signInUser: (email: string, password: string) => Promise<void>;
  handleSignOut: () => void;
  handleGoogleSignIn: () => void;
}

// Create AuthContext with the defined type
export const AuthContext = createContext<AuthContextType | null>(null);

// Define props type for AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Create a new user
  const createUser = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error("Error creating user: " + error.message);
      } else {
        toast.error("An unknown error occurred while creating user.");
      }
      console.error(error);
    }
  };

  // Sign in an existing user
  const signInUser = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error("Error signing in: " + error.message);
      } else {
        toast.error("An unknown error occurred while signing in.");
      }
      console.error(error);
    }
  };

  // Handle sign-out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null); // Update user state after sign-out
      toast.success("Sign Out successful");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error("Error signing out: " + error.message);
      } else {
        toast.error("An unknown error occurred while signing out.");
      }
      console.error(error);
    }
  };

  // Handle Google Sign-In
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      toast.success("Signed in with Google");
      console.log(result.user);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error("Google Sign-In Failed: " + error.message);
      } else {
        toast.error("An unknown error occurred during Google Sign-In.");
      }
      console.error(error);
    }
  };

  // Observer user login state
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  console.log(user);

  const authInfo: AuthContextType = {
    user,
    loading,
    createUser,
    signInUser,
    handleSignOut,
    handleGoogleSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
