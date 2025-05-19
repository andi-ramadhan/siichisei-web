const navLinks = [
  {
    label: "Home",
    to: "/",
    className: "orange-footer-link h-0",
    onClick: (e, toTop) => toTop()
  },
  {
    label: "Private Class",
    to: "/services",
    children: [
      { label: "Konsultasi", to: "/services/private-class#konsultasi" },
      { label: "Mentoring", to: "/services/private-class#mentoring" },
      { label: "Sertifikat", to: "/services/private-class#sertifikat" }
    ]
  },
  {
    label: "Academy Class",
    to: "/services",
    children: [
      { label: "Status Kelas", to: "/services/academy-class#class-status" },
      { label: "Harga", to: "/services/academy-class#prices" }
    ]
  },
  {
    label: "FAQs",
    to: "/faqs",
    children: [
      { label: "Cari Pertanyaan", to: "/faqs" }
    ]
  },
  {
    label: "Testimonials",
    to: "/testimonials",
    children: [
      { label: "Testimoni Siswa SiiChiSei Academy", to: "/testimonials" }
    ]
  },
  {
    label: "Contact",
    to: "/contact",
    className: "orange-footer-link h-0"
  }
];

export default navLinks;