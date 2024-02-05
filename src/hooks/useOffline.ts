import { useEffect, useState } from 'react'

type Props = {
  onOffline: () => void
  onOnline: () => void
}

export const useOffline = ({ onOffline, onOnline }: Props) => {
  const [isOffline, setIsOffline] = useState(false)

  const handleOffline = () => {
    setIsOffline(true)
    onOffline()
  }

  const handleOnline = () => {
    setIsOffline(false)
    onOnline()
  }

  useEffect(() => {
    window.addEventListener('offline', handleOffline)
    window.addEventListener('online', handleOnline)

    return () => {
      window.removeEventListener('offline', handleOffline)
      window.removeEventListener('online', handleOnline)
    }
  }, [])

  return isOffline
}
