
import React, { useEffect, useState } from 'react'
import Button from './common/Button'
import CurrentTime from './timeSpent/CurrentTime'
import { TimeSpent } from './timeSpent/timeSpent.type'
import TimeSpentResource from './timeSpent/timeSpentResource'



function App() {
  const resource = new TimeSpentResource()
  const [openTime, setOpenTime] = useState<TimeSpent|null>()
  const retrieve = async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    if (!openTime) {
      const timeStarted = await resource.createTimeSpent()
      setOpenTime(timeStarted)      
    } else {
      await resource.updateTimeSpent(openTime._id)
      setOpenTime(null)
    }
  }

  useEffect(() => {
    resource.getTimeSpentOpenToday().then(data => setOpenTime(data))
  }, [])

  return (
    <div className='bg-zinc-700 text-white min-h-screen'>
      <div className="flex justify-center flex-col itens-center text-center max-w-2xl mx-auto">
        <h1 className='text-4xl mb-10 mt-5'>Daily Time Spent</h1>
        <div>
          <Button clickAction={retrieve} isStarted={!!openTime} />
        </div>
        <CurrentTime timeStarted={openTime?.startedAt} />
      </div>
    </div>
  )
}

export default App
