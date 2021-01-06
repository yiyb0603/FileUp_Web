import React, { ReactNode } from "react";
import classNames from 'classnames';
import { ClassNamesFn } from "classnames/types";
import ScrollTop from "components/Common/PageItems/ScrollTop";
import HeaderContainer from "containers/Home/Header";

const style = require("./PageTemplate.scss");
const cx: ClassNamesFn = classNames.bind(style);

interface PropTypes {
  children?: ReactNode;
}

const PageTemplate = ({ children }: PropTypes): JSX.Element => {
  return (
    <div className={cx('PageTemplate')}>
      <HeaderContainer />
      {children}
      <ScrollTop />
    </div>
  );
};

export default PageTemplate;
