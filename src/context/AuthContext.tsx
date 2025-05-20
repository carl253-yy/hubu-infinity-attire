
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '@/types';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from '@/components/ui/use-toast';
import { Session } from '@supabase/supabase-js';

interface AuthContextProps {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
  session: Session | null;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  isAuthenticated: false,
  login: async () => false,
  signup: async () => false,
  logout: () => {},
  isLoading: true,
  session: null,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Initialize authentication state
  useEffect(() => {
    console.log("Setting up auth state listener");
    
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, newSession) => {
        console.log("Auth state changed:", event, newSession);
        setSession(newSession);
        if (newSession?.user) {
          console.log("User authenticated:", newSession.user);
          setUser({
            id: newSession.user.id,
            email: newSession.user.email || '',
            name: newSession.user.user_metadata?.name || newSession.user.email?.split('@')[0] || '',
          });
        } else {
          console.log("User not authenticated");
          setUser(null);
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      console.log("Initial session check:", currentSession);
      setSession(currentSession);
      if (currentSession?.user) {
        console.log("Initial user:", currentSession.user);
        setUser({
          id: currentSession.user.id,
          email: currentSession.user.email || '',
          name: currentSession.user.user_metadata?.name || currentSession.user.email?.split('@')[0] || '',
        });
      }
      setIsLoading(false);
    });

    return () => {
      console.log("Cleaning up auth listener");
      subscription.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      console.log("Attempting login with:", email);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        console.error("Login error:", error);
        
        // Provide more specific error messages based on error code
        if (error.message.includes("Invalid login credentials")) {
          toast({
            title: "Login failed",
            description: "Incorrect email or password. Please try again.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Login failed",
            description: error.message,
            variant: "destructive",
          });
        }
        
        setIsLoading(false);
        return false;
      }

      if (data?.user) {
        console.log("Login successful:", data.user);
        toast({
          title: "Login successful",
          description: "Welcome back!",
        });
        return true;
      }

      setIsLoading(false);
      return false;
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: "Login error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
      return false;
    }
  };

  const signup = async (email: string, password: string, name: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      console.log("Attempting signup with:", email, name);
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name: name,
          }
        }
      });

      if (error) {
        console.error("Signup error:", error);
        toast({
          title: "Signup failed",
          description: error.message,
          variant: "destructive",
        });
        setIsLoading(false);
        return false;
      }

      if (data) {
        console.log("Signup successful:", data);
        
        // Check if email confirmation is required
        if (data.session === null && data.user?.confirmation_sent_at) {
          toast({
            title: "Registration successful",
            description: "Please check your email to confirm your account before logging in.",
          });
        } else {
          toast({
            title: "Registration successful",
            description: "Your account has been created!",
          });
        }
        
        setIsLoading(false);
        return true;
      }

      setIsLoading(false);
      return false;
    } catch (error) {
      console.error('Signup error:', error);
      toast({
        title: "Registration error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
      return false;
    }
  };

  const logout = async () => {
    console.log("Logging out");
    setIsLoading(true);
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
    setIsLoading(false);
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
        isLoading,
        session,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
