import { useState } from 'react';
import { updateDetails } from '@/api/auth';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@/context/auth/useUser';
import { useConfig } from '@/context/config/ConfigContext';
import Input from '@/components/Auth/Input';
import SkillInput from '@/components/SkillInput';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';
import Spinner from '@/components/ui/Spinner';

const EditProfile = () => {
  const navigate = useNavigate();
  const { user, fetchUser } = useUser();

  const [name, setName] = useState(user.name);
  const [contact, setContact] = useState(user.contact);
  const [skills, setSkills] = useState(user.skills);
  const [loading, setLoading] = useState(false);

  const addSkill = (skill: string) => setSkills([...skills, skill]);

  const removeSkill = (skill: string) =>
    setSkills(skills.filter(val => val !== skill));

  const handleUpdate = async () => {
    if (name === '' || contact === '')
      return toast.error('Please fill in valid details');

    try {
      setLoading(true);
      const payload = { name, contact, skills };
      const res = await updateDetails(payload);

      if (!res.success) {
        setLoading(false);
        return toast.error(res.message);
      }

      await fetchUser();
      setLoading(false);
      toast.success('Profile updated successfully!');
    } catch (err) {
      setLoading(false);
      console.error('Error updating profile:', err);
      toast.error('something went wrong');
    }
  };

  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-100 p-4'>
      {loading && <Spinner />}

      <div className='bg-white shadow-md rounded-lg p-8 w-full max-w-md gap-4 flex flex-col'>
        <h2 className='text-2xl font-bold text-center'>Update Profile</h2>

        <Input
          label='Name'
          placeholder='Enter your name'
          value={name}
          onChange={setName}
        />

        <Input
          label='Email'
          placeholder='Enter your email'
          value={user.email}
          props={{ disabled: true }}
        />

        <Input
          label='Contact Number'
          placeholder='Enter your contact number'
          value={contact}
          onChange={(value: string) => setContact(value.replace(/\D/g, ''))}
          props={{ maxLength: 10 }}
        />

        <SkillInput
          skills={skills}
          addSkill={addSkill}
          removeSkill={removeSkill}
        />

        <Button className='w-full mt-4 cursor-pointer' onClick={handleUpdate}>
          Update Profile
        </Button>
      </div>
    </div>
  );
};

export default EditProfile;
