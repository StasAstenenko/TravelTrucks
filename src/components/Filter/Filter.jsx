import { Field, Form, Formik } from 'formik';
import Container from '../Container/Container';
import css from './Filter.module.css';

const Filter = () => {
  return (
    <Formik>
      <Form>
        <Container className={css.container}>
          <label htmlFor='location' className={css.loc}>
            Location
          </label>
          <Field
            type='text'
            name='location'
            placeholder='City'
            className={css.locForm}
          />
        </Container>
        <h2 className={css.filterDesc}>Filter</h2>
        <Container className={css.eqContainer}>
          <label htmlFor='equipment' className={css.equipment}>
            Vehicle equipment
          </label>
        </Container>
      </Form>
    </Formik>
  );
};

export default Filter;
