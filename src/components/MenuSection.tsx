import { Coffee, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const menuCategories = [
  {
    title: "베이스",
    items: [
      {
        name: "오미자",
        price: "4,500원",
        description: "새콤달콤한 전통 베리의 깊은 맛",
      },
      {
        name: "유자",
        price: "4,500원",
        description: "상큼한 감귤향의 비타민 가득",
      },
      {
        name: "생강",
        price: "4,500원",
        description: "따뜻한 온기가 느껴지는 건강한 맛",
      },
      {
        name: "수정과",
        price: "4,500원",
        description: "계피와 생강의 조화로운 풍미",
      },
      {
        name: "미숫가루",
        price: "4,500원",
        description: "고소한 영양 가득한 곡물 음료",
      },
    ],
  },
  {
    title: "펄",
    items: [
      {
        name: "알로에",
        price: "1,000원",
        description: "촉촉한 식감의 건강한 토핑",
      },
      {
        name: "타피오카",
        price: "1,000원",
        description: "쫄깃한 식감의 클래식 펄",
      },
      {
        name: "사고",
        price: "1,000원",
        description: "투명한 식감의 특별한 펄",
      },
    ],
  },
  {
    title: "폼",
    items: [
      {
        name: "치즈 폼",
        price: "1,500원",
        description: "부드러운 크림치즈의 달콤함",
      },
      {
        name: "인삼 치즈 폼",
        price: "2,000원",
        description: "건강한 인삼의 향이 더해진 특별한 폼",
      },
    ],
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#FF7B28] to-[#FF4500] bg-clip-text text-transparent">
              메뉴
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            전통과 현대가 만나 특별해지는 순간
          </p>
        </div>

        <div className="space-y-16">
          {menuCategories.map((category) => (
            <div
              key={category.title}
              className="content-glass-effect rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                <Coffee className="text-[#FF7B28]" />
                {category.title}
              </h3>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-white/50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-semibold text-gray-800">
                        {item.name}
                      </h4>
                      <span className="text-[#FF7B28] font-medium">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/custom"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF7B28] text-white rounded-full hover:bg-[#FF4500] transition-colors"
          >
            <Sparkles size={20} />
            <span>나만의 음료 만들기</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
