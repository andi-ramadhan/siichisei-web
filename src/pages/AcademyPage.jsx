import { useState } from "react";
import KurikulumSection from "./academy/KurikulumSection";
import JadwalSection from "./academy/JadwalSection";
import ToTopBtn from "../components/ToTopBtn";

const AcademyPage = () => {
  const [activeSection, setActiveSection] = useState('kurikulum')

  return(
    <>
      <ToTopBtn />
      <main className="w-full h-full flex flex-col justify-center items-center my-5 font-inter">
        <div className="container flex flex-col items-center py-10 px-70 min-h-screen overflow-y-auto rounded-lg font-inter text-gray-600">
          
          {/* WELCOME */}
          <div id="academy-welcome" className="flex flex-col items-center h-full pb-10">
            <img 
              src="/logo-png.png"
              className="w-80"
            />
            <h2 className="text-7xl text-center tracking-[6px] uppercase">SiiChiSei</h2>
            <h2 className="text-7xl text-center tracking-wide">ACADEMY</h2>
            <p className="py-15 text-xl text-justify leading-relaxed">
              Ingin belajar bernyanyi dengan benar? <span className="font-bold text-word-blue">SiiChiSei Academy</span> akan menjadi tempat yang bagus untukmu! 
              Bahkan kalau kamu tidak memilki pengalaman bernyanyi atau berpikir bahwa kamu tidak akan pernah bisa 
              mempelajarinya. Semua orang bisa belajar bernyanyi! Saya berjanji kepadamu, bahwa jika kamu mengikuti 
              <span className="font-bold italic text-word-blue"> online course</span> ini, step-by-step, kamu akan menjadi lebih baik dalam bernyanyi, tidak peduli levelmu sekarang.
            </p>
          </div>
          
          {/* ONGOING COURSE */}
          <div id="ongoing-course" className="relative container w-9/10 mt-10 pt-10 pb-20 px-30 flex flex-col shadow-2xl shadow-word-orange/80 bg-gray-blue rounded-t-lg">
            <h4 className="text-md uppercase font-bold text-word-orange tracking-[0.2rem] self-center pt-15">On going Course</h4>
            <h2 className="text-word-orange text-6xl py-15 font-roboto-slab uppercase self-center">Vibrato</h2>
            <p className="text-word-white-orange text-lg leading-8 text-center self-center">
              Memahami juga menguasai jenis-jenis vibrato dengan stabil di dalam teknik maupun lagu. 
              Mengikuti pembelajaran dan praktik dari Voice Teacher SiiChiSei Academy 
              langsung dengan metode pembelajaran interaktif yang menyenangkan, cocok untuk kamu yang 
              ingin mencari atau memantapkan vibrato-mu.
            </p>
            <p className="text-center text-word-orange text-xl uppercase pt-15 pb-10 font-semibold tracking-wider">hanya 3 bulan pembelajaran</p>
            <p className="text-center text-word-white-orange text-lg leading-relaxed self-center">
              Selama 3 bulan, disini kamu bisa memulai dan akan menemukan inspirasi serta latihan.
              Kamu akan mendapatkan pelajaran teknik vibrato, yaitu:
            </p>
            <ul className="text-word-white-orange text-lg py-10 pl-5 gap-4 flex flex-col">
              {[
                "Vibrato \"Alami\"",
                "Vibrato Laring",
                "Variasi Penempatan Vibrato",
                "Perbedaan Kecepatan Vibrato",
                "Vibrato Setiap Register Vokal",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="flex items-center justify-center bg-white text-word-blue font-bold size-9 text-lg rounded-full shadow-md shadow-gray-600">
                    {index + 1}
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="absolute w-full bottom-0 left-1/2 transform -translate-x-1/2 text-gray-blue flex justify-center gap-3">
            <a
              href="#kurikulum"
              className={`link-container ${activeSection === 'kurikulum' ? 'bg-word-orange' : 'bg-[#a37a2d] text-gray-blue/80'} w-2/5 h-10 text-center items-center flex justify-center rounded-t-lg text-xl uppercase tracking-wider font-bold
              transition-all duration-200`}
              onClick={() => setActiveSection('kurikulum')}
            >
              Kurikulum
            </a>
            <a
              href="#jadwal"
              className={`link-container ${activeSection === 'jadwal' ? 'bg-word-orange' : 'bg-[#a37a2d] text-gray-blue/80'} w-2/5 h-10 text-center items-center flex justify-center rounded-t-lg text-xl uppercase tracking-wider font-bold
              transition-all duration-200`}
              onClick={() => setActiveSection('jadwal')}
            >
              Jadwal
            </a>
            </div>
          
          </div>
            {activeSection === 'kurikulum' ? (
              <KurikulumSection />
            ) : (
              <JadwalSection />
            )}

        </div>
      </main>
    </>
  )
}

export default AcademyPage;