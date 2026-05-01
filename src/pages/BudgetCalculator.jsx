import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Plane, Home, ShoppingCart, GraduationCap, Briefcase, Info, ChevronDown, ChevronUp, ArrowRight, AlertTriangle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from 'react-router-dom';

const EXCHANGE = { USD: 1620, GBP: 2060, EUR: 1750, CAD: 1190, AUD: 1060, SEK: 155, NOK: 150, DKK: 235, PLN: 400, CZK: 70, AED: 441 };

const CITY_DATA = {
  // ─── Canada ──────────────────────────────────────────────────────────────────
  'Toronto, CA':   { currency: 'CAD', rent1br: 2400, food: 600, transport: 160, utilities: 140, misc: 300, settleEst: 3500 },
  'Vancouver, CA': { currency: 'CAD', rent1br: 2600, food: 650, transport: 100, utilities: 120, misc: 300, settleEst: 3500 },
  'Calgary, CA':   { currency: 'CAD', rent1br: 1900, food: 550, transport: 120, utilities: 130, misc: 250, settleEst: 2800 },
  'Ottawa, CA':    { currency: 'CAD', rent1br: 1800, food: 530, transport: 120, utilities: 130, misc: 250, settleEst: 2800 },
  // ─── United Kingdom ──────────────────────────────────────────────────────────
  'London, GB':     { currency: 'GBP', rent1br: 2200, food: 400, transport: 165, utilities: 150, misc: 300, settleEst: 2500 },
  'Manchester, GB': { currency: 'GBP', rent1br: 1100, food: 350, transport: 80,  utilities: 130, misc: 250, settleEst: 1800 },
  'Birmingham, GB': { currency: 'GBP', rent1br: 950,  food: 330, transport: 75,  utilities: 120, misc: 220, settleEst: 1800 },
  'Edinburgh, GB':  { currency: 'GBP', rent1br: 1100, food: 360, transport: 70,  utilities: 130, misc: 250, settleEst: 1800 },
  // ─── Sweden ──────────────────────────────────────────────────────────────────
  'Stockholm, SE':  { currency: 'SEK', rent1br: 12000, food: 4500, transport: 930, utilities: 900, misc: 2500, settleEst: 20000 },
  'Gothenburg, SE': { currency: 'SEK', rent1br: 9000,  food: 4000, transport: 800, utilities: 850, misc: 2000, settleEst: 18000 },
  'Uppsala, SE':    { currency: 'SEK', rent1br: 8000,  food: 3800, transport: 700, utilities: 800, misc: 1800, settleEst: 16000 },
  'Lund, SE':       { currency: 'SEK', rent1br: 7500,  food: 3600, transport: 650, utilities: 750, misc: 1700, settleEst: 15000 },
  // ─── USA ─────────────────────────────────────────────────────────────────────
  'New York, US':  { currency: 'USD', rent1br: 3500, food: 600, transport: 130, utilities: 180, misc: 400, settleEst: 4000 },
  'Houston, US':   { currency: 'USD', rent1br: 1400, food: 450, transport: 100, utilities: 150, misc: 250, settleEst: 2800 },
  'Dallas, US':    { currency: 'USD', rent1br: 1500, food: 450, transport: 100, utilities: 140, misc: 250, settleEst: 2800 },
  'Atlanta, US':   { currency: 'USD', rent1br: 1600, food: 400, transport: 90,  utilities: 130, misc: 220, settleEst: 2500 },
  // ─── Germany ─────────────────────────────────────────────────────────────────
  'Berlin, DE':    { currency: 'EUR', rent1br: 1400, food: 400, transport: 86,  utilities: 160, misc: 250, settleEst: 2500 },
  'Munich, DE':    { currency: 'EUR', rent1br: 1900, food: 450, transport: 90,  utilities: 170, misc: 300, settleEst: 3000 },
  // ─── Australia ───────────────────────────────────────────────────────────────
  'Sydney, AU':    { currency: 'AUD', rent1br: 2800, food: 600, transport: 180, utilities: 150, misc: 300, settleEst: 3500 },
  'Melbourne, AU': { currency: 'AUD', rent1br: 2200, food: 580, transport: 160, utilities: 140, misc: 280, settleEst: 3200 },
  // ─── Other ───────────────────────────────────────────────────────────────────
  'Dublin, IE':    { currency: 'EUR', rent1br: 2200, food: 500, transport: 140, utilities: 160, misc: 300, settleEst: 3000 },
  'Amsterdam, NL': { currency: 'EUR', rent1br: 2000, food: 450, transport: 100, utilities: 150, misc: 280, settleEst: 2800 },
  'Lisbon, PT':    { currency: 'EUR', rent1br: 1600, food: 400, transport: 40,  utilities: 100, misc: 200, settleEst: 2200 },
  'Warsaw, PL':    { currency: 'PLN', rent1br: 3500, food: 1500, transport: 120, utilities: 400, misc: 600, settleEst: 6000 },
  'Dubai, AE':     { currency: 'AED', rent1br: 7000, food: 1200, transport: 500, utilities: 400, misc: 800, settleEst: 6000 },
};

const COUNTRY_CODE = {
  CA: 'CA', GB: 'GB', SE: 'SE', US: 'US', DE: 'DE', AU: 'AU', IE: 'IE', NL: 'NL', PT: 'PT', PL: 'PL', AE: 'AE',
};

const FLIGHT_COSTS_USD = {
  CA: 1350, US: 1100, GB: 650, DE: 700, AU: 1800, IE: 680, NL: 710, AE: 550, PL: 620, PT: 660, SE: 700,
};

// Per-country, per-visa-type breakdown of pre-departure costs (all in original currency unless noted as USD)
function getVisaItems(countryCode, visaType) {
  const items = [];

  if (visaType === 'student') {
    if (countryCode === 'CA') {
      items.push({ label: 'Study Permit application fee', amount: 150, currency: 'CAD', note: 'IRCC fee' });
      items.push({ label: 'Biometrics fee', amount: 85, currency: 'CAD', note: 'Required for most applicants' });
      items.push({ label: 'GIC (Guaranteed Investment Certificate)', amount: 20635, currency: 'CAD', note: 'Mandatory proof of funds — you get this back over time as a stipend in Canada' });
      items.push({ label: 'IELTS / TOEFL', amount: 285, currency: 'USD', note: 'Academic IELTS or TOEFL iBT. Book early — dates fill fast in Nigeria' });
      items.push({ label: 'WES credential evaluation', amount: 246, currency: 'USD', note: 'Required for most admissions and some study permit applications' });
      items.push({ label: 'Tuition deposit to university', amount: 1000, currency: 'CAD', note: 'Typical deposit to hold your offer — varies by school' });
      items.push({ label: 'Medical exam (panel physician)', amount: 200, currency: 'USD', note: 'Upfront medical required before visa issuance. Use IRCC-approved physician in Nigeria' });
    } else if (countryCode === 'GB') {
      items.push({ label: 'Student Visa application fee', amount: 490, currency: 'GBP', note: 'UK Visas & Immigration fee' });
      items.push({ label: 'Immigration Health Surcharge (IHS)', amount: 776, currency: 'GBP', note: 'Per year — for a 1-year masters this is £776, 3-year PhD = £2,328. Paid upfront' });
      items.push({ label: 'IELTS for UKVI', amount: 220, currency: 'GBP', note: 'Must be the specific "IELTS for UKVI" version — NOT regular IELTS' });
      items.push({ label: 'TB (tuberculosis) test', amount: 50, currency: 'GBP', note: 'Required for Nigerian nationals. Nigeria is on the UK TB test list' });
      items.push({ label: 'CAS number (from university)', amount: 0, currency: 'GBP', note: 'Free — your university issues this before you apply for the visa' });
      items.push({ label: 'Tuition deposit to university', amount: 2000, currency: 'GBP', note: 'Typical deposit. Varies — some schools require more for international students' });
    } else if (countryCode === 'SE') {
      items.push({ label: 'Residence permit application fee', amount: 1500, currency: 'SEK', note: 'Migrationsverket fee for student permit' });
      items.push({ label: 'IELTS / TOEFL', amount: 285, currency: 'USD', note: 'Most Swedish programs require English proficiency proof' });
      items.push({ label: 'Tuition deposit (if applicable)', amount: 0, currency: 'SEK', note: 'Some universities require a deposit. Public universities are often free for EU, but non-EU students pay tuition' });
      items.push({ label: 'Proof of funds (bank statement / SI Scholarship)', amount: 0, currency: 'SEK', note: 'You must show SEK 9,363/month to cover living costs. Swedish Institute Scholarship covers this' });
    } else if (countryCode === 'US') {
      items.push({ label: 'SEVIS fee (I-901)', amount: 350, currency: 'USD', note: 'Paid before DS-160 visa interview' });
      items.push({ label: 'F-1 Visa application fee (MRV)', amount: 185, currency: 'USD', note: 'Non-refundable visa application fee' });
      items.push({ label: 'IELTS / TOEFL / GRE / GMAT', amount: 250, currency: 'USD', note: 'Depends on program — TOEFL iBT is ~$245, GRE ~$220' });
    } else if (countryCode === 'DE') {
      items.push({ label: 'Student Visa fee', amount: 75, currency: 'EUR', note: 'German embassy fee. Usually applied for after receiving university admission' });
      items.push({ label: 'Blocked account (Sperrkonto)', amount: 11208, currency: 'EUR', note: 'Required proof of funds — €934/month × 12 months. Opened with Deutsche Bank, Fintiba, or Expatrio. You access it monthly once in Germany' });
      items.push({ label: 'Language test (if German-taught program)', amount: 150, currency: 'EUR', note: 'TestDaF or DSH. English-taught programs require IELTS/TOEFL instead' });
    } else if (countryCode === 'AU') {
      items.push({ label: 'Student Visa (subclass 500)', amount: 650, currency: 'AUD', note: 'DIBP fee' });
      items.push({ label: 'IELTS / TOEFL / PTE', amount: 285, currency: 'USD', note: 'English proficiency proof' });
      items.push({ label: 'Overseas Student Health Cover (OSHC)', amount: 600, currency: 'AUD', note: 'Approximately AUD 600/year. Mandatory — usually arranged through university' });
      items.push({ label: 'GTE assessment supporting docs', amount: 100, currency: 'AUD', note: 'Genuine Temporary Entrant — costs are mainly time but some translation fees may apply' });
    } else {
      items.push({ label: 'Visa application fee', amount: 150, currency: 'USD', note: 'Estimate — check the specific embassy' });
      items.push({ label: 'IELTS / language test', amount: 285, currency: 'USD', note: 'Most countries require English or local language proficiency' });
    }
  } else if (visaType === 'work') {
    if (countryCode === 'CA') {
      items.push({ label: 'Work Permit application fee', amount: 155, currency: 'CAD', note: 'IRCC fee' });
      items.push({ label: 'Biometrics', amount: 85, currency: 'CAD', note: 'If not already given in the last 10 years' });
      items.push({ label: 'LMIA-based or employer-sponsored', amount: 0, currency: 'CAD', note: 'Employer pays LMIA fee ($1,000 CAD). You pay nothing for that directly' });
    } else if (countryCode === 'GB') {
      items.push({ label: 'Skilled Worker Visa fee', amount: 827, currency: 'GBP', note: 'For stays over 3 years. Under 3 years: £551' });
      items.push({ label: 'Immigration Health Surcharge', amount: 1035, currency: 'GBP', note: 'Per year × years of visa. E.g., 3 years = £3,105. Paid upfront' });
      items.push({ label: 'English language test (if required)', amount: 200, currency: 'GBP', note: 'B1 SELT — depends on role and nationality' });
    } else if (countryCode === 'SE') {
      items.push({ label: 'Work permit application fee', amount: 2000, currency: 'SEK', note: 'Migrationsverket fee' });
      items.push({ label: 'Sponsored by employer', amount: 0, currency: 'SEK', note: 'Your employer must post the job and confirm no EU candidate was suitable' });
    } else if (countryCode === 'US') {
      items.push({ label: 'H-1B / O-1 Visa', amount: 460, currency: 'USD', note: 'Filing fee — employer usually covers this. H-1B is lottery-based' });
    } else {
      items.push({ label: 'Work permit fee', amount: 200, currency: 'USD', note: 'Estimate — varies widely' });
    }
  } else if (visaType === 'pr') {
    if (countryCode === 'CA') {
      items.push({ label: 'Express Entry / PR application fee', amount: 1365, currency: 'CAD', note: 'Main applicant. Add CAD 460 per dependent adult, CAD 150 per child' });
      items.push({ label: 'Right of Permanent Residence Fee', amount: 515, currency: 'CAD', note: 'Paid on approval — per adult applicant' });
      items.push({ label: 'Biometrics', amount: 85, currency: 'CAD', note: 'If not already enrolled' });
      items.push({ label: 'Medical exam', amount: 200, currency: 'USD', note: 'Panel physician exam required for PR' });
      items.push({ label: 'Police clearance (Nigeria + any country lived in)', amount: 30, currency: 'USD', note: 'Get Nigerian Police Force clearance and any other country' });
    } else if (countryCode === 'GB') {
      items.push({ label: 'Indefinite Leave to Remain (ILR)', amount: 2885, currency: 'GBP', note: 'After 5 years on eligible visa' });
    } else if (countryCode === 'SE') {
      items.push({ label: 'Permanent residence permit', amount: 1000, currency: 'SEK', note: 'After 4 years of continuous residence on work/study permit' });
    } else {
      items.push({ label: 'PR / settlement application fee', amount: 500, currency: 'USD', note: 'Estimate — varies by country' });
    }
  } else {
    // visitor
    items.push({ label: 'Visitor Visa / eTA fee', amount: 100, currency: 'USD', note: 'Varies by destination' });
  }

  return items;
}

