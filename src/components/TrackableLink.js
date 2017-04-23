import React from 'react';

const trackClick = (props) => (event) => {
  window.ga('send', 'event', 'openLink', props.href);

  if (props.onClick) {
    props.onClick(event);
  }
};

const TrackableLink = (props) => {
  return <a {...props} onClick={trackClick(props)}>{ props.children }</a>
};

export default TrackableLink;