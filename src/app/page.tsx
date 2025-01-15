
 
import { Reviews } from "@/componets/review/Reviews";
import Header from "../componets/header/Header";
import Hero from "../componets/hero/Hero";
import Testimonials from "../componets/Testimonials/Testimonials";
 export default function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      <Testimonials/>   
      <div className='pt-16'>
          <Reviews />
      </div>    
    </main>
     
  );
}
