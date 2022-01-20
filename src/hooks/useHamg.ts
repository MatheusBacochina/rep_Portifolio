import { useState } from "react"


interface props{
    bool: boolean,
    setbool: () => void 
}


export function useHamb( ){

    const [bool, setbool] = useState<props | any>(false)


    function abrir(){
        setbool((prev: boolean) => !prev)
 
    }
   

return [bool, abrir]
}