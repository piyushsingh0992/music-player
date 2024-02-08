import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Playlist from "@/components/playlists";

export default function MusicPlayer() {
  

  return (
    <div className="bg-red-600">
      <div className="flex  bg-blue-100  h-[85vh]  fade-effect">
        <Navbar />
        <Playlist />
      </div>
     
      <Footer />
    </div>
  );
}
