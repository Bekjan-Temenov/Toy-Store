import { Container } from '../../Components/Container/container'
import BannerStart from '../../Components/Products/BannerStart'
import fresh from '../../assets/svg/fresh.svg'
import fresh2 from '../../assets/svg/fresh-sweet-basil-leaves-isolated-white-background 2.svg'
import fresh3 from '../../assets/svg/fresh-sweet-basil-leaves-isolated-white-background 1 (3).svg'
import fresh4 from '../../assets/svg/fresh-sweet1.svg'
import Sort from '../Sort/Sort'

const Blog = () => {
  return (
    <Container>
      <div className='bg-green-50 h-[200px] rounded-xl pt-12 relative'>
        <h2 className='text-center text-3xl'>Welcome to our blog </h2>
        <p className='text-center'>Here you can find a lot of interesting and useful information that you </p>
        <p className='text-center'>need in gardening and creating a beautiful garden</p>
        <div>
          <img className='absolute bottom-[-11px]' src={fresh} alt="" />
          <img className='absolute left-[5rem] bottom-[2rem]' src={fresh2} alt="" />
          <img className='absolute left-[67rem] bottom-8' src={fresh3} alt="" />
          <img className='absolute left-[73rem] bottom-[8rem]' src={fresh4} alt="" />
        </div>
      </div>
      <Sort />
      <BannerStart/>
    </Container>
  )
}

export default Blog