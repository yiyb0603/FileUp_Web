import React, { CSSProperties } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

const PostLoading = (): JSX.Element => {
  const wrapperStyle: CSSProperties = {
    width: '100%',
    maxWidth: '1000px',
    margin: '2rem auto',
  }
  
  return (
    <div style={wrapperStyle}>
      <Skeleton animation="wave" width={'95%'} height={70} />
      <Skeleton animation="wave" width={'95%'} height={700} style={{ marginTop: '-100px' }} />
      <Skeleton animation="wave" width={'95%'} height={100} style={{ marginTop: '-50px', marginBottom: 30, }} />
    </div>
  );
};

export default PostLoading;
