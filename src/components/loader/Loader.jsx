import { FallingLines } from 'react-loader-spinner';

export function Loader() {
  return (
    <FallingLines
      color="#4fa94d"
      width="100"
      visible={true}
      ariaLabel="falling-lines-loading"
    />
  );
}
