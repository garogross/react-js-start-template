import React from 'react';
import {DefaultPlayer as Video} from 'react-html5video';

import "./Video.scss"

function CostumeVideo({src,   poster,className,type,controls,autoPlay}) {
    return (
        <div className={className ? className : ''}>
            <Video
                autoPlay={autoPlay && autoPlay}
                // loop
                poster={poster ? poster : null}
                controls={controls ? controls : ['PlayPause', 'Seek', 'Time', 'Volume']}
            >
                <source src={src} type={type ? type : 'video/mp4'}/>
            </Video>
        </div>
    );
}

export default CostumeVideo;