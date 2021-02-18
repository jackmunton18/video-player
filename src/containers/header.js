import React from 'react';
import { Header } from '../components/';
import * as ROUTE from '../constants/routes';
import logo from '../logo.svg'

export function HeaderContainer({children, ...restProps}) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTE.HOME} alt="Netflix" src={logo}/>
                <Header.ButtonLink to={ROUTE.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>        
    );
}