import { ReactNode, createContext, useState, FC } from 'react';

interface Settings {
  theme: string;
  toggleTheme: () => void;
  language: string;
  toggleLanguage: () => void;
}

export const SettingsContext = createContext<Settings>({} as Settings);

export const SettingsProvider: FC<{children: ReactNode}> = ({ children }) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [language, setLanguage] = useState('pt');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleLanguage = (): void => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  }

  const contextValue: Settings = {
    theme,
    toggleTheme,
    language,
    toggleLanguage,
  };

  return <SettingsContext.Provider value={contextValue}>{children}</SettingsContext.Provider>;

};
