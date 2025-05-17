import { Outlet } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import Footer from "../components/Footer";

const ServicePage = () => {
  return(
    <>
      <main className="w-full h-full py-15 flex flex-row gap-10 justify-center items-center font-inter">
      
        {/* FIRST Container */}
        <ServiceCard 
          img='/private-class.png'
          imgAlt='SiiChiSei Private Class Image'
          title='SiiChiSei Private Class'
          content='Mengasah dan membentuk skill bernyanyi berdasarkan kebutuhan siswa.
                  Mentoring dan tantangan yang disesuaikan terhadap siswa, pendekatan 
                  khusus terkait praktik latihan yang dilakukan membuat siswa dapat cepat 
                  berkembang, ditambah materi yang terfokus sesuai pilihan siswa membuat 
                  siswa dapat menguasai teknik tersebut dengan progress yang signifikan.'
          navLinkTo='/services/private-class'
          buttonId='privateClassDetails'
        />

        {/* SECOND Container */}
        <ServiceCard 
          img='/academy-class.png'
          imgAlt='SiiChiSei Academy Image'
          title='SiiChiSei Academy'
          content='Pembelajaran berbasis Akademi yang kurikulumnya sudah diatur dan 
                  disusun secara komprehensif, memberikan kesan seperti layaknya belajar
                  di kelas. Mentoring dan tantangan yang disesuakan setiap harinya 
                  berdasarkan kemampuan siswa membuat siswa memiliki tujuan dan progress
                  latihan bernyanyi yang terukur dan tertata.'
          navLinkTo='/services/academy-class'
          buttonId='academyClassDetails'
        />

        {/* Render nested routes or child routes */}
        <Outlet />
        
      </main>
      <Footer />
    </>
  )
}

export default ServicePage;

