import { useNavigate } from 'react-router-dom';
import { Avatar } from './Avatar';
import Button from './Button';
import Search from './Search';

const AppBar = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/blog/new");
  }

  return (
    <div className='flex justify-between px-2 border-black border-2 h-20'>
      <div className='flex flex-grow items-center'>
        <p className='font-extrabold ml-4'> Medium-Clone </p>
        <div className='mx-2 flex-grow'>
          <Search/>
        </div>
      </div>
      <div className='flex items-center'>
        <Button className='bg-gray-400 rounded-sm w-20 my-auto mr-4' click={handleNavigate}>Create</Button>
        <Avatar className="h-9 w-9 ml-2" username={""}/>
      </div>
    </div>
  );
}

export default AppBar;

