import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Plane, Home, ShoppingCart, Briefcase, GraduationCap, Info, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from 'react-router-dom';

// Naira exchange rates (approximate, mid-2025)
const EXCHANGE = { USD: 1620, GBP: 2060, EUR: 1750, CAD: 1190, AUD: 1060, SEK: 155, NOK: 150, DKK: 235, PLN: 400, CZK: 70, AED: 441 };

const CITY_DATA = {
  // Canada
  'Toronto, CA':     { currency: 'CAD', rent1br: 2400, food: 600, transport: 160, utilities: 140, misc: 300, visaFee: 185, settleEst: 3000 },
  'Vancouver, CA':   { currency: 'CAD', rent1br: 2600, food: 650, transport: 100, utilities: 120, misc: 300, visaFee: 185, settleEst: 3000 },
  'Calgary, CA':     { currency: 'CAD', rent1br: 1900, food: 550, transport: 120, utilities: 130, misc: 250, visaFee: 185, settleEst: 2500 },
  // UK
  'London, GB':      { currency: 'GBP', rent1br: 2200, food: 400, transport: 165, utilities: 150, misc: 300, visaFee: 490, settleEst: 2000 },
  'Manchester, GB':  { currency: 'GBP', rent1br: 1100, food: 350, transport: 80,  utilities: 130, misc: 250, visaFee: 490, settleEst: 1500 },
  'Birmingham, GB':  { currency: 'GBP', rent1br: 950,  food: 330, transport: 75,  utilities: 120, misc: 220, visaFee: 490, settleEst: 1500 },
  // USA
  'New York, US':    { currency: 'USD', rent1br: 3500, food: 600, transport: 130, utilities: 180, misc: 400, visaFee: 185, settleEst: 3500 },
  'Houston, US':     { currency: 'USD', rent1br: 1400, food: 450, transport: 100, utilities: 150, misc: 250, visaFee: 185, settleEst: 2500 },
  'Dallas, US':      { currency: 'USD', rent1br: 1500, food: 450, transport: 100, utilities: 140, misc: 250, visaFee: 185, settleEst: 2500 },
  'Atlanta, US':     { currency: 'USD', rent1br: 1600, food: 400, transport: 90,  utilities: 130, misc: 220, visaFee: 185, settleEst: 2000 },
  // Germany
  'Berlin, DE':      { currency: 'EUR', rent1br: 1400, food: 400, transport: 86,  utilities: 160, misc: 250, visaFee: 75,  settleEst: 2000 },
  'Munich, DE':      { currency: 'EUR', rent1br: 1900, food: 450, transport: 90,  utilities: 170, misc: 300, visaFee: 75,  settleEst: 2500 },
  // Australia
  'Sydney, AU':      { currency: 'AUD', rent1br: 2800, food: 600, transport: 180, utilities: 150, misc: 300, visaFee: 650, settleEst: 3000 },
  'Melbourne, AU':   { currency: 'AUD', rent1br: 2200, food: 580, transport: 160, utilities: 140, misc: 280, visaFee: 650, settleEst: 2800 },
  // Ireland
  'Dublin, IE':      { currency: 'EUR', rent1br: 2200, food: 500, transport: 140, utilities: 160, misc: 300, visaFee: 100, settleEst: 2500 },
  // Netherlands
  'Amsterdam, NL':   { currency: 'EUR', rent1br: 2000, food: 450, transport: 100, utilities: 150, misc: 280, visaFee: 192, settleEst: 2500 },
  // UAE
  'Dubai, AE':       { currency: 'AED', rent1br: 7000, food: 1200, transport: 500, utilities: 400, misc: 800, visaFee: 700, settleEst: 5000 },
  // Poland
  'Warsaw, PL':      { currency: 'PLN', rent1br: 3500, food: 1500, transport: 120, utilities: 400, misc: 600, visaFee: 80, settleEst: 5000 },
  // Portugal
  'Lisbon, PT':      { currency: 'EUR', rent1br: 1600, food: 400, transport: 40,  utilities: 100, misc: 200, visaFee: 90, settleEst: 2000 },
};

