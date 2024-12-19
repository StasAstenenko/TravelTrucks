import { NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import css from './TransportsItem.module.css';
import { BsMap } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import { IoMdHeartEmpty } from 'react-icons/io';

const TransportsItem = ({
  name,
  rating,
  price,
  description,
  countReviews,
  location,
  //   kitchen,
  //   microwave,
  //   gas,
  //   AC,
  //   TV,
  //   bathroom,
  //   engine,
  gallery,
}) => {
  return (
    <li>
      <Container className={css.container}>
        <Container className={css.imgContainer}>
          <img
            src={`${gallery[0].original}`}
            alt='camper'
            className={css.image}
          />
        </Container>
        <Container className={css.infoContainer}>
          <Container className={css.firstContainer}>
            <h3 className={css.camperName}>{name}</h3>
            <p className={css.camperPrice}>
              &#8364;{price} <IoMdHeartEmpty className={css.iconHeart} />
            </p>
          </Container>
          <Container className={css.ratingContainer}>
            <p className={css.rating}>
              <FaStar className={css.iconStar} />
              {`${rating}(${countReviews} Reviews)`}
            </p>
            <p className={css.locDesc}>
              <BsMap className={css.locIcon} /> {location}
            </p>
          </Container>
          <p className={css.desc}>{description}</p>
          <NavLink to='/description' className={css.descBtn}>
            Show More
          </NavLink>
        </Container>
      </Container>
    </li>
  );
};

export default TransportsItem;
