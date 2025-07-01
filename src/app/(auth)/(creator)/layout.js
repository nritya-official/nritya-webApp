'use client'
import { redirect } from 'next/navigation';
import secureLocalStorage from 'react-secure-storage';

export default function CreatorLayout({ children }) {
    const mode = secureLocalStorage.getItem('CreatorMode');
    
    if (!mode) {
        redirect('/profile');
    }

    return children
}
