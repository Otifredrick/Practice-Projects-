import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            I keep my search <span>organized.</span>
          </h1>
          <p>
            I keep every application, interview, and follow-up in one calm
            workspace. I see my progress at a glance and give each opportunity
            a clear next step.
          </p>
          <Link to='/register' className='btn btn-hero'>
            I open my career board
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
