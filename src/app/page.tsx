import Topbar from "@/app/ui/ui-topbar";
import Header from "@/app/ui/ui-header";
import Stats from "@/app/ui/ui-stats";
import Abouts from "@/app/ui/ui-abouts";
import Blog from "@/app/ui/ui-blog";
import Promotion from "@/app/ui/ui-promotion";
import Videos from "@/app/ui/ui-videos";
import Cta from "@/app/ui/ui-cta";

export default function Home() {
  return (
    <div>
      <Topbar />
      <Header />
      <Stats />
      <Abouts />
      <Blog />
      <Promotion />
      <Videos />
      <Cta />
    </div>
  );
}
