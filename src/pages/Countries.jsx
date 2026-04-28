import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { COUNTRIES } from '@/lib/countries';

export default function Countries() {
  const [search, setSearch] = useState('');
  
  const filtered = COUNTRIES.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            Explore <span className="text-primary">Countries</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Choose a country and get a complete relocation guide tailored for Nigerians.
          </p>
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search countries..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 h-12 rounded-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {filtered.map((country, index) => (
            <motion.div
              key={country.code}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link to={`/country/${country.code}`} className="group block">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-muted">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-xl sm:text-3xl">{country.flag}</span>
                      <div>
                        <h3 className="text-white font-heading text-sm sm:text-xl font-bold leading-tight">{country.name}</h3>
                        <p className="text-white/60 text-[10px] sm:text-sm hidden sm:block">View full guide →</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            No countries found matching "{search}"
          </div>
        )}
      </div>
    </div>
  );
}