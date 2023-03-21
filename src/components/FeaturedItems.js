import { useGetFeaturedItemsQuery } from '../features/api/apiSlice'
import SingleItem from './SingleItem';

const FeaturedItems = () => {
    const { data, error, isLoading } = useGetFeaturedItemsQuery();

    if (isLoading) {
        <span className="visually-hidden">Loading...</span>
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    console.log(data)

    return (
        <div className='mx-10 border border-[#EAECF0] bg-white rounded-xl p-6 shadow-main my-8'>
            <div className="flex items-center justify-between border-b border-[#EAECF0] pb-6">
                <h1 className='text-[#101828] text-lg font-semibold'>Featured Items</h1>
                <h1 className='border border-[#D0D5DD] py-2 px-[14px] rounded-lg cursor-pointer bg-white shadow-button font-semibold text-sm text-[#344054]'>View Auction</h1>
            </div>
            <div className="py-5 grid grid-cols-4 gap-2">
                {data.map((item) => (
                    <SingleItem key={item?.name} title={item?.title} bid={item?.bid} image={item?.image}/>
                ))}
            </div>
        </div>
    )
}

export default FeaturedItems