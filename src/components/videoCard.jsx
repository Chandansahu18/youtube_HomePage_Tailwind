export const VideoCard = ({channelLogo,channelLogoAlt,videoThumbnail,videoThumbnailAlt,videoTitle,channelName,videoViews,videoUploadTime}) => {
  return (
    <div className="w-full pb-5 min-[530px]:p-2.5">
      <div className="mb-2.5 w-full">
        <img src={videoThumbnail} alt={videoThumbnailAlt} className=" min-[530px]:rounded-xl object-contain"/>
      </div>
      <div className="flex items-start justify-between px-2 min-[530px]:px-0">
        <img
          src={channelLogo}
          alt={channelLogoAlt}
          className="rounded-full size-10 lg:size-8"
        />
        <div className="ml-3">
        <h1 className="text-white font-medium text-sm line-clamp-2">
         {videoTitle}
        </h1>
        <div className="flex items-center flex-wrap space-x-1">
          <span className="text-[#808080] font-semibold text-xs break-all">{channelName}</span>
          <span className="text-[#808080] flex-shrink-0">•</span>
          <span className="text-xs text-[#808080] font-semibold break-all">{videoViews}</span>
          <span className="text-[#808080] flex-shrink-0">•</span>
          <span className="text-xs text-[#808080] font-semibold break-all">{videoUploadTime}</span>
        </div>
      </div>
      <div className="w-10 flex justify-end ">
        <img src="/images/video-options.png" alt="video-options" className="size-4 object-contain" />
      </div>
      </div>
    </div>
  );
};
