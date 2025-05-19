import ConsultIcon from "../components/icons/ConsultIcon";
import MentoringIcon from "../components/icons/MentoringIcon";
import CertificateIcon from "../components/icons/CertificateIcon";
import NotesIcon from "../components/icons/NotesIcon";
import ClassIcon from "../components/icons/ClassIcon";

export const privateClassContent = [
  {
    id: "konsultasi",
    icon: <ConsultIcon className="absolute -top-10 -right-0 w-140 opacity-30 z-1" />,
    title: "konsultasi",
    titleClass: "font-semibold text-5xl mb-4 text-word-blue uppercase",
    content: (
      <div className="flex flex-col gap-3 text-lg text-gray-800">
        <p className="font-semibold">Biaya: Rp.50.000,-</p>
        <p>
          <span className="font-semibold">
            Durasi: 30-60 menit via Call (
            <span className="italic tracking-wide text-word-blue">
              reservasi dulu untuk jadwal konsultasi via Call
            </span>
            )
          </span>
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
    ),
    sectionClass: "flex flex-col gap-2 h-full py-50 justify-center"
  },
  {
    id: "mentoring",
    icon: <MentoringIcon className="absolute top-0 right-10 w-130 opacity-30 z-1" />,
    title: "mentoring",
    titleClass: "font-semibold text-5xl mb-4 text-word-orange uppercase",
    content: (
      <div className="flex flex-col gap-3 text-lg text-word-white-orange">
        <p className="font-semibold">Biaya: Rp.50.000,-</p>
        <p>
          <span className="font-semibold">
            Durasi: 6 hari (<span className="text-word-orange italic">setelah konsultasi</span>)
          </span>
        </p>
        <p className="text-justify leading-relaxed pr-90 z-5">
          Seusai Konsultasi, kamu bisa pilih langkah ke 2 yaitu Mentoring, 
          yang berarti nantinya selama 6 hari latihanmu akan dipantau progresnya 
          oleh Voice Teacher SETIAP HARI. Akan diberi masukan, kritik, dan juga 
          challenge tambahan. Mentoring ini via Chat atau Voice Note, bukan Call. 
          Diusahakan kamu bisa konsisten dalam mengumpulkan tugasnya 1 hari 1 
          pengumpulan PR. PR tidak sah jika ditimbun dan dikumpulkan dalam 1 hari. 
          <br />Ada 3 kondisi yang bisa dimaklumi jika kamu sedang tidak bisa mengumpulkan PR yaitu:
        </p>
        <ol className="flex flex-col list-decimal pl-5 pt-5 gap-2 pr-90">
          <li>Sakit (kamu/keluarga/peliharaan/orang terdekat).</li>
          <li>Ada yang meninggal (keluarga/orang terdekat/peliharaan), bepergian amat jauh (ini lebih ke khawatir dengan stamina vokal sudah lelah).</li>
          <li>Lembur kerja.</li>
        </ol>
      </div>
    ),
    sectionClass: "flex flex-col gap-2 h-full py-50 w-full justify-center bg-gray-blue"
  },
  {
    id: "sertifikat",
    icon: <CertificateIcon className="absolute top-5 right-10 w-130 opacity-20" />,
    title: "sertifikat",
    titleClass: "uppercase text-5xl font-semibold text-word-blue",
    content: (
      <div className="flex flex-col gap-3 text-lg text-gray-800 pr-100">
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
    ),
    sectionClass: "flex flex-col gap-2 h-full py-50 justify-center"
  },
  {
    id: "catatan",
    icon: <NotesIcon className="absolute -top-30 right-0 w-130 opacity-20" />,
    title: "catatan",
    titleClass: "font-semibold text-5xl mb-4 text-word-orange uppercase",
    content: (
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
    ),
    sectionClass: "flex flex-col gap-2 h-full py-50 w-full justify-center bg-gray-blue"
  }
];

export const academyClassContent = [
  {
    id: "class-status",
    sectionClass: "flex flex-col gap-2 h-full py-50 w-full justify-center bg-gray-blue",
    icon: <ClassIcon className="absolute top-0 right-10 w-120 opacity-30 z-1" />,
    title: "Class status",
    titleClass: "font-semibold text-5xl mb-4 text-word-orange uppercase",
    content: (
      <div className="flex flex-col gap-5 text-lg text-word-white-orange">
        <p className="font-semibold text-2xl">Past Academy Class:</p>
        <ol className="flex flex-col pl-5 gap-2 list-disc">
          <li>SiiChiSei Academy Batch 1: Komponen Anatomi Vokal (3 bulan)</li>
          <li>SiiChiSei Academy Batch 2: Register Vokal (3 bulan)</li>
          <li className="text-word-orange font-semibold">SiiChiSei Academy Batch 3: Vibrato (3 bulan) - On Going</li>
        </ol>
        <p className="font-semibold text-2xl">Available Academy Class:</p>
        <p className="text-justify leading-relaxed italic">
          Coming Soon
        </p>
      </div>
    )
  },
  {
    id: "prices",
    sectionClass: "flex flex-col gap-2 h-full py-50 justify-center",
    icon: null,
    title: "Prices",
    titleClass: "hidden", // Hide since cards have their own titles
    content: null // Cards will be rendered here
  }
];