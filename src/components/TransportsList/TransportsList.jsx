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
            countReviews={item.reviews?.length}
            description={item.description}
            gallery={item.gallery}
            location={item.location}
            name={item.name}
            price={item.price.toFixed(2)}
            rating={item.rating}
          />
        );
      })}
    </ul>
  );
};

export default TransportsList;
