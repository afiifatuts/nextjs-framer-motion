import { Footer, Navbar } from "../components";
import {
  About,
  GetStarted,
  Hero,
  Project,
  Technologies,
  WhatsNew,
  World,
} from "../sections";

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <Technologies />
      <Project />

      <div className="gradient-03 z-0" />
    </div>

    <div className="relative">
      {/* <About /> */}
      <div className="gradient-04 z-0" />
    </div>
    <GetStarted />
    <div className="relative">
      <div className="gradient-04 z-0" />
    </div>
    <Footer />
  </div>
);

export default Page;
