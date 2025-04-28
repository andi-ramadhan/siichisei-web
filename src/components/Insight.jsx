const Insight = () => {
  return (
    <main id="insight" className="bg-white py-20 font-inter">
      <div className="container mx-auto px-8">
        <div className="flex flex-col space-y-10">
          <h2 className="text-5xl text-word-blue font-light">
            Learn Singing Everywhere, Anywhere
          </h2>

          <article className="grid grid-cols-4 gap-8">
            <div className="col-span-3 bg-white rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed py-2">
              SiiChiSei merupakan kursus vokal berbasis online yang didirikan oleh Voice Teacher <span className="text-[#3990d8] font-medium">Hasnaul Ikhtarosa</span> pada tahun 2021.
              Tujuan dari didirikannya SiiChiSei ini, diharapkan dapat memberikan ilmu dan juga melatih vokal untuk siapapun yang ingin mempelajari bagaimana caranya bernyanyi dengan harga yang terjangkau,
              dimanapun dan kapanpun.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed py-2">
              Hasnaul Ikhtarosa atau biasa disapa "Rosa" adalah seorang <span className="font-semibold">Voice Teacher</span> sekaligus <span className="font-semibold">Webtoonist</span> asal Kalimantan Timur.
              Bernyanyi sudah menjadi hobinya sejak kecil. Mulai aktif melatih vokal sejak tahun 2015 di UKM Kampus hingga bergabung menjadi Vocal Mentor di Cleffenhagen Academy (2018-2023) dan SiiChiSei (2021-sekarang).
              </p>
              <p className="text-lg text-gray-700 leading-relaxed py-2">
              Hingga saat ini SiiChiSei memiliki dua program yaitu <span className="text-[#3990d8] font-medium">SiiChiSei Academy</span>, dan juga <span className="text-[#3990d8] font-medium">SiiChiSei Private Class</span>.
              Kedua kelas tersebut dilaksanakan via aplikasi <span className="font-semibold">Discord</span>, didukung oleh pengaturan <span className="italic">bitrate</span> dari aplikasi tersebut yang membantu proses pembelajaran vokal lebih baik lagi.
              </p>
              <blockquote className="p-5 text-xl italic font-medium text-gray-600 text-left bg-gray-200 border-l-5 rounded-br-4xl">
                <svg class="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                </svg>
                <p>Practice makes right, repetitions make perfect.</p>
              </blockquote>
            </div>
            <div className="col-span-1 rounded-lg overflow-hidden">
              <figure className="flex flex-col items-center">
                <img
                  src="/voice-teacher.jpeg"
                  alt="Voice Teacher"
                  className="w-80 object-cover rounded-lg"
                />
                <figcaption className="text-sm text-center text-gray-700 italic mt-2"><span className="font-semibold">SiiChiSei Founder</span> Hasnaul Ikhtarosa</figcaption>
              </figure>
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}

export default Insight;