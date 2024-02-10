import Topbar from "@/app/ui/ui-topbar";
import Header from "@/app/ui/ui-header";
import Stats from "@/app/ui/ui-stats";
import Abouts from "@/app/ui/ui-abouts";
import Blog from "@/app/ui/ui-blog";
import Promotion from "@/app/ui/ui-promotion";

export default function Home() {
  return (
    <div>
      <Topbar />
      <Header />
      <Stats />
      <Abouts />
      <Blog />
      <Promotion />
    </div>
  );
}
