import { CardOfJob } from '../../Componets/CardsOfJob';
import { jobList } from '../../Componets/Context';
import { Layout } from '../../Componets/Layout';
import './index.css';
const JobsPage = () =>{
  return (
    <Layout >
      <div className='container-job'>
        {
          jobList.map((job, index) => <CardOfJob key={index} data={job}/> )
        }
      </div>
    </Layout>
      
  )
}

export {JobsPage};