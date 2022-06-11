export default function Users(){
    return (
        <>
            {/* heading */}
			<div className="text-lg font-bold pb-2 w-full  text-start secondaryFont flex justify-around items-center">
			    <h3>Users</h3>
			    <input
			        type="text"
			        name="search"
			        placeholder="search user"
			        className="px-4 py-2 primaryBColor rounded-lg"
			    />
			</div>
			{/* heading cnt-1 users info */}
            <div className="flex flex-col justify-center items-center w-full">
                <div className="flex justify-center items-cente w-full h-full p-2 text-center primaryBColor rounded-xl mb-2">
                    <div className='w-1/3'>UserName</div>
                    <div className='w-1/3'>elonmusk@gmail.com</div>
                </div>
                <div className="flex justify-center items-cente w-full p-2 text-center primaryBColor rounded-xl mb-2">
                    <div className='w-1/3'>UserName</div>
                    <div className='w-1/3'>elonmusk@gmail.com</div>
                </div>
                <div className="flex justify-center items-cente w-full p-2 text-center primaryBColor rounded-xl mb-2">
                    <div className='w-1/3'>UserName</div>
                    <div className='w-1/3'>elonmusk@gmail.com</div>
                </div>
                <div className="flex justify-center items-cente w-full p-2 text-center primaryBColor rounded-xl mb-2">
                    <div className='w-1/3'>UserName</div>
                    <div className='w-1/3'>elonmusk@gmail.com</div>
                </div>
                <div className="flex justify-center items-cente w-full p-2 text-center primaryBColor rounded-xl mb-2">
                    <div className='w-1/3'>UserName</div>
                    <div className='w-1/3'>elonmusk@gmail.com</div>
                </div>
            </div>
        </>
        )
}
