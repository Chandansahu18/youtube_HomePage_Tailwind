
export const Footer = () => {
  return (
    <div className="fixed z-1 bottom-0 w-full h-14 bg-[#0F0F0FB3] flex backdrop-blur-xl min-[778px]:hidden">
        <div className="h-full w-1/4 flex-col pt-3">
            <div className="w-full flex justify-center">
            <img src="/images/home.png" alt="home" className="size-6 invert-100" />
            </div>
            <div className="w-full flex justify-center">
              <h1 className="text-white text-xs font-medium">Home</h1>
            </div>
        </div>
        <div className="h-full w-1/4 flex-col pt-3">
            <div className="w-full flex justify-center">
            <img src="/images/shorts.png" alt="home" className="size-6" />
            </div>
            <div className="w-full flex justify-center">
              <h1 className="text-white text-xs font-medium">Shorts</h1>
            </div>
        </div>
        <div className="h-full w-1/4 flex-col pt-3">
            <div className="w-full flex justify-center">
            <img src="/images/subscriptions.png" alt="subscriptions" className="size-6" />
            </div>
            <div className="w-full flex justify-center">
              <h1 className="text-white text-xs font-medium">Subscriptions</h1>
            </div>
        </div>
        <div className="h-full w-1/4 flex-col pt-3">
            <div className="w-full flex justify-center rounded-full">
            <img src="/images/avatar.png" alt="avatar" className="size-6" />
            </div>
            <div className="w-full flex justify-center">
              <h1 className="text-white text-xs font-medium">You</h1>
            </div>
        </div>
    </div>
  )
}
