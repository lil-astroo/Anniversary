import Home from './pages/Home'
import Mdt from './pages/Mdt'
import TimeLine from './pages/TimeLine'

let routes = [
    { path: '/home', element: <Home /> },
    { path: '/mdt', element: <Mdt /> },
    { path: '/timeline', element: <TimeLine /> },
    { path: '/', element: <Home /> },
    { path: '*', element: <Home /> },
]
    

export default routes