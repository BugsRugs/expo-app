import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';

const FontLoader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'OpenSans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
      });
      setIsFontLoaded(true);
    };

    loadFonts();
  }, []);

  if (!isFontLoaded) {
    // You can show a loading screen here if desired
    return null;
  }

  return <>{children}</>;
};

export default FontLoader;
