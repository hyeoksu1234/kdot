import Navigation from "../components/Navigation";
import { Coffee, Heart, Star, Users } from "lucide-react";

const storyPoints = [
  {
    title: "전통의 맛",
    description: "한국의 전통차를 현대적으로 재해석했습니다.",
    icon: Coffee,
  },
  {
    title: "고객 중심",
    description: "고객의 취향을 최우선으로 생각합니다.",
    icon: Heart,
  },
  {
    title: "품질 보증",
    description: "최고급 원료만을 사용하여 최상의 맛을 보장합니다.",
    icon: Star,
  },
  {
    title: "함께 성장",
    description: "지역 사회와 함께 성장하는 기업이 되겠습니다.",
    icon: Users,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-red-50">
      <Navigation />
      <main className="pt-20">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#FF7B28] to-[#FF4500] bg-clip-text text-transparent">
                  브랜드 스토리
                </span>
              </h1>
              <p className="text-gray-600 text-lg">
                전통과 현대를 잇는 K.Dot의 이야기
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {storyPoints.map((point) => (
                <div key={point.title} className="content-glass-effect rounded-xl p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 bg-orange-100 rounded-full mb-6">
                      <point.icon className="text-[#FF7B28]" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{point.title}</h3>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
