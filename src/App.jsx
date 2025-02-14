import React, { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';

const App = () => {
  const [view, setView] = useState('welcome');

  const handleSubmit = (e) => {
    e.preventDefault();
    setView('userData');
  };

  return (
    <div className="flex h-screen">
      {view === 'welcome' ? (
        <div className="w-1/2 bg-accent text-foreground flex flex-col justify-between p-8">
          <div>
            <div className="text-2xl font-bold mb-4">Example App</div>
          </div>
          <div className="text-sm">
            <p className="mb-2">"Simplify your workflow with our intuitive tools"</p>
            <p>Discover our user-friendly features.</p>
          </div>
        </div>
      ) : (
        <div className="flex h-screen w-full items-center justify-center">
          <div className="bg-card p-8 rounded-lg shadow-lg w-full max-w-4xl flex">
            <div className="w-1/2 bg-gray-200 rounded-l-lg"></div>
            <div className="w-1/2 p-8">
              <h2 className="text-2xl font-bold mb-6 text-center text-foreground">Let's Get to Know You</h2>
              <form onSubmit={handleSubmit}>
                <Input type="text" placeholder="Full Name" className="mb-4" />
                <Input type="email" placeholder="Email Address" className="mb-4" />
                <Input type="password" placeholder="Password" className="mb-4" />
                <Button type="submit" className="w-full mb-4" variant="primary">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
      {view === 'welcome' && (
        <div className="w-1/2 flex items-center justify-center">
          <div className="bg-card p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-foreground">Create an account</h2>
            <form onSubmit={handleSubmit}>
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
      )}
      <div className="absolute top-4 right-4 text-foreground">
        <a href="#" className="hover:underline">Sign in</a>
      </div>
    </div>
  );
};

export default App;