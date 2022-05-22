import React, { useEffect, useState } from 'react';
import Button from './common/Button'
import CurrentTime from './timeSpent/CurrentTime';
import { TimeSpent } from './timeSpent/timeSpent.type';
import TimeSpentResource from './timeSpent/timeSpentResource';

function App() {
  const resource = new TimeSpentResource()
  const [openTime, setOpenTime] = useState<TimeSpent|undefined>()

  useEffect(() => {
    resource.getTodayOpenTimeSpent().then(data => setOpenTime(data))
  }, [])

  const retrieve = async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    if (!openTime?._id) {
      const timeStarted = await resource.startTimeSpent()      
      setOpenTime(timeStarted)
    } else {
      await resource.stopTimeSpent(openTime._id)
      setOpenTime(undefined)
    }
  }

  return (
    <div className='bg-zinc-700 text-white min-h-screen'>
      <div className="flex justify-center flex-col itens-center text-center max-w-2xl mx-auto">
        <h1 className='text-4xl mb-10 mt-5'>Daily Time Spent</h1>
        <div>
          <Button clickAction={retrieve} isStarted={!!openTime} />
        </div>
        <CurrentTime startedTime={openTime?.startedAt} />
      </div>
    </div>
  );
}

export default App;
