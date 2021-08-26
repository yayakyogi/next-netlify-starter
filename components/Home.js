function Home() {
  return (
    <div className="w-full md:h-screen md:mx-auto dark:bg-gray-900">
      <div
        id="home"
        className="container mx-auto w-full px-6 pt-24 md:flex md:items-center md:px-20 pb-16"
      >
        <div className="w-full md:w-1/2" data-aos="fade-up">
          {/* Judul portofolio */}
          <h1 className="font-black text-md leading-none mb-8 md:mb-0 md:text-5xl dark:text-white">
            Think Twice, Code Once
          </h1>
          <img
            src="img/img-home.svg"
            className="md:hidden my-6 block w-96 mx-auto shadow-lg rounded-xl dark:bg-gray-800"
            alt="img-home"
          />
          <p className="text-justify leading-loose md:leading-relaxed text-gray-700 mt-8 mb-12 md:text-left dark:text-gray-400">
            Hi,Perkenalkan saya <strong>Yayak Yogi Ginantaka</strong>. Saya
            merupakan seoarang Front End Developer, adapun project yang pernah
            saya kerjakan adalah desain web mengunakan html dan css native
            maupun menggunakan framework seperti Bootsrap dan Tailwind CSS. Juga
            familiar dengan React JS dan React Native
          </p>
          <a
            href="#about"
            className="bg-indigo-700 text-white px-10 py-2 rounded-3xl shadow-2xl hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-indigo-800"
          >
            Lihat selengkapnya
          </a>
        </div>
        <div className="md:w-1/2" data-aos="fade-up">
          <img
            src="img/img-home.svg"
            className="p-2 rounded-xl hidden md:block w-full mt-0 shadow-lg dark:bg-gray-800"
            alt="img-home"
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
