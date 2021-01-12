import React from "react";
import Skeleton from '@material-ui/lab/Skeleton';

const HomeLoading = (): JSX.Element => {
  return (
    <>
      <Skeleton animation="wave" width={'95%'} height={40} />
      <Skeleton animation="wave" width={'95%'} height={350} style={{ marginTop: '-70px' }} />
      <Skeleton animation="wave" width={'95%'} height={50} style={{ marginTop: '-50px', marginBottom: 30, }} />

      <Skeleton animation="wave" width={'95%'} height={40} />
      <Skeleton animation="wave" width={'95%'} height={350} style={{ marginTop: '-70px' }} />
      <Skeleton animation="wave" width={'95%'} height={50} style={{ marginTop: '-50px', marginBottom: 30, }} />

      <Skeleton animation="wave" width={'95%'} height={40} />
      <Skeleton animation="wave" width={'95%'} height={350} style={{ marginTop: '-70px' }} />
      <Skeleton animation="wave" width={'95%'} height={50} style={{ marginTop: '-50px', marginBottom: 30, }} />
    </>
  );
};

export default HomeLoading;
