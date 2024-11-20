import Navigation from "../components/Navigation";
import { BarChart3, TrendingUp, Users, ShoppingBag } from "lucide-react";

const statistics = [
  {
    title: "월간 방문자",
    value: "15,000+",
    change: "+12.3%",
    icon: Users,
  },
  {
    title: "주문 건수",
    value: "45,000+",
    change: "+23.1%",
    icon: ShoppingBag,
  },
  {
    title: "매출 성장률",
    value: "89.5%",
    change: "+8.2%",
    icon: TrendingUp,
  },
  {
    title: "인기 메뉴 수",
    value: "25+",
    change: "+15.4%",
    icon: BarChart3,
  },
];

export default function DataPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-red-50">
      <Navigation />
      <main className="pt-20">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#FF7B28] to-[#FF4500] bg-clip-text text-transparent">
                  브랜드 데이터
                </span>
              </h1>
              <p className="text-gray-600 text-lg">
                데이터로 보는 K.Dot의 성장
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statistics.map((stat) => (
                <div key={stat.title} className="content-glass-effect rounded-xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-orange-100 rounded-lg">
                      <stat.icon className="text-[#FF7B28]" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-green-500 text-sm">{stat.change}</p>
                    </div>
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
