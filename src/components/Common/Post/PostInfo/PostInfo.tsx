import React, { useCallback } from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import { useHistory } from 'react-router-dom';
import { History } from 'history';
import { handleMomentParse } from 'lib/Moment';
import { AiFillHeart } from 'react-icons/ai';
import { GoCommentDiscussion } from 'react-icons/go';
import { FaEye } from 'react-icons/fa';
import OptionMenus from '../OptionMenus';
import Profile from 'assets/icons/Home/profile_default.jpg';

const style = require('./PostInfo.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface PropTypes {
  id: number;
  userId: number;
  nickname: string;
  code: number;
  created: string | Date;
  updated: string | Date | null;
  like: number;
  comments: number;
  view: number;
  isMenu: boolean;
}

const PostInfo = ({ id, userId, nickname, code, created, updated, like, comments, view, isMenu }: PropTypes): JSX.Element => {
  const history: History<unknown> = useHistory();

  const handleUserPage = useCallback((): void => {
    history.push(`/user/${userId}`);
  }, [history, userId]);

  return (
    <div className={cx('PostInfo')}>
      <div className={cx('PostInfo-Profile')} onClick={handleUserPage}>
        <img src={Profile} alt ='profile' className={cx('PostInfo-Profile-Image')} />
        <div className={cx('PostInfo-Profile-Name')}>{nickname}#{code}</div>
      </div>

      <div className={cx('PostInfo-Right')}>
        <div className={cx('PostInfo-Right-Time')}>
          {handleMomentParse(created, 'YYYY년 MM월 DD일 HH시 mm분')
        }</div>

        <div className={cx('PostInfo-Right-HeartWrap')}>
          <AiFillHeart className={cx('PostInfo-Right-HeartWrap-Heart')} />
          <div className={cx('PostInfo-Right-HeartWrap-Count')}>{like}</div>
        </div>

        <div className={cx('PostInfo-Right-CommentWrap')}>
          <GoCommentDiscussion className={cx('PostInfo-Right-CommentWrap-Comment')} />
          <div className={cx('PostInfo-Right-CommentWrap-Count')}>{comments}</div>
        </div>

        <div className={cx('PostInfo-Right-ViewWrap')}>
          <FaEye className={cx('PostInfo-Right-ViewWrap-View')} />
          <div className={cx('PostInfo-Right-ViewWrap-Count')}>{view}</div>
        </div>

        {
          isMenu && <OptionMenus direction='top' />
        }
      </div>
    </div>
  );
};

export default PostInfo;
