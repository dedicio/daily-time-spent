import { format } from 'date-fns'

const formatTime = (date: string | undefined) => {
  return date ? format(new Date(date), 'HH:mm') : null
}

type CurrentTimeProps = {
  timeStarted?: string,
}

const CurrentTime: React.FC<CurrentTimeProps> = ({
  timeStarted
}) => {
  if (timeStarted)
    return (
      <div className='text-2xl mt-10'>
        <div>You started your time at</div> 
        <div className='text-4xl'>{formatTime(timeStarted)}</div>
      </div>
    )
  return null
  
}

export default CurrentTime