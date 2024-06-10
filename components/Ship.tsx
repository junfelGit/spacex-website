import type { Ship } from '@/util/types/graphql';
import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

type ShipType = {
    name?: Ship['name'],
    image?: Ship['image'],
    id: Ship['id'],
}

const Ship = (props: ShipType) : JSX.Element => {
    const {name, image, id} = props;
    return (

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div>
                <Image
                    src={image || 'https://placehold.co/400?text=SPACEX'}
                    width={500}
                    height={250}
                    alt={`Picture of ${name}`}
                    className="rounded-t-lg card-img"
                    loading="lazy"
                />
            </div>
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                
                <Link href={`/ship/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default Ship;