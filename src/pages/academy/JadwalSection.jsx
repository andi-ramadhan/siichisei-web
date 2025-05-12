import { ArrowLeft, ArrowRight } from "../../components/icons/ChevronArrow";
import useCaruosel from "../../hooks/useCarousel";

const JadwalSection = () => {
  useCaruosel('[data-carousel-wrapper]', '[data-carousel-prev]', '[data-carousel-next]');
  return (
    <div id="jadwal-section" className="container w-9/10 pt-10 pb-20 px-30  flex flex-col bg-word-orange rounded-b-lg">
      <h3 className="pt-15 text-left uppercase text-3xl font-semibold tracking-wider leading-9">
        Jadwal Program: Batch 3
      </h3>

      <div id="indicators-carousel" className="relative w-full overflow-hidden h-full" data-carousel="static">
          {/* <!-- Carousel wrapper --> */}
          <div className="flex transition-transform duration-700 ease-in-out" data-carousel-wrapper>
              {/* <!-- Item 1 --> */}
              <div className="w-full flex-shrink-0">
                <img 
                  src="/calendar/april-2025.png" 
                  className="block w-full" 
                  alt="April Calendar" 
                />
              </div>
              {/* <!-- Item 2 --> */}
              <div className="w-full flex-shrink-0">
                <img 
                  src="/calendar/may-2025.png" 
                  className="block w-full" 
                  alt="May Calendar" 
                />
              </div>
              {/* <!-- Item 3 --> */}
              <div className="w-full flex-shrink-0">
                <img 
                  src="/calendar/june-2025.png" 
                  className="block w-full" 
                  alt="June Calendar" 
                />
              </div>
              {/* <!-- Item 4 --> */}
              <div className="w-full flex-shrink-0">
                <img 
                  src="/calendar/july-2025.png" 
                  className="block w-full" 
                  alt="July Calendar" 
                />
              </div>
          </div>

          {/* <!-- Slider controls --> */}
          <button 
            type="button" 
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" 
            data-carousel-prev
          >
            <span className="rounded-full bg-white/30 p-2 shadow-lg shadow-gray-700/50 hover:scale-120 backdrop-blur-[3px] hover:bg-white/70 transition-all duration-200">
              <ArrowLeft className="size-8"/>
            </span>
          </button>
          <button 
            type="button" 
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" 
            data-carousel-next
          >
            <span className="rounded-full bg-white/30 p-2 shadow-lg shadow-gray-700/50 hover:scale-120 backdrop-blur-[3px] hover:bg-white/70 transition-all duration-200">
              <ArrowRight className="size-8"/>
            </span>
          </button>
      </div>

      {/* keterangan */}
      <div className="flex flex-col gap-4 font-medium bg-white/50 px-6 py-10 rounded-lg shadow-xl tracking-wide text-pretty">
        <h4 className="text-2xl pb-2 px-2 uppercase tracking-wide font-semibold">Keterangan Program Pembelajaran</h4>
        
        <div className="flex flex-row items-start gap-2 text-lg">
          <ArrowRight className="w-6 flex-shrink-0" />
          <p>Setiap hari Jum'at pukul 19.30 - 21.30 WIB.</p>
        </div>
        <div className="flex flex-row items-start gap-2 text-lg">
          <ArrowRight className="w-6 flex-shrink-0" />
          <p>Jadwal sudah ditandai sesuai kalender diatas (yang sudah diberi warna).</p>
        </div>
        <div className="flex flex-row items-start gap-2 text-lg">
          <ArrowRight className="w-6 flex-shrink-0" />
          <p><span className="font-bold">Google Drive</span> akan disediakan oleh staff SiiChiSei untuk menunjang pembelajaran siswa.</p>
        </div>
        <div className="flex flex-row items-start gap-2 text-lg">
          <ArrowRight className="w-6 flex-shrink-0" />
          <p>Siapkan aplikasi perekam seperti BandLab, Audacity, Adobe Audition, Samplitude, atau lainnya yang bisa kamu pakai.</p>
        </div>
        <div className="flex flex-row items-start gap-2 text-lg">
          <ArrowRight className="w-6 flex-shrink-0" />
          <p>Prosesi Mentoring akan dilaksanakan selama 6 hari di setiap minggu, nantinya akan dipantau dan diberi masukan atau challenge langsung dari Voice Teacher SiiChiSei (1x pengumpulan tugas/hari).</p>
        </div>
        <div className="flex flex-row items-start gap-2 text-lg">
          <ArrowRight className="w-6 flex-shrink-0" />
          <p>Jadwal bisa saja berubah jika ada hal yang tidak terduga berkaitan dengan program pembelajaran, akan diinfokan sebelum hari pembelajaran.</p>
        </div>
      </div>

    </div>
  )
}

export default JadwalSection;