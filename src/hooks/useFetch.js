import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {

    const isMounted = useRef(true);
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null,
    })

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {

        setState({
            data: null,
            loading: true,
            error: null,
        })

        fetch( url )
            .then(resp => resp.json())
            .then(data => {

                setTimeout(() => {
        
                    if(isMounted.current){
                        setState({
                            data,
                            loading: false,
                            error: null
                        })
                    }else{
                        console.log("El state no se cargo");
                    }

                }, 4000);
            })

    },[url])
    
    return state;
}
