'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter, usePathname } from 'next/navigation';
import i18n from '@/lib/i18n';

export default function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState('en');
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setCurrentLang(i18n.language);
  }, []);

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
    
    // Force reload to ensure all components pick up the language change
    router.refresh();
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-white hover:bg-white/10 font-medium"
    >
      {currentLang === 'en' ? 'RU' : 'EN'}
    </Button>
  );
} 