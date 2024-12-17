import Container from '../../components/Container/Container';
import Hero from '../../components/Hero/Hero';
import Section from '../../components/Section/Section';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <Section className={css.homeSection}>
      <Container className={css.container}>
        <Hero />
      </Container>
    </Section>
  );
};

export default HomePage;
