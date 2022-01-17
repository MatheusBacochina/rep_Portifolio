import styled from 'styled-components'

interface prop{
    green: string
}

export const Section = styled.div<prop | any>`

    width: 100%;
    max-width: 1100px;
    height: 500px;
    background: linear-gradient(138.48deg, rgba(0, 0, 0, 0.2) 15.07%, rgba(74, 51, 127, 0.2) 33.62%), linear-gradient(201.18deg, #222736 14.76%, #462E79 36.08%, #4B3381 46.78%);
    clip-path: polygon(0 8%, 100% 0, 100% 100%, 0% 100%);

    ${props => props.green && `
    background-color: red;
    `}
`
