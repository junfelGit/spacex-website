import Link from 'next/link';
import React from 'react'

type ShipLayoutType = {
    children: JSX.Element;
}

const ShipLayout = (props: ShipLayoutType) => {
    return (
        <div className='flex justify-center min-h-screen p-14'>
            <div>
                <div className="mb-4">
                    <Link href="/" className="flex">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"></path>
                        </svg> Back
                    </Link>
                </div>
                {props.children}
            </div>
        </div>
    )
}

export default ShipLayout;