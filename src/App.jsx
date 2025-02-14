import React from 'react';
import Button from './components/Button';
import Input from './components/Input';

const App = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-accent text-foreground flex flex-col justify-between p-8">
        <div>
          <div className="text-2xl font-bold mb-4">Example App</div>
        </div>
        <div className="text-sm">
          <p className="mb-2">"Simplify your workflow with our intuitive tools"</p>
          <p>Discover our user-friendly features.</p>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="bg-card p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-foreground">Create an account</h2>
          <form>
            <Input
              type="email"
              placeholder="name@example.com"
              className="mb-4"
            />
            <Button
              type="submit"
              className="w-full mb-4"
              variant="primary"
            >
              Sign Up
            </Button>
          </form>
          <div className="text-center text-foreground mb-4">OR CONTINUE WITH</div>
          <Button className="w-full" variant="destructive">
            Google
          </Button>
        </div>
      </div>
      <div className="absolute top-4 right-4 text-foreground">
        <a href="#" className="hover:underline">Sign in</a>
      </div>
    </div>
  );
};

export default App;