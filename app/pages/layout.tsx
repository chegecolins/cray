import React from 'react';

import Footer from '../constants/Footer';
import  Header  from '../constants/Header';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
          
        <div>
            <Header />
            <main>

                { children }
            </main>
            <Footer />
            </div>
          
    );
}

export default Layout;