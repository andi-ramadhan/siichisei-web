import { useLocation, useNavigate } from "react-router-dom";
import CloseIcon from "../../components/icons/CloseIcon";
import ConsultIcon from "../../components/icons/ConsultIcon";
import MentoringIcon from "../../components/icons/MentoringIcon";
import CertificateIcon from "../../components/icons/CertificateIcon";
import NotesIcon from "../../components/icons/NotesIcon";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const PrivateClass = () => {
  const navigate = useNavigate();
  const idLocation = useLocation();
  const contentRef = useRef(null);

  const handleClose = () => {
    navigate('/services');
  };

useEffect(() => {
  if (idLocation.hash && contentRef.current) {
    const id = location.hash.replace('#', '');
    const element = document.getElementById(id);
    if (element && contentRef.current) {
      // Scroll only inside the content area, not the whole page
      contentRef.current.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  }
}, [idLocation]);

  return(
    <section 
      className="absolute bg-gray-400/20 h-[86vh] w-full flex justify-center items-center z-50 font-inter"
      onClick={handleClose}
    >
      <div 
        className="bg-[#fdfeff] w-5/6 h-19/20 rounded-lg shadow-2xl shadow-gray-600 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        {/* HEADER */}
        <div className="flex flex-row items-center shadow-lg p-5">
          <button
            className="close-button px-4 py-2 text-white rounded cursor-pointer"
            onClick={handleClose}
          >
            <CloseIcon 
              className="rounded-lg group hover:bg-word-blue transition-all duration-200 p-8"
              classChild="group-hover:bg-white transition-all duration-200"
            />
          </button>
          <h2 className="text-5xl font-light px-10 py-5 tracking-wider text-word-blue">Private Class Details</h2>
        </div>        

        <div className="overflow-y-auto h-full">          
          <div className="relative flex flex-row h-full">

            {/* SIDEBAR */}
            <aside className="sticky top-0 left-0 w-1/7 flex flex-col gap-7 text-md text-gray-800 px-5 justify-start pt-10">
              <p>2 Tahap dalam Program Private Class:</p>
              <div className="flex flex-col gap-4 text-white uppercase">
                <Link
                  to="/services/private-class#konsultasi"
                  className="rounded-lg bg-word-blue text-center py-2 hover:bg-dark-blue transition-all duration-150"
                >
                  Konsultasi
                </Link>
                <Link 
                  to="/services/private-class#mentoring" 
                  className="rounded-lg bg-word-blue text-center py-2 hover:bg-dark-blue transition-all duration-150"
                >
                  Mentoring
                </Link>
              </div>
              <p>Informasi Lainnya:</p>
              <div className="flex flex-col gap-4 text-white uppercase">
                <Link 
                  to="/services/private-class#sertifikat"
                  className="rounded-lg bg-word-blue text-center py-2 hover:bg-dark-blue transition-all duration-150"
                >
                  Sertifikat
                </Link>
                <Link 
                  to="/services/private-class#catatan"
                  className="rounded-lg bg-word-blue text-center py-2 hover:bg-dark-blue transition-all duration-150"
                >
                  Catatan
                </Link>
              </div>
            </aside>

            {/* CONTENTS */}
            <div ref={contentRef} className="flex flex-col gap-35 w-6/7 overflow-y-auto">

              {/* CONTENT 1 */}
              <div id="konsultasi" className="flex flex-col gap-2 h-full py-50 justify-center">
                <div className="px-30 relative">
                  <ConsultIcon className="absolute -top-10 -right-0 w-140 opacity-30 z-1" />
                  <h3 className="font-semibold text-5xl mb-4 text-word-blue uppercase">konsultasi</h3>
                  <div className="flex flex-col gap-3 text-lg text-gray-800">
                    <p className="font-semibold">Biaya: Rp.50.000,-</p>
                    <p><span className="font-semibold">Durasi: 30-60 menit via Call (<span className="italic tracking-wide text-word-blue">reservasi dulu untuk jadwal konsultasi via Call</span>)</span>
                    </p>
                    <p className="text-justify leading-8 pr-90 z-5">
                      Selama Call, Voice teacher akan menganalisa kendala vokalmu,
                      pemberian materi pelajaran (jika dirasa itu perlu), dan latihan 
                      praktek secara langsung. Selesai itu, diberikan Latihan berupa 
                      MP3 yang bisa kamu tunggu dalam kurun waktu 24 jam dari jam 
                      konsultasi/materi pembelajaran. Kalau tidak menggunakan jasa 
                      Mentoring, kamu akan diminta latih secara mandiri tanpa dipantau 
                      (berarti tidak diberi masukan, tidak diberi challenge tambahan, 
                      dan tidak ada memberikan kritik). Dan jika hanya memakai jasa 
                      Konsultasi/materi pembelajaran saja tanpa mentoring, tidak akan 
                      mendapatkan sertifikat.
                    </p>
                  </div>
                </div>
              </div>

              {/* CONTENT 2 */}
              <div id="mentoring" className="flex flex-col gap-2 h-full py-50 w-full justify-center bg-gray-blue">
                <div className="px-30 relative">
                  <MentoringIcon className="absolute top-0 right-10 w-130 opacity-30 z-1" />
                  <h3 className="font-semibold text-5xl mb-4 text-word-orange uppercase">mentoring</h3>
                  <div className="flex flex-col gap-3 text-lg text-word-white-orange">
                    <p className="font-semibold">Biaya: Rp.50.000,-</p>
                    <p><span className="font-semibold">Durasi: 6 hari (<span className="text-word-orange italic">setelah konsultasi</span>)</span></p>
                    <p className="text-justify leading-relaxed pr-90 z-5">
                    Seusai Konsultasi, kamu bisa pilih langkah ke 2 yaitu Mentoring, 
                    yang berarti nantinya selama 6 hari latihanmu akan dipantau progresnya 
                    oleh Voice Teacher SETIAP HARI. Akan diberi masukan, kritik, dan juga 
                    challenge tambahan. Mentoring ini via Chat atau Voice Note, bukan Call. 
                    Diusahakan kamu bisa konsisten dalam mengumpulkan tugasnya 1 hari 1 
                    pengumpulan PR. PR tidak sah jika ditimbun dan dikumpulkan dalam 1 hari. 
                    <br />Ada 3 kondisi yang bisa dimaklumi jika kamu sedang tidak bisa mengumpulkan PR yaitu:</p>
                    <ol className="flex flex-col list-decimal pl-5 pt-5 gap-2 pr-90">
                      <li>Sakit (kamu/keluarga/peliharaan/orang terdekat).</li>
                      <li>Ada yang meninggal (keluarga/orang terdekat/peliharaan), bepergian amat jauh (ini lebih ke khawatir dengan stamina vokal sudah lelah).</li>
                      <li>Lembur kerja.</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* CONTENT 3 */}
              <div id="sertifikat" className="flex flex-col gap-2 h-full py-50 justify-center">
                <div className="px-30 relative">
                <CertificateIcon className="absolute top-5 right-10 w-130 opacity-20" />
                  <div className="flex flex-col gap-3 text-lg text-gray-800 pr-100">
                    <h3 className="uppercase text-5xl font-semibold text-word-blue">sertifikat</h3>
                    <p className="text-justify leading-8">
                      Sertifikat bisa didapat jika kamu memakai 2 jasa diatas 
                      (Konsultasi & Mentoring) selama 2 
                      atau 3 bulan (2 atau 3 bulan ini tergantung skill apa yang 
                      kamu ingin kuasai).
                    </p>
                    <p>Ada beberapa sertifikat (ini berlaku untuk Private Class & Sii Chi Sei Academy):</p>
                    <ol className="list-inside list-decimal flex flex-col gap-2">
                      <li>Komponen Anatomi Vokal</li>
                      <li>Register Vokal untuk Beginner (Chest, Mix, dan Head)</li>
                      <li>Mix Voice Intermediate</li>
                      <li>Vibrato</li>
                      <li>Belting (Chest Belting, Mix Belting, dan High Belting)</li>
                      <li>Penjiwaan dalam Bernyanyi</li>
                    </ol>
                  </div>
                </div>
              </div>
              
              {/* CONTENT 4 */}
              <div id="catatan" className="flex flex-col gap-2 h-full py-50 w-full justify-center bg-gray-blue">
                <div className="px-30 relative">
                <NotesIcon className="absolute -top-30 right-0 w-130 opacity-20" />
                  <h3 className="font-semibold text-5xl mb-4 text-word-orange uppercase">catatan</h3>
                  <div className="flex flex-col gap-3 text-lg text-word-white-orange pr-70">
                    <p className="text-justify leading-8 font-bold italic">
                      Konsultasi/Mentoring bisa berjalan 
                      setelah melakukan pembayaran.
                    </p>
                    <p className="text-justify leading-relaxed pr-20">
                      Ada juga momen dimana konsultasi cukup 1 kali tapi 
                      mentoringnya harus 12 hari. Biasanya siswa yang mau 
                      menambah 6 hari lagi itu karena ingin memantapkan latihan 
                      yang diberikan atau karena diberi challenge baru oleh 
                      Voice Teacher. Jadi tiap penambahan 6 hari mentoring 
                      dikenakan biaya Rp.50.000,- lagi.
                    </p>
                  </div>
                </div>
              </div>
              
            </div>

          </div>
        </div>        
      </div>
    </section>
  );
};

export default PrivateClass;