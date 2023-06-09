import { ThreeDots } from 'react-loader-spinner';

export function Loader() {
  return (
    <ThreeDots
      color="#303f9f"
      width="100"
      visible={true}
      ariaLabel="three-dots-loading"
      wrapperStyle={{ margin: '0 auto' }}
    />
  );
}
