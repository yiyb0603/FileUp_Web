import React from "react";
import classNames from 'classnames';
import { ClassNamesFn } from "classnames/types";
import { BsDownload } from 'react-icons/bs';
import FeedBottom from "../FeedBottom";
import FeedFile from "../FeedFile";

const style = require("./FeedItem.scss");
const cx: ClassNamesFn = classNames.bind(style);

const FeedItem = (): JSX.Element => {
  return (
    <div className={cx('FeedItem')}>
      <div className={cx('FeedItem-Title')}>제목</div>

      <div className={cx('FeedItem-Contents')}>
        sdafkjsdalkfdsjaklfsdjaklfjdsaklfj;saldfjklㅁㄴㅇㄹㄴㅇ머리ㅏㅇ너설명
        sdafkjsdalkfdsjaklfsdjaklfjdsaklfj;saldfjklㅁㄴㅇㄹㄴㅇ머리ㅏㅇ너설명
        sdafkjsdalkfdsjaklfsdjaklfjdsaklfj;saldfjklㅁㄴㅇㄹㄴㅇ머리ㅏㅇ너설명
        sdafkjsdalkfdsjaklfsdjaklfjdsaklfj;saldfjklㅁㄴㅇㄹㄴㅇ머리ㅏㅇ너설명
        sdafkjsdalkfdsjaklfsdjaklfjdsaklfj;saldfjklㅁㄴㅇㄹㄴㅇ머리ㅏㅇ너설명
        sdafkjsdalkfdsjaklfsdjaklfjdsaklfj;saldfjklㅁㄴㅇㄹㄴㅇ머리ㅏㅇ너설명
        sdafkjsdalkfdsjaklfsdjaklfjdsaklfj;saldfjklㅁㄴㅇㄹㄴㅇ머리ㅏㅇ너설명
        sdafkjsdalkfdsjaklfsdjaklfjdsaklfj;saldfjklㅁㄴㅇㄹㄴㅇ머리ㅏㅇ너설명
        sdafkjsdalkfdsjaklfsdjaklfjdsaklfj;saldfjklㅁㄴㅇㄹㄴㅇ머리ㅏㅇ너설명
        sdafkjsdalkfdsjaklfsdjaklfjdsaklfj;saldfjklㅁㄴㅇㄹㄴㅇ머리ㅏㅇ너설명
        
      </div>

      <FeedFile />
      
      <FeedBottom />
    </div>
  );
};

export default FeedItem;
