import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTsById } from '../../redux/details/operations';
import Section from '../../components/Section/Section';
import css from './DetailsPage.module.css';
import TransportDetail from '../../components/TransportDetail/TransportDetail';
// import { selectIsLoading } from '../../redux/details/selectors';
// import Loader from '../../components/Loader/Loader';

const DetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  // const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getTsById(id));
  }, [dispatch, id]);

  return (
    <Section className={css.section}>
      <TransportDetail />
    </Section>
  );
};

export default DetailsPage;
