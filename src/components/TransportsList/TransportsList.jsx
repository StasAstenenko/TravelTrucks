import { useSelector } from 'react-redux';
import { selectAllTransport } from '../../redux/allTransport/selectors';
import TransportsItem from '../TransportsItem/TransportsItem';
import css from './TransportsList.module.css';

const TransportsList = ({ filters }) => {
  const items = useSelector(selectAllTransport);

  const isFiltering = Object.values(filters).some(
    (filter) => filter !== false && filter !== '' // Если хотя бы один фильтр активен
  );

  // Проверяем, соответствуют ли элементы фильтрам
  const filteredItems = isFiltering
    ? items.filter((item) => {
        // Фильтрация по location
        if (filters.location && !item.location.includes(filters.location)) {
          return false;
        }

        // Фильтрация по AC
        if (filters.AC && !item.AC) {
          return false;
        }

        // Фильтрация по Transmission
        if (
          filters.transmission &&
          item.transmission !== filters.transmission
        ) {
          return false;
        }

        // Фильтрация по Kitchen
        if (filters.kitchen && !item.kitchen) {
          return false;
        }

        // Фильтрация по TV
        if (filters.TV && !item.TV) {
          return false;
        }

        // Фильтрация по Bathroom
        if (filters.bathroom && !item.bathroom) {
          return false;
        }

        // Фильтрация по типу формы
        if (filters.form && item.form !== filters.form) {
          return false;
        }

        return true; // Если все фильтры прошли, возвращаем элемент
      })
    : items;

  return (
    <ul className={css.list}>
      {filteredItems.map((item) => (
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
      ))}
    </ul>
  );
};

export default TransportsList;
