"use client"
export const dynamic = 'auto'
import { toggleFavRecipe } from '@/app/actions'
import { useAuth } from '@/app/hooks/useAuth'
import { usePathname, useRouter } from 'next/navigation'
import React, { useTransition, useState } from 'react'
import SocialShareModal from '../SocialShareModal'

export default function RecipeActions({ recipeId }) {
    const { auth } = useAuth()
    const router = useRouter()
    const [pending, startTransition] = useTransition()
    const userFav = auth?.favourites.find(id => id === recipeId)
    const [isFavourite, setIsFavourite] = useState(userFav)
    const [isOpen ,setIsOpen] = useState(false)

 
    const toggleFav = async () => {
        if (auth) {
            await toggleFavRecipe(recipeId, auth?.id)
            setIsFavourite(!isFavourite)

        } else {
            router.push('/login')
        }

    }

    console.log(isFavourite)

    const handleClose  = () => {
        setIsOpen(false)
    }

    return (
        <div>
            <div className="flex gap-4 justify-end">

                <div className={`flex gap-2 text-gray-600 cursor-pointer hover:text-[#eb4a36] ${isFavourite && 'text-[#eb4a36]'}`}>
                    <svg
                        onClick={() => {
                            startTransition(() => {
                                toggleFav()
                            })
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill={isFavourite ? '#eb4a36' : 'none'}
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                    </svg>
                    <span>Favourite</span>
                </div>


                <div className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#0E79F6]">
                    <svg
                        onClick={() => setIsOpen(true)}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M8.7 10.7l6.6 -3.4" />
                        <path d="M8.7 13.3l6.6 3.4" />
                    </svg>
                    <span>Share</span>
                </div>



            </div>
            <div className='flex justify-end mt-5 relative'>
               {isOpen &&  <SocialShareModal onClose={handleClose} /> }
            </div>
        </div>
    )
}
