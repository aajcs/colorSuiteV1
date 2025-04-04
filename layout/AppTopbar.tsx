/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { classNames } from 'primereact/utils';
import React, { forwardRef, useContext, useImperativeHandle, useRef } from 'react';
import { AppTopbarRef } from '../types/types';
import { LayoutContext } from './context/layoutcontext';

const AppTopbar = forwardRef<AppTopbarRef>((props, ref) => {
    const { layoutConfig, layoutState, onMenuToggle, showProfileSidebar } = useContext(LayoutContext);
    const menubuttonRef = useRef(null);
    const topbarmenuRef = useRef(null);
    const topbarmenubuttonRef = useRef(null);

    useImperativeHandle(ref, () => ({
        menubutton: menubuttonRef.current,
        topbarmenu: topbarmenuRef.current,
        topbarmenubutton: topbarmenubuttonRef.current
    }));

    return (
        <div className="layout-topbar">
            <Link href="/" className="layout-topbar-logo">
                <img src={'/layout/images/colorSuiteLogo.png'} alt="logo" />
                {/* <span>SAKAI</span> */}
            </Link>

            <button ref={menubuttonRef} type="button" className="p-link layout-menu-button layout-topbar-button" onClick={onMenuToggle}>
                <i className="pi pi-bars" />
            </button>

            <button ref={topbarmenubuttonRef} type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={showProfileSidebar}>
                <i className="pi pi-ellipsis-v" />
            </button>

            <div ref={topbarmenuRef} className={classNames('layout-topbar-menu', { 'layout-topbar-menu-mobile-active': layoutState.profileSidebarVisible })}>
                <Link href="https://wa.me/message/GH2FRHTQRJ6ZF1" target="_blank">
                    <button type="button" className="p-link layout-topbar-button">
                        <i className="pi pi-whatsapp"></i>
                        <span>+58 412-5607423</span>
                    </button>
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=100086978452259" target="_blank">
                    <button type="button" className="p-link layout-topbar-button">
                        <i className="pi pi-facebook"></i>
                        <span>@Colorsuiteshop</span>
                    </button>
                </Link>
                <Link href="https://instagram.com/colorsuiteshop?igshid=MzRlODBiNWFlZA==" target="_blank">
                    <button type="button" className="p-link layout-topbar-button">
                        <i className="pi pi-instagram"></i>
                        <span>@Colorsuiteshop</span>
                    </button>
                </Link>
                {/* <Link href="/documentation">
                    <button type="button" className="p-link layout-topbar-button">
                        <i className="pi pi-cog"></i>
                        <span>Settings</span>
                    </button>
                </Link> */}
            </div>
        </div>
    );
});

AppTopbar.displayName = 'AppTopbar';

export default AppTopbar;
