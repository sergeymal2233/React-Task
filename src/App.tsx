import { toast } from 'react-toastify'
import PageLayout from './components/Layout/PageLayout'
import { useOffline } from './hooks/useOffline'
import Routing from './router/Router'

function App() {
  useOffline({
    onOffline: () =>
      toast('Looks like you lost your internet connection...', {
        type: 'error',
      }),
    onOnline: () => toast('Connection established', { type: 'success' }),
  })
  return (
    <PageLayout>
      <Routing />
    </PageLayout>
  )
}

export default App
