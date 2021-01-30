import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import ScrollTop from 'components/Common/PageItems/ScrollTop';
import HeaderContainer from 'containers/Home/Header';
import Footer from 'components/Common/PageItems/Footer';
import ScrollProgress from 'components/Common/PageItems/ScrollProgress';

const style = require('./PageTemplate.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface PropTypes {
  children?: ReactNode;
}

const PageTemplate = ({ children }: PropTypes): JSX.Element => {
  return (
    <div className={cx('PageTemplate')}>
      <ScrollProgress />
      <HeaderContainer />
        {children}
      <Footer />
      <ScrollTop />
    </div>
  );
};

export default PageTemplate;
