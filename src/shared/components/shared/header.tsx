'use client';

import { cn } from "@/shared/lib/utils"
import { FC } from "react"
import { Container } from "./container"
import Image from "next/image"
import {Button} from '../ui';
import { User } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { CartButton } from "./cart-button";
import { useSession, signIn } from "next-auth/react";
import { ProfileButton } from "./profile-button";
import { AuthModal } from "./modals/auth-modals/auth-modal";
import React from "react";
import { useSearchParams } from "next/navigation";


interface Props {
 className?: string;
 hasSearch?: boolean;
 hasCart?: boolean;
}

export const Header: FC<Props> = ({className, hasCart, hasSearch    }) => {
    const {data: session} = useSession();
    const [openAuthModal, setOpenAuthModal] = React.useState(false);
    const searchParams = useSearchParams();

    React.useEffect(() => {
        let toastMessage = '';
    
        if (searchParams.has('verified')) {
          toastMessage = 'Почта успешно подтверждена!';
        }
    
      }, []);
    return (
        <header className={cn('border border-b' , className)}>
            <Container className="flex items-center justify-between py-8">
                <Link href='/'>
                    <div className="flex items-center gap-4">
                        <Image src="/logo.png" alt="logo" width={35} height={35} />
                        <div>
                            <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
                            <p className="text-sm text-gray-400 leading-3">best pizza ever</p>
                        </div>
                    </div>
                </Link>

                {hasSearch && (
                    <div className="mx-10 flex-1">
                        <SearchInput />
                    </div>
                )}

                <div className="flex items-center gap-3">
                <AuthModal open={openAuthModal} onClose={() => setOpenAuthModal(false)} />

                <ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />

                {/* {hasCart && <CartButton />} */}
                <CartButton />
                </div>
            </Container>
        </header>
    )
}

