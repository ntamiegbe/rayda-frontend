import { FiBell } from 'react-icons/fi'

const Navbar = () => {
    return (
        <nav className='mx-10 pt-[32px] pb-[48px]'>
            <div className="flex items-center justify-between">
                <h1 className='text-[#101828] text-3xl leading-[38px] font-semibold'>Welcome</h1>
                <div className="relative">
                    <FiBell className='w-7 h-7 text-[#667085' />
                    <div className="bg-[#F04438] text-center text-xs font-medium text-white py-[2px] px-2 z-10 rounded-full absolute -bottom-2 -right-3">3</div>
                </div>
            </div>
            <div className="border-b">
                <h4 className='text-[#475467] text-base pb-9'>Your current sales auction and activity.</h4>
            </div>
        </nav>
    )
}

export default Navbar