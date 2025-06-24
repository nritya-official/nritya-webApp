'use client'
import { usePathname } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import { useEffect } from 'react';
import "../../Screens/CreatorPlans.css"

export default function AuthLayout({ children }) {
    const pathname = usePathname();
    const { currentUser, setShowSignInModal } = useAuth();

    useEffect(() => {
        if (!currentUser) {
            setShowSignInModal(true);
        }
    }, [currentUser, setShowSignInModal, pathname]);

    if (!currentUser) {
        return null
    }

    return children
}
