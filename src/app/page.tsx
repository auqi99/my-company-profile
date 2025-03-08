import Jumbotron from "@/components/Jumbotron";
import Overview from "@/components/Overview";
import Service from "@/components/Service";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <nav>
      <Jumbotron />
      <Overview />
      <Service />
      <Testimonial />
    </nav>
  );
}
