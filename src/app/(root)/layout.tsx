
import HeaderComponent from '@/components/NavBar';
import React, { FC } from 'react';

interface Props {
    children: React.ReactNode;
}
const AppLayout: FC<Props> = ({ children }) => {
    return (
        <div className='w-full'>
            <HeaderComponent />
            <div className='px-20 py-10'>
                {children}
            </div>
        </div>
    );
};

export default AppLayout;