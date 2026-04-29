// Guide content for each country, organised by student level
// levels: undergrad | masters | phd | work
// All visa fee / living cost figures are approximate and change — users should verify on official sites

export const GUIDE_CONTENT = {

  // ─────────────────────────────────────────────
  // CANADA
  // ─────────────────────────────────────────────
  CA: {
    tagline: "One of the most Nigerian-friendly countries for students and skilled workers",
    overview: "Canada is one of the top destinations for Nigerians. The immigration system is points-based, clear, and actively welcomes international students and skilled workers. Many Nigerians have built full lives here by going: student visa → post-graduation work permit → permanent residency. Cities like Toronto have some of the largest Nigerian communities outside Africa.",

    stats: {
      undergrad:  { tuition: "CAD 20,000–35,000/yr", living: "CAD 1,000–1,500/month", processing: "4–12 weeks", acceptance: "Varies by school", minIELTS: "6.0 overall", currency: "CAD" },
      masters:    { tuition: "CAD 18,000–40,000/yr", living: "CAD 1,000–1,500/month", processing: "4–12 weeks", acceptance: "Varies by program", minIELTS: "6.5 overall", currency: "CAD" },
      phd:        { tuition: "Often fully funded", living: "CAD 1,000–1,500/month", processing: "4–12 weeks", acceptance: "Very competitive", minIELTS: "6.5 overall", currency: "CAD" },
      work:       { salary: "CAD 45,000–90,000/yr", processing: "2–6 months", pathway: "Express Entry / LMIA Work Permit", minIELTS: "CLB 7+ recommended", currency: "CAD" },
    },

    visa: {
      undergrad: `**What is a Study Permit?**
A Study Permit is the document that allows you to study in Canada. It is not a visa — it is issued once you arrive at the Canadian border. You apply for it online through the IRCC (Immigration, Refugees and Citizenship Canada) website.

**Step 1 — Apply to a Designated Learning Institution (DLI)**
Canada only issues Study Permits to students accepted at government-approved schools called Designated Learning Institutions. You can find the full list on the IRCC website. Popular choices for Nigerians include University of Toronto, York University, University of Calgary, and Toronto Metropolitan University.

**Step 2 — Show you can afford it**
IRCC wants to see that you can pay for your studies and live in Canada without financial difficulty. You need to show:
• First year's tuition (e.g., CAD 25,000)
• Living costs: the government minimum is CAD 10,000 per year, but realistically budget CAD 12,000–18,000
• Return flight home
The money should have been sitting in your account for at least 3–6 months. A large sum that appeared last week raises red flags.

**Step 3 — Apply online**
Go to IRCC's website and apply for a Study Permit. You will need:
• Letter of Acceptance from your school
• Valid Nigerian passport (should be valid for the full length of your studies)
• Bank statements showing your funds
• IELTS Academic score (most schools require minimum 6.0)
• Statement of Purpose — a letter explaining why you want to study in Canada, why you chose this program, and what you plan to do after
• Biometrics — you will be asked to visit VFS Global in Lagos or Abuja to give your fingerprints and photo. This costs around CAD 85.

**Guaranteed Investment Certificate (GIC)**
For most Study Permits, you are required to deposit CAD 20,635 into a Canadian GIC (Guaranteed Investment Certificate) account. This money is held in Canada and released to you monthly as a living allowance once you arrive. Think of it as a forced savings account. Your Nigerian bank may be able to help you set this up, or you can use services like CIBC or Scotiabank that accept applications from Nigeria.

**Processing time:** Typically 4–12 weeks. Apply as soon as you receive your acceptance letter.

**Bringing your spouse or children:**
If you are married or have children, they can come with you.
• Your spouse/partner can apply for an Open Work Permit, which lets them work anywhere in Canada while you study.
• Your children can attend Canadian primary or secondary school.
• You must show additional funds to support them — roughly CAD 4,000/year per additional family member.
Apply for their permits at the same time as yours.`,

      masters: `**Masters Study Permit — Canada**

The process is the same as undergraduate, but there are important differences worth knowing.

**Your Nigerian degree is respected**
Canadian universities are familiar with degrees from University of Lagos, Obafemi Awolowo University, Ahmadu Bello University, and other major Nigerian institutions. A strong Second Class Upper (2:1) or First Class degree puts you in a competitive position.

**What most masters programs require:**
• Minimum 2:1 degree (roughly 3.0/4.0 GPA)
• IELTS Academic — most programs require 6.5 overall, with no individual band below 6.0. Some programs accept 7.0+.
• 2 academic reference letters
• Statement of Purpose (very important — see Tips section)
• Some programs require GRE or GMAT — check each program individually

**IELTS requirement varies by school and program**
Some programs accept Duolingo English Test or TOEFL instead of IELTS. Always check the specific program page — do not assume.

**Post-Graduation Work Permit (PGWP)**
This is the most important thing to understand about studying in Canada. After you complete a 2-year masters program, you qualify for a 3-year PGWP — an open work permit that lets you work for any employer anywhere in Canada. This work experience then feeds into Express Entry for Permanent Residency. Many Nigerians have gone: Masters (2 years) → PGWP (3 years) → Express Entry → Permanent Residency in about 5–6 years total.

**Bringing your spouse or children:**
Same as undergraduate. Your spouse gets an Open Work Permit and your children can attend school. Budget approximately CAD 4,000–6,000 extra per family member per year.`,

      phd: `**PhD in Canada**

Canadian PhD programs are typically 4–5 years and are often funded — meaning the university pays your tuition AND gives you a monthly stipend (usually CAD 18,000–25,000 per year from your supervisor's research grant).

**How funded PhDs work**
Your supervisor (the professor overseeing your research) has a research budget called a grant. Part of that grant pays for PhD students. When a professor agrees to supervise you, they typically include you in their funding plan.

**How to find a supervisor who will fund you:**
• Email 10–15 professors at universities you are interested in
• Your email should be short (under 200 words), professional, and specific — mention one of their published papers and explain how your background connects to their research
• Attach your CV
• Expect responses from 1–3 professors — this is normal
• Apply only to programs where a professor has agreed in writing to supervise you

This is standard practice in Canada. It is not rude or pushy to email professors directly — they expect it.

**Visa process for funded PhDs:**
Your funding letter (from the university or supervisor) makes your Study Permit application much stronger because it shows IRCC that you have guaranteed financial support.

**IELTS requirement:** Typically 6.5 overall. Check each program.

**Bringing your spouse or children:**
Same benefits as masters — your spouse gets an Open Work Permit, children can attend school. A funded PhD means you have a salary, which helps demonstrate you can support your family.

**Path to Permanent Residency:**
After completing your PhD, you receive a 3-year PGWP (regardless of how long your PhD took — it is capped at 3 years). Teaching Assistant and Research Assistant work during your PhD also counts as Canadian work experience. Most Nigerian PhD graduates qualify for Permanent Residency within 1–2 years of finishing.`,

      work: `**Working in Canada as a Nigerian**

There are two main pathways to work legally in Canada:

**Pathway 1 — Express Entry (for skilled workers)**
Express Entry is Canada's points-based system for permanent residency and skilled worker immigration. You create a profile online and receive a score called the Comprehensive Ranking System (CRS) score. The highest scorers are invited to apply for Permanent Residency.

Your CRS score is based on:
• Age (younger scores higher — peak is 20–29)
• Education level (higher degree = more points)
• Language test scores (IELTS CLB 9+ = maximum language points)
• Canadian work experience (huge bonus)
• Provincial nomination (adds 600 points — almost guarantees an invitation)

Practical steps:
1. Take IELTS — target 8.0+ in all bands (CLB 9)
2. Get your Nigerian degree evaluated by WES (World Education Services) — costs CAD 250, takes 7–9 weeks
3. Create your Express Entry profile
4. Wait for an Invitation to Apply — average cut-off scores have been 470–500+
5. If invited, submit your permanent residency application

**Pathway 2 — LMIA Work Permit**
A Canadian employer hires you and gets a Labour Market Impact Assessment (LMIA) — a government document proving no Canadian worker was available for the role. You then use this to apply for a work permit tied to that employer.

Best sectors for Nigerians seeking LMIA-based work: IT/software engineering, healthcare (nurses, doctors), finance, engineering, and teaching.

**Bringing your spouse or children:**
On an LMIA work permit or Express Entry, your spouse may be eligible for an Open Work Permit. Your children can attend Canadian schools. Include them in your immigration application.`,
    },

    timeline: {
      undergrad: [
        { step: "12–18 months before start", title: "Research schools and scholarships", detail: "Shortlist 5–8 Designated Learning Institutions. Look at admission requirements, tuition fees, and scholarship deadlines. Apply for the Lester B. Pearson Scholarship (University of Toronto) and university-specific international scholarships early — many have deadlines 12+ months before your start date." },
        { step: "10–12 months before", title: "Take IELTS Academic", detail: "Register for IELTS Academic (not General Training). Target 6.5+ overall. Give yourself 2–3 months of preparation before the test. The British Council and IDP both run IELTS in Lagos, Abuja, and Port Harcourt." },
        { step: "8–10 months before", title: "Submit university applications", detail: "Apply to 4–6 schools. You will need: transcripts (get official copies stamped by your university registrar), WAEC/NECO results verified at the board office, personal statement, and reference letters." },
        { step: "6–8 months before", title: "Receive Letter of Acceptance", detail: "Once you receive an offer, pay your deposit to secure your place. Your school will then issue your Letter of Acceptance, which you need to apply for your Study Permit." },
        { step: "5–6 months before", title: "Apply for Study Permit online", detail: "Apply on the IRCC website. Pay the CAD 150 application fee. Upload your Letter of Acceptance, bank statements, passport bio-data page, Statement of Purpose, and IELTS results." },
        { step: "4–5 months before", title: "Biometrics at VFS Lagos or Abuja", detail: "IRCC will send you a biometrics instruction letter. Book your appointment at VFS Global and attend with your passport and instruction letter. Cost: approximately CAD 85." },
        { step: "2–3 months before", title: "Study Permit approved — prepare to leave", detail: "Book your flight. Arrange accommodation (apply for on-campus housing as soon as you receive your acceptance — spots fill fast). Join Nigerian student WhatsApp/Facebook groups for your university." },
        { step: "At Canadian border (Port of Entry)", title: "Exchange approval for actual Study Permit", detail: "Your Study Permit approval letter is not your actual permit. At the Canadian airport or border, an immigration officer checks your documents and issues your actual Study Permit card. Bring all original documents with you in your carry-on." },
      ],
      masters: [
        { step: "12–15 months before", title: "Research programs and email professors", detail: "Email professors whose research interests match yours. A positive response from a professor before applying significantly improves your chances of admission." },
        { step: "10–12 months before", title: "IELTS and official transcripts", detail: "Target IELTS 7.0 Academic. Get your degree certificate and transcripts stamped by your university. Some universities require WES (World Education Services) evaluation of your Nigerian degree — budget CAD 250 and 7–9 weeks for this." },
        { step: "8–10 months before", title: "Apply to 4–6 programs", detail: "Your Statement of Purpose is the most important document. Write specifically about why this program, why this university, and what research you want to do. A generic statement is easy to spot and reduces your chances." },
        { step: "5–7 months before", title: "Accept offer and apply for Study Permit", detail: "Once you have your Letter of Acceptance, apply immediately. Include any scholarship award letters — these significantly improve approval odds." },
        { step: "4–5 months before", title: "Biometrics", detail: "VFS Global Lagos or Abuja. Book your appointment and bring your passport and biometrics instruction letter from IRCC." },
        { step: "2 months before", title: "Prepare for arrival", detail: "Open a Canadian bank account online before arrival — Scotiabank's StartRight program is popular with Nigerian students. Arrange accommodation. Research your city's Nigerian community groups." },
        { step: "Within 180 days of graduating", title: "Apply for Post-Graduation Work Permit", detail: "Do not miss this window. Apply before your Study Permit expires. A 2-year masters gives you a 3-year open work permit, which is your path to Permanent Residency." },
      ],
      phd: [
        { step: "18–24 months before", title: "Identify supervisors", detail: "Email 10–15 professors in your research area across multiple universities. Keep emails short and specific. Attach your CV. Expect responses from 1–3." },
        { step: "12–15 months before", title: "Apply with confirmed supervisor", detail: "Only apply to programs where a professor has agreed to supervise you and confirmed funding. A funded PhD offer is stronger for your Study Permit application." },
        { step: "8–10 months before", title: "Receive funded offer letter", detail: "Get the funding details in writing — specifically whether tuition is waived and what your annual stipend will be. Accept the offer and begin Study Permit process." },
        { step: "5–6 months before", title: "Study Permit application", detail: "Include your funding/offer letter. IRCC approves PhD Study Permits quickly when funding is confirmed. Your spouse and children can be included in the same application." },
        { step: "During PhD", title: "Build Canadian work experience through TA/RA work", detail: "Teaching Assistant (TA) and Research Assistant (RA) positions are paid work in Canada. This experience contributes to your Express Entry score." },
        { step: "After graduation", title: "PGWP then Express Entry", detail: "3-year Post-Graduation Work Permit after your PhD. Most Nigerian PhD graduates receive Express Entry Permanent Residency invitations within 1–2 years of graduating." },
      ],
      work: [
        { step: "Before anything", title: "Check your CRS score", detail: "Use the IRCC 'Come to Canada' online tool to estimate your Comprehensive Ranking System score. If you score below 450, focus on improving language scores or getting Canadian education/work experience first." },
        { step: "First priority", title: "WES evaluation of your Nigerian degree", detail: "World Education Services (WES) evaluates Nigerian degrees for Canadian immigration. This takes 7–9 weeks and costs CAD 250. Do this before anything else — you cannot submit an Express Entry profile without it." },
        { step: "Ongoing", title: "Create Express Entry profile", detail: "Submit your profile to the Express Entry pool. Monitor draw results. Typical wait: 6–18 months. Target scores have been 470–500+ recently." },
        { step: "Job search", title: "Apply to LMIA-friendly employers", detail: "Use LinkedIn, Indeed Canada, and the Canadian Government's Job Bank. Focus on companies that have sponsored foreign workers before (their job postings sometimes say 'open to sponsoring'). Sectors: IT, healthcare, engineering." },
        { step: "Job offer received", title: "Employer applies for LMIA", detail: "The Labour Market Impact Assessment takes 2–3 months for your employer to obtain. It proves no Canadian was available for your role. Once approved, you apply for your work permit." },
        { step: "12 months of Canadian work", title: "Apply for Permanent Residency via Canadian Experience Class", detail: "Canadian Experience Class (a stream within Express Entry) requires 1 year of skilled work experience in Canada. After that, apply for Permanent Residency." },
      ],
    },

    tips: {
      undergrad: [
        { title: "Your WAEC and NECO results must be verified — do this early", body: "Many Nigerian students have their visa or university application delayed because their secondary school results were not properly verified. Go to the WAEC office in Lagos (or nearest state office) and get a Verification Certificate. This can take 2–4 weeks. Do it early." },
        { title: "Bank statements need to show 3–6 months of stable funds", body: "IRCC looks at how long the money has been in your account. If a large sum appeared 2 weeks ago, a visa officer will question it. Plan your finances at least 6 months before applying and keep funds stable." },
        { title: "Proof of ties to Nigeria — what actually counts", body: "For your Study Permit, you need to show you intend to return to Nigeria after your studies (even if you plan to apply for PR later, your initial application must show ties). Things that count: property ownership or family property documents, letter from a Nigerian employer stating your position is being held, letter from parents or family confirming your support, business registration documents, evidence of family (spouse, children, siblings) remaining in Nigeria." },
        { title: "Join Nigerian student groups before you arrive", body: "Search Facebook for '[University Name] Nigerian Students Association'. These groups are genuinely helpful — seniors share tips on affordable accommodation, halal food spots, transport hacks, and many offer to help new arrivals from the airport." },
        { title: "The GIC is mandatory but the money comes back to you", body: "The Guaranteed Investment Certificate of CAD 20,635 sounds like a lot of money to 'give away'. It is not — it is released to you in monthly instalments once you arrive in Canada. By the end of your first year, you will have received it all back." },
      ],
      masters: [
        { title: "Your Statement of Purpose can make or break your application", body: "Admissions committees read hundreds of generic statements. Write specifically about: one professor at this university whose research excites you (name them, reference a specific paper), why your Nigerian background or work experience is relevant, and what you want to do after your degree. Two strong specific pages beats five generic pages." },
        { title: "The PGWP is why Canada is worth it for masters students", body: "After a 2-year masters program, you get a 3-year open work permit. You can work for any employer anywhere in Canada. This is the clearest pathway from Nigerian student to Canadian Permanent Resident. No other country offers this as clearly." },
        { title: "WES evaluation — do this before you apply for PR", body: "World Education Services evaluates Nigerian degrees for Canadian immigration purposes. It confirms your degree equivalent in Canadian terms. Takes 7–9 weeks, costs CAD 250. Start this process while you are still studying." },
        { title: "Be careful with immigration consultants in Nigeria", body: "Many immigration consultants in Nigeria charge high fees for guarantees they cannot give. Study Permit decisions are made solely by IRCC visa officers. Use the IRCC website directly or consult only ICCRC-regulated representatives (you can verify on the ICCRC website)." },
      ],
      phd: [
        { title: "Emailing professors is standard — it is not rude", body: "In Nigerian culture, reaching out directly to a professor might feel presumptuous. In Canada, it is expected and encouraged. Professors actively look for motivated PhD students. A well-written email showing genuine interest in their research will be well received." },
        { title: "File your tax return every year — you may get a refund", body: "As a PhD student receiving a stipend, you are taxed in Canada but also eligible for tax credits. Many Nigerian PhD students are surprised to receive a CAD 1,000–3,000 tax refund. Use TurboTax or attend a free student tax clinic on campus." },
        { title: "Provincial Nominee Programs are faster than Express Entry for some", body: "Provinces like Alberta, Ontario, and British Columbia have their own immigration streams. If your PhD is in a field the province needs (tech, healthcare, engineering), a provincial nomination adds 600 points to your Express Entry score and almost guarantees a PR invitation." },
      ],
      work: [
        { title: "LinkedIn is non-negotiable for Canadian job search", body: "Canadian recruiters actively search LinkedIn. Set up a complete profile with 'Open to Work' and specify Canada as your target location. Nigerian software engineers, nurses, and accountants are in genuine demand — your profile will get attention." },
        { title: "Get your credentials evaluated before you need them", body: "WES evaluation takes 7–9 weeks and is required for Express Entry. Do not wait until you are in the middle of a job offer process. Start it now." },
        { title: "Provincial Nominee Programs actively recruit Nigerians in healthcare and trades", body: "Alberta Advantage Immigration Program, Saskatchewan Immigrant Nominee Program, and Manitoba Provincial Nominee Program all have streams that are particularly relevant for Nigerian healthcare workers and skilled tradespeople. These are often faster than the federal Express Entry pool." },
        { title: "Proof of ties to Nigeria matters for work permit applications too", body: "Even for work permits, showing ties to Nigeria helps if you are applying for a temporary permit. Property ownership, family in Nigeria, business interests — document all of these." },
      ],
    },

    universities: {
      undergrad: [
        { name: "University of Toronto", location: "Toronto, ON", known_for: "Medicine, Engineering, Business, Law", avg_tuition: "CAD 45,000–58,000/yr", acceptance: "43%", nigerian_community: "Very large" },
        { name: "York University", location: "Toronto, ON", known_for: "Business (Schulich School), Law, Liberal Arts", avg_tuition: "CAD 28,000–34,000/yr", acceptance: "72%", nigerian_community: "Very large" },
        { name: "Toronto Metropolitan University (formerly Ryerson)", location: "Toronto, ON", known_for: "Business, Computing, Engineering, Media", avg_tuition: "CAD 26,000–32,000/yr", acceptance: "70%", nigerian_community: "Very large" },
        { name: "University of British Columbia", location: "Vancouver, BC", known_for: "Sciences, Medicine, Forestry, Commerce", avg_tuition: "CAD 38,000–46,000/yr", acceptance: "52%", nigerian_community: "Large" },
        { name: "University of Calgary", location: "Calgary, AB", known_for: "Engineering, Energy sector, Business, Medicine", avg_tuition: "CAD 22,000–28,000/yr", acceptance: "68%", nigerian_community: "Growing" },
        { name: "University of Alberta", location: "Edmonton, AB", known_for: "Engineering, Pharmacy, Law, Sciences", avg_tuition: "CAD 24,000–30,000/yr", acceptance: "60%", nigerian_community: "Growing" },
      ],
      masters: [
        { name: "University of Waterloo", location: "Waterloo, ON", known_for: "Computer Science, Engineering, Math, Quantum", avg_tuition: "CAD 20,000–28,000/yr", acceptance: "25–35%", nigerian_community: "Large" },
        { name: "McGill University", location: "Montreal, QC", known_for: "Medicine, Law, Sciences, Business (Desautels)", avg_tuition: "CAD 18,000–24,000/yr", acceptance: "30–40%", nigerian_community: "Medium" },
        { name: "University of Ottawa", location: "Ottawa, ON", known_for: "Law, Public Policy, Bilingual programs, Medicine", avg_tuition: "CAD 16,000–22,000/yr", acceptance: "50–60%", nigerian_community: "Growing" },
        { name: "Simon Fraser University", location: "Burnaby/Vancouver, BC", known_for: "Business, Computing, Communications, Criminology", avg_tuition: "CAD 18,000–24,000/yr", acceptance: "45–55%", nigerian_community: "Medium" },
        { name: "Dalhousie University", location: "Halifax, NS", known_for: "Dentistry, Medicine, Law, Marine Biology", avg_tuition: "CAD 16,000–20,000/yr", acceptance: "55%", nigerian_community: "Small but growing" },
      ],
      phd: [
        { name: "University of Toronto", location: "Toronto, ON", known_for: "All disciplines — top research output in Canada", avg_tuition: "Often fully funded", acceptance: "Highly competitive", nigerian_community: "Very large" },
        { name: "University of British Columbia", location: "Vancouver, BC", known_for: "Sciences, Engineering, Medicine, Forestry", avg_tuition: "Often fully funded", acceptance: "Highly competitive", nigerian_community: "Large" },
        { name: "University of Waterloo", location: "Waterloo, ON", known_for: "Engineering, Quantum Computing, Mathematics", avg_tuition: "Often fully funded", acceptance: "Competitive", nigerian_community: "Large" },
        { name: "McMaster University", location: "Hamilton, ON", known_for: "Medicine, Health Sciences, Engineering", avg_tuition: "Often fully funded", acceptance: "Competitive", nigerian_community: "Medium" },
      ],
      work: [],
    },

    embassy: {
      name: "Immigration, Refugees and Citizenship Canada (IRCC)",
      note: "Canada does not have a traditional visa section at its High Commission in Nigeria. All study and immigration applications are submitted online through the IRCC portal.",
      address: "Canadian High Commission: 15A Bobo Street, Maitama, Abuja, Nigeria",
      phone: "Apply online — the High Commission does not handle visa applications directly",
      website: "https://www.canada.ca/en/immigration-refugees-citizenship.html",
      visa_apply: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/apply.html",
      vfs: "https://www.vfsglobal.ca/canada/nigeria/",
      official_immigration: "https://www.canada.ca/en/immigration-refugees-citizenship.html",
      extra_links: [
        { label: "IRCC — Apply for Study Permit", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/apply.html" },
        { label: "IRCC — Express Entry", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/apply-permanent-residence.html" },
        { label: "IRCC — Come to Canada Tool (check your score)", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/come-canada-tool.html" },
        { label: "WES — Nigerian Degree Evaluation", url: "https://www.wes.org/ca/" },
        { label: "VFS Global Nigeria — Biometrics Appointments", url: "https://www.vfsglobal.ca/canada/nigeria/" },
        { label: "Designated Learning Institutions List", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare/designated-learning-institutions-list.html" },
        { label: "ICCRC — Verify Your Immigration Consultant", url: "https://iccrc-crcic.ca/find-a-professional/" },
      ],
    },

    scholarships: {
      undergrad: [
        { name: "Lester B. Pearson International Scholarship", amount: "Full tuition + living costs + books for 4 years", university: "University of Toronto", deadline: "Around November each year — check utoronto.ca", url: "https://future.utoronto.ca/pearson/" },
        { name: "York University International Student Scholarship", amount: "Up to CAD 35,000 over 4 years", university: "York University", deadline: "February each year", url: "https://futurestudents.yorku.ca/scholarships" },
        { name: "UBC International Major Entrance Scholarship", amount: "CAD 10,000–40,000 per year", university: "University of British Columbia", deadline: "December each year", url: "https://you.ubc.ca/financial-planning/awards-scholarships/" },
      ],
      masters: [
        { name: "Vanier Canada Graduate Scholarship", amount: "CAD 50,000 per year for 3 years", university: "All major Canadian universities", deadline: "November each year", url: "https://vanier.gc.ca/" },
        { name: "Ontario Graduate Scholarship", amount: "CAD 10,000–15,000 per year", university: "Ontario universities", deadline: "Varies by university — check each school", url: "https://osap.gov.on.ca/" },
        { name: "University of Waterloo International Masters Award", amount: "CAD 5,000–12,000 per year", university: "University of Waterloo", deadline: "Check uwaterloo.ca", url: "https://uwaterloo.ca/graduate-studies-postdoctoral-affairs/awards" },
      ],
      phd: [
        { name: "Vanier Canada Graduate Scholarship", amount: "CAD 50,000 per year for 3 years", university: "All major Canadian universities", deadline: "November each year", url: "https://vanier.gc.ca/" },
        { name: "NSERC Doctoral Award (for Science and Engineering)", amount: "CAD 21,000 per year", university: "Science and Engineering programs", deadline: "October each year", url: "https://www.nserc-crsng.gc.ca/" },
        { name: "Funded PhD Positions (supervisor grants)", amount: "Varies — typically CAD 18,000–28,000/yr stipend", university: "All research universities", deadline: "Rolling — depends on supervisor", url: "https://www.findaphd.com/phds/canada/" },
      ],
      work: [],
    },
  },

  // ─────────────────────────────────────────────
  // UNITED KINGDOM
  // ─────────────────────────────────────────────
  GB: {
    tagline: "Cultural familiarity, world-class universities, and a clear post-study work route",
    overview: "The UK is the most culturally familiar western country for Nigerians — shared language, similar legal system (both use common law), and one of the largest Nigerian diaspora communities in the world. UK universities are globally ranked and respected. Since 2021, the Graduate Route visa allows international graduates to stay and work in the UK for 2 years (3 for PhD) after finishing their degree — making the UK a genuine long-term option.",

    stats: {
      undergrad:  { tuition: "£14,000–£38,000/yr", living: "£1,000–£1,800/month", processing: "3 weeks", acceptance: "Varies by university", minIELTS: "5.5–6.5 (see note below)", currency: "GBP" },
      masters:    { tuition: "£15,000–£40,000/yr", living: "£1,000–£1,800/month", processing: "3 weeks", acceptance: "Varies by program", minIELTS: "6.0–7.0 (see note below)", currency: "GBP" },
      phd:        { tuition: "£15,000–£30,000/yr (often funded)", living: "£1,000–£1,800/month", processing: "3 weeks", acceptance: "Very competitive", minIELTS: "6.5–7.0", currency: "GBP" },
      work:       { salary: "£28,000–£65,000/yr", processing: "3–8 weeks", pathway: "Skilled Worker Visa", minIELTS: "English proficiency required", currency: "GBP" },
    },

    visa: {
      undergrad: `**UK Student Visa (Undergraduate)**

The UK Student Visa lets you study a full-time course at a licensed UK university. Here is how the process works step by step.

**Step 1 — Apply through UCAS**
All undergraduate applications in the UK go through a central system called UCAS (Universities and Colleges Admissions Service). You can apply to up to 5 universities in one application. The main deadline is January 31st each year for most courses (earlier for Medicine, Dentistry, Oxford, and Cambridge — usually October 15).

Go to ucas.com to create your account and apply.

**Step 2 — Receive your CAS number**
After you accept a university offer and meet all the conditions (e.g., your A-level or WAEC equivalent results), your university will issue a CAS (Confirmation of Acceptance for Studies) number. This is essential — you cannot apply for the visa without it.

**Step 3 — Prove your finances**
Funds must have been in your account for at least 28 consecutive days before your visa application date. You need to show:
• First year's tuition (e.g., £20,000)
• Living costs: £1,334/month if studying in London; £1,023/month outside London
• Multiply by 9 months (the government's required maintenance period)
• Example total needed: £20,000 tuition + (£1,334 × 9) = approximately £32,000

**Step 4 — English language requirement**
The UK requires an approved Secure English Language Test (SELT). For most universities, this means:
• IELTS for UKVI Academic (not standard IELTS — must specifically say "for UKVI")
• Pearson PTE Academic UKVI
• Minimum scores vary by university and course — typically 5.5–6.5 overall

Note: Some Nigerian students already in English-medium education may be exempt — check with your specific university.

**Step 5 — TB test**
All Nigerian passport holders must take a Tuberculosis (TB) test at an approved UK Visas and Immigration (UKVI) clinic. Approved clinics in Nigeria: IOM Lagos (106 Dr. Nnamdi Azikiwe Street, Victoria Island) and IOM Abuja. Your test results are valid for 6 months. Book this appointment early — slots fill up.

**Step 6 — Pay the Immigration Health Surcharge (IHS)**
Before submitting your visa application, you pay the IHS — this gives you access to the National Health Service (NHS) during your studies. Cost: £776 per year for students (2024 rate — check current rates as this changes). For a 3-year degree, you pay approximately £2,328 upfront.

**Step 7 — Submit visa application and biometrics**
Apply online on the UK Visas and Immigration website. Book a biometrics appointment at TLScontact (Lagos, Abuja, or Port Harcourt) or VFS Global.

**Bringing your spouse or children:**
If you are on a degree course at a UK university (postgraduate level or longer undergraduate courses):
• Your spouse/partner can apply for a Student Dependant visa
• They are NOT automatically allowed to work (rules changed in 2024 — check current UKVI rules)
• Your children can attend UK schools
• You must show additional funds: £845/month per dependant (outside London) or £1,116/month (London)`,

      masters: `**UK Student Visa (Masters)**

UK Masters programs are typically 1 year full-time, which makes them shorter and more affordable than most other countries. After completing your degree, you immediately qualify for the Graduate Route visa.

**Admission requirements vary by university — always check the specific program page**

Typical requirements:
• A good bachelor's degree (UK universities recognise Nigerian 2:1 and First Class degrees)
• English language test — see important note below
• Personal statement (usually 500–1,000 words)
• 2 reference letters (usually academic, but professional references accepted for some programs)
• Some MBA and Finance programs require work experience and GMAT

**English language — important note for Nigerian applicants:**
Most UK universities accept IELTS for UKVI Academic, but requirements vary:
• Russell Group universities (Oxford, Cambridge, UCL, Imperial): typically 7.0+
• Mid-ranked universities: typically 6.0–6.5
• Some programs accept Pearson PTE or TOEFL instead
• In rare cases, universities may accept a letter from your Nigerian university confirming your medium of instruction was English — but this is at the university's discretion and is NOT accepted for the Student Visa itself. For the visa, you still need an approved SELT (like IELTS for UKVI). Check both the university requirements AND the visa requirements separately.

**The Graduate Route visa — your key advantage:**
After completing your 1-year masters, you can apply for the Graduate Route visa — 2 years of open work authorization in the UK. You do not need a job offer to apply. This gives you time to find a sponsored Skilled Worker position.

**Cost comparison to other countries:**
1-year UK masters typically costs £15,000–£28,000 tuition, versus 2 years in Canada or the US. The shorter program saves time and money.

**Bringing your spouse or children:**
Masters students can bring dependants on a Student Dependant visa. Show £845/month per dependant (outside London) or £1,116/month (London) in your account for 28+ days. Children can attend UK schools. Check current UKVI rules on dependant work rights as these have changed recently.`,

      phd: `**UK Student Visa (PhD)**

UK PhD programs are 3–4 years and are sometimes funded. The visa process is the same as for other students.

**Finding a funded PhD position:**
• Search on FindAPhD.com and jobs.ac.uk — funded positions are formally advertised here
• Email supervisors directly — this is normal and expected in UK academia
• Commonwealth PhD Scholarships are specifically for Nigerians (fully funded — see Scholarships section)
• UKRI Doctoral Studentships fund PhD students at research universities (some are open to international students)

**Your CAS for a funded PhD:**
If your tuition is covered by a university scholarship or grant, your CAS will show £0 tuition. You still need to show living cost funds (£1,023–£1,334/month × 9 months), but the total required is significantly lower.

**The Graduate Route for PhD graduates:**
PhD graduates receive a 3-year Graduate Route visa (compared to 2 years for other graduates). Combined with your research experience, this gives you substantial time to find a Skilled Worker sponsor.

**Bringing your spouse or children:**
Same as masters — dependants can come with you. Children attend UK schools. Show additional maintenance funds for each dependant.`,

      work: `**Working in the UK as a Nigerian**

**The Skilled Worker Visa**
This is the main route for Nigerians to work legally in the UK. To be eligible:
• Your employer must be on the UK Home Office's list of licensed sponsors
• Your job must be on the list of eligible occupations
• Your salary must meet the threshold — currently £26,200/year minimum (some roles have higher thresholds)
• You must show English language ability

Steps:
1. Find a job at a company that is a licensed sponsor (check the public register on gov.uk)
2. Receive a job offer
3. Your employer issues a Certificate of Sponsorship (CoS)
4. You apply for your Skilled Worker Visa using the CoS reference number
5. Processing: 3–8 weeks

**NHS — the most active route for Nigerian healthcare workers:**
The National Health Service is one of the largest employers of Nigerians in the world. Nurses, doctors, pharmacists, and allied health professionals are actively recruited. The NHS has an international recruitment program with partnerships in Nigeria.

For nurses: you need NMC (Nursing and Midwifery Council) registration. There is a specific test — the CBT (Computer Based Test) — and an OSCE (Objective Structured Clinical Examination). The process takes 6–12 months but is clearly documented on the NMC website.

For doctors: GMC (General Medical Council) registration required. Nigerian medical degrees are generally accepted — you need to pass the PLAB (Professional and Linguistic Assessments Board) test.

**Indefinite Leave to Remain (ILR) — permanent residence:**
After 5 years on a Skilled Worker Visa, you can apply for ILR (the UK's version of permanent residence). After 1 more year, you can apply for British citizenship. The UK allows dual nationality — you can keep your Nigerian passport.

**Bringing your spouse or children:**
Skilled Worker Visa holders can bring family. Your spouse gets a Dependant visa and is allowed to work. Children can attend UK schools. Additional funds required — approximately £845/month per dependant.`,
    },

    timeline: {
      undergrad: [
        { step: "September–January 31 (deadline)", title: "Apply through UCAS", detail: "Create account at ucas.com. Apply to up to 5 universities. Write one personal statement used for all applications (4,000 characters — approximately 650 words). Medicine, Dentistry, Oxford, and Cambridge have an earlier October 15 deadline." },
        { step: "9–12 months before start", title: "Take IELTS for UKVI Academic", detail: "Must be the UKVI-specific version, not standard IELTS Academic. Book through British Council or IDP in Lagos, Abuja, or Port Harcourt. Target 6.0+ overall. Give yourself 2–3 months preparation." },
        { step: "March–May", title: "Receive and respond to offers", detail: "You get Conditional or Unconditional offers on UCAS Track. Accept your Firm choice (first preference) and Insurance choice (backup). Meet any conditions — usually specific grade requirements." },
        { step: "June–July", title: "Meet conditions and receive CAS", detail: "Submit your final results. Pay your tuition deposit (usually £3,000–£5,000). Your university then issues your CAS number." },
        { step: "June–August (no earlier than 6 months before course start)", title: "Apply for Student Visa", detail: "Apply online at gov.uk. Pay IHS (£776/year × course length). Book biometrics at TLScontact Lagos, Abuja, or Port Harcourt." },
        { step: "Alongside visa application", title: "TB test at IOM clinic in Nigeria", detail: "Mandatory for Nigerian passport holders. Book at IOM Lagos (Victoria Island) or IOM Abuja. Results valid for 6 months. Processing usually 3–5 business days after your appointment." },
        { step: "2–3 weeks after applying", title: "Visa decision", detail: "Most decisions come within 3 weeks. If approved, your passport is returned with a vignette sticker. You collect your Biometric Residence Permit (BRP) from a UK Post Office within 10 days of arrival." },
      ],
      masters: [
        { step: "9–12 months before", title: "Apply for Chevening Scholarship", detail: "Chevening deadline is usually November. Apply even if you are not sure you will get it — the process of writing the essays clarifies your goals. Results announced in June of the following year." },
        { step: "8–10 months before", title: "Apply directly to universities", detail: "Most UK universities accept rolling applications but popular programs fill quickly. Apply by January for September start. Strong programs at UCL, Manchester, Edinburgh fill by February–March." },
        { step: "5–7 months before", title: "Accept offer and receive CAS", detail: "Accept your offer, pay the deposit (usually £3,000–£5,000). CAS is issued 1–3 months before your course start date." },
        { step: "No earlier than 6 months before start", title: "Apply for Student Visa", detail: "Apply online. Pay IHS upfront. Book TLScontact or VFS biometrics appointment in Nigeria." },
        { step: "Before visa application", title: "TB test", detail: "IOM Lagos or IOM Abuja. Book as early as possible as appointments fill up. Bring your passport." },
        { step: "Within the first month of graduating", title: "Apply for Graduate Route visa", detail: "Apply before your Student Visa expires. The Graduate Route is valid for 2 years. You can work for any employer — you do not need a job offer to apply." },
      ],
      phd: [
        { step: "18–24 months before", title: "Find a supervisor and funded position", detail: "Search FindAPhD.com and jobs.ac.uk. Email supervisors directly. Apply to advertised funded positions. Your supervisor's support is critical." },
        { step: "12 months before", title: "Submit formal application", detail: "Your application needs a research proposal (usually 2,000–3,000 words) and your supervisor's letter of support." },
        { step: "6–8 months before", title: "Receive offer with funding confirmation", detail: "Confirm your funding package in writing — is tuition covered? What is your annual stipend? Accept in writing." },
        { step: "No earlier than 6 months before start", title: "Student Visa application", detail: "Include your CAS and funding documents. TB test required. IHS payment required." },
        { step: "After completion", title: "Graduate Route — 3 years", detail: "Apply immediately after receiving your final results. 3 years open work authorization gives you time to find a Skilled Worker sponsor." },
      ],
      work: [
        { step: "Before applying for jobs", title: "Check the eligible occupations list and salary thresholds", detail: "Not all jobs qualify for Skilled Worker sponsorship. Check the current list on gov.uk. Confirm the salary threshold for your specific occupation code." },
        { step: "Job search", title: "Find employers with a sponsor licence", detail: "Only companies on the Home Office's register of licensed sponsors can sponsor you. Check the register on gov.uk before spending time applying to a job." },
        { step: "Job offer received", title: "Employer issues Certificate of Sponsorship", detail: "The CoS contains your job title, salary, and reference number. Your employer assigns it to you through the Sponsorship Management System." },
        { step: "CoS received", title: "Apply for Skilled Worker Visa", detail: "Apply online at gov.uk. Pay the visa fee (£610–£1,500 depending on duration) plus IHS (£1,035/year). Processing: 3–8 weeks." },
        { step: "5 years on Skilled Worker Visa", title: "Apply for Indefinite Leave to Remain", detail: "Permanent residence after 5 years. Then British citizenship after 1 more year. You can keep your Nigerian passport." },
      ],
    },

    tips: {
      undergrad: [
        { title: "IELTS for UKVI is different from regular IELTS — many Nigerians make this mistake", body: "You must book 'IELTS Academic for UKVI' specifically. A regular IELTS Academic certificate is NOT accepted for a UK Student Visa application. Both are run by British Council and IDP but the UKVI version is slightly more expensive and must be taken at a specific test centre. Double-check when booking." },
        { title: "The 28-day bank statement rule is strictly enforced", body: "Your funds must appear in your bank account for 28 consecutive days before you apply for your visa. If money was deposited and then withdrawn, or if it appeared recently, your visa will likely be refused. Plan your finances at least 2 months before applying." },
        { title: "Proof of ties to Nigeria for the Student Visa", body: "UK Student Visa officers want to see that you have reasons to return to Nigeria eventually (even if you later apply for Graduate Route or Skilled Worker Visa). Things that help: signed letter from a Nigerian employer stating your job is being kept for you, family ties (spouse, children, elderly parents), property ownership documents, business registration. You do not need to be planning to return — but you need to show you have genuine roots." },
        { title: "Nigerian student societies at UK universities are genuinely helpful", body: "Every major UK university has a Nigerian or African-Caribbean Society. They run cultural events, help with housing, connect you with senior Nigerian students who share useful knowledge, and create a community that makes adjusting to UK life much easier. Find them on Instagram before you arrive." },
        { title: "Cost of living outside London saves you roughly 30%", body: "Many Nigerian students default to London universities. Manchester, Birmingham, Nottingham, Leeds, and Edinburgh have excellent universities and living costs are significantly lower. Unless your course is specifically London-based, consider this trade-off carefully." },
      ],
      masters: [
        { title: "Chevening is one of the most prestigious scholarships Nigerians can apply for", body: "Chevening covers full tuition, living costs of approximately £14,000/year, return flights, and other allowances. Nigerian Chevening alumni include politicians, professors, doctors, and senior business leaders. You must have 2 years of work experience to apply. Applications open in August and close in November — apply every year until you get it." },
        { title: "A 1-year UK masters is fully valid internationally", body: "Some Nigerian families worry that a 1-year masters is not as credible as a 2-year program. It is — UK 1-year masters are structured to be intensive and rigorous. Employers and institutions worldwide accept them. You save 1 year of living costs compared to Canada or the US." },
        { title: "The Graduate Route changed the UK from a temporary destination to a real option", body: "Before 2021, international students had to leave within 4 months of graduating. Now you get 2 years (3 for PhD) to work freely. This is a genuine career-building window." },
      ],
      phd: [
        { title: "The Commonwealth PhD Scholarship is specifically for Nigerians and fully funded", body: "The Commonwealth Scholarship Commission has a specific PhD scholarship for developing countries including Nigeria. It covers tuition, living allowance, flights, and thesis allowance. Nigerians win these every year. Apply through the Nigerian Federal Scholarship Board." },
        { title: "jobs.ac.uk is where funded UK PhD positions are officially advertised", body: "Set up email alerts on jobs.ac.uk for your research field. Many funded positions are only advertised there and are not widely shared elsewhere. Check it weekly." },
      ],
      work: [
        { title: "NHS actively recruits Nigerians and has partnerships in Nigeria", body: "NHS trusts hold international recruitment events in Lagos and Abuja. If you are a nurse, doctor, pharmacist, or allied health professional, search specifically for 'NHS international recruitment Nigeria'. The process is structured and clearly documented on the NHS website." },
        { title: "Verify your employer is on the licensed sponsors register before applying", body: "The Home Office publishes a public list of all licensed sponsors on gov.uk. Before spending time applying to a job, search for the company's name in the register. Fake job offers targeting Nigerians with false sponsorship promises exist — this register is your protection." },
        { title: "Nigerian lawyers can convert to UK qualification via the SQE", body: "The Solicitors Qualifying Examination (SQE) is a 2-part assessment that qualifies you as a UK solicitor without needing a UK law degree. Nigerian-qualified barristers and solicitors have used this route to build careers in UK law firms." },
        { title: "Proof of ties to Nigeria for work visa applications", body: "For visitor visas and some initial work permit applications, showing ties to Nigeria strengthens your case. Relevant documents: Certificate of Occupancy or land documents (family property counts), letter from Nigerian employer, spouse and children in Nigeria, business registration documents, Nigerian bank account with regular activity." },
      ],
    },

    universities: {
      undergrad: [
        { name: "University of Manchester", location: "Manchester, England", known_for: "Engineering, Business, Sciences, Medicine", avg_tuition: "£20,000–£26,000/yr", acceptance: "58%", nigerian_community: "Very large" },
        { name: "Coventry University", location: "Coventry, England", known_for: "Business, Engineering, Art & Design, Nursing", avg_tuition: "£14,000–£18,000/yr", acceptance: "75–80%", nigerian_community: "Very large" },
        { name: "University of Hertfordshire", location: "Hatfield, England", known_for: "Business, Computing, Engineering, Nursing", avg_tuition: "£13,500–£16,500/yr", acceptance: "75%", nigerian_community: "Very large" },
        { name: "University of Nottingham", location: "Nottingham, England", known_for: "Pharmacy, Engineering, Business, Biosciences", avg_tuition: "£18,000–£24,000/yr", acceptance: "60–65%", nigerian_community: "Large" },
        { name: "University of Birmingham", location: "Birmingham, England", known_for: "Medicine, Law, Engineering, Commerce", avg_tuition: "£19,000–£27,000/yr", acceptance: "55–60%", nigerian_community: "Large" },
        { name: "University of Greenwich", location: "London, England", known_for: "Business, Computing, Engineering, Architecture", avg_tuition: "£14,500–£17,500/yr", acceptance: "75%", nigerian_community: "Very large" },
      ],
      masters: [
        { name: "University College London (UCL)", location: "London, England", known_for: "Medicine, Architecture, Laws, Sciences, Education", avg_tuition: "£24,000–£38,000/yr", acceptance: "20–30%", nigerian_community: "Large" },
        { name: "London School of Economics (LSE)", location: "London, England", known_for: "Economics, Finance, Law, Political Science", avg_tuition: "£28,000–£35,000/yr", acceptance: "14–18%", nigerian_community: "Medium" },
        { name: "University of Edinburgh", location: "Edinburgh, Scotland", known_for: "Medicine, Law, Business, Sciences", avg_tuition: "£20,000–£28,000/yr", acceptance: "38–45%", nigerian_community: "Medium" },
        { name: "University of Glasgow", location: "Glasgow, Scotland", known_for: "Medicine, Engineering, Business, Law", avg_tuition: "£17,000–£24,000/yr", acceptance: "45–55%", nigerian_community: "Medium" },
        { name: "University of Exeter", location: "Exeter, England", known_for: "Business, Law, Medicine, Social Sciences", avg_tuition: "£18,000–£24,000/yr", acceptance: "55%", nigerian_community: "Small but growing" },
      ],
      phd: [
        { name: "University of Oxford", location: "Oxford, England", known_for: "All disciplines — globally top-ranked", avg_tuition: "Often funded for strong candidates", acceptance: "Highly competitive (~17%)", nigerian_community: "Small but prominent" },
        { name: "University of Cambridge", location: "Cambridge, England", known_for: "Sciences, Engineering, Humanities, Medicine", avg_tuition: "Often funded for strong candidates", acceptance: "Highly competitive (~18%)", nigerian_community: "Small but prominent" },
        { name: "Imperial College London", location: "London, England", known_for: "Engineering, Medicine, Computing, Sciences", avg_tuition: "Often funded", acceptance: "Competitive (~20%)", nigerian_community: "Medium" },
        { name: "University of Manchester", location: "Manchester, England", known_for: "Engineering, Sciences, Business", avg_tuition: "Funded positions available", acceptance: "Competitive", nigerian_community: "Very large" },
      ],
      work: [],
    },

    embassy: {
      name: "British High Commission Nigeria",
      address: "Plot 1137 Shehu Shagari Way, Maitama, Abuja, Nigeria",
      phone: "Visa and immigration enquiries are handled online — there is no general phone line for visa applications",
      note: "All UK visa applications are submitted online through gov.uk. The British High Commission does not accept walk-in visa applications.",
      website: "https://www.gov.uk/world/organisations/british-high-commission-abuja",
      visa_apply: "https://www.gov.uk/student-visa",
      vfs: "https://nigeria.tlscontact.com/",
      official_immigration: "https://www.gov.uk/browse/visas-immigration",
      extra_links: [
        { label: "Apply for UK Student Visa (official)", url: "https://www.gov.uk/student-visa" },
        { label: "Graduate Route Visa (post-study work)", url: "https://www.gov.uk/graduate-visa" },
        { label: "Skilled Worker Visa", url: "https://www.gov.uk/skilled-worker-visa" },
        { label: "UCAS — Undergraduate Applications", url: "https://www.ucas.com/" },
        { label: "FindAPhD — UK PhD Positions", url: "https://www.findaphd.com/" },
        { label: "jobs.ac.uk — UK Academic Jobs and Funded PhDs", url: "https://www.jobs.ac.uk/" },
        { label: "Licensed Sponsors Register (check your employer)", url: "https://www.gov.uk/government/publications/register-of-licensed-sponsors-workers" },
        { label: "IHS (Immigration Health Surcharge) Payment", url: "https://www.immigration-health-surcharge.service.gov.uk/" },
        { label: "TLScontact Nigeria — Biometrics (Lagos, Abuja, Port Harcourt)", url: "https://nigeria.tlscontact.com/" },
        { label: "Chevening Scholarship", url: "https://www.chevening.org/" },
      ],
    },

    scholarships: {
      undergrad: [
        { name: "Commonwealth Shared Scholarship", amount: "Full tuition + living allowance + flights + other costs", university: "Select UK universities only", deadline: "December each year", url: "https://cscuk.fcdo.gov.uk/scholarships/commonwealth-shared-scholarships/" },
        { name: "University of Nottingham Developing Solutions Scholarship", amount: "Full or 50% tuition waiver", university: "University of Nottingham", deadline: "February each year", url: "https://www.nottingham.ac.uk/studywithus/international-applicants/scholarships-fees-and-finance/scholarships/developing-solutions-scholarships.aspx" },
        { name: "GREAT Scholarship", amount: "Minimum £10,000 off tuition", university: "Various UK universities — check British Council Nigeria", deadline: "Varies by university", url: "https://study-uk.britishcouncil.org/scholarships/great-scholarships" },
      ],
      masters: [
        { name: "Chevening Scholarship", amount: "Full tuition + ~£14,000 living costs + flights + visa fees", university: "Any UK university, any subject", deadline: "November each year", url: "https://www.chevening.org/" },
        { name: "Commonwealth Masters Scholarship", amount: "Full tuition + living allowance + flights", university: "Select UK universities", deadline: "December each year", url: "https://cscuk.fcdo.gov.uk/scholarships/commonwealth-master-scholarships/" },
        { name: "GREAT Scholarship (Masters)", amount: "Minimum £10,000 off tuition", university: "Various UK universities", deadline: "Varies", url: "https://study-uk.britishcouncil.org/scholarships/great-scholarships" },
      ],
      phd: [
        { name: "Commonwealth PhD Scholarship", amount: "Full tuition + living stipend + flights + thesis grant", university: "Select UK universities", deadline: "October each year — apply via Federal Scholarship Board Nigeria", url: "https://cscuk.fcdo.gov.uk/scholarships/commonwealth-phd-scholarships-for-lics-and-umic/" },
        { name: "UKRI Doctoral Studentships", amount: "Full tuition + ~£18,000/year living stipend (2024 rate)", university: "Research universities across UK", deadline: "Varies by program and university", url: "https://www.ukri.org/what-we-offer/developing-people-and-skills/find-studentships-and-fellowships/" },
      ],
      work: [],
    },
  },

  // ─────────────────────────────────────────────
  // SWEDEN
  // ─────────────────────────────────────────────
  SE: {
    tagline: "Fully-funded PhDs, world-class quality of life, and Europe's most generous scholarship for Nigerians",
    overview: "Sweden is one of Europe's most underrated destinations for Nigerians. It offers a very high standard of living, excellent universities, and a genuine commitment to equality and work-life balance. The Swedish Institute Scholarship is one of the most generous fully-funded scholarships available to Nigerians for Masters programs. For PhD students, the situation is even better — a Swedish PhD is a salaried job with full employee benefits. The main challenge is the cost of living and limited job opportunities for non-EU/EEA workers in some sectors.",

    stats: {
      undergrad:  { tuition: "SEK 80,000–200,000/yr (approx. ₦2.5M–₦6.5M)", living: "SEK 10,500–12,000/month (Swedish Migration Agency figure)", processing: "4–8 weeks", acceptance: "Varies by program", minIELTS: "5.5–6.5 or equivalent (see note)", currency: "SEK" },
      masters:    { tuition: "SEK 80,000–200,000/yr (approx. ₦2.5M–₦6.5M)", living: "SEK 10,500–12,000/month", processing: "4–8 weeks", acceptance: "Varies by program", minIELTS: "6.0–6.5 or equivalent (see note)", currency: "SEK" },
      phd:        { tuition: "FREE — PhD is a salaried employment position", living: "SEK 25,000–35,000/month (your salary)", processing: "4–8 weeks", acceptance: "Very competitive", minIELTS: "Required for language test — check program", currency: "SEK" },
      work:       { salary: "SEK 35,000–65,000/month", processing: "4–8 weeks", pathway: "Swedish Work Permit / EU Blue Card", minIELTS: "Not required for visa — but employer may test", currency: "SEK" },
    },

    visa: {
      undergrad: `**Swedish Residence Permit for Studies (Undergraduate)**

Sweden does not issue a "student visa." Instead, non-EU students apply for a Residence Permit from the Swedish Migration Agency (Migrationsverket). This permit is your legal basis for living and studying in Sweden.

**Step 1 — Apply through universityadmissions.se**
All undergraduate applications for international students go through one central portal: universityadmissions.se. There is no other way to apply to Swedish universities as an international student. Anyone telling you otherwise or charging you to apply directly to a Swedish university is not telling the truth.

Application window: Opens October 15, closes January 15 for the autumn (September) semester.
You can apply to up to 4 programs. Application fee: SEK 900.

**Step 2 — Receive your admission decision**
Results are published in April for autumn semester admissions.

**Step 3 — Apply for Residence Permit at Migrationsverket**
Apply online at migrationsverket.se. You will need:
• Admission letter from your Swedish university
• Valid Nigerian passport (valid for duration of your studies)
• Proof of funds: the Swedish Migration Agency requires you to show SEK 10,500 per month of study. For a 3-year bachelor's degree (36 months), this means showing SEK 378,000 in accessible funds — approximately £28,000. Note: this is the minimum requirement. Check the current figure on migrationsverket.se as it is updated regularly.
• Proof of paid tuition (most universities require a deposit)
• Health insurance (or proof your university provides it)

**Processing:** Typically 4–8 weeks. Apply as soon as you have your admission letter.

**English language requirements:**
Universities set their own requirements. Most English-taught programs accept:
• IELTS Academic (typically 5.5–6.5 depending on program)
• TOEFL iBT
• Cambridge English qualifications
Some universities accept a statement from your Nigerian secondary school or university confirming that your education was conducted entirely in English — but this varies by institution and program. Always check the specific program requirements on the university's website. Do not assume — confirm directly.

**Working while studying:**
As a Residence Permit holder studying in Sweden, you are allowed to work during your studies. There is no hour limit. This helps offset the high cost of living.

**Bringing your spouse or children:**
• Your spouse can apply for a Residence Permit as a dependant
• They can work in Sweden while you study
• Your children can attend Swedish schools (education is free)
• You must show you can financially support your family — the Migration Agency adds approximately SEK 3,500–5,000/month per additional family member to the funds requirement`,

      masters: `**Swedish Residence Permit for Studies (Masters)**

Masters programs are where Sweden is strongest for Nigerian students. Over 1,000 programs are taught entirely in English at Swedish universities, covering engineering, technology, business, public health, computer science, and many more.

**How to apply:**
Apply through universityadmissions.se by January 15 for autumn start. You can apply to up to 4 programs. Pay the SEK 900 application fee. Results in April.

**English language — important note for Nigerian masters applicants:**
Swedish universities accept several forms of English proof:
• IELTS Academic: most programs require 6.0–6.5 overall
• TOEFL iBT
• Cambridge English (CAE or CPE)
• Pearson PTE Academic
• In many cases, a letter from your previous university confirming that the language of instruction was English may be accepted — but this is at the INDIVIDUAL university's discretion and the requirement varies from program to program. Some Swedish universities explicitly accept this for admission purposes. Check each program page.

Important: Even if the university accepts a letter for admission, the Swedish Migration Agency (for your Residence Permit) does NOT require a language test — English proficiency is the university's requirement, not the Migration Agency's.

**Funds requirement:**
The Swedish Migration Agency requires you to show SEK 10,500 per month of your study period. For a 2-year masters (24 months): SEK 252,000 (approximately £18,000). Check migrationsverket.se for the current official figure.

**The Swedish Institute Scholarship:**
This is the single most important thing for Nigerian masters applicants to know. The Swedish Institute (a government agency) offers a full scholarship that covers:
• All tuition fees
• SEK 11,000/month living allowance
• Travel grant
• Health insurance

Nigeria is on the list of eligible countries. Applications open in October and close in mid-January each year. Apply at si.se. This scholarship is competitive but Nigerians win it every year. Apply regardless of whether you think you will get it.

**After graduation:**
You can apply for a 12-month job-seeking permit to stay in Sweden and look for work. This is a separate permit applied for after your Residence Permit expires.

**Bringing your spouse or children:**
Your spouse can come to Sweden on a dependant Residence Permit. They are allowed to work. Your children can attend Swedish school (free). Additional funds requirement: approximately SEK 3,500–5,000/month per family member.`,

      phd: `**PhD in Sweden — A Salaried Job, Not a Student Program**

This is the most important thing to understand about Swedish PhDs: it is an employment contract, not a student admission. You apply for a PhD position the same way you apply for a job. If selected, you become a university employee.

**What this means for you:**
• You receive a salary (typically SEK 25,000–35,000/month depending on year of study and department)
• You pay Swedish income tax on your salary
• You contribute to the Swedish pension system
• You receive paid annual leave (approximately 28 days per year)
• You have access to parental leave (relevant if you have or plan to have children)
• You do NOT pay tuition — the university pays for your studies as part of your employment
• You are covered by Swedish collective agreements and employment law

**How to find PhD positions:**
Positions are formally advertised on:
• The individual university's jobs/careers page (e.g., ki.se/en/jobs for Karolinska Institutet)
• academicpositions.com/jobs/sweden
• varbi.com (used by many Swedish universities)
• jobs.ac.uk also lists some Swedish positions

Apply as you would for a job: CV (academic format — include publications, thesis title, research interests), cover letter, references from supervisors or professors.

**Residence Permit for PhD students:**
Because you are employed, you apply for a work permit (Arbetstillstånd), not a student permit. You apply with your employment contract from the university. Process: 4–8 weeks.

**Funds requirements:**
Because you have a salary, you do not need to show separate proof of living funds. Your employment contract is your proof.

**Swedish language:**
Your program and daily lab/department work may be in English, but Swedish is widely spoken. The government offers free Swedish language classes (SFI — Svenska för Invandrare). Start as soon as you arrive. Speaking Swedish significantly improves your social integration and long-term employment options.

**Path to permanent residence:**
After 4 years of continuous residence in Sweden, you can apply for permanent residence (permanent uppehållstillstånd). After 5 years, you can apply for Swedish citizenship. Sweden allows dual citizenship — you keep your Nigerian passport.

**Bringing your spouse or children:**
As a salaried employee, bringing your family is straightforward. Your spouse can apply for a Residence Permit and is allowed to work in Sweden. Your children attend Swedish school for free. This makes Sweden one of the most family-friendly PhD destinations in the world.`,

      work: `**Working in Sweden as a Nigerian**

**Work Permit**
To work in Sweden as a non-EU/EEA citizen, you need a work permit. Unlike Express Entry in Canada or the Skilled Worker Visa in the UK, the Swedish system is employer-driven:
• Your employer finds you and decides to hire you
• The job must meet the collective agreement salary for that occupation (typically SEK 26,000/month minimum — check the current threshold)
• Your employer must have advertised the position to EU/EEA candidates first (under Swedish law)
• Your employer submits the work permit application on your behalf — you cannot apply without a job offer

**EU Blue Card:**
For highly qualified workers with a university degree and a high salary offer (currently SEK 49,875/month or more — verify on migrationsverket.se), the EU Blue Card provides faster processing and more flexibility to move between EU countries.

**Best sectors for Nigerians in Sweden:**
• Tech/IT: Stockholm has a very strong tech startup and corporate tech sector (Spotify, Klarna, King, Ericsson are based there). Software engineers are in high demand.
• Healthcare: Sweden has an ageing population and actively needs doctors and nurses. Foreign healthcare credentials need validation by Socialstyrelsen (the National Board of Health) — this takes 6–12 months but the process is clear.
• Engineering: Volvo, Ericsson, Saab, ABB all hire internationally
• Finance: Stockholm is a major Nordic financial hub

**Job search reality:**
Swedish hiring processes are slow — typical timeline from application to start date is 2–4 months. Swedish is required for most roles outside Stockholm tech and international companies. If you do not speak Swedish, focus your job search on international tech companies in Stockholm.

**Bringing your spouse or children:**
Your spouse can come to Sweden on a dependant Residence Permit and is permitted to work. Your children attend Swedish school for free.`,
    },

    timeline: {
      undergrad: [
        { step: "October 15 — January 15", title: "Apply at universityadmissions.se", detail: "This is the only portal for international students. Create your account, upload documents (transcripts, degree certificate, English test results), select up to 4 programs, and pay the SEK 900 fee before the January 15 deadline." },
        { step: "January–March", title: "Upload supporting documents", detail: "You get a deadline to upload certified transcripts and proof of English. Transcripts from Nigerian universities should be official (stamped by your registrar). Make sure your document upload is complete before the portal deadline." },
        { step: "April", title: "Admission results published", detail: "Log into universityadmissions.se to see your results. If admitted, you will receive an official admission letter. Accept your place and pay your tuition deposit." },
        { step: "April–May", title: "Apply for Residence Permit at Migrationsverket", detail: "Apply online immediately after receiving your admission letter. You need: admission letter, passport, proof of funds (SEK 10,500/month × months of study), proof of health insurance, and paid tuition deposit." },
        { step: "June–July", title: "Residence Permit decision", detail: "Most decisions take 4–8 weeks. If approved, you receive a decision letter and your biometric Residence Permit is ready to collect when you arrive in Sweden." },
        { step: "August — arrival week", title: "Register at Skatteverket (Swedish Tax Agency)", detail: "Get your personnummer (Swedish personal identity number) within your first week. This number is required for literally everything: bank account, SIM card, library card, healthcare, gym membership. Bring your passport and Residence Permit." },
      ],
      masters: [
        { step: "October–November", title: "Apply for Swedish Institute Scholarship", detail: "Go to si.se. Application usually opens in October and closes mid-January. This is separate from your university application — you submit both. The scholarship covers full tuition + living costs + travel." },
        { step: "October 15 — January 15", title: "Apply at universityadmissions.se", detail: "Apply to up to 4 programs. Both applications (SI Scholarship and universityadmissions.se) must be submitted by mid-January. They are linked — your scholarship application references your program choices." },
        { step: "April", title: "Admission results", detail: "Check universityadmissions.se in April. Swedish Institute Scholarship results come in May. If you get the scholarship, your financial situation for your studies is resolved." },
        { step: "April–May", title: "Apply for Residence Permit", detail: "Apply on migrationsverket.se with your admission letter. If you have the SI Scholarship, include your scholarship award letter — this satisfies the financial means requirement." },
        { step: "August — arrival week", title: "Personnummer registration at Skatteverket", detail: "Do this in your first week. Without your personnummer, you cannot open a bank account or access most services." },
        { step: "After graduation", title: "Apply for 12-month job-seeking permit", detail: "Apply before your Residence Permit expires. This gives you one year to find a Swedish employer willing to sponsor your work permit." },
      ],
      phd: [
        { step: "Ongoing throughout the year", title: "Monitor PhD job boards weekly", detail: "Set up email alerts on academicpositions.com, varbi.com, and your target universities' career pages. Swedish PhD positions open throughout the year — there is no single application season." },
        { step: "When you find a position", title: "Apply as a job application", detail: "CV in academic format (research experience, publications, thesis topic, languages, references). Cover letter showing specific fit with the project. Strong candidates are invited for interview — sometimes in person, sometimes by video." },
        { step: "Offer received", title: "Sign employment contract", detail: "You will receive a formal employment contract, not an admission letter. This contract specifies your salary, start date, and terms. This is what you use for your Residence Permit application." },
        { step: "Contract signed", title: "Apply for Work Permit (not Student Permit)", detail: "Apply at migrationsverket.se using your employment contract. Processing: 4–8 weeks." },
        { step: "Arrival week", title: "Register at Skatteverket", detail: "Get your personnummer. As an employee, you will also automatically be enrolled in the Swedish pension system (PPM) and collective agreement benefits." },
        { step: "Year 4 of residence", title: "Apply for Permanent Residence", detail: "After 4 years of continuous residence, apply for permanent uppehållstillstånd. After 5 years, apply for Swedish citizenship (you keep your Nigerian passport)." },
      ],
      work: [
        { step: "Before starting job search", title: "Be realistic about language requirements", detail: "Many Stockholm tech jobs are in English. Outside Stockholm, Swedish is usually required. Decide whether to study Swedish first (SFI is free after you have a personnummer) or target English-speaking companies specifically." },
        { step: "Job search", title: "Use Swedish-specific job platforms", detail: "LinkedIn, Glassdoor Sweden, Blocket Jobb, arbetsformedlingen.se, and company career pages. For tech specifically, search for Stockholm tech startups — the city has a very active international tech community." },
        { step: "Job offer received", title: "Employer submits work permit application", detail: "Your employer (not you) submits the application to Migrationsverket. They must confirm the salary meets collective agreement standards. Processing: 4–8 weeks." },
        { step: "Permit approved — arrival", title: "Personnummer and bank account setup", detail: "Register at Skatteverket immediately. Open a bank account (Swedbank or Handelsbanken are easiest for new arrivals). Consider getting a BankID (digital identity used for all Swedish banking and government services)." },
        { step: "4 years of residence", title: "Apply for Permanent Residence", detail: "Work permits can be renewed annually. After 4 years continuous residence, apply for permanent residence." },
      ],
    },

    tips: {
      undergrad: [
        { title: "universityadmissions.se is the ONLY way to apply — there is no other portal", body: "This is very important. All international applications go through this one government portal. There are consultants and websites in Nigeria that charge fees to 'apply to Swedish universities' on your behalf. They use the same portal you can use for free. Save your money and apply directly." },
        { title: "The personnummer unlocks everything in Sweden", body: "The Swedish personal identity number (personnummer) from Skatteverket is the most important document you will get after arriving. Without it, you cannot open a bank account, get a SIM contract, join a gym, or access most services. Register at your nearest Skatteverket office within the first week. Bring your passport and Residence Permit card." },
        { title: "SEK 10,500/month is the Migration Agency's minimum — budget more", body: "The Swedish Migration Agency sets SEK 10,500/month as the minimum to show for your Residence Permit. In practice, Stockholm is more expensive. Budget SEK 12,000–14,000/month for Stockholm, SEK 9,000–11,000/month for other cities. Student housing (offered by most universities) is cheaper than the private market." },
        { title: "Swedish culture is quiet, not unfriendly", body: "Swedes are known for being reserved, especially with strangers. This is different from Nigerian social culture where conversation starts easily. In Sweden, relationships take time to develop. The best way to build friendships is through structured activities — join a sports club, choir, study group, or Nigerian/African student association. The friendships you build will be genuine and long-lasting." },
        { title: "SFI (Swedish for Immigrants) is completely free", body: "SFI classes are free at municipal adult education centers for anyone with a personnummer. You can start at any time. Learning Swedish transforms your daily life, social connections, and employment options. Even if your program is in English, start Swedish classes when you arrive." },
      ],
      masters: [
        { title: "The Swedish Institute Scholarship is Nigeria's most underutilised opportunity for masters students", body: "Many Nigerians have never heard of the Swedish Institute Scholarship, yet it is one of the most generous fully-funded masters scholarships available to Nigerians. It covers everything: tuition, SEK 11,000/month living costs, travel, and health insurance. Apply every year. Check si.se for the exact eligibility requirements and deadline each year." },
        { title: "Confirm English requirements directly with each program — they vary", body: "Some programs accept a letter confirming English medium of instruction from your Nigerian university. Others require IELTS specifically. Others accept TOEFL or Cambridge. There is no universal rule. Go to each program's specific requirements page on the university website and read carefully before booking any tests." },
        { title: "Swedish masters programs are research-intensive", body: "Coursework involves writing papers, group projects, and critical analysis — much less rote memorisation than what many Nigerian students experienced at home. This suits students who think independently. The adjustment period can be challenging but most Nigerian students adapt well and excel." },
        { title: "Stockholm, Gothenburg, Lund — choose your city carefully", body: "Stockholm is the largest city (most expensive, most international jobs). Gothenburg is Sweden's second city — strong in engineering and shipping (Chalmers University). Lund is a university town near Malmö — smaller, cheaper, excellent university, very international student population." },
        { title: "Proof of ties to Nigeria is relevant for your Residence Permit", body: "While Sweden does not ask for ties to Nigeria as strictly as the UK or US, showing that you have a legitimate reason to be in Sweden (studying) and a background that makes sense is important. Your admission letter and financial documents are the main things. If asked, ties to Nigeria include: family property documents, sponsor letter from parents or family, employment letter from a Nigerian company." },
      ],
      phd: [
        { title: "A Swedish PhD is genuinely one of the best deals in the world for ambitious Nigerians", body: "You are paid a salary, contribute to a pension, have job security, get annual leave, can bring your family, and graduate with a world-class PhD. The trade-off is that positions are very competitive and may take time to secure. But for the right person, it is worth pursuing seriously." },
        { title: "Karolinska Institutet is one of the world's top medical research institutions", body: "Karolinska Institutet (KI) in Stockholm awards the Nobel Prize in Physiology or Medicine. A PhD from KI is recognised worldwide in medicine and life sciences. Nigerian doctors and scientists have graduated from KI and gone on to international careers." },
        { title: "Your family can join you and your spouse can work", body: "As a salaried PhD employee, your spouse receives a Residence Permit that includes work authorization. They do not need to find their own employer sponsor. This makes Sweden significantly more family-friendly than many other PhD destinations." },
        { title: "File your Swedish tax return every year", body: "As a salary earner in Sweden, you file a tax return (deklaration) every year. Sweden's tax authority (Skatteverket) sends you a pre-filled form — most employees just confirm it is correct online. You may be eligible for deductions that result in a refund." },
      ],
      work: [
        { title: "Swedish workplace culture values work-life balance — adapt to it", body: "Swedes leave work on time. Staying late to impress your manager is not a positive signal in Swedish culture — it may suggest you are inefficient. Work is completed within work hours. This is a significant cultural adjustment but ultimately positive for wellbeing." },
        { title: "Fika (coffee break) is a real workplace institution", body: "Swedish offices have fika — a communal coffee/tea break, usually twice a day. It is where relationships are built, ideas are shared, and colleagues get to know each other. Participate even if you do not drink coffee. It is considered slightly odd to skip it regularly." },
        { title: "Healthcare credential validation takes time but is structured", body: "If you are a Nigerian doctor or nurse, you need to have your credentials validated by Socialstyrelsen (the National Board of Health and Welfare). The process takes 6–12 months and may include language tests or additional assessments. The process is clearly documented on socialstyrelsen.se. Start it before you try to work." },
        { title: "Proof of ties to Nigeria for initial entry", body: "When applying for a Swedish work permit, you are already coming with a job offer so ties are less relevant. However, for Swedish visitor visas or if you are between permits, proof of ties helps: family property documents, active Nigerian bank account, family members in Nigeria, letter from a Nigerian employer." },
      ],
    },

    universities: {
      undergrad: [
        { name: "Stockholm University", location: "Stockholm", known_for: "Law, Social Sciences, Natural Sciences, Humanities", avg_tuition: "SEK 90,000–130,000/yr", acceptance: "50–60%", nigerian_community: "Small but growing" },
        { name: "Uppsala University", location: "Uppsala (45 min from Stockholm)", known_for: "Medicine, Law, Sciences, Theology — Sweden's oldest university", avg_tuition: "SEK 90,000–140,000/yr", acceptance: "45–55%", nigerian_community: "Small" },
        { name: "Linköping University", location: "Linköping", known_for: "Engineering, Medicine, Information Technology, Business", avg_tuition: "SEK 80,000–120,000/yr", acceptance: "60–65%", nigerian_community: "Small" },
        { name: "Örebro University", location: "Örebro", known_for: "Business, Law, Healthcare, Social Sciences", avg_tuition: "SEK 80,000–110,000/yr", acceptance: "65%", nigerian_community: "Very small" },
      ],
      masters: [
        { name: "KTH Royal Institute of Technology", location: "Stockholm", known_for: "Engineering, Computer Science, Architecture, Physics", avg_tuition: "SEK 125,000–175,000/yr", acceptance: "20–30%", nigerian_community: "Small but active" },
        { name: "Chalmers University of Technology", location: "Gothenburg", known_for: "Engineering, Architecture, Shipping, Sustainable Technology", avg_tuition: "SEK 130,000–170,000/yr", acceptance: "25–35%", nigerian_community: "Small" },
        { name: "Lund University", location: "Lund (near Malmö)", known_for: "Medicine, Law, Engineering, Business, Sciences", avg_tuition: "SEK 85,000–165,000/yr", acceptance: "30–40%", nigerian_community: "Small" },
        { name: "Stockholm School of Economics (SSE)", location: "Stockholm", known_for: "Business, Finance, Economics — top Scandinavian business school", avg_tuition: "SEK 180,000–230,000/yr", acceptance: "15–20%", nigerian_community: "Very small" },
        { name: "University of Gothenburg", location: "Gothenburg", known_for: "Social Sciences, Natural Sciences, IT, Arts", avg_tuition: "SEK 90,000–130,000/yr", acceptance: "50%", nigerian_community: "Very small" },
        { name: "Malmö University", location: "Malmö", known_for: "Urban Studies, International Migration, Business, IT", avg_tuition: "SEK 80,000–110,000/yr", acceptance: "60%", nigerian_community: "Very small" },
      ],
      phd: [
        { name: "Karolinska Institutet (KI)", location: "Stockholm", known_for: "Medicine and Biomedical Sciences — awards Nobel Prize in Medicine", avg_tuition: "Fully salaried employment", acceptance: "Highly competitive", nigerian_community: "Small" },
        { name: "KTH Royal Institute of Technology", location: "Stockholm", known_for: "Engineering, Computing, Architecture, Physics", avg_tuition: "Fully salaried employment", acceptance: "Competitive", nigerian_community: "Small" },
        { name: "Chalmers University of Technology", location: "Gothenburg", known_for: "Engineering, Energy, Materials Science", avg_tuition: "Fully salaried employment", acceptance: "Competitive", nigerian_community: "Very small" },
        { name: "Uppsala University", location: "Uppsala", known_for: "Medicine, Sciences, Humanities — strong in chemistry and biology", avg_tuition: "Fully salaried employment", acceptance: "Competitive", nigerian_community: "Small" },
      ],
      work: [],
    },

    embassy: {
      name: "Embassy of Sweden in Nigeria",
      address: "Plot 1247, Yedseram Street, Maitama, Abuja, Nigeria",
      phone: "The Swedish Embassy handles consular matters. Visa/permit applications go online through Migrationsverket — the embassy does not process permits directly.",
      note: "All Residence Permit applications are submitted online at migrationsverket.se. The Swedish Embassy in Abuja does not accept walk-in visa applications for permits.",
      website: "https://www.swedenabroad.se/en/embassies/nigeria-abuja/",
      visa_apply: "https://www.migrationsverket.se/English/Private-individuals/Studying-in-Sweden.html",
      vfs: "https://www.vfsglobal.com/sweden/nigeria/",
      official_immigration: "https://www.migrationsverket.se/English.html",
      extra_links: [
        { label: "universityadmissions.se — Apply to all Swedish universities", url: "https://www.universityadmissions.se/" },
        { label: "Swedish Migration Agency — Study Permits", url: "https://www.migrationsverket.se/English/Private-individuals/Studying-in-Sweden.html" },
        { label: "Swedish Migration Agency — Work Permits", url: "https://www.migrationsverket.se/English/Private-individuals/Working-in-Sweden.html" },
        { label: "Swedish Institute Scholarship (SI)", url: "https://si.se/en/apply/scholarships/swedish-institute-scholarships-for-global-professionals/" },
        { label: "Find PhD Positions in Sweden — Academic Positions", url: "https://academicpositions.com/jobs/sweden" },
        { label: "Skatteverket — Registering for Personnummer", url: "https://www.skatteverket.se/servicelankar/otherlanguages/inenglish/individualsandemployees/movingtoandfromswedenandothercountries/registrationatthetaxagency.4.7be5268414bea064694b33a.html" },
        { label: "VFS Global Nigeria — Biometrics for Sweden", url: "https://www.vfsglobal.com/sweden/nigeria/" },
        { label: "Karolinska Institutet — PhD Vacancies", url: "https://ki.se/en/about/jobs-at-ki" },
        { label: "Swedish Embassy Abuja", url: "https://www.swedenabroad.se/en/embassies/nigeria-abuja/" },
      ],
    },

    scholarships: {
      undergrad: [
        { name: "Swedish Institute Scholarship for Global Professionals (SISGP)", amount: "Full tuition + SEK 11,000/month living + travel grant + health insurance", university: "All Swedish universities offering SI-eligible programs", deadline: "Mid-January each year — check si.se annually", url: "https://si.se/en/apply/scholarships/swedish-institute-scholarships-for-global-professionals/" },
        { name: "Individual University Scholarships", amount: "Varies — typically 25–100% tuition waiver", university: "KTH, Lund, Stockholm University, Chalmers — check each university", deadline: "January each year — check each university website", url: "https://www.universityadmissions.se/en/All-you-need-to-know1/Scholarships/" },
      ],
      masters: [
        { name: "Swedish Institute Scholarship for Global Professionals (SISGP)", amount: "Full tuition + SEK 11,000/month living allowance + travel grant + health insurance", university: "All Swedish universities offering eligible programs", deadline: "Mid-January each year — verify exact date at si.se", url: "https://si.se/en/apply/scholarships/swedish-institute-scholarships-for-global-professionals/" },
        { name: "Lund University Global Scholarship", amount: "75% or 100% tuition waiver", university: "Lund University", deadline: "February each year", url: "https://www.lunduniversity.lu.se/international/scholarships-and-funding/scholarships-prospective-students" },
        { name: "KTH Scholarship", amount: "Full tuition waiver", university: "KTH Royal Institute of Technology", deadline: "January each year", url: "https://www.kth.se/en/studies/master/scholarships" },
        { name: "Chalmers IPOET Scholarship", amount: "75% tuition reduction", university: "Chalmers University of Technology", deadline: "January each year", url: "https://www.chalmers.se/en/education/scholarships/" },
      ],
      phd: [
        { name: "PhD Employment Position", amount: "Full salary SEK 25,000–35,000/month + benefits + pension", university: "All Swedish universities — apply per advertised position", deadline: "Positions advertised throughout the year", url: "https://academicpositions.com/jobs/sweden/phd" },
        { name: "Karolinska Institutet PhD Positions", amount: "Full salary + employment benefits", university: "Karolinska Institutet, Stockholm", deadline: "Rolling — check ki.se/en/about/jobs-at-ki", url: "https://ki.se/en/about/jobs-at-ki" },
      ],
      work: [],
    },
  },
};
