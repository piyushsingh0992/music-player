import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Playlist from "@/components/playlists";

export default function MusicPlayer() {
  // This is mock data and could be replaced with your actual data fetching logic

  return (
    <div>
      <div className="flex h-[85vh]">
        <Navbar />
        <Playlist />
      </div>
      <Footer />
    </div>
  );
}
