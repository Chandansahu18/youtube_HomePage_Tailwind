export const Header = () => {

    return (
    <div className="h-12 flex justify-between min-[778px]:fixed w-full min-[778px]:px-4 min-[778px]:bg-black">
      <div className="h-full w-44 items-center flex justify-start pl-2 md:w-36 md:justify-between lg:justify-around">
      <div className="hidden md:flex md:items-center flex-shrink-0">
         <img src="/images/sidebar-menu.png" alt="sidebar" className="size-5"/>
      </div>
      <img src="/images/youtube-logo.png" alt="youtube-logo" className="object-contain w-24" />
      </div>
      <div className="size-12 p-3 flex-shrink-0 md:hidden">
       <img src="/images/search-icon.png" alt="search-icon" className="size-6"/>
      </div>
      <div className="hidden md:flex md:items-center md:justify-end md:h-full md:w-[400px] lg:w-[600px]">
        <div className="rounded-full lg:w-[596px] md:w-[300px] h-10 flex justify-end">
        <input type="text" placeholder="Search" className="lg:w-[420px] md:w-[300px] placeholder-[#757575] pl-4 pr-1 outline-1 outline-[#303030] rounded-l-full text-white"/>
        <div className="w-16 h-10 flex items-center justify-center bg-[#303030] rounded-r-full">
        <img src="./images/search-icon.png" alt="search" className="size-6" />
        </div>
        </div>
        <div className="flex items-center justify-center bg-[#303030] size-10 rounded-full ml-4">
          <img src="./images/voice-search.png" alt="voice-search" className=" size-5"/>
        </div>
      </div>
      <div className="hidden md:flex md:items-center md:h-full md:w-48 lg:w-56 md:justify-end">
           <div className="h-full w-14 flex items-center justify-center">
            <img src="./images/upload.png" alt="upload" className="size-5" />
           </div>
           <div className="h-full w-14 flex items-center justify-center">
           <img src="./images/notification.png" alt="notification" className="size-6" />
           </div>
           <div className="w-16 flex items-center justify-center">
            <img src="./images/avatar.png" alt="avatar" className="size-8" />
           </div>
      </div>
    </div>
  );
};
