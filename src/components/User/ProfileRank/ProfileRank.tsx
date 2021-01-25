import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';

const style = require('./ProfileRank.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface PropTypes {
  rank: string;
  rankColor: string;
}

const ProfileRank = ({ rank, rankColor }: PropTypes): JSX.Element => {
  const styles: CSSProperties = {
    backgroundColor: rankColor,
  };

  return (
    <div className={cx('ProfileRank')} style={styles}>
      <div className={cx('ProfileRank-Rank')}>
        <div>{rank.toUpperCase()}</div>
      </div>
    </div>
  );
};

export default ProfileRank;
