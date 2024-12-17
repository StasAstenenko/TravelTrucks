import Filter from '../../components/Filter/Filter';
import Section from '../../components/Section/Section';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  return (
    <Section className={css.section}>
      <Filter />
    </Section>
  );
};

export default CatalogPage;
