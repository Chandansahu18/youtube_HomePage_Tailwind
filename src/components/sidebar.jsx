
export const Sidebar = () => {
  return (
    <div className="hidden min-[778px]:flex">
      <div className="w-20 h-full bg-black flex-col fixed">
      <div className="w-full h-20 flex-col pt-4 pb-3.5 hover:bg-[#272727] rounded-md">
            <div className="w-full flex justify-center">
            <img src="/images/home.png" alt="home" className="size-6 invert-100" />
            </div>
            <div className="w-full flex justify-center">
              <h1 className="text-white text-xs font-medium">Home</h1>
            </div>
        </div>
        <div className="w-full h-20 flex-col pt-4 pb-3.5 hover:bg-[#272727] rounded-md">
            <div className="w-full flex justify-center">
            <img src="/images/shorts.png" alt="home" className="size-6" />
            </div>
            <div className="w-full flex justify-center">
              <h1 className="text-white text-xs font-medium">Shorts</h1>
            </div>
        </div>
        <div className="w-full h-20 flex-col pt-4 pb-3.5 hover:bg-[#272727] rounded-md">
            <div className="w-full flex justify-center">
            <img src="/images/subscriptions.png" alt="subscriptions" className="size-6" />
            </div>
            <div className="w-full flex justify-center">
              <h1 className="text-white text-xs font-medium">Subscriptions</h1>
            </div>
        </div>
        <div className="w-full h-20 flex-col pt-4 pb-3.5 hover:bg-[#272727] rounded-md">
            <div className="w-full flex justify-center rounded-full">
            <img src="/images/avatar.png" alt="avatar" className="size-6" />
            </div>
            <div className="w-full flex justify-center">
              <h1 className="text-white text-xs font-medium">You</h1>
            </div>
        </div>
      </div>
    </div>
  )
}
