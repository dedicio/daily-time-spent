import { useEffect, useState } from 'react'
import { format, formatDuration } from 'date-fns'
import { TimeSpent } from './timeSpent.type'
import TimeSpentResource from './timeSpentResource'

type TimeSpentListProps = {
  openTime?: TimeSpent | null,
}

const TimeSpentList: React.FC<TimeSpentListProps> = ({
  openTime
}) => {
  const api = new TimeSpentResource()
  const [times, setTimes] = useState<TimeSpent[]>([])
  const [total, setTotal] = useState<number>(0)

  useEffect(() => {
    api.getTodayTimeSpent().then(data => {
      setTimes(data.items)
      setTotal(data.duration)
    })
  }, [openTime])

  return (
    <div className='text-2xl mt-10'>
      <ul>
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
      </ul>
      <div>Time spent today: { formatDuration({ minutes: total }) }</div>
    </div>
  )
}

export default TimeSpentList