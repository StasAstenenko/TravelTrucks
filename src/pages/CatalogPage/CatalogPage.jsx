import { useDispatch, useSelector } from 'react-redux';
import Container from '../../components/Container/Container';
import Filter from '../../components/Filter/Filter';
import Section from '../../components/Section/Section';
import TransportsList from '../../components/TransportsList/TransportsList';
import css from './CatalogPage.module.css';
import { getAllTransport } from '../../redux/allTransport/operations';
import { useEffect, useState } from 'react';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import {
  selectAllTransport,
  selectIsLoading,
  selectTotal,
} from '../../redux/allTransport/selectors';
import Loader from '../../components/Loader/Loader';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectAllTransport);
  const total = useSelector(selectTotal);
  const [page, setPage] = useState(1);
  const isLoading = useSelector(selectIsLoading);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    dispatch(getAllTransport({ page, filters }));
  }, [dispatch, page, filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters); // Обновляем фильтры
    setPage(1); // Сбрасываем страницу на первую
  };

  function loadMore() {
    if (items.length < total) {
      setPage(page + 1); // Увеличиваем номер страницы
    }
  }

  return (
    <Section className={css.section}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Filter onFilterChange={handleFilterChange} />
          <Container className={css.container}>
            <TransportsList filters={filters} />
            <LoadMoreBtn loadMore={loadMore} className={css.loadMoreBtn} />
          </Container>
        </>
      )}
    </Section>
  );
};

export default CatalogPage;
