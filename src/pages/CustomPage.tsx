import Navigation from "../components/Navigation";  
import { useState } from "react";
import { Bot, Sparkles } from "lucide-react";
import type { Drink } from "../types";

const bases = ["오미자", "유자", "생강", "수정과", "미숫가루"];
const pearls = ["알로에", "타피오카", "사고"];
const forms = ["치즈 폼", "인삼 치즈 폼"];

export default function CustomPage() {
  const [drink, setDrink] = useState<Drink>({
    base: "",
    pearl: "",
    form: "",
  });
  const [showAiSuggestion, setShowAiSuggestion] = useState(false);

  const getAiSuggestion = () => {
    const hour = new Date().getHours();
    let suggestion: Drink = {
      base: "",
      pearl: pearls[Math.floor(Math.random() * pearls.length)],
      form: forms[Math.floor(Math.random() * forms.length)],
    };

    if (hour < 10) {
      suggestion.base = "생강";
    } else if (hour < 14) {
      suggestion.base = "유자";
    } else if (hour < 18) {
      suggestion.base = "미숫가루";
    } else {
      suggestion.base = Math.random() < 0.5 ? "오미자" : "수정과";
    }

    setDrink(suggestion);
    setShowAiSuggestion(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-red-50">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="content-glass-effect rounded-2xl shadow-xl p-8">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#FF7B28] to-[#FF4500] bg-clip-text text-transparent">
                  나만의 음료 만들기
                </h2>
                <button
                  onClick={getAiSuggestion}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FF7B28] to-[#FF4500] text-white rounded-full hover:from-[#FF4500] hover:to-[#FF4500] transition-all shadow-md hover:shadow-lg"
                >
                  <Bot size={20} />
                  AI 추천받기
                </button>
              </div>

              {showAiSuggestion && (
                <div className="mb-8 p-6 bg-gradient-to-r from-rose-50 to-red-50 rounded-2xl border border-rose-100">
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles className="text-[#FF7B28]" size={24} />
                    <h3 className="text-xl font-bold text-[#FF4500]">AI 맞춤 추천</h3>
                  </div>
                  <p className="text-[#FF7B28]">
                    현재 시간과 계절을 고려한 최적의 조합입니다
                  </p>
                </div>
              )}

              <div className="space-y-8">
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">
                    베이스 선택
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {bases.map((base) => (
                      <button
                        key={base}
                        onClick={() => setDrink({ ...drink, base })}
                        className={`p-4 rounded-xl text-sm transition-all ${
                          drink.base === base
                            ? "bg-gradient-to-r from-[#FF7B28] to-[#FF4500] text-white shadow-lg"
                            : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:shadow-md"
                        }`}
                      >
                        {base}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">
                    펄 선택
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {pearls.map((pearl) => (
                      <button
                        key={pearl}
                        onClick={() => setDrink({ ...drink, pearl })}
                        className={`p-4 rounded-xl text-sm transition-all ${
                          drink.pearl === pearl
                            ? "bg-gradient-to-r from-[#FF7B28] to-[#FF4500] text-white shadow-lg"
                            : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:shadow-md"
                        }`}
                      >
                        {pearl}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">
                    폼 선택
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {forms.map((form) => (
                      <button
                        key={form}
                        onClick={() => setDrink({ ...drink, form })}
                        className={`p-4 rounded-xl text-sm transition-all ${
                          drink.form === form
                            ? "bg-gradient-to-r from-[#FF7B28] to-[#FF4500] text-white shadow-lg"
                            : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:shadow-md"
                        }`}
                      >
                        {form}
                      </button>
                    ))}
                  </div>
                </div>

                {drink.base && drink.pearl && drink.form && (
                  <div className="mt-10 p-8 bg-gradient-to-br from-rose-50 via-white to-red-50 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      나만의 특별한 음료
                    </h3>
                    <p className="text-lg text-gray-600">
                      {drink.base} 베이스에 {drink.pearl} 펄을 더하고,
                      <br />
                      {drink.form}으로 마무리된 특별한 한 잔
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
