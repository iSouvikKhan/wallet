"use client"

import { signIn, useSession } from "next-auth/react"


export const MainContent = () => {
    const session = useSession();
    return (
        <>
            {
                !session.data?.user &&
                <div className="flex-grow flex flex-col items-center">
                    <div className="flex flex-col items-center text-2xl sm:text-5xl lg:text-7xl space-y-4 font-light mt-32 sm:mt-56">
                        <p>The World's Premier</p>
                        <p>Crypto Wallet</p>
                    </div>
                    <button className="text-sm sm:text-xl text-[#010118] bg-white mt-8 sm:mt-16 h-8 sm:h-12 w-24 sm:w-40 rounded-lg" onClick={() => signIn()}>Get started</button>
                </div>
            }
            {
                session.data?.user &&
                <div className="flex flex-col items-center text-xl sm:text-3xl lg:text-5xl mt-10">
                    <p>Generate wallets</p>
                    <div className="flex flex-row space-x-4 mt-5 text-xl">
                        <button className="border border-white p-3 rounded-lg">Ethereum</button>
                        <button className="border border-white p-3 rounded-lg">Solana</button>
                    </div>
                </div>
            }
        </>
    )
}