import banner from '../assets/banner.jpg'
import logo from '../assets/Logo.png'
import { FiThumbsUp } from 'react-icons/fi'

const Banner = () => {
    return (
        // Custom box shadow(shadow-main) is defined in tailwind.config.js file
        <section className='relative mx-10 border border-[#EAECF0] bg-white rounded-xl p-6 shadow-main'>
                
            <img src={banner} alt="Banner gradient" className='object-contain rounded-xl' />
            <img src={logo} alt="Banner logo" className='absolute left-14 top-[12rem]' />

            <div className='pl-[18rem] pt-4 flex items-center justify-between'>
                <h1 className='text-[#101828] text-2xl font-semibold'>Starts in: 3 days : 2 hours : 24 minutes </h1>
                <div className="flex items-center mr-10 space-x-4 border border-[#D0D5DD] py-2 px-[14px] rounded-lg cursor-pointer bg-white shadow-button">
                    <FiThumbsUp className='text-[#344054]' />
                    <p className='text-[#344054] font-semibold text-base leading-[20px]'>Accept Invite</p>
                </div>
            </div>
            <div className="pl-[18rem] pt-1 pb-10 flex items-center space-x-4">
                <div className='bg-[#FFFAEB] py-1 pr-3 pl-[10px] rounded-2xl flex items-center space-x-2'>
                    <div className="bg-[#F79009] w-[6px] h-[6px] rounded-full"></div>
                    <h4 className='text-[#B54708] text-sm font-medium text-center'>Not Live</h4>
                </div>
                <h1 className='text-[#475467] text-base font-normal'>Layers Auction </h1>
            </div>
        </section>
    )
}

export default Banner