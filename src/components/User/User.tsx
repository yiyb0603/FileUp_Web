import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import Profile from 'assets/icons/Home/profile_default.jpg';
import InfoTopic from './InfoTopic';
import { IUserResponseInfo } from 'util/types/UserTypes';
import rankStyle from 'util/RankStyle';
import ProfileRank from './ProfileRank';

const style = require('./User.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface PropTypes {
  userInfo: IUserResponseInfo;
}

const User = ({ userInfo }: PropTypes): JSX.Element => {
  const { id, email, code, rank, nickname, postList, followedList, followingList } = userInfo;
  const rankColor: string = rankStyle(rank);

  const borderStyle: CSSProperties = {
    border: `8px solid ${rankColor}`,
  };

  return (
    <div className={cx('User')}>
      <div className={cx('User-Info')}>
        <div className={cx('User-Info-Left')}>
          <div className={cx('User-Info-Left-Profile')}>
            <img src={Profile} alt='profile' style={borderStyle} />
            <ProfileRank rank={rank} rankColor={rankColor} />
          </div>

          <div className={cx('User-Info-Left-Names')}>
            <div className={cx('User-Info-Left-Names-Name')}>
              <span style={{ fontWeight: 'bold' }}>{nickname}</span>
              <span>#{code}</span>
            </div>

            <div>{rank} 등급</div>
            <div>{email}</div>
          </div>
        </div>

        <div className={cx('User-Info-Right')}>
          <InfoTopic title="게시글" count={postList.length} />
          <InfoTopic title="팔로워" count={followedList.length} />
          <InfoTopic title="팔로잉" count={followingList.length} />
        </div>
      </div>
    </div>
  );
};

export default User;
