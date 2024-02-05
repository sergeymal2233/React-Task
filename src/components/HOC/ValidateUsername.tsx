import { USERNAME_MAX_LENGTH } from '@/constants/username'
import { ReactNode, useEffect, useRef } from 'react'
import { Navigate, useLocation, useParams } from 'react-router'
import { toast } from 'react-toastify'

type Props = {
  Component: () => ReactNode
}

const ValidateUsername = ({ Component }: Props) => {
  const { username } = useParams()
  const location = useLocation()
  const isAlreadyRendered = useRef(false)
  const isUsernameValid = (username as string).length <= USERNAME_MAX_LENGTH

  useEffect(() => {
    if (!isUsernameValid && isAlreadyRendered.current === false) {
      toast(
        `Username length can not be larger than ${USERNAME_MAX_LENGTH} symbols`,
        { type: 'error' },
      )
      isAlreadyRendered.current = true
    }
  }, [isUsernameValid])

  return isUsernameValid ? (
    <Component />
  ) : (
    <Navigate to='/' state={{ from: location }} />
  )
}

export default ValidateUsername
