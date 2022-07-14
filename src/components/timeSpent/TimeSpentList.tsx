import { useEffect, useState } from 'react'
import { format, isToday  } from 'date-fns'
import { TimeSpent } from './timeSpent.type'
import TimeSpentResource from './timeSpentResource'

const todayTimes = (times: TimeSpent[]) => {
  return times.filter(time => isToday(new Date(time.startedAt!)))
}

function TimeSpentList() {
  const api = new TimeSpentResource()
  const [times, setTimes] = useState<TimeSpent[]>([])

  useEffect(() => {
    api.getTimeSpents().then(data => setTimes(todayTimes(data)))
  }, [])

  return (
    <div className='text-2xl mt-10'>
      {times.map((time,index) =>
        <li key={index}>
          {format(new Date(time.startedAt!), 'HH:mm')}
          -
          {time.finishedAt
            ? format(new Date(time.finishedAt!), 'HH:mm')
            : null
          }
        </li>
      )}
    </div>
  )
}

export default TimeSpentList