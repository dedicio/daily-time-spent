import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { TimeSpent } from './timeSpent.type'
import TimeSpentResource from './timeSpentResource'

interface CurrentTimeProps {
  startedTime?: string
}

function isToday(time: TimeSpent) {
  return time?.startedAt?.startsWith(format(new Date(), 'yyyy-MM-dd'))
}

function CurrentTime(props: CurrentTimeProps) {
  const resource = new TimeSpentResource()
  const [times, setTimes] = useState<TimeSpent[]>([])

  useEffect(() => {
    resource.getTimeSpents().then(data => {
      const times = data.filter(time => isToday(time))
      setTimes(times)
    })
  }, [])

  return (
    <>
      {props.startedTime &&
        <div className='text-2xl mt-10'>
          You started your time at
          <div className='text-4xl'>{ props.startedTime }</div>
        </div>
      }
      <div>
        {times.map((time,index) =>
          <li key={index}>{time.startedAt} - {time.finishedAt}</li>
        )}
      </div>
    </>
  )
}

export default CurrentTime
