import { ReactNode, createContext, useState, FC } from 'react';

interface Settings {
  theme: string;
  toggleTheme: () => void;
}

export const SettingsContext = createContext<Settings | undefined>(undefined);

export const SettingsProvider: FC<{children: ReactNode}> = ({ children }) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  // const [language, setLanguage] = useState('pt');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const contextValue: Settings = {
    theme,
    toggleTheme,
  };

  return <SettingsContext.Provider value={contextValue}>{children}</SettingsContext.Provider>;

};
