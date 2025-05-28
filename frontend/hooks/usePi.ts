import { useEffect, useState } from 'react';

interface PiData {
  pi: number;
  terms: number;
  updatedAt: string;
  digits: number;
}

export default function usePi(): PiData {
  const [piData, setPiData] = useState<PiData>({
    pi: 0,
    terms: 0,
    updatedAt: '',
    digits: 0,
  });

  useEffect(() => {
    const fetchPi = async () => {
      try {
        const res = await fetch('http://localhost:3000/pi');
        const data = await res.json();
        const digits = data.pi.toString().split('.')[1]?.length || 0;
        setPiData({ ...data, digits });
      } catch (err) {
        console.error('Failed to fetch Pi:', err);
      }
    };

    fetchPi(); // fetch on mount
    const interval = setInterval(fetchPi, 3000); // re-fetch every 3s
    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return piData;
}
