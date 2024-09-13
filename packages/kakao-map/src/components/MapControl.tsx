
import { PropsWithChildren } from 'react';
import './MapControl.scss';

type ControlPosition = "topright" | "topleft" | "bottomleft" | "bottomright"

const POSITION_CLASSES = { 
    bottomleft : 'kakao-bottom kakao-left',
    bottomright : 'kakao-bottom kakao-right',
    topleft :  'kakao-top kakao-left',
    topright : 'kakao-top kakao-right',
}


interface Props extends PropsWithChildren {
    position : ControlPosition;
}

export function MapControl( { children, position } : Props  ) {

    const positionClass = ((position && POSITION_CLASSES[position]) || POSITION_CLASSES.topright)

    return (
        <div className={`${'kakao_custom_control'} ${positionClass}`} >
            {children}
        </div>
    )

}