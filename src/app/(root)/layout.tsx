
import FooterComp from '@/components/layout/footer';
import HeaderComponent from '@/components/NavBar';
import React, { FC } from 'react';

interface Props {
    children: React.ReactNode;
}
const AppLayout: FC<Props> = ({ children }) => {
    return (
        <div className='w-full'>
            <HeaderComponent />
            <div className='px-20 max-md:px-5 max-md:py-0 py-10 max-md:pt-30'>
                {children}
            </div>
            <FooterComp />
        </div>
    );
};

export default AppLayout;