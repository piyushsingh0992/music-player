import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Playlist from "@/components/playlists";

export default function MusicPlayer() {
  

  return (
    <div>
      <div className="flex h-[85vh]  fade-effect">
        <Navbar />
        <Playlist />
      </div>
     
      <Footer />
    </div>
  );
}
