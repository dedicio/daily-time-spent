import { useEffect, useState } from 'react'
import { TimeSpent } from './timeSpent.type'
import TimeSpentResource from './timeSpentResource'

function TimeSpentList() {
  const api = new TimeSpentResource()
  const [times, setTimes] = useState<TimeSpent[]>([])

  useEffect(() => {
    api.getTimeSpents().then(data => setTimes(data))
  }, [])

  return (
    <div className='text-2xl mt-10'>
      {times.map((time,index) =>
        <li key={index}>{time.startedAt}</li>
      )}
    </div>
  )
}

export default TimeSpentList