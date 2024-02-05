import styles from './Loader.module.scss'

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader} />
    </div>
  )
}

export default Loader
