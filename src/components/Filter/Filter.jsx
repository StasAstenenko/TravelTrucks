import { Field, Form, Formik } from 'formik';
import Container from '../Container/Container';
import css from './Filter.module.css';
import { AiOutlineAppstore } from 'react-icons/ai';
import {
  BsCupHot,
  BsDiagram3,
  BsDisplay,
  BsGrid1X2,
  BsGrid3X3Gap,
  BsMap,
  BsWind,
} from 'react-icons/bs';
import { PiShower } from 'react-icons/pi';

const Filter = ({ onFilterChange }) => {
  const initialValue = {
    location: '',
    AC: false,
    transmission: '',
    kitchen: false,
    TV: false,
    bathroom: false,
    form: '',
  };

  const handleSubmit = (values, actions) => {
    // Фильтруем значения, оставляя только заполненные или выбранные
    const filteredValues = Object.fromEntries(
      Object.entries(values).filter(([, value]) => {
        if (typeof value === 'boolean') return value; // Возвращаем только true для чекбоксов
        return value !== ''; // Убираем пустые строки
      })
    );
    onFilterChange(filteredValues);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValue} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form>
          <Container className={css.container}>
            <label htmlFor='location' className={css.loc}>
              Location
            </label>
            <BsMap className={css.locIcon} />
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
                <BsWind className={css.icon} />
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
                <BsDiagram3 className={css.icon} />
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
                <BsCupHot className={css.icon} />
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
                <BsDisplay className={css.icon} />
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
                <PiShower className={css.icon} />
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
                <BsGrid1X2 className={css.icon} />
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
                <AiOutlineAppstore className={css.icon} />
                Fully <span>Integrated</span>
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
                <BsGrid3X3Gap className={css.icon} />
                Alcove
              </label>
            </Container>
          </Container>
          <button type='submit' className={css.searchBtn}>
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Filter;
