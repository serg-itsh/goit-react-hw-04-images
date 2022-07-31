import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <>
      <RotatingLines
        strokeColor="blue"
        strokeWidth="1"
        animationDuration="0.75"
        width="96"
        visible={true}
        wrapperStyle={{
          dispay: 'flex',
          justifyContent: 'center',
          marginTop: 200,
        }}
        wrapperClass
      />
      <h1>Loading...</h1>
    </>
  );
};
