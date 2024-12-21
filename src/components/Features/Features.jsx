import {
  BsCupHot,
  BsDiagram3,
  BsFuelPump,
  BsUiRadios,
  BsWind,
} from 'react-icons/bs';
import Container from '../Container/Container';
import css from './Features.module.css';
import { useSelector } from 'react-redux';
import {
  selectAC,
  selectBathroom,
  selectConsumption,
  selectEngine,
  selectForm,
  selectGas,
  selectHeight,
  selectKitchen,
  selectLength,
  selectMicrowave,
  selectRadio,
  selectRefrigerator,
  selectTank,
  selectTransmission,
  selectTV,
  selectWater,
  selectWidth,
} from '../../redux/details/selectors';
import { PiShowerLight } from 'react-icons/pi';
import { MdOutlineTv } from 'react-icons/md';
import { GiGasStove } from 'react-icons/gi';
import { LuMicrowave, LuRefrigerator } from 'react-icons/lu';
import { IoWaterOutline } from 'react-icons/io5';

const Features = () => {
  const transmission = useSelector(selectTransmission);
  const ac = useSelector(selectAC);
  const engine = useSelector(selectEngine);
  const kitchen = useSelector(selectKitchen);
  const bathroom = useSelector(selectBathroom);
  const tv = useSelector(selectTV);
  const gas = useSelector(selectGas);
  const refrigerator = useSelector(selectRefrigerator);
  const radio = useSelector(selectRadio);
  const microwave = useSelector(selectMicrowave);
  const water = useSelector(selectWater);
  const form = useSelector(selectForm);
  const length = useSelector(selectLength);
  const width = useSelector(selectWidth);
  const height = useSelector(selectHeight);
  const tank = useSelector(selectTank);
  const consumption = useSelector(selectConsumption);
  return (
    <Container className={css.typeContainer}>
      <Container className={css.categoriesContainer}>
        {transmission === 'automatic' && (
          <div className={css.iconContainer}>
            <BsDiagram3 className={css.icon} />
            Automatic
          </div>
        )}
        {ac && (
          <div className={css.iconContainer}>
            <BsWind className={css.icon} />
            AC
          </div>
        )}
        <div className={css.iconContainer}>
          <BsFuelPump className={css.icon} />
          {engine === 'patrol' ? 'Patrol' : 'Diesel'}
        </div>
        {kitchen && (
          <div className={css.iconContainer}>
            <BsCupHot className={css.icon} />
            Kitchen
          </div>
        )}
        {bathroom && (
          <div className={css.iconContainer}>
            <PiShowerLight className={css.icon} />
            Bathroom
          </div>
        )}
        {tv && (
          <div className={css.iconContainer}>
            <MdOutlineTv className={css.icon} />
            TV
          </div>
        )}
        {gas && (
          <div className={css.iconContainer}>
            <GiGasStove className={css.icon} />
            Gas
          </div>
        )}
        {refrigerator && (
          <div className={css.iconContainer}>
            <LuRefrigerator className={css.icon} />
            Refrigerator
          </div>
        )}
        {radio && (
          <div className={css.iconContainer}>
            <BsUiRadios className={css.icon} />
            Radio
          </div>
        )}
        {microwave && (
          <div className={css.iconContainer}>
            <LuMicrowave className={css.icon} />
            Microwave
          </div>
        )}
        {water && (
          <div className={css.iconContainer}>
            <IoWaterOutline className={css.icon} />
            Water
          </div>
        )}
      </Container>
      <Container>
        <Container className={css.titleContainer}>
          <h3 className={css.descTitle}>Vehicle details</h3>
        </Container>
        <Container className={css.mainInfoContainer}>
          <Container className={css.infoContainer}>
            <p>Form</p>
            <p>{form[0].toUpperCase() + form.slice(1)}</p>
          </Container>
          <Container className={css.infoContainer}>
            <p>Length</p>
            <p>{length}</p>
          </Container>
          <Container className={css.infoContainer}>
            <p>Width</p>
            <p>{width}</p>
          </Container>
          <Container className={css.infoContainer}>
            <p>Height</p>
            <p>{height}</p>
          </Container>
          <Container className={css.infoContainer}>
            <p>Tank</p>
            <p>{tank}</p>
          </Container>
          <Container className={css.infoContainer}>
            <p>Consumption</p>
            <p>{consumption}</p>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default Features;
