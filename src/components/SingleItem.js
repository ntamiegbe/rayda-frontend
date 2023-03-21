import React from 'react'

const SingleItem = ({ title, bid, image }) => {
    return (
        <div className='bg-white p-3 border border-[#D0D5DD] rounded-xl'>
            <div className="bg-[#F2F4F7] rounded-xl">
                <img src={image} alt="Product" className='object-contain' />
            </div>
            <div className="flex items-center py-5 space-x-3">
                <div className="bg-[#F2F4F7] rounded-full p-3">
                    <p className='text-[#475467] text-center text-sm font-medium'>KO</p>
                </div>
                <p className='text-[#344054] text-xs'><span className='text-[#101828] font-semibold'>Koray Okumus</span> (Highest Bidder)</p>
            </div>
            <p className='text-[#101828] font-semibold text-sm w-[269.5px] truncate pb-5'>{title}</p>
            <p className='text-[#344054] text-sm border-b border-[#EAECF0] pb-5'>Current Bid: <span className='font-bold'>{bid}</span></p>
            <button className='text-white bg-[#004CCC] w-full mt-3 font-semibold text-sm py-[10px] px-4 rounded-lg shadow-button'>Add to wishlist</button>
        </div>
    )
}

export default SingleItem