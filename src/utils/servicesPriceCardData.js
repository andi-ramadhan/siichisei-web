const priceCards = [
  {
    type: "Monthly",
    price: "IDR 200.000",
    priceSuffix: "/month",
    cardClass: "bg-word-orange text-gray-blue",
    btnClass: "text-center bg-gray-blue hover:bg-dark-blue transition-all duration-200 text-white rounded-md py-2 cursor-pointer font-semibold",
    benefits: [
      "Kelas 4x pertemuan",
      "Mentoring 24x pertemuan",
      "Free konsultasi selama berada di kelas",
      "File PPT materi"
    ],
    iconColor: "text-gray-blue"
  },
  {
    type: "FULL-CLASS",
    price: "IDR 550.000",
    priceSuffix: "",
    cardClass: "bg-gray-blue text-word-white-orange",
    btnClass: "bg-word-orange text-black rounded-md py-2 cursor-pointer font-semibold hover:bg-bg-base-orange transition-all duration-200",
    benefits: [
      "Kelas 12x pertemuan",
      "Mentoring 72x pertemuan",
      "Free konsultasi selama berada di kelas",
      "File PPT materi"
    ],
    iconColor: "text-word-orange"
  }
];

export default priceCards;