export default function ProfileHeader({
  name,
  skillString,
}: {
  name: string;
  skillString: string;
}) {
  return (
    <section className='bg-white rounded-xl p-6 shadow'>
      <h2 className='text-2xl font-bold mb-4'>User Profile</h2>
      <div className='flex items-center space-x-6'>
        <div className='relative inline-flex items-center justify-center w-24 h-24 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600'>
          <span className=' text-5xl text-gray-600 dark:text-gray-300'>
            {name.substring(0, 1).toUpperCase()}
          </span>
        </div>
        <div>
          <h3 className='text-xl font-semibold'>{name}</h3>
          <p className='text-gray-600'>Skills: {skillString}</p>
        </div>
      </div>
    </section>
  );
}
