import styled,{css} from 'styled-components'
import {Flex,Div} from '../../themes/grid'
import {blue,yellow,red} from '../../themes/variable'
import {Link} from 'react-router-dom';

export const NavigationContainer = styled(Flex)`
    position:fixed;
    right:2em;
    top:1.8em;
`; 

export const NavItem = styled(Link)`
    margin-right: 30px;
    font-size:1.5em;
    cursor:pointer;
    color:${blue};
    position:relative;
    text-decoration:none;

    &:hover{
        color:${yellow};
        &:after{
            content:' ';
            position:absolute;
            left:0;
            right:0;
            width:100%;
            height:100%;
            background-color:${red};
            z-index:-1;
            transform:scale(1.3,1.5)
        }
    }

`;
