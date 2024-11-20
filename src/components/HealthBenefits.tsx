import { Heart, Brain, Leaf } from "lucide-react";
import { healthBenefits } from "../types";

export default function HealthBenefits() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-[#FF7B28] to-[#FF4500] bg-clip-text text-transparent">
            건강한 맛의 비밀
          </span>
        </h2>
        <p className="text-lg text-gray-600">전통 재료의 영양과 효능</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {healthBenefits.map((item) => (
          <div
            key={item.ingredient}
            className="glass-effect rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1"
          >
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-rose-50 rounded-lg">
                  <Leaf className="text-[#FF7B28]" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {item.koreanName}
                </h3>
              </div>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                {item.description}
              </p>
              <ul className="space-y-3">
                {item.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-3 text-base"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-[#FF7B28] to-[#FF4500] rounded-full"></span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
          <Heart className="w-12 h-12 text-[#FF7B28] mb-4" />
          <h3 className="text-xl font-bold mb-2">심장 건강</h3>
          <p className="text-gray-600">
            항산화 물질이 풍부한 재료들로 심장 건강을 지켜줍니다.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
          <Brain className="w-12 h-12 text-[#FF7B28] mb-4" />
          <h3 className="text-xl font-bold mb-2">인지 기능</h3>
          <p className="text-gray-600">
            전통 약재의 효능으로 집중력과 기억력 향상에 도움을 줍니다.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
          <Leaf className="w-12 h-12 text-[#FF7B28] mb-4" />
          <h3 className="text-xl font-bold mb-2">자연의 힘</h3>
          <p className="text-gray-600">
            100% 자연 재료로 만들어 몸에 좋은 영양을 전달합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
