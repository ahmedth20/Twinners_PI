import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Navbar1 from '../Shared/Navbar/Navbar1';

import Footer from '../Shared/Footer/Footer';
import Cursor from '../Shared/Cursor/Cursor';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HelmetChanger from '../Shared/Helmet/Helmet';
import { useEffect } from 'react';
import BackToTop from '../Shared/BackToTop/BackToTop';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSelector } from 'react-redux';
import Home1 from '../Pages/Home1/Home1';
import Navbar2 from '../Shared/Navbar/Navbar2';

const Main = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const user = useSelector(state => state.auth.user);
    const lenis = new Lenis();

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

  return (
    <>
      <HelmetChanger title={'Main Page'} />
      {user!=null && <Navbar1 />} {user==null && <Navbar2/> }
      <Cursor />
      <BackToTop />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Main;
