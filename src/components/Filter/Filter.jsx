import { Field, Form, Formik } from 'formik';
import Container from '../Container/Container';
import css from './Filter.module.css';

const Filter = () => {
  const initialValue = {
    location: '',
    AC: false,
    transmission: '',
    kitchen: false,
    TV: false,
    bathroom: false,
    form: '',
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValue} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form>
          <Container className={css.container}>
            <label htmlFor='location' className={css.loc}>
              Location
            </label>
            <Field
              type='text'
              id='location'
              name='location'
              placeholder='City'
              className={css.locForm}
            />
          </Container>
          <h2 className={css.filterDesc}>Filter</h2>
          <Container className={css.eqContainer}>
            <h3 className={css.equipment}>Vehicle equipment</h3>
            <Container className={css.eqFilterContainer}>
              {/* Чекбокс для AC */}
              <label
                className={css.checkBoxLabel}
                style={{
                  border: values.AC ? '1px solid #e44848' : '1px solid #dadde1',
                }}
              >
                <Field
                  type='checkbox'
                  id='AC'
                  name='AC'
                  className={css.checkBox}
                />
                AC
              </label>

              {/* Чекбокс для Transmission */}
              <label
                className={css.checkBoxLabel}
                style={{
                  border: values.transmission
                    ? '1px solid #e44848'
                    : '1px solid #dadde1',
                }}
              >
                <Field
                  type='radio'
                  id='transmission'
                  name='transmission'
                  value='automatic'
                  className={css.checkBox}
                />
                Automatic
              </label>

              {/* Чекбокс для Kitchen */}
              <label
                className={css.checkBoxLabel}
                style={{
                  border: values.kitchen
                    ? '1px solid #e44848'
                    : '1px solid #dadde1',
                }}
              >
                <Field
                  type='checkbox'
                  id='kitchen'
                  name='kitchen'
                  className={css.checkBox}
                />
                Kitchen
              </label>

              {/* Чекбокс для TV */}
              <label
                className={css.checkBoxLabel}
                style={{
                  border: values.TV ? '1px solid #e44848' : '1px solid #dadde1',
                }}
              >
                <Field
                  type='checkbox'
                  id='TV'
                  name='TV'
                  className={css.checkBox}
                />
                TV
              </label>

              {/* Чекбокс для Bathroom */}
              <label
                className={css.checkBoxLabel}
                style={{
                  border: values.bathroom
                    ? '1px solid #e44848'
                    : '1px solid #dadde1',
                }}
              >
                <Field
                  type='checkbox'
                  id='bathroom'
                  name='bathroom'
                  className={css.checkBox}
                />
                Bathroom
              </label>
            </Container>
          </Container>
          {/*Vehicle type */}
          <Container className={css.eqContainer}>
            <h3 className={css.equipment}>Vehicle type</h3>
            <Container className={css.typeFilterContainer}>
              <label
                className={css.checkBoxLabel}
                style={{
                  border:
                    values.form === 'van'
                      ? '1px solid #e44848'
                      : '1px solid #dadde1',
                }}
              >
                <Field
                  type='radio'
                  id='form'
                  name='form'
                  value='van'
                  className={css.checkBox}
                />
                Van
              </label>
              <label
                className={css.checkBoxLabel}
                style={{
                  border:
                    values.form === 'fullyIntegrated'
                      ? '1px solid #e44848'
                      : '1px solid #dadde1',
                }}
              >
                <Field
                  type='radio'
                  id='form'
                  name='form'
                  value='fullyIntegrated'
                  className={css.checkBox}
                />
                Fully Integrated
              </label>
              <label
                className={css.checkBoxLabel}
                style={{
                  border:
                    values.form === 'alcove'
                      ? '1px solid #e44848'
                      : '1px solid #dadde1',
                }}
              >
                <Field
                  type='radio'
                  id='form'
                  name='form'
                  value='alcove'
                  className={css.checkBox}
                />
                alcove
              </label>
            </Container>
          </Container>
          <button type='submit'>submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default Filter;
