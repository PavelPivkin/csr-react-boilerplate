import { bind } from 'classnames/bind';
import * as React from 'react';
import cls from '../../utlis/cls';
import './Page.sass';

const styles = require('./Page.sass');
const classes = bind(styles);
const b = cls('page');

export interface IProps {
    className?: string;
    children?: React.ReactChild;
}

export function Page(props: IProps): JSX.Element {
    return (
        <div {...props} className={classes(b())}>
            {props.children}
        </div>
    );
}
