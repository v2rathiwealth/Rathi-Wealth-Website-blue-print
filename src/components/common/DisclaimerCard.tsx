import React from 'react';
import { AlertCircle } from 'lucide-react';
import { COMPLIANCE_DISCLAIMER } from '../../data/content';

interface DisclaimerCardProps {
  customText?: string;
  assumptions?: string[];
}

export const DisclaimerCard: React.FC<DisclaimerCardProps> = ({
  customText,
  assumptions,
}) => {
  return (
    <div className="mt-8 p-5 bg-[#FAEEDA]/50 rounded-xl border border-amber-200/70 text-slate-700 text-xs leading-relaxed">
      <div className="flex items-start gap-2.5">
        <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <div className="space-y-2">
          <p className="font-semibold text-amber-900 tracking-wide uppercase text-[11px]">
            Regulatory Disclaimer & Calculation Assumptions
          </p>
          <p className="text-slate-600">
            {customText || COMPLIANCE_DISCLAIMER}
          </p>
          {assumptions && assumptions.length > 0 && (
            <div className="pt-1.5 border-t border-amber-200/60">
              <span className="font-semibold text-slate-800">Assumptions used in this model:</span>
              <ul className="list-disc pl-4 mt-1 space-y-0.5 text-slate-600">
                {assumptions.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
