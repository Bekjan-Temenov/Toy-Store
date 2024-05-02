
import { Container } from './../../Container/Container';
import CustomInput from './Input/Input';
import Instagram from './Instagram/Instagram';
import Logo from './Logo/Logo';
import Ul from './Ul/Ul';
import Vertor from './Vertor/Vertor';


const Header = () => {
  return (
    <Container>
      <div className='flex justify-between my-10 '>
       <Logo/>
       <Ul/>
       <Instagram/>
       <CustomInput/>
      <Vertor/>
      </div>
    </Container>
  );
}

export default Header;

