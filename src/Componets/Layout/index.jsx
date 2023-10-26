const Layout = ({children}) =>{
  return (
    <div
    className='w-full h-full flex gap-2 text-[1rem]'>
      {children}
    </div>
  );
}

export {Layout};