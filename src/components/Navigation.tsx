import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

interface MenuItem {
  id: string;
  name: string;
  korName: string;
  path: string;
  subItems?: MenuItem[];
}

const menuItems: MenuItem[] = [
  { id: "home", name: "홈", korName: "Home", path: "/" },
  { id: "about", name: "브랜드 스토리", korName: "About", path: "/about" },
  {
    id: "kdot",
    name: "K.Dot",
    korName: "K.Dot",
    path: "#",
    subItems: [
      {
        id: "menu",
        name: "메뉴",
        korName: "Menu / Ingredients",
        path: "/menu",
      },
      {
        id: "custom",
        name: "나만의 차",
        korName: "Make Your Own Tea",
        path: "/custom",
      },
      { id: "tech", name: "푸드테크", korName: "Food Tech", path: "/tech" },
    ],
  },
  { id: "offline", name: "오프라인", korName: "Offline", path: "/offline" },
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed w-full z-50 nav-glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <div className="flex items-center">
                <img
                  src={`${import.meta.env.BASE_URL}img/logo_1.png`}
                  alt="K.Dot 로고"
                  className="w-12 h-12"
                />
                <span className="ml-2 text-lg font-display text-white">
                  K.Dot Time!
                </span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className="group inline-flex flex-col px-3 py-1 font-medium text-white hover:text-orange-100 transition-colors"
                >
                  <span className="relative z-10 font-display text-sm">
                    {item.name}
                  </span>
                  <span className="block text-xs text-orange-100 mt-0.5">
                    {item.korName}
                  </span>
                </Link>

                {item.subItems && activeDropdown === item.id && (
                  <div className="absolute left-0 top-full pt-2 w-56 group-hover:block">
                    <div className="rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.id}
                            to={subItem.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50"
                          >
                            <span className="block">{subItem.name}</span>
                            <span className="block text-xs text-gray-500">
                              {subItem.korName}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-white hover:text-orange-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-orange-100">
          <div className="px-4 py-2 space-y-1">
            {menuItems.map((item) => (
              <div key={item.id}>
                <Link
                  to={item.path}
                  className="block px-4 py-3 text-gray-800 hover:bg-orange-50 rounded-lg transition-colors"
                  onClick={() => {
                    if (!item.subItems) {
                      setIsOpen(false);
                    }
                  }}
                >
                  <span className="block font-display">{item.name}</span>
                  <span className="block text-sm text-[#FF7B28]">
                    {item.korName}
                  </span>
                </Link>

                {item.subItems && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-orange-100">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.id}
                        to={subItem.path}
                        className="block px-4 py-2 text-gray-600 hover:text-[#FF7B28] hover:bg-orange-50 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="block text-sm">{subItem.name}</span>
                        <span className="block text-xs text-gray-500">
                          {subItem.korName}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
