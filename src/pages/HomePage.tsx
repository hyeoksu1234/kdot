import Navigation from "../components/Navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const menuSlides = [
  {
    id: 1,
    name: "인삼 라떼",
    image: `${import.meta.env.BASE_URL}img/menu/ginseng-latte.jpg`,
    description: "전통 인삼의 깊은 맛과 부드러운 우유의 조화",
  },
  {
    id: 2,
    name: "오미자 에이드",
    image: `${import.meta.env.BASE_URL}img/menu/omija-ade.jpg`,
    description: "다섯 가지 맛이 어우러진 상큼한 에이드",
  },
  {
    id: 3,
    name: "수정과 밀크티",
    image: `${import.meta.env.BASE_URL}img/menu/sujeonggwa-milk-tea.jpg`,
    description: "계피와 생강의 향이 가득한 밀크티",
  },
];

export default function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          cssEase: "linear",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-red-50">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="animate-float">
                <img
                  src={`${import.meta.env.BASE_URL}img/logo_1.png`}
                  alt="K.Dot 로고"
                  className="w-48 h-48"
                />
              </div>
            </div>
            <h1 className="text-5xl font-black text-gray-900 sm:text-6xl md:text-7xl tracking-tight">
              <span className="block mb-2">당신만의 특별한 한 잔</span>
              <span className="block bg-gradient-to-r from-[#FF7B28] to-[#FF4500] bg-clip-text text-transparent">
                전통과 현대의 조화
              </span>
            </h1>

            <div className="mt-16 max-w-6xl mx-auto">
              <div className="slider-container px-4">
                <Slider {...settings}>
                  {menuSlides.map((slide) => (
                    <div key={slide.id} className="px-2">
                      <div className="content-glass-effect rounded-2xl p-4">
                        <img
                          src={slide.image}
                          alt={slide.name}
                          className="w-full h-64 object-cover rounded-xl mb-4"
                        />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {slide.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
