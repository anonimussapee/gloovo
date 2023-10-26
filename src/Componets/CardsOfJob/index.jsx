import './index.css';

const CardOfJob = ({data}) =>{
  return (
    <article className='CardOfJob flex flex-col gap-6  items-center'>
      <figure>
        <img src={data?.urlImage} alt={data?.title} className='w-[90vw] h-[30vh] rounded-lg jobImagebox ' />
      </figure>
      <div className='w-full flex flex-col gap-4'>
        <div className='flex gap-3 justify-between'>
          <div className='flex gap-3 items-center'>
            <img src={data?.author?.image || 'https://images.pexels.com/users/avatars/6928007/tim-douglas-147.jpeg?auto=compress&fit=crop&h=50&w=50&dpr=1'} alt={data?.author?.name} className='w-10 h-10 rounded-full border-[2px] border-[#0000005b]'/>
            <div className='flex flex-col justify-center'>
              <h4>{data?.author?.name || 'Tim Douglas'}</h4>
              <p className='text-[.8rem] font-bold'>hace 1 semana</p>
            </div>
          </div>
          <button className='border-[3px] border-[#00000049] bg-[--coolors-cyan] rounded-lg text-white px-5 font-semibold ml-10'>Postular</button>
        </div>
        <div>
          <h3 className='text-[1.1rem] font-bold'>{data?.title}</h3>
          <div className='flex justify-between'>
            <p className=''><strong>Lugar: </strong> Otavalo</p>
            {data?.address &&
              <a href={data?.address} target='_blank' className='text-[--coolors-cyan] text-[.9rem]'>Observar lugar</a>
            }

          </div>
        </div>
        <div className='font-light'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores sint, perferendis doloremque possimus accusamus vitae consequatur nisi dignissimos, expedita praesentium facilis impedit tempora aperiam quo. Ducimus corrupti natus eum officia!
        </div>
      </div>
    </article>
  );
}

export {CardOfJob};