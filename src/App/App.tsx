import * as React from 'react';

import { Page } from '../core/Page/Page';

import './App.sass';

export interface IProps {
    username?: string;
}

export function App(props: IProps): JSX.Element {

    return (
        <Page>
            Привет
        </Page>
    );
}
