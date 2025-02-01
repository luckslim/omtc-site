
import { Carousels } from '../components/carousels';
import { AboutUs } from '../components/AboutUS';
import { ContentAbout } from '../components/contentAbout';
import { Header } from '../header';
import { History } from '../components/history';
import { TestimonialSwiper } from '../components/Avaliations';
import { Contact } from '../components/contact';
import { Working } from '../components/work';
import { Footer } from '../components/footer';
export function Home() {
  return (
    <div>
      <Header/>
      <Carousels/>
      <AboutUs/>
      <ContentAbout/>
      <History/>
      <TestimonialSwiper/>
      <Working/>
      <Contact/>
      <Footer/>
    </div>
  );
}
