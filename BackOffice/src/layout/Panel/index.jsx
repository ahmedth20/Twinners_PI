// styled components
import { Actions, Header, Input, Label, Search } from './style';
import 'react-toastify/dist/ReactToastify.css';

// components
import Logo from 'UI/Logo';
import MenuButton from 'UI/MenuButton';
import ShapeButton from 'UI/ShapeButton';
import { motion } from 'framer-motion';
import CurrentUser from 'layout/Panel/CurrentUser';

// hooks
import useWindowSize from 'hooks/useWindowSize';
import usePanelScroll from 'hooks/usePanelScroll';
import { useSidebarContext } from 'contexts/sidebarContext';
import { useRef, useEffect, useState } from 'react';

const Panel = () => {
    const { width } = useWindowSize();
    const isMobile = width < 768;
    const isDesktop = width >= 1366;
    const classname = usePanelScroll();
    const { isSidebarOpen } = useSidebarContext();
    const headerRef = useRef(null);

    const [showNotificationBox, setShowNotificationBox] = useState(false);
    const notificationRef = useRef(null);

    useEffect(() => {
        document.documentElement.style.setProperty('--header-height', `${headerRef.current.offsetHeight}px`);
    }, [width]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                setShowNotificationBox(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <Header
                as={motion.header}
                animate={{ y: isSidebarOpen && isMobile ? '-100%' : 0 }}
                transition={{ duration: .3, ease: 'linear', type: 'tween' }}
                className={classname}
                ref={headerRef}
                style={{ position: 'relative' }}
            >
                {!isDesktop && (
                    <div className="logo-wrapper">
                        <Logo compact={isMobile} />
                    </div>
                )}

                <Search>
                    <Input
                        type="search"
                        id="globalSearch"
                        placeholder={width < 414 ? 'Search' : 'Search patients or doctors'}
                    />
                    <Label htmlFor="globalSearch">
                        <i className="icon icon-search"></i>
                    </Label>
                </Search>

                {isMobile ? (
                    <MenuButton />
                ) : (
                    <Actions style={{ position: 'relative' }}>
                        <ShapeButton
                            shape="square"
                            label="Notification"
                            icon="bell"
                            onClick={() => {
                                setShowNotificationBox(!showNotificationBox);
                            }}
                        />
                        {isDesktop ? <CurrentUser /> : <ShapeButton shape="square" label="Profile" icon="user" />}
                        {width < 1366 && <MenuButton />}

                        {showNotificationBox && (
                            <div
                                ref={notificationRef}
                                style={{
                                    position: 'absolute',
                                    top: '50px',
                                    right: '60px',
                                    background: 'white',
                                    border: '1px solid #ccc',
                                    borderRadius: '8px',
                                    padding: '10px 15px',
                                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                                    zIndex: 9999,
                                    minWidth: '250px'
                                }}
                            >
                                <p style={{ margin: 0, fontWeight: 'bold' }}>🔔 Notification</p>
                                <p style={{ marginTop: '5px' }}>Aucune notification.</p>
                            </div>
                        )}
                    </Actions>
                )}
            </Header>
        </>
    );
};

export default Panel;
