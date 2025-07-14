import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function VideoModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="border border-white px-6 py-3 font-semibold">
          Tanıtım Videomuz
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-3xl w-full aspect-video p-0 bg-black">
        <DialogTitle className="sr-only">Tanıtım Videosu</DialogTitle>
        <div className="w-full aspect-video">
          <LiteYouTubeEmbed
            id="ttDbSrXnCH4"
            title="Tanıtım Videomuz"
            noCookie={true}
            poster="maxresdefault"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
