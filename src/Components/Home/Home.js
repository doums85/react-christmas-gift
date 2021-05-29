import hand from '../../img/home.png';
import Button from '../Button/Button';
import './Home.scss';

const Home = () => {

  return (
    <section className="home" name="home">
      <div className="home__container bd-container bd-grid">
        <div data-aos="fade-down" className="home__img">
          <img src={hand} alt="home image" alt="image home" />
        </div>

        <div data-aos="fade-down" className="home__data">
          <h1 className="home__title">Send A Gift For Christmas</h1>
          <div className="home__description">
            In these end of the year holidays send a gift to your loved one and
            share the happiness at Chritmas.
          </div>
          <Button link={'#'} children={'Get Started'} />
        </div>
      </div>
    </section>
  );
};

export default Home;
