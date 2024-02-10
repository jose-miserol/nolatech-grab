import Topbar from "@/app/ui/ui-topbar";
import Header from "@/app/ui/ui-header";
import Stats from "@/app/ui/ui-stats";
import Abouts from "@/app/ui/ui-abouts";
import Blog from "@/app/ui/ui-blog";
import Promotion from "@/app/ui/ui-promotion";
import Videos from "@/app/ui/ui-videos";
import Cta from "@/app/ui/ui-cta";
import Contact from "@/app/ui/ui-contact";
import News from "@/app/ui/ui-news";
import Footer from "@/app/ui/ui-footer";

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
      <Contact />
      <News />
      <Footer />
    </div>
  );
}
