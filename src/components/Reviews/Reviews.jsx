import { useSelector } from 'react-redux';
import css from './Reviews.module.css';
import { selectReviews } from '../../redux/details/selectors';
import Container from '../Container/Container';
import { FaStar } from 'react-icons/fa';

const Reviews = () => {
  const reviews = useSelector(selectReviews);
  return (
    <>
      <ul className={css.commentList}>
        {reviews.map((review) => {
          const filledStars = review.reviewer_rating; // Рейтинг из данных
          const emptyStars = 5 - filledStars; // Пустые звезды для заполнения
          return (
            <li key={review.id}>
              <Container className={css.nameContainer}>
                <p className={css.fistLater}>{review.reviewer_name[0]}</p>
                <Container className={css.starContainer}>
                  <p>{review.reviewer_name}</p>
                  <div className={css.stars}>
                    {Array.from({ length: filledStars }).map((_, index) => (
                      <FaStar key={index} className={css.iconStar} />
                    ))}
                    {Array.from({ length: emptyStars }).map((_, index) => (
                      <FaStar
                        key={`empty-${index}`}
                        className={css.iconStarEmpty}
                      />
                    ))}
                  </div>
                </Container>
              </Container>
              <p className={css.comment}>{review.comment}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Reviews;
