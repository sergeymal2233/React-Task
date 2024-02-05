import { Link } from 'react-router-dom'
import Typography from '../Typography'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <Typography variant='h1' tag='h1'>
        <Link to='/'>GitHub Resume Creator</Link>
      </Typography>
    </div>
  )
}

export default Header
