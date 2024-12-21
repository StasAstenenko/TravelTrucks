import { useSelector } from 'react-redux';
import { selectAllTransport } from '../../redux/allTransport/selectors';
import TransportsItem from '../TransportsItem/TransportsItem';
import css from './TransportsList.module.css';

const TransportsList = () => {
  const items = useSelector(selectAllTransport);

  return (
    <ul className={css.list}>
      {items?.map((item) => {
        return (
          <TransportsItem
            key={item.id}
            id={item.id}
            countReviews={item.reviews?.length}
            description={item.description}
            gallery={item.gallery}
            location={item.location}
            kitchen={item.kitchen}
            AC={item.AC}
            name={item.name}
            engine={item.engine}
            refrigerator={item.refrigerator}
            transmission={item.transmission}
            price={item.price.toFixed(2)}
            rating={item.rating}
          />
        );
      })}
    </ul>
  );
};

export default TransportsList;
