export default function ProfileHeader({
  name,
  skills,
}: {
  name: string;
  skills: string[];
}) {
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
          <p className='text-gray-600'>Creative Designer & Web Developer</p>
          <p className='text-gray-600'>Skills: {skillString}</p>
        </div>
      </div>
      <p className='mt-4 text-gray-700'>
        Passionate about design and technology. I love to collaborate with
        others to create amazing user experiences. Always eager to learn and
        share knowledge!
      </p>
    </section>
  );
}
