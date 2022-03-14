import React from 'react';
import Button from './Button'
import CurrentTime from './CurrentTime';

function App() {
  return (
    <div className='bg-zinc-700 text-white min-h-screen'>
      <div className="flex justify-center flex-col itens-center text-center max-w-2xl mx-auto">
        <h1 className='text-4xl mb-10 mt-5'>Daily Time Spent</h1>
        <div>
          <Button />
        </div>
        <CurrentTime />
      </div>
    </div>
  );
}

export default App;
