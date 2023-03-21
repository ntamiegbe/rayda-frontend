import { useGetFeaturedItemsQuery } from '../features/api/apiSlice'
import SingleItem from './SingleItem';

const FeaturedItems = () => {
    const { data: FeaturedItems, error, isLoading } = useGetFeaturedItemsQuery();

    if (isLoading) {
        return <div className='text-[#101828] text-center text-3xl font-semibold mt-10'>Loading...</div>;
    }

    if (error) {
        return <div className='text-center text-red-400 text-2xl py-5'>Error: {error.message}</div>;
    }

    console.log(FeaturedItems.data)

    return (
        <div className='mx-10 border border-[#EAECF0] bg-white rounded-xl p-6 shadow-main my-8'>
            <div className="flex items-center justify-between border-b border-[#EAECF0] pb-6">
                <h1 className='text-[#101828] text-lg font-semibold'>Featured Items</h1>
                <h1 className='border border-[#D0D5DD] py-2 px-[14px] rounded-lg cursor-pointer bg-white shadow-button font-semibold text-sm text-[#344054]'>View Auction</h1>
            </div>
            <div className="py-5 grid grid-cols-4 gap-2">
                {/* Checking if FeaturedItems is an array before mapping */}
                {FeaturedItems && Array.isArray(FeaturedItems.data) ? (
                    FeaturedItems.data.map(({ index, title, bid, image }) => (
                        <SingleItem key={index} title={title} bid={bid} image={image} />
                    ))
                ) : (
                    <div>No data to display</div>
                )}
            </div>
        </div>
    )
}

export default FeaturedItems
