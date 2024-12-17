import { Hourglass } from 'react-loader-spinner';

const Loader = ({ height = '100vh' }) => {
  return (
    <Hourglass
      visible={true}
      height='80'
      width='80'
      ariaLabel='hourglass-loading'
      wrapperStyle={{
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      wrapperClass=''
      colors={['#d84343', '#e44848']}
    />
  );
};

export default Loader;
