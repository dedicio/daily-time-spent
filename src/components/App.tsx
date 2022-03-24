import React, { useState } from 'react';
import Button from './common/Button'
import CurrentTime from './timeSpent/CurrentTime';
import { TimeSpent } from './timeSpent/timeSpent.type';
import TimeSpentResource from './timeSpent/timeSpentResource';

function App() {
  const resource = new TimeSpentResource()
  const [openTime, setOpenTime] = useState<TimeSpent|null>()
  const retrieve = async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    if (!openTime) {
      const timeStarted = await resource.createTimeSpent({
        startedAt: '2022-03-24 16:12',
      })
      setOpenTime(timeStarted)
      console.log('tempo', openTime);
      
    } else {
      await resource.updateTimeSpent({
        finishedAt: '2022-03-24 16:12',
      })
      setOpenTime(null)
    }
  }

  return (
    <div className='bg-zinc-700 text-white min-h-screen'>
      <div className="flex justify-center flex-col itens-center text-center max-w-2xl mx-auto">
        <h1 className='text-4xl mb-10 mt-5'>Daily Time Spent</h1>
        <p>{openTime}</p>
        <div>
          <Button clickAction={retrieve} isStarted={!!openTime} />
        </div>
        <CurrentTime />
      </div>
    </div>
  );
}

export default App;
