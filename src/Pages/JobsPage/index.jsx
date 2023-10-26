import { useState } from 'react';
import { CardOfCommentary, CardOfJob } from '../../Componets/CardsOfJob';
import { ChartBarIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline'
import { jobList } from '../../Componets/Context';
import { Layout } from '../../Componets/Layout';
import './index.css';


const JobsPage = () => {

  const [commentaryBtn, setCommentaryBtn] = useState(true);

  return (
    <Layout >
      <div className='container-job' id='container-job'>
        {
          jobList.map((job, index) => {
            return <CardOfJob key={index} data={job} />
          })
        }
      </div>

    </Layout>

  )
}

export { JobsPage };
