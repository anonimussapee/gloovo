import { useNavigate } from 'react-router-dom';
import { CardOfJob } from '../../Componets/CardsOfJob';
import { jobList } from '../../Componets/Context';
import { Layout } from '../../Componets/Layout';
import './index.css';


const JobsPage = () =>{

  const navigate = useNavigate(); // Obtiene el objeto de historial

  return (
    <Layout >
      <div className='container-job' id='container-job'>
        {
          jobList.map((job, index) =>{
            return <CardOfJob key={index} data={job}  />
          })
        }
      </div>
    </Layout>
      
  )
}

export {JobsPage};
