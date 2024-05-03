"use client"


import { usePathname } from 'next/navigation'
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton } from 'react-share'

export default function SocialShareModal({onClose}) {
  const pathName = usePathname()
  const shareUrl = `https://recipe-making.vercel.app${pathName}`
  return (
    <>
      {/* MODAL ITEM */}
      <div className="bg-gray-100 w-full mx-4 p-4 rounded-xl md:w-1/2 lg:w-3/3 absolute">
        {/* MODAL HEADER */}
        <div className="flex justify-between items-center border-b border-gray-200 py-3">
          <div className="flex items-center justify-center">
            <p className="text-xl font-bold text-gray-800">Share Modal</p>
          </div>
          <button onClick={onClose} className="bg-gray-300 hover:bg-gray-500 cursor-pointer hover:text-gray-300 font-sans text-gray-500 w-8 h-8 flex items-center justify-center rounded-full">x</button>
        </div>
        {/* MODAL BODY */}
        <div className="my-4">
          <p className="text-sm">Share this link via</p>
          <div className="flex justify-around my-4">
            {/* FACEBOOK ICON */}
            <div >
              <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={28} round={50} />
              </FacebookShareButton>
            </div>

            <div >
              <TwitterShareButton url={shareUrl}>
                <TwitterIcon size={28} round={50} />
              </TwitterShareButton>
            </div>

            <div >
              <LinkedinShareButton url={shareUrl}>
                <LinkedinIcon size={28} round={50} />
              </LinkedinShareButton>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}
