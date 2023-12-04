import { createContext, useContext } from 'react';
import { HomePage } from '../../Pages/HomePage';
import { JobsPage } from '../../Pages/JobsPage';

const routerList = [
  {path:'/' , element:<HomePage/>, private:false},
  {path:'/home' , element:<HomePage/>, private:false},
  {path:'/inicio' , element:<HomePage/>, private:false},
  {path:'/ofertas' , element:<JobsPage/>, private:false},
  {path:'/ofertas?:id' , element:<JobsPage/>, private:false},
  {path:'/job' , element:<JobsPage/>, private:false},
  {path:'/job?:id' , element:<JobsPage/>, private:false},
  {path:'/*' , element:<p>404 not found</p>, private:false},

];

const navList = [
  {path:'/', name: 'Inicio', },
  {path:'/ofertas',name:'Ofertas' } ,
];

const jobList = [
  {id: 'tryueuie' , title: 'Atención al cliente', urlImage : 'https://images.pexels.com/photos/6567436/pexels-photo-6567436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', address: 'https://maps.app.goo.gl/fX1dCRjJUk1VbRw38'},
  {id: 'chvdhbds', title: 'Atención al cliente', urlImage : 'https://images.pexels.com/photos/6567436/pexels-photo-6567436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', address: 'https://maps.app.goo.gl/fX1dCRjJUk1VbRw38'},
  {id: 'pqpwoeoe', title: 'Atención al cliente', urlImage : 'https://images.pexels.com/photos/6567436/pexels-photo-6567436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', address: 'https://maps.app.goo.gl/fX1dCRjJUk1VbRw38'},
  {id: 'sdhhdjdj', title: 'Atención al cliente', urlImage : 'https://images.pexels.com/photos/6567436/pexels-photo-6567436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', address: 'https://maps.app.goo.gl/fX1dCRjJUk1VbRw38'},

];

const MultiEmpleoContext = createContext();

const MultiEmpleoProvider = ({children}) =>{
  
  const anywere = true

  return (
    <MultiEmpleoContext.Provider value={{anywere}}>
      {children}
    </MultiEmpleoContext.Provider>
  );
}

const useMultiEmpleo = () => {

  const multiEmpleo = useContext(MultiEmpleoContext);

  return multiEmpleo;
}

export {jobList,navList,routerList,MultiEmpleoProvider, useMultiEmpleo};