import { useParams } from 'react-router-dom'

const Resume = () => {
  const { username } = useParams()
  return <div>{username}</div>
}

export default Resume
