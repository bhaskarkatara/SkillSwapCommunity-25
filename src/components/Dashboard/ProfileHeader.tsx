import Github from '@/assets/icons/Github';
import Linkedin from '@/assets/icons/Linkedin';
import Youtube from '@/assets/icons/Youtube';
import Instagram from '@/assets/icons/instagram-icon.png';

import { User } from '@/types/user';

export default function ProfileHeader({ user }: { user: User }) {
  const {
    name,
    skills,
    bio,
    location,
    githubLink,
    linkedinLink,
    youtubeLink,
    instagramLink,
  } = user;
  const skillString = skills.join(', ');

  return (
    <section className='bg-white rounded-xl p-6 shadow'>
      <div className='flex items-center space-x-6'>
        <div className='relative inline-flex items-center justify-center w-24 h-24 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600'>
          <span className=' text-5xl text-gray-600 dark:text-gray-300'>
            {name.substring(0, 1).toUpperCase()}
          </span>
        </div>
        <div>
          <h3 className='text-xl font-semibold'>{name}</h3>
          {location && <p className='text-gray-600'>{location}</p>}
          <p className='text-gray-600'>Skills: {skillString}</p>
        </div>
        <div className='ml-auto self-start flex gap-2 items-center'>
          {youtubeLink && (
            <a href={youtubeLink} target='_blank'>
              <Youtube />
            </a>
          )}

          {githubLink && (
            <a href={githubLink} target='_blank'>
              <Github />
            </a>
          )}

          {instagramLink && (
            <a href={instagramLink} target='_blank' title='Instagram'>
              <img
                src={Instagram}
                alt='instagram'
                className='cursor-pointer h-6'
              />
            </a>
          )}

          {linkedinLink && (
            <a href={linkedinLink} target='_blank'>
              <Linkedin />
            </a>
          )}
        </div>
      </div>

      {bio && <p className='mt-4 text-gray-700'>{bio}</p>}
    </section>
  );
}
