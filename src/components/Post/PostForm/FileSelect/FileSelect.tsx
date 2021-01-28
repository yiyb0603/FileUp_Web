import React, { MutableRefObject } from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';

const style = require('./FileSelect.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface FileSelectProps {
  isDragging: boolean;
  dragRef: MutableRefObject<HTMLLabelElement | null>
}

const FileSelect = ({ isDragging, dragRef }: FileSelectProps): JSX.Element => {
  return (
    <label
      htmlFor='fileInput'
      className={cx('FileSelect', {
        'FileSelect-Dragging': isDragging,
      })}
      ref={dragRef}
    >
      <div>파일 첨부</div>
    </label>
  );
};

export default FileSelect;