const VISA_EXTRAS = {
  student:           { label: 'Student Visa',         extra: { schoolFees: 5000, gic: 0, sevis: 0 } },
  work:              { label: 'Work Visa',             extra: { schoolFees: 0,    gic: 0, sevis: 0 } },
  visitor:           { label: 'Visitor Visa',          extra: { schoolFees: 0,    gic: 0, sevis: 0 } },
  permanent_residency: { label: 'Permanent Residency',extra: { schoolFees: 0,    gic: 0, sevis: 0 } },
};

const FLIGHT_COSTS = {
  CA: 1350, US: 1100, GB: 650, DE: 700, AU: 1800, IE: 680, NL: 710, AE: 550, PL: 620, PT: 660, SE: 700, ZA: 400,
};

function formatNaira(n) {
  return '₦' + Math.round(n).toLocaleString('en-NG');
}

function toNaira(amount, currency) {
  return amount * (EXCHANGE[currency] || 1620);
}

const SECTIONS = [
  { key: 'flight', label: 'Flight', icon: Plane },
  { key: 'visa', label: 'Visa & Documents', icon: GraduationCap },
  { key: 'settle', label: 'Initial Settlement', icon: Home },
  { key: 'monthly', label: 'Monthly Living', icon: ShoppingCart },
];

