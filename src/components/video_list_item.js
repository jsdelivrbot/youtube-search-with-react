import React from 'react';

export default function VideoListItem({video, onVideoSelect}) {
  // const video = props.video; is equal to {video} - pattern matching
  const imgUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className='list-group-item'>
      <div className='video-list media'>
        <div className='media-left'>
          <img className='media-object' src={imgUrl} />
          <div className='media-body'>
            <div className='media-heading'>{video.snippet.title}</div>
          </div>
        </div>
      </div>
    </li>
  );
};