
interface Blog {
    id:string
    username: string;
    title: string;
    content: string;
    author:{
      name:string | null
    }
  }
const FullBlogs = ({
    username,
    title,
    content,
    publishedDate,
    name

}:Blog) => {
  return ( 
    <div className='grid grid-cols-6'>
        <div className='grid grid-cols col-span-4'>
            <div className="text-3xl">
                {title}
            </div>
            <div className="text-xl">
                {content}
            </div>
        </div>
    </div>
  )
}

export default FullBlogs