import Button from '../Button/Button';
import gift from '../../img/shared.png';
import './Share.scss';

function Share() {
  return (
    <section className="share section bd-container" name="share">
      <div className="share__container bd-grid">
        <div data-aos="fade-right" data-aos-delay="1200" className="share__img">
          <img src={gift} alt="sharing gift" />
        </div>
        <div data-aos="fade-left" data-aos-delay="1200" className="share__data">
          <h2 className="section-title-center">
            Sharing Is The Best Gift <br /> You Can Give{' '}
          </h2>
          <p className="share__description">
            Sharing the holidays is the best gift you given give a present or
            share your love with the people you love the most and celebrate with
            great happiness.
          </p>
          <Button link={'#'} children={'Send a Gift'} />
        </div>
      </div>
    </section>
  );
}

export default Share;
