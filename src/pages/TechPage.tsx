import Navigation from "../components/Navigation";
import { Bot, Cpu, Zap, LineChart } from "lucide-react";

const techFeatures = [
  {
    title: "AI 기반 추천",
    description: "개인 맞춤형 음료 추천 시스템으로 고객 만족도를 높입니다.",
    icon: Bot,
  },
  {
    title: "자동화 시스템",
    description: "정확한 레시피 계량과 제조 자동화로 일관된 맛을 제공합니다.",
    icon: Cpu,
  },
  {
    title: "실시간 모니터링",
    description: "품질 관리 및 재고 자동 관리로 최상의 서비스를 제공합니다.",
    icon: Zap,
  },
  {
    title: "데이터 분석",
    description: "고객 선호도 분석을 통한 메뉴 최적화와 트렌드 예측",
    icon: LineChart,
  },
];

export default function TechPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-red-50">
      <Navigation />
      <main className="pt-20">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#FF7B28] to-[#FF4500] bg-clip-text text-transparent">
                  푸드테크
                </span>
              </h1>
              <p className="text-gray-600 text-lg">
                최신 기술로 만드는 특별한 경험
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {techFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="content-glass-effect rounded-xl p-8"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 bg-orange-100 rounded-full mb-6">
                      <feature.icon className="text-[#FF7B28]" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
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
