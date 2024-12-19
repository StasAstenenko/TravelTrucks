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
  selectTotal,
} from '../../redux/allTransport/selectors';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectAllTransport);
  const total = useSelector(selectTotal);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getAllTransport(page));
  }, [dispatch, page]);

  function loadMore() {
    if (items.length < total) {
      setPage(page + 1); // Увеличиваем номер страницы
    }
  }

  return (
    <Section className={css.section}>
      <Filter />
      <Container className={css.container}>
        <TransportsList />
        <LoadMoreBtn loadMore={loadMore} className={css.loadMoreBtn} />
      </Container>
    </Section>
  );
};

export default CatalogPage;
