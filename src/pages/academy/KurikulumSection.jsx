import { ArrowRight } from "../../components/icons/ChevronArrow";

const KurikulumSection = () => {
  return(
    <div id="kurikulum-section" className="container w-9/10 pt-10 pb-20 px-30 flex flex-col gap-10 bg-word-orange rounded-b-lg">
      <div id="kurikulum-content" className="bg-white/50 rounded-lg uppercase">
        <table className="table-auto">
          <thead className="border-b-1 ">
            <tr className="rounded-lg text-xl">
              <th className="w-40 border-r-1 border-gray-blue/50 py-5 px-7">Pertemuan</th>
              <th className="p-5">Materi</th>
            </tr>
          </thead>
          <tbody>
              {[
                "Pengenalan Vibrato",
                "Kecepatan dalam Vibrato + Pengumpulan Tugas Secara Live",
                "Pernafasan dalam Vibrato + Pengumpulan Tugas Secara Live",
                "Vibrato Bebas + Pengumpulan Tugas Secara Live",
                "Pengumpulan Tugas Secara Live",
                "Vibrato Untuk Nuansa Lagu + Pengumpulan Tugas Secara Live",
                "Pengumpulan Tugas Secara Live",
                "Vibrato \"Tarik\" + Pengumpulan Tugas Secara Live",
                "Vibrato \"Tembak\" + Pengumpulan Tugas Secara Live",
                "Test Implementasi Teknik Ke Dalam Lagu",
                "Test Implementasi Teknik Ke Dalam Lagu",
                "Test Implementasi Teknik Ke Dalam Lagu",
              ].map((item, index) => (
                <tr key={index}>
                  <td key={index} className="border-r-1 border-gray-blue/50 border-t-1 text-center font-bold">
                    {index + 1}
                  </td>
                  <td className="px-5 py-4 border-t-1 border-gray-blue/50 text-md font-semibold">{item}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div id="kurikulum-keterangan" className="flex flex-col gap-4 font-medium bg-white/50 px-6 py-10 rounded-lg shadow-xl tracking-wide">
        <h4 className="text-2xl pb-2 px-2 uppercase tracking-wide font-semibold">Keterangan</h4>
        <div className="flex flex-row items-start gap-2 text-lg">
          <ArrowRight className="w-6 flex-shrink-0" />
          <p>E-Sertifikat dan Raport akan dikirimkan ke email masing-masing.</p>
        </div>
        <div className="flex flex-row items-start gap-2 text-lg">
          <ArrowRight className="w-6 flex-shrink-0" />
          <p> E-Sertifikat bisa didapatkan jika <span className="font-bold">ABSENSI KEHADIRAN MINIMAL 8 DARI 12 PERTEMUAN</span>.</p>
        </div>
        <div className="flex flex-row items-start gap-2 text-lg">
          <ArrowRight className="w-6 flex-shrink-0" />
          <p>E-Sertifikat bisa didapatkan dengan syarat <span className="font-bold">MINIMAL MENGUMPULKAN 3 TUGAS DI SETIAP FOLDER MATERINYA</span>.</p>
        </div>
        <div className="flex flex-row items-start gap-2 text-lg">
          <ArrowRight className="w-6 flex-shrink-0" />
          <p>Siswa akan dibuatkan Google Drive masing-masing untuk tujuan pengumpulan tugas.</p>
        </div>
        <div className="flex flex-row items-start gap-2 text-lg">
          <ArrowRight className="w-6 flex-shrink-0" />
          <p>Setiap 1 Pertemuan Pembelajaran, akan dilaksanakan selama ±120 menit, melalui Discord Channel SiiChiSei (Live Group Call).</p>
        </div>
      </div>
    </div>
  )
}

export default KurikulumSection;