import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { signupToOtp } from '../api/auth'; // Adjust path as needed
import Spinner from '@/components/ui/Spinner';
import toast from 'react-hot-toast';
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';

const SignupPage = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [skills, setSkills] = useState<string[]>([]);
  const [skillInput, setSkillInput] = useState('');
  const [password, setPassword] = useState('');

  const [open, setOpen] = useState(false);
  const [allSkills, setAllSkills] = useState(['DSA', 'Chutiyapa', 'Backchodi']);

  const handleAddSkill = (skill: string) => {
    setSkills(prev => [...prev, skill]);
    setAllSkills(allSkills.filter(val => skill !== val));
    setOpen(false);
    setSkillInput('');
  };

  const handleRemoveSkill = (skill: string) => {
    setSkills(skills.filter(val => skill !== val));
    setAllSkills(prev => [...prev, skill]);
  };

  const handleSignup = async () => {
    const signupData = { name, email, contact, skills, password };
    try {
      setLoading(true);
      const response = await signupToOtp(signupData);

      if (response.success === false) {
        setLoading(false);
        return toast.error(response.message);
      }

      // Optionally store something or show a success message
      navigate('/otp', { state: signupData });
      // Redirect to OTP page (update path if needed)
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      toast.error('Something went wrong');
    }
  };

  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-gray-100 py-8'>
      {loading && <Spinner />}
      <Card className='w-full max-w-xl shadow-lg rounded-2xl'>
        <CardContent>
          <h1 className='text-3xl font-bold text-center'>Create an Account</h1>

          <div className='space-y-4'>
            <div>
              <label className='block mb-1 text-sm font-medium'>Name</label>
              <Input
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder='Enter your name'
              />
            </div>

            <div>
              <label className='block mb-1 text-sm font-medium'>Email</label>
              <Input
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder='Enter your email'
                type='email'
              />
            </div>

            <div>
              <label className='block mb-1 text-sm font-medium'>
                Contact Number
              </label>
              <Input
                maxLength={10}
                value={contact}
                onChange={e => setContact(e.target.value.replace(/\D/g, ''))}
                placeholder='Enter your contact number'
              />
            </div>

            <div>
              <label className='block mb-1 text-sm font-medium'>Skills</label>
              <div className='flex gap-2 mb-2'>
                <Command className='border rounded-md mb-2'>
                  <CommandInput
                    placeholder='Search skills...'
                    value={skillInput}
                    onValueChange={setSkillInput}
                    onFocus={() => setOpen(true)}
                  />
                  {open && skillInput !== '' && (
                    <CommandEmpty>No results found.</CommandEmpty>
                  )}
                  {open && (
                    <CommandList>
                      {allSkills.map((skill, index) => (
                        <CommandItem
                          key={index}
                          className='cursor-pointer border rounded-none'
                          onSelect={() => handleAddSkill(skill)}
                        >
                          {skill}
                        </CommandItem>
                      ))}
                    </CommandList>
                  )}
                </Command>
              </div>

              <div className='flex flex-wrap gap-2'>
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className='flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm'
                  >
                    {skill}
                    <button
                      type='button'
                      onClick={() => handleRemoveSkill(skill)}
                      className='cursor-pointer text-lg ml-2 text-blue-500 hover:text-red-500 font-bold'
                    >
                      x
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className='block mb-1 text-sm font-medium'>Password</label>
              <Input
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder='Enter your password'
                type='password'
              />
            </div>
          </div>

          <Button className='w-full mt-4 cursor-pointer' onClick={handleSignup}>
            Sign Up
          </Button>

          <p className='text-sm text-center text-gray-600 mt-4'>
            Already have an account?{' '}
            <span
              onClick={() => navigate('/login')}
              className='text-blue-500 hover:underline cursor-pointer'
            >
              Login here
            </span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupPage;
