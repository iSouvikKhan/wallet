"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import crypto from "../assets/crypto.png"
import Image from "next/image"

export const Appbar = () => {

    const session = useSession();

    return (
        <>
            <div className="bg-[#061121] h-20 flex items-center justify-center">
                <div className="flex w-11/12 sm:w-3/5 justify-between items-center">
                    <div className="flex items-center space-x-2">
                        {/* <Image src="/crypto.png" height={200} width={200} alt="my image" /> */}
                        <Image src={crypto} height={30} width={30} alt="my image" />
                        <p className="text-xl">wallet.com</p>
                    </div>

                    {session.data?.user && <button className="text-xs sm:text-base border border-[#1199F990] h-8 sm:h-10 w-16 sm:w-28 rounded-full" onClick={() => signOut()}>Sign out</button>}

                    {!session.data?.user && <button className="text-xs sm:text-base border border-[#1199F990] h-8 sm:h-10 w-16 sm:w-28 rounded-full" onClick={() => signIn()}>Sign in</button>}

                    
                </div>
            </div>
        </>
    )
}