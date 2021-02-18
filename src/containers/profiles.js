import React from 'react';
import * as ROUTES from '../constants/routes';
import { Header, Profiles } from '../components';
import logo from '../logo.svg';

export function SelectProfileContainer ({ user, setProfile}) {
    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix"/>
                </Header.Frame>
            </Header>

            <Profiles>
                <Profiles.Title>Who's Watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.Item onClick={() => setProfile({displayName: user.displayName, photoURL: user.photoURL})}>
                        <Profiles.Picture src={user.photoURL}/>
                        <Profiles.Name>{user.displayName}</Profiles.Name>
                    </Profiles.Item>
                </Profiles.List>
            </Profiles>
        </>
    )
}