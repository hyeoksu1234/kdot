export interface Drink {
  base: string;
  pearl: string;
  form: string;
}

export interface HealthBenefit {
  ingredient: string;
  koreanName: string;
  benefits: string[];
  description: string;
}

export const healthBenefits: HealthBenefit[] = [
  {
    ingredient: "Omija",
    koreanName: "오미자",
    benefits: ["면역력 강화", "항산화 작용", "호흡기 건강"],
    description: "다섯 가지 맛이 조화롭게 어우러진 전통 베리로, 항산화 물질이 풍부하며 면역력 증진에 도움을 줍니다."
  },
  {
    ingredient: "Yuzu",
    koreanName: "유자",
    benefits: ["비타민 C", "감기 예방", "피부 건강"],
    description: "비타민 C가 레몬의 3배! 상큼한 향과 함께 겨울철 건강을 지켜주는 천연 항산화제입니다."
  },
  {
    ingredient: "Ginger",
    koreanName: "생강",
    benefits: ["소화 촉진", "혈액순환", "항염증"],
    description: "몸을 따뜻하게 해주고 소화를 도우며, 혈액순환을 촉진하는 천연 건강식품입니다."
  },
  {
    ingredient: "Sujeonggwa",
    koreanName: "수정과",
    benefits: ["소화 개선", "피로 회복", "혈액순환"],
    description: "계피와 생강의 조화로운 맛으로, 소화를 돕고 몸을 따뜻하게 해주는 전통 음료입니다."
  },
  {
    ingredient: "Misutgaru",
    koreanName: "미숫가루",
    benefits: ["영양 균형", "포만감", "에너지 공급"],
    description: "여러 곡물이 조화롭게 블렌딩되어 풍부한 영양을 공급하고 건강한 포만감을 주는 전통 곡물 음료입니다."
  }
];