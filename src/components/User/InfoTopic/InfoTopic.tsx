import React from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import numberCommas from 'converter/NumberCommas';

const style = require('./InfoTopic.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface PropTypes {
  title: string;
  count: number;
};

const InfoTopic = ({ title, count }: PropTypes): JSX.Element => {
  return (
    <div className={cx('InfoTopic')}>
      <div className={cx('InfoTopic-Title')}>{title}</div>
      <div className={cx('InfoTopic-Count')}>{numberCommas(count)}</div>
    </div>
  );
};

export default InfoTopic;
