import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { signUp } from '../../../api/auth';
import Spinner from '@/components/ui/Spinner';
import toast from 'react-hot-toast';
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { useConfig } from '@/context/config/ConfigContext';
import { ISignUp } from '@/types/user';
import Input from '@/components/Auth/Input';

const SignupPage = () => {
  const navigate = useNavigate();
  const { config, loading: configLoading } = useConfig();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<ISignUp>({
    name: '',
    email: '',
    contact: '',
    skills: [],
    password: '',
  });
  const { name, email, contact, skills, password } = formData;

  const [open, setOpen] = useState(false);
  const [skillInput, setSkillInput] = useState('');
  const [allSkills, setAllSkills] = useState(config.skills);

  const setFormValue = (label: string, value: string) =>
    setFormData({ ...formData, [label]: value.trim() });

  const addSkill = (skill: string) => {
    setFormData({ ...formData, skills: [...formData.skills, skill] });
    setAllSkills(allSkills.filter(val => skill !== val));
  };

  const removeSkill = (skill: string) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter(val => skill !== val),
    });
    setAllSkills(prev => [...prev, skill]);
  };

  useEffect(() => {
    setAllSkills(config.skills);
  }, [config.skills.length]);

  const handleSignup = async () => {
    if (name === '' || email === '' || password === '' || contact === '')
      return toast.error('Please fill in all the details');
    if (contact.length !== 10)
      return toast.error('Please enter a valid contact number');
    if (password.length < 8)
      return toast.error('password length must be at least 8');

    try {
      setLoading(true);

      const response = await signUp(formData);

      if (response.success === false) {
        setLoading(false);
        return toast.error(response.message);
      }

      navigate('/otp', { state: formData });

      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      toast.error('Something went wrong');
    }
  };

  if (configLoading) return <Spinner />;

  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-gray-100 py-8'>
      {loading && <Spinner />}

      <Card className='w-full max-w-xl shadow-lg rounded-2xl'>
        <CardContent>
          <h1 className='text-3xl font-bold text-center'>Create an Account</h1>

          <div className='space-y-4'>
            <Input
              label='Name'
              placeholder='Enter your name'
              value={name}
              onChange={(value: string) => setFormValue('name', value)}
            />

            <Input
              label='Email'
              placeholder='Enter your email'
              value={email}
              onChange={(value: string) => setFormValue('email', value)}
            />

            <Input
              label='Contact Number'
              placeholder='Enter your contact number'
              value={contact}
              onChange={(value: string) =>
                setFormValue('contact', value.replace(/\D/g, ''))
              }
              props={{ maxLength: 10 }}
            />

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
                    <CommandEmpty className='py-2 text-center'>
                      no results found
                    </CommandEmpty>
                  )}

                  {open && (
                    <CommandList>
                      {allSkills.map((skill, index) => (
                        <CommandItem
                          key={index}
                          className='cursor-pointer border rounded-none'
                          onSelect={() => addSkill(skill)}
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
                      onClick={() => removeSkill(skill)}
                      className='cursor-pointer text-lg ml-2 text-blue-500 hover:text-red-500 font-bold'
                    >
                      x
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <Input
              label='Password'
              placeholder='Enter your password'
              value={password}
              onChange={(value: string) => setFormValue('password', value)}
            />
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
