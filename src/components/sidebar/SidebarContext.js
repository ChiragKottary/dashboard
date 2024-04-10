import React from 'react';
import { useLocation } from 'react-router-dom';
import { SidebarProvider } from '/Users/chirag/Desktop/interships/Hirademy/react-admin/src/hooks/useSidebar.js';

function SidebarContext({ children }) {
    const { pathname } = useLocation();
    return <SidebarProvider defaultItem={pathname}>{children}</SidebarProvider>;
}
export default SidebarContext;
