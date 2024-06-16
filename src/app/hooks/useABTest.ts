import { useEffect, useState } from 'react';
import statsig from 'statsig-js';

const useABTest = (userId: string) => {
  const [variant, setVariant] = useState<'A' | 'B'>('A');

  useEffect(() => {
    const fetchVariant = async () => {
      const user = '123';
      const gate = await statsig.checkGate(user, false);
      setVariant(gate ? 'A' : 'B');
    };

    fetchVariant();
  }, [userId]);

  return variant;
};

export default useABTest;