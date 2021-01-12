import React from "react";
import classNames from 'classnames';
import { ClassNamesFn } from "classnames/types";
import Skeleton from '@material-ui/lab/Skeleton';

const style = require("./HomeLoading.scss");
const cx: ClassNamesFn = classNames.bind(style);

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
