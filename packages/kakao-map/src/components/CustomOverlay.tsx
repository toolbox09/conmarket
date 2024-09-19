import { useMemo, forwardRef, useLayoutEffect, useImperativeHandle } from 'react';
import ReactDOM from "react-dom"
import { useMap } from '../internal';

export interface CustomOverlayProps {
    position: {
      lat: number
      lng: number
    }
    clickable?: boolean
    xAnchor?: number
    yAnchor?: number
    zIndex?: number
    onCreate?: (customOverlay: kakao.maps.CustomOverlay) => void
}

export const CustomOverlay = forwardRef<
  kakao.maps.CustomOverlay,
  React.PropsWithChildren<CustomOverlayProps>
>(function CustomOverlay(
    { position, children, clickable, xAnchor, yAnchor, zIndex, onCreate },
    ref,
){
    const map = useMap();

    const overlayPosition = useMemo(() => {
        return new kakao.maps.LatLng(position.lat, position.lng)
    }, [position.lat, position.lng]);

    const overlay = useMemo(() => {
        const container = document.createElement("div")
        container.style.display = "none"

        const customOverlay = new kakao.maps.CustomOverlay({
            clickable: clickable,
            xAnchor: xAnchor,
            yAnchor: yAnchor,
            zIndex: zIndex,
            position: overlayPosition,
            content: container,
        })

        return customOverlay
    }, [clickable, xAnchor, yAnchor, overlayPosition]);

    const container = useMemo(() => overlay.getContent() as HTMLElement,[overlay]);

    useImperativeHandle(ref, () => overlay, [overlay]);

    useLayoutEffect(() => {
        overlay.setMap(map);
        return () => {
            if(overlay) {
                overlay.setMap(null)
            }
        }
      }, [overlay])

    useLayoutEffect(() => {
        if (onCreate) onCreate(overlay)
    }, [overlay, onCreate])

    return (
        container.parentElement &&
        ReactDOM.createPortal(children, container.parentElement)
    )
})