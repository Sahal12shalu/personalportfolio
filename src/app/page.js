import Aboutweb from "../../components/Allpages/aboutweb/Aboutweb";
import { Background } from "../../components/Allpages/background/background";
import Contactuspage from "../../components/Allpages/contactus/Contactuspage";
import Mainpage from "../../components/Allpages/education$projects/Mainpage";
import Footer from "../../components/Allpages/Footer/Footer";
import Hobbies from "../../components/Allpages/hobbies/section";
import { Introduction } from "../../components/Allpages/Introduction/Introduction";
import {  NavbarDemo } from "../../components/Allpages/Navbar/Navbar";

export default function Home() {
  return (

  <div className='bg-gray-800'>
    <NavbarDemo  />
    <Background />
    <Introduction />
    <Aboutweb />
    <Mainpage />
    <Hobbies />
    <Contactuspage />
    <Footer />
  </div>
  );
}