const VISA_TYPES = [
  { id: 'student', label: 'Student Visa' },
  { id: 'work',    label: 'Work Permit' },
  { id: 'pr',      label: 'Permanent Residency' },
  { id: 'visitor', label: 'Visitor / Tourist Visa' },
];

const FLIGHT_COSTS = {
  CA: 1350, US: 1100, GB: 650, DE: 700, AU: 1800, IE: 680, NL: 710, AE: 550, PL: 620, PT: 660, SE: 700,
};

function formatNaira(n) {
  if (!n && n !== 0) return '—';
  return '₦' + Math.round(n).toLocaleString('en-NG');
}

function toNaira(amount, currency) {
  return amount * (EXCHANGE[currency] || 1620);
}

export default function BudgetCalculator() {
  const [city, setCity] = useState('');
  const [visaType, setVisaType] = useState('student');
  const [months, setMonths] = useState(6);
  const [overrides, setOverrides] = useState({});
  const [expanded, setExpanded] = useState({});
  const [calculated, setCalculated] = useState(false);

  const cityInfo = CITY_DATA[city];
  const cur = cityInfo?.currency || 'CAD';
  const countryCode = city?.split(', ')[1] || '';

  const flightNaira = toNaira(FLIGHT_COSTS[countryCode] || 1100, 'USD');

  const visaItems = useMemo(() => {
    if (!countryCode) return [];
    return getVisaItems(countryCode, visaType);
  }, [countryCode, visaType]);

  const visaTotalNaira = useMemo(() => {
    return visaItems.reduce((sum, item) => sum + toNaira(item.amount, item.currency), 0);
  }, [visaItems]);

  const settleNaira = toNaira(cityInfo?.settleEst || 2500, cur);

  const monthlyItems = useMemo(() => {
    if (!cityInfo) return [];
    return [
      { key: 'rent',      label: 'Rent (1-bed apartment)',  default: cityInfo.rent1br },
      { key: 'food',      label: 'Food & Groceries',        default: cityInfo.food },
      { key: 'transport', label: 'Transport (monthly pass)', default: cityInfo.transport },
      { key: 'utilities', label: 'Utilities & Internet',    default: cityInfo.utilities },
      { key: 'misc',      label: 'Miscellaneous / Personal', default: cityInfo.misc },
    ];
  }, [cityInfo]);

  const monthlyTotal = useMemo(() => {
    return monthlyItems.reduce((sum, item) => {
      const val = overrides[item.key] !== undefined ? Number(overrides[item.key]) : item.default;
      return sum + toNaira(val, cur);
    }, 0);
  }, [monthlyItems, overrides, cur]);

  const totalSavings = useMemo(() => {
    return flightNaira + visaTotalNaira + settleNaira + (monthlyTotal * months);
  }, [flightNaira, visaTotalNaira, settleNaira, monthlyTotal, months]);

  const setOverride = (key, val) => setOverrides(o => ({ ...o, [key]: val }));
  const toggle = (key) => setExpanded(e => ({ ...e, [key]: !e[key] }));

  const cityGroups = [
    { label: 'Canada',        cities: ['Toronto, CA', 'Vancouver, CA', 'Calgary, CA', 'Ottawa, CA'] },
    { label: 'United Kingdom', cities: ['London, GB', 'Manchester, GB', 'Birmingham, GB', 'Edinburgh, GB'] },
    { label: 'Sweden',         cities: ['Stockholm, SE', 'Gothenburg, SE', 'Uppsala, SE', 'Lund, SE'] },
    { label: 'USA',            cities: ['New York, US', 'Houston, US', 'Dallas, US', 'Atlanta, US'] },
    { label: 'Germany',        cities: ['Berlin, DE', 'Munich, DE'] },
    { label: 'Australia',      cities: ['Sydney, AU', 'Melbourne, AU'] },
    { label: 'Other',          cities: ['Dublin, IE', 'Amsterdam, NL', 'Lisbon, PT', 'Dubai, AE'] },
  ];

  return (
    <div className="min-h-screen bg-background py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 border border-primary/20 bg-primary/5 rounded-full px-4 py-1.5 mb-5">
            <Calculator className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary">Relocation Budget Tool</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            How much do you need<br className="hidden sm:block" /> to move abroad?
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            Estimated cost breakdown including visa fees, mandatory deposits, health surcharges, language tests, and monthly living costs — all converted to Naira.
          </p>
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 mt-4">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
            <span className="text-xs text-amber-700 font-medium">All figures are estimates — verify with official sources before making financial decisions</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left — Config */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-card border border-border rounded-2xl p-6 space-y-5">
              <h2 className="font-heading font-bold text-base">Your Plan</h2>

              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 block">Target City</label>
                <Select value={city} onValueChange={v => { setCity(v); setOverrides({}); setCalculated(false); }}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a city..." />
                  </SelectTrigger>
                  <SelectContent className="max-h-72">
                    {cityGroups.map(group => (
                      <React.Fragment key={group.label}>
                        <div className="px-2 py-1.5 text-xs font-bold text-muted-foreground uppercase tracking-wide">{group.label}</div>
                        {group.cities.map(c => (
                          <SelectItem key={c} value={c} className="pl-4">{c.split(', ')[0]}</SelectItem>
                        ))}
                      </React.Fragment>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 block">Visa / Move Type</label>
                <Select value={visaType} onValueChange={v => { setVisaType(v); setCalculated(false); }}>
                  <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {VISA_TYPES.map(v => (
                      <SelectItem key={v.id} value={v.id}>{v.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 block">
                  Savings buffer: <span className="text-primary font-bold">{months} months</span>
                </label>
                <input
                  type="range" min={3} max={24} value={months}
                  onChange={e => setMonths(Number(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>3 months</span><span>24 months</span>
                </div>
              </div>

              <Button
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-11"
                onClick={() => { if (city) setCalculated(true); }}
                disabled={!city}
              >
                Calculate <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex gap-2.5">
              <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-amber-700 leading-relaxed space-y-1.5">
                <p><strong>These are estimates only.</strong> Actual costs vary based on exchange rates, your lifestyle, school fees, and current visa prices.</p>
                <p>Tuition is <strong>not included</strong> — it varies widely by school and program.</p>
                <p>Always verify current figures with official embassy and university sources before making financial decisions.</p>
              </div>
            </div>
          </div>

          {/* Right — Results */}
          <div className="lg:col-span-2">
            {!calculated ? (
              <div className="bg-card border border-border rounded-2xl h-full flex flex-col items-center justify-center p-12 text-center min-h-[400px]">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <Calculator className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">Select a city and visa type</h3>
                <p className="text-sm text-muted-foreground">Your full budget breakdown will appear here</p>
              </div>
            ) : (
              <AnimatePresence>
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">

                  {/* Total banner */}
                  <div className="bg-foreground text-white rounded-2xl p-6">
                    <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-1">Recommended Savings Target</p>
                    <p className="font-heading text-4xl sm:text-5xl font-bold text-white">{formatNaira(totalSavings)}</p>
                    <p className="text-white/40 text-xs mt-2">
                      Flight + Visa costs + Settlement + {months} months living in {city.split(',')[0]}
                    </p>
                    <p className="text-amber-300 text-xs mt-1">Tuition fees are separate — check your specific university</p>
                  </div>

                  {/* Flight */}
                  <div className="bg-card border border-border rounded-2xl overflow-hidden">
                    <button onClick={() => toggle('flight')} className="w-full flex items-center justify-between p-5 hover:bg-muted/30 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Plane className="w-4 h-4 text-primary" />
                        </div>
                        <div className="text-left">
                          <p className="font-semibold text-sm">Flight</p>
                          <p className="text-xs text-muted-foreground">Economy, Lagos → {city.split(',')[0]}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-heading font-bold text-lg">{formatNaira(flightNaira)}</span>
                        {expanded.flight ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                      </div>
                    </button>
                    {expanded.flight && (
                      <div className="px-5 pb-5 border-t border-border pt-4 text-sm text-muted-foreground">
                        <p>Average economy return flight from Lagos (LOS) in 2025. Book 3–6 months in advance for the best price. December and summer are most expensive. One-way may be cheaper — check both.</p>
                      </div>
                    )}
                  </div>

                  {/* Visa */}
                  <div className="bg-card border border-border rounded-2xl overflow-hidden">
                    <button onClick={() => toggle('visa')} className="w-full flex items-center justify-between p-5 hover:bg-muted/30 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                          <GraduationCap className="w-4 h-4 text-primary" />
                        </div>
                        <div className="text-left">
                          <p className="font-semibold text-sm">Visa & Pre-Departure Costs</p>
                          <p className="text-xs text-muted-foreground">{VISA_TYPES.find(v => v.id === visaType)?.label} — {city}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-heading font-bold text-lg">{formatNaira(visaTotalNaira)}</span>
                        {expanded.visa ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                      </div>
                    </button>
                    {expanded.visa && (
                      <div className="px-5 pb-5 border-t border-border pt-4 space-y-3">
                        <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">Cost breakdown</p>
                        {visaItems.map((item, i) => (
                          <div key={i} className="flex items-start justify-between gap-4 pb-3 border-b border-border/50 last:border-0 last:pb-0">
                            <div className="flex-1">
                              <p className="text-sm font-medium">{item.label}</p>
                              {item.note && <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.note}</p>}
                            </div>
                            <div className="text-right shrink-0">
                              {item.amount > 0 ? (
                                <>
                                  <p className="text-sm font-bold">{item.currency} {item.amount.toLocaleString()}</p>
                                  <p className="text-xs text-muted-foreground">{formatNaira(toNaira(item.amount, item.currency))}</p>
                                </>
                              ) : (
                                <p className="text-xs text-muted-foreground">See note</p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Settlement */}
                  <div className="bg-card border border-border rounded-2xl overflow-hidden">
                    <button onClick={() => toggle('settle')} className="w-full flex items-center justify-between p-5 hover:bg-muted/30 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Home className="w-4 h-4 text-primary" />
                        </div>
                        <div className="text-left">
                          <p className="font-semibold text-sm">Initial Settlement</p>
                          <p className="text-xs text-muted-foreground">Deposit, SIM, bedding, household basics</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-heading font-bold text-lg">{formatNaira(settleNaira)}</span>
                        {expanded.settle ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                      </div>
                    </button>
                    {expanded.settle && (
                      <div className="px-5 pb-5 border-t border-border pt-4 text-sm text-muted-foreground">
                        <p>Covers: rental deposit (typically 1–2 months rent), SIM card, bedding and basic kitchen supplies, first week food, local transport card setup. Does <strong>not</strong> include first month's rent — that's in the monthly living section.</p>
                      </div>
                    )}
                  </div>

                  {/* Monthly Living */}
                  <div className="bg-card border border-border rounded-2xl overflow-hidden">
                    <button onClick={() => toggle('monthly')} className="w-full flex items-center justify-between p-5 hover:bg-muted/30 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                          <ShoppingCart className="w-4 h-4 text-primary" />
                        </div>
                        <div className="text-left">
                          <p className="font-semibold text-sm">Monthly Living × {months} months</p>
                          <p className="text-xs text-muted-foreground">{formatNaira(monthlyTotal)}/month in {city.split(',')[0]}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-heading font-bold text-lg">{formatNaira(monthlyTotal * months)}</span>
                        {expanded.monthly ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                      </div>
                    </button>
                    {expanded.monthly && (
                      <div className="px-5 pb-5 border-t border-border pt-4 space-y-4">
                        <p className="text-xs text-muted-foreground">All figures in {cur}. Adjust for your lifestyle:</p>
                        {monthlyItems.map(item => {
                          const val = overrides[item.key] !== undefined ? overrides[item.key] : item.default;
                          return (
                            <div key={item.key} className="flex items-center gap-3">
                              <label className="text-sm flex-1 text-foreground">{item.label}</label>
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-muted-foreground font-mono">{cur}</span>
                                <Input
                                  type="number"
                                  value={val}
                                  onChange={e => setOverride(item.key, e.target.value)}
                                  className="w-28 h-8 text-sm text-right"
                                />
                                <span className="text-xs text-muted-foreground w-28 text-right">{formatNaira(toNaira(Number(val), cur))}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <p className="font-heading font-bold text-sm">Ready to start planning?</p>
                      <p className="text-xs text-muted-foreground">Get the full {city?.split(', ')[0]} guide with step-by-step visa process, job strategies, and university picks</p>
                    </div>
                    <Link to="/pricing">
                      <Button className="bg-primary hover:bg-primary/90 text-white font-bold gap-2 shrink-0">
                        Get the Guide <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
