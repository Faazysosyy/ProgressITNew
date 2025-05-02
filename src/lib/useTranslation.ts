import { useTranslation as useI18nTranslation } from 'react-i18next';

export const useTranslation = () => {
  const { t } = useI18nTranslation('common');
  
  return {
    t
  };
}; 