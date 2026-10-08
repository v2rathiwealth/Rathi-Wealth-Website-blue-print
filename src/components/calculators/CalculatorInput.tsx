import React from 'react';

interface CalculatorInputProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unitPrefix?: string;
  unitSuffix?: string;
  helperText?: string;
  onChange: (val: number) => void;
}

export const CalculatorInput: React.FC<CalculatorInputProps> = ({
  label,
  value,
  min,
  max,
  step = 1,
  unitPrefix = '',
  unitSuffix = '',
  helperText,
  onChange,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value.replace(/,/g, '');
    const num = parseFloat(rawVal);
    if (!isNaN(num)) {
      onChange(Math.min(max * 2, Math.max(0, num)));
    } else if (rawVal === '') {
      onChange(0);
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <label className="font-medium text-slate-800">{label}</label>
        <div className="flex items-center rounded-lg border border-slate-300 bg-white px-3 py-1.5 focus-within:border-[#0A1F44] focus-within:ring-1 focus-within:ring-[#0A1F44] shadow-xs">
          {unitPrefix && <span className="text-slate-500 mr-1 text-sm">{unitPrefix}</span>}
          <input
            type="number"
            min={min}
            max={max}
            step={step}
            value={value === 0 ? '' : value}
            onChange={handleInputChange}
            className="w-24 text-right text-sm font-semibold text-[#0A1F44] outline-none"
          />
          {unitSuffix && <span className="text-slate-500 ml-1 text-sm">{unitSuffix}</span>}
        </div>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0A1F44]"
      />

      <div className="flex justify-between items-center text-[11px] text-slate-600">
        <span>{unitPrefix}{min.toLocaleString('en-IN')}{unitSuffix}</span>
        {helperText && <span className="text-slate-600 italic">{helperText}</span>}
        <span>{unitPrefix}{max.toLocaleString('en-IN')}{unitSuffix}</span>
      </div>
    </div>
  );
};
