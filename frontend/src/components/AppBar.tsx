import { Avatar } from './Avatar';
import Search from './Search';

const AppBar = () => {
  return (
    <div className='flex justify-between px-2 border-black border-2 h-20'>
      <div className='flex flex-grow'>
        <p className='font-extrabold my-auto ml-4'> Medium-Clone </p>
        <div className='mx-2 my-auto justify-center items-center flex-grow'>
          <Search/>
        </div>
      </div>
      <div className='justify-end items-center my-auto'>
        <Avatar className="h-9 w-9" username='Mani'/>
      </div>
    </div>
  );
}

export default AppBar;
