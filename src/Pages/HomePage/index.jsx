import { useNavigate } from 'react-router-dom';
import { Layout } from '../../Componets/Layout';
import './estilo.css';

const HomePage = () => {

  const navigate = useNavigate();
  return (
    
    <Layout>
      <div className='contenedor-boton_inicio'>
        <div className='boton_inicio '  onClick={()=>{
          navigate('/ofertas')
        }}>
          Observar ofertas
        </div>
      </div>
    </Layout>
  )
}

export {HomePage}