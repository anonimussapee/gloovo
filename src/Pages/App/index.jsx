import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { MultiEmpleoProvider, routerList} from '../../Componets/Context'
import './index.css'
import { AsideBar, NavBar } from '../../Componets/NavBar';
import { FatherContainer } from '../../Componets/FatherContainer';


function App() {

  return (
    <BrowserRouter>   
      <MultiEmpleoProvider>
        <NavBar/>
        <FatherContainer>
          <AsideBar/>
          <Routes>
            {routerList.map((route, index )=> <Route key={index+'route'} path={route.path} element={route.element}></Route> )}
          </Routes>
        </FatherContainer>
      </MultiEmpleoProvider>
    </BrowserRouter>
  )
}

export {App}
