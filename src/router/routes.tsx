import ValidateUsername from '@/components/HOC/ValidateUsername'
import Home from '@/pages/Home'
import Resume from '@/pages/Resume'

interface Route {
  path: string
  element: React.ReactNode
  params?: Record<string, string>
}

export const routes: Route[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/:username',
    params: { username: ':username' },
    element: <ValidateUsername Component={Resume} />,
  },
]
