import React from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import OptionMenus from 'components/Common/Post/OptionMenus';
import { IPostViewResObj } from 'util/types/PostTypes';
import { IFileType } from 'util/types/FileTypes';
import PostInfo from 'components/Common/Post/PostInfo';
import CommentTemplate from './Comment/CommentTemplate';
import PostFile from 'components/Common/Post/PostFile';
import TagItem from 'components/Common/Post/TagItem';
import TagList from './TagList';

const style = require('./Post.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface PropTypes {
  postInfo: IPostViewResObj;
};

const Post = ({ postInfo }: PropTypes): JSX.Element => {
  const { id, category, title, content, created, updated, tags, preview, view, like, comments, author, files } = postInfo;
  const { nickname, code } = author;

  return (
    <div className={cx('Post')}>
      <div className={cx('Post-Top')}>
        <div className={cx('Post-Top-Title')}>{title}</div>
        <OptionMenus direction='bottom' />
      </div>

      <TagList tags={tags} />

      <div className={cx('Post-Contents')}>
        <img
          src="https://raw.githubusercontent.com/sumitc91/sumitc91.github.io/master/Blogs/23a73932-d77d-4bd4-b4ab-06ea4d5183d3_c-sharp-dotnet.jpg"
          alt="images"
        />
        <div>{content}</div>
      </div>

      <div className={cx('Post-Files')}>
        {
          files && files.map(({ id, name, size }: IFileType) => {
            return (
              <PostFile
                key={id}
                text={name}
                onClick={() => {}}
              />
            )
          })
        }
      </div>

      <div className={cx('Post-Info')}>
        <PostInfo
          id={id}
          nickname={nickname}
          userId={author.id}
          code={code}
          created={created}
          updated={updated}
          like={like}
          comments={comments.length}
          view={view}
          isMenu={false}
        />
      </div>

      <CommentTemplate commentLength={comments.length} />
    </div>
  );
};

export default Post;
