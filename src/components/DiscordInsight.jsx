import { ArrowRight } from "./icons/ChevronArrow";

const arrowRight = <ArrowRight className="w-7" />

const DiscordInsight = () => {
  return (
    <section id='DiscordInsight' className="font-inter">
      <div className="container shadow-2xl m-auto flex flex-col items-center my-5 py-15 rounded-lg bg-radial-[at_100%_-50%] from-bg-base-orange to-blue-50 to-50%">
        <div className="flex flex-row">
          <h2 className="m-5 px-2 text-6xl font-medium text-word-blue text-shadow-xs text-shadow-white">Live Teaching at Discord</h2>
        </div>
        <div className="shadow-md shadow-gray-400 py-5 rounded-lg">
          <img
            src="/discord-ss.png"
            className="w-150 p-5"
          />
        </div>
        <dl className="p-12 text-gray-700 break-normal">
          {/* point 1 */}
          <div className="flex flex-row text-2xl items-center">
            {arrowRight}
            <dt className="px-3 font-medium">Interaksi Langsung 2 Arah berbasis Group Call</dt>
          </div>
          <p className="px-10 py-2 text-lg text-wrap w-5xl">
            Kelas interaktif dan bisa komunikasi langsung dengan Voice Teacher melalui Voice Group Call Discord (tidak memakai Video Call).
          </p>
          
          {/* point 2 */}
          <div className="flex flex-row text-2xl items-center">
            {arrowRight}
            <dt className="px-3 font-medium">Kemudahan Akses Belajar</dt>
          </div>
          <p className="px-10 py-2 text-lg text-wrap w-5xl">
            Kalian bisa belajar dari mana saja dan bebas menggunakan device apa saja (Laptop/Desktop/Smartphone).
          </p>

          {/* point 3 */}
          <div className="flex flex-row text-2xl items-center">
            {arrowRight}
            <dt className="px-3 font-medium">Sistem Audio/Bit Rate Yang Ramah Pengguna</dt>
          </div>
          <p className="px-10 py-2 text-lg text-wrap w-5xl">
          Discord menyajikan pengaturan dimana bisa memudahkan sistem audio pengguna agar lebih sensitif dimana itu sangat mendukung untuk pembelajaran vokal berbasis online.
          </p>
        </dl>
      </div>
    </section>
  )
}

export default DiscordInsight;