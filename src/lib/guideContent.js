// Guide content for each country, organised by student level
// levels: undergrad | masters | phd | work

export const GUIDE_CONTENT = {

  // ─────────────────────────────────────────────
  // CANADA
  // ─────────────────────────────────────────────
  CA: {
    tagline: "One of the most Nigerian-friendly countries for students and skilled workers",
    overview: "Canada is consistently one of the top destinations for Nigerians. The immigration system is points-based, transparent, and actively welcomes international students and skilled workers. With a clear path from student visa → post-graduation work permit → permanent residency, many Nigerians have built full lives here.",

    stats: {
      undergrad:  { tuition: "CAD 20,000–35,000/yr", living: "CAD 12,000–18,000/yr", processing: "4–8 weeks", acceptance: "~65%", minIELTS: "6.0", currency: "CAD" },
      masters:    { tuition: "CAD 18,000–40,000/yr", living: "CAD 12,000–18,000/yr", processing: "4–8 weeks", acceptance: "~55%", minIELTS: "6.5", currency: "CAD" },
      phd:        { tuition: "Often fully funded", living: "CAD 12,000–18,000/yr", processing: "4–8 weeks", acceptance: "~40%", minIELTS: "6.5", currency: "CAD" },
      work:       { salary: "CAD 45,000–90,000/yr", processing: "2–6 months", pathway: "Express Entry / LMIA", minIELTS: "6.0", currency: "CAD" },
    },

    visa: {
      undergrad: `**Study Permit (Undergraduate)**

To study in Canada as an undergrad Nigerian, you need a Study Permit — not a visa. Here's exactly how it works:

**Step 1 — Get your Letter of Acceptance (LOA)**
Apply to a Designated Learning Institution (DLI). Popular choices for Nigerians: University of Toronto, University of British Columbia, Ryerson (now Toronto Metropolitan), York University, University of Calgary.

**Step 2 — Prove your finances**
You must show you can cover:
• First year tuition (varies by school, typically CAD 20,000–35,000)
• Living costs: CAD 10,000/year (government minimum)
• Return flight home
Total minimum: approximately CAD 35,000–50,000 in accessible funds.

**Step 3 — Apply for the Study Permit online**
Apply on the IRCC website. You'll need:
• Valid Nigerian passport (min 6 months beyond your study period)
• LOA from your DLI
• Proof of funds (bank statements, scholarship letters, sponsor affidavit)
• IELTS score (minimum 6.0 overall, no band below 5.5 for most schools)
• Statement of Purpose explaining why Canada and why this program
• Biometrics (done at VFS Global in Lagos or Abuja)

**Processing time:** 4–8 weeks on average. Apply as soon as you receive your LOA.

**Important for Nigerians:**
IRCC has heightened scrutiny on Nigerian applications due to high refusal rates in past years. Your Statement of Purpose and proof of funds must be airtight. Show strong ties to Nigeria (family, property, plans to return or apply for PR legitimately).`,

      masters: `**Study Permit (Masters)**

Masters applicants from Nigeria have a strong track record in Canada. The key difference from undergrad is that funding options are more available and your academic profile carries more weight.

**Admission requirements (typical):**
• Minimum 2nd Class Upper (or 3.0/4.0 GPA) from a Nigerian university
• IELTS 6.5 overall (some programs require 7.0)
• Statement of Purpose, 2 academic reference letters
• Some programs require GRE/GMAT

**Visa process — same as undergrad but note:**
• If you have a full scholarship (VANIER, university-funded), attach the award letter — this dramatically improves your Study Permit approval odds
• Show that you have a plan: your Study Permit application should mention PGWP and ideally Express Entry as future steps

**Post-graduation:**
After completing a masters (2 years), you qualify for a 3-year Post-Graduation Work Permit (PGWP). This gives you Canadian work experience, which feeds into Express Entry for PR. Many Nigerians have gone: Masters → PGWP → Express Entry → PR in 5–6 years total.`,

      phd: `**Study Permit (PhD)**

PhD programs in Canada are frequently fully funded — meaning tuition is waived and you receive a stipend (typically CAD 18,000–25,000/year from your supervisor's research grant).

**How to get a funded PhD:**
• Contact professors directly before applying. Email them about your research interests and ask if they have funding. This is standard in Canada — not pushy.
• Apply to programs where at least one professor's research aligns with yours
• NSERC and SSHRC scholarships are available to international students

**Visa process:**
Same as masters. Key advantage: a funding letter from your university makes your Study Permit application very strong — you're not a financial burden on Canada.

**Timeline:**
PhD programs are 4–5 years. After completion, you qualify for a 3-year PGWP (regardless of how long your PhD took, capped at 3 years). Combined with Canadian work experience during and after your PhD, Express Entry PR becomes straightforward.`,

      work: `**Working in Canada as a Nigerian**

There are two main pathways:

**1. Express Entry (Skilled Workers)**
Canada's points-based system for skilled workers. You create a profile and receive a Comprehensive Ranking System (CRS) score based on age, education, language, and work experience. The highest scorers get Invitations to Apply (ITA) for PR.

What helps your score:
• Canadian education or work experience (big boost)
• IELTS CLB 9+ (target 8.0+ in all bands)
• Age under 35
• Job offer from a Canadian employer (adds 50–200 points)
• Provincial Nomination (adds 600 points — almost guarantees invitation)

**2. LMIA-backed Work Permit**
A Canadian employer hires you and gets a Labour Market Impact Assessment (LMIA) showing no Canadian could fill the role. Then you get a work permit tied to that employer.

Popular sectors for Nigerians: IT/software, healthcare (nurses, doctors), engineering, finance.

**Realistic timeline:**
Apply → get LMIA-backed job offer → work permit (2–6 months processing) → build Canadian experience → Express Entry ITA → PR in 1–2 years.`,
    },

    timeline: {
      undergrad: [
        { step: "12–18 months before", title: "Research programs & scholarships", detail: "Shortlist 5–8 DLIs. Check admission requirements, tuition, and scholarship deadlines. Apply for Vanier, university-specific, and government scholarships." },
        { step: "10–12 months before", title: "Prepare language tests", detail: "Register for IELTS Academic. Target 6.5+ overall. Many Nigerians underestimate preparation time — give yourself 3 months of prep." },
        { step: "8–10 months before", title: "Submit university applications", detail: "Apply to 4–6 schools. Include personal statement, transcripts (get them attested at WAEC/NECO and notarized), and reference letters." },
        { step: "6–8 months before", title: "Receive Letter of Acceptance", detail: "Accept your offer and start gathering visa documents immediately. Don't wait." },
        { step: "5–6 months before", title: "Apply for Study Permit", detail: "Apply online via IRCC. Include LOA, proof of funds, IELTS, Statement of Purpose, biometrics. Pay CAD 150 application fee." },
        { step: "4–5 months before", title: "Biometrics at VFS Lagos/Abuja", detail: "Book VFS appointment. Bring your biometrics instruction letter, passport, and payment." },
        { step: "1–2 months before", title: "Study Permit approved", detail: "Book flights. Arrange accommodation (campus housing or off-campus). Join Nigerian student association groups on WhatsApp/Facebook." },
        { step: "Arrival", title: "Port of Entry", detail: "At the Canadian border, you'll exchange your approval letter for your actual Study Permit. Bring all original documents." },
      ],
      masters: [
        { step: "12–15 months before", title: "Contact professors & research programs", detail: "Email professors whose research aligns with yours. A positive response before applying significantly improves admission odds." },
        { step: "10–12 months before", title: "IELTS & transcripts", detail: "Target IELTS 7.0. Get your degree certificate and transcripts attested by your university and notarized." },
        { step: "8–10 months before", title: "Apply to 4–6 programs", detail: "Strong Statement of Purpose is critical. Explain your research interests, why this specific program, and your long-term goals." },
        { step: "5–7 months before", title: "Accept offer & apply for Study Permit", detail: "Once you have your LOA, apply immediately. Include scholarship award letters if any." },
        { step: "4–5 months before", title: "Biometrics & document submission", detail: "VFS Lagos or Abuja. Complete biometrics and submit any remaining documents." },
        { step: "1–2 months before", title: "Prepare for departure", detail: "Arrange housing, open a Canadian bank account online (Scotiabank StartRight is popular for Nigerian students), get SIM card plan." },
        { step: "After graduation", title: "Apply for PGWP immediately", detail: "Apply for Post-Graduation Work Permit within 180 days of receiving final grades. Don't miss this window." },
      ],
      phd: [
        { step: "18–24 months before", title: "Identify supervisors", detail: "Email 10–15 professors in your field. Attach your CV and a 1-page research proposal. Expect 1–3 positive responses." },
        { step: "12–15 months before", title: "Apply with supervisor confirmation", detail: "Apply only to programs where a professor has agreed to supervise you. This is critical for funded PhDs." },
        { step: "8–10 months before", title: "Receive offer with funding details", detail: "Confirm funding package (stipend + tuition waiver). Get this in writing before accepting." },
        { step: "5–6 months before", title: "Apply for Study Permit", detail: "Funding letter makes this application strong. Processing is usually smooth for funded PhD students." },
        { step: "Ongoing", title: "Apply for scholarships", detail: "NSERC, SSHRC, university awards. Your supervisor will guide you. These add to your stipend." },
        { step: "Year 3–4", title: "Canadian work experience", detail: "TA/RA positions give you Canadian work experience — valuable for Express Entry later." },
        { step: "After graduation", title: "PGWP → Express Entry", detail: "3-year PGWP after PhD. Build points for Express Entry. Many PhD graduates get PR within 2 years of graduation." },
      ],
      work: [
        { step: "Before applying", title: "Check your Express Entry eligibility", detail: "Use IRCC's Come to Canada tool. Calculate your CRS score. If below 450, focus on improving language scores or getting a Canadian job offer." },
        { step: "Ongoing", title: "Create Express Entry profile", detail: "Submit profile to the Express Entry pool. Monitor draw cut-offs. Average wait: 6–18 months depending on your score." },
        { step: "Job search", title: "Target LMIA-friendly employers", detail: "Apply on LinkedIn, Indeed Canada, Workopolis. Focus on tech, healthcare, engineering firms that sponsor work permits. Use the Job Bank on the IRCC site." },
        { step: "On job offer", title: "Employer gets LMIA", detail: "Your employer applies for LMIA (takes 2–3 months). Once approved, you apply for your work permit." },
        { step: "Work permit approved", title: "Arrive in Canada", detail: "Start working. Keep pay stubs and T4s — you'll need these for your PR application." },
        { step: "12 months of Canadian experience", title: "Apply for PR via Express Entry", detail: "Canadian Experience Class (CEC) requires 1 year of skilled work in Canada. Submit your PR application." },
      ],
    },

    tips: {
      undergrad: [
        { title: "Your WAEC/NECO results matter more than you think", body: "Many Nigerian undergrads are rejected because their secondary school results weren't properly attested. Get them verified at the WAEC office and notarized before sending to universities." },
        { title: "Don't apply to unaccredited schools", body: "Some Nigerian students get accepted into low-ranked colleges just to get a visa. IRCC knows this pattern. Stick to proper universities and colleges with strong Nigerian alumni networks." },
        { title: "The proof of funds is scrutinized hard", body: "A bank statement showing the money appeared suddenly 2 weeks ago will cause a refusal. IRCC wants to see funds that have been stable for 3–6 months. Plan ahead." },
        { title: "Get a co-signer for your GIC", body: "The Guaranteed Investment Certificate (CAD 20,635 for 2024) is mandatory for most study permits. It's held in a Canadian bank and released monthly. Some Nigerian banks can help you set this up." },
        { title: "Join Nigerian student groups before you arrive", body: "Search Facebook and WhatsApp for '[University Name] Nigerian Students'. Seniors share accommodation tips, second-hand textbooks, halal food spots, and will pick you up from the airport." },
      ],
      masters: [
        { title: "A Nigerian masters degree is highly respected", body: "Canadian universities know Lagos, Ibadan, and Zaria graduates. A strong academic record from a Nigerian university is taken seriously — don't undersell it." },
        { title: "Apply for scholarships before you need them", body: "Vanier Canada Graduate Scholarships (CAD 50,000/year) and university-specific awards are available to international students. Apply even if you think you won't get them." },
        { title: "Your Statement of Purpose can make or break you", body: "Don't write a generic essay. Name the specific professor you want to work with, reference their published paper, and explain exactly why your background fits their research. This is read by humans." },
        { title: "PGWP is your golden ticket", body: "The Post-Graduation Work Permit after a 2-year masters gives you 3 years of open work authorization. You can work anywhere in Canada. This is the clearest path to PR for Nigerians." },
        { title: "Beware of immigration consultants in Nigeria", body: "Many charge huge fees for 'guaranteed' study permit approvals. They cannot guarantee anything. Use IRCC's website directly and consult only regulated consultants (check ICCRC registry)." },
      ],
      phd: [
        { title: "Email professors directly — it's expected", body: "In Nigeria, this might feel presumptuous. In Canada, emailing a professor to express research interest is standard practice. Keep it professional, specific, and concise (max 5 sentences)." },
        { title: "Funded PhDs are real and available for Nigerians", body: "Many Nigerian PhD holders in Canada had their tuition fully paid with a monthly stipend. This is not a scam — it's how North American PhD programs work. Target research universities (U of T, UBC, McGill, Waterloo)." },
        { title: "Your stipend is taxable income", body: "File a tax return every year. You may get a significant refund as an international student. Use TurboTax or go to a student tax clinic on campus (usually free)." },
        { title: "PR is almost guaranteed if you complete your PhD", body: "A PhD + Canadian work experience from TA/RA positions puts your Express Entry CRS score very high. Many Nigerian PhD graduates get PR within 1–2 years of finishing." },
      ],
      work: [
        { title: "LinkedIn is non-negotiable", body: "Canadian recruiters actively search LinkedIn. A complete profile with 'Open to Work' and your Canadian location preference gets you inbound messages. Nigerian engineers especially are in demand in tech." },
        { title: "Your NYSC certificate matters for credential recognition", body: "Include your NYSC discharge certificate in your qualifications. It shows you completed your professional service requirement — Canadian employers sometimes ask about gaps in your resume." },
        { title: "Get your credentials evaluated (WES)", body: "World Education Services (WES) evaluation of your Nigerian degree is required for Express Entry. It costs around CAD 250 and takes 7–9 weeks. Do this first before anything else." },
        { title: "Provincial Nominee Programs are faster than Express Entry", body: "Alberta, Saskatchewan, and Manitoba actively recruit Nigerians in healthcare and trades. A Provincial Nomination adds 600 points to your Express Entry score — almost a guaranteed PR invitation." },
        { title: "Don't come on a visitor visa hoping to find work", body: "Working without a work permit is illegal and will destroy your immigration record. Only enter Canada with the right permit for your purpose." },
      ],
    },

    universities: {
      undergrad: [
        { name: "University of Toronto", location: "Toronto, ON", known_for: "Medicine, Engineering, Business", avg_tuition: "CAD 45,000/yr", acceptance: "43%", nigerian_community: "Very large" },
        { name: "University of British Columbia", location: "Vancouver, BC", known_for: "Forestry, Medicine, Sciences", avg_tuition: "CAD 38,000/yr", acceptance: "52%", nigerian_community: "Large" },
        { name: "York University", location: "Toronto, ON", known_for: "Business, Law, Arts", avg_tuition: "CAD 28,000/yr", acceptance: "72%", nigerian_community: "Very large" },
        { name: "University of Calgary", location: "Calgary, AB", known_for: "Engineering, Energy, Business", avg_tuition: "CAD 25,000/yr", acceptance: "68%", nigerian_community: "Growing" },
        { name: "Ryerson / Toronto Metropolitan", location: "Toronto, ON", known_for: "Business, Computing, Media", avg_tuition: "CAD 26,000/yr", acceptance: "70%", nigerian_community: "Very large" },
      ],
      masters: [
        { name: "University of Waterloo", location: "Waterloo, ON", known_for: "Computer Science, Engineering", avg_tuition: "CAD 22,000/yr", acceptance: "28%", nigerian_community: "Large" },
        { name: "McGill University", location: "Montreal, QC", known_for: "Medicine, Law, Sciences", avg_tuition: "CAD 20,000/yr", acceptance: "34%", nigerian_community: "Medium" },
        { name: "University of Ottawa", location: "Ottawa, ON", known_for: "Law, Public Policy, Bilingual programs", avg_tuition: "CAD 18,000/yr", acceptance: "55%", nigerian_community: "Growing" },
        { name: "Simon Fraser University", location: "Vancouver, BC", known_for: "Business, Computing, Communications", avg_tuition: "CAD 19,000/yr", acceptance: "48%", nigerian_community: "Medium" },
      ],
      phd: [
        { name: "University of Toronto", location: "Toronto, ON", known_for: "All disciplines — top research output", avg_tuition: "Often funded", acceptance: "~15%", nigerian_community: "Very large" },
        { name: "University of British Columbia", location: "Vancouver, BC", known_for: "Sciences, Engineering, Medicine", avg_tuition: "Often funded", acceptance: "~18%", nigerian_community: "Large" },
        { name: "University of Waterloo", location: "Waterloo, ON", known_for: "Engineering, Quantum Computing, Math", avg_tuition: "Often funded", acceptance: "~20%", nigerian_community: "Large" },
      ],
      work: [],
    },

    embassy: {
      name: "Canadian High Commission Nigeria",
      address: "15A Bobo Street, Maitama, Abuja",
      website: "https://www.canada.ca/en/immigration-refugees-citizenship.html",
      visa_apply: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/apply.html",
      vfs: "https://www.vfsglobal.ca/canada/nigeria/",
      official_immigration: "https://www.canada.ca/en/immigration-refugees-citizenship.html",
      extra_links: [
        { label: "IRCC Study Permit Portal", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/apply.html" },
        { label: "Express Entry Profile", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/apply-permanent-residence.html" },
        { label: "WES Credential Evaluation", url: "https://www.wes.org/ca/" },
        { label: "VFS Global Nigeria (Biometrics)", url: "https://www.vfsglobal.ca/canada/nigeria/" },
        { label: "Designated Learning Institutions List", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare/designated-learning-institutions-list.html" },
      ],
    },

    scholarships: {
      undergrad: [
        { name: "Lester B. Pearson International Scholarship", amount: "Full tuition + living", university: "University of Toronto", deadline: "Varies — check annually", url: "https://future.utoronto.ca/pearson/" },
        { name: "York University International Student Scholarship", amount: "Up to CAD 140,000 over 4 years", university: "York University", deadline: "February each year", url: "https://futurestudents.yorku.ca/scholarships" },
        { name: "UBC International Major Entrance Scholarship", amount: "Up to CAD 40,000/yr", university: "University of British Columbia", deadline: "December each year", url: "https://you.ubc.ca/financial-planning/awards-scholarships/" },
      ],
      masters: [
        { name: "Vanier Canada Graduate Scholarship", amount: "CAD 50,000/year × 3 years", university: "All major Canadian universities", deadline: "November each year", url: "https://vanier.gc.ca/" },
        { name: "Ontario Graduate Scholarship", amount: "CAD 10,000–15,000/year", university: "Ontario universities", deadline: "Varies by university", url: "https://osap.gov.on.ca/OSAPPortal/en/A-ZListofAid/PRDR019245.html" },
      ],
      phd: [
        { name: "Vanier Canada Graduate Scholarship", amount: "CAD 50,000/year × 3 years", university: "All major Canadian universities", deadline: "November each year", url: "https://vanier.gc.ca/" },
        { name: "NSERC Doctoral Award", amount: "CAD 21,000/year", university: "Science/Engineering programs", deadline: "October each year", url: "https://www.nserc-crsng.gc.ca/" },
      ],
      work: [],
    },
  },

  // ─────────────────────────────────────────────
  // UNITED KINGDOM
  // ─────────────────────────────────────────────
  GB: {
    tagline: "Cultural familiarity, world-class universities, and a clear post-study work route",
    overview: "The UK is the most culturally familiar western country for Nigerians — English language, similar legal system, large Nigerian diaspora, and universities that actively recruit Nigerian students. The Student visa process is well-defined, and the Graduate Route (2-year open work permit after graduation) has made the UK much more attractive since 2021.",

    stats: {
      undergrad:  { tuition: "£14,000–£38,000/yr", living: "£12,000–£18,000/yr", processing: "3 weeks", acceptance: "~70%", minIELTS: "5.5–6.0", currency: "GBP" },
      masters:    { tuition: "£15,000–£40,000/yr", living: "£12,000–£18,000/yr", processing: "3 weeks", acceptance: "~65%", minIELTS: "6.0–6.5", currency: "GBP" },
      phd:        { tuition: "£15,000–£25,000/yr (often funded)", living: "£12,000–£18,000/yr", processing: "3 weeks", acceptance: "~35%", minIELTS: "6.5", currency: "GBP" },
      work:       { salary: "£28,000–£65,000/yr", processing: "3–8 weeks", pathway: "Skilled Worker Visa", minIELTS: "English proficiency required", currency: "GBP" },
    },

    visa: {
      undergrad: `**UK Student Visa (Undergraduate)**

The UK Student Visa (formerly Tier 4) is one of the most straightforward international student visas for Nigerians, partly because the UK has a huge Nigerian student population and a well-oiled process.

**Step 1 — Get your Confirmation of Acceptance for Studies (CAS)**
Once you accept a university offer and meet all conditions, your university issues a CAS number. This is your key document — do not apply for the visa without it.

**Step 2 — Prove your finances**
You must show funds held for at least 28 consecutive days before your visa application:
• Tuition for Year 1 (e.g., £20,000)
• Living costs: £1,334/month (London) or £1,023/month (outside London) × 9 months
• Total minimum: approximately £30,000–£50,000 depending on location and tuition

**Step 3 — Apply online and book your biometrics**
Apply on the UK Visas and Immigration (UKVI) website. You'll need:
• CAS number from your university
• Valid Nigerian passport
• Bank statements (28-day rule — funds must have been in account for 28+ days)
• IELTS UKVI or Pearson PTE Academic (not standard IELTS — must be UKVI-approved)
• TB test certificate from a UKBA-approved clinic in Nigeria (IOM Lagos or Abuja)
• Immigration Health Surcharge (IHS) payment — £776/year for students
• Biometrics at TLScontact or VFS Global in Lagos, Abuja, or Port Harcourt

**Processing:** Usually within 3 weeks. Apply no earlier than 6 months before course start.

**Graduate Route — your biggest advantage:**
After completing your degree, you can apply for the Graduate Route visa — 2 years of open work authorization (3 years for PhD). You don't need a job offer. This lets you work anywhere in the UK while you job-hunt for a Skilled Worker sponsor.`,

      masters: `**UK Student Visa (Masters)**

Masters programs in the UK are typically 1 year (sometimes 2 for MRes/MPhil), which is shorter and cheaper than many other countries. This makes the UK very cost-effective for Nigerian masters students.

**Admission requirements (typical):**
• 2:1 or First Class degree from a Nigerian university (UK universities know Nigerian grading)
• IELTS Academic UKVI — minimum 6.5 overall (some programs: 7.0)
• Personal statement, 2 references
• Some programs (MBA, Finance): work experience required

**Key differences from undergrad application:**
• Your CAS will specify the exact course, fees, and start date — verify it's correct
• Shorter program = faster route to Graduate Route visa
• After 1-year masters + 2-year Graduate Route, you have 3 years total UK work experience

**Funding options for Nigerian masters students:**
• Chevening Scholarship (fully funded — see Scholarships section)
• Commonwealth Shared Scholarship
• University-specific bursaries (check each university's international page)
• Nigerian Tertiary Education Trust Fund (TETFund) — if sponsored by your Nigerian institution

**Important:** The IELTS UKVI test is different from the regular IELTS. Book specifically "IELTS for UKVI" — a standard IELTS Academic result is NOT accepted for UK Student visa applications.`,

      phd: `**UK Student Visa (PhD)**

UK PhDs are 3–4 years and often come with partial or full funding. The visa process is the same as other students, but funded applicants have a significant advantage.

**Getting funded:**
• UKRI Doctoral Studentships — competitive but open to international students at many universities
• University-funded positions (advertised on jobs.ac.uk and FindAPhD.com)
• Commonwealth Scholarship — fully funded for Nigerian PhD students
• Chevening doesn't cover PhD but some universities offer matching funds

**Contacting supervisors:**
Same approach as Canada — email professors directly. UK academics expect this. Your email should include: your research area, one specific reference to their work, and your CV. Keep it under 200 words.

**Visa advantage for funded students:**
If your university covers tuition and provides a stipend, your CAS will show £0 tuition. You still need to show living cost funds (£1,023–£1,334/month × 9 months), but the total required is much lower.

**After PhD — Graduate Route:**
PhD graduates get a 3-year Graduate Route visa. Combined with your research experience, this gives you substantial time to find a Skilled Worker sponsor and potentially settle in the UK long-term.`,

      work: `**Working in the UK as a Nigerian**

**Skilled Worker Visa**
The main route. Your employer must be a licensed sponsor, offer you a job at the required salary threshold (£26,200 minimum, higher for some roles), and your job must be on the eligible occupations list.

Popular sectors for Nigerians: NHS (nurses, doctors, pharmacists), IT, engineering, finance, social work, education.

**NHS — the most Nigerian-friendly route:**
The NHS is one of the largest employers of Nigerians in the world. Nurses, doctors, and allied health professionals are actively recruited. The NHS has a dedicated international recruitment program. Salary: £28,000–£55,000 depending on band and experience.

Steps:
1. Get your NMC (nursing) or GMC (medicine) registration — this requires a competency assessment
2. Find an NHS trust with a sponsor license
3. They apply for your Certificate of Sponsorship
4. You apply for your Skilled Worker visa

**Graduate Route first:**
If you studied in the UK, use your 2-year Graduate Route to get UK work experience. This makes getting a Skilled Worker sponsor much easier because you have a local track record.

**Indefinite Leave to Remain (ILR):**
After 5 years on a Skilled Worker visa, you can apply for ILR (permanent residence). After 1 more year, you can apply for British citizenship. Many Nigerians have taken this route.`,
    },

    timeline: {
      undergrad: [
        { step: "12–18 months before", title: "Research UCAS applications", detail: "The UK uses a central system (UCAS) for undergrad applications. You can apply to up to 5 universities. Deadline is usually January 15th for most courses." },
        { step: "10–12 months before", title: "Book IELTS UKVI Academic", detail: "Must be IELTS for UKVI specifically. Target 6.0+. Book early — test dates fill up in Nigeria." },
        { step: "8–10 months before", title: "Submit UCAS application", detail: "Write a strong personal statement (4,000 characters). Have it reviewed by someone who knows the UK system." },
        { step: "5–7 months before", title: "Receive and accept offers", detail: "You'll get Conditional or Unconditional offers. Accept your Firm and Insurance choices on UCAS." },
        { step: "4–5 months before", title: "Meet conditions & receive CAS", detail: "Submit final results, pay deposit. University issues your CAS number." },
        { step: "3–4 months before", title: "Apply for UK Student Visa", detail: "Apply online. Pay IHS (£776/year × years of study). Book biometrics at TLScontact Lagos/Abuja/PH." },
        { step: "3 months before", title: "TB test at IOM clinic", detail: "Mandatory. Book IOM Lagos or Abuja appointment. Results valid for 6 months." },
        { step: "2–3 months before", title: "Visa approved — prepare to travel", detail: "Book flights, arrange airport pickup, join your university's Nigerian/African society WhatsApp group." },
      ],
      masters: [
        { step: "12 months before", title: "Research programs & apply to Chevening", detail: "Chevening deadline is usually November. Apply even if you're not sure — the essay-writing process helps clarify your goals." },
        { step: "9–10 months before", title: "Apply directly to universities", detail: "Most UK universities accept rolling applications but competitive programs fill early. Apply by December–January for September start." },
        { step: "6–8 months before", title: "Receive offers & CAS", detail: "Accept your offer, pay the deposit (usually £3,000–£5,000), and your university will issue your CAS." },
        { step: "3–4 months before", title: "Apply for Student Visa", detail: "Apply online, pay IHS (£776 × length of course), submit biometrics at TLScontact." },
        { step: "3 months before", title: "TB test", detail: "IOM-approved clinic in Lagos or Abuja. Mandatory for Nigerian passport holders." },
        { step: "After graduation", title: "Apply for Graduate Route immediately", detail: "Apply before your Student visa expires. You have 2 years open work authorization — use it well." },
      ],
      phd: [
        { step: "18–24 months before", title: "Find supervisor & funded position", detail: "Search FindAPhD.com and jobs.ac.uk. Email supervisors directly. Apply to advertised funded positions." },
        { step: "12 months before", title: "Apply with supervisor support", detail: "Your supervisor's support letter is critical. Some universities require a research proposal (2,000–3,000 words)." },
        { step: "6–8 months before", title: "Receive offer with funding confirmation", detail: "Get your funding package in writing. Confirm what's covered — tuition, stipend, or both." },
        { step: "3–4 months before", title: "Apply for Student Visa", detail: "Funded students typically need to show fewer personal funds. Your CAS will reflect your funding." },
        { step: "After completion", title: "Graduate Route — 3 years", detail: "PhD graduates get 3 years Graduate Route. Use this to gain work experience and find a Skilled Worker sponsor." },
      ],
      work: [
        { step: "Before applying", title: "Check eligibility & occupations list", detail: "Your job must be on the Skilled Worker eligible occupations list. Check the UK Home Office guidance." },
        { step: "Job search", title: "Find a licensed sponsor", detail: "Only employers with a sponsor license can hire you. Check the government's register of licensed sponsors before applying to jobs." },
        { step: "On job offer", title: "Employer issues Certificate of Sponsorship", detail: "Your employer issues a CoS with your job details. You use this reference number in your visa application." },
        { step: "Visa application", title: "Apply for Skilled Worker Visa", detail: "Apply online. Pay visa fee (£625–£1,500 depending on role) + IHS (£1,035/year). Process takes 3–8 weeks." },
        { step: "5 years in UK", title: "Apply for ILR", detail: "Indefinite Leave to Remain after 5 years. Then British citizenship after 1 more year if eligible." },
      ],
    },

    tips: {
      undergrad: [
        { title: "UCAS personal statement is everything", body: "UK undergrad admissions are heavily based on your personal statement. Unlike the US, there's no interview for most courses. Your 4,000-character statement needs to show genuine passion for your subject, not just achievements." },
        { title: "The 28-day bank statement rule is strict", body: "Funds must be in your account for 28 consecutive days before you apply. If money appears and disappears, your visa will be refused. Plan your finances 2 months ahead." },
        { title: "IELTS for UKVI is not the same as regular IELTS", body: "Many Nigerians book the wrong test. You need 'IELTS Academic for UKVI' — it's taken at British Council or IDP, but marked specifically for UK visa purposes. Don't make this mistake." },
        { title: "Get a UK student bank account immediately on arrival", body: "Barclays, HSBC, and Lloyds all offer student accounts. You need a UK bank account for accommodation deposits, phone plans, and to receive any bursaries. You'll need your enrollment letter and proof of address." },
        { title: "Nigerian student societies are your lifeline", body: "Every major UK university has a Nigerian student society. They organize cultural events, help with housing, share notes, and are genuinely supportive. Find them on Instagram before you arrive." },
      ],
      masters: [
        { title: "Chevening is the most prestigious and fully funded", body: "Chevening covers tuition, living costs, flights, and a stipend. Nigerian Chevening alumni are some of the most influential people in Nigeria today. Apply every year until you get it." },
        { title: "1-year masters is a feature, not a bug", body: "Some Nigerian students worry a 1-year degree isn't as valuable. It is — UK employers and international companies recognize it fully. You save money and enter the job market sooner." },
        { title: "The Graduate Route changed everything", body: "Before 2021, international students had to leave after graduating. Now you get 2 years to work freely. This makes the UK a viable long-term option, not just a study destination." },
        { title: "Living costs in London vs. everywhere else", body: "London costs roughly 30% more than other UK cities. Manchester, Birmingham, Edinburgh, and Glasgow have excellent universities and much cheaper living. Don't default to London without considering the financial impact." },
      ],
      phd: [
        { title: "Commonwealth Scholarship is Nigeria-specific", body: "The Commonwealth Shared Scholarship and Commonwealth PhD Scholarship are specifically for developing countries including Nigeria. These are fully funded and highly competitive — but Nigerians win them every year." },
        { title: "jobs.ac.uk is where funded PhDs are advertised", body: "Unlike in Nigeria, UK PhD positions are often formally advertised with salaries/stipends listed. Check jobs.ac.uk weekly. Set up email alerts for your research area." },
        { title: "Your Nigerian experience is a research advantage", body: "If you're doing research in public health, governance, economics, agriculture, or social sciences — your Nigerian context is a genuine research asset. UK supervisors are interested in African perspectives." },
      ],
      work: [
        { title: "NHS actively recruits Nigerians", body: "The NHS has partnerships with Nigerian nursing councils and medical schools. NHS trusts run recruitment drives in Lagos and Abuja. If you're a nurse or doctor, this is your clearest path to the UK." },
        { title: "Verify your employer is a licensed sponsor before applying", body: "The Home Office maintains a public register of licensed sponsors. Check it before spending time on an application. Fake job offers targeting Nigerians exist — if it seems too easy, verify everything." },
        { title: "Your Nigerian Law School call to bar works in the UK with conversion", body: "Nigerian-qualified lawyers can convert to UK qualification via the SQE (Solicitors Qualifying Examination). It's a 2-stage exam — no need to redo a full law degree." },
      ],
    },

    universities: {
      undergrad: [
        { name: "University of Manchester", location: "Manchester", known_for: "Engineering, Business, Sciences", avg_tuition: "£20,000–£26,000/yr", acceptance: "58%", nigerian_community: "Very large" },
        { name: "University of Nottingham", location: "Nottingham", known_for: "Pharmacy, Engineering, Business", avg_tuition: "£18,000–£24,000/yr", acceptance: "65%", nigerian_community: "Large" },
        { name: "University of Hertfordshire", location: "Hatfield", known_for: "Business, Computing, Engineering", avg_tuition: "£14,000–£16,000/yr", acceptance: "78%", nigerian_community: "Very large" },
        { name: "Coventry University", location: "Coventry", known_for: "Business, Engineering, Art & Design", avg_tuition: "£14,000–£18,000/yr", acceptance: "80%", nigerian_community: "Very large" },
        { name: "University of Birmingham", location: "Birmingham", known_for: "Medicine, Law, Engineering", avg_tuition: "£20,000–£28,000/yr", acceptance: "60%", nigerian_community: "Large" },
      ],
      masters: [
        { name: "London School of Economics", location: "London", known_for: "Economics, Law, Political Science", avg_tuition: "£28,000–£35,000/yr", acceptance: "16%", nigerian_community: "Medium" },
        { name: "University College London (UCL)", location: "London", known_for: "Medicine, Architecture, Sciences", avg_tuition: "£24,000–£38,000/yr", acceptance: "25%", nigerian_community: "Large" },
        { name: "University of Edinburgh", location: "Edinburgh", known_for: "Medicine, Law, Divinity", avg_tuition: "£20,000–£28,000/yr", acceptance: "42%", nigerian_community: "Medium" },
        { name: "University of Glasgow", location: "Glasgow", known_for: "Medicine, Engineering, Business", avg_tuition: "£18,000–£24,000/yr", acceptance: "50%", nigerian_community: "Medium" },
      ],
      phd: [
        { name: "Imperial College London", location: "London", known_for: "Engineering, Medicine, Science", avg_tuition: "Often funded", acceptance: "~20%", nigerian_community: "Medium" },
        { name: "University of Oxford", location: "Oxford", known_for: "All disciplines — global #1 ranked", avg_tuition: "Often funded", acceptance: "~17%", nigerian_community: "Small but prominent" },
        { name: "University of Cambridge", location: "Cambridge", known_for: "Sciences, Engineering, Humanities", avg_tuition: "Often funded", acceptance: "~18%", nigerian_community: "Small but prominent" },
      ],
      work: [],
    },

    embassy: {
      name: "British High Commission Nigeria",
      address: "Plot 1137 Shehu Shagari Way, Maitama, Abuja",
      website: "https://www.gov.uk/government/world/nigeria",
      visa_apply: "https://www.gov.uk/student-visa",
      vfs: "https://www.vfsglobal.co.uk/en/ngl/index.html",
      official_immigration: "https://www.gov.uk/browse/visas-immigration",
      extra_links: [
        { label: "UK Student Visa Application", url: "https://www.gov.uk/student-visa" },
        { label: "Graduate Route Visa", url: "https://www.gov.uk/graduate-visa" },
        { label: "Skilled Worker Visa", url: "https://www.gov.uk/skilled-worker-visa" },
        { label: "UCAS Undergraduate Applications", url: "https://www.ucas.com/" },
        { label: "Licensed Sponsors Register", url: "https://www.gov.uk/government/publications/register-of-licensed-sponsors-workers" },
        { label: "IHS Payment Portal", url: "https://www.gov.uk/healthcare-immigration-application" },
        { label: "TLScontact Nigeria (Biometrics)", url: "https://nigeria.tlscontact.com/" },
      ],
    },

    scholarships: {
      undergrad: [
        { name: "Commonwealth Shared Scholarship", amount: "Full tuition + living + flights", university: "Select UK universities", deadline: "December each year", url: "https://cscuk.fcdo.gov.uk/scholarships/commonwealth-shared-scholarships/" },
        { name: "University of Nottingham Developing Solutions", amount: "Full or 50% tuition", university: "University of Nottingham", deadline: "February each year", url: "https://www.nottingham.ac.uk/studywithus/international-applicants/scholarships-fees-and-finance/scholarships/developing-solutions-scholarships.aspx" },
      ],
      masters: [
        { name: "Chevening Scholarship", amount: "Full tuition + £14,000 living + flights", university: "All UK universities", deadline: "November each year", url: "https://www.chevening.org/" },
        { name: "Commonwealth Masters Scholarship", amount: "Full tuition + living allowance + flights", university: "Select UK universities", deadline: "December each year", url: "https://cscuk.fcdo.gov.uk/scholarships/commonwealth-master-scholarships/" },
        { name: "GREAT Scholarship", amount: "Minimum £10,000 tuition reduction", university: "Various UK universities", deadline: "Varies by university", url: "https://study-uk.britishcouncil.org/scholarships/great-scholarships" },
      ],
      phd: [
        { name: "Commonwealth PhD Scholarship", amount: "Full tuition + living stipend + flights", university: "Select UK universities", deadline: "October each year", url: "https://cscuk.fcdo.gov.uk/scholarships/commonwealth-phd-scholarships-for-lics-and-umic/" },
        { name: "UKRI Doctoral Studentships", amount: "Full tuition + £18,622/year stipend", university: "Research universities across UK", deadline: "Varies by program", url: "https://www.ukri.org/what-we-offer/developing-people-and-skills/find-studentships-and-fellowships/" },
      ],
      work: [],
    },
  },

  // ─────────────────────────────────────────────
  // SWEDEN
  // ─────────────────────────────────────────────
  SE: {
    tagline: "Free tuition for PhD students, world-class quality of life, and a growing tech hub",
    overview: "Sweden is an underrated destination for Nigerian students and professionals. It offers some of Europe's highest quality of life, a strong tech sector (Spotify, Klarna, Ericsson), and a society that genuinely values diversity and work-life balance. Masters programs are in English and world-class. PhD positions are fully funded with a salary. The challenge is higher living costs and a more competitive job market for non-EU workers.",

    stats: {
      undergrad:  { tuition: "SEK 80,000–200,000/yr (~₦3.2M–₦8M)", living: "SEK 8,000–10,000/month", processing: "4–8 weeks", acceptance: "~60%", minIELTS: "5.5–6.0", currency: "SEK" },
      masters:    { tuition: "SEK 80,000–200,000/yr (~₦3.2M–₦8M)", living: "SEK 8,000–10,000/month", processing: "4–8 weeks", acceptance: "~50%", minIELTS: "6.0–6.5", currency: "SEK" },
      phd:        { tuition: "Free — PhD is a salaried position", living: "SEK 25,000–32,000/month (your salary)", processing: "4–8 weeks", acceptance: "~15%", minIELTS: "6.5", currency: "SEK" },
      work:       { salary: "SEK 35,000–65,000/month", processing: "4–8 weeks", pathway: "EU Blue Card / Work Permit", minIELTS: "Not required — Swedish employers may test", currency: "SEK" },
    },

    visa: {
      undergrad: `**Swedish Residence Permit for Studies (Undergraduate)**

Sweden does not have a "student visa" — instead, non-EU students apply for a Residence Permit from the Swedish Migration Agency (Migrationsverket).

**Step 1 — Apply to Swedish universities via universityadmissions.se**
All Swedish university applications go through one portal. Application opens in October for autumn semester. You can apply to up to 4 programs. Application fee: SEK 900.

Note: Sweden has two semesters — Autumn (September) and Spring (January). Most international applicants target Autumn.

**Step 2 — Receive admission decision**
Decisions come in April for autumn semester. If admitted, you'll receive a formal admission letter.

**Step 3 — Apply for Residence Permit**
Apply online via Migrationsverket.se:
• Admission letter
• Valid Nigerian passport (valid for duration of studies + 3 months)
• Proof of sufficient funds: SEK 8,514/month for each month of study
• Proof of health insurance (or confirmation you'll get Swedish state insurance)
• Proof of paid tuition deposit

**Processing:** 4–8 weeks. Apply as soon as you're admitted.

**Tuition:** Nigeria is a non-EU country, so you pay full tuition (EU students study free). Tuition is typically SEK 80,000–200,000/year depending on the program. Engineering and Medicine are on the higher end.

**Work rights:** You can work unlimited hours during studies — this helps offset living costs.`,

      masters: `**Swedish Residence Permit for Studies (Masters)**

Masters programs are where Sweden truly shines for Nigerian students. Over 1,000 programs are taught fully in English at world-class universities. The teaching style is collaborative and research-oriented, very different from the rote learning many Nigerian students are used to — in a good way.

**Admission process:**
• Apply via universityadmissions.se (January 15 deadline for autumn)
• IELTS Academic: minimum 6.0–6.5 depending on program
• Bachelor's degree (equivalent to Swedish kandidatexamen — 3 years minimum)
• Some programs require work experience, a portfolio, or entrance test

**Residence Permit:**
Same process as undergrad. Key requirement: show SEK 8,514/month for each month of your program (typically 24 months = ~SEK 204,000 / approximately £15,000).

**Swedish Institute Scholarships:**
This is the most important thing for Nigerian masters students. The Swedish Institute offers full scholarships (tuition + living + travel) specifically for students from certain countries. Nigeria is eligible. These are highly competitive but many Nigerians win them every year. Apply before January 17.

**After graduation:**
You can apply for a 12-month job-seeking permit after completing your degree. This gives you time to find a Skilled Worker-equivalent position.`,

      phd: `**PhD in Sweden — A Salaried Employment Position**

This is fundamentally different from Nigeria and even from the US/UK. In Sweden, a PhD is a job. You are employed by the university, you receive a salary (SEK 25,000–32,000/month), and you have full employee rights including paid leave, pension contributions, and parental leave.

There is no tuition to pay. The university pays you.

**How to get a PhD position:**
• Positions are advertised on the university's jobs page and on academicpositions.com
• You apply like you're applying for a job — CV, cover letter, references
• Some positions require a research proposal

**Residence Permit:**
You apply for a work permit (not a student permit) because you're an employee. You'll need your employment contract from the university.

**Living in Sweden on a PhD salary:**
SEK 25,000–32,000/month is comfortable for Sweden. Rent in Stockholm is SEK 8,000–14,000/month (cheaper in other cities). You'll be able to save money.

**Learning Swedish:**
SFI (Swedish for Immigrants) is free. Most Swedes speak excellent English, but learning Swedish dramatically improves your social integration and long-term employment prospects. Start as soon as you arrive.

**Path to permanent residence:**
After 4 years of residence (which your PhD covers), you can apply for permanent residence. After 5 years, citizenship. Sweden allows dual citizenship, so you keep your Nigerian passport.`,

      work: `**Working in Sweden as a Nigerian**

**Work Permit (non-EU)**
You need a job offer from a Swedish employer. Unlike the UK, there's no points-based system — your employer applies for your permit directly. Requirements:
• Job offer for a skilled position
• Salary must meet or exceed the collective agreement for the role (typically SEK 26,000+/month minimum)
• Employer must advertise the position to EU/EEA candidates first

**EU Blue Card:**
For highly skilled workers with a university degree and a high salary offer (SEK 49,875/month+), the EU Blue Card provides a faster route and easier mobility within the EU.

**Best sectors for Nigerians in Sweden:**
• Tech/IT (Stockholm's "Silicon Valley" has massive talent shortages — Swedes call it Kista)
• Healthcare (Sweden has an aging population and actively recruits doctors and nurses)
• Engineering (Volvo, Ericsson, Saab all hire internationally)
• Finance (Stockholm is a major Nordic financial hub)

**Realistic job search timeline:**
Swedish hiring processes are slow — expect 2–4 months from application to start date. Network on LinkedIn. Join Nigerian/African professional groups in Stockholm and Gothenburg.

**Language reality check:**
Many Stockholm tech jobs are in English. Outside Stockholm or in non-tech sectors, Swedish is often required. Invest in language learning from Day 1.`,
    },

    timeline: {
      undergrad: [
        { step: "October–January", title: "Apply via universityadmissions.se", detail: "Application window opens October 15 and closes January 15 for autumn semester. Create an account at universityadmissions.se and apply to up to 4 programs. Pay SEK 900 application fee." },
        { step: "February–March", title: "Prepare documents & take IELTS", detail: "Upload transcripts, degree certificate, and IELTS results to the portal. Transcripts from Nigerian universities must be official (stamped and signed by the registrar)." },
        { step: "April", title: "Receive admission decision", detail: "Log in to universityadmissions.se to see your results. If admitted, accept your offer and pay the tuition deposit (SEK 40,000–80,000 typically)." },
        { step: "April–May", title: "Apply for Residence Permit", detail: "Apply on migrationsverket.se immediately after admission. Upload admission letter, passport, proof of funds, and health insurance proof." },
        { step: "June–July", title: "Residence Permit decision", detail: "If approved, you'll receive a decision letter. Collect your biometric residence card on arrival in Sweden." },
        { step: "August", title: "Arrival & orientation", detail: "Register at the Swedish Tax Agency (Skatteverket) to get a personal number (personnummer) — this is essential for opening a bank account, getting a SIM card, and accessing services." },
        { step: "Ongoing", title: "Apply for Swedish Institute Scholarship", detail: "Even as an enrolled student, check SI's scholarship programs — some are open to currently enrolled students." },
      ],
      masters: [
        { step: "September–October", title: "Research programs & prepare documents", detail: "Browse universityadmissions.se. Shortlist 4 programs. Gather transcripts, degree certificate, IELTS scores, motivation letter, and CV." },
        { step: "October–January 15", title: "Apply via universityadmissions.se + SI Scholarship", detail: "Submit your university application by January 15. Also apply for Swedish Institute Scholarship (deadline usually January 17 — check si.se annually). These are separate applications." },
        { step: "April", title: "Admission & scholarship results", detail: "Admission decisions come in April. SI scholarship results come in May. If you get the scholarship, your financial situation changes completely." },
        { step: "April–May", title: "Residence Permit application", detail: "Apply immediately on migrationsverket.se. Include: admission letter, proof of funds (or SI scholarship letter), health insurance, passport." },
        { step: "August", title: "Arrive & register at Skatteverket", detail: "Get your personnummer within the first week. Everything else depends on it." },
        { step: "After graduation", title: "Apply for job-seeking permit", detail: "12-month permit to stay and look for work. Use this time actively — networking events, career fairs, LinkedIn outreach." },
      ],
      phd: [
        { step: "Ongoing", title: "Monitor job boards for PhD positions", detail: "Set up alerts on academicpositions.com, jobs.ki.se (Karolinska), lth.se/english/jobs (Lund), and individual university career pages. Positions open throughout the year." },
        { step: "On finding a position", title: "Apply like a job application", detail: "Your CV should be academic: publications, research experience, thesis title, references. Cover letter should show fit with the specific project." },
        { step: "On offer", title: "Receive employment contract", detail: "You'll get an employment contract, not an admission letter. This is what you use for your Residence Permit." },
        { step: "Permit application", title: "Apply for work permit (not student permit)", detail: "Apply via migrationsverket.se using your employment contract. Processing: 4–8 weeks." },
        { step: "Arrival", title: "Skatteverket registration", detail: "Register immediately. As a salaried employee, you'll also be registered in the pension system (PPM) automatically." },
        { step: "Year 4", title: "Apply for permanent residence", detail: "After 4 years of continuous residence, apply for permanent residence at Migrationsverket." },
      ],
      work: [
        { step: "Job search", title: "Find a Swedish employer willing to sponsor", detail: "Use LinkedIn, Glassdoor Sweden, Blocket Jobb, Indeed Sweden. Target multinational companies in tech, healthcare, and engineering." },
        { step: "Job offer secured", title: "Employer submits application", detail: "Your employer (not you) submits the work permit application to Migrationsverket on your behalf." },
        { step: "Processing", title: "4–8 week permit processing", detail: "During this time, ensure your employer has advertised the role to EU/EEA candidates first (required by law)." },
        { step: "Arrival", title: "Personnummer & banking", detail: "Register at Skatteverket immediately. Open a Swedbank or Handelsbanken account." },
        { step: "Year 4", title: "Permanent residence", detail: "Apply after 4 years. Work permits can be renewed annually and then extended." },
      ],
    },

    tips: {
      undergrad: [
        { title: "The application portal is universityadmissions.se — there is no other way", body: "All Swedish university applications for international students go through this one portal. Anyone asking you to apply directly to a Swedish university for a fee is a scam." },
        { title: "The personnummer is your most important document in Sweden", body: "The personal number from Skatteverket unlocks everything: bank account, mobile contract, healthcare, gym membership, library card. Register within your first week. Bring your residence permit and passport." },
        { title: "Sweden is expensive but manageable with planning", body: "Students pay SEK 8,000–10,000/month in living costs. You can work unlimited hours alongside your studies. Many Nigerian students work part-time in retail, warehousing, or cleaning to supplement income." },
        { title: "Swedes are quiet but not unfriendly", body: "Swedish social culture is different from Nigerian culture. Small talk with strangers is uncommon. People warm up over time. Join university clubs and activities — this is how you build friendships in Sweden." },
        { title: "Learn Swedish even if your program is in English", body: "SFI (Swedish for Immigrants) is free and starts at any time. Speaking even basic Swedish transforms your social life, job prospects, and daily interactions." },
      ],
      masters: [
        { title: "The Swedish Institute Scholarship is Nigeria's best-kept secret", body: "Many Nigerians don't know this scholarship exists. It covers full tuition, SEK 11,000/month living stipend, travel grant, and health insurance. Apply every year. Nigerians win this scholarship regularly." },
        { title: "Sweden's masters programs are research-heavy, not exam-heavy", body: "You'll write papers, do group projects, and think critically — not memorize for exams. This suits many Nigerian graduates who felt their analytical abilities were underused at home." },
        { title: "Stockholm, Gothenburg, and Lund are your three main options", body: "KTH and Stockholm University for tech/sciences in Stockholm. Chalmers in Gothenburg for engineering. Lund University for a mix of everything and a beautiful smaller-city experience." },
        { title: "Swedish employers value your international background", body: "Nigeria's fast-growing tech and business environment is seen as impressive context in Sweden. Don't undersell your experience — frame it as an asset." },
      ],
      phd: [
        { title: "A Swedish PhD is genuinely one of the best deals in the world for Nigerians", body: "You're paid a full salary, contribute to a Swedish pension, get parental leave, have job security, and leave with a world-class PhD. The only trade-off is it's competitive to get in." },
        { title: "Karolinska Institutet is world-famous for medicine and life sciences", body: "KI awards the Nobel Prize in Medicine. A PhD from KI is globally recognized. Nigerian doctors and scientists have graduated from KI and gone on to major international careers." },
        { title: "Your family can join you in Sweden", body: "As a salaried PhD employee, you can bring dependents. Your partner may be allowed to work. This makes Sweden one of the best family-friendly PhD destinations." },
      ],
      work: [
        { title: "The 6 ILO in Swedish work culture: respect it", body: "Swedes leave work on time. There's no culture of staying late to impress your boss. Work-life balance is a core value. Adapting to this will feel strange but is ultimately positive." },
        { title: "Fika is real and important", body: "Swedish workplace culture revolves around 'fika' — coffee break with colleagues, usually twice a day. It's not optional — it's where relationships are built. Participate, even if you don't drink coffee." },
        { title: "Healthcare worker recruitment is active", body: "Region Stockholm and other healthcare regions actively recruit internationally trained doctors and nurses. You'll need to validate your Nigerian credentials with Socialstyrelsen, which takes 6–12 months but is very structured." },
      ],
    },

    universities: {
      undergrad: [
        { name: "Stockholm University", location: "Stockholm", known_for: "Law, Social Sciences, Natural Sciences", avg_tuition: "SEK 90,000–120,000/yr", acceptance: "55%", nigerian_community: "Small but growing" },
        { name: "Uppsala University", location: "Uppsala", known_for: "Medicine, Law, Sciences", avg_tuition: "SEK 90,000–130,000/yr", acceptance: "50%", nigerian_community: "Small" },
        { name: "Linköping University", location: "Linköping", known_for: "Engineering, Medicine, IT", avg_tuition: "SEK 80,000–120,000/yr", acceptance: "65%", nigerian_community: "Small" },
      ],
      masters: [
        { name: "KTH Royal Institute of Technology", location: "Stockholm", known_for: "Engineering, Architecture, Technology", avg_tuition: "SEK 135,000–170,000/yr", acceptance: "25%", nigerian_community: "Small but active" },
        { name: "Chalmers University of Technology", location: "Gothenburg", known_for: "Engineering, Shipping, Architecture", avg_tuition: "SEK 130,000–165,000/yr", acceptance: "30%", nigerian_community: "Small" },
        { name: "Lund University", location: "Lund", known_for: "Medicine, Law, Engineering, Business", avg_tuition: "SEK 85,000–160,000/yr", acceptance: "35%", nigerian_community: "Small" },
        { name: "Stockholm School of Economics", location: "Stockholm", known_for: "Business, Finance, Economics", avg_tuition: "SEK 180,000–220,000/yr", acceptance: "20%", nigerian_community: "Very small" },
      ],
      phd: [
        { name: "Karolinska Institutet", location: "Stockholm", known_for: "Medicine, Biomedical Sciences — Nobel Prize institution", avg_tuition: "Fully salaried", acceptance: "~10%", nigerian_community: "Small" },
        { name: "KTH Royal Institute of Technology", location: "Stockholm", known_for: "Engineering, Computing, Physics", avg_tuition: "Fully salaried", acceptance: "~15%", nigerian_community: "Small" },
        { name: "Chalmers University", location: "Gothenburg", known_for: "Engineering, Energy, Materials", avg_tuition: "Fully salaried", acceptance: "~15%", nigerian_community: "Very small" },
      ],
      work: [],
    },

    embassy: {
      name: "Embassy of Sweden in Nigeria",
      address: "Plot 1247, Yedseram Street, Maitama, Abuja",
      website: "https://www.swedenabroad.se/en/embassies/nigeria-abuja/",
      visa_apply: "https://www.migrationsverket.se/English/Private-individuals/Studying-in-Sweden.html",
      vfs: "https://www.vfsglobal.com/sweden/nigeria/",
      official_immigration: "https://www.migrationsverket.se/English.html",
      extra_links: [
        { label: "universityadmissions.se (Apply to all Swedish universities)", url: "https://www.universityadmissions.se/" },
        { label: "Swedish Migration Agency", url: "https://www.migrationsverket.se/English.html" },
        { label: "Swedish Institute Scholarship", url: "https://si.se/en/apply/scholarships/swedish-institute-scholarships-for-global-professionals/" },
        { label: "PhD Positions — Academic Positions", url: "https://academicpositions.com/jobs/sweden" },
        { label: "VFS Global Nigeria (Biometrics)", url: "https://www.vfsglobal.com/sweden/nigeria/" },
        { label: "Skatteverket (Swedish Tax Agency)", url: "https://www.skatteverket.se/servicelankar/otherlanguages/inenglish.4.7be5268414bea064694b60f.html" },
      ],
    },

    scholarships: {
      undergrad: [
        { name: "Swedish Institute Scholarship for Global Professionals (SISGP)", amount: "Full tuition + SEK 11,000/month + travel grant", university: "All Swedish universities", deadline: "January 17 each year", url: "https://si.se/en/apply/scholarships/swedish-institute-scholarships-for-global-professionals/" },
      ],
      masters: [
        { name: "Swedish Institute Scholarship for Global Professionals (SISGP)", amount: "Full tuition + SEK 11,000/month + travel grant + health insurance", university: "All Swedish universities", deadline: "January 17 each year", url: "https://si.se/en/apply/scholarships/swedish-institute-scholarships-for-global-professionals/" },
        { name: "Lund University Global Scholarship", amount: "75% or 100% tuition waiver", university: "Lund University", deadline: "February each year", url: "https://www.lunduniversity.lu.se/international/scholarships-and-funding" },
        { name: "KTH Scholarship", amount: "Full tuition waiver", university: "KTH Royal Institute of Technology", deadline: "January each year", url: "https://www.kth.se/en/studies/master/scholarships" },
      ],
      phd: [
        { name: "PhD Employment (All positions)", amount: "Full salary SEK 25,000–32,000/month", university: "All Swedish universities", deadline: "Varies by position", url: "https://academicpositions.com/jobs/sweden/phd" },
        { name: "Karolinska Institutet PhD Positions", amount: "Full salary + benefits", university: "Karolinska Institutet", deadline: "Rolling", url: "https://ki.se/en/about/jobs-at-ki" },
      ],
      work: [],
    },
  },
};
