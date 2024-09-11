import {
    useRef,
    useState,
    useEffect,
    createContext, 
    ComponentProps 
} from 'react';


export const MapContext = createContext<kakao.maps.Map>(
    undefined as unknown as kakao.maps.Map,
);

type MapProps = ComponentProps<'div'> & {
    level : number;
    center : kakao.maps.LatLng;
}

export function Map( { center, level, children, ...props } : MapProps ) {
    const ref = useRef<HTMLDivElement>(null);
    const [ map, setMap ] = useState<kakao.maps.Map>();


    useEffect(()=>{
        if(ref.current) {
            const mapOption = { 
                center: center, 
                level: level 
            };  
            var map = new kakao.maps.Map(ref.current, mapOption);
            setMap(map);
        }
    },[])  
    return (
        <>
            <div ref={ref} {...props} /> 
            {
                map && 
                <MapContext.Provider value={map}>
                    {children}
                </MapContext.Provider>
            } 
        </>
    )
}