export default function BudgetCalculator() {
  const [city, setCity] = useState('');
  const [visaType, setVisaType] = useState('student');
  const [months, setMonths] = useState(6);
  const [overrides, setOverrides] = useState({});
  const [expanded, setExpanded] = useState({});
  const [calculated, setCalculated] = useState(false);

  const cityInfo = CITY_DATA[city];
  const cur = cityInfo?.currency || 'USD';
  const countryCode = city?.split(', ')[1] || 'US';

  const flightNaira = toNaira(FLIGHT_COSTS[countryCode] || 1100, 'USD');
  const visaFeeNaira = toNaira(cityInfo?.visaFee || 185, 'USD');
  const settleNaira = toNaira(cityInfo?.settleEst || 2500, cur);

  const monthlyItems = useMemo(() => {
    if (!cityInfo) return [];
    return [
      { key: 'rent', label: 'Rent (1-bed)', default: cityInfo.rent1br },
      { key: 'food', label: 'Food & Groceries', default: cityInfo.food },
      { key: 'transport', label: 'Transport', default: cityInfo.transport },
      { key: 'utilities', label: 'Utilities & Internet', default: cityInfo.utilities },
      { key: 'misc', label: 'Miscellaneous', default: cityInfo.misc },
    ];
  }, [cityInfo]);

  const monthlyTotal = useMemo(() => {
    return monthlyItems.reduce((sum, item) => {
      const val = overrides[item.key] !== undefined ? Number(overrides[item.key]) : item.default;
      return sum + toNaira(val, cur);
    }, 0);
  }, [monthlyItems, overrides, cur]);

  const totalSavings = useMemo(() => {
    return flightNaira + visaFeeNaira + settleNaira + (monthlyTotal * months);
  }, [flightNaira, visaFeeNaira, settleNaira, monthlyTotal, months]);

  const setOverride = (key, val) => setOverrides(o => ({ ...o, [key]: val }));
  const toggle = (key) => setExpanded(e => ({ ...e, [key]: !e[key] }));

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 border border-primary/20 bg-primary/5 rounded-full px-4 py-1.5 mb-5">
            <Calculator className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary">Relocation Budget Tool</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">How much do you need<br />to move abroad?</h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            Enter your target city and visa type for a realistic cost estimate in Naira. Figures are based on current data — adjust any field for your situation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left — Config */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
              <h2 className="font-heading font-bold text-base">Your Plan</h2>

              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 block">Target City</label>
                <Select value={city} onValueChange={v => { setCity(v); setOverrides({}); setCalculated(false); }}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a city..." />
                  </SelectTrigger>
                  <SelectContent className="max-h-64">
                    {Object.keys(CITY_DATA).map(c => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 block">Visa Type</label>
                <Select value={visaType} onValueChange={setVisaType}>
                  <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {Object.entries(VISA_EXTRAS).map(([k, v]) => (
                      <SelectItem key={k} value={k}>{v.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 block">
                  Months of savings buffer: <span className="text-primary font-bold">{months}</span>
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

            {/* Disclaimer */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex gap-2.5">
              <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-amber-700 leading-relaxed">
                These are estimates based on 2025 average data. Actual costs vary. Always research current rates before making decisions.
              </p>
            </div>
          </div>

          {/* Right — Results */}
          <div className="lg:col-span-2">
            {!calculated ? (
              <div className="bg-card border border-border rounded-2xl h-full flex flex-col items-center justify-center p-12 text-center min-h-[400px]">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <Calculator className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">Select a city to get started</h3>
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
                      Flight + Visa + Settlement + {months} months living in {city}
                    </p>
                  </div>

                  {/* Breakdown cards */}
                  {/* Flight */}
                  <div className="bg-card border border-border rounded-2xl overflow-hidden">
                    <button
                      onClick={() => toggle('flight')}
                      className="w-full flex items-center justify-between p-5 hover:bg-muted/30 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Plane className="w-4 h-4 text-primary" />
                        </div>
                        <div className="text-left">
                          <p className="font-semibold text-sm">Flight (Economy, Round-trip Estimate)</p>
                          <p className="text-xs text-muted-foreground">Lagos → {city.split(',')[0]}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-heading font-bold text-lg">{formatNaira(flightNaira)}</span>
                        {expanded.flight ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                      </div>
                    </button>
                    {expanded.flight && (
                      <div className="px-5 pb-5 border-t border-border pt-4 text-sm text-muted-foreground">
                        <p>Average economy flight from Lagos (LOS) to {city.split(',')[0]}. Book 3–6 months in advance for best prices. Prices vary by season — December and June are most expensive.</p>
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
                          <p className="font-semibold text-sm">Visa & Application Fees</p>
                          <p className="text-xs text-muted-foreground">{VISA_EXTRAS[visaType].label} — {city.split(', ')[1]}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-heading font-bold text-lg">{formatNaira(visaFeeNaira)}</span>
                        {expanded.visa ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                      </div>
                    </button>
                    {expanded.visa && (
                      <div className="px-5 pb-5 border-t border-border pt-4 text-sm text-muted-foreground space-y-1">
                        <p>Visa application fee: ~${cityInfo?.visaFee} USD. Additional costs may include biometrics, document translation, medical exams, and courier fees. Budget an extra $200–500 for these.</p>
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
                          <p className="font-semibold text-sm">Initial Settlement Costs</p>
                          <p className="text-xs text-muted-foreground">Deposit, SIM, basics, bedding, first week supplies</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-heading font-bold text-lg">{formatNaira(settleNaira)}</span>
                        {expanded.settle ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                      </div>
                    </button>
                    {expanded.settle && (
                      <div className="px-5 pb-5 border-t border-border pt-4 text-sm text-muted-foreground">
                        <p>Covers: rental deposit (1–2 months), SIM card, basic furniture/bedding, household supplies, first week food. Does not include first month's rent.</p>
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
                          <p className="font-semibold text-sm">Monthly Cost of Living × {months}</p>
                          <p className="text-xs text-muted-foreground">{formatNaira(monthlyTotal)}/month in {city.split(',')[0]}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-heading font-bold text-lg">{formatNaira(monthlyTotal * months)}</span>
                        {expanded.monthly ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                      </div>
                    </button>
                    {expanded.monthly && (
                      <div className="px-5 pb-5 border-t border-border pt-4 space-y-3">
                        <p className="text-xs text-muted-foreground">Adjust to match your lifestyle:</p>
                        {monthlyItems.map(item => {
                          const val = overrides[item.key] !== undefined ? overrides[item.key] : item.default;
                          return (
                            <div key={item.key} className="flex items-center gap-3">
                              <label className="text-sm flex-1">{item.label}</label>
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-muted-foreground">{cur}</span>
                                <Input
                                  type="number"
                                  value={val}
                                  onChange={e => setOverride(item.key, e.target.value)}
                                  className="w-28 h-8 text-sm text-right"
                                />
                                <span className="text-xs text-muted-foreground w-32 text-right">{formatNaira(toNaira(Number(val), cur))}</span>
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
                      <p className="text-xs text-muted-foreground">Get the full {city?.split(', ')[0]} guide with visa timelines and job strategies</p>
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