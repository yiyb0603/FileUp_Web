import React, { CSSProperties } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import HomeLoading from '../HomeLoading';

const UserLoading = (): JSX.Element => {
  const wrapperStyle: CSSProperties = {
    width: '100%',
    maxWidth: '1200px',
    margin: '2rem auto',
  }
  
  return (
    <div style={wrapperStyle}>
      <Skeleton animation='wave' width={'95%'} height={400} style={{ marginTop: '-80px' }} />
      <HomeLoading />
    </div>
  );
};

export default UserLoading;
