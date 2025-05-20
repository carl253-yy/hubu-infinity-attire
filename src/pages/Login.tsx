
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/context/AuthContext';
import { LockKeyhole, Mail, AlertCircle } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isAuthenticated, isLoading } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  // Get redirect path from location state or default to home
  const redirectPath = location.state?.from || '/';
  
  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      console.log("User is authenticated, redirecting to:", redirectPath);
      navigate(redirectPath);
    }
  }, [isAuthenticated, isLoading, navigate, redirectPath]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    console.log("Submitting login form with email:", email);
    try {
      const success = await login(email, password);
      
      if (!success) {
        console.log("Login failed");
        setError('Login failed. Please check your credentials.');
      }
      // Note: We don't navigate here as the auth state change will trigger the useEffect that navigates
    } catch (error) {
      console.error("Login error:", error);
      setError('An unexpected error occurred. Please try again.');
    }
  };

  // If still checking authentication status, show loading
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-kenyan-brown"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-md">
      <div className="bg-background p-8 rounded-lg shadow-sm border">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Login to Your Account</h1>
          <p className="text-foreground/80 mt-2">
            Enter your credentials to access HUBU INFINITY SCRUBS
          </p>
          {location.state?.from && (
            <div className="mt-3 p-3 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-md text-sm">
              <AlertCircle className="inline-block w-4 h-4 mr-1" />
              You need to sign in to access this page
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-destructive/10 text-destructive p-3 rounded-md text-sm">
              {error}
            </div>
          )}

          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-foreground/50" />
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="pl-10"
                required
                autoComplete="email"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-foreground/80 mb-1">
              Password
            </label>
            <div className="relative">
              <LockKeyhole className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-foreground/50" />
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="pl-10"
                required
                autoComplete="current-password"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-kenyan-red hover:bg-kenyan-red/90"
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign in'}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          <p className="text-foreground/80">
            Don't have an account?{' '}
            <Link to="/register" className="text-kenyan-brown font-semibold hover:underline">
              Register now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
