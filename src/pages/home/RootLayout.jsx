import { Explore } from "../../components/explore";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Sidebar } from "../../components/sidebar";
import { VideoCard } from "../../components/videoCard";

export const RootLayout = () => {
  return (
    <div className="bg-black w-full">
      {/* Header Section */}
      <Header />
      {/* Content Section */}
      <div className="flex bg-black h-screen min-[778px]:pt-12">
        {/* Sidebar Section */}
        <Sidebar />
        {/* Video & Explore Section */}
        <div className="w-full">
          {/* Explore Section */}
          <div className="w-full min-[778px]:pl-20">
            <Explore />
          </div>
          {/* Video Section */}
          <div className="grid grid-cols-1 min-[530px]:grid-cols-2 lg:grid-cols-4 min-[778px]:pl-20 min-[778px]:pr-6">
            <VideoCard
              channelLogo={`/images/channel-logo-01.png`}
              channelLogoAlt={`channel-logo-01`}
              videoThumbnail={`/images/thumbnail-01.png`}
              videoThumbnailAlt={`/images/thumbnail-01`}
              videoTitle={`Jeet's Interrogation SHOCKS Aadil Khan & Ritwik Bhowmik 🤯 | Khakee:
          The Bengal Chapter`}
              channelName={`Netflix India`}
              videoViews={`127k views`}
              videoUploadTime={`1 day ago`}
            />
            <VideoCard
              channelLogo={`/images/channel-logo-02.png`}
              channelLogoAlt={`channel-logo-02`}
              videoThumbnail={`/images/thumbnail-02.png`}
              videoThumbnailAlt={`thumbnail-02`}
              videoTitle={`SIKANDAR Official Trailer - Salman Khan, Rashmika | Sajid Nadiadwala | A.R. Murugadoss | 30th March`}
              channelName={`NadiadwalaGrandson`}
              videoViews={`36M views`}
              videoUploadTime={`15 hours ago`}
            />
            <VideoCard
              channelLogo={`/images/channel-logo-03.png`}
              channelLogoAlt={`channel-logo-03`}
              videoThumbnail={`/images/thumbnail-03.png`}
              videoThumbnailAlt={`thumbnail-03`}
              videoTitle={`Sooraj Hi Chhaon Banke(Hindi)Salaar |Prabhas |Prithviraj |Prashanth Neel |Ravi Basrur |Hombale Films`}
              channelName={`Hombale Films`}
              videoViews={`14M views`}
              videoUploadTime={`1 year ago`}
            />
            <VideoCard
              channelLogo={`/images/channel-logo-04.png`}
              channelLogoAlt={`channel-logo-04`}
              videoThumbnail={`/images/thumbnail-04.png`}
              videoThumbnailAlt={`thumbnail-04`}
              videoTitle={`I am Getting Married in 2025? | 500k AMA`}
              channelName={`Harkirat Singh`}
              videoViews={`49k views`}
              videoUploadTime={`3 days ago`}
            />
            <VideoCard
              channelLogo={`/images/channel-logo-05.png`}
              channelLogoAlt={`channel-logo-05`}
              videoThumbnail={`/images/thumbnail-05.png`}
              videoThumbnailAlt={`thumbnail-05`}
              videoTitle={`GenAI for developers cohort launch`}
              channelName={`Chai aur Code`}
              videoViews={`29k views`}
              videoUploadTime={`2 days ago`}
            />
            <VideoCard
              channelLogo={`/images/channel-logo-06.png`}
              channelLogoAlt={`channel-logo-06`}
              videoThumbnail={`/images/thumbnail-06.png`}
              videoThumbnailAlt={`thumbnail-06`}
              videoTitle={`Taaza Khabar | Season 2 | Official Trailer | Hotstar Specials | Sept 27 | BB Ki Vines Productions`}
              channelName={`BB Ki Vines`}
              videoViews={`5.7M views`}
              videoUploadTime={`6 months ago`}
            />
            <VideoCard
              channelLogo={`/images/channel-logo-07.png`}
              channelLogoAlt={`channel-logo-07`}
              videoThumbnail={`/images/thumbnail-07.png`}
              videoThumbnailAlt={`thumbnail-07`}
              videoTitle={`First Look | Kartik Aaryan | Sreeleela | Anurag Basu | Pritam | Bhushan Kumar`}
              channelName={`T-Series`}
              videoViews={`13M views`}
              videoUploadTime={`1 month ago`}
            />
            <VideoCard
              channelLogo={`/images/channel-logo-08.png`}
              channelLogoAlt={`channel-logo-08`}
              videoThumbnail={`/images/thumbnail-08.png`}
              videoThumbnailAlt={`thumbnail-08`}
              videoTitle={`O Rangrez - Lyrical Video | Bhaag Milkha Bhaag | Farhan, Sonam | Shreya Ghoshal, Javed Bashir`}
              channelName={`Sony Music India`}
              videoViews={`33M views`}
              videoUploadTime={`5 month ago`}
            />
            <VideoCard
              channelLogo={`/images/channel-logo-09.png`}
              channelLogoAlt={`channel-logo-09`}
              videoThumbnail={`/images/thumbnail-09.png`}
              videoThumbnailAlt={`thumbnail-09`}
              videoTitle={`MEMES GOT LATENT #2`}
              channelName={`Tanmay Bhat`}
              videoViews={`4.2M views`}
              videoUploadTime={`3 weeks ago`}
            />
            <VideoCard
              channelLogo={`/images/channel-logo-10.png`}
              channelLogoAlt={`channel-logo-10`}
              videoThumbnail={`/images/thumbnail-10.png`}
              videoThumbnailAlt={`thumbnail-10`}
              videoTitle={`Jhol | Coke Studio Pakistan | Season 15 | Maanu x Annural Khalid`}
              channelName={`Coke Studio`}
              videoViews={`103M views`}
              videoUploadTime={`9 months ago`}
            />
            <VideoCard
              channelLogo={`/images/channel-logo-11.png`}
              channelLogoAlt={`channel-logo-11`}
              videoThumbnail={`/images/thumbnail-11.png`}
              videoThumbnailAlt={`thumbnail-11`}
              videoTitle={`Guri Dhairya Ki Love Story | Official Trailer ft. Shivankit Parihar, Namita Dubey #2`}
              channelName={`The Viral Fever`}
              videoViews={`662k views`}
              videoUploadTime={`2 days ago`}
            />
            <VideoCard
              channelLogo={`/images/channel-logo-12.png`}
              channelLogoAlt={`channel-logo-12`}
              videoThumbnail={`/images/thumbnail-12.png`}
              videoThumbnailAlt={`thumbnail-12`}
              videoTitle={`Materialists | Official Trailer HD | A24`}
              channelName={`A24`}
              videoViews={`10M views`}
              videoUploadTime={`6 days ago`}
            />
            <VideoCard
              channelLogo={`/images/channel-logo-13.png`}
              channelLogoAlt={`channel-logo-13`}
              videoThumbnail={`/images/thumbnail-13.png`}
              videoThumbnailAlt={`thumbnail-13`}
              videoTitle={`Ek Din Aap Yun [ Slowed + Reverb ] | 90's songs`}
              channelName={`Sanju Lofi Edits`}
              videoViews={`19M views`}
              videoUploadTime={`2 years ago`}
            />
            <VideoCard
              channelLogo={`/images/channel-logo-14.png`}
              channelLogoAlt={`channel-logo-14`}
              videoThumbnail={`/images/thumbnail-14.png`}
              videoThumbnailAlt={`thumbnail-14`}
              videoTitle={`Animal for a Reason | Dhoni x EMotorad x Vanga 🚨`}
              channelName={`EMotorad`}
              videoViews={`1M views`}
              videoUploadTime={`6 days ago`}
            />
            <VideoCard
              channelLogo={`/images/channel-logo-15.png`}
              channelLogoAlt={`channel-logo-15`}
              videoThumbnail={`/images/thumbnail-15.png`}
              videoThumbnailAlt={`thumbnail-15`}
              videoTitle={`Saibo - Shor In The City | Radhika Apte, Tusshar Kapoor | @ShreyaGhoshalOfficial | Tochi Raina | 4K`}
              channelName={`Love The Song`}
              videoViews={`911k views`}
              videoUploadTime={`3 months ago`}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
