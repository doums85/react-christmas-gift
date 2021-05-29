import Button from '../Button/Button';
import { decorationData } from '../../data/data';
import { v4 as uuidv4 } from 'uuid';
import './Decoration.scss';

export const Decoration = () => {
  return (
    <section className="decoration section bd-container" name="decoration">
      <h2 className="section-title">
        Give Christmas Decoration <br /> For Your Home{' '}
      </h2>
      <div className="decoration__container bd-grid">
        {decorationData.map((el) => {
          return (
            <div data-aos="fade-down" data-aos-offset="500"  key={uuidv4()} className="decoration__data">
              <img
                src={el.image}
                alt="decoration"
                className="decoration__img"
              />
              <h3 className="decoration__title">{el.title}</h3>
              <a href="#" className="button button-link">
                Go Shopping
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Decoration;
