import { useNavigate } from 'react-router-dom'
import styles from './NotFound.module.scss'
import Typography from '@/components/UI/Typography'
import Button from '@/components/UI/Button'
import { notFoundReasons } from '@/constants/notFound'

const NotFound = () => {
  const navigate = useNavigate()

  const handleNavigateToHome = () => {
    navigate('/')
  }

  return (
    <div className={styles.body}>
      <Typography variant='h3'>
        We're sorry for the inconvenience, but it looks like the page you're
        looking for couldn't be found.
      </Typography>

      <Typography variant='h4'>Potential causes:</Typography>

      <ul className={styles.list}>
        {notFoundReasons.map((reason) => (
          <li className={styles.item} key={reason}>
            {reason}
          </li>
        ))}
      </ul>
      <Button onClick={handleNavigateToHome}>Go Home</Button>
    </div>
  )
}

export default NotFound
