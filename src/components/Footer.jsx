import { useState } from "react";
import { Link } from "react-router-dom";

const translations = {
  en: {
    tagline:
      "Book skilled services for plumbing, electrical, carpentry, painting and more. Connect with verified services providers in Ahmedabad.",
    quickLinks: "Quick Links",
    home: "Home",
    login: "Login",
    register: "Register",
    contact: "Contact",
    rights: "All rights reserved.",
  },
  hi: {
    tagline:
      "प्लंबिंग, इलेक्ट्रिशियन, कारपेंटर, पेंटर और अधिक के लिए कुशल मजदूर बुक करें। अहमदाबाद में सत्यापित कामगारों से जुड़ें।",
    quickLinks: "त्वरित लिंक",
    home: "होम",
    login: "लॉगिन",
    register: "रजिस्टर",
    contact: "संपर्क",
    rights: "सर्वाधिकार सुरक्षित।",
  },
  gu: {
    tagline:
      "પ્લમ્બિંગ, ઇલેક્ટ્રિશિયન, કારપેન્ટર, પેઇન્ટર અને વધુ માટે કુશળ મજૂર બુક કરો। અમદાવાદમાં ચકાસેલ કામદારો સાથે જોડાઓ.",
    quickLinks: "ઝડપી લિંક્સ",
    home: "હોમ",
    login: "લોગિન",
    register: "નોંધણી",
    contact: "સંપર્ક",
    rights: "બધા હક્કો સुरક્ષિત.",
  },
};

export default function Footer() {
  const [language, setLanguage] = useState("en");

  const t = translations[language] || translations.en;

  return (
    <footer className="bg-dark-900 text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-white font-semibold mb-2">Rojgar Setu</h3>
            <p className="text-sm">{t.tagline}</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">{t.quickLinks}</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition">
                  {t.home}
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-white transition">
                  {t.login}
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-white transition">
                  {t.register}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">{t.contact}</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href="mailto:info@rojgarsetu.com"
                  className="hover:text-white transition"
                >
                  info@rojgarsetu.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+917940012345"
                  className="hover:text-white transition"
                >
                  +91 79400 12345
                </a>
              </li>
              <li>Ahmedabad, Gujarat</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Language / भाषा</h3>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full max-w-[180px] bg-dark-800 text-white border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent cursor-pointer"
            >
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
              <option value="gu">ગુજરાતી</option>
            </select>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm space-y-1">
          <p className="text-gray-500 text-xs">
            📱 Install app: Android — use “Add to Home screen” in browser menu;
            iPhone — Share → “Add to Home Screen”
          </p>
          <p>
            © {new Date().getFullYear()} Rojgar Setu. {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
