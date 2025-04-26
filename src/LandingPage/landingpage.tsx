import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const SignupPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');

  const handleSignup = () => {
    const signupData = { name, email, password, bio };
    console.log('Signup Data:', signupData);
    // Replace with actual API call
    navigate('/home');
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-xl p-8 shadow-lg rounded-2xl">
        <CardContent className="space-y-6">
          <h1 className="text-3xl font-bold text-center">Create an Account</h1>

          <div className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium">Name</label>
              <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" type="email" />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Password</label>
              <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" type="password" />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Bio</label>
              <Textarea value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Tell us about yourself" rows={4} />
            </div>
          </div>

          <Button className="w-full mt-4" onClick={handleSignup}>Sign Up</Button>

          <p className="text-sm text-center text-gray-600 mt-4">
            Already have an account?{' '}
            <span onClick={() => navigate('/login')} className="text-blue-500 hover:underline cursor-pointer">
              Login here
            </span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupPage;
