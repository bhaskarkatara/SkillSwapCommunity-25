export default function ProgressTracker() {
  return (
    <section className='bg-white rounded-xl p-6 shadow'>
      <h2 className='text-2xl font-bold mb-4'>Progress Tracker</h2>
      <div className='w-full bg-gray-200 rounded-full h-3 mb-4'>
        <div
          className='bg-blue-500 h-3 rounded-full'
          style={{ width: '70%' }}
        ></div>
      </div>
      <p className='text-gray-600'>70% of skill exchanges completed!</p>
    </section>
  );
}
