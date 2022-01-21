import styled from 'styled-components'

interface prop{
    green: string
}

export const Section = styled.div<prop | any>`

    width: 100%;
    max-width: 1100px;
    height: 500px;
    
background: linear-gradient(179.14deg, rgba(0, 0, 0, 0) 85.37%, rgba(34, 38, 54, 0.7) 114.77%), linear-gradient(201.18deg, #222736 14.76%, #462E79 36.08%, #4B3381 46.78%);
    clip-path: polygon(0 8%, 100% 0, 100% 100%, 0% 100%);

`
