import './App.css'
import BannerSide from './components/bannerSide'
import JasonImg from './assets/JasonImg.svg'
import Advertisement from './components/advertisement'

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
    </div>
  )
}

export default App
