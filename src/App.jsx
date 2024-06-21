import './App.css'
import BannerSide from './components/bannerSide'
import JasonImg from './assets/JasonImg.svg'
import Advertisement from './components/advertisement'
import Blog from './pages/blog'
import { Link } from 'react-router-dom'
import Blogslice from './components/blogslice'

const App = () => {


  return (
    <div className='w-full'>
      <BannerSide />

      <div className='w-auto top-96 rounded-xl  border border-gray-200 p-7 absolute bg-white ml-8 shadow-2xl'>
        <p className='bg-blue-500 rounded-md w-fit px-3 py-0.5 text-white font-medium'>Technology</p>

        <div className='w-[340px] text-2xl font-bold mt-3'>
          <h2>The Impact of Technology on the Workplace: How Technology is Changing</h2>
        </div>

        <div className='flex items-center space-x-3 mt-4'>
          <img src={JasonImg} alt="Image" />
          <p className='text-sm text-gray-500'>Jason Francisco</p>
          <p className='text-sm text-gray-500'>August 20, 2023</p>
        </div>

      </div>

      <Advertisement />
      <h4 className="font-semibold text-lg mb-4 mt-16">Latest Posts</h4>
      <div className='mt-10'>
        <Blogslice />
      </div>
      <Link to="/blog" className='flex justify-center mt-6'>
        <button className='border border-gray-400 rounded p-1 text-sm font-semibold text-gray-400  hover:bg-gray-300'>View All Post</button>
      </Link>
      <div className='-mt-24'>
        <Advertisement />
      </div>

    </div>
  )
}

export default App
