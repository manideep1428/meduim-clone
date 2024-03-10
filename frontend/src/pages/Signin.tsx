import Auth from "../components/Auth"
import PagesDisplay from "../components/PagesDisplay"
const Signin = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 '>
      <div>
        <Auth type='signin'/>
      </div>
      <div className="block lg:hidden ">
        <PagesDisplay/>
      </div>
    </div>
  )
}

export default Signin