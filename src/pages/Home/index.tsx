import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.scss'
import Button from '@/components/UI/Button'
import TextInput from '@/components/UI/TextInput'
import Typography from '@/components/UI/Typography'
import { USERNAME_MAX_LENGTH } from '@/constants/username'

const Home = () => {
  const [input, setInput] = useState('')
  const navigate = useNavigate()
  const isInputEmpty = input.length === 0

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (isInputEmpty) {
      return
    }
    e.preventDefault()
    navigate(input)
  }

  return (
    <div className={styles.body}>
      <Typography variant='h2' className={styles.introText}>
        Unlock the potential of your peers' coding journeys with the GitHub
        Resume Viewer – an intuitive tool that allows you to input a GitHub
        username and instantly access a succinct overview of their GitHub
        profile. Streamline your understanding of others' coding prowess with
        this user-friendly application.
      </Typography>
      <form onSubmit={handleFormSubmit}>
        <div className={styles.form}>
          <TextInput
            value={input}
            maxLength={USERNAME_MAX_LENGTH}
            placeholder='Enter GitHub username'
            onChange={(e) => setInput(e.target.value)}
          />
          <Button disabled={isInputEmpty} type='submit'>
            Search
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Home
