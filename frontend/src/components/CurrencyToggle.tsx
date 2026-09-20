import React from 'react';
import { DollarSign, IndianRupee } from 'lucide-react';
import { Button } from './ui/button';

interface CurrencyToggleProps {
  currency: 'USD' | 'INR';
  onCurrencyChange: (currency: 'USD' | 'INR') => void;
}

export function CurrencyToggle({ currency, onCurrencyChange }: CurrencyToggleProps) {
  return (
    

       onCurrencyChange('USD')}
        className="h-8 px-3 gap-1"
        aria-label="Switch display currency to USD"
        aria-pressed={currency === 'USD'}
        title="Switch display currency to USD"
      >
        
        USD
      
       onCurrencyChange('INR')}
        className="h-8 px-3 gap-1"
        aria-label="Switch display currency to INR"
        aria-pressed={currency === 'INR'}
        title="Switch display currency to INR"
      >
        
        INR
      
    

  );
}
