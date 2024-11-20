import Navigation from "../components/Navigation";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const locations = [
  {
    name: "강남점",
    address: "서울특별시 강남구 테헤란로 123",
    hours: "매일 10:00 - 22:00",
    phone: "02-1234-5678",
    email: "gangnam@kdot.com",
  },
  {
    name: "홍대점",
    address: "서울특별시 마포구 와우산로 234",
    hours: "매일 11:00 - 23:00",
    phone: "02-2345-6789",
    email: "hongdae@kdot.com",
  },
  {
    name: "부산점",
    address: "부산광역시 해운대구 해운대해변로 345",
    hours: "매일 10:00 - 22:00",
    phone: "051-345-6789",
    email: "busan@kdot.com",
  },
];

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-red-50">
      <Navigation />
      <main className="pt-20">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#FF7B28] to-[#FF4500] bg-clip-text text-transparent">
                  오프라인 매장
                </span>
              </h1>
              <p className="text-gray-600 text-lg">
                가까운 K.Dot 매장을 찾아보세요
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((location) => (
                <div
                  key={location.name}
                  className="content-glass-effect rounded-xl p-8"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="text-[#FF7B28]" size={24} />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {location.name}
                        </h3>
                        <p className="text-gray-600">{location.address}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="text-[#FF7B28]" size={20} />
                      <p className="text-gray-600">{location.hours}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="text-[#FF7B28]" size={20} />
                      <p className="text-[#FF7B28] font-medium">
                        {location.phone}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="text-[#FF7B28]" size={20} />
                      <p className="text-gray-600">{location.email}</p>
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
