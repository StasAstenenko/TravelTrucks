import { useSelector } from 'react-redux';
import {
  selectDescription,
  selectGallery,
  selectLocation,
  selectName,
  selectPrice,
  selectRating,
  selectReviews,
} from '../../redux/details/selectors';
import Container from '../Container/Container';
import css from './TransportDetail.module.css';
import { FaStar } from 'react-icons/fa';
import { BsMap } from 'react-icons/bs';
import { NavLink, Outlet } from 'react-router-dom';
import clsx from 'clsx';
import { Suspense } from 'react';
import RegForm from '../RegFrom/RegFrom';

const isActive = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const TransportDetail = () => {
  const name = useSelector(selectName);
  const rating = useSelector(selectRating);
  const countReviews = useSelector(selectReviews);
  const location = useSelector(selectLocation);
  const price = useSelector(selectPrice);
  const images = useSelector(selectGallery);
  const desc = useSelector(selectDescription);
  return (
    <Container className={css.container}>
      <h2 className={css.name}>{name}</h2>
      <Container className={css.ratingContainer}>
        <p className={css.rating}>
          <FaStar className={css.iconStar} />
          {`${rating}(${countReviews?.length} Reviews)`}
        </p>
        <p className={css.locDesc}>
          <BsMap className={css.locIcon} /> {location}
        </p>
      </Container>
      <p className={css.camperPrice}>&#8364;{price.toFixed(2)}</p>
      <ul className={css.listImg}>
        {images.map((image) => {
          return (
            <li key={image.id} className={css.listItem}>
              <img src={image.original} alt='camper' className={css.img} />
            </li>
          );
        })}
      </ul>
      <p className={css.desc}>{desc}</p>
      <Container className={css.linkContainer}>
        <NavLink className={isActive} to='features'>
          Features
        </NavLink>
        <NavLink className={isActive} to='reviews'>
          Reviews
        </NavLink>
      </Container>
      <Container className={css.regContainer}>
        <Container className={css.typeContainer}>
          <Suspense>
            <Outlet />
          </Suspense>
        </Container>
        <RegForm />
      </Container>
    </Container>
  );
};

export default TransportDetail;
