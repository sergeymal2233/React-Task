import { Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import NotFound from '@/pages/NotFound'

const Routing: React.FC = () => {
  return (
    <Routes>
      {routes.map((route, index) => {
        return <Route key={index} path={route.path} element={route.element} />
      })}
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
export default Routing