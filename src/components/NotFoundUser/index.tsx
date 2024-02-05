import { useNavigate } from 'react-router-dom'
import Button from '@/components/UI/Button'
import styles from './NotFoundUser.module.scss'
import Typography from '../UI/Typography'

type Props = {
  username: string
}

const NotFoundUser = ({ username }: Props) => {
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <Typography
        variant='h2'
        textColor='primary'
        className={styles.message}
      >{`User with username "${username}" was not found`}</Typography>
      <Button onClick={() => navigate('/')}>
        <Typography variant='h3'>Go home</Typography>
      </Button>
    </div>
  )
}

export default NotFoundUser
