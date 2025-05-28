
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '@/types';
import { useToast } from '@/components/ui/use-toast';

interface AuthContextProps {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
  session: any;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  isAuthenticated: false,
  login: async () => false,
  signup: async () => false,
  logout: () => {},
  isLoading: false,
  session: null,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Check for existing session on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('infinityScrubsUser');
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData);
      setSession({ user: userData });
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // Accept any password for demo purposes
      const userData = {
        id: Math.random().toString(36).substr(2, 9),
        email: email,
        name: email.split('@')[0] || 'User',
      };
      
      setUser(userData);
      setSession({ user: userData });
      localStorage.setItem('infinityScrubsUser', JSON.stringify(userData));
      
      toast({
        title: "Login successful",
        description: "Welcome to Infinity Scrubs!",
      });
      
      setIsLoading(false);
      return true;
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
    // Redirect to login instead of creating account
    toast({
      title: "Please use login",
      description: "Please use the login page to access Infinity Scrubs.",
    });
    return false;
  };

  const logout = async () => {
    console.log("Logging out");
    setIsLoading(true);
    setUser(null);
    setSession(null);
    localStorage.removeItem('infinityScrubsUser');
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
