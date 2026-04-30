// Guide content for each country
// All figures verified from official sources — always check official sites as rules change
// Sources: canada.ca/ircc, gov.uk, migrationsverket.se, si.se

export const GUIDE_CONTENT = {

  // ─────────────────────────────────────────────
  // CANADA
  // ─────────────────────────────────────────────
  CA: {
    tagline: "One of the most Nigerian-friendly countries for students and skilled workers",
    overview: "Canada is one of the top destinations for Nigerians. The immigration system is points-based, clear, and actively welcomes international students and skilled workers. Many Nigerians have built full lives here by going: student visa → post-graduation work permit → permanent residency. Cities like Toronto have some of the largest Nigerian communities outside Africa.",

    stats: {
      undergrad:  { tuition: "CAD 20,000–35,000/yr", living: "CAD 1,000–1,500/month", processing: "4–12 weeks", acceptance: "Varies by school", minIELTS: "6.0 overall", currency: "CAD" },
      masters:    { tuition: "CAD 18,000–40,000/yr", living: "CAD 1,000–1,500/month", processing: "4–12 weeks", acceptance: "Varies by program", minIELTS: "6.5–7.0 overall", currency: "CAD" },
      phd:        { tuition: "Often fully funded", living: "CAD 1,500–2,500/month (stipend)", processing: "4–12 weeks", acceptance: "Very competitive", minIELTS: "6.5 overall", currency: "CAD" },
      work:       { salary: "CAD 45,000–90,000/yr", processing: "2–6 months", pathway: "Express Entry / LMIA Work Permit", minIELTS: "CLB 7+ recommended", currency: "CAD" },
      visitor:    { fee: "CAD 100 (TRV fee)", processing: "2–8 weeks", duration: "Up to 6 months per entry", pathway: "Temporary Resident Visa (TRV)", currency: "CAD" },
    },

    summary: {
      undergrad: {
        intro: "Canada's undergraduate Study Permit is open to any Nigerian accepted at a government-approved (DLI) school. The process starts with applying to a university — nothing happens until you have a Letter of Acceptance. Tuition runs CAD 20,000–35,000 per year. You will need to show proof of funds through a GIC account before the visa is issued.",
        firstSteps: [
          { action: "Get your WAEC/NECO results verified at the WAEC office", detail: "Takes 2–4 weeks. Canadian universities specifically require a Verification Certificate — not just your result slip. Do this before anything else." },
          { action: "Take IELTS Academic — target 6.0 overall minimum (6.5 to be safe)", detail: "Book at British Council or IDP in Lagos, Abuja, or Port Harcourt. You have 2–3 months before typical application windows open." },
          { action: "Apply to 4–6 Designated Learning Institutions (DLIs)", detail: "Apply through each university's own website. Application fee: CAD 100–200 per school. You need: WAEC certificate, transcripts, IELTS result, personal statement, reference letters." },
          { action: "Once admitted: pay your deposit and set up a GIC account", detail: "Your GIC (CAD 20,635 deposited at CIBC, Scotiabank, or SBI Canada) is not a fee — the money is released back to you monthly after you arrive. The GIC certificate is required to apply for your Study Permit." },
          { action: "Apply for your Study Permit at canada.ca (CAD 150 fee)", detail: "Upload: Letter of Acceptance, GIC certificate, IELTS result, bank statements, Statement of Purpose, passport. Then attend biometrics at VFS Global in Lagos or Abuja (CAD 85)." },
        ],
        keyFacts: [
          "Processing: 4–12 weeks after biometrics",
          "Your approval letter is NOT your Study Permit — the physical card is issued at the Canadian airport on arrival",
          "GIC money is NOT lost — it comes back to you in monthly payments",
          "Your spouse gets an Open Work Permit and can work anywhere in Canada while you study",
          "WAEC verification takes 2–4 weeks — start this first, before choosing schools",
        ],
        outcome: "After your degree, you qualify for a Post-Graduation Work Permit (PGWP) — up to 3 years of open work authorization. Canadian work experience then feeds into Express Entry for Permanent Residency.",
      },
      masters: {
        intro: "Canada is the best country in the world for Nigerians who want to study and then stay. A 1–2 year masters leads to a 3-year open work permit (PGWP), which leads to Permanent Residency through Express Entry. Many thousands of Nigerians have completed this exact path. The process starts with applying to a university — nothing moves until you have a Letter of Acceptance.",
        firstSteps: [
          { action: "Research programs and shortlist 4–6 universities — apply to all of them", detail: "Start at each university's School of Graduate Studies website. Do not apply to only one school. Programs range from course-based (no research required) to thesis-based (you work with a supervisor). Choose based on your career goals." },
          { action: "Take IELTS Academic — target 7.0 overall (most top programs require this)", detail: "University of Toronto requires 7.0 minimum with no band below 6.5. Book at British Council or IDP in Lagos, Abuja, or Port Harcourt." },
          { action: "Get your degree and transcripts officially certified", detail: "Your degree certificate and transcripts must be officially stamped by your university's registrar. Some programs also require WES (World Education Services) evaluation — do this at wes.org, costs ~USD 246, takes ~7 weeks." },
          { action: "Once admitted: pay your tuition deposit and set up your GIC account", detail: "Open a GIC account (CAD 20,635) at CIBC, Scotiabank StartRight, or SBI Canada. This takes 2–3 weeks. The money is released back to you in monthly payments after arrival — it is a savings account, not a fee." },
          { action: "Apply for Study Permit at canada.ca (CAD 150) and attend biometrics at VFS Global", detail: "Upload: Letter of Acceptance, GIC certificate, IELTS result, Statement of Purpose, transcripts, passport. Biometrics fee: CAD 85 at VFS Global Lagos or Abuja. Processing: 4–12 weeks." },
        ],
        keyFacts: [
          "ALL masters graduates now receive a 3-year PGWP — even 1-year programs (changed February 2024)",
          "GIC money (CAD 20,635) is returned to you in monthly instalments after you arrive — it is not a fee",
          "Your spouse gets an Open Work Permit — they can work for any employer in Canada while you study",
          "Apply for PGWP within 180 days of graduating — missing this window ends your path to PR",
          "After 1 year of skilled Canadian work, you qualify for Canadian Experience Class — a fast-track PR route",
        ],
        outcome: "Masters → 3-year PGWP (work anywhere in Canada) → Express Entry Permanent Residency. Most Nigerians with strong IELTS scores (CLB 9) receive a PR invitation within 6–18 months of finishing their PGWP.",
      },
      phd: {
        intro: "Canadian PhD programs are 4–5 years and almost always fully funded. Your supervisor pays your tuition AND gives you a monthly stipend (CAD 18,000–28,000/year). You must contact professors directly — this is how Canadian PhD admissions work. One professor who agrees to supervise you is your entry point.",
        firstSteps: [
          { action: "Email 10–20 professors whose research matches your interests", detail: "Write each email in under 200 words. Reference one specific paper they published and say something specific about it. Explain how your background connects to their work. Attach your CV. Ask if they are accepting PhD students. This is normal and expected in Canada — not rude." },
          { action: "Apply formally only to programs where a professor has expressed interest", detail: "Your application needs: research proposal (1,000–2,000 words), Statement of Purpose, CV with all publications and research experience, 3 reference letters (at least 2 academic), degree certificate and transcripts, IELTS Academic (6.5 minimum)." },
          { action: "Receive your funded offer letter — confirm everything in writing", detail: "Confirm: Is tuition waived? What is the annual stipend? Are there TA/RA duties? What is the expected duration? Get this in writing. This offer letter is what makes your Study Permit application strong." },
          { action: "Apply for Study Permit at canada.ca (CAD 150)", detail: "Include your funding/offer letter — it proves to IRCC you are financially supported. Biometrics: CAD 85 at VFS Global Lagos or Abuja." },
        ],
        keyFacts: [
          "Most Canadian PhD students receive full tuition waiver + CAD 18,000–28,000/year stipend",
          "TA (Teaching Assistant) and RA (Research Assistant) work counts as Canadian work experience for Express Entry",
          "After graduation: 3-year PGWP + TA/RA experience = very competitive Express Entry profile",
          "Emailing professors is expected and normal — professors post their emails because they want students to reach out",
          "Provincial Nominee Programs can add 600 CRS points — essentially guaranteeing a PR invitation",
        ],
        outcome: "PhD graduation → 3-year PGWP → Express Entry PR within 6–18 months for most Nigerian PhD graduates with TA/RA experience and strong IELTS scores.",
      },
      work: {
        intro: "There are two ways to work in Canada as a Nigerian: Express Entry (apply for Permanent Residency from outside Canada using your qualifications) or an LMIA Work Permit (a Canadian employer sponsors you for a specific job). Most Nigerians who move to Canada for work use Express Entry. The process starts with two mandatory steps you can do right now.",
        firstSteps: [
          { action: "Get your Nigerian degree evaluated by WES (World Education Services)", detail: "Go to wes.org. Cost: ~USD 246. Takes ~7 weeks once WES receives your documents. This is mandatory for Express Entry — you cannot create an Express Entry profile without a WES evaluation." },
          { action: "Take IELTS — target 8.0+ in all 4 bands (CLB 9)", detail: "Language points are the biggest lever in your CRS score. Going from CLB 7 to CLB 9 can add 50–80+ points. Book IELTS General Training at British Council or IDP. Take it multiple times if needed." },
          { action: "Use the Come to Canada tool at canada.ca to estimate your CRS score", detail: "Before spending months on applications, estimate your score. If you are below 440, focus on improving your IELTS first. Know your score before deciding which path to take." },
          { action: "Create your Express Entry profile at canada.ca", detail: "Once your WES evaluation and IELTS scores are ready, submit your profile. You are now in the pool. Draws happen every 2–4 weeks. If you receive an Invitation to Apply (ITA), you have 90 days to submit your full PR application." },
        ],
        keyFacts: [
          "WES evaluation is mandatory for Express Entry — start it now even if you are months away from applying",
          "IELTS CLB 9 (8.0+ in every band) gives you maximum language points — the most impactful thing you can improve",
          "2024 Express Entry cut-off scores: STEM occupations ~491, Healthcare ~422–463, General draws ~460–500+",
          "LMIA path: a Canadian employer hires you, pays CAD 1,000 to apply for LMIA, then you apply for a work permit — takes 2–5 months",
          "After 1 year of skilled Canadian work experience, you qualify for Canadian Experience Class — faster PR track",
        ],
        outcome: "Express Entry PR application takes ~6 months from Invitation to Apply. LMIA work permit + 1 year experience → Canadian Experience Class → PR. Either path leads to full Permanent Residency.",
      },
      visitor: {
        intro: "The Canada Visitor Visa (officially called a Temporary Resident Visa or TRV) allows Nigerians to visit Canada for tourism, family visits, or short business trips — up to 6 months per entry. Canada is not an easy visa to get for Nigerians. The rejection rate is significant. The key factor is convincing the visa officer that you have strong reasons to leave Canada and return to Nigeria.",
        firstSteps: [
          { action: "Gather your core financial documents before anything else", detail: "Canada wants to see 3–6 months of bank statements showing stable funds — not money deposited just before you apply. The rough benchmark is CAD 2,500–3,000 per month of your planned stay. If a sponsor is funding your trip, include their bank statements and a sponsor letter. Unstable or recently deposited funds are a common rejection reason." },
          { action: "Get a strong invitation letter if visiting family or friends", detail: "If someone in Canada invited you, they write a formal letter: their full name, Canadian status (citizenship, PR, study/work permit), address, relationship to you, the purpose of your visit, and confirmation they are hosting you. Attach a copy of their Canadian status document. This letter significantly strengthens applications for family visits." },
          { action: "Apply online at canada.ca/ircc", detail: "Create an IRCC account at canada.ca. Select 'Visitor Visa'. The application fee is CAD 100. You will upload: valid Nigerian passport (with at least 6 months validity beyond your planned return date), recent passport photos, bank statements, proof of employment or business in Nigeria, travel itinerary (even a rough one), hotel bookings or host invitation letter." },
          { action: "Biometrics at VFS Global in Lagos or Abuja", detail: "After submitting, IRCC sends a Biometrics Instruction Letter. Book at VFS Global (vfsglobal.ca/canada/nigeria). Fee: CAD 85. Biometrics are valid for 10 years — if you gave them before, check if they are still valid." },
          { action: "Prepare your ties-to-Nigeria evidence thoroughly", detail: "This is the most important part of your application. Ties to Nigeria that count: current employment letter from Nigerian employer confirming your role, leave approval, and that your job will be held; business registration documents if self-employed; land or property ownership documents (C of O, deed); letter confirming children are in school in Nigeria; family ties such as a spouse or dependants who remain in Nigeria." },
        ],
        keyFacts: [
          "A Multiple Entry TRV (METV) allows you to re-enter Canada multiple times within 10 years — request this unless you only need a single entry",
          "Processing time is 2–8 weeks — do not book flights before your visa is approved",
          "Rejection is common for first-time applicants — if rejected, you can reapply immediately but must address every reason given in the refusal letter",
          "Having a previous US, UK, or Schengen visa in your passport helps significantly — it shows other countries have approved you",
          "Even small details matter: a return flight booking, hotel confirmation, and a clear day-by-day itinerary all strengthen your application",
        ],
        outcome: "A successful TRV application grants entry for up to 6 months. You can apply for an extension inside Canada (another CAD 100) if you need more time. A Multiple Entry visa allows return visits without reapplying each time.",
      },
    },

    visa: {
      undergrad: `**What is a Study Permit?**
A Study Permit is the document that allows you to study in Canada. You apply for it online through the IRCC (Immigration, Refugees and Citizenship Canada) website at canada.ca. It is not a visa — your actual visa (if required) is issued alongside it.

**Step 1 — Find a school and apply**
Canada only issues Study Permits to students accepted at government-approved schools called Designated Learning Institutions (DLIs). The full list is at canada.ca. Popular choices for Nigerians: University of Toronto, York University, Toronto Metropolitan University, University of Calgary, University of Alberta.

Each school has its own application portal. Go directly to the university website, find the "Apply" or "Admissions" page, and create an account. You will need:
• Your WAEC/NECO results (get them verified at the WAEC office — takes 2–4 weeks)
• Your secondary school transcripts
• IELTS Academic score (most undergrad programs need 6.0 overall minimum)
• Personal statement (some schools call it a Statement of Purpose or Admissions Essay)
• Reference letters (some programs require 1–2)
• Application fee — varies by school, typically CAD 100–200

**Step 2 — Receive your Letter of Acceptance (LOA)**
When a school admits you, they send a Letter of Acceptance. This letter is the most important document for your visa application. Pay your tuition deposit (usually CAD 3,000–5,000) to confirm your place. The school will then finalise your LOA.

**Step 3 — Set up your GIC (Guaranteed Investment Certificate)**
For most Nigerian Study Permit applicants, IRCC requires you to deposit CAD 20,635 into a Canadian GIC account before applying. This money is NOT lost — it is released to you in monthly payments once you arrive in Canada. Think of it as a forced savings account. Use CIBC, Scotiabank (StartRight program), or SBI Canada — they all accept applications from Nigeria. Processing typically takes 2–3 weeks. You will receive a GIC certificate to include in your visa application.

**Step 4 — Apply for your Study Permit online**
Go to canada.ca and create an IRCC account. The Study Permit application fee is CAD 150. You will upload:
• Letter of Acceptance from your school
• Valid Nigerian passport (must cover your full study period)
• GIC certificate
• Bank statements (3–6 months showing stable funds)
• IELTS Academic result (taken within the last 2 years)
• Statement of Purpose — explain why you want to study in Canada, why you chose this school and program, and what your plans are after graduating
• Passport-style photographs

Your Statement of Purpose is critical. IRCC officers read hundreds of these. Be specific: name the program, name the school, explain your background in Nigeria and how this degree connects to it, and explain what you plan to do after. A vague statement raises red flags.

**Step 5 — Biometrics**
After submitting your application, IRCC will send you a Biometrics Instruction Letter (BIL). Book an appointment at VFS Global in Lagos or Abuja. The biometrics fee is CAD 85 (approximately ₦50,000 at current rates). Bring your passport and the instruction letter. Biometrics are valid for 10 years once given.

**Processing time:** Typically 4–12 weeks after biometrics. Apply the moment you receive your LOA — do not wait.

**What happens at the Canadian airport:**
Your Study Permit approval letter is NOT your actual permit. At the Canadian Port of Entry (airport), an immigration officer will check your documents and issue the physical Study Permit card. Carry all original documents in your hand luggage: LOA, passport, proof of funds, GIC certificate, approval letter. Do not put these in checked luggage.

**Bringing your spouse or children:**
• Your spouse/partner can apply for an Open Work Permit — they can work for any employer anywhere in Canada while you study
• Your children can attend Canadian primary or secondary school at no extra cost
• Show additional funds of approximately CAD 4,000/year per additional family member
Apply for their permits at the same time as yours — submit everything together

**────────────────────────────────────────────**
**FULL WALKTHROUGH — Canada Undergraduate, Start to Finish**
**────────────────────────────────────────────**

This section walks you through the entire process from the very beginning — before you have chosen a school, before you have sat any exam, before you have told your family. Read it once end to end before doing anything else.

**Where to begin: before you apply to any school**

The first thing most Nigerian students do wrong is go straight to university websites and start filling in forms without having done any of the groundwork. By the time they realise they are missing a WAEC verification certificate or that their IELTS score is too low, they have wasted months and sometimes application fees.

Do these three things first, in this order, before touching any university application:

One — go to the WAEC office and request a Verification Certificate for your O-level results. This is not your original result slip. It is a separate document that Canadian universities specifically require to confirm your results are genuine. The WAEC office in Lagos is at Plot 326, Independence Avenue, Wuse 2, Abuja; there are also offices in Lagos and other state capitals. The process takes 2–4 weeks and costs a small fee. Do it immediately. Do not assume you can do it later — it has caused many Nigerians to miss application deadlines.

Two — register for IELTS Academic. Not IELTS General Training — Academic. The minimum most Canadian undergraduate programs accept is 6.0 overall, but 6.5 is safer and gives you more options. You sit the test at British Council or IDP offices in Lagos (Victoria Island), Abuja, or Port Harcourt. Give yourself at least 8–12 weeks of focused preparation. You can retake it as many times as you need — there is no limit. Your result is valid for 2 years. If you already have a recent result above 6.0, skip this step and use what you have.

Three — make a list of 6–8 Designated Learning Institutions (DLIs). A DLI is a Canadian school that the government has approved to accept international students. Canada will not issue a Study Permit for a school that is not on this list. The full list is on canada.ca — search "Designated Learning Institutions list." Popular options for Nigerians: University of Toronto (Toronto, highly competitive), York University (Toronto, large Nigerian community, more accessible), Toronto Metropolitan University (Toronto, very diverse), University of Calgary (Calgary, good for engineering and business), University of Alberta (Edmonton, lower tuition than Ontario schools), Dalhousie University (Halifax, lower cost of living). Research each school's international admissions page. Look at tuition, IELTS requirement, acceptance rate, and Nigerian student reviews.

**Applying to universities**

Each Canadian DLI has its own application portal — there is no central UCAS-style system for Canada. You go to each university's website, find the international or undergraduate admissions page, and create an account. Apply to at least 4–6 schools. Do not apply to only one or two. Applications are not free — expect to pay CAD 100–200 per school.

For each application you will need:
Your WAEC Verification Certificate. Your official secondary school transcripts — these must be stamped by the school's registrar or academic secretary, not just printed from a portal. Your IELTS Academic result. A personal statement — some schools call it a Statement of Purpose or Admissions Essay. This is typically 500–1,000 words. Write about why you want to study this specific subject, what experience or interests led you to it from your life in Nigeria, and what you want to do with the degree. Be specific and genuine. One or two reference letters from teachers or school administrators who know your academic work.

Deadlines vary by school and program but most Canadian universities have rolling admissions or January/February deadlines for September start. Check each school's international admissions page for exact dates.

**After you apply — waiting for a decision**

Canadian universities take 4–8 weeks to make decisions on complete applications. You will receive either an offer of admission or a rejection by email, and through your application portal. If you receive multiple offers, compare tuition, location, program content, and scholarship availability before deciding.

**Accepting your offer and paying your deposit**

Once you decide which school to attend, log into their admissions portal and formally accept your offer. You will then need to pay a tuition deposit — typically CAD 3,000–5,000 — to secure your place. This deposit is usually deducted from your first semester tuition. After you pay, the university finalises and issues your Letter of Acceptance (LOA). This letter is the single most important document for your visa application. Keep it safe. You cannot apply for a Study Permit without it.

**Setting up your GIC — the step that confuses most Nigerian families**

Before you can apply for your Study Permit, you need to deposit CAD 20,635 into a special account called a Guaranteed Investment Certificate (GIC). This money is NOT a fee and it is NOT paid to the Canadian government. It stays in a Canadian bank account in your name and is released back to you in monthly payments once you arrive in Canada. Think of it as a forced savings account that Canada holds on your behalf to confirm you can support yourself in your first year.

The banks that accept GIC applications from Nigeria are CIBC (cibc.com/international), Scotiabank (StartRight program — scotiabank.com/startright), and SBI Canada. Each has a slightly different process but all can be done online from Nigeria. You send the money via international wire transfer and the bank processes the GIC within 2–3 weeks. You then receive a GIC certificate, which you include in your Study Permit application.

Your family needs to transfer CAD 20,635 to the bank — at current rates this is roughly ₦30–35 million depending on exchange rates. This money will come back. Do not let anyone tell you it is a visa fee or that it is non-refundable.

**Applying for your Study Permit**

Go to canada.ca and create an IRCC (Immigration, Refugees and Citizenship Canada) account. The Study Permit application is done entirely online. The application fee is CAD 150.

You will upload the following documents:
Your Letter of Acceptance from the university. Your GIC certificate. Your valid Nigerian passport — it must be valid for at least the entire length of your program. If it expires sooner, renew it at the Nigerian Immigration Service before applying. Your IELTS Academic certificate. Your bank statements covering the last 3–6 months. IRCC wants to see stable funds — money that has been sitting consistently in the account, not a large amount deposited 2 weeks ago. If your parents or a sponsor is funding you, you also need their bank statements and a signed sponsor letter explaining the relationship. Your Statement of Purpose for the visa — this is separate from your university personal statement. In this document you explain to the IRCC visa officer why you want to study in Canada, why you chose this school and program, what your plans are after graduating, and what ties you have to Nigeria that give you reasons to maintain a connection to home. Be specific. Mention your family in Nigeria, your career plans, your long-term intentions. A vague statement like "I want to further my education" raises red flags. Passport-size photographs.

Submit everything at once. Incomplete applications are rejected and the fee is not refunded.

**Biometrics**

After you submit your application, IRCC will send you a Biometrics Instruction Letter (BIL) by email — usually within a few days of submission. This letter instructs you to give your fingerprints and a photograph at an authorised biometrics centre. In Nigeria, this is done at VFS Global — Lagos (Plot 5, Block 14, Balarabe Musa Crescent, Victoria Island) or Abuja (Kingsway Plaza, Plot 1152, Cadastral Zone B06, Maitama). Book your appointment online at vfsglobal.ca/canada/nigeria. The biometrics fee is CAD 85 — pay online when booking. Bring your passport and the BIL to the appointment. The appointment itself takes about 30 minutes. Biometrics are valid for 10 years, so if you have previously given biometrics for Canada, check your BIL — you may not need to go again.

**Processing time and what happens next**

After biometrics, your application enters the processing queue. Current processing times are 4–12 weeks — check the IRCC website for up-to-date estimates. You can track your application through your IRCC online account. Do not book flights until your permit is approved.

When IRCC approves your application, they email you an approval letter called a Port of Entry Letter of Introduction. This letter is NOT your Study Permit. Do not confuse them. The actual Study Permit is issued by a border officer when you land at the Canadian airport.

**Before you travel**

While waiting for your visa, do the following: Apply for on-campus housing the same day you accepted your university offer — on-campus residence fills fast and priority is usually given in order of application date. Set up a Canadian bank account before you arrive — Scotiabank StartRight and TD International Student Banking both allow pre-arrival setup from Nigeria. Join Nigerian student WhatsApp or Facebook groups for your specific university — search "[University name] Nigerian students" — these groups are invaluable for settling in. Book your flight only after your approval letter arrives.

**At the Canadian airport**

Carry ALL of the following documents in your hand luggage — never in checked bags: your Nigerian passport, your Port of Entry Letter of Introduction (the approval letter IRCC emailed you), your Letter of Acceptance from the university, your GIC certificate, your IELTS result, your bank statements, and a copy of your tuition receipt. The border officer will check these documents and issue your physical Study Permit card at the airport. They may ask you questions about your program, your plans after graduation, and your ties to Nigeria. Answer honestly and specifically.

**After you arrive**

Open your Canadian bank account immediately if you did not do it from Nigeria. Register at your university. Your GIC bank will release the first monthly payment to you within a few weeks of arrival — usually around CAD 1,700 depending on the bank's disbursement schedule. You are allowed to work up to 24 hours per week off-campus during the academic year and full-time during scheduled breaks (winter break, summer). You do not need a separate work permit — your Study Permit includes work authorization.

**The path after your degree**

When you complete your undergraduate degree, you are eligible for a Post-Graduation Work Permit (PGWP). The length of the PGWP depends on the length of your program — a 4-year degree gives you up to 3 years of open work authorization. Apply for the PGWP within 180 days of receiving your final results. With Canadian work experience, you then become competitive for Permanent Residency through Express Entry. This is the path many Nigerians take: undergraduate degree → PGWP → Canadian work experience → Express Entry PR invitation.`,

      masters: `**Masters in Canada — The Most Popular Route for Nigerians**

Canada is one of the best countries in the world to do a masters if your goal is to eventually settle abroad. The path is clear: Masters (1–2 years) → Post-Graduation Work Permit (up to 3 years) → Permanent Residency via Express Entry. Many Nigerians have done this successfully.

**Step 1 — Find the right program and apply**
Start at the university's School of Graduate Studies website. Most Canadian universities have a centralised graduate admissions system.

REAL EXAMPLE — University of Toronto Masters:
Portal: apply.sgs.utoronto.ca
Application fee: CAD 130
IELTS requirement: Minimum 7.0 overall, no band below 6.5
Required documents:
• Your degree certificate and transcripts (official, stamped by your university registrar)
• Two letters of reference (at least one from an academic supervisor who knew your work)
• Statement of Purpose — typically 1–2 pages, explaining your research interests, why this program, and your career goals
• CV/Resume
• IELTS Academic result (taken within 24 months)
• Some programs require a writing sample or portfolio

What U of T looks for: Strong academic record (minimum 2:1 equivalent, roughly 3.3/4.0 GPA), specific research interests that match faculty work, well-written Statement of Purpose. They know Nigerian university grades — a First Class or strong 2:1 from UNILAG, OAU, ABU, or UNN is competitive.

Apply to 4–6 programs. Do not apply to only one. Shortlist schools at different competitiveness levels.

**Step 2 — Receive your Letter of Acceptance and pay deposit**
Once admitted, pay your tuition deposit (usually CAD 3,000–5,000) to secure your place. The university then issues your formal Letter of Acceptance (LOA). You cannot apply for a Study Permit without this letter — it is the single most important document in your application.

**Step 3 — Set up your GIC (Guaranteed Investment Certificate)**
Deposit CAD 20,635 into a Canadian GIC account before applying for your Study Permit. Banks that accept Nigerian applications: CIBC, Scotiabank (StartRight program), and SBI Canada. The application takes about 2–3 weeks and you receive a GIC certificate. This money is NOT lost — it is released back to you in monthly instalments after you arrive in Canada. It is a savings account, not a fee.

**Step 4 — Apply for your Study Permit at canada.ca**
Create an IRCC account and pay the CAD 150 application fee. Upload:
• Letter of Acceptance from your university
• GIC certificate
• Valid Nigerian passport (must be valid for your full program duration)
• IELTS Academic result (taken within the last 2 years)
• Bank statements (3–6 months showing stable funds — not just a recent large deposit)
• Statement of Purpose explaining why you want to study in Canada, why you chose this school and program, and what you plan to do after graduating
• Any scholarship letters you have received

Your Statement of Purpose matters. Be specific: name the program, name why this school, explain your Nigerian academic background and work experience, and explain your plans after graduation. A vague statement raises red flags.

**Step 5 — Biometrics at VFS Global**
After submitting your application, IRCC sends a Biometrics Instruction Letter (BIL). Book an appointment at VFS Global in Lagos or Abuja. Fee: CAD 85. Bring your passport and the instruction letter. Biometrics are valid for 10 years.

**Processing time:** 4–12 weeks after biometrics.

**The Post-Graduation Work Permit (PGWP) — why Canada is worth it:**
This is the most important thing to understand. After you complete ANY masters program (even if it is only 1 year), you qualify for a 3-year PGWP — an open work permit that lets you work for any employer anywhere in Canada. This rule changed in February 2024 to apply to ALL master's graduates, not just those from 2-year programs.

Three years of Canadian work experience then feeds into Express Entry for Permanent Residency. The typical Nigerian path: Masters (1–2 years) → PGWP (3 years working) → Express Entry PR invitation.

IMPORTANT: You must apply for the PGWP within 180 days of graduating. Apply immediately after you receive your final results. Do not miss this window. As of November 2024, you also need to include a language proficiency test result (IELTS) with your PGWP application. Apply online at canada.ca. Processing currently takes 80–180 days but you can start working full-time as soon as you submit the application (as long as your Study Permit was still valid when you applied).

**Bringing your spouse or children:**
Your spouse gets an Open Work Permit — they can work any job anywhere in Canada. Children can attend school. Show approximately CAD 4,000–6,000 extra per family member per year.

**────────────────────────────────────────────**
**FULL WALKTHROUGH — Canada Masters, Start to Finish**
**────────────────────────────────────────────**

This section walks you through the entire masters process from the very beginning — from the moment you decide you want to go to Canada, through to the day you apply for Permanent Residency.

**Why Canada for a masters specifically**

Canada is the best option in the world for Nigerians who want to study and then stay. The path is real, it is well-documented, and thousands of Nigerians have done it. Here is the full sequence: you do a 1–2 year masters, then you apply for a Post-Graduation Work Permit (PGWP) which gives you 3 full years of open work authorization — you can work for any employer, in any city, doing any skilled job. Three years of Canadian work experience then feeds directly into Express Entry, which is Canada's points-based permanent residency system. Most Nigerians who complete this path receive a PR invitation within 6–18 months of finishing their PGWP work period. From the day you start your masters to the day you become a Permanent Resident is typically 5–7 years total.

No other country gives Nigerians this clear, documented, repeatable path. The UK has the Graduate Route (2 years, fewer PR options). Australia has similar systems but higher costs. The US has no guaranteed post-study work route. Canada is the most reliable route from Nigeria to Western residency through education.

**Step zero: things to do before you apply anywhere**

Before you touch any university application form, do these things:

Get your university degree certificate and transcripts officially stamped. Your final degree certificate must be certified by your university's registrar — the original stamp and signature, not a photocopy. Your transcripts must also be official. Do not use printed portal transcripts. Some Canadian programs require a WES (World Education Services) evaluation of your Nigerian degree. WES is a Canadian organisation that assesses whether your Nigerian degree is equivalent to a Canadian degree and gives it a Canadian GPA equivalent. The process costs approximately USD 246 and takes about 7 weeks from when WES physically receives your documents. Go to wes.org and start the process. Not all programs require it but having it ready saves time and is always useful for Express Entry later.

Take IELTS Academic. Target 7.0 overall with no individual band below 6.5. This is the benchmark for most top Canadian universities. University of Toronto, University of Waterloo, McGill, UBC, and most competitive programs require 7.0. Some programs accept 6.5. Check the specific requirement for each program you plan to apply to. Register at British Council or IDP in Lagos (Victoria Island), Abuja, or Port Harcourt. Give yourself 2–3 months of proper preparation. You can retake it. Your result is valid for 2 years.

Decide on course-based vs thesis-based masters. A course-based masters is like a taught program — you take courses and complete assignments and exams, no original research required. A thesis-based masters involves working with a supervisor on a specific research project and producing a thesis. Thesis-based programs are more likely to come with funding (a supervisor may pay your tuition and give you a stipend). Course-based programs rarely come with funding. If you want funding, target thesis-based programs and contact supervisors directly before applying. If you want to finish faster and pivot to working, a 1-year course-based program gets you to the PGWP fastest.

**Choosing programs and universities**

Go to each university's School of Graduate Studies or Faculty of Graduate and Postdoctoral Studies website. Browse programs by subject area. Read admission requirements carefully — minimum GPA, IELTS score, required documents, whether the program is course-based or thesis-based. Make a shortlist of 4–6 programs across different universities at different competitiveness levels. Apply to all of them. Do not apply to only one or two.

**How to choose the right university for you**

Do not just chase rankings. The right university depends on your field, your budget, and your post-graduation plan. Ask three questions: (1) Does this university have a strong department in my specific subject area — not generally strong, but specifically strong in what I want to do? (2) Is this university in a city where I could realistically find work after graduating? (3) Can I afford the tuition, or does this university offer scholarships or funded positions? A lesser-ranked university in a city with a strong job market in your field may serve you better than a top-ranked university in a smaller town with fewer employers.

For job market access: Toronto and Vancouver are Canada's best cities for tech, finance, and business. Calgary is strong for energy and engineering. Ottawa for government and policy. Montreal for tech, arts, AI research, and bilingual roles.

For funding: if your goal is to minimise debt, prioritise programs that offer teaching assistantships (TAs) or research assistantships (RAs) — these pay a stipend (typically CAD 15,000–20,000/year) in exchange for 10 hours of work per week. Most masters students at Canadian universities can access TA positions by applying through the department after admission.

Scholarships to know about: the Vanier Canada Graduate Scholarship (vanier.gc.ca) is for doctoral students — CAD 50,000/year for 3 years. The Ontario Graduate Scholarship is province-specific — CAD 10,000–15,000 for masters students at Ontario universities. Most universities also have internal scholarships listed on their graduate admissions pages — always check these.

Real examples of where to apply and what they need:
University of Toronto — apply at apply.sgs.utoronto.ca, fee CAD 130, IELTS 7.0 minimum (no band below 6.5), requires two reference letters and a Statement of Purpose. U of T is Canada's top-ranked university. Getting in is competitive but Nigerians with First Class or strong 2:1 degrees from UNILAG, OAU, UNN, ABU, or Covenant are regularly admitted.
University of Waterloo — strong for computer science, engineering, mathematics, and data science. Very good industry connections, co-op options for some programs.
McGill University — in Montreal, lower tuition than Ontario schools. Strong reputation in medicine, law, sciences, and business. Montreal has a cost of living lower than Toronto.
University of Ottawa — near federal government offices. Strong for law, public policy, and bilingual programs. Lower tuition and lower cost of living than Toronto.

**Writing your Statement of Purpose**

This document will make or break your application. Canadian admissions committees read hundreds of statements per year. Most are generic. Here is how to write one that gets noticed:

Name the specific program and why this specific program at this specific university — not why Canada generally. Reference a specific professor whose research interests you (look at the department's faculty page, read one of their papers, mention it). Explain your academic background in Nigeria specifically — your degree, your final year project or thesis if you had one, any research experience, any work experience, and how all of it connects directly to what you want to do in this masters. Be concrete. Say what research question or professional problem you want to address. Say what you plan to do after graduating — specific career plans in Nigeria, Canada, or internationally. Show that you have thought about this.

Do not write about how much you love Canada or how great the university is. Write about your ideas and your work. Spend 2–3 weeks on this document. Have someone whose writing you respect review it.

**Submitting applications and waiting for decisions**

After submitting, processing times vary by program and time of year. Most Canadian universities send decisions between January and April for September intake. Some programs have rolling admissions. You will be notified by email and through your application portal. If you receive multiple offers, compare them on: funding offered, tuition cost, location and cost of living, program length and structure, and program reputation in your field.

**Accepting your offer**

Log into the university's admissions portal and formally accept your offer. Pay the tuition deposit — usually CAD 3,000–5,000, deducted from your first semester fees. The university then issues your Letter of Acceptance (LOA). This letter is the key document for your Study Permit. Keep it. Without it, IRCC will not process your application.

**Setting up your GIC**

This step trips up many Nigerian families. Before applying for your Study Permit, you must deposit CAD 20,635 into a Canadian Guaranteed Investment Certificate (GIC) account. This money is not a visa fee. It is not paid to the government. It is deposited into a Canadian bank account in your name and released back to you monthly after you arrive — approximately CAD 1,700 per month for 12 months. The purpose is to prove to IRCC that you have funds to live on in your first year in Canada.

The banks that accept GIC applications from Nigeria are CIBC, Scotiabank (StartRight program), and SBI Canada. Apply online from Nigeria — you will create an account on the bank's website, complete the application, and send the money by international wire transfer from a Nigerian bank. Processing takes 2–3 weeks. You receive a GIC certificate, which you upload with your Study Permit application. Keep a copy.

At the current exchange rate, CAD 20,635 is roughly ₦30–35 million — rates change, calculate at time of transfer. Your family will need to send this amount. It all comes back to you in Canada.

**Applying for your Study Permit at canada.ca**

Go to canada.ca, create an IRCC account, and begin the Study Permit application. Fee: CAD 150. Upload:

Your Letter of Acceptance. Your GIC certificate. Your valid Nigerian passport — check the expiry date. It must be valid for your entire program. Renew it at the Nigerian Immigration Service if needed before you apply. Your IELTS Academic result (taken within the last 2 years). Your official transcripts and degree certificate. Your WES evaluation if required by your program. Your bank statements for the last 3–6 months — showing stable funds. If your parents or a sponsor is sending money on your behalf, include their bank statements and a signed letter from them explaining who they are and their relationship to you. Any scholarship letters you have received — include them as they strengthen your application. Your Statement of Purpose for the visa. This is different from your university Statement of Purpose. In this document you are writing to an IRCC officer. You explain why you are studying this program in Canada, what you plan to do after graduating, and what your ties to Nigeria are. Ties to Nigeria means: your family who live there, property or assets in Nigeria, your professional connections, or your career plans that connect to Nigeria. This is not about whether you plan to come back — IRCC just wants to know you are a genuine student with a real plan, not someone who will overstay. Be clear and specific. Passport-size photographs.

**Biometrics**

Within a few days of submitting your application, IRCC sends a Biometrics Instruction Letter (BIL) by email. Book your appointment at VFS Global Nigeria — Lagos (Plot 5, Block 14, Balarabe Musa Crescent, Victoria Island) or Abuja (Kingsway Plaza, Plot 1152, Maitama). Book at vfsglobal.ca/canada/nigeria. The fee is CAD 85. Bring your passport and the BIL. The appointment takes about 30 minutes. Biometrics are valid for 10 years.

**Processing and approval**

Processing takes 4–12 weeks after biometrics. Track your application through your IRCC online account. Do not book flights until approval. When approved, IRCC emails a Port of Entry Letter of Introduction — this is NOT your Study Permit. The actual permit is issued by the border officer at the Canadian airport.

**Arriving in Canada**

Carry all original documents in your hand luggage: passport, approval letter, LOA, GIC certificate, IELTS result, bank statements. The border officer issues your Study Permit card at the airport. They may ask what you are studying, where, and what your plans are after graduating. Answer clearly.

Once in Canada: open a Canadian bank account immediately if you did not do it from Nigeria (Scotiabank StartRight and TD International Student Banking allow pre-arrival setup). Register for your courses. Your GIC begins disbursing monthly payments within a few weeks of arrival. You are allowed to work up to 24 hours per week off-campus during the academic year and full-time during scheduled breaks. No separate work permit needed — it is included in your Study Permit.

**The Post-Graduation Work Permit (PGWP) — the most important step**

When you finish your masters, apply for the PGWP within 180 days of receiving your final results. Do not miss this window — missing it ends your right to apply. Apply online at canada.ca. As of November 2024, you must include a valid IELTS result with your PGWP application. Processing takes 80–180 days but you can start working immediately after you submit as long as your Study Permit was still valid when you applied. The PGWP gives you 3 years of open work authorization — work for any employer, anywhere in Canada, in any skilled job.

**Getting Permanent Residency**

During your PGWP work period, you are accumulating Canadian work experience. After 1 year of skilled work experience in Canada, you qualify for Canadian Experience Class — a stream within Express Entry. Create your Express Entry profile at canada.ca. Your CRS (Comprehensive Ranking System) score is based on: your age, your education level, your IELTS score (target CLB 9 — 8.0+ in every band for maximum points), and your Canadian work experience. Most Nigerian masters graduates with CLB 9 IELTS scores and 1–3 years of Canadian work experience are competitive for Express Entry invitations. Check your estimated score using the Come to Canada tool at canada.ca. When you receive an Invitation to Apply (ITA), you have 90 days to submit your full PR application. The entire PR process from ITA to decision typically takes 6 months.`,

      phd: `**PhD in Canada — Funded, Respected, and a Clear Path to PR**

Canadian PhD programs are typically 4–5 years. The most important thing to understand: most PhD positions in Canada are funded. Your supervisor pays your tuition AND gives you a monthly stipend, typically CAD 18,000–28,000 per year (CAD 1,500–2,300/month). You do not pay tuition out of pocket.

**How funding works:**
Professors in Canada receive research grants from bodies like NSERC, SSHRC, or CIHR. Part of that grant goes to paying PhD students. When a professor agrees to supervise you, they are committing to fund you. This is why you must contact professors BEFORE you apply — the formal application is almost a formality once a professor has said yes.

**Step 1 — Email professors directly (start 18–24 months before you want to begin)**
In Canada, emailing a professor to express interest in a PhD is expected and completely normal. Professors post their email addresses publicly because they want motivated students to reach out. Here is exactly how to do it:

Write a short email — under 200 words. In the email:
• Reference one specific paper they published and say one specific thing you found interesting or relevant (read the paper properly — professors can tell when you have not)
• Explain how your background connects to their research — be specific about your thesis topic, research methods you have used, or results from your own work
• Attach your CV
• Ask directly whether they are accepting PhD students for the upcoming cycle

Send to 10–20 professors across different universities. Expect responses from 1–4. One positive response is enough to move forward. A professor who says "yes, apply formally and mention my name in your application" is the best possible outcome — it dramatically increases your admission chances because supervisors advocate internally for candidates they want.

If a professor does not respond within 2–3 weeks, it is fine to send one polite follow-up. After that, move on.

**Step 2 — Apply formally through the university's graduate portal**
Once a professor has expressed interest, apply to their program through the university's own graduate admissions portal — each university has a separate one. Your application must include:
• Research proposal (typically 1,000–2,000 words): explain your proposed research question, why it matters, your methodology, and how it connects to the supervisor's work. This is the most important document in a PhD application — spend at least 2 weeks on it.
• Statement of Purpose: separate from the proposal — explains your academic background, why you chose this supervisor and program, and what your long-term goals are
• CV: include every publication (even conference papers and thesis chapters), all research experience, any teaching, and any grants or awards you have received
• 3 reference letters — at least 2 must be from academic supervisors who know your research work directly. Professional references are accepted for some programs but academic references carry more weight
• Your degree certificate and official transcripts from every university you attended — must be officially stamped by the registrar, not printed from a student portal
• IELTS Academic result — typically 6.5 overall minimum, but check the specific program (University of Toronto requires 6.5; some programs require 7.0)

**Step 3 — Receive your funded offer letter and confirm everything in writing**
When you are accepted, you receive an offer letter. Before accepting, confirm in writing:
• Is tuition fully waived? (It should be — most funded Canadian PhDs have zero tuition)
• What is the annual stipend — exactly? (Should be CAD 18,000–28,000 per year depending on university and department)
• Are there Teaching Assistant (TA) or Research Assistant (RA) duties as part of the funding — and how many hours per week?
• What is the expected duration?
• Is there a conference travel budget?
Get every detail confirmed in your offer letter before you accept. This offer letter is critical for your Study Permit application.

**Step 4 — Apply for your Study Permit at canada.ca**
Go to canada.ca and create an IRCC account. The Study Permit application fee is CAD 150. Upload:
• Your funded offer letter from the university — this is the key document. It shows IRCC you have confirmed financial support, which significantly speeds up processing and reduces refusal risk
• Valid Nigerian passport — must be valid for the entire duration of your PhD
• IELTS Academic result (taken within the last 2 years)
• Your degree certificate and transcripts
• Bank statements (3–6 months showing stable personal funds — even though you have a stipend, IRCC still wants to see your personal financial history)
• Statement of Purpose for the visa: this is separate from your academic Statement of Purpose. Write specifically about why you are doing this PhD in Canada, what your research is, and what your plans are after graduating. Mention your funding. Explain your ties to Nigeria (family, property, professional connections) to show you have reasons to maintain a connection to home.
• Passport-style photographs

Your Statement of Purpose for the visa matters independently of your academic application. IRCC officers read it to assess whether you are a genuine student with a credible plan. A vague statement raises flags even if you have a funded offer.

**Step 5 — Biometrics at VFS Global in Lagos or Abuja**
After submitting your application online, IRCC sends you a Biometrics Instruction Letter (BIL) by email. Book an appointment at VFS Global — Lagos or Abuja. Biometrics fee: CAD 85 (approximately ₦55,000 at current rates — rates change, calculate at the time). Bring your passport and the BIL. Biometrics are valid for 10 years once given, so if you have given biometrics before for a Canadian application, you may not need to do it again — check your BIL.

Processing time: 4–12 weeks after biometrics. Do not book your flight until your permit is approved.

**What happens at the Canadian airport:**
Your approval letter is NOT your actual Study Permit — it is just permission to travel. At the Canadian Port of Entry (airport), an immigration officer checks all your documents and issues the physical Study Permit card. Carry ALL original documents in your hand luggage: offer letter, passport, funding confirmation, approval letter, transcripts. Do not put any of these in checked luggage. The officer may ask you questions about your research and your plans.

**Building your path to PR during your PhD:**
Teaching Assistant (TA) and Research Assistant (RA) positions are paid Canadian work experience — they count toward your Comprehensive Ranking System (CRS) score in Express Entry. Keep records of every paid position: employer name, job title, hours per week, start and end dates, and salary. You are allowed to work on campus without a work permit as a full-time student. Off-campus, your Study Permit allows up to 24 hours per week during the academic year (this changed from 20 hours in 2024 — verify at canada.ca as this changes).

After your PhD, you receive a 3-year Post-Graduation Work Permit (PGWP) — an open work permit that lets you work for any employer anywhere in Canada. Apply for it within 180 days of receiving your final results. Include your IELTS result in the PGWP application (required since November 2024). You can start working full-time immediately after submitting the PGWP application while it is being processed.

Three years of Canadian skilled work experience after your PhD, combined with your TA/RA experience, feeds directly into Express Entry for Permanent Residency. Most Nigerian PhD graduates with strong IELTS scores (CLB 9 — 8.0+ in every band) and Canadian work experience receive an Express Entry invitation within 6–18 months of finishing their PGWP work period.

**Bringing your family:**
Your funded stipend proves to IRCC that you can financially support dependants — include your offer letter showing stipend amount. Your spouse or partner can apply for an Open Work Permit and work for any employer anywhere in Canada. Your children can attend Canadian primary and secondary school at no extra charge. You should show approximately CAD 4,000–6,000 additional funds per family member per year. Apply for their permits at the same time as yours.

**────────────────────────────────────────────**
**FULL WALKTHROUGH — Canada PhD, Start to Finish**
**────────────────────────────────────────────**

**Understanding what a Canadian PhD actually is**

A Canadian PhD is a research degree that takes 4–5 years. Unlike Nigeria, where PhD programs sometimes function more like extended coursework, a Canadian PhD is almost entirely research-based. You work under a supervisor — a professor who directs your research — and you produce original knowledge in the form of a dissertation. You are expected to publish papers, present at conferences, and contribute meaningfully to your field.

Most Canadian PhDs are funded. This is not a scholarship you apply for separately — it is part of the standard offer. Your supervisor uses research grant money (from federal funding bodies like NSERC for sciences and engineering, SSHRC for social sciences and humanities, or CIHR for health research) to pay your tuition and provide a monthly stipend. You do not pay to do a PhD in Canada. The typical stipend is CAD 18,000–28,000 per year depending on university and department.

**The timeline — start this process 18–24 months before you want to begin**

Canadian PhD applications take much longer to prepare properly than any other type of application. The reason is that the most important step — identifying and emailing professors — needs to happen at least a year before the application deadline, and the application deadline itself is typically September–December for the following September intake. If you want to start in September 2026, you should be emailing professors in early 2025.

**Finding and emailing professors**

This is the single most important step. Do not apply to any Canadian PhD program without first having email contact with a professor in that department. Here is exactly how to approach this:

Go to the department website at each university you are interested in. Click on Faculty or People and look through professor profiles. Read their research interests. Find 2–3 professors per university whose work genuinely connects to what you want to do your PhD on. Read at least one of their recent papers — a real read, not a skim. Then write them an email.

The email should be under 200 words. It must do four things: reference the specific paper you read and say one specific thing about it that shows you actually read it; explain in one or two sentences how your background connects to their research area (mention your thesis topic, your undergraduate research, or specific skills you have); attach your CV; and ask directly whether they are accepting PhD students for the upcoming cycle.

Send this email to 10–20 professors across different universities. Cast a wide net. Most will not reply. Expect 1–5 responses. One positive response — a professor who says "I am interested, please apply formally and mention my name" — is all you need. That one response dramatically changes your odds. It means the professor will advocate for you internally when your application arrives. In many Canadian programs, an unfunded application without a willing supervisor gets rejected regardless of how good the candidate is.

Do not be discouraged if professors do not reply. It is not personal. Professors are busy. Follow up once after 2–3 weeks, then move on. Keep a spreadsheet of who you emailed, when, what happened, and what the next step is.

**Choosing your research topic**

Before you can write a convincing research proposal, you need to know what you want to research. This is harder than it sounds. Spend time on this. Read recent papers in your field. Find the gaps — what questions have not been answered yet? What methods could be applied to new problems? What would genuinely advance knowledge in your area? Your research proposal does not need to be perfect or exactly what you will end up doing — supervisors expect it to evolve. But it must be specific enough to show that you can think like a researcher. A proposal that says "I want to study machine learning" is useless. A proposal that says "I propose to investigate whether attention mechanisms in transformer models can be adapted for low-resource Nigerian languages, specifically Yoruba, using a modified cross-lingual transfer approach based on the XLM-R architecture" is the kind of thing that gets read seriously.

**Preparing your application documents**

Once a professor has expressed interest, apply formally through the university's graduate portal. You will need:

Research proposal (1,000–2,000 words): introduce your research question, explain why it matters, describe your methodology, situate it within existing literature by referencing real papers, and explain how your background makes you the right person to do this research. This is the most important document in the application.

Statement of Purpose (separate from the proposal): explains your academic journey, why you chose this supervisor and this university, and what your professional goals are after the PhD.

Curriculum Vitae: every publication (conference papers, journal articles, book chapters), every research experience, every teaching position, any grants or awards. If you do not have publications yet, list your undergraduate or masters thesis prominently with a brief description. Include conference presentations even if they were within Nigeria.

Three reference letters: at least two must be from academic supervisors who know your research directly. The best reference is from someone who supervised your undergraduate or masters thesis and can speak specifically about your research ability, your intellectual curiosity, and your capacity for independent work. A generic letter that says "this student got good grades" is weak. A letter that says "I supervised this student's thesis on X, which resulted in Y finding, and they showed Z quality of thinking" is strong. Give your referees at least 6–8 weeks notice, provide them with your CV and research proposal, and remind them of the specific work you did together.

Official transcripts and degree certificate: stamped and signed by your university's registrar. Not a portal printout. Get these early — Nigerian universities sometimes take weeks to process official transcript requests.

IELTS Academic: minimum 6.5 overall for most Canadian PhD programs. Check the specific program. Take the test and have the result ready.

**Submitting the application and waiting**

Submit your application through the university's graduate portal — each university has its own. Pay the application fee (typically CAD 100–130 per school). Make sure you mention your contact with the supervisor in your personal statement. Upload everything at once. Applications are reviewed by a committee but the supervisor's input is critical.

Decisions typically come 2–5 months after the application deadline. You will receive an offer by email and through the portal.

**Receiving and accepting your funded offer**

Your offer letter will specify your annual stipend, confirm tuition is waived, and outline any TA or RA duties. Before accepting, confirm in writing: the exact annual stipend amount, whether tuition is fully waived, how many hours per week of TA/RA duties are expected, the expected duration of funding (most programs fund for 4–5 years), and whether there is a conference travel budget.

Accept the offer formally in writing. This offer letter is the key document for your Study Permit application.

**Applying for your Study Permit**

Go to canada.ca, create an IRCC account, and apply online. Fee: CAD 150. Upload: your funded offer letter, valid Nigerian passport, IELTS Academic result, transcripts and degree certificate, 3–6 months of bank statements, and a Statement of Purpose for the visa.

The visa Statement of Purpose is different from your academic one. You are writing to an IRCC officer. Explain your funded PhD, who your supervisor is, what your research is about, what your plans are after graduating, and your ties to Nigeria. IRCC is looking for a genuine student with a credible plan. Because you have a funded offer letter, your financial situation is clear — the letter proves you will have income in Canada without needing to rely on personal funds. This makes PhD Study Permit applications generally smoother than unfunded study applications.

You do not need a GIC if you have a funded offer letter that specifies your stipend. The funded offer letter is your financial proof. Include your personal bank statements anyway to show your financial history.

**Biometrics**

After submitting, IRCC sends a Biometrics Instruction Letter (BIL). Book at VFS Global in Lagos or Abuja at vfsglobal.ca/canada/nigeria. Fee: CAD 85. Bring your passport and BIL. Processing time after biometrics: 4–12 weeks.

**Arriving in Canada and settling in**

Carry all original documents in hand luggage. The border officer issues your Study Permit card at the airport. Once in Canada: open a bank account, register with the university, and introduce yourself to your department. Your stipend payments begin shortly after you start — usually monthly direct deposit from the university. You are allowed to work on campus without restriction and up to 24 hours per week off-campus during the academic year.

Attend your department's orientation. Get to know the other PhD students — the informal network of peers is one of the most valuable parts of a PhD, for both research and your future career. Join the Nigerian student association at your university.

**During your PhD: building toward PR**

Every TA or RA position you hold is paid Canadian work experience. Keep records of every position — employer name (university), job title (Teaching Assistant or Research Assistant), hours per week, dates, and salary. When you apply for Permanent Residency, this experience counts in your Express Entry profile.

Publish as much as you can. Conference papers, journal articles. Publications strengthen your Express Entry profile under the education category and make you more competitive in academic and non-academic job markets.

Take IELTS General Training (not Academic) in your final year and aim for CLB 9 — 8.0+ in every band. Maximum language points in Express Entry are a major advantage.

**After your PhD: PGWP and PR**

Apply for your 3-year Post-Graduation Work Permit within 180 days of your final results. Include your IELTS result in the application. You can start working immediately after submitting while it is processed. Work in any skilled position — your PhD makes you eligible for high-skilled NOC categories that score well in Express Entry.

After 1 year of skilled Canadian work experience (your TA/RA experience during the PhD also counts if it was paid), create your Express Entry profile. With a PhD, Canadian work experience, and CLB 9 IELTS, you are extremely competitive. Most Nigerian PhD graduates in this position receive PR invitations within 6–18 months.`,

      work: `**Working in Canada as a Nigerian — Two Main Paths**

**PATH 1 — Express Entry (Permanent Residency from outside Canada)**

Express Entry is Canada's points-based system. You create a profile and receive a CRS (Comprehensive Ranking System) score. Canada holds draws every 2–4 weeks, inviting the highest scorers to apply for Permanent Residency.

Your CRS score comes from:
• Age (peak is 20–29; younger = more points)
• Education level (higher degree = more points)
• Language scores (IELTS CLB 9 = maximum; target 8.0+ in every band)
• Canadian work experience (large bonus — this is why studying in Canada first is smart)
• Provincial nomination (+600 points, almost guarantees an invitation)

Step-by-step:
1. Take IELTS — target 8.0+ in all 4 bands (CLB 9)
2. Get your Nigerian degree evaluated by WES (World Education Services) at wes.org. Cost: approximately USD 246. Takes about 7 weeks once WES receives your documents. This is mandatory — you cannot submit an Express Entry profile without it.
3. Go to canada.ca and use the "Come to Canada" tool to check your estimated CRS score
4. Create your Express Entry profile
5. Wait for an Invitation to Apply (ITA). Category-based draws in 2024 had cut-off scores ranging from 336 (French speakers) to 491 (STEM). General draws are typically 460–500+.
6. Once invited, you have 90 days to submit your full PR application

Recent draws (2024): STEM occupations round — CRS 491. Healthcare — CRS 422–463. French language — 336–478. General draws are higher. If your score is below 450, focus on improving IELTS or gaining Canadian experience first.

**PATH 2 — LMIA Work Permit (Come to Canada with a job offer)**

A Canadian employer hires you and obtains a Labour Market Impact Assessment (LMIA) — proof that no Canadian was available for the role. You use this to apply for a work permit tied to that employer.

How to find LMIA-friendly employers:
• Job Bank Canada: jobbank.gc.ca — government job board, free to use
• LinkedIn — search "Canada" + your job title, filter for companies with fewer than 500 employees (they are more likely to sponsor)
• Indeed Canada: ca.indeed.com
• Look for job postings that say "open to candidates requiring work authorization" or "willing to sponsor"

Best sectors for Nigerians with LMIA: IT/software engineering, healthcare (nurses, pharmacists), accounting and finance, civil and mechanical engineering.

Once you have a job offer, the employer applies for the LMIA. This takes 2–4 months. Once approved, you apply for your work permit online at canada.ca.

After 1 year of skilled Canadian work experience, you qualify for Canadian Experience Class — a fast-track Express Entry stream for PR.

**Bringing your family:**
On a work permit or Express Entry, your spouse may qualify for an Open Work Permit. Children can attend Canadian schools.

**────────────────────────────────────────────**
**FULL WALKTHROUGH — Working in Canada as a Nigerian, Start to Finish**
**────────────────────────────────────────────**

**The two paths — understand this before anything else**

Every Nigerian who wants to work in Canada uses one of two routes: Express Entry (you apply for Permanent Residency directly from Nigeria, without a job offer, based on your qualifications) or the LMIA Work Permit (a Canadian employer sponsors you for a specific job and you come on a temporary work permit). Most Nigerians who successfully settle in Canada through the work route use Express Entry. The LMIA path is harder to navigate from Nigeria but is the right path for some people. Read both sections fully before deciding which to pursue — or pursue both in parallel.

**PATH 1: Express Entry — applying for PR from Nigeria**

Express Entry is Canada's points-based immigration system. You create a profile online and receive a score called the Comprehensive Ranking System (CRS) score. Canada holds draws every 2–4 weeks — in each draw, everyone above a certain CRS score threshold receives an Invitation to Apply (ITA) for Permanent Residency. Once you receive an ITA, you have 90 days to submit your full PR application. The entire process from ITA to PR decision typically takes 6 months.

Your CRS score is calculated from four main factors: your age (peak points at 20–29, declining after 30), your education level (higher degrees = more points, a Nigerian masters or PhD evaluated by WES gets full credit), your language scores (English IELTS — target CLB 9 which is 8.0+ in every band; French is also scored if you have it), and your Canadian work experience (this is the biggest bonus — even 1 year of Canadian work experience adds a large number of points, which is why studying in Canada first is so effective). There are also bonus points for a provincial nomination (+600 points, which essentially guarantees an ITA), a sibling who is a Canadian citizen or PR, or a qualifying job offer.

Step one — get your Nigerian degree evaluated by WES. World Education Services (wes.org) is the organisation that assesses whether your Nigerian degree is equivalent to a Canadian degree. This evaluation is mandatory for Express Entry — you cannot create a profile without it. The process costs approximately USD 246. You apply online at wes.org, request your transcripts to be sent from your Nigerian university directly to WES (check WES's instructions for Nigeria-specific document requirements), and WES processes your evaluation once they receive everything. The whole process takes about 7 weeks from when WES physically receives your documents. Do this immediately. Do not wait until you are ready to apply — WES always takes longer than expected.

Step two — take IELTS General Training (not Academic — for Express Entry you use General Training, not Academic). Target 8.0+ in all four bands: Listening, Reading, Writing, and Speaking. At 8.0+ in every band, you achieve CLB 9 in all four skills, which gives you maximum language points. This is the single most impactful thing you can do to improve your CRS score. The difference between CLB 7 (6.0 in each band) and CLB 9 (8.0+ in each band) is approximately 60–80 CRS points. At current draw levels, 80 points can be the difference between receiving an ITA and waiting years. Retake the test as many times as needed. Register at British Council or IDP in Lagos, Abuja, or Port Harcourt.

Step three — use the Come to Canada tool at canada.ca to estimate your CRS score before creating your profile. This tool walks you through your education, age, language scores, and work experience and gives you an estimated score. If your estimated score is above 450, you are likely competitive. If it is below 430, identify what you can improve — usually IELTS — before creating your profile. Knowing your score before entering the pool helps you make realistic decisions.

Step four — create your Express Entry profile at canada.ca. Create an IRCC account and follow the steps to submit your Express Entry profile. You will enter your personal details, education, work history, language test results, and WES evaluation number. Once submitted, you are in the pool. You receive a CRS score and your profile is active for 12 months (you can renew it).

Step five — wait for an Invitation to Apply. Draws happen every 2–4 weeks. IRCC announces each draw publicly — the score threshold and number of invitations. You can track results on the IRCC website. If your score is below the threshold, focus on improving it. The most effective improvements: retake IELTS and improve your score, get a provincial nomination (see below), or gain Canadian work experience.

Step six — receive your ITA and submit your PR application. Once you receive an ITA, you have 90 days to compile and submit your full application. This requires police clearance certificates from Nigeria (apply through the Nigeria Police Force — takes several weeks), medical examination results from an IRCC-approved physician, and supporting documents for everything you declared in your profile. Start gathering these documents the moment you create your Express Entry profile so you are ready if you receive an ITA.

Provincial Nominee Programs: Ontario, British Columbia, Alberta, Saskatchewan, Manitoba, and other provinces have their own streams for skilled workers. A provincial nomination adds 600 CRS points, which essentially guarantees an Express Entry invitation at the next draw. Research which provinces have streams matching your occupation. For example: Ontario's Human Capital Priorities stream, BC's Tech Pilot for tech workers. Apply to provincial programs in parallel with your Express Entry profile.

**PATH 2: LMIA Work Permit — coming with a job offer**

A Labour Market Impact Assessment (LMIA) is a document a Canadian employer obtains from Service Canada to prove they tried to hire a Canadian and could not fill the role. Once they have an LMIA approval, they offer you the job and you apply for a work permit tied to that specific employer. This is a harder path from Nigeria because you are competing for jobs internationally without being in the country, but it is the right path if you have in-demand skills in a sector where Canadian employers actively look internationally.

Step one — identify target sectors and employers. The sectors that most commonly offer LMIAs to Nigerians are: information technology and software engineering (especially in Toronto, Vancouver, Calgary — companies like Shopify, Wealthsimple, RBC, and many tech startups), healthcare (nurses and pharmacists especially — hospitals and long-term care facilities), civil and mechanical engineering, accounting and finance (CPA designation helps significantly), and trades (electricians, plumbers, welders — in high demand in Alberta and British Columbia).

Step two — search for LMIA-friendly employers. Job Bank Canada at jobbank.gc.ca is the Canadian government's own job board and is specifically used by employers who are open to hiring internationally. Search for your job title filtered to Canada. Look for postings that say "open to candidates requiring work authorization," "willing to sponsor," or "open work permit." Also search LinkedIn — set your location preference to Canada, update your profile for the Canadian job market (more on this below), and turn on "Open to Work" with Canada as your target location. Indeed Canada (ca.indeed.com) is also widely used.

Step three — prepare your Canadian-format CV and cover letter. Canadian CVs are typically 1–2 pages maximum. They do not include your photo, date of birth, or marital status — do not include these. Your CV should list: professional summary (2–3 sentences), work experience in reverse chronological order with bullet points describing what you achieved not just what you did, education, and skills. Cover letters are expected for professional roles. Address it to a specific person, not "To Whom It May Concern." Research the company before writing. Use the MoveAbroad.ng CV Builder (cv-builder tab in your dashboard) to generate a properly formatted Canadian CV from your profile in one click. The same tool generates a Canada-specific cover letter template you can customise — it has the right format and structure Canadian hiring managers expect.

Step four — apply and go through the interview process. Canadian hiring processes typically involve a phone screening, then 1–2 interviews (video or in-person), and sometimes a technical assessment for engineering and tech roles. Be prepared for behavioural interview questions — "Tell me about a time when..." style questions are standard in Canada. Research the STAR method (Situation, Task, Action, Result) and prepare examples from your Nigerian work experience.

Step five — receive a job offer. Once you have an offer, the employer applies for an LMIA from Service Canada. This costs the employer CAD 1,000 and takes 2–5 months. While waiting, do not resign from your current position in Nigeria — LMIA processing is not guaranteed and can be refused.

Step six — once the LMIA is approved, apply for your work permit at canada.ca. You will need: the LMIA number from your employer, your job offer letter, your valid Nigerian passport, proof of your qualifications (degree, professional certifications), and proof of relevant work experience. The work permit fee is CAD 155. Processing takes 2–8 weeks from Nigeria.

Step seven — arrive in Canada. Your work permit is tied to this specific employer. You must work for them and cannot switch employers without a new LMIA or a permit change. After 1 year of skilled work experience in Canada, apply for Canadian Experience Class — a fast-track Express Entry stream with lower CRS score requirements. This is how the LMIA path leads to PR.

**After 1 year of Canadian work: Canadian Experience Class**

Whether you arrived on a student visa and switched to a work permit, or came directly on an LMIA work permit, after 1 year of skilled Canadian work experience you qualify for the Canadian Experience Class (CEC) stream within Express Entry. CEC has its own separate draws, typically with lower CRS thresholds than the general pool. Most Nigerians with 1 year of Canadian work experience and CLB 7+ IELTS scores qualify for CEC invitations within 6–12 months of becoming eligible.`,

      visitor: `**The Canada Visitor Visa (Temporary Resident Visa — TRV)**

Canada requires most Nigerian passport holders to obtain a Temporary Resident Visa (TRV) before travelling. This is commonly called a visitor visa. It allows you to enter Canada for tourism, family visits, business meetings, or attending events — but not to work or study. Maximum stay per entry is 6 months, though the actual duration is set by the border officer when you arrive.

**What Canada is looking for**

The visa officer's job is to assess whether you are genuinely visiting temporarily and will leave when required. The most common reason Nigerian applications are refused is insufficient evidence of ties to Nigeria. You must demonstrate that your life, responsibilities, and financial interests are rooted in Nigeria and that you have clear reasons to return. The strength of your ties to Nigeria matters more than the amount of money in your account.

Ties that count:
• A current employment letter from your Nigerian employer confirming your role, your approved leave dates, and that your position will be held for you — signed by HR or management on company letterhead
• If self-employed: Certificate of Incorporation, recent bank statements for your business, and a letter from your accountant confirming your business is active
• Land or property ownership: Certificate of Occupancy (C of O), deed of assignment, or property tax receipts
• Family responsibilities: a spouse or children remaining in Nigeria (include birth certificates of children if applicable)
• Enrolled children: school letters confirming your children are currently enrolled in Nigeria
• Other ongoing responsibilities: salary slips, tax clearance certificates, pension documents

**Financial requirements**

There is no fixed minimum bank balance, but a rough benchmark is having enough to cover approximately CAD 2,500–3,000 per month of your planned stay, plus your return flight. Your statements should show funds that have been stable for at least 3–6 months — not recently deposited. If someone else is funding your trip (a family member in Canada or a sponsor in Nigeria), include their bank statements and a signed sponsor letter explaining the relationship and their commitment to cover your costs.

**Applying online**

Go to canada.ca and create an IRCC account. Select "Apply for a visitor visa." The application fee is CAD 100. When completing the form, be honest and specific. Provide a clear travel purpose, realistic dates, and your planned activities. Vague or inconsistent answers are flagged.

Documents to upload:
• Valid Nigerian passport — must be valid for at least 6 months beyond your planned return date
• Recent passport photographs (specifications are on the IRCC site)
• Bank statements — 3–6 months, clearly showing your name and account number
• Employment letter or business evidence (as described above)
• Travel itinerary — your planned destinations, accommodation, and dates (hotel bookings or host's address)
• Invitation letter (if visiting family or friends in Canada — see below)
• Any previous visas (US, UK, Schengen) — include copies in your passport scan; these help

**If you are visiting family or friends**

The person hosting you in Canada writes an invitation letter including: their full legal name, their Canadian immigration status (Canadian citizen, permanent resident, or details of their study/work permit), their home address in Canada, their relationship to you, the purpose of your visit, how long you will be staying, and confirmation they are hosting you. Attach a copy of their Canadian status document (citizenship card, PR card, or work/study permit). This letter should be signed and dated. Without this, the officer has no context for why you are visiting a specific person.

**Biometrics**

After submitting, IRCC will send a Biometrics Instruction Letter (BIL). Book an appointment at VFS Global in Lagos (Victoria Island) or Abuja (Maitama). Fee: CAD 85 — paid online when booking. Biometrics are valid for 10 years. If you have previously given biometrics for Canada within the last 10 years, your BIL will confirm you do not need to go again.

**Processing time**

Current processing time from IRCC is approximately 2–8 weeks. Do not book flights until your visa is approved. Check the IRCC website for current processing time estimates before applying.

**If your application is refused**

IRCC must provide a refusal letter listing the reasons. Read every reason carefully. You can reapply immediately — there is no waiting period — but you must address every reason for refusal in your new application. Adding new documents, a stronger employment letter, clearer itinerary, or more comprehensive financial evidence are common ways to strengthen a second application. Having a previous Canada refusal does not automatically mean you will be refused again if you apply with better documentation.

**Multiple Entry Visa**

When applying, request a Multiple Entry Temporary Resident Visa (METV). If approved, this allows you to enter Canada multiple times within the visa's validity (typically 10 years or the expiry of your passport). If you only need to travel once, a single entry TRV is also an option but costs the same — the multiple entry version is almost always the better choice if you might visit again.`,
    },

    timeline: {
      undergrad: [
        { step: "12–18 months before start", title: "Research schools and verify your WAEC/NECO results", detail: "Go to the WAEC office (Lagos, Abuja, or your nearest state office) and get a Verification Certificate for your results. This takes 2–4 weeks and is required by most Canadian universities. Do it immediately — do not wait. Shortlist 5–8 Designated Learning Institutions (DLIs). Check each school's international admissions page for requirements and tuition." },
        { step: "10–12 months before", title: "Take IELTS Academic", detail: "Book IELTS Academic (not General Training — Academic is required for university admission). Minimum target: 6.0 overall with no band below 5.5. Target 6.5 to be safe. British Council and IDP both run IELTS in Lagos, Abuja, and Port Harcourt. Allow yourself 2–3 months of preparation. You can retake the test — no limit." },
        { step: "8–10 months before", title: "Submit university applications", detail: "Apply to 4–6 schools through each university's own website. You need: official transcripts (stamped by your university/school registrar), WAEC verification certificate, personal statement, reference letters, and your IELTS result. Pay each school's application fee (typically CAD 100–200 per school)." },
        { step: "6–8 months before", title: "Receive Letter of Acceptance and pay deposit", detail: "Once you receive an offer, pay the tuition deposit (usually CAD 3,000–5,000) to secure your place. The school then issues your formal Letter of Acceptance (LOA). Do not delay paying the deposit — spots are limited and offers can expire." },
        { step: "5–6 months before", title: "Set up your GIC", detail: "Open a GIC account with CIBC, Scotiabank (StartRight program), or SBI Canada. Transfer CAD 20,635. The bank processes this in about 2–3 weeks and sends you a GIC certificate. You need this certificate to apply for your Study Permit." },
        { step: "5–6 months before", title: "Apply for Study Permit online at canada.ca", detail: "Application fee: CAD 150. Upload your LOA, GIC certificate, bank statements, passport bio-data page, IELTS result, and Statement of Purpose. Submit everything at once. Incomplete applications are rejected." },
        { step: "4–5 months before", title: "Biometrics at VFS Global Lagos or Abuja", detail: "After submitting your application, IRCC sends a Biometrics Instruction Letter (BIL). Book at vfsglobal.ca/canada/nigeria. Fee: CAD 85. Bring your passport and the BIL. Biometrics are valid for 10 years." },
        { step: "2–3 months before", title: "Study Permit approved — prepare to travel", detail: "Book your flight. Apply for on-campus housing immediately — it fills fast. Join Nigerian student WhatsApp groups for your university. Open a Canadian bank account online before you arrive (Scotiabank StartRight and TD International Student Banking allow pre-arrival setup)." },
        { step: "At the Canadian airport", title: "Collect your actual Study Permit card", detail: "The approval letter you received is NOT your Study Permit — it is just an approval. At the Canadian airport, an immigration officer checks your documents and issues the physical Study Permit card. Carry ALL original documents in your hand luggage: LOA, passport, GIC certificate, approval letter, proof of funds. Do not put these in checked luggage." },
      ],
      masters: [
        { step: "12–18 months before", title: "Research programs and email professors (if research-based)", detail: "For course-based masters: browse the university's graduate programs page, read admission requirements carefully, and shortlist 4–6 programs across different universities. For thesis/research-based masters: email 5–10 professors whose research matches your interests before applying. A professor who agrees to supervise you will dramatically improve your admission chances." },
        { step: "10–12 months before", title: "IELTS Academic and get transcripts ready", detail: "Target IELTS Academic 7.0 overall (University of Toronto requires 7.0 with no band below 6.5 — this is a common benchmark for top schools). Get your degree certificate and transcripts officially stamped by your university's registrar. Some programs require WES (World Education Services) evaluation of your Nigerian degree — do this at wes.org, costs approximately USD 246, takes about 7 weeks." },
        { step: "8–10 months before", title: "Apply to 4–6 programs", detail: "Your Statement of Purpose is the most important document. Write specifically about: why this exact program at this university, which specific professor or research area interests you (name them), how your Nigerian academic background and any work experience connect to this degree, and what you plan to do after. Two specific focused pages beats five generic pages every time." },
        { step: "5–7 months before", title: "Accept offer and set up GIC", detail: "Pay your tuition deposit. Set up the GIC (CAD 20,635). Apply for Study Permit at canada.ca (CAD 150 fee). Include any scholarship letters — these strengthen your application." },
        { step: "4–5 months before", title: "Biometrics", detail: "VFS Global Lagos or Abuja after receiving your Biometrics Instruction Letter. Fee: CAD 85. Bring passport and the letter. Processed within 2–5 days typically." },
        { step: "Within 180 days of graduating", title: "Apply for Post-Graduation Work Permit (PGWP)", detail: "This is the most important step for staying in Canada. Apply before your Study Permit expires. Any masters degree now gives you a 3-year PGWP. Include your IELTS result in the application (required since November 2024). You can start working immediately after submitting the application. Processing takes 80–180 days but work is allowed while it is pending. Apply online at canada.ca." },
        { step: "During PGWP (1–3 years working)", title: "Build Express Entry CRS score and apply for PR", detail: "Get at least 1 year of skilled Canadian work experience. Use the Canada Job Bank (jobbank.gc.ca) and LinkedIn. Once you have 1 year experience, check your CRS score using the Come to Canada tool at canada.ca. Target IELTS CLB 9 (8.0+ in every band) for maximum language points. Most Nigerian masters graduates with strong language scores receive an Express Entry invitation within 6–18 months of graduating." },
      ],
      phd: [
        { step: "18–24 months before", title: "Identify professors and email them directly", detail: "Email 10–20 professors at Canadian universities in your research area. Keep each email under 200 words. Reference a specific paper they wrote. Explain your background. Attach your CV. Ask if they are accepting PhD students. Expect 2–5 responses. One positive response is enough to move forward. This is how Canadian PhD applications work — it is not rude to reach out directly." },
        { step: "12–15 months before", title: "Formal application with confirmed supervisor", detail: "Apply only to programs where a professor has expressed interest. Your application needs: Research proposal (1,000–2,000 words), Statement of Purpose, CV, 3 references (at least 2 academic), transcripts, IELTS (6.5 minimum). A supervised, funded PhD offer is significantly stronger for your Study Permit application." },
        { step: "8–10 months before", title: "Receive funded offer letter — confirm everything in writing", detail: "Before accepting, confirm: Is tuition waived? What is the annual stipend (usually CAD 18,000–28,000)? Are there TA/RA requirements? What is the expected duration? Get this in writing. Accept the offer. Begin Study Permit application." },
        { step: "5–6 months before", title: "Study Permit application", detail: "Include your funding/offer letter with your Study Permit application. This proves to IRCC that you are financially supported. Study Permit fee: CAD 150. Biometrics: CAD 85 at VFS Lagos or Abuja." },
        { step: "During PhD", title: "TA/RA work experience counts toward Express Entry", detail: "Teaching Assistant and Research Assistant positions are paid Canadian work experience. Keep records. This experience boosts your CRS score when you apply for Permanent Residency after graduating." },
        { step: "After graduation", title: "3-year PGWP then Express Entry PR", detail: "Apply for PGWP within 180 days of graduating. 3-year open work permit. Include IELTS result in application. Most Nigerian PhD graduates receive Express Entry invitations within 6–18 months of graduating, especially with strong language scores and Canadian work experience from TA/RA positions." },
      ],
      work: [
        { step: "Before anything else", title: "WES evaluation and IELTS", detail: "Get your Nigerian degree evaluated at wes.org. Cost: approximately USD 246. Takes about 7 weeks. This is mandatory for Express Entry. At the same time, take IELTS — target 8.0+ in all bands (CLB 9). These two things are the foundation of everything else." },
        { step: "Check your score first", title: "Use the Come to Canada tool at canada.ca", detail: "Before spending months on anything, estimate your CRS score at canada.ca/come-to-canada-tool. If your score is below 440, focus on improving your IELTS first — the language improvement alone could add 50–80 points. Know your score before deciding which path to pursue." },
        { step: "Create your Express Entry profile", title: "Submit to the pool and wait for an invitation", detail: "Go to canada.ca, create your IRCC account, and submit your Express Entry profile. You are now in the pool. Draws happen every 2–4 weeks. If you receive an Invitation to Apply (ITA), you have 90 days to submit your full PR application. The entire PR process (from ITA to decision) typically takes 6 months." },
        { step: "Parallel track — job search for LMIA work permit", title: "Apply to Canadian employers willing to sponsor", detail: "Job Bank Canada (jobbank.gc.ca) is the government job board — free to use and specifically designed for this. Also use LinkedIn and Indeed Canada (ca.indeed.com). Look for companies that sponsor work visas — tech companies, hospitals, engineering firms. The job posting sometimes says 'open to work permit sponsorship'. Focus on IT, healthcare, engineering, and finance." },
        { step: "Job offer received", title: "Employer applies for LMIA on your behalf", detail: "Your employer submits an LMIA application to Service Canada. This proves no Canadian worker was available for your role. Cost to employer: CAD 1,000. Processing: 2–5 months. Once approved, you apply for your work permit at canada.ca." },
        { step: "1 year of Canadian work", title: "Canadian Experience Class — fast-track to PR", detail: "After 1 year of skilled work experience in Canada, apply for PR through Canadian Experience Class (a stream within Express Entry). This stream has lower CRS score requirements. Most Nigerians who get 1 year of Canadian work experience qualify for PR within another 6–12 months." },
      ],
      visitor: [
        { step: "8–12 weeks before travel", title: "Gather your documents — start with employment letter and bank statements", detail: "Ask your Nigerian employer to issue a formal letter on company letterhead confirming your role, your approved leave dates, and that your position will be held for you while you travel. Simultaneously prepare 3–6 months of personal bank statements. Funds should look stable — not recently deposited. This is the core of your application." },
        { step: "6–8 weeks before travel", title: "Apply online at canada.ca", detail: "Create an IRCC account and start the Visitor Visa (TRV) application. Fee: CAD 100. Upload: passport, bank statements, employment letter, travel itinerary (hotel bookings or host details), passport photos, and any invitation letter. If you have previous US, UK, or Schengen visas, ensure your passport scan includes those pages — they help. Request a Multiple Entry TRV for future flexibility." },
        { step: "Within days of applying", title: "Biometrics at VFS Global", detail: "IRCC sends a Biometrics Instruction Letter (BIL) by email shortly after you apply. Book at VFS Global in Lagos (Victoria Island) or Abuja (Maitama) at vfsglobal.ca/canada/nigeria. Fee: CAD 85. Bring your passport and the printed BIL. Biometrics valid for 10 years." },
        { step: "2–8 weeks later", title: "Decision — do not book flights until you have approval", detail: "Processing time is currently 2–8 weeks but varies. Check the IRCC website for live estimates. Once approved, your visa will be stamped in your passport and returned to you via VFS. Only then book your flights." },
        { step: "At the Canadian airport", title: "Border officer sets your actual entry duration", detail: "Your TRV allows you to seek entry. The border officer at the Canadian airport determines exactly how long you can stay — typically up to 6 months. Be prepared to answer questions about your visit purpose, where you are staying, how much money you have, and when you are returning to Nigeria. Have your return flight booking ready to show." },
      ],
    },

    tips: {
      undergrad: [
        { title: "WAEC verification takes 2–4 weeks — start immediately", body: "Many Nigerian students lose months because they forgot to verify their WAEC/NECO results. Go to the WAEC office (Lagos: 16 Plot 326, Independence Avenue, Wuse 2; or your nearest state office) and request a Verification Certificate. This is different from your result slips. Canadian universities specifically request this. Do it before you even decide which schools to apply to." },
        { title: "Bank statements must show 3–6 months of stable funds", body: "IRCC visa officers check how long money has been sitting in your account. If NGN 15 million appeared in your account 3 weeks ago, a visa officer will flag it. Your funds should be stable for at least 3 months before you apply. If your parents or a sponsor is providing the funds, you also need a signed sponsor letter and their own bank statements." },
        { title: "Proof of ties to Nigeria — exactly what counts", body: "For your Study Permit, show you have reasons to come back to Nigeria (even if you plan to apply for PR later, your initial application must show ties). What counts: signed letter from a Nigerian employer confirming your position is being held for you, Certificate of Occupancy or family land documents (family property counts, not just yours), letter from parents confirming they are funding you and remaining in Nigeria, business registration documents, siblings or spouse in Nigeria. The more evidence, the better." },
        { title: "The GIC money comes back to you — it is not a fee", body: "Many Nigerian families panic when they hear CAD 20,635 must be deposited. This money is NOT paid to the Canadian government. It is deposited into a Canadian bank account in your name and released to you in monthly instalments when you arrive. By the end of your first year, you will have received every penny back. Think of it as a savings account that Canada holds for you." },
        { title: "On-campus housing fills fast — apply the same day you accept your offer", body: "Do not wait. The day you accept your university offer and pay your deposit, immediately apply for on-campus housing. International students qualify for the same housing as domestic students at most Canadian universities. Residence halls are safe, affordable, and put you in the middle of campus life. Private apartments near campus can cost 2–3 times more." },
      ],
      masters: [
        { title: "Your Statement of Purpose will make or break your application", body: "Admissions committees read hundreds of generic statements. Name the specific professor whose research excites you. Reference their specific paper (read it properly, do not fake it). Explain exactly why your Nigerian academic background and work experience make you ready for this program. Describe what research question you want to answer. Two specific, well-written pages beats five generic pages. Spend 2–3 weeks on this document — it matters more than your grades in some programs." },
        { title: "The PGWP changed as of February 2024 — every masters graduate gets 3 years", body: "Before February 2024, only masters programs of 2 years or more got a 3-year PGWP. Now ALL masters graduates get a 3-year PGWP regardless of program length. This means even a 1-year masters at a Canadian university gives you 3 years to work freely in Canada. This is one of the best immigration deals in the world for Nigerian students." },
        { title: "WES evaluation — do it as early as possible", body: "World Education Services (wes.org) evaluates your Nigerian degree for Canadian immigration purposes. It confirms your degree is equivalent to a Canadian degree and gives it a Canadian GPA equivalent. Takes approximately 7 weeks from when WES receives your documents. Cost: approximately USD 246. Start this process the moment you decide you are applying for PR or Express Entry — do not wait until you need it urgently." },
        { title: "Avoid immigration consultants who guarantee results", body: "Many consultants in Nigeria charge high fees and promise guaranteed visas. Study Permit decisions are made by IRCC visa officers — nobody can guarantee an outcome. If you want professional help, use only CICC-regulated representatives (Canadian Immigration Consultants College — verify at college-ic.ca). Many Nigerians successfully apply without a consultant by following the official IRCC website step by step." },
      ],
      phd: [
        { title: "Emailing professors directly is expected — it is not rude or presumptuous", body: "In Nigerian academic culture, contacting a professor unsolicited can feel rude. In Canada, it is completely normal and expected. Professors post their email addresses publicly because they want motivated students to reach out. A well-written email that shows you read their work and have relevant skills will get a response. Poorly written emails that say 'I am interested in your field' get ignored. Be specific, be brief, be professional." },
        { title: "Provincial Nominee Programs can fast-track your PR after graduation", body: "Ontario, British Columbia, Alberta, and other provinces have their own immigration streams. If your PhD research is in tech, healthcare, or engineering — fields those provinces need — a Provincial Nomination adds 600 points to your CRS score. 600 points essentially guarantees an Express Entry invitation. Ask your university's international student office about provincial nominee streams relevant to your field." },
        { title: "Tax refunds are real — file your return every April", body: "As a PhD student receiving a stipend, you pay Canadian income tax. But you also qualify for tuition tax credits and other deductions. Many Nigerian PhD students are surprised to receive CAD 1,000–3,000 tax refunds. Use TurboTax or H&R Block Canada (both free for students), or attend a free tax clinic on campus (universities run these every March/April)." },
      ],
      work: [
        { title: "LinkedIn is not optional — it is how Canadian hiring works", body: "Canadian recruiters actively search LinkedIn for candidates. Set up a complete profile (professional photo, detailed work history, skills listed). Turn on 'Open to Work' and set Canada as your target location. Nigerian software engineers, accountants, nurses, and engineers are genuinely in demand. If your profile is complete and professional, you will receive messages from Canadian recruiters — especially in tech and healthcare." },
        { title: "Provincial health systems actively recruit Nigerian healthcare workers", body: "Alberta Health Services, Ontario Health, and other provincial health systems have international recruitment programs. If you are a nurse, doctor, pharmacist, or allied health professional, search '[province] international healthcare recruitment' specifically. Note: Nigeria is currently on a World Health Organization list of countries with healthcare worker shortages, which means targeted NHS-style recruitment from Nigeria faces restrictions in some programs — but individual applications are still accepted. The path is to apply directly to hospitals and health systems, not through government-to-government schemes." },
        { title: "Saskatchewan and Manitoba are faster routes than Ontario for many Nigerians", body: "The Saskatchewan Immigrant Nominee Program (SINP) and Manitoba Provincial Nominee Program (MPNP) have streams that specifically need workers in healthcare, agriculture, trades, and other sectors. These programs have lower score thresholds than Ontario's federal Express Entry stream. If you are a nurse, mechanic, electrician, or in another trade, look at these provinces seriously." },
      ],
      visitor: [
        { title: "Your employment letter is the most important document in your application", body: "A vague employment letter kills applications. The letter must be on official company letterhead, signed by HR or a senior manager, and must state: your name, job title, your monthly salary or annual salary, that you have been granted leave from [date] to [date], and that your position will be held for you upon your return. Include the company's official contact details. If you are self-employed, get a letter from your accountant on their letterhead confirming your business is active and generates income." },
        { title: "Bank funds must be stable — not recently deposited", body: "IRCC visa officers specifically look at how long money has been in your account. A large amount that appeared in your account 2–3 weeks before you applied is a red flag. Ideally your statements should show 3–6 months of consistent, stable balances. If you cannot show this in your personal account, a sponsor's bank statements (parent, sibling, or friend in Canada) combined with a clear sponsor letter can supplement your application." },
        { title: "Previous visas (US, UK, Schengen) significantly help your application", body: "If you have been previously approved for a US B1/B2, UK Standard Visitor, or any Schengen visa, these are powerful evidence that other immigration systems have assessed you and approved you. Make sure your passport scan includes ALL pages with visa stamps — not just the bio-data page. These previous approvals show you have a travel history and have returned home as required." },
        { title: "If refused, you can reapply — but you must address every refusal reason", body: "A TRV refusal is not permanent. Read the refusal letter carefully and identify every reason given. A common reason is 'insufficient ties to home country' — address this with a stronger employment letter, property documents, and family evidence. 'Insufficient funds' can be addressed with more months of stable bank statements. Reapply with clearly improved documentation. Do not reapply with the same documents — you will likely be refused again." },
        { title: "Request a Multiple Entry TRV, not a single entry", body: "The application fee is the same (CAD 100) regardless of whether you get a single or multiple entry visa. Request a Multiple Entry TRV in your application — if approved, it allows you to visit Canada multiple times within 10 years without reapplying each time. This is especially useful if you have family in Canada or travel for business regularly. Single entry visas expire as soon as you leave Canada." },
      ],
    },

    universities: {
      undergrad: [
        { name: "University of Toronto", location: "Toronto, ON", known_for: "Medicine, Engineering, Business, Law — Canada's #1 ranked university", avg_tuition: "CAD 45,000–58,000/yr", acceptance: "43%", nigerian_community: "Very large" },
        { name: "York University", location: "Toronto, ON", known_for: "Business (Schulich School), Law, Liberal Arts — large Nigerian student body", avg_tuition: "CAD 28,000–34,000/yr", acceptance: "72%", nigerian_community: "Very large" },
        { name: "Toronto Metropolitan University (formerly Ryerson)", location: "Toronto, ON", known_for: "Business, Computing, Engineering, Media — very diverse campus", avg_tuition: "CAD 26,000–32,000/yr", acceptance: "70%", nigerian_community: "Very large" },
        { name: "University of British Columbia", location: "Vancouver, BC", known_for: "Sciences, Medicine, Forestry, Commerce — top 40 globally", avg_tuition: "CAD 38,000–46,000/yr", acceptance: "52%", nigerian_community: "Large" },
        { name: "University of Calgary", location: "Calgary, AB", known_for: "Engineering, Energy sector, Business, Medicine — Alberta's energy hub", avg_tuition: "CAD 22,000–28,000/yr", acceptance: "68%", nigerian_community: "Growing" },
        { name: "University of Alberta", location: "Edmonton, AB", known_for: "Engineering, Pharmacy, Law, Sciences — lower tuition than Ontario schools", avg_tuition: "CAD 24,000–30,000/yr", acceptance: "60%", nigerian_community: "Growing" },
      ],
      masters: [
        { name: "University of Toronto", location: "Toronto, ON", known_for: "All disciplines — apply at apply.sgs.utoronto.ca, fee CAD 130, needs IELTS 7.0", avg_tuition: "CAD 18,000–35,000/yr", acceptance: "Competitive (30–45%)", nigerian_community: "Very large" },
        { name: "University of Waterloo", location: "Waterloo, ON", known_for: "Computer Science, Engineering, Math — co-op programs, strong tech employer network", avg_tuition: "CAD 20,000–28,000/yr", acceptance: "25–35%", nigerian_community: "Large" },
        { name: "McGill University", location: "Montreal, QC", known_for: "Medicine, Law, Sciences, Business — lower tuition than Ontario schools", avg_tuition: "CAD 18,000–24,000/yr", acceptance: "30–40%", nigerian_community: "Medium" },
        { name: "University of Ottawa", location: "Ottawa, ON", known_for: "Law, Public Policy, Bilingual programs, Medicine — near federal government jobs", avg_tuition: "CAD 16,000–22,000/yr", acceptance: "50–60%", nigerian_community: "Growing" },
        { name: "Dalhousie University", location: "Halifax, NS", known_for: "Dentistry, Medicine, Law, Marine Biology — lower cost of living city", avg_tuition: "CAD 16,000–20,000/yr", acceptance: "55%", nigerian_community: "Small but growing" },
      ],
      phd: [
        { name: "University of Toronto", location: "Toronto, ON", known_for: "All disciplines — Canada's top research output, large Nigerian academic community", avg_tuition: "Often fully funded + CAD 18,000–28,000/yr stipend", acceptance: "Highly competitive", nigerian_community: "Very large" },
        { name: "University of British Columbia", location: "Vancouver, BC", known_for: "Sciences, Engineering, Medicine, Forestry — strong funding culture", avg_tuition: "Often fully funded + stipend", acceptance: "Highly competitive", nigerian_community: "Large" },
        { name: "University of Waterloo", location: "Waterloo, ON", known_for: "Engineering, Quantum Computing, Mathematics — strong tech industry links", avg_tuition: "Often fully funded + stipend", acceptance: "Competitive", nigerian_community: "Large" },
        { name: "McMaster University", location: "Hamilton, ON", known_for: "Medicine, Health Sciences, Engineering — known for problem-based learning", avg_tuition: "Often fully funded + stipend", acceptance: "Competitive", nigerian_community: "Medium" },
      ],
      work: [],
    },

    embassy: {
      name: "Immigration, Refugees and Citizenship Canada (IRCC)",
      note: "All study and immigration applications are submitted online through the IRCC portal. The Canadian High Commission in Abuja does not process visa applications directly — everything is done online.",
      address: "Canadian High Commission: 15A Bobo Street, Maitama, Abuja, Nigeria",
      phone: "Apply online — the High Commission does not handle visa applications",
      website: "https://www.canada.ca/en/immigration-refugees-citizenship.html",
      visa_apply: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/apply.html",
      vfs: "https://www.vfsglobal.ca/canada/nigeria/",
      official_immigration: "https://www.canada.ca/en/immigration-refugees-citizenship.html",
      extra_links: [
        { label: "Apply for Study Permit (official IRCC)", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/apply.html" },
        { label: "Designated Learning Institutions — full list", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare/designated-learning-institutions-list.html" },
        { label: "Post-Graduation Work Permit (PGWP)", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/about.html" },
        { label: "Express Entry — how it works", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/works.html" },
        { label: "Come to Canada Tool — check your CRS score", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/come-canada-tool-immigration-express-entry.html" },
        { label: "WES — Nigerian Degree Evaluation (required for Express Entry)", url: "https://www.wes.org/ca/" },
        { label: "VFS Global Nigeria — Biometrics Appointments", url: "https://www.vfsglobal.ca/canada/nigeria/" },
        { label: "Job Bank Canada — Official Government Job Board", url: "https://www.jobbank.gc.ca/" },
        { label: "CICC — Verify your immigration consultant (avoid fakes)", url: "https://college-ic.ca/protecting-the-public/find-an-immigration-consultant" },
        { label: "University of Toronto Graduate Admissions", url: "https://www.sgs.utoronto.ca/future-students/admission-application-requirements/" },
      ],
    },

    scholarships: {
      undergrad: [
        { name: "Lester B. Pearson International Scholarship", amount: "Full tuition + living costs + books for 4 years", university: "University of Toronto", deadline: "Nomination by school in November; apply by January — check future.utoronto.ca/pearson", url: "https://future.utoronto.ca/pearson/" },
        { name: "York University International Student Scholarship", amount: "Up to CAD 35,000 over 4 years", university: "York University", deadline: "February each year — check futurestudents.yorku.ca", url: "https://futurestudents.yorku.ca/scholarships" },
        { name: "UBC International Major Entrance Scholarship", amount: "CAD 10,000–40,000 per year", university: "University of British Columbia", deadline: "December each year — check you.ubc.ca", url: "https://you.ubc.ca/financial-planning/awards-scholarships/" },
      ],
      masters: [
        { name: "Vanier Canada Graduate Scholarship", amount: "CAD 50,000 per year for 3 years", university: "All major Canadian universities", deadline: "November each year — check vanier.gc.ca", url: "https://vanier.gc.ca/" },
        { name: "Ontario Graduate Scholarship (OGS)", amount: "CAD 10,000–15,000 per year", university: "Ontario universities", deadline: "Varies by university — check each school's graduate awards page", url: "https://osap.gov.on.ca/" },
        { name: "University of Waterloo International Masters Award", amount: "CAD 5,000–12,000 per year", university: "University of Waterloo", deadline: "Check uwaterloo.ca/graduate-studies", url: "https://uwaterloo.ca/graduate-studies-postdoctoral-affairs/awards" },
      ],
      phd: [
        { name: "Vanier Canada Graduate Scholarship", amount: "CAD 50,000 per year for 3 years — one of the most prestigious in Canada", university: "All major Canadian universities", deadline: "November each year — check vanier.gc.ca", url: "https://vanier.gc.ca/" },
        { name: "NSERC Doctoral Award (Science and Engineering)", amount: "CAD 21,000 per year for up to 4 years", university: "Science and Engineering programs at Canadian universities", deadline: "October each year — check nserc-crsng.gc.ca", url: "https://www.nserc-crsng.gc.ca/" },
        { name: "Funded PhD Position (supervisor grant)", amount: "Typically CAD 18,000–28,000/yr stipend + tuition waived", university: "All research universities — apply per position", deadline: "Rolling throughout the year — monitor findaphd.com and university job boards", url: "https://www.findaphd.com/phds/canada/" },
      ],
      work: [],
    },
  },

  // ─────────────────────────────────────────────
  // UNITED KINGDOM
  // ─────────────────────────────────────────────
  GB: {
    tagline: "Cultural familiarity, world-class universities, and a clear post-study work route",
    overview: "The UK is the most culturally familiar western country for Nigerians — shared language, similar legal system, and one of the largest Nigerian diaspora communities in the world. UK universities are globally ranked. The Graduate Route visa lets international graduates stay and work in the UK for 2 years (3 for PhD) after finishing their degree. For healthcare workers, the NHS is one of the largest employers of Nigerians in the world.",

    stats: {
      undergrad:  { tuition: "£14,000–£38,000/yr", living: "£1,136–£1,483/month", processing: "3 weeks", acceptance: "Varies by university", minIELTS: "5.5–6.5 UKVI (see guide)", currency: "GBP" },
      masters:    { tuition: "£15,000–£40,000/yr", living: "£1,136–£1,483/month", processing: "3 weeks", acceptance: "Varies by program", minIELTS: "6.0–7.0 UKVI (see guide)", currency: "GBP" },
      phd:        { tuition: "£15,000–£30,000/yr (often funded)", living: "£1,136–£1,483/month", processing: "3 weeks", acceptance: "Very competitive", minIELTS: "6.5–7.0 UKVI", currency: "GBP" },
      work:       { salary: "£28,000–£65,000/yr", processing: "3–8 weeks", pathway: "Skilled Worker Visa", minIELTS: "B1 English required", currency: "GBP" },
      visitor:    { fee: "£115 (Standard Visitor Visa)", processing: "3 weeks (online)", duration: "Up to 6 months per entry", pathway: "Standard Visitor Visa", currency: "GBP" },
    },

    summary: {
      undergrad: {
        intro: "UK undergraduate applications all go through one central system called UCAS — you cannot apply directly to a university. You apply to up to 5 universities with one personal statement. After admission, the university gives you a CAS number, which is what you use to apply for your Student Visa. The UK is culturally the most familiar western country for Nigerians — same language, similar legal system, one of the world's largest Nigerian diaspora communities.",
        firstSteps: [
          { action: "Take IELTS for UKVI Academic — NOT regular IELTS Academic", detail: "This is a critical mistake many Nigerians make. The visa requires specifically 'IELTS for UKVI Academic'. Book through British Council or IDP in Lagos, Abuja, or Port Harcourt. A regular IELTS Academic certificate will be rejected for your visa application." },
          { action: "Apply through UCAS at ucas.com — one application covers all 5 universities", detail: "UCAS fee: £27.50 (2025). Oxford/Cambridge and Medicine applications: deadline October 15. All other universities: late January. You write ONE personal statement that goes to all 5 schools — write about why you love the subject, not which universities you picked." },
          { action: "Book your TB test at IOM Lagos or Abuja — do this early", detail: "Mandatory for all Nigerian passport holders. IOM Lagos: 106 Dr. Nnamdi Azikiwe Street, Victoria Island. Appointments fill up weeks in advance. Certificate valid for 6 months." },
          { action: "Once you have your CAS number: prepare your funds (28-day rule)", detail: "Your money must sit in your account for 28 consecutive days before applying. Outside London: £1,136/month × 9 months + first year tuition. London: £1,483/month × 9 months + first year tuition. Plan this 6–8 weeks ahead." },
          { action: "Apply for Student Visa at gov.uk/student-visa — pay IHS upfront", detail: "IHS (Immigration Health Surcharge): £776 per year. This gives you full NHS access. Biometrics at TLScontact in Lagos, Abuja, or Port Harcourt. Processing: 3 weeks. Visa comes as a sticker in your passport." },
        ],
        keyFacts: [
          "Oxford/Cambridge and Medicine: UCAS deadline is October 15 — hard deadline, no exceptions",
          "All other universities: UCAS deadline is late January",
          "IELTS for UKVI Academic and regular IELTS Academic are different — you need the UKVI version for the visa",
          "TB test is mandatory for all Nigerians — book early, slots fill quickly",
          "On arrival: collect your Biometric Residence Permit (BRP) from a Post Office within 10 days",
        ],
        outcome: "After your degree, the Graduate Route visa gives you 2 years (3 for PhD) to work freely in the UK with no job offer required. Then you can switch to a Skilled Worker Visa and eventually apply for Indefinite Leave to Remain after 5 years.",
      },
      masters: {
        intro: "UK masters programs are typically 1 year — faster and cheaper than Canada or the US. Applications go directly to each university (not through UCAS). After graduating, the Graduate Route visa gives you 2 years to work for any employer in the UK without needing sponsorship. Combined with a Skilled Worker Visa, this is now a genuine long-term path for Nigerians.",
        firstSteps: [
          { action: "Take IELTS for UKVI Academic — specifically the UKVI version", detail: "Must say 'for UKVI' on the certificate. Not the same as regular IELTS Academic. Book through British Council or IDP in Lagos, Abuja, or Port Harcourt. Most programs need 6.0–6.5 overall; top schools need 7.0." },
          { action: "Apply directly to each university's own admissions portal", detail: "No central system for masters — go to each university's website. University of Manchester: pgapplication.manchester.ac.uk. UCL: ucl.ac.uk. Edinburgh: euclid.ed.ac.uk. Apply by January for September start — popular programs fill by February." },
          { action: "Accept your offer, pay deposit, and receive your CAS number", detail: "Deposit: usually £3,000–5,000. CAS is issued 1–3 months before your course starts. Do not apply for the visa before receiving your CAS." },
          { action: "Book TB test at IOM Lagos or Abuja — mandatory for all Nigerians", detail: "IOM Lagos: 106 Dr. Nnamdi Azikiwe Street, Victoria Island. Book as early as possible — slots fill fast. Result sent directly to UKVI. Certificate valid for 6 months. Cost: ~£50." },
          { action: "Prepare your finances (28-day rule) and apply at gov.uk/student-visa", detail: "Funds must sit in your account for 28 days. Outside London: £1,136/month × 9 months + first year tuition. London: £1,483/month × 9 months + first year tuition. Pay IHS (£776). Biometrics at TLScontact. Processing: 3 weeks." },
        ],
        keyFacts: [
          "1-year UK masters is internationally recognised — it is not inferior to a 2-year program",
          "Graduate Route after graduation: 2 years of open work, no job offer or sponsorship needed",
          "Chevening Scholarship covers full tuition + ~£14,000/year living costs + flights + visa fees — apply by November",
          "IHS (£776/year) gives you full NHS access during your studies — no separate health insurance needed",
          "UK allows dual nationality — if you later qualify for citizenship, you keep your Nigerian passport",
        ],
        outcome: "1-year masters → Graduate Route visa (2 years open work) → Skilled Worker Visa → Indefinite Leave to Remain after 5 years → British citizenship. The full path from masters to citizenship can be under 9 years.",
      },
      phd: {
        intro: "UK PhD programs are 3–4 years. Funded positions exist through UKRI, Commonwealth, and departmental scholarships. PhD graduates get 3 years on the Graduate Route visa (one year more than other graduates). The Commonwealth PhD Scholarship is fully funded and specifically available for Nigerians — it is underused. Apply.",
        firstSteps: [
          { action: "Find funded PhD positions at jobs.ac.uk — set weekly email alerts", detail: "jobs.ac.uk is the main platform for funded UK PhD positions. Set up alerts for your research field. Also check findaphd.com and each target university's PhD vacancies page. Alternatively, email supervisors directly — they can help you apply for funding." },
          { action: "Apply for the Commonwealth PhD Scholarship through the Nigerian Federal Scholarship Board", detail: "Fully funded: tuition + living allowance + flights + thesis costs. Deadline: October each year. Apply through the Federal Scholarship Board — they manage Nigeria's in-country selection. Check cscuk.fcdo.gov.uk. This scholarship is underused by Nigerians." },
          { action: "Apply with a research proposal and supervisor's letter of support", detail: "Your application needs a research proposal (2,000–3,000 words), Statement of Purpose, CV, 3 reference letters, transcripts, IELTS for UKVI (6.5–7.0). A supervisor's letter of support significantly improves your chances." },
          { action: "Receive offer with funding details — confirm tuition and stipend in writing", detail: "Before accepting: confirm tuition is covered, annual stipend amount, conference travel allowance, and expected duration. Your offer letter goes into your Student Visa application." },
          { action: "Apply for Student Visa: TB test + IHS + funds + gov.uk/student-visa", detail: "TB test at IOM Lagos/Abuja. IHS: £776/year × PhD duration. Show maintenance funds if not covered by scholarship. Biometrics at TLScontact. Processing: 3 weeks." },
        ],
        keyFacts: [
          "PhD graduates get 3 years on the Graduate Route visa (other graduates get 2 years)",
          "Commonwealth PhD Scholarship is fully funded and available for Nigerians — apply through the Federal Scholarship Board",
          "UKRI doctoral studentships pay full tuition + ~£19,000/year living stipend (2025 minimum)",
          "jobs.ac.uk is where funded UK PhD positions are officially listed — set weekly alerts",
          "If your PhD is funded: your CAS shows £0 tuition; you only need to show living cost funds",
        ],
        outcome: "PhD graduation → 3-year Graduate Route visa → Skilled Worker Visa → Indefinite Leave to Remain after 5 years total on qualifying visas → British citizenship. UK allows dual nationality.",
      },
      work: {
        intro: "Working in the UK as a Nigerian requires a Skilled Worker Visa — you need a job offer from a licensed sponsor paying at least £38,700/year (as of April 2024, verify at gov.uk as this changes). Nigerian professionals in tech, healthcare, engineering, finance, and law are in genuine demand. The NHS specifically employs large numbers of Nigerians — though government-to-government recruitment is restricted, individual applications to NHS trusts are open.",
        firstSteps: [
          { action: "Download the licensed sponsors register from gov.uk before applying to any job", detail: "Only companies on this list can legally sponsor your Skilled Worker Visa. Download from gov.uk/government/publications/register-of-licensed-sponsors-workers. Check a company is on the list before investing time in an application. Scam job offers with fake sponsorship exist — this list is your protection." },
          { action: "Search LinkedIn, NHS Jobs, and sector-specific boards for UK-based roles", detail: "LinkedIn: set location to UK, turn on 'Open to Work'. NHS jobs: jobs.nhs.uk. General: reed.co.uk, totaljobs.com, indeed.co.uk. Tech: londontech.jobs. Focus on companies already on the licensed sponsors register." },
          { action: "Receive a job offer and ask your employer to issue a Certificate of Sponsorship (CoS)", detail: "The CoS is a reference number your employer generates through the Sponsorship Management System. It contains your job title, salary, and start date. You need this to apply for your visa." },
          { action: "Apply for Skilled Worker Visa at gov.uk/skilled-worker-visa", detail: "Pay visa fee + IHS (£1,035/year). Processing: 3–8 weeks. You can also switch from Graduate Route to Skilled Worker while inside the UK without leaving the country." },
        ],
        keyFacts: [
          "Check the licensed sponsors register BEFORE applying to any job — scams targeting Nigerians exist",
          "Salary threshold: £38,700/year for most roles (changed April 2024 — verify at gov.uk as this changes)",
          "NHS healthcare workers: individual applications are open, but targeted Nigeria recruitment campaigns are restricted (Red List)",
          "After 5 years on Skilled Worker Visa: apply for Indefinite Leave to Remain (ILR) — permanent residence",
          "UK allows dual nationality — British citizenship does not require giving up your Nigerian passport",
        ],
        outcome: "Skilled Worker Visa → 5 years → ILR (permanent residence) → 1 more year → British citizenship. Your spouse can work and your children attend UK schools.",
      },
      visitor: {
        intro: "The UK Standard Visitor Visa allows Nigerians to visit the UK for tourism, visiting family, attending conferences or business meetings, and short academic activities — up to 6 months per visit. Nigerian passport holders cannot travel to the UK without this visa. The UK has one of the faster processing times (typically 3 weeks) but the refusal rate for Nigerians is significant. Strong financial evidence and clear ties to Nigeria are the two things that determine the outcome.",
        firstSteps: [
          { action: "Decide what type of evidence you are building your application around", detail: "There are two main application types: visiting family/friends in the UK, or visiting for tourism/business. For family visits, an invitation letter from the UK-based person is essential. For tourism, your itinerary and hotel bookings carry most of the weight. Decide which applies to you before gathering documents." },
          { action: "Get a strong employment letter from your Nigerian employer", detail: "The letter must be on official company letterhead, signed by HR or management. It should state: your name, job title, annual or monthly salary, length of employment, that you have been approved leave from [date] to [date], and that your position will be held for you. This is the single document that most affects visitor visa decisions. If self-employed, get a letter from your accountant confirming your business is active and generating income." },
          { action: "Apply online at gov.uk/standard-visitor-visa", detail: "The application fee is £115. Complete the form carefully — be specific about where you are staying, who you are visiting (with their contact details and UK address), your itinerary, and how you are funding the trip. You will then be asked to book a visa appointment at TLScontact (the UK's visa centre in Nigeria)." },
          { action: "Attend your appointment at TLScontact in Lagos or Abuja", detail: "TLScontact handles UK visa applications in Nigeria. You submit your documents and biometrics (fingerprints and photo) here. Lagos: 31A Ladybird House, Mobolaji Bank Anthony Way, Ikeja. Abuja: plot 1261 Tafawa Balewa Way. Bring originals and copies of all documents. The appointment fee is separate from the visa fee." },
          { action: "Prepare your document bundle in this order", detail: "1. Valid Nigerian passport (6 months validity beyond return date). 2. UK Standard Visitor Visa application form. 3. Bank statements — 3–6 months, showing stable funds (roughly £2,000–3,000 for a 2-week trip minimum). 4. Employment letter or business evidence. 5. Hotel bookings or host's invitation letter and proof of their UK status. 6. Return flight booking (you can use a refundable booking at this stage). 7. Travel itinerary. 8. Any previous UK, US, or Schengen visas — these help significantly." },
        ],
        keyFacts: [
          "Standard Visitor Visa fee: £115 — apply at gov.uk/standard-visitor-visa",
          "TLScontact (not VFS for UK) handles applications in Lagos and Abuja — book at tlscontact.com",
          "Processing: typically 3 weeks from biometrics for standard service; 5 working days for priority (extra £250); 24 hours for super priority (extra £500 — limited availability)",
          "A long-term Standard Visitor Visa (2, 5, or 10 years) is available — same application, costs more but allows multiple visits without reapplying",
          "You cannot work, claim public funds, or study on a Standard Visitor Visa — even unpaid volunteering is restricted",
        ],
        outcome: "A Standard Visitor Visa allows entry for up to 6 months per visit. You cannot extend inside the UK — you must leave and reapply. A long-term visa (2, 5, or 10 years) avoids having to reapply for every trip and is worth applying for if you visit regularly.",
      },
    },

    visa: {
      undergrad: `**UK Student Visa — Undergraduate**

**Step 1 — Apply through UCAS**
ALL undergraduate applications to UK universities go through one central system: UCAS (Universities and Colleges Admissions Service) at ucas.com. You cannot apply directly to a UK university for undergraduate — it must go through UCAS.

You can apply to up to 5 universities in one application. You write ONE personal statement that goes to all 5 schools (so it must be general enough to fit all your choices).

Key UCAS deadlines:
• Oxford and Cambridge ONLY: October 15 (6pm UK time) — this is firm, no exceptions
• Medicine, Dentistry, Veterinary: October 15
• All other universities: Late January (check ucas.com for the exact date each year — it has been January 29 or 31 depending on the year)
• There is also a July deadline for courses still with spaces, but by then many programs are full

UCAS application fee: £27.50 for multiple choices (2025 rate — check ucas.com)

**Step 2 — Receive and accept an offer**
UK universities make Conditional offers (based on your final results) or Unconditional offers (if you already meet all requirements). On UCAS Track, you accept your Firm choice (first preference) and Insurance choice (backup). Meet the conditions — usually specific grade requirements.

**Step 3 — University issues your CAS number**
After you meet your conditions and pay your tuition deposit (usually £3,000–£5,000), the university issues a CAS (Confirmation of Acceptance for Studies) number. You CANNOT apply for a Student Visa without your CAS. It is usually issued 1–3 months before your course starts.

**Step 4 — English language requirement (critical for Nigerians)**
For the UK Student Visa, you need a SELT (Secure English Language Test). The most common is IELTS for UKVI Academic. This is NOT the same as regular IELTS Academic — it must specifically say "for UKVI" and must be taken at an approved test centre. Regular IELTS Academic certificates are NOT accepted for the visa application.

Typical minimum scores:
• Lower-ranked universities: IELTS for UKVI 5.5 overall
• Mid-ranked universities: 6.0–6.5
• Russell Group universities (Manchester, Birmingham, Nottingham, etc.): 6.5+
• Oxford, Cambridge, Imperial, UCL: 7.0+

Book IELTS for UKVI through British Council or IDP in Lagos, Abuja, or Port Harcourt.

**Step 5 — TB Test (mandatory for all Nigerian applicants)**
Every Nigerian passport holder must take a Tuberculosis (TB) test at a UK Visas and Immigration approved clinic before applying for a UK visa. Approved clinics in Nigeria:
• IOM Lagos: 106 Dr. Nnamdi Azikiwe Street, Victoria Island, Lagos
• IOM Abuja: Contact IOM Nigeria for the Abuja location

Book early — appointments fill up weeks in advance. Your result certificate is valid for 6 months. Cost: approximately £50. The test result is sent directly to UKVI — you receive a reference number to include in your visa application.

**Step 6 — Pay the Immigration Health Surcharge (IHS)**
Before submitting your visa application, you pay the IHS online. This gives you full access to the NHS (National Health Service) during your studies — you do not pay for GP visits, hospital treatment, or emergency care. Current rate (verified April 2025): £776 per year per person. For a 3-year degree: approximately £2,328 paid upfront. Check immigration-health-surcharge.service.gov.uk for current rates.

**Step 7 — Prove your finances (28-day rule)**
Your funds must have been sitting in your bank account for a minimum of 28 consecutive days before you apply. The amounts required (verified from gov.uk, January 2025):
• If studying in London: £1,483 per month × 9 months = £13,347 (plus your first year's tuition)
• If studying outside London: £1,136 per month × 9 months = £10,224 (plus your first year's tuition)

Example: If your tuition is £20,000 and you are studying in Manchester (outside London), you need to show at least £30,224 in your account, and it must have been there for 28 continuous days.

**Step 8 — Apply for Student Visa online and biometrics**
Apply at gov.uk/student-visa. You can apply no earlier than 6 months before your course start date. Book biometrics at TLScontact in Lagos, Abuja, or Port Harcourt.

**Processing time:** Typically 3 weeks. Most Nigerian applicants receive decisions within 3 weeks. You receive your visa as a sticker in your passport. When you arrive in the UK, collect your Biometric Residence Permit (BRP) from a Post Office within 10 days.

**Bringing your spouse or children:**
• Your spouse/partner can apply for a Student Dependant visa
• Dependant funds required: £845/month per dependant outside London; £680/month in London (28-day rule applies)
• Work rights for dependants: Check current rules at gov.uk — these rules have changed in recent years and may change again

**────────────────────────────────────────────**
**FULL WALKTHROUGH — UK Undergraduate, Start to Finish**
**────────────────────────────────────────────**

**Start here: what the UK undergraduate path looks like**

Going to a UK university as a Nigerian undergraduate is one of the most culturally natural moves you can make. The language is the same. The legal system is similar. Nigerian degrees and O-levels are understood by British admissions teams. There are well-established Nigerian communities at almost every major UK university. The process is clear and well-documented. Here is everything you need to do, from the very beginning.

**Before you apply — the groundwork**

Do these things before you open a single university application:

Take IELTS for UKVI Academic. Underline this: it must say "for UKVI" on the certificate. Not regular IELTS Academic — the UKVI version specifically. Both are offered by British Council and IDP but they are different tests requiring different bookings at designated UKVI centres. If you take regular IELTS Academic, it will be rejected for your visa. This mistake has caused Nigerians to miss their intake and waste money. When booking, specifically select "IELTS for UKVI Academic." Target: lower-ranked universities need 5.5 overall; mid-ranked need 6.0–6.5; Russell Group (Manchester, Birmingham, Leeds, Sheffield, Nottingham) need 6.5; Oxford, Cambridge, Imperial, UCL need 7.0+. Aim for 6.5 at minimum to keep your options open. British Council and IDP both run UKVI test centres in Lagos (Victoria Island), Abuja, and Port Harcourt.

Prepare your academic documents. You need your WAEC/NECO results — the original result slip and ideally a verification certificate. Your secondary school transcripts certified by your school's principal or registrar. If you have any additional qualifications (A-levels, Cambridge IGCSE, IJMB, JUPEB, National Diploma), gather those certificates too.

Decide on your subject and universities. UK undergraduate applications go through UCAS — a central system at ucas.com. You can apply to up to 5 universities in one application. You pay one application fee for all five choices: £27.50 in 2025 (check ucas.com as this changes). The critical thing to understand: you write ONE personal statement that goes to all 5 universities. Write it about the subject, not about specific universities — you cannot say "I want to study at Manchester because..." when it also goes to Leeds and Birmingham.

**UCAS deadlines — these are hard deadlines, not targets**

Oxford and Cambridge applications: October 15, 6pm UK time. No exceptions. If you miss this, you cannot apply to Oxbridge that cycle.
Medicine, Dentistry, Veterinary Science anywhere in the UK: October 15. Same rule.
All other universities: late January — check ucas.com for the exact date each year. It has been January 29 or 31 in recent years.
There is a July deadline for remaining spaces but by then most competitive programs are full.

If you are applying to Oxford or Cambridge, the process is significantly more involved — you may need to take a subject-specific admissions test (LNAT for Law, TSA for some courses, BMAT for Medicine — check each college's requirements) and attend an interview in December. Prepare for this at least 12 months in advance.

**Writing your personal statement**

This is 4,000 characters (approximately 650 words) and it goes to all five universities you apply to. UK personal statements are almost entirely about why you love the subject. They are not like Nigerian application letters. Do not write about your life challenges or your family's sacrifices. Do not write about why you want to go to the UK. Write about: what sparked your interest in this subject (be specific — a book, an experience, a problem you encountered in Nigeria), what you have read, studied, or done related to the subject beyond school, any relevant extracurricular activities (science competitions, debate clubs, coding projects, community work), and what you want to do with the degree long-term. Make it genuine and specific. Admissions tutors can tell within two sentences whether a student is writing what they think the reader wants to hear or whether they actually care about the subject.

**After submitting on UCAS**

UK universities make decisions between December and May depending on when you applied and the competitiveness of the program. Decisions appear on UCAS Track — your online application portal. A university can make: an Unconditional Offer (you are in, regardless of future results), a Conditional Offer (you are in if you meet specific grade requirements), or a Rejection. Most offers from Nigerian students at this stage are conditional because results are pending or because IELTS is needed.

You must respond to offers by replying Firm (your first choice) and Insurance (your backup). You can only hold two offers at a time. Your Firm choice is where you are committed to going if you meet the conditions.

**Meeting conditions and receiving your CAS**

After your A-level or equivalent results come out, UCAS updates your status automatically. If you meet the conditions of your Firm offer, you are confirmed at that university. The university then sends you enrolment instructions and eventually issues your CAS number — Confirmation of Acceptance for Studies. This typically arrives 1–3 months before your course starts. You cannot apply for a Student Visa without your CAS. Do not rush IRCC — wait for the CAS.

**Booking your TB test — do this immediately after accepting your offer**

Every Nigerian passport holder must take a Tuberculosis test at a UK Visas and Immigration approved clinic before applying for a Student Visa. The approved clinics in Nigeria are operated by IOM (International Organization for Migration). IOM Lagos: 106 Dr. Nnamdi Azikiwe Street, Victoria Island. IOM Abuja: contact IOM Nigeria for current Abuja location.

Book as early as possible. Slots fill up weeks in advance, especially in summer (June–September) when many students are applying. The test itself is a simple chest X-ray. Results are sent directly to UKVI — you receive a certificate with a reference number to include in your visa application. Cost: approximately £50. Results valid for 6 months. If your certificate expires before you apply, you must retake the test.

**Preparing your finances — the 28-day rule**

UK Student Visa finance requirements are strict and strictly enforced. Your funds must appear in your bank account (or your sponsor's account if someone is funding you) for 28 consecutive days before the date you submit your visa application. Not 27 days. Not transferred in 25 days ago. 28 days continuous — every day for 28 days the money must be there.

The amounts required depend on where you are studying:
Studying outside London: £1,136 per month × 9 months = £10,224, plus your first year's tuition in full.
Studying in London: £1,483 per month × 9 months = £13,347, plus your first year's tuition in full.

Example: If you are studying at the University of Manchester (outside London) and your first year tuition is £22,000, you need to show £10,224 + £22,000 = £32,224 sitting in your account for 28 days before you apply.

If your parents or a sponsor is funding you: you need their bank statements (showing the money has been there for 28 days), a signed sponsor letter from them stating they are funding your education and their relationship to you, and their proof of income (payslips or business accounts). This is standard and UKVI accepts third-party sponsors — but all the 28-day rules apply to the sponsor's account.

Plan your finances at least 6–8 weeks before you intend to apply. If you are waiting for a lump sum or a property sale, make sure the money arrives at least 28 days before your intended application date.

**Paying the Immigration Health Surcharge (IHS)**

Before submitting your visa application, you pay the IHS online. This gives you access to the full NHS — GP visits, hospital treatment, A&E — for the entire duration of your studies. Current rate (April 2025): £776 per year. For a 3-year undergraduate degree: approximately £2,328 paid upfront. Pay at immigration-health-surcharge.service.gov.uk. Check the current rate there as this increases regularly.

**Applying for your Student Visa**

Apply at gov.uk/student-visa. You can apply no earlier than 6 months before your course start date and no later than 3 months before. Most students apply in July or August for a September start. Apply online, pay the visa fee (check the current rate at gov.uk), and book a biometrics appointment at TLScontact in Lagos, Abuja, or Port Harcourt after submitting.

Upload to the online application: your CAS number, your IELTS for UKVI Academic certificate, your TB test reference number, your financial evidence (bank statements showing 28 days, plus IHS payment receipt), your valid Nigerian passport, and passport-style photographs.

The biometrics appointment at TLScontact involves giving your fingerprints and photograph — similar to VFS Global for Canada. Book at nigeria.tlscontact.com. Bring your passport and your visa application reference number.

**Processing time and what to expect**

Standard processing: 3 weeks. Most Nigerian applicants receive a decision within 3 weeks. Your passport comes back by courier with a vignette sticker — the visa. When you land in the UK, collect your Biometric Residence Permit (BRP) from the Post Office specified in your visa letter — do this within 10 days of arrival.

**Arriving in the UK**

Bring all original documents in your hand luggage — never checked bags. At the UK border, the officer scans your passport and vignette and may ask a few questions about your studies. It is straightforward. Go to the specified Post Office within 10 days to collect your BRP — this is your main ID document in the UK. Register with a GP (doctor) within your first month. Open a UK bank account — banks like Monzo, Starling, and Revolut are easiest for international students with no credit history. Register for your courses.

**Working while studying**

Your Student Visa allows you to work up to 20 hours per week during term time and full-time during vacation periods. You cannot be self-employed on a Student Visa. Many Nigerian students work part-time in retail, hospitality, or student services while studying — this is normal and legal.

**The Graduate Route after your degree**

When you complete your degree, apply for the 2-year Graduate Route visa before your Student Visa expires. Your university notifies UKVI of your graduation — once UKVI confirms this, you apply online at gov.uk/graduate-visa from inside the UK. Do not travel outside the UK after applying until you receive your decision. Cost: approximately £937 + IHS. Processing: approximately 8 weeks. You can stay and work in the UK while waiting. The Graduate Route gives 2 years of open work — any employer, any job, no sponsorship needed. Use this time to find a licensed Skilled Worker sponsor and switch to a Skilled Worker Visa.`,

      masters: `**UK Student Visa — Masters**

UK Masters programs are typically 1 year full-time — shorter and cheaper than Canada or the US. After graduating, you automatically qualify for the 2-year Graduate Route visa.

**Finding programs and applying**
Unlike undergraduate (where you use UCAS), masters applications in the UK go directly to the university. Each university has its own application portal.

**How to choose the right UK university and program**

Do not shortlist universities from rankings alone. Here is how to approach this properly:

First, identify your field and specialisation. Within that field, look at three things: (1) Which universities have strong research groups or industry connections in your exact area — not just a general department, but specific faculty doing work you find compelling. Go to each department's staff page and read what professors actually research. (2) Location matters for your career after graduating: London is essential for finance, law, and media; Manchester and Leeds are strong for tech and engineering; Edinburgh for finance and life sciences; Birmingham for manufacturing and professional services. (3) What is the tuition cost and what scholarships does this university offer? UK tuition for international students ranges from £15,000 to £35,000+ per year. Scholarships can close that gap significantly.

Scholarships to research immediately:
Chevening Scholarship — covers full tuition + ~£14,000/year living costs + return flights + visa fees. Open to anyone with 2 years of work experience. Apply at chevening.org, deadline in November each year.
Commonwealth Shared Scholarship — specifically for students from developing Commonwealth countries including Nigeria. For taught masters only. Administered through the Nigerian Federal Scholarship Board. Covers full tuition + living allowance + flights + visa. Deadline varies — check cscuk.fcdo.gov.uk.
Commonwealth Distance Learning Scholarship — study remotely from Nigeria. Full funding. Check cscuk.fcdo.gov.uk.
University-specific scholarships — every major UK university has international student scholarships, partial or full. Go to the financial aid or funding section of any university you are applying to and check what they offer specifically to Nigerian applicants.

Apply for Chevening at the same time as you research programs — the November Chevening deadline is often before most application portals even open. You can apply for Chevening before you have been admitted — you select programs on the Chevening application. Do not wait for an offer first.

REAL EXAMPLE — University of Manchester Masters:
Portal: pgapplication.manchester.ac.uk/apply/
Documents needed: Degree transcripts (official, stamped), English language test result, 2 reference letters, personal statement (500–1,000 words), CV
IELTS: Most Manchester postgraduate programs need 6.0–6.5 overall. Some require 7.0 — check the specific program page at manchester.ac.uk
No universal closing date — but popular programs fill early. Apply by January for a September start.

What UK universities want from Nigerian masters applicants:
• A good first degree — UK universities recognise Nigerian 2:1 and First Class degrees from recognised institutions
• IELTS for UKVI Academic (NOT regular IELTS) — this matters for the visa
• Personal statement explaining why this program, what you bring from your Nigerian experience, and your career goals
• 2 reference letters — academic references preferred, professional accepted for MBA and conversion programs

**Visa application process:**

Step 1 — Receive your CAS number from the university. After you accept your offer and pay your tuition deposit (usually £3,000–5,000), the university issues a CAS (Confirmation of Acceptance for Studies) number. You cannot apply for a Student Visa without it.

Step 2 — Take IELTS for UKVI Academic (not regular IELTS). Must specifically say "for UKVI" on your certificate. Book through British Council or IDP in Lagos, Abuja, or Port Harcourt.

Step 3 — TB test at IOM Lagos or Abuja. Mandatory for all Nigerian passport holders. IOM Lagos: 106 Dr. Nnamdi Azikiwe Street, Victoria Island. Book early — slots fill weeks in advance. Results sent directly to UKVI. Certificate valid for 6 months. Cost: approximately £50.

Step 4 — Prepare your finances (28-day rule). Your funds must have been in your account for 28 consecutive days before you apply. Required amounts:
• Studying outside London: £1,136/month × 9 months = £10,224 (plus first year tuition)
• Studying in London: £1,483/month × 9 months = £13,347 (plus first year tuition)
Example: If your tuition is £20,000 and you are studying in Manchester, you need to show at least £30,224 sitting in your account for 28 days.

Step 5 — Pay the Immigration Health Surcharge (IHS) online. Current rate: £776 per year. For a 1-year masters: £776 paid upfront. This gives you full NHS access during your studies — no GP fees, no hospital fees. Pay at immigration-health-surcharge.service.gov.uk.

Step 6 — Apply for Student Visa at gov.uk/student-visa. You can apply no earlier than 6 months before your course start date. Book biometrics at TLScontact in Lagos, Abuja, or Port Harcourt after submitting.

Processing time: typically 3 weeks. Your passport returns with a vignette sticker. When you arrive in the UK, collect your Biometric Residence Permit (BRP) from a specified Post Office within 10 days.

**The Graduate Route visa — 2 years of free work:**
After your 1-year masters, apply for the Graduate Route visa before your Student Visa expires. You can work for any employer — no job offer needed. 2 years of open work authorization. Cost: approximately £937 + IHS. Apply online at gov.uk/graduate-visa. Process entirely from within the UK — do not travel outside UK after applying until you receive your decision. Processing: approximately 8 weeks, but you can remain in the UK while waiting.

NOTE: The UK government has proposed reducing the Graduate Route to 18 months for non-PhD graduates from January 2027. This has not been confirmed yet — check gov.uk for current rules when you apply.

During these 2 years, find a Skilled Worker sponsor. Once you have a job offer from a licensed sponsor, switch to a Skilled Worker Visa.

**Bringing your spouse or children:**
Masters students can bring dependants. Show £845/month outside London or £680/month in London (28-day rule). Children can attend UK schools.

**────────────────────────────────────────────**
**FULL WALKTHROUGH — UK Masters, Start to Finish**
**────────────────────────────────────────────**

**Why a UK masters makes sense for Nigerians**

A UK masters is 1 year full-time. That is shorter and cheaper in total than a 2-year masters anywhere else. You pay one year of tuition and one year of living costs. After graduating you get the Graduate Route visa — 2 years of open work authorization with no job offer required. That is 3 years total in the UK, after which many Nigerians convert to a Skilled Worker Visa and begin the path to Indefinite Leave to Remain and eventually British citizenship. UK allows dual nationality so your Nigerian passport stays valid throughout.

The Chevening Scholarship is one of the most significant opportunities available to any Nigerian professional. It covers full tuition at any UK university for any subject, approximately £14,000 per year in living costs, return flights from Nigeria, and visa fees. You need 2 years of work experience. Applications open in August and close in November every year at chevening.org. Apply every year until you get it — many winners applied 2 or 3 times.

**Step zero — before you apply to any program**

Take IELTS for UKVI Academic. This must specifically say "for UKVI" — it is not the same as regular IELTS Academic. Book through British Council or IDP in Lagos, Abuja, or Port Harcourt, selecting the UKVI version when booking. Most UK masters programs need 6.0–6.5 overall. Top universities (UCL, LSE, Edinburgh, King's College) typically need 6.5–7.0. Check the specific program you want. Your certificate is valid for 2 years.

Apply for the Chevening Scholarship at the same time as you research programs — the Chevening deadline is November, which is also when most UK program applications are opening. You do not need to be admitted to a program to apply for Chevening — you choose 3 programs on the Chevening application and get admitted later if you win.

Get your degree certificate and transcripts officially stamped by your university's registrar. Not a portal printout. You also may need a WES evaluation if you plan to later apply for Permanent Residency anywhere outside the UK — it is worth starting this process early.

**Choosing programs and applying**

UK masters applications go directly to each university — there is no central UCAS-style portal for postgraduate programs. Each university has its own admissions portal. Go to the university's website, find the postgraduate or graduate admissions page, and apply through their system.

Popular choices for Nigerians with strong communities and graduate programs: University of Manchester (pgapplication.manchester.ac.uk/apply — IELTS 6.0–6.5 for most programs, 7.0 for some), UCL (ucl.ac.uk/prospective-students/graduate — competitive, 6.5–7.0 IELTS), University of Edinburgh (euclid.ed.ac.uk — 6.5 IELTS for most programs), Coventry University (large Nigerian community, more accessible entry requirements), University of Nottingham, University of Leeds, University of Birmingham.

For each application you need: your degree transcripts and certificate (official, stamped), your IELTS for UKVI Academic result, a personal statement (typically 500–1,000 words — why this program, what you bring from your Nigerian background, career goals), 2 reference letters (academic references preferred; professional references accepted for MBA and professional conversion programs), and your CV.

Apply to at least 4–5 programs. Popular programs in cities like London and Edinburgh fill by February or March for September start — apply early, not at the deadline.

**Accepting your offer and receiving your CAS**

When you receive an offer, accept it and pay the tuition deposit (usually £3,000–5,000 — this is deducted from your tuition). The university then issues your CAS number, usually 1–3 months before your course starts. Do not apply for the visa before you have your CAS.

**Book your TB test immediately — do not leave this late**

Every Nigerian passport holder must take a TB test at an IOM-approved clinic before applying. IOM Lagos: 106 Dr. Nnamdi Azikiwe Street, Victoria Island. Book as early as possible — summer slots fill weeks in advance. The result is sent directly to UKVI. Certificate valid 6 months. Cost: approximately £50.

**Prepare your finances — the 28-day rule**

Your funds must sit in your account (or sponsor's account) for 28 consecutive days before you apply. Required amounts:
Outside London: £1,136/month × 9 months = £10,224, plus first year tuition
In London: £1,483/month × 9 months = £13,347, plus first year tuition

Example: Studying at Manchester, tuition £22,000: you need £32,224 sitting in the account for 28 days. Plan this 6–8 weeks ahead. If a sponsor (parent, relative) is providing funds, include their bank statements, a signed sponsor letter, and their proof of income.

If you receive a Chevening Scholarship or another scholarship that covers tuition and/or living costs, include the scholarship award letter — this counts as financial proof for the amounts it covers.

**Pay the Immigration Health Surcharge (IHS)**

Pay at immigration-health-surcharge.service.gov.uk before submitting your visa application. Rate: £776/year. For a 1-year masters: £776 paid upfront. This covers full NHS access during your studies — no separate health insurance needed.

**Apply for your Student Visa at gov.uk/student-visa**

Apply online no earlier than 6 months before your course start date. Submit: your CAS number, IELTS for UKVI Academic certificate, TB test reference number, financial evidence (28-day bank statements or scholarship letter), passport, and photographs. Then book biometrics at TLScontact Nigeria (nigeria.tlscontact.com) in Lagos, Abuja, or Port Harcourt. Processing time: 3 weeks. Your visa comes as a sticker in your passport. Collect your BRP from the specified Post Office within 10 days of arriving in the UK.

**During your masters year**

You can work up to 20 hours per week during term time and full-time during vacation. Many Nigerian students work in their field or in student jobs to cover living expenses. Your focus should be on your coursework — UK masters programs are intensive. A distinction-level performance (typically 70%+) is worth pursuing if you want to stay competitive for professional roles in the UK.

**Applying for the Graduate Route immediately after graduating**

Apply for the Graduate Route visa before your Student Visa expires. Your university notifies UKVI of your graduation — once confirmed, apply online at gov.uk/graduate-visa from inside the UK. Do not travel outside the UK after applying until your decision arrives. Cost: approximately £937 + IHS. Processing: approximately 8 weeks. You can remain in the UK and work while waiting.

The Graduate Route gives 2 full years of open work authorization — any employer, any sector, no sponsorship needed. Use these 2 years to: find a company on the licensed sponsors register (download from gov.uk), receive a job offer with a Certificate of Sponsorship, and switch to a Skilled Worker Visa. After 5 years total on qualifying visas, apply for Indefinite Leave to Remain. After 1 more year, apply for British citizenship. UK allows dual nationality — your Nigerian passport remains valid.`,

      phd: `**UK Student Visa — PhD**

UK PhD programs are 3–4 years. PhD graduates receive a 3-year Graduate Route visa after finishing — one year more than other graduates. Most PhD positions in the UK are funded: your tuition is covered and you receive a living stipend of approximately £18,000–21,000 per year (the 2025 UKRI minimum is £19,237 — verify at ukri.org).

**Step 1 — Find a PhD position or supervisor**

There are two routes:

Option A — Apply to an advertised funded position:
jobs.ac.uk is the main UK platform for funded PhD positions. Set up a weekly email alert for your research field and the keyword "PhD studentship." Also check findaphd.com and each target university's own research vacancies page. These positions are fully funded — tuition covered plus a living stipend. You apply directly for the position the same way you apply for a job.

Option B — Email a supervisor directly and propose a project:
You contact a professor whose research interests you, propose a research project, and they agree to supervise you. They then help you apply for funding through UKRI doctoral studentships, departmental scholarships, or the Commonwealth Scholarship. This route requires more initiative but gives you more choice over your research direction. Email 10–15 professors. Keep emails under 200 words: reference one specific paper they wrote, explain how your background connects to their work, attach your CV, and ask if they have funding or are considering PhD students.

The most important thing in either route: a committed supervisor makes your application dramatically stronger. Whether you apply to a listed position or approach a professor directly, having someone at the university who wants to work with you is the single biggest factor in your admission.

**Commonwealth PhD Scholarship — apply if you qualify:**
This scholarship is fully funded: tuition, living allowance, flights to the UK, and a thesis grant. It is specifically available for Nigerian citizens. Applications go through the Nigerian Federal Scholarship Board — they manage the in-country selection process. Deadline is usually October each year. Check cscuk.fcdo.gov.uk for the current cycle. This scholarship is underused by Nigerians — apply.

**Step 2 — Formal application**
Your application needs:
• Research proposal (2,000–3,000 words): your research question, methodology, why this university and supervisor, how your work fits into existing literature, and what gap you are addressing
• Statement of Purpose (separate from the proposal — explains your academic journey and career goals)
• Academic CV: include all publications, conference presentations, research experience, and any teaching
• 3 reference letters — at least 2 from academic supervisors who know your work directly
• Degree certificate and full transcripts from all previous universities
• IELTS for UKVI Academic — typically 6.5–7.0 overall (check the specific department's requirements)
• Supervisor's letter of support if you arranged this through Option B — this significantly strengthens your application

**Step 3 — Receive your offer with funding details**
Before accepting, confirm in writing:
• Is tuition fully covered? (For UKRI-funded positions: yes. For self-funded positions: no.)
• What is the annual living stipend? (UKRI minimum 2025: £19,237 — verify at ukri.org)
• Is there a conference travel allowance?
• What are the expected TA (Teaching Assistant) duties, if any?
• What is the expected duration? (UK PhDs are typically 3.5–4 years)
Get this in writing in your offer letter. This offer letter is what you include in your Student Visa application.

**Step 4 — English language test (IELTS for UKVI Academic)**
You need IELTS for UKVI Academic — specifically the UKVI version. This is NOT the same as regular IELTS Academic. Both are offered by British Council and IDP, but you must specifically select the UKVI test when booking, and it must be taken at an approved UKVI test centre. A regular IELTS Academic certificate is NOT accepted for your visa application — this is one of the most common mistakes Nigerian applicants make.
Typical PhD requirement: 6.5–7.0 overall with no band below 6.0. Check your specific department's requirement.
Book at British Council or IDP in Lagos, Abuja, or Port Harcourt.

**Step 5 — TB test at an approved clinic (mandatory)**
Every Nigerian passport holder must take a Tuberculosis test before applying for a UK visa. Approved clinics in Nigeria:
• IOM Lagos: 106 Dr. Nnamdi Azikiwe Street, Victoria Island, Lagos
• IOM Abuja: Contact IOM Nigeria for the current Abuja location
Book early — appointments fill up weeks in advance. The result is sent directly to UKVI. You receive a certificate with a reference number to include in your visa application. Cost: approximately £50. Results are valid for 6 months.

**Step 6 — Receive your CAS number from the university**
After you accept your offer and complete the university's enrolment formalities, the university issues a CAS (Confirmation of Acceptance for Studies) number. You cannot apply for a Student Visa without this. If your PhD is funded and tuition is covered by a scholarship, your CAS will show £0 for tuition — this is normal and correct.

**Step 7 — Prove your finances (28-day rule)**
Your funds must have been sitting in your bank account for 28 consecutive days before the date you submit your visa application. The amounts required (verified from gov.uk):
• Studying outside London: £1,136 per month × 9 months = £10,224
• Studying in London: £1,483 per month × 9 months = £13,347
If your scholarship covers living costs, your scholarship letter satisfies the financial requirement — you do not need to show personal funds for living costs. If tuition is funded, you do not need to show funds for tuition either. Only show personal funds for what the scholarship does not cover.
Example: If you have a full Commonwealth Scholarship covering tuition, living allowance, and travel — you do not need to show personal bank funds at all. The scholarship letter is your financial proof.

**Step 8 — Pay the Immigration Health Surcharge (IHS)**
Pay the IHS online before submitting your application. Current rate (April 2025): £776 per year. For a 4-year PhD: £3,104 paid upfront. This gives you full NHS access during your studies — GP visits, hospital treatment, emergency care. Pay at immigration-health-surcharge.service.gov.uk. Verify the current rate as this has increased regularly.

**Step 9 — Apply for Student Visa at gov.uk/student-visa**
You can apply no earlier than 6 months before your course start date. Apply online at gov.uk/student-visa. After submitting, book your biometrics appointment at TLScontact in Lagos, Abuja, or Port Harcourt.
Upload:
• CAS number
• Valid Nigerian passport (must be valid throughout your PhD)
• IELTS for UKVI Academic certificate
• TB test reference number
• Financial evidence (bank statements for 28 days, or scholarship letter)
• Offer letter from your university showing funding details
• Passport-style photographs
Processing time: approximately 3 weeks. Your passport returns with a vignette sticker (a visa sticker). When you land in the UK, collect your Biometric Residence Permit (BRP) from a specified Post Office within 10 days of arrival.

**The Graduate Route — 3 years after your PhD:**
After completing your PhD, apply for the Graduate Route visa before your Student Visa expires. Your university notifies UKVI of your graduation — once UKVI confirms this, you can apply. Cost: approximately £937 + IHS. Apply entirely online at gov.uk/graduate-visa from inside the UK. Do not travel outside the UK after applying until you receive your decision. Processing: approximately 8 weeks. You can remain in the UK while waiting.
The Graduate Route gives PhD graduates 3 years of open work authorization — no employer sponsorship needed, work for any employer anywhere in the UK. Use this time to find a company on the licensed sponsors register and switch to a Skilled Worker Visa. After 5 years total on qualifying visas, apply for Indefinite Leave to Remain. After 1 more year, apply for British citizenship. UK allows dual nationality — you keep your Nigerian passport.

**Bringing your spouse or children:**
PhD students can bring dependants on a Student Dependant visa. Your spouse or partner can apply and is allowed to work in the UK. Your children can attend UK schools. Additional funds required: £845/month per dependant outside London or £680/month in London (28-day rule applies to these amounts too). Apply for dependant visas at the same time as your own application.

**────────────────────────────────────────────**
**FULL WALKTHROUGH — UK PhD, Start to Finish**
**────────────────────────────────────────────**

**What a UK PhD involves**

A UK PhD is typically 3.5–4 years of original research. You work with a supervisor — a professor — on a defined research project, and your output is a thesis of approximately 80,000 words that makes an original contribution to your field. At the end, you defend your thesis in a viva voce examination (an oral defence with two examiners). UK PhDs are respected internationally.

Most funded UK PhDs include tuition waiver plus a tax-free living stipend of approximately £19,000–21,000/year (UKRI set the 2025 minimum at £19,237 — verify at ukri.org). PhD graduates receive a 3-year Graduate Route visa — one year more than other graduates — giving substantial time to find skilled work and build toward Indefinite Leave to Remain.

The Commonwealth PhD Scholarship is the most important opportunity here for Nigerians. Fully funded — tuition, living allowance, flights to the UK, thesis grant. Apply through the Nigerian Federal Scholarship Board. Deadline October each year. This scholarship is consistently underused by Nigerians. Apply every year until you get it.

**Step one — finding a position or supervisor (start 12–18 months before your target start)**

There are two routes:

Funded advertised positions: jobs.ac.uk lists funded PhD positions across all UK universities. Set up a weekly email alert for your research field and the keyword "PhD studentship" or "fully funded PhD." Also check findaphd.com and each target university's own research vacancies page. These positions come with tuition covered and a stipend. Apply to them like job applications — with a tailored cover letter and CV specific to that project and supervisor.

Approaching a supervisor directly: Go to the faculty page of departments you are interested in. Read professor profiles and their recent publications. When you find someone whose research connects to what you want to do, email them. Keep the email under 200 words: reference a specific paper they published and say something genuine and specific about it; explain in two sentences how your own research background connects; attach your CV; ask whether they are accepting PhD students and whether they have or could secure funding. Email 10–15 professors across different universities. Most will not reply. Expect 1–4 responses. A positive response from a supervisor — "I am interested, apply formally and mention my name" — dramatically improves your application's chances.

The Commonwealth Scholarship: Apply through the Federal Scholarship Board Nigeria (fsbonline.gov.ng or their official portal). They conduct an initial selection in Nigeria before applications go to the Commonwealth Scholarship Commission. Deadline: October. Check cscuk.fcdo.gov.uk for the current list of eligible subjects and universities. This scholarship cannot be held at Oxford or Cambridge — check the eligible universities list.

**Step two — preparing your application**

Your application requires:

Research proposal (2,000–3,000 words): open with your research question clearly stated. Then explain why this question matters — what gap in knowledge does it address? What is the existing literature and where does your project fit in it? What is your methodology — how will you actually answer the question? Why this supervisor and this university specifically for this project? A weak proposal describes what the field is about. A strong proposal identifies a specific problem and proposes a specific approach. Spend 3–4 weeks on this.

Statement of Purpose: separate from the proposal. Explains your academic journey, your relevant skills, why you want to do a PhD, why in the UK, and your career intentions after graduating.

Academic CV: publications (include anything — conference papers, preprints, thesis chapters), research experience, any teaching, grants, awards, languages. If you have no publications, describe your undergraduate or masters thesis prominently with methodology and findings.

Three reference letters: at least two academic, from people who know your research directly and can speak to your capacity for independent research. Give referees at least 6 weeks notice. Provide them with your CV, research proposal, and a reminder of what you worked on together. Follow up politely if needed.

Official transcripts and degree certificate: stamped by your university registrar. Not portal printouts.

IELTS for UKVI Academic: minimum 6.5–7.0 overall depending on department. Take the UKVI version specifically — not regular IELTS Academic.

**Step three — submitting and receiving your offer**

Apply through the university's own PhD admissions system or through the department directly — check each university's website for their process. Pay the application fee where required. Make sure your application references your supervisor contact if you have one.

Decisions come over several months. Once offered, confirm: Is tuition fully waived? What is the annual stipend? Are there TA/RA duties? What is the expected duration and funding period?

**Step four — TB test**

Book immediately at IOM Lagos or IOM Abuja — slots fill weeks ahead in summer. Cost approximately £50. Results sent directly to UKVI. Certificate valid 6 months.

**Step five — prepare finances**

If your scholarship covers living costs, the scholarship award letter is your financial proof. If not, show: outside London — £1,136/month × 9 months = £10,224; in London — £1,483/month × 9 months = £13,347. Money must be in the account for 28 consecutive days before application.

**Step six — pay IHS and apply at gov.uk/student-visa**

IHS: £776/year × your PhD duration, paid upfront. Apply online. Submit: CAS number, IELTS for UKVI certificate, TB test reference, financial proof or scholarship letter, offer letter. Biometrics at TLScontact. Processing: 3 weeks.

**Step seven — arrive and begin your PhD**

Collect BRP from the specified Post Office within 10 days. Open a bank account. Register with a GP. You can work up to 20 hours per week during term time. Your stipend comes monthly — typically direct bank transfer from the university.

**After your PhD — 3-year Graduate Route**

Apply at gov.uk/graduate-visa before your Student Visa expires — from inside the UK. Do not travel abroad after applying until decision arrives. 3 years of open work authorization. Find a Skilled Worker sponsor during this time. After 5 years total on qualifying visas, apply for ILR. After 1 more year, apply for citizenship.`,

      work: `**Working in the UK as a Nigerian — Skilled Worker Visa**

**The Skilled Worker Visa — how it works:**
To work legally in the UK as a Nigerian, you need a Skilled Worker Visa. Three conditions must ALL be met:
1. Your employer must be on the Home Office's list of licensed sponsors (check the public register at gov.uk/government/publications/register-of-licensed-sponsors-workers)
2. Your job must be on the eligible occupations list (check gov.uk/skilled-worker-visa/eligible-occupations)
3. Your salary must meet the threshold — currently £38,700/year for most roles (this changed significantly in April 2024 — verify current figures at gov.uk/skilled-worker-visa as this changes frequently)

Step by step:
1. Find a job at a company on the licensed sponsors register (check BEFORE applying)
2. Receive a job offer
3. Employer issues a Certificate of Sponsorship (CoS) — a reference number for your application
4. Apply online at gov.uk/skilled-worker-visa using your CoS number
5. Processing: 3–8 weeks

**NHS healthcare workers — Nigeria is on the Red List:**
The NHS has historically been one of the largest employers of Nigerian nurses and doctors. However, Nigeria is currently on the WHO Health Workforce Support and Safeguards List (commonly called the "Red List"). This means the NHS and UK government restrict active, targeted recruitment directly from Nigeria.

What this means in practice:
• NHS trusts are not supposed to run recruitment campaigns specifically targeting Nigeria
• Individual Nigerian nurses and doctors CAN still apply to NHS jobs independently
• The NMC (Nursing and Midwifery Council) still processes Nigerian nursing registrations
• You can search NHS jobs at jobs.nhs.uk and apply directly — you just cannot be recruited through an active NHS-Nigeria scheme

For nurses: Register with the NMC. This involves a CBT (Computer Based Test) at Pearson VUE centres — available in Nigeria — and an OSCE (practical assessment done in the UK). Full process at nmc.org.uk.
For doctors: Register with the GMC (General Medical Council). Pass PLAB (Professional and Linguistic Assessments Board) — a 2-part exam. Full process at gmc-uk.org/plab.

**Indefinite Leave to Remain (ILR) — UK permanent residence:**
After 5 years on a Skilled Worker Visa, apply for ILR — the UK equivalent of permanent residence. After 1 more year with ILR, apply for British citizenship. UK allows dual nationality — you keep your Nigerian passport.

**Bringing your spouse and children:**
Skilled Worker Visa holders can bring family. Your spouse gets a Dependant visa and is allowed to work. Children can attend UK schools. Show approximately £845/month per dependant outside London.

**────────────────────────────────────────────**
**FULL WALKTHROUGH — Working in the UK as a Nigerian, Start to Finish**
**────────────────────────────────────────────**

**Understanding the Skilled Worker Visa**

To work in the UK as a Nigerian you need a Skilled Worker Visa. Three things must all be true at the same time: your employer must be on the Home Office's list of licensed sponsors, your specific job must be on the eligible occupations list, and your salary must meet the minimum threshold. As of April 2024 the general threshold is £38,700/year — verify the current figure at gov.uk/skilled-worker-visa because this changes.

Download the licensed sponsors register before doing anything else. It is a spreadsheet published at gov.uk/government/publications/register-of-licensed-sponsors-workers — download it, open it, and use Ctrl+F to search company names. Every company you seriously apply to should be on this list before you invest time in the application. Scam job offers targeting Nigerians with fake sponsorship promises are real — this list is your protection.

**The most effective way to find UK jobs from Nigeria**

LinkedIn is the single most important tool. Nigerian professionals in tech, finance, healthcare, engineering, and law are actively recruited on LinkedIn by UK employers. Here is how to set your profile up for UK job hunting: change your location to the city you want to work in (London, Manchester, Birmingham), write a headline that describes your expertise and signals you are open to UK opportunities, write a detailed About section that explains your Nigerian experience and skills in terms that UK employers will understand, turn on "Open to Work" with UK as your target location. Connect with Nigerian professionals already working in the UK — they often know about openings before they are posted.

Job boards: reed.co.uk, totaljobs.com, and indeed.co.uk for general roles. jobs.nhs.uk specifically for NHS. londontech.jobs for tech. jobsgopublic.com for public sector. For each company you are genuinely interested in, check the licensed sponsors register before applying.

**Healthcare workers — understand the Red List**

Nigeria is on the WHO Health Workforce Support and Safeguards List (the Red List). This means the NHS and UK government restrict active, government-to-government recruitment directly targeting Nigeria. In practice this means: NHS trusts should not be running campaigns specifically targeting Nigeria, but individual Nigerians can still apply directly to NHS jobs independently and be hired. The NMC and GMC still process Nigerian applications. You apply to the job, you get interviewed, you get hired — the restriction is on the NHS running targeted recruitment missions in Nigeria, not on Nigerians applying themselves.

For nurses: Register with the Nursing and Midwifery Council (NMC). This involves passing the Computer Based Test (CBT) — taken at Pearson VUE centres available in Nigeria — and then the Objective Structured Clinical Examination (OSCE) done in the UK once you have a job offer. Full process at nmc.org.uk. Many UK care homes and NHS trusts will support you through the OSCE once you have a job offer. Search jobs.nhs.uk for Band 5 Registered Nurse positions.

For doctors: Register with the General Medical Council (GMC). Pass PLAB 1 (a written multiple-choice exam — taken in Nigeria at British Council centres or other approved venues) and PLAB 2 (a clinical assessment done in the UK). Full process at gmc-uk.org/plab. Once GMC registered, apply to NHS foundation or specialty training programs through NHS Jobs or ORIEL.

For pharmacists: Register with the General Pharmaceutical Council (GPhC) — separate process documented at pharmacyregulation.org.

**The job application process**

Check the licensed sponsors register. Apply on the company's own careers page or through a job board. UK cover letters and CVs follow specific conventions: the CV should be 1–2 pages maximum, no photo, no date of birth, no marital status. Lead with a professional profile summary (3 sentences), then work experience in reverse chronological order with achievement-focused bullet points (what you delivered, not just what you did), then education, then skills. Cover letter: addressed to a specific person if possible, 3 short paragraphs — why this role interests you, what you bring from your experience, and why this company specifically. Use the MoveAbroad.ng CV Builder to generate a correctly formatted UK CV from your profile, and download the UK Work cover letter template which gives you the right structure and language for UK applications — both are in the CV Builder section of your dashboard.

UK interview processes typically involve: a phone or video screen with HR or a recruiter, then a competency interview with the hiring manager (expect "Tell me about a time you..." questions — prepare 6–8 stories from your Nigerian work experience using the STAR format: Situation, Task, Action, Result), and sometimes a technical assessment or case study. Video interviews from Nigeria are completely normal for first rounds.

**Receiving a job offer and the Certificate of Sponsorship**

When you receive an offer, ask your employer to issue a Certificate of Sponsorship (CoS). The CoS is a unique reference number the employer generates through the Home Office Sponsorship Management System. It contains your name, job title, salary, and start date. You need this number to apply for your Skilled Worker Visa. Your employer knows how to do this if they are already a licensed sponsor — they have done it before.

**Applying for the Skilled Worker Visa**

Apply online at gov.uk/skilled-worker-visa. You will need: your Certificate of Sponsorship reference number, your valid Nigerian passport, proof of English language ability (a degree taught in English, or IELTS B1 level — check gov.uk for current requirements), proof of your qualifications if required for the specific role. Pay the visa fee and IHS (Immigration Health Surcharge — currently £1,035/year for Skilled Workers). Processing: 3–8 weeks.

If you are already in the UK on a Graduate Route or another visa, you can switch to a Skilled Worker Visa from inside the UK without leaving the country.

**After you arrive: building toward ILR**

Your Skilled Worker Visa is typically granted for up to 5 years. You can change employers but must get a new CoS from the new employer and notify the Home Office. After 5 years of continuous residence on a Skilled Worker Visa (or a combination of qualifying visas including a Student Visa), apply for Indefinite Leave to Remain (ILR) — the UK equivalent of permanent residency. ILR application fee is approximately £2,885 — check gov.uk for current rates as this changes. After 1 year with ILR, apply for British citizenship. The UK allows dual nationality — you keep your Nigerian passport.`,
    },

    timeline: {
      undergrad: [
        { step: "October 15", title: "Oxford, Cambridge, Medicine, Dentistry deadline on UCAS", detail: "If you are applying to Oxbridge or to study Medicine or Dentistry anywhere in the UK, your UCAS application must be submitted by October 15. This is a hard deadline — not a target. For all other universities, the deadline is late January (check ucas.com for the exact date)." },
        { step: "9–12 months before start", title: "Take IELTS for UKVI Academic", detail: "Must be IELTS Academic 'for UKVI' specifically — NOT regular IELTS Academic. Book through British Council or IDP in Lagos, Abuja, or Port Harcourt. Target 6.5+ overall. Allow 2–3 months of preparation. The test costs approximately £220–230." },
        { step: "By late January", title: "Submit UCAS application", detail: "Apply at ucas.com. One personal statement for all 5 choices (4,000 characters = approximately 650 words). Focus on why you want to study this subject — not which universities. Pay UCAS fee (£27.50 for multiple choices in 2025 — check ucas.com)." },
        { step: "March–May", title: "Receive and respond to offers on UCAS Track", detail: "Accept your Firm choice and Insurance choice on UCAS. Meet any conditions on your offers — usually grade requirements. Pay the tuition deposit once you accept your firm offer (typically £3,000–5,000)." },
        { step: "June–July", title: "Receive CAS number from university", detail: "After meeting conditions and paying your deposit, the university issues your CAS. This typically arrives 1–3 months before your course starts. The CAS contains your personal details and course information." },
        { step: "Before visa application", title: "TB test at IOM Lagos or IOM Abuja", detail: "Mandatory for all Nigerian passport holders. Book at IOM Lagos (106 Dr. Nnamdi Azikiwe Street, Victoria Island) or IOM Abuja. Results take 3–5 working days. Your result is sent directly to UKVI — you receive a certificate with a reference number. Results valid for 6 months." },
        { step: "No earlier than 6 months before course start", title: "Apply for UK Student Visa at gov.uk", detail: "Apply at gov.uk/student-visa. Pay IHS upfront (£776/year × course length). Show maintenance funds in your bank account for 28 days (£1,136–£1,483/month × 9 months + first year tuition). Book biometrics at TLScontact Lagos, Abuja, or Port Harcourt." },
        { step: "3 weeks after applying", title: "Visa decision", detail: "Most Nigerian applicants get a decision within 3 weeks. If approved, your passport comes back with a vignette sticker. When you land in the UK, collect your Biometric Residence Permit (BRP) from a specified Post Office within 10 days of arrival." },
      ],
      masters: [
        { step: "12–18 months before", title: "Apply for Chevening Scholarship — do not miss this", detail: "Chevening deadline is in November each year. Applications open in August. Go to chevening.org. You need 2 years of work experience to apply. If you meet the requirements, apply every year until you get it. It covers full tuition, approximately £14,000 living costs per year, return flights, and visa fees. Nigerian Chevening alumni include senior professionals across every sector." },
        { step: "8–10 months before", title: "Apply directly to university portals", detail: "For University of Manchester: pgapplication.manchester.ac.uk/apply. For UCL: ucl.ac.uk/prospective-students/graduate. For Edinburgh: euclid.ed.ac.uk. Apply early — popular programs fill by February or March. Have your transcripts, IELTS for UKVI result, personal statement, and reference letters ready." },
        { step: "5–7 months before", title: "Accept offer, pay deposit, receive CAS", detail: "Pay your tuition deposit (usually £3,000–5,000). The university issues your CAS typically 1–3 months before your course starts. Do not apply for your visa before receiving the CAS." },
        { step: "Before visa application", title: "TB test at IOM Lagos or Abuja", detail: "Book as early as possible — slots fill fast, especially in summer. IOM Lagos: 106 Dr. Nnamdi Azikiwe Street, Victoria Island. Bring your passport. Results sent directly to UKVI. Certificate valid 6 months." },
        { step: "No earlier than 6 months before start", title: "Apply for Student Visa at gov.uk", detail: "Pay IHS (£776/year). Show maintenance funds (£1,136/month outside London or £1,483/month London, × 9 months, held for 28 days). Biometrics at TLScontact. Processing: 3 weeks." },
        { step: "After graduating — before Student Visa expires", title: "Apply for Graduate Route visa at gov.uk/graduate-visa", detail: "Apply from inside the UK before your Student Visa expires. The university notifies UKVI of your graduation — once UKVI confirms this, you can apply. The Graduate Route gives 2 years of open work authorization (no employer sponsorship needed). You can work for any employer. Apply entirely online at gov.uk/graduate-visa. Do not travel outside the UK after applying until you receive your decision." },
        { step: "During Graduate Route (2 years)", title: "Find a Skilled Worker sponsor", detail: "Search jobs.nhs.uk if you are in healthcare. For tech, finance, law, engineering: check the licensed sponsors register at gov.uk first to confirm your employer can sponsor you. Once you have a job offer with a Certificate of Sponsorship, apply to switch to a Skilled Worker Visa." },
      ],
      phd: [
        { step: "18–24 months before", title: "Find a supervisor or funded position", detail: "Set email alerts on jobs.ac.uk for your research field. Email supervisors directly at universities you are interested in. Funded positions are advertised on findaphd.com and jobs.ac.uk. For Commonwealth Scholarship: apply through the Nigerian Federal Scholarship Board by October." },
        { step: "12 months before", title: "Formal application with research proposal", detail: "Your application needs a research proposal (2,000–3,000 words) outlining your research question, methodology, why this university, and why this supervisor. Strong proposals reference existing literature and identify a clear gap. Your supervisor's letter of support is critical." },
        { step: "6–8 months before", title: "Receive offer with funding details", detail: "Confirm in writing: Is tuition fully covered? What is the annual living stipend? Is there a conference travel allowance? Accept the offer in writing. Your offer letter goes into your Student Visa application." },
        { step: "No earlier than 6 months before start", title: "Student Visa application", detail: "TB test at IOM Lagos/Abuja. Pay IHS (£776/year × PhD duration). Show maintenance funds. Biometrics at TLScontact. Apply at gov.uk/student-visa." },
        { step: "After graduating", title: "Graduate Route — 3 years", detail: "PhD graduates receive 3 years on the Graduate Route (not 2 like other graduates). Apply at gov.uk/graduate-visa from inside the UK before your Student Visa expires. 3 years of open work gives substantial time to find a Skilled Worker sponsor and build UK work experience toward ILR." },
      ],
      work: [
        { step: "Before applying to any job", title: "Check the licensed sponsors register and salary threshold", detail: "Go to gov.uk and download the register of licensed sponsors. Before spending time applying to any company, confirm they are on the list. The salary threshold changed in April 2024 to £38,700 for most roles — verify the current rate at gov.uk/skilled-worker-visa as this changes." },
        { step: "Job search", title: "Focus on companies that already sponsor foreign workers", detail: "LinkedIn is essential — set your location preference to UK, turn on 'Open to Work'. NHS jobs: jobs.nhs.uk. General jobs: reed.co.uk, totaljobs.com, indeed.co.uk. Tech jobs: londontech.jobs, techcrunch.com/jobs. Companies that already appear on the licensed sponsors register are your best targets." },
        { step: "Job offer received", title: "Employer issues Certificate of Sponsorship (CoS)", detail: "The CoS is a unique reference number your employer assigns to you through the Sponsorship Management System. It contains your job title, salary, and start date. You need this to apply for your Skilled Worker Visa." },
        { step: "CoS received", title: "Apply for Skilled Worker Visa at gov.uk", detail: "Apply at gov.uk/skilled-worker-visa. Pay visa fee (varies by duration) + IHS (£1,035/year). Processing: 3–8 weeks. You can switch from Graduate Route to Skilled Worker while in the UK without leaving." },
        { step: "5 years on Skilled Worker Visa", title: "Apply for Indefinite Leave to Remain (ILR)", detail: "After 5 years continuous residence on a Skilled Worker Visa, apply for ILR — permanent residence. No more visa renewals. You can travel freely. Cost: £2,885 (verify at gov.uk as this changes). After 1 more year with ILR, apply for British citizenship. UK allows dual nationality — you keep your Nigerian passport." },
      ],
      visitor: [
        { step: "4–6 weeks before travel", title: "Gather documents — employment letter, bank statements, and itinerary", detail: "Get your employment letter from HR (on company letterhead, with your salary, leave approval, and return-to-work date). Prepare 3–6 months of personal bank statements. Draft your travel itinerary (hotels, activities, dates). If visiting family or friends, ask them to write an invitation letter and attach their UK status document (BRP, passport photo page, or leave to remain)." },
        { step: "4–5 weeks before travel", title: "Apply online at gov.uk/standard-visitor-visa", detail: "Complete the application online. Fee: £115. Be specific about your accommodation, who you are visiting, your purpose, and your return date. Upload all documents. After submitting, the system gives you a reference number and instructions to book your biometrics appointment at TLScontact." },
        { step: "3–4 weeks before travel", title: "Attend TLScontact appointment for biometrics", detail: "Book your appointment at tlscontact.com/gb/lg/en/ (Lagos) or the Abuja TLScontact centre. Bring your passport, appointment letter, and document copies. Biometrics (fingerprints and photo) are taken at the appointment. Standard processing after biometrics: approximately 3 weeks." },
        { step: "After applying", title: "Do not book non-refundable flights until visa is approved", detail: "Processing is typically 3 weeks but can vary. If you need to travel sooner, consider priority service (£250 extra, approximately 5 working days). Only book flights after you have your visa stamped in your passport and returned via TLScontact or courier." },
        { step: "At UK border control", title: "Be prepared to answer questions clearly", detail: "The UK border officer will ask about your visit purpose, where you are staying, who you are visiting, how much money you have access to, and when you are returning to Nigeria. Have your return flight booking visible on your phone or printed. Answer clearly and consistently with what you stated in your application." },
      ],
    },

    tips: {
      undergrad: [
        { title: "IELTS for UKVI and regular IELTS are different — Nigerians get this wrong constantly", body: "When booking your test, you must specifically select 'IELTS Academic for UKVI' — not 'IELTS Academic'. They are run by the same organisations (British Council, IDP) but the UKVI version is taken at designated UKVI centres and the certificate specifically states it is for UKVI. A regular IELTS Academic certificate will be rejected for your UK Student Visa application. This mistake has caused many Nigerians to miss their intake. Check twice when booking." },
        { title: "The 28-day bank statement rule is strictly enforced", body: "Your funds must appear in your bank account for 28 consecutive days before your visa application date. If NGN 15 million was deposited 2 weeks ago, your application will likely be refused. If your sponsor (parent, relative) is providing the funds, you need their bank statements too, plus a signed sponsor letter. Plan your finances at least 6–8 weeks before you intend to apply." },
        { title: "Living outside London saves you roughly 30% on living costs — and many programs are just as good", body: "London maintenance funds requirement is £1,483/month. Outside London: £1,136/month. That is 23% less per month. Over 3 years of an undergraduate degree, this difference is substantial. University of Manchester, University of Birmingham, University of Nottingham, University of Leeds, and University of Edinburgh all have large Nigerian communities and are globally ranked. Unless your program is specifically London-based, consider this carefully." },
        { title: "The UCAS personal statement is used for all 5 universities — write it for the subject not the school", body: "Your one personal statement goes to all 5 universities you choose. You cannot write a different statement for each. This means you cannot say 'I chose Manchester because...' — it would be read by Leeds, Edinburgh, and others too. Write about why you love this subject, what sparked your interest, what relevant experience you have (Nigerian secondary school activities, competitions, work), and what you want to do with the degree." },
      ],
      masters: [
        { title: "Chevening is one of the best scholarships available to Nigerians — apply every year", body: "Chevening covers full tuition, approximately £14,000 living costs per year, return flights from Nigeria, and visa fees. You can study any subject at any UK university. You need 2 years of work experience. Applications open in August and close in November. Go to chevening.org. Nigerian Chevening alumni include politicians, professors, doctors, and senior business leaders. Apply every year until you get it — many winners applied 2 or 3 times." },
        { title: "A 1-year UK masters is fully valid internationally — do not let anyone tell you otherwise", body: "Some Nigerian families worry that a 1-year masters degree is not as credible as a 2-year program. This is wrong. UK masters programs are intensive and rigorous, and are recognised by employers and academic institutions worldwide. A 1-year UCL, Manchester, or Edinburgh masters is more valuable to most employers than a 2-year program at a lesser-known school. You also save approximately £15,000–25,000 in living costs compared to a 2-year Canadian or US masters." },
        { title: "The Graduate Route changed the UK from a temporary destination to a real long-term option", body: "Before 2021, international graduates had to leave within 4 months of graduating. Now you get 2 years (3 for PhD) to work freely in the UK. Combined with 5 years on a Skilled Worker Visa, you can be in the UK for 8 years and then apply for ILR and citizenship. This is a genuine long-term path." },
      ],
      phd: [
        { title: "The Commonwealth PhD Scholarship is fully funded and specifically available for Nigerians", body: "The Commonwealth Scholarship Commission has a fully funded PhD scholarship for citizens of developing countries including Nigeria. It covers tuition, living allowance, flights, and thesis costs. Apply through the Nigerian Federal Scholarship Board — they manage the in-country selection. Deadline is usually October. Check cscuk.fcdo.gov.uk for current requirements. This scholarship is underused by Nigerians. Apply." },
        { title: "jobs.ac.uk is where funded UK PhD positions are officially listed", body: "Set up a weekly email alert on jobs.ac.uk for your research field and the keyword 'PhD'. Many funded positions are only advertised on this platform and are not shared elsewhere. Check it every week. Funded positions typically include full tuition and a living stipend of approximately £18,000–21,000 per year." },
      ],
      work: [
        { title: "Check the licensed sponsors register BEFORE applying to any UK job", body: "The Home Office publishes a complete public list of all companies licensed to sponsor foreign workers. Download it from gov.uk/government/publications/register-of-licensed-sponsors-workers before investing time in any job application. Scam job offers targeting Nigerians with false sponsorship promises exist. If a company is not on this register, they cannot legally sponsor your Skilled Worker Visa — do not accept their offer." },
        { title: "Nigerian lawyers can qualify as UK solicitors through the SQE without a UK law degree", body: "The Solicitors Qualifying Examination (SQE) is a route to qualify as a UK solicitor. It involves two assessments and a period of qualifying work experience. Nigerian barristers and solicitors have used this route to build careers in UK law firms. You do not need a UK law degree. Check the Solicitors Regulation Authority website (sra.org.uk) for current requirements." },
        { title: "Proof of ties to Nigeria for visitor and initial entry applications", body: "When applying for UK visitor visas (or if you have previously been refused a visa), showing ties to Nigeria helps demonstrate you intend to return. What counts: Certificate of Occupancy or family land documents (family property counts, not just yours), letter from a Nigerian employer, spouse or children in Nigeria, active Nigerian bank account with regular transactions, business registration documents, ownership of property or assets in Nigeria." },
      ],
      visitor: [
        { title: "TLScontact — not VFS — handles UK visas in Nigeria", body: "The UK uses TLScontact (not VFS Global) for visa applications in Nigeria. Lagos: 31A Ladybird House, Mobolaji Bank Anthony Way, Ikeja. Abuja: plot 1261 Tafawa Balewa Way, Central Business District. Port Harcourt: also available — check tlscontact.com for the exact address. Apply online at gov.uk/standard-visitor-visa first, then book your biometrics appointment at TLScontact through the UK Visas and Immigration (UKVI) system." },
        { title: "Show 28 consecutive days of stable funds in your bank account", body: "The UK Home Office expects to see funds that have been stable for at least 28 days before your application date. A large deposit made recently before applying is a red flag. For a 2-week trip, a rough minimum is showing £2,000–3,000 in savings. For longer stays, more is expected. Your bank statements should show regular income (salary credits), not just a large lump sum appearing recently." },
        { title: "A previous UK refusal is not a ban — but you must address every reason", body: "Many Nigerians have been refused UK visitor visas. If you reapply with the exact same documents, you will likely be refused again. The refusal letter will state specific reasons. 'Insufficient ties to your home country' means you need a stronger employment letter, property documents, and family evidence. 'Insufficient funds' means you need more stable bank history. Address each reason specifically in your new application." },
        { title: "Long-term visitor visas save you from reapplying every trip", body: "The UK offers 2-year, 5-year, and 10-year Standard Visitor Visas. You apply for whichever you want — the fee is higher but the visa lasts longer. A 2-year multi-entry visa costs approximately £361; 5-year costs approximately £655; 10-year costs approximately £963 (verify at gov.uk). If you have family in the UK or travel regularly for business, applying for a longer-term visa is worth it. You do not need to visit multiple times to qualify — you just have to meet the same requirements." },
        { title: "You can apply for priority processing for £250 extra (5 working days)", body: "Standard processing for UK visitor visas is 3 weeks. Priority service brings this down to approximately 5 working days. Super priority (where available in Lagos) is 24 hours. These are paid at the application stage. If you have specific travel dates approaching, priority is worth considering. Book your TLScontact appointment at the same time as selecting priority, as appointment slots can be limited." },
      ],
    },

    universities: {
      undergrad: [
        { name: "University of Manchester", location: "Manchester, England", known_for: "Engineering, Business, Sciences, Medicine — large Nigerian student community", avg_tuition: "£20,000–£26,000/yr", acceptance: "58%", nigerian_community: "Very large" },
        { name: "Coventry University", location: "Coventry, England", known_for: "Business, Engineering, Art & Design, Nursing — known for welcoming international students", avg_tuition: "£14,000–£18,000/yr", acceptance: "75–80%", nigerian_community: "Very large" },
        { name: "University of Hertfordshire", location: "Hatfield, England", known_for: "Business, Computing, Engineering, Nursing — near London", avg_tuition: "£13,500–£16,500/yr", acceptance: "75%", nigerian_community: "Very large" },
        { name: "University of Nottingham", location: "Nottingham, England", known_for: "Pharmacy, Engineering, Business, Biosciences", avg_tuition: "£18,000–£24,000/yr", acceptance: "60–65%", nigerian_community: "Large" },
        { name: "University of Birmingham", location: "Birmingham, England", known_for: "Medicine, Law, Engineering, Commerce", avg_tuition: "£19,000–£27,000/yr", acceptance: "55–60%", nigerian_community: "Large" },
        { name: "University of Greenwich", location: "London, England", known_for: "Business, Computing, Engineering, Architecture — London location", avg_tuition: "£14,500–£17,500/yr", acceptance: "75%", nigerian_community: "Very large" },
      ],
      masters: [
        { name: "University of Manchester", location: "Manchester, England", known_for: "Engineering, Business, Sciences — apply at pgapplication.manchester.ac.uk", avg_tuition: "£20,000–£30,000/yr", acceptance: "Competitive", nigerian_community: "Very large" },
        { name: "University College London (UCL)", location: "London, England", known_for: "Medicine, Architecture, Laws, Sciences, Education — top 10 globally", avg_tuition: "£24,000–£38,000/yr", acceptance: "20–30%", nigerian_community: "Large" },
        { name: "University of Edinburgh", location: "Edinburgh, Scotland", known_for: "Medicine, Law, Business, Sciences — lower cost of living than London", avg_tuition: "£20,000–£28,000/yr", acceptance: "38–45%", nigerian_community: "Medium" },
        { name: "University of Glasgow", location: "Glasgow, Scotland", known_for: "Medicine, Engineering, Business, Law", avg_tuition: "£17,000–£24,000/yr", acceptance: "45–55%", nigerian_community: "Medium" },
        { name: "London School of Economics (LSE)", location: "London, England", known_for: "Economics, Finance, Law, Political Science — globally top 5 for social sciences", avg_tuition: "£28,000–£35,000/yr", acceptance: "14–18%", nigerian_community: "Medium" },
      ],
      phd: [
        { name: "University of Oxford", location: "Oxford, England", known_for: "All disciplines — globally top-ranked", avg_tuition: "Often funded for strong candidates", acceptance: "Highly competitive (~17%)", nigerian_community: "Small but prominent" },
        { name: "University of Cambridge", location: "Cambridge, England", known_for: "Sciences, Engineering, Humanities, Medicine", avg_tuition: "Often funded for strong candidates", acceptance: "Highly competitive (~18%)", nigerian_community: "Small but prominent" },
        { name: "Imperial College London", location: "London, England", known_for: "Engineering, Medicine, Computing, Sciences", avg_tuition: "Often funded", acceptance: "Competitive (~20%)", nigerian_community: "Medium" },
        { name: "University of Manchester", location: "Manchester, England", known_for: "Engineering, Sciences, Business — funded positions regularly available", avg_tuition: "Funded positions available", acceptance: "Competitive", nigerian_community: "Very large" },
      ],
      work: [],
    },

    embassy: {
      name: "British High Commission Nigeria",
      address: "Plot 1137 Shehu Shagari Way, Maitama, Abuja, Nigeria",
      phone: "All visa applications are submitted online — there is no general phone line for visa enquiries",
      note: "All UK visa applications are submitted online at gov.uk. The British High Commission does not accept walk-in visa applications. Biometrics are done at TLScontact offices in Lagos, Abuja, and Port Harcourt.",
      website: "https://www.gov.uk/world/organisations/british-high-commission-abuja",
      visa_apply: "https://www.gov.uk/student-visa",
      vfs: "https://nigeria.tlscontact.com/",
      official_immigration: "https://www.gov.uk/browse/visas-immigration",
      extra_links: [
        { label: "Apply for UK Student Visa (official)", url: "https://www.gov.uk/student-visa" },
        { label: "Graduate Route Visa (post-study work — 2 or 3 years)", url: "https://www.gov.uk/graduate-visa" },
        { label: "Skilled Worker Visa", url: "https://www.gov.uk/skilled-worker-visa" },
        { label: "Licensed Sponsors Register — check your employer", url: "https://www.gov.uk/government/publications/register-of-licensed-sponsors-workers" },
        { label: "UCAS — All UK Undergraduate Applications", url: "https://www.ucas.com/" },
        { label: "Immigration Health Surcharge — pay online", url: "https://www.immigration-health-surcharge.service.gov.uk/" },
        { label: "TLScontact Nigeria — Biometrics (Lagos, Abuja, Port Harcourt)", url: "https://nigeria.tlscontact.com/" },
        { label: "Chevening Scholarship — Nigeria", url: "https://www.chevening.org/scholarships/who-can-apply/nigeria/" },
        { label: "Commonwealth Scholarships (PhD and Masters)", url: "https://cscuk.fcdo.gov.uk/scholarships/" },
        { label: "FindAPhD — UK funded PhD positions", url: "https://www.findaphd.com/" },
        { label: "jobs.ac.uk — UK academic jobs and funded PhDs", url: "https://www.jobs.ac.uk/" },
        { label: "NHS Jobs — Apply to NHS directly", url: "https://www.jobs.nhs.uk/" },
        { label: "NMC — Nursing registration for overseas nurses", url: "https://www.nmc.org.uk/registration/information-for-internationally-trained-applicants/" },
        { label: "GMC PLAB — Doctor registration process", url: "https://www.gmc-uk.org/registration-and-licensing/join-our-registers/plab" },
      ],
    },

    scholarships: {
      undergrad: [
        { name: "Commonwealth Shared Scholarship", amount: "Full tuition + living allowance + flights + other costs", university: "Select UK universities only", deadline: "December each year — check cscuk.fcdo.gov.uk", url: "https://cscuk.fcdo.gov.uk/scholarships/commonwealth-shared-scholarships/" },
        { name: "GREAT Scholarship", amount: "Minimum £10,000 off tuition", university: "Various UK universities — check British Council Nigeria", deadline: "Varies by university — check annually", url: "https://study-uk.britishcouncil.org/scholarships/great-scholarships" },
        { name: "University of Nottingham Developing Solutions Scholarship", amount: "Full or 50% tuition waiver", university: "University of Nottingham", deadline: "February each year", url: "https://www.nottingham.ac.uk/studywithus/international-applicants/scholarships-fees-and-finance/scholarships/developing-solutions-scholarships.aspx" },
      ],
      masters: [
        { name: "Chevening Scholarship", amount: "Full tuition + ~£14,000/yr living costs + return flights + visa fees", university: "Any UK university, any subject", deadline: "November each year — apply at chevening.org", url: "https://www.chevening.org/" },
        { name: "Commonwealth Masters Scholarship", amount: "Full tuition + living allowance + flights", university: "Select UK universities", deadline: "December each year — check cscuk.fcdo.gov.uk", url: "https://cscuk.fcdo.gov.uk/scholarships/commonwealth-master-scholarships/" },
        { name: "GREAT Scholarship (Masters)", amount: "Minimum £10,000 off tuition", university: "Various UK universities", deadline: "Varies — check British Council Nigeria annually", url: "https://study-uk.britishcouncil.org/scholarships/great-scholarships" },
      ],
      phd: [
        { name: "Commonwealth PhD Scholarship", amount: "Full tuition + living stipend + flights + thesis allowance", university: "Select UK universities — apply via Federal Scholarship Board Nigeria", deadline: "October each year — check cscuk.fcdo.gov.uk", url: "https://cscuk.fcdo.gov.uk/scholarships/commonwealth-phd-scholarships-for-lics-and-umic/" },
        { name: "UKRI Doctoral Studentship", amount: "Full tuition + approximately £19,000/year living stipend (2025 UKRI minimum)", university: "Research universities across UK", deadline: "Varies by program — check ukri.org", url: "https://www.ukri.org/what-we-offer/developing-people-and-skills/find-studentships-and-fellowships/" },
      ],
      work: [],
    },
  },

  // ─────────────────────────────────────────────
  // SWEDEN
  // ─────────────────────────────────────────────
  SE: {
    tagline: "Fully-funded PhDs, world-class quality of life, and Europe's most generous scholarship for Nigerians",
    overview: "Sweden is one of Europe's most underrated destinations for Nigerians. It offers a very high standard of living, excellent universities, and a genuine commitment to equality and work-life balance. The Swedish Institute Scholarship is one of the most generous fully-funded scholarships for Nigerians for Masters programs. For PhD students: a Swedish PhD is a salaried employment position with full benefits. The main challenges are the high cost of living and the importance of learning Swedish for life outside an international tech bubble.",

    stats: {
      undergrad:  { tuition: "SEK 80,000–200,000/yr", living: "SEK 10,584–12,000/month (Migrationsverket 2025 figure)", processing: "4–8 weeks", acceptance: "Varies by program", minIELTS: "5.5–6.5 or university equivalent", currency: "SEK" },
      masters:    { tuition: "SEK 80,000–200,000/yr", living: "SEK 10,584–12,000/month", processing: "4–8 weeks", acceptance: "Varies by program", minIELTS: "6.0–6.5 or university equivalent", currency: "SEK" },
      phd:        { tuition: "FREE — PhD is salaried employment", living: "SEK 25,000–35,000/month (your salary)", processing: "4–8 weeks", acceptance: "Very competitive", minIELTS: "Set by program", currency: "SEK" },
      work:       { salary: "SEK 35,000–65,000/month", processing: "4–8 weeks", pathway: "Swedish Work Permit / EU Blue Card", minIELTS: "Not required for permit — employer may test", currency: "SEK" },
      visitor:    { fee: "€80 Schengen visa fee (~₦140,000)", processing: "15 calendar days (standard)", duration: "Up to 90 days in any 180-day period", pathway: "Schengen Short-Stay Visa (Type C)", currency: "EUR" },
    },

    summary: {
      undergrad: {
        intro: "Swedish undergraduate applications all go through one government portal — universityadmissions.se. There is no other way. Sweden does not issue a student visa — it issues a Residence Permit from the Migration Agency (Migrationsverket). The application window opens October 15 and closes January 15 for autumn start. Tuition is SEK 80,000–200,000/year and you need to prove you have SEK 10,584 per month of your study period (2025 figure).",
        firstSteps: [
          { action: "Apply at universityadmissions.se between October 15 and January 15", detail: "The ONLY portal for international applications. Create your account, select up to 4 programs, upload your documents (transcripts, English test result, personal letter if required), pay the SEK 900 application fee. Any agent charging to 'apply directly' to a Swedish university is using this same free portal." },
          { action: "Prepare your English proof — check each program's specific requirement", detail: "Many Swedish programs accept IELTS Academic (5.5–6.5), TOEFL, or a letter from your Nigerian university confirming English as medium of instruction — but this varies. Check each specific program page. The Migration Agency does NOT require a language test for the Residence Permit itself." },
          { action: "Wait for admission results in April — then immediately apply for your Residence Permit", detail: "Log into universityadmissions.se to see results. If admitted, accept your place and pay your deposit. Then immediately apply for your Residence Permit at migrationsverket.se — do not delay." },
          { action: "Apply for Residence Permit at migrationsverket.se with proof of funds", detail: "Upload: admission letter, passport, proof of funds (SEK 10,584 × months of study — for a 3-year degree: ~SEK 381,024), paid tuition deposit receipt, health insurance proof. Processing: 4–8 weeks." },
          { action: "Arrive in Sweden — register at Skatteverket within your first week", detail: "Your personnummer (Swedish personal identity number) is everything. Without it you cannot open a bank account, get a phone plan, or access most services. Go to the nearest Skatteverket office immediately on arrival." },
        ],
        keyFacts: [
          "Application window: October 15 to January 15 — there are no extensions",
          "You can apply to up to 4 programs at universityadmissions.se (SEK 900 fee)",
          "Funds required: SEK 10,584/month × months of study (2025 figure — verify at migrationsverket.se annually)",
          "You are allowed to work with no hour limit while studying in Sweden",
          "Your personnummer from Skatteverket is the most important document you will get in Sweden",
        ],
        outcome: "After graduating, you can apply for a 12-month job-seeking permit to find Swedish employment. Once employed, your employer sponsors a Work Permit. After 4 years of continuous residence, apply for Permanent Residence.",
      },
      masters: {
        intro: "Sweden is where the Swedish Institute Scholarship makes masters study genuinely accessible. The SI Scholarship covers all tuition, SEK 11,000/month living allowance, travel, and health insurance. Even without the scholarship, over 1,000 masters programs are taught in English. Applications go through universityadmissions.se — same portal as undergraduate. The Swedish PhD system is salaried employment, so a masters in Sweden is often a step toward a PhD position.",
        firstSteps: [
          { action: "Apply at universityadmissions.se by January 15 — and check si.se for the SI Scholarship at the same time", detail: "Both actions happen in the same window. Apply to up to 4 programs at universityadmissions.se (SEK 900 fee, deadline January 15). The SI Scholarship portal typically opens in February — but your universityadmissions.se application must already exist since the scholarship links to your program choices. Go to si.se in October to check the current cycle timeline." },
          { action: "Check English requirements for each specific program", detail: "Most programs accept IELTS Academic 6.0–6.5, TOEFL, or in many cases a letter from your Nigerian university confirming English medium of instruction. Check each program page individually — requirements vary even within the same university." },
          { action: "Wait for admission results in April — SI Scholarship results come May–June", detail: "Log into universityadmissions.se. If admitted, accept your place and pay your deposit. If you receive the SI Scholarship, it satisfies the financial requirement for your Residence Permit entirely." },
          { action: "Apply for Residence Permit at migrationsverket.se", detail: "Apply immediately after your admission letter. With SI Scholarship: your scholarship letter covers the financial requirement. Without scholarship: show SEK 10,584/month × study months (~SEK 253,728 for a 2-year program). Upload admission letter, passport, and financial proof." },
          { action: "Arrive in Sweden — register at Skatteverket immediately for your personnummer", detail: "Do this within your first week before anything else. Bring passport and Residence Permit. Without personnummer, you cannot open a bank account, get a SIM card, or access most services." },
        ],
        keyFacts: [
          "SI Scholarship covers full tuition + SEK 11,000/month + travel + health insurance — Nigerians win this every year",
          "Application window: October 15 – January 15 (SI Scholarship portal opens February)",
          "Funds without scholarship: SEK 10,584/month × study months (2025 figure)",
          "After graduating: apply for 12-month job-seeking permit; need SEK 13,000/month in savings",
          "You can work with no hour limit while studying — helps offset Sweden's high cost of living",
        ],
        outcome: "Masters graduation → 12-month job-seeking permit → Work Permit (employer applies) → 4 years continuous residence → Permanent Residence → Swedish citizenship (Sweden allows dual nationality).",
      },
      phd: {
        intro: "A Swedish PhD is not a study program — it is a salaried job. You apply for PhD positions the same way you apply for work. If selected, you sign an employment contract, receive a salary (SEK 25,000–35,000/month), get paid annual leave, contribute to the Swedish pension, and do not pay tuition. This is one of the best deals for Nigerian researchers in the world.",
        firstSteps: [
          { action: "Set weekly email alerts on academicpositions.com and varbi.com for PhD positions in Sweden", detail: "Swedish PhD positions open throughout the year — there is no single application season. Also check ki.se/en/about/jobs-at-ki (Karolinska Institutet) and each target university's career page directly. Positions typically receive 50–200 applications." },
          { action: "Apply with an academic CV and targeted cover letter", detail: "CV must include: research experience, publications (thesis chapters count), languages, references. Cover letter must explain specifically why this project and why your background makes you the right fit. Generic letters are rejected immediately." },
          { action: "Receive and sign an employment contract", detail: "The contract specifies your salary, start date, vacation days, and any conditions. This is a real employment contract under Swedish law. Read it carefully. This contract is what you use for your Residence Permit application." },
          { action: "Apply for Residence Permit for doctoral studies at migrationsverket.se", detail: "Select the doctoral studies option. Upload your employment contract. Since you have a salary, no separate proof of funds is needed. Processing: 4–8 weeks." },
          { action: "Arrive in Sweden — register at Skatteverket immediately and enrol in free Swedish classes (SFI)", detail: "Your personnummer is essential — your employer needs it for payroll. Go to Skatteverket within your first week. Also enrol in SFI (Svenska för Invandrare) at the nearest municipal adult education centre — it is free." },
        ],
        keyFacts: [
          "A Swedish PhD is salaried employment: SEK 25,000–35,000/month + paid leave + pension contributions",
          "You do NOT pay tuition — it is covered as part of your employment",
          "Positions open throughout the year — there is no single application season",
          "After 4 years of continuous Swedish residence: apply for Permanent Residence",
          "Sweden allows dual citizenship — you keep your Nigerian passport",
        ],
        outcome: "PhD employment contract → Residence Permit → 4 years → Permanent Residence → Swedish citizenship. Your spouse can also work in Sweden and your children attend school for free.",
      },
      work: {
        intro: "Sweden's work permit is employer-driven: your employer sponsors the application, not you. The salary must meet the collective agreement minimum (~SEK 27,360/month — verify at migrationsverket.se). Stockholm has one of Europe's strongest tech ecosystems. Swedish is required for most jobs outside Stockholm's international companies, so job search should target firms with English-language work environments.",
        firstSteps: [
          { action: "Search for Swedish employers on LinkedIn — specifically targeting international companies in Stockholm", detail: "Spotify, Klarna, King, Ericsson, Volvo, ABB, and Saab all hire internationally. Set your LinkedIn location preference to Sweden. English is the working language at most Stockholm tech companies, so you can function without Swedish initially." },
          { action: "Also check arbetsformedlingen.se (Swedish Public Employment Service) and Blocket Jobb", detail: "arbetsformedlingen.se is the government employment service — free to use. For healthcare roles: Socialstyrelsen must validate your credentials first (6–12 months). Register your foreign degree at socialstyrelsen.se before applying to Swedish healthcare jobs." },
          { action: "Receive a job offer — your employer submits the Work Permit application at migrationsverket.se", detail: "You cannot apply for the work permit yourself — it is submitted by your employer. Salary must meet the collective agreement minimum (verify current figure at migrationsverket.se). Processing: 4–8 weeks." },
          { action: "Arrive in Sweden — register at Skatteverket for your personnummer and enrol in SFI", detail: "Personnummer is essential for banking, phone contracts, and all Swedish services. Enrol in SFI (free Swedish language classes) immediately — Swedish proficiency dramatically expands your long-term career options." },
        ],
        keyFacts: [
          "Work permit is employer-sponsored — you cannot apply without a confirmed job offer",
          "Minimum salary threshold: ~SEK 27,360/month (verify at migrationsverket.se — updated regularly)",
          "EU Blue Card: for degrees + salary above SEK 49,875/month — faster processing and EU mobility",
          "Healthcare workers: foreign credentials must be validated by Socialstyrelsen first (6–12 months)",
          "After 4 years of continuous residence: Permanent Residence. Sweden allows dual citizenship.",
        ],
        outcome: "Work Permit (employer applies) → annual renewal → 4 years continuous residence → Permanent Residence → Swedish citizenship. Sweden allows dual nationality.",
      },
      visitor: {
        intro: "Sweden is a Schengen Area country. Nigerian passport holders need a Schengen short-stay visa (Type C) to visit Sweden. This single visa lets you travel across all 26 Schengen countries for up to 90 days in any 180-day period. You apply through the Swedish embassy or consulate (or in Nigeria, through VFS Global on behalf of Sweden). The visa fee is €80. Sweden processes most visitor visas within 15 calendar days.",
        firstSteps: [
          { action: "Determine where to apply — Sweden or another Schengen country", detail: "Apply at the embassy or consulate of the country you will spend the most time in. If visiting only Sweden, apply for a Swedish Schengen visa. If visiting Sweden and Germany equally, apply at whichever you enter first. In Nigeria, Sweden's Schengen applications go through the VFS Global centre. Lagos: 8 Elsie Femi Pearse Street, Victoria Island. Abuja: 16 Cairo Street, Wuse 2." },
          { action: "Prepare your financial evidence", detail: "The Schengen requirement is €100 per day of your stay, or evidence of a host/sponsor who will cover your costs. For a 14-day visit: approximately €1,400 in accessible funds. Your 3–6 months of bank statements should show stable, consistent funds — not recently deposited. If a Swedish host is covering your costs, include an invitation letter from them with their Swedish identification and residency status." },
          { action: "Get a strong employment letter and submit your application at VFS", detail: "You need: valid Nigerian passport, completed Schengen visa application form, two recent passport photos (35x45mm, white background), bank statements, employment letter (company letterhead, signed by HR, confirming your role, salary, approved leave dates, and return to work), hotel or host invitation, travel insurance covering €30,000 minimum across all Schengen countries, return flight booking (can be refundable at this stage), and application fee €80 (approximately ₦140,000 at current rates)." },
          { action: "Biometrics and document submission at VFS", detail: "Book your appointment at vfsglobal.com/sweden/nigeria. Bring originals and photocopies of all documents. Biometrics (fingerprints and photo) are taken at the appointment. Your passport is held by VFS until the visa is processed." },
        ],
        keyFacts: [
          "Schengen visa allows up to 90 days across all 26 Schengen countries — one visa, all of Europe",
          "Travel insurance is mandatory: minimum €30,000 coverage, valid across all Schengen countries for your entire trip",
          "Previous US, UK, or other Schengen visas in your passport significantly help your application",
          "The Swedish embassy in Abuja handles appeals and special cases — VFS Global handles routine applications",
          "A multiple-entry Schengen visa (if granted) allows multiple trips within its validity — request this if you plan to travel to Europe regularly",
        ],
        outcome: "A Schengen short-stay visa allows up to 90 days in Sweden (and any other Schengen country) within a 180-day window. You cannot work or study. You cannot extend inside the Schengen area — you must leave and reapply.",
      },
    },

    visa: {
      undergrad: `**Swedish Residence Permit for Studies (Undergraduate)**

Sweden does not issue a "student visa." Instead, you apply for a Residence Permit from the Swedish Migration Agency (Migrationsverket). This is applied for entirely online.

**Step 1 — Apply at universityadmissions.se — the ONLY way**
ALL international undergraduate applications to Swedish universities go through one central government portal: universityadmissions.se. There is no other way. No university has its own separate international admissions system that bypasses this portal. Any consultant or website in Nigeria charging you to "apply directly" to a Swedish university is using the same free portal you can access yourself.

Application window: Opens October 15 each year, closes January 15 for the autumn (September) semester.
• You can apply to up to 4 programs
• Application fee: SEK 900 (non-refundable, paid online with a card)
• Upload your documents through the portal — transcripts, English test results, personal letter if required

**Step 2 — Wait for admission results (April)**
Results are published in April on universityadmissions.se. If admitted, you receive an official admission letter. Accept your place and pay your tuition deposit.

**Step 3 — Apply for Residence Permit at migrationsverket.se**
Apply online immediately after receiving your admission letter. Do not delay. You will upload:
• Your admission letter from the Swedish university
• Valid Nigerian passport (valid for the full duration of your studies)
• Proof of funds: The Swedish Migration Agency requires you to show SEK 10,584 per month of your study period (2025 official figure — verify at migrationsverket.se as this is updated annually). For a 3-year bachelor's degree (36 months): SEK 381,024. For a shorter program, multiply by months.
• Proof of paid tuition deposit (most universities require this)
• Health insurance documentation (your university usually provides this or tells you what to get)

**Processing:** 4–8 weeks typically. Apply as soon as your admission letter arrives.

**English language requirements:**
Universities set their own requirements. Most English-taught programs accept:
• IELTS Academic: typically 5.5–6.5 depending on program and university
• TOEFL iBT
• Cambridge English qualifications
• In many cases, a letter from your previous Nigerian university confirming your education was entirely in English — but this varies by institution and program. Some Swedish universities explicitly accept this; others require a formal test. Check the specific program requirements on the university's website. Do not assume — verify directly.

The Swedish Migration Agency does NOT require a language test for the Residence Permit — language proficiency is a university admission requirement only.

**Working while studying:**
As a Residence Permit holder studying in Sweden, you are allowed to work with no hour limit. This helps offset the high cost of living considerably.

**Bringing your spouse or children:**
• Your spouse can apply for a Residence Permit as a dependant — they are allowed to work
• Your children can attend Swedish schools free of charge
• Show you can financially support your family: the Migration Agency adds approximately SEK 3,500–5,000/month per additional family member to the funds requirement

**────────────────────────────────────────────**
**FULL WALKTHROUGH — Sweden Undergraduate, Start to Finish**
**────────────────────────────────────────────**

**What studying in Sweden as an undergraduate actually involves**

Sweden is one of Europe's most underrated study destinations for Nigerians. The universities are genuinely good — KTH Royal Institute of Technology, Lund University, Stockholm University, Uppsala University, and Chalmers are internationally respected. Programs are taught in English across engineering, technology, natural sciences, business, and social sciences. The country is safe, organised, and the quality of life is high. The main challenges are the high cost of living (Stockholm is expensive — SEK 10,584/month minimum is the government's own figure) and tuition costs for non-EU students (SEK 80,000–200,000/year depending on program and university). There are no government-funded tuition waivers for undergraduates from outside the EU, unlike for PhD students.

The application process is centralised and completely free to navigate yourself — universityadmissions.se handles all international undergraduate applications and it is a government portal. Any Nigerian agent or consultant charging you to "apply to Swedish universities" is using this same free portal.

**Before you apply — what you need ready**

Prepare your academic documents: your WAEC/NECO results (original certificate and any verification), your secondary school transcripts certified by your school's principal or registrar, and any post-secondary qualifications. Swedish universities require official certified documents — not printouts from a student portal.

Sort out your English language proof. Swedish universities accept several things:
IELTS Academic — most programs need 5.5–6.5 overall (check the specific program page)
TOEFL iBT
Cambridge English (CAE or CPE)
A letter from your previous school confirming that all your education was in English — this is accepted by many Swedish universities for admission but you must check the specific program. Some explicitly accept it; others require a formal test. Go to the specific program's requirements page on the university's website and read it carefully. Do not assume.

The Swedish Migration Agency does NOT require an English test for the Residence Permit. The English requirement is purely for university admission. Once admitted, your admission letter is what matters for the permit.

**The application window — October 15 to January 15**

ALL international undergraduate applications go through universityadmissions.se. The window opens October 15 every year and closes January 15 for the autumn (September) semester. This deadline is firm — there are no extensions. Create your account at universityadmissions.se, browse programs, and select up to 4 programs. Pay the SEK 900 application fee by credit or debit card. Upload your documents through the portal — you will have a deadline after submission (usually in February or March) to upload certified transcripts and English proof. Check your account regularly to confirm documents are received and verified.

**Waiting for results in April**

Admission results are published on universityadmissions.se in April. You log in to see your results. If admitted, you receive an official admission letter from the university. Accept your place immediately and pay your tuition deposit — spots can be released if you do not respond promptly.

**Applying for your Residence Permit at migrationsverket.se**

Apply immediately after receiving your admission letter — do not delay. Apply online at migrationsverket.se. You upload: your admission letter, your valid Nigerian passport (must be valid for the full length of your studies), proof of funds (SEK 10,584 per month of your study period — the 2025 official figure; for a 3-year bachelor's that is SEK 381,024; verify the current figure at migrationsverket.se each year as it is updated), your paid tuition deposit receipt, and health insurance documentation (your university usually specifies what they require or provides it automatically).

Processing: 4–8 weeks. Apply as soon as your admission letter arrives — do not wait until close to your start date.

**Money: understanding the funds requirement**

SEK 381,024 for a 3-year bachelor's degree at 2025 rates is approximately ₦200–250 million depending on exchange rates — this is a high barrier. There is no GIC-style system in Sweden where the money comes back. You must genuinely have and show this much money available for the full duration. If you do not have these funds, Sweden undergraduate is not the right path — look at Canada (GIC money is returned) or UK (shorter program, lower total funds needed). The Swedish Institute Scholarship does not cover undergraduate studies — it is for masters students only.

**Arriving in Sweden — the personnummer is everything**

Within your first week in Sweden, go to the nearest Skatteverket (Swedish Tax Agency) office and register for your personnummer — your Swedish personal identity number. Bring your passport and Residence Permit. The personnummer is the foundation of Swedish life — without it you cannot open a bank account, get a phone contract, access healthcare, or use most Swedish services. This is not a bureaucratic formality you can do later. Do it immediately.

Enrol in SFI (Svenska för Invandrare — Swedish for Immigrants) at the nearest municipal adult education centre (komvux). It is free. Swedish is spoken everywhere outside the international student bubble. Learning it transforms your social life and future employment options. Start from day one.

You are allowed to work with no hour limit while studying on a Residence Permit in Sweden. Many students work part-time to offset the high cost of living.

**After your degree — the path forward**

After completing your undergraduate degree, you can apply for a residence permit to look for work at migrationsverket.se. This gives you up to 12 months to find a Swedish employer. You need to show SEK 13,000 per month in savings for the duration of the permit. Once you have a job offer, your employer applies for a Work Permit. After 4 years of total continuous legal residence in Sweden, you can apply for Permanent Residence. After 5 years, Swedish citizenship. Sweden allows dual nationality.`,

      masters: `**Swedish Residence Permit for Studies (Masters)**

Masters programs are where Sweden is strongest for Nigerian students. Over 1,000 programs are taught entirely in English across Swedish universities in engineering, technology, business, public health, computer science, and more.

**How to choose the right Swedish university and program**

Sweden has several excellent universities, each with different strengths. Here is how to choose:

KTH Royal Institute of Technology (Stockholm) — one of Europe's top technical universities. Excellent for engineering, computer science, ICT, and energy. Strong employer connections in the Swedish tech sector. Stockholm location is an advantage for the international job market.
Lund University (Lund/Malmö) — ranked among Europe's best overall. Particularly strong in science, medicine, law, and social sciences. Lund itself is a smaller city near Malmö — lower cost of living than Stockholm.
Chalmers University of Technology (Gothenburg) — excellent for engineering and architecture. Gothenburg is Sweden's second city, home to Volvo, AstraZeneca, SKF, and many engineering employers.
Uppsala University — Sweden's oldest and most historically prestigious university. Strong in science, medicine, pharmacy, and humanities. Uppsala is 40 minutes from Stockholm by train — you get a quieter, more affordable city with easy access to the capital.
Stockholm University — broad range of subjects. Strong in natural sciences, social sciences, and humanities. Good location for the Stockholm job market.

How to pick your specific program: go to universityadmissions.se and browse by subject. For each program you find interesting, go to that university's own website and read the program's specific requirements, curriculum, and which companies partner with the department or have hired recent graduates. That last point tells you a lot about the program's value in the labour market.

Scholarships: The Swedish Institute Scholarship (SISGP) is the one to aim for — covers everything. But also check each university's international scholarship page. KTH, Lund, Uppsala, and Chalmers all have their own partial scholarships for admitted international students. These are typically announced after admission.

**Step 1 — Apply at universityadmissions.se**
Apply between October 15 and January 15 for autumn start. Apply to up to 4 programs. Pay the SEK 900 application fee. Upload your documents. Results in April.

**English language — important note for Nigerian masters applicants:**
Swedish universities accept several forms of English proof:
• IELTS Academic: typically 6.0–6.5 overall
• TOEFL iBT
• Cambridge English (CAE or CPE)
• Pearson PTE Academic
• In many cases, a letter from your previous university confirming English as the medium of instruction. Some Swedish universities explicitly accept this for admission. Check each specific program page — it genuinely varies.

The Migration Agency does NOT require a language test for the Residence Permit itself. Only the university requires English proof for admission.

**Step 2 — Apply for the Swedish Institute Scholarship (si.se) — do this at the same time**
The Swedish Institute Scholarship for Global Professionals (SISGP) is a fully-funded scholarship covering:
• All tuition fees
• SEK 11,000/month living allowance
• Travel grant
• Health insurance

Nigeria is an eligible country. Applications typically open in October and the SI scholarship portal opens in February — but your universityadmissions.se application (due January 15) must be done first since the scholarship links to your program choices. Check si.se every October for the current cycle timeline.

This scholarship is competitive but Nigerians win it every year. Apply regardless of whether you think you will get it.

**Step 3 — Residence Permit at migrationsverket.se**
Apply after receiving your admission letter. Funds requirement: SEK 10,584 per month × months of study (2025 figure). For a 2-year masters (24 months): SEK 253,728 approximately. If you have the SI Scholarship, your scholarship letter satisfies the financial requirement entirely.

**After graduation — staying in Sweden:**
After completing your masters, you can apply for a "residence permit to look for work" — this gives you up to 12 months to find employment in Sweden. You must show SEK 13,000 per month in savings for each month of the permit. Apply at migrationsverket.se before your student permit expires.

**Bringing your spouse or children:**
Your spouse can come on a dependant Residence Permit and is allowed to work. Children attend Swedish school free. Show approximately SEK 3,500–5,000/month per family member additional funds.

**────────────────────────────────────────────**
**FULL WALKTHROUGH — Sweden Masters, Start to Finish**
**────────────────────────────────────────────**

**Why Sweden for a masters**

Sweden offers over 1,000 English-taught masters programs across engineering, technology, computer science, business, public health, social sciences, and more. The universities are genuinely strong. The Swedish Institute Scholarship — available specifically for Nigerians — is the most generous fully-funded masters scholarship for Nigerians in Europe: it covers all tuition, SEK 11,000/month living allowance, travel, and health insurance. Winning this scholarship makes the entire masters essentially free. Even without it, a Swedish masters is a serious credential. After graduating, a 12-month job-seeking permit lets you find Swedish employment and begin building toward permanent residence.

**The Swedish Institute Scholarship — apply for this**

The SI Scholarship (SISGP) is open to Nigerians. It covers: full tuition at any Swedish university, SEK 11,000 per month living allowance, a travel grant, and health insurance. Applications open on si.se — check there every October for the current cycle. The universityadmissions.se application (due January 15) must be submitted first because the SI Scholarship links to your program choices on that portal. The SI Scholarship portal typically opens in February, after the universityadmissions.se deadline. So the sequence is: October/November — research programs; January 15 — submit universityadmissions.se application; February — submit SI Scholarship application (if the cycle matches); April — university admission results; May–June — SI Scholarship results.

Do not skip applying for the SI Scholarship because you think you will not get it. Nigerians win this scholarship every cycle. The application takes effort but it is worth it.

**Step one — research programs and apply at universityadmissions.se**

Between October 15 and January 15, apply at universityadmissions.se. The portal is free. Create an account, browse programs, select up to 4, pay the SEK 900 application fee, upload your documents. SEK 900 is approximately ₦60,000 at current rates — this is the total fee for all 4 program choices.

Verify the English requirement for each specific program page before selecting it. Most accept IELTS Academic 6.0–6.5, TOEFL, Cambridge English, or a letter from your Nigerian university confirming English as the medium of instruction. The specific requirement varies program by program — check each one individually.

Get your degree certificate and transcripts officially certified. Stamped and signed by your university registrar. For the universityadmissions.se portal you will upload digital copies at first, but you may need to send originals later if admitted to a program that requires it.

**After applying — what happens**

You will receive a deadline (usually February or March) to upload certified supporting documents through the universityadmissions.se portal. Upload certified transcripts and English proof by this deadline. Check your account regularly — the portal will show if documents are received, under review, or if anything is missing.

Admission results: April. Log in and check. If admitted, accept your place and pay the tuition deposit. The university then sends you an official admission letter.

SI Scholarship results: May–June. If you receive the scholarship, your scholarship award letter satisfies the financial requirement for your Residence Permit entirely.

**Applying for your Residence Permit at migrationsverket.se**

Apply immediately after receiving your admission letter. Do not wait. Apply online at migrationsverket.se.

If you have the SI Scholarship: upload your scholarship award letter as your financial proof. The scholarship letter satisfies the requirement.

If you do not have the scholarship: show SEK 10,584 per month × months of study. For a 2-year masters (24 months): approximately SEK 253,728. For a 1-year masters (12 months): approximately SEK 127,008. Verify the current monthly figure at migrationsverket.se — it is updated annually. These funds must be available in your account and demonstrably yours or from a sponsor.

Also upload: admission letter, valid Nigerian passport (valid for the full study duration), paid tuition deposit receipt, health insurance documentation.

Processing: 4–8 weeks.

**Arriving in Sweden**

Within your first week: go to Skatteverket and register for your personnummer. Do this before anything else — you cannot open a bank account, get a phone plan, or access any Swedish services without it. Bring your passport and Residence Permit. The number is usually issued on the spot or within a few days.

Open a Swedish bank account — Swedbank, SEB, Handelsbanken, or Nordea are the main banks. You typically need your personnummer, passport, and Residence Permit.

Enrol in SFI (free Swedish language classes) at the nearest komvux (municipal adult education centre). Swedish is required for most jobs outside Stockholm's international tech scene. Start from day one.

You are allowed to work with no hour limit while studying on a student Residence Permit. Many Nigerian students work part-time to supplement their living costs.

**After graduating — staying in Sweden**

Before your Residence Permit expires, apply for a residence permit to look for work at migrationsverket.se. You get up to 12 months to find a Swedish employer. You must show SEK 13,000/month in savings for each month of the permit. Apply before your student permit expires — do not let it lapse.

Once you have a job offer, your employer submits a Work Permit application on your behalf. The salary must meet the collective agreement minimum for the occupation — approximately SEK 27,360/month in 2025, but verify at migrationsverket.se. Work permits are approved in 4–8 weeks. After 4 years of total continuous legal residence in Sweden, apply for Permanent Residence at migrationsverket.se. Sweden allows dual nationality — you keep your Nigerian passport.`,

      phd: `**PhD in Sweden — A Salaried Job, Not a Study Program**

This is the most important thing to understand about Swedish PhDs: it is an employment contract, not a student admission. You apply for a PhD position the same way you apply for a job. If selected, you become an employee of the university.

**What this means:**
• You receive a salary — typically SEK 25,000–35,000/month depending on year of study and department
• You pay Swedish income tax on this salary
• You contribute to the Swedish pension system
• You receive paid annual leave (approximately 28 days per year)
• You have access to parental leave
• You do NOT pay tuition — the university covers this as part of your employment
• You are covered by Swedish employment law and collective agreements

**Step 1 — Find advertised PhD positions**
PhD positions in Sweden are advertised like job vacancies. Monitor these platforms weekly:
• The individual university's careers page: e.g., ki.se/en/about/jobs-at-ki for Karolinska Institutet
• academicpositions.com — set email alerts for Sweden
• varbi.com — used by many Swedish universities
• jobs.ac.uk — also lists some Swedish positions

Apply with: Academic CV (include publications, thesis title, research interests, relevant experience), cover letter explaining fit with the specific project, and reference contacts.

**Step 2 — Interview and job offer**
Shortlisted candidates are invited for interviews — sometimes in person, sometimes by video. If selected, you receive a formal employment contract specifying your salary, start date, and terms.

**Step 3 — Apply for Residence Permit at migrationsverket.se**
Because you are employed, you apply using your employment contract. You do NOT apply as a student — your permit is a student residence permit for doctoral studies. Migrationsverket classifies PhD students as studying, but your situation is employment-like. Apply at migrationsverket.se and select the doctoral studies option. Processing: 4–8 weeks. Since you have a salary, you do not need to show separate funds — your employment contract is your financial proof.

**Path to Permanent Residence:**
After 4 years of continuous residence in Sweden, apply for permanent residence (permanent uppehållstillstånd) at migrationsverket.se. After 5 years, apply for Swedish citizenship. Sweden allows dual citizenship — you keep your Nigerian passport.

**Learning Swedish:**
Your PhD work and lab/department may be in English. But Swedish is spoken everywhere else. The government offers free Swedish language classes (SFI — Svenska för Invandrare) at municipal adult education centres for anyone who has registered at Skatteverket. Start as soon as you arrive. Swedish language ability transforms your social life and long-term employment options in Sweden.

**Bringing your spouse or children:**
As an employee, your spouse can apply for a Residence Permit and is allowed to work. Children attend Swedish school for free. This makes Sweden one of the most family-friendly PhD destinations in the world.

**────────────────────────────────────────────**
**FULL WALKTHROUGH — Sweden PhD, Start to Finish**
**────────────────────────────────────────────**

**What a Swedish PhD actually is — read this first**

A Swedish PhD is salaried employment. You are not a student in the traditional sense — you are an employee of the university. You sign an employment contract. You receive a monthly salary of approximately SEK 25,000–35,000 (roughly ₦1.5–2.1 million per month at current rates) depending on your year of study and department. You pay Swedish income tax on this salary. You contribute to the Swedish pension system. You receive approximately 28 days of paid annual leave per year. You have access to Swedish parental leave. You do not pay tuition — the university covers it as part of your employment. You are covered by Swedish employment law and collective agreements that govern wages and working conditions.

This is one of the best deals for Nigerian researchers in the world. You are paid to do research, you have full employment rights, and after 4 years of continuous residence you qualify for Swedish Permanent Residence.

**Step one — find PhD positions (this is ongoing, not seasonal)**

Swedish PhD positions open throughout the year. There is no single application season. You must monitor platforms regularly:

academicpositions.com: set up email alerts for Sweden and your research field. This is one of the most comprehensive platforms for Swedish academic positions.
varbi.com: used by many Swedish universities to advertise positions — Uppsala University, Lund University, Stockholm University, and others post here.
Individual university career pages: ki.se/en/about/jobs-at-ki for Karolinska Institutet (one of the world's top medical universities); kth.se/en/om/work-at-kth for KTH Royal Institute of Technology; lu.se/work-at-lund-university for Lund University. Check each university's career page weekly.
jobs.ac.uk also lists some Swedish positions.

Set up email alerts and check them weekly. Positions are competitive — typically receiving 50–200 applications. They close within 2–4 weeks of posting.

You can also email professors directly to express interest even when no position is advertised. This approach works less reliably in Sweden than in Canada or the UK, but it does work — especially if you are emailing about a specific grant project a professor is known to be running. Keep the email brief, specific, and professional.

**Step two — preparing your application**

Apply to advertised positions with:

Academic CV in European/Swedish format: research experience first, then education, then publications, then other relevant experience. Include your full publication list — conference papers, preprints, and thesis chapters all count. Include languages spoken and your proficiency level. References are listed at the end with contact details.

Cover letter (usually called a personal letter or motivation letter in Swedish applications): must be specific to this exact project and this exact supervisor. Explain why this research project specifically, why your background makes you the right person to carry it out, and what you will contribute. Generic letters that could apply to any PhD position are rejected immediately. Swedish academic culture values directness and specificity — say what you will do, why it matters, and why you can do it.

If the application requires a research proposal: typically 1,000–2,000 words. Your research question, methodology, and how it connects to the advertised project. This is not your own independent proposal — it must connect directly to the advertised project description.

References: 2–3 academic referees who can speak to your research ability. Contact them before applying and provide your application materials so they are ready if contacted.

**Step three — interviews**

Shortlisted candidates are invited for interviews — sometimes in person in Sweden, sometimes by video. Swedish interviews tend to be direct, structured, and professional. You may be asked technical questions about your proposed research, questions about your methodology, and questions about how you work in a team. Swedish academic culture is non-hierarchical — you address your potential supervisor by first name. Prepare specific answers to "Why this project?" and "What would you do in the first 6 months?"

**Step four — receiving and signing the employment contract**

If selected, you receive a formal employment contract from the university's HR department. The contract specifies: your monthly salary, start date, expected duration (typically 4 years with possible extension to 4.5 or 5 years depending on teaching duties), annual leave entitlement, and any additional terms. Read it carefully. If anything is unclear, ask the HR department — they expect questions. Once signed, this contract is what you use for your Residence Permit application.

**Step five — applying for your Residence Permit at migrationsverket.se**

Apply online at migrationsverket.se. Select the option for doctoral studies. Upload: your signed employment contract, your valid Nigerian passport, and (if applicable) any other supporting documents requested. Because you have a salary, no separate financial proof is required — your employment contract is your financial proof. Processing: 4–8 weeks. Your permit will be valid for the duration of your employment contract.

**Step six — arriving in Sweden**

This is urgent: within your first week, go to Skatteverket (the Swedish Tax Agency) and register for your personnummer. Your employer's payroll department cannot pay you without it. Bring your passport and Residence Permit. The number is issued on the spot or within a few days. Also open a Swedish bank account (you need your personnummer first — Swedbank or SEB are commonly used).

Enrol in SFI (Swedish for Immigrants) at the nearest komvux — it is free and your employer may even support you attending during work hours. Start immediately. Swedish language ability transforms your daily life in Sweden and opens vastly more career options after your PhD.

**During your PhD — building toward PR**

After 4 years of continuous legal residence in Sweden on any combination of qualifying permits (student permit + employment permit), you qualify to apply for Permanent Residence (permanent uppehållstillstånd) at migrationsverket.se. After 5 years of continuous residence, you can apply for Swedish citizenship. Sweden allows dual nationality — your Nigerian passport remains valid.

Your salary is taxable Swedish income. File your Swedish tax return every year (Swedish Tax Agency sends forms automatically — skatteverket.se). You may be eligible for deductions related to your research expenses and professional development. Tax refunds are common for PhD students.

Your employer pays into the Swedish pension system on your behalf. These contributions are yours and accumulate for as long as you remain in Sweden. Even if you eventually leave Sweden, you can claim these pension contributions later.

Network within your department and across your university. The professional networks you build during a PhD — with Swedish academics, international researchers, and industry contacts — are as valuable as the degree itself for your long-term career in Europe.`,

      work: `**Working in Sweden as a Nigerian**

**Work Permit**
To work in Sweden as a non-EU/EEA citizen, you need a Work Permit (Arbetstillstånd). The Swedish system is employer-driven:
• Your employer finds you and offers you a job
• The salary must meet the collective agreement minimum for that occupation — currently at least SEK 27,360/month (verify at migrationsverket.se as this is updated regularly)
• Your employer must have advertised the position to EU/EEA workers first (under Swedish law)
• Your employer submits the work permit application on your behalf through migrationsverket.se — you cannot apply without a confirmed job offer

Apply at migrationsverket.se. Processing: 4–8 weeks.

**EU Blue Card:**
For highly qualified workers with a university degree and a high salary offer (currently SEK 49,875/month or more — verify at migrationsverket.se), the EU Blue Card gives faster processing and more flexibility to move between EU countries later.

**Best sectors for Nigerians:**
• Tech/IT: Stockholm has one of Europe's strongest tech startup ecosystems. Spotify, Klarna, King, Ericsson are headquartered here. Software engineers from Nigeria are in demand.
• Healthcare: Sweden has an ageing population and needs doctors and nurses. Foreign credentials need validation by Socialstyrelsen (National Board of Health and Welfare) — process takes 6–12 months, documented at socialstyrelsen.se.
• Engineering: Volvo, Ericsson, Saab, ABB all hire internationally — focus on engineering positions

**Job search platforms for Sweden:**
• LinkedIn — the most important, especially for Stockholm tech
• arbetsformedlingen.se — the Swedish Public Employment Service, free to use
• Blocket Jobb — blocket.se/jobb
• Company career pages directly

Swedish is required for most jobs outside Stockholm's international tech companies. If you do not yet speak Swedish, specifically target international companies with English-language work environments. After getting your personnummer, enrol in SFI (free Swedish classes) immediately.

**Bringing your spouse or children:**
Your spouse can come on a dependant Residence Permit and is permitted to work. Children attend Swedish school for free.

**────────────────────────────────────────────**
**FULL WALKTHROUGH — Working in Sweden as a Nigerian, Start to Finish**
**────────────────────────────────────────────**

**The fundamental rule — your employer applies, not you**

Sweden's work permit system is entirely employer-driven. You cannot apply for a Swedish work permit by yourself. Your employer applies on your behalf through migrationsverket.se after you have a confirmed job offer. Before the employer can apply, three conditions must all be met: the job must have been advertised to EU/EEA workers first (this is a Swedish legal requirement your employer handles), the salary must meet the collective agreement minimum for the occupation (approximately SEK 27,360/month in 2025 — verify at migrationsverket.se as this is updated regularly), and you must have a confirmed job offer in writing.

This means the most important thing you can do is secure a job offer. Everything else follows from that.

**What sectors hire Nigerians in Sweden**

Technology and software engineering: Stockholm has one of Europe's strongest tech startup ecosystems. Spotify, Klarna, King, Ericsson, and hundreds of growth-stage companies are headquartered here. Software engineers, data scientists, and product managers from Nigeria are in genuine demand. English is the working language at virtually all of these companies — you do not need Swedish to get hired or to do the work, though Swedish will help you in daily life outside the office.

Healthcare: Sweden has an ageing population and a persistent shortage of doctors and nurses. Foreign healthcare credentials must be validated by Socialstyrelsen (the National Board of Health and Welfare) before you can practice — this process takes 6–12 months and is documented at socialstyrelsen.se. Start the validation process before you start job searching — Swedish hospitals cannot offer you a position until your credentials are validated.

Engineering: Volvo Cars, Volvo Trucks, Saab, ABB, Ericsson, and many industrial companies hire internationally for mechanical, electrical, civil, and software engineering roles. These are more likely to require Swedish language for day-to-day work than tech startups.

Academia and research: If you have a PhD or strong research background, Swedish universities and research institutes hire internationally. Karolinska Institutet, KTH, Chalmers, and others post positions on academicpositions.com and their own websites.

**Job searching from Nigeria**

LinkedIn is the most important tool. Set your location to Stockholm or Sweden. Write your profile in English — Swedish employers in international companies use LinkedIn extensively and search for candidates globally. Be specific about your technical skills, your experience level, and that you are open to relocating to Sweden. Turn on Open to Work with Sweden as a target location. Connect with Swedish recruiters and with Nigerians already working in Sweden — they often hear about openings before posting.

arbetsformedlingen.se is the Swedish Public Employment Service — free to use and comprehensive across all sectors. Also check: Blocket Jobb (blocket.se/jobb), LinkedIn Jobs, and company career pages directly.

For Swedish companies hiring tech internationally: search "Stockholm software engineer" on LinkedIn and look at which companies are posting. Filter by company size — mid-to-large companies are more likely to handle international hiring. Some companies use Talent.io, Hired.com, or other tech-specific platforms.

**Preparing your application for Swedish employers**

Swedish CVs follow European conventions: typically 1–2 pages, personal details at the top, professional summary, work experience in reverse chronological order with achievement-focused descriptions, education, skills. No photo required (though it is common in Sweden, unlike the UK). No date of birth or marital status needed. Use the MoveAbroad.ng CV Builder and select the European / Swedish CV style — it generates a two-column PDF with the exact format Swedish and EU employers expect, complete with a skills sidebar. Download from the CV Builder section in your dashboard.

Swedish cover letters are shorter than UK ones — typically half a page. Be direct about what role you want and what you offer. Swedish culture values modesty and specificity over self-promotion. Describe what you have done and let the results speak — do not describe yourself as "passionate" or "dynamic" without evidence. The Sweden Work cover letter template in the CV Builder uses this tone by default.

If you speak any Swedish — even basic conversational level — mention it explicitly. It signals genuine commitment to Sweden.

**Receiving a job offer and waiting for the work permit**

Once you have a written job offer, your employer submits the work permit application at migrationsverket.se. The employer needs: your personal details, your job title and description, your salary (which must meet the collective agreement minimum), and evidence the role was advertised to EU/EEA workers first. Processing: 4–8 weeks. You do not need to submit anything directly to Migrationsverket — your employer handles this, though you may be contacted for additional documents.

Once approved, you receive a work permit tied to this employer and role. You can work for them and gradually build Swedish experience.

**Arriving in Sweden — personnummer is everything**

Within your first week: go to Skatteverket and register for your personnummer. Your employer cannot put you on payroll without it. It is also required for a bank account, SIM card, apartment rental, and most other services. Bring your passport and Residence Permit (work permit card — this is mailed to you or collected at a Migration Agency office). The number is issued immediately or within a few days.

Open a Swedish bank account at Swedbank, SEB, Handelsbanken, or Nordea. Enrol in SFI (free Swedish language classes) at the nearest komvux — start immediately. Even if your job is entirely in English, Swedish dramatically improves your daily life and long-term options in Sweden.

**Building toward Permanent Residence**

After 4 years of continuous legal residence in Sweden on qualifying permits (work permit counts), apply for Permanent Residence at migrationsverket.se. This means you no longer need to renew your permit. After 5 years of continuous residence, apply for Swedish citizenship. Sweden allows dual nationality — your Nigerian passport remains valid throughout and after this process.

Your employer renews your work permit annually until you apply for permanent residence. If you change employers, your new employer applies for a new work permit for you — the process is the same.

The EU Blue Card is an alternative for highly qualified workers with a university degree and a salary offer above SEK 49,875/month (verify current figure at migrationsverket.se). It offers slightly faster processing and more flexibility to eventually move between EU countries. If your salary offer is high enough, ask your employer to apply for the EU Blue Card instead of the standard work permit.`,

      visitor: `**Visiting Sweden — Schengen Short-Stay Visa**

Sweden is part of the Schengen Area. Nigerian passport holders need a Schengen short-stay visa (Type C) to visit. This one visa allows travel across all 26 Schengen countries — so if you are visiting Sweden and want to also see Germany, Norway, or Netherlands, the same visa covers it. Maximum stay: 90 days in any 180-day period.

**Who handles Swedish Schengen applications in Nigeria**

Swedish Schengen visa applications from Nigeria are handled by VFS Global:
• Lagos: 8 Elsie Femi Pearse Street, Victoria Island
• Abuja: 16 Cairo Street, Wuse 2
Book your appointment at vfsglobal.com/sweden/nigeria.

**Application fee**

€80 — paid at the VFS centre or online depending on the process. At current exchange rates, approximately ₦140,000–150,000. Additional VFS service fees apply (approximately ₦10,000–15,000 extra). Check the VFS website for current charges.

**Documents required**

• Valid Nigerian passport — must be valid for at least 3 months beyond your planned return from Sweden
• Completed Schengen visa application form (filled online or at VFS)
• Two recent passport photographs — 35x45mm, white background, taken within the last 6 months
• Bank statements — 3–6 months showing stable funds. Rough minimum: €100 per day of your stay (~€1,400 for 2 weeks)
• Travel insurance — minimum €30,000 coverage, valid across all Schengen countries, for the full duration of your trip. Available from companies like AXA, Europ Assistance, or through your insurance broker in Nigeria. Many applicants buy this from VFS directly.
• Employment letter — on company letterhead, confirming your role, salary, approved leave dates, and return-to-work date. If self-employed: Certificate of Incorporation and accountant letter.
• Travel itinerary — your planned dates, accommodation, and activities. Hotel bookings help (refundable bookings are fine at application stage).
• If visiting family or friends in Sweden: an invitation letter from your Swedish-based host, their full name, Swedish address, and a copy of their Swedish residence card (uppehållstillstånd) or Swedish citizenship documents.
• Return flight booking — can be refundable. Shows your intended departure date.

**Processing time**

15 calendar days is the standard processing time for Swedish Schengen visas. In some cases it can take up to 30 or 45 days — check the VFS website for current estimates. Do not book non-refundable flights until your visa is returned.

**What the Schengen visa does NOT allow**

You cannot work in Sweden or any other Schengen country on a visitor visa, not even unpaid. You cannot study. You cannot stay beyond 90 days in any 180-day period. If you overstay, you will be flagged and future Schengen applications may be refused.

**Getting a multiple-entry Schengen visa**

The officer decides whether to issue single, double, or multiple entry. You can request a multiple entry visa on your application form — if your purpose (business travel, visiting family regularly) supports it and your previous travel history is good, multiple entry is often granted. A multiple-entry Schengen visa of 1 or 2 years allows repeated trips to Europe without reapplying each time.

**If you have previously visited other countries**

Previous US B1/B2 visa, UK Standard Visitor visa, or previous Schengen visas in your passport significantly strengthen your application. They show other immigration systems have assessed and approved you, and that you returned home as required. Bring your passport(s) showing these stamps to your VFS appointment.`,
    },

    timeline: {
      undergrad: [
        { step: "October 15 — January 15", title: "Apply at universityadmissions.se", detail: "This is the ONLY portal for international undergraduate applications. Create your account, select up to 4 programs, upload your documents (transcripts, English test results, personal letter if required by the program), and pay the SEK 900 application fee. Do not miss January 15 — there are no extensions." },
        { step: "January–March", title: "Upload and verify supporting documents", detail: "You have a deadline to upload certified transcripts and English proof. Transcripts from Nigerian universities should be official — stamped and signed by your registrar. Upload through the universityadmissions.se document portal. Check your account regularly to confirm documents are received and accepted." },
        { step: "April", title: "Admission results published", detail: "Log into universityadmissions.se to see your results. If admitted, you receive an official admission letter. Accept your place immediately and pay your tuition deposit. Spots do not hold indefinitely." },
        { step: "April–May", title: "Apply for Residence Permit at migrationsverket.se", detail: "Apply online immediately after receiving your admission letter. Upload: admission letter, passport, proof of funds (SEK 10,584/month × months of study — 2025 figure, verify at migrationsverket.se), health insurance, and paid tuition deposit receipt." },
        { step: "June–July", title: "Residence Permit decision", detail: "Most decisions arrive within 4–8 weeks. You receive a decision letter. Your biometric Residence Permit card is ready when you arrive in Sweden — it is mailed to you or collected at a Migration Agency office." },
        { step: "First week in Sweden", title: "Register at Skatteverket (Swedish Tax Agency) for your personnummer", detail: "Your personnummer (Swedish personal identity number) is the single most important document you will get in Sweden. Without it, you cannot open a bank account, get a phone plan, access healthcare, or use most Swedish services. Go to your nearest Skatteverket office within your first week. Bring your passport and Residence Permit. The number is issued on the spot or within a few days." },
      ],
      masters: [
        { step: "October–January 15", title: "Apply at universityadmissions.se AND check si.se for SI Scholarship", detail: "Both actions happen in this window. Apply to up to 4 programs at universityadmissions.se (deadline January 15, SEK 900 fee). Simultaneously check si.se for the current SI Scholarship timeline — the scholarship portal typically opens in February but your universityadmissions.se application must already be submitted first since the scholarship links to your program choices." },
        { step: "April", title: "Admission results — check universityadmissions.se", detail: "Log in to see your results. Swedish Institute Scholarship results come separately in May–June. If admitted, accept your place and pay your deposit." },
        { step: "April–May", title: "Apply for Residence Permit at migrationsverket.se", detail: "Apply immediately after receiving your admission letter. If you receive the SI Scholarship, your scholarship letter satisfies the financial requirement. Without the scholarship: show SEK 10,584/month × study months (2025 figure) in your bank account." },
        { step: "First week in Sweden", title: "Register at Skatteverket for personnummer", detail: "Do this within your first week — before anything else. Bring your passport and Residence Permit. Without your personnummer, you cannot open a bank account, get a Swedish SIM plan, or access most services." },
        { step: "After graduating", title: "Apply for job-seeking permit at migrationsverket.se", detail: "Before your Residence Permit expires, apply for a 'residence permit to look for work.' This gives you up to 12 months to find a Swedish employer. You need to show SEK 13,000 in savings per month of the permit. Apply at migrationsverket.se." },
        { step: "Job found — work permit", title: "Employer submits Work Permit application at migrationsverket.se", detail: "Once you have a job offer, your employer submits the Work Permit application. Salary must meet collective agreement minimum (approximately SEK 27,360/month — verify at migrationsverket.se). Processing: 4–8 weeks. Once approved, your permit is renewed annually, then after 4 years of total continuous residence you can apply for permanent residence." },
      ],
      phd: [
        { step: "Ongoing throughout the year", title: "Monitor PhD job boards weekly — there is no single application season", detail: "Swedish PhD positions open throughout the year, not in a single season. Set weekly email alerts on academicpositions.com, varbi.com, and ki.se/en/about/jobs-at-ki (for Karolinska). Check each target university's career page directly. Positions are competitive and typically receive 50–200 applications." },
        { step: "Application received — apply like a job", title: "Submit academic CV, cover letter, references", detail: "CV must be in academic format: research experience, publications (even thesis chapters count), languages spoken, references. Your cover letter must explain specifically why this project, why you are the right fit given your background, and what you will contribute. Generic letters are rejected immediately." },
        { step: "Offer received — sign employment contract", title: "Review and sign your contract", detail: "Your employment contract specifies: monthly salary, start date, vacation days, any conditions. This is a real employment contract under Swedish law. Read it carefully. If anything is unclear, ask HR at the university. Once signed, this contract is what you use for your Residence Permit application." },
        { step: "Contract signed", title: "Apply for Residence Permit for doctoral studies at migrationsverket.se", detail: "Apply online using your employment contract. Select doctoral studies option. Since you have a salary, no separate proof of funds is required. Processing: 4–8 weeks." },
        { step: "First week in Sweden", title: "Register at Skatteverket for personnummer — do this immediately", detail: "As an employee you will be enrolled in the Swedish pension and tax systems. Your employer will need your personnummer for payroll. Go to Skatteverket within your first week. Bring passport and Residence Permit. Also enrol in SFI (free Swedish language classes) at the nearest municipal adult education centre." },
        { step: "Year 4 of continuous residence", title: "Apply for Permanent Residence at migrationsverket.se", detail: "After 4 years of continuous legal residence, apply for permanent uppehållstillstånd at migrationsverket.se. After 5 years total, apply for Swedish citizenship. Sweden allows dual nationality — your Nigerian passport remains valid." },
      ],
      work: [
        { step: "Before job search", title: "Be honest about Swedish language requirement", detail: "Most jobs in Sweden outside Stockholm tech require Swedish. English-language jobs exist primarily in: Stockholm tech companies (international firms), certain finance roles, some academic positions, and international organisations. If you do not speak Swedish, focus your search specifically on these environments — and enrol in SFI as soon as you have your personnummer." },
        { step: "Job search", title: "Use Swedish job platforms — LinkedIn alone is not enough", detail: "LinkedIn is important for international tech roles. For broader search: arbetsformedlingen.se (official Swedish employment service), Blocket Jobb (blocket.se/jobb), Monster Sweden, and company career pages directly. For Stockholm tech startups specifically, also search Breakit.se and Techcrunch Stockholm listings." },
        { step: "Job offer received", title: "Employer submits Work Permit at migrationsverket.se", detail: "Your employer submits the application — you do not apply independently. The employer confirms your salary meets collective agreement minimums (approximately SEK 27,360/month — verify at migrationsverket.se). Processing: 4–8 weeks." },
        { step: "Permit approved — arrive in Sweden", title: "Register at Skatteverket for personnummer immediately", detail: "Your first priority after arriving. Bring your passport and Residence Permit. Personnummer unlocks: bank account (Swedbank or Handelsbanken are easiest for new arrivals), BankID (Swedish digital identity for banking and all government services), SIM plan, healthcare, library card, gym membership." },
        { step: "4 years of continuous residence", title: "Apply for Permanent Residence at migrationsverket.se", detail: "Work permits are renewed annually. After 4 years of continuous legal residence in Sweden, you qualify for permanent residence (PUT). Apply at migrationsverket.se. After 5 years total, apply for Swedish citizenship. Sweden allows dual nationality." },
      ],
      visitor: [
        { step: "6–8 weeks before travel", title: "Gather all documents — start with financial evidence and employment letter", detail: "Prepare 3–6 months of personal bank statements (roughly €100/day minimum as a guideline). Get your employment letter from HR on company letterhead: your name, role, salary, approved leave dates, and return to work confirmation. Book hotel or confirm your Swedish host's details. Get refundable flight bookings for your itinerary." },
        { step: "5–6 weeks before travel", title: "Book your VFS Global appointment in Lagos or Abuja", detail: "Go to vfsglobal.com/sweden/nigeria and book your biometrics appointment. Book as early as possible — slots can fill up. At the appointment you will submit your documents and give biometrics. Your passport is held by VFS until the visa is processed." },
        { step: "At your VFS appointment", title: "Submit documents including mandatory travel insurance", detail: "Bring: passport, application form, 2 passport photos, bank statements, employment letter, hotel bookings or host invitation, travel itinerary, return flight booking, and travel insurance (minimum €30,000 Schengen coverage, valid for your entire trip). VFS charges a separate service fee on top of the €80 visa fee." },
        { step: "15 calendar days later (standard)", title: "Visa decision — do not book non-refundable travel until this point", detail: "Standard processing is 15 calendar days but can extend to 30 or 45 in busy periods. Once your passport is returned with a visa sticker, book your flights. The visa sticker shows the valid period, number of entries (single/multiple), and maximum stay." },
        { step: "In Sweden", title: "Register your arrival if staying more than 90 days is ever your goal", detail: "For a short visit, you need no registration. Simply travel, enjoy, and leave before your 90 days expire. Remember the 90/180 rule applies across all Schengen countries — if you visited Germany last month, those days count against your 90-day allowance for the 180-day window." },
      ],
    },

    tips: {
      undergrad: [
        { title: "universityadmissions.se is completely free — do not pay anyone to apply for you", body: "There are consultants and websites in Nigeria that charge thousands of naira or dollars to 'apply to Swedish universities' on your behalf. They use the exact same free portal you can use yourself: universityadmissions.se. Create your own account, upload your own documents, and pay only the official SEK 900 application fee directly to the portal. Save your money." },
        { title: "Your personnummer from Skatteverket is the most important document you will get in Sweden", body: "Register at Skatteverket within your first week of arriving. Bring your passport and Residence Permit card. The personnummer unlocks everything: bank account, SIM phone plan, healthcare, gym, library. Without it you are effectively offline in Sweden. Do not delay this step — some services require it within the first month or things become difficult." },
        { title: "SEK 10,584/month is the minimum — budget more for Stockholm", body: "The Migrationsverket minimum is SEK 10,584/month (2025 figure — verify at migrationsverket.se). Stockholm is expensive — budget SEK 12,000–14,000/month for a comfortable life there. Cities like Lund, Linköping, Örebro, and Umeå are significantly cheaper at SEK 9,000–11,000/month. University-managed student housing is much cheaper than private renting — apply for it the same day you accept your admission." },
        { title: "Swedish culture is reserved, not unfriendly — understand the difference", body: "Swedes do not start conversations with strangers as naturally as Nigerians do. This is cultural, not personal. Relationships in Sweden develop slowly and through structured activities — sports teams, study groups, choirs, student associations. The Nigerian or African student association at your university is your fastest connection point. Once Swedes become your friends, they are genuinely loyal. Do not mistake quietness for rejection." },
        { title: "SFI (Swedish for Immigrants) is completely free — start immediately", body: "Once you have your personnummer, enrol at your nearest municipal adult education centre (komvux) for SFI classes. These are free, run by the local government, and are available at multiple proficiency levels. Swedish language ability dramatically improves your daily life, social connections, and employment options in Sweden. Even if your degree program is entirely in English, start Swedish classes." },
      ],
      masters: [
        { title: "The Swedish Institute Scholarship is the most underused opportunity for Nigerian masters students", body: "Many Nigerians have never heard of the SI Scholarship, yet it is one of the most generous fully-funded masters scholarships available worldwide. It covers everything: full tuition, SEK 11,000/month living costs, a travel grant, and health insurance. Nigeria is explicitly on the list of eligible countries. Applications are linked to your universityadmissions.se program choices. Check si.se every October for the exact timeline. Apply every cycle. Nigerians win these scholarships every year." },
        { title: "Confirm English requirements directly with each program — they genuinely vary", body: "Some programs at some Swedish universities accept a letter confirming English medium of instruction from your Nigerian university. Others require IELTS or TOEFL specifically. Others accept Cambridge or PTE. There is no universal rule across Swedish universities or even across programs at the same university. Go to each specific program's requirements page on the university website and read carefully before booking any English test. Do not assume." },
        { title: "Stockholm, Gothenburg, Lund — choose your city carefully", body: "Stockholm is the most expensive and has the most international job market (especially tech). Gothenburg (home to Chalmers University) is strong in engineering, automotive, and shipping — Volvo, SKF, and AstraZeneca are based there. Lund is a classic university city near Malmö — smaller, cheaper, very international student population, excellent university. Uppsala (45 min from Stockholm) is Sweden's oldest university city — affordable, academic, good for sciences and medicine." },
      ],
      phd: [
        { title: "A Swedish PhD is one of the best arrangements for ambitious Nigerians with families", body: "You are paid a salary of SEK 25,000–35,000/month, your tuition is covered, you contribute to a pension, have employment protections, and your spouse can work and your children can attend school. No other country offers this combination for PhD students. The trade-off is that positions are very competitive and Sweden is expensive. But for the right person — especially in engineering, life sciences, or computer science — this is worth pursuing seriously." },
        { title: "Karolinska Institutet (KI) in Stockholm is where the Nobel Prize in Medicine is awarded", body: "Karolinska Institutet awards the Nobel Prize in Physiology or Medicine every year. A PhD from KI is recognised worldwide in medicine and life sciences. Nigerian doctors and scientists have graduated from KI and gone on to international careers. PhD positions at KI are advertised at ki.se/en/about/jobs-at-ki and are genuinely competitive — but Nigerian candidates with strong biomedical research backgrounds are encouraged to apply." },
        { title: "File your Swedish tax return every year — you will likely get a refund", body: "As a salary earner in Sweden, you file a tax return (deklaration) every year, usually in May. Skatteverket sends you a pre-filled form based on what your employer reported. Most PhD employees just confirm the form is correct online. You may be eligible for deductions that result in a refund of SEK 2,000–5,000. Do not ignore the deklaration — it is simple and may put money back in your account." },
      ],
      work: [
        { title: "BankID is essential for daily life in Sweden — get it in your first week", body: "BankID is Sweden's digital identity system. It is used for online banking, signing documents, logging into government websites (Skatteverket, Migrationsverket, healthcare booking), and many private services. You get BankID through your Swedish bank once you have your personnummer. Without BankID you are limited in what you can do digitally in Sweden. Make it a first-week priority alongside your personnummer." },
        { title: "Swedish workplace culture: leave on time, take fika, respect boundaries", body: "Staying late to impress your manager is not a positive signal in Swedish work culture — it suggests you are inefficient with your time. Work ends at work time. Fika (communal coffee break, typically twice a day) is where workplace relationships are built. Participate even if you do not drink coffee. Swedes value directness, punctuality, and a clear distinction between work time and personal time. Adapting to this quickly makes integration significantly easier." },
        { title: "Healthcare credential validation by Socialstyrelsen takes 6–12 months — start before you need a job", body: "If you are a Nigerian doctor, nurse, or other licensed health professional, you must have your credentials validated by Socialstyrelsen (the National Board of Health and Welfare) before you can practice in Sweden. This process takes 6–12 months. Start it before you arrive in Sweden, or at minimum in your first month. The full process is documented at socialstyrelsen.se. You may need to pass language tests and additional assessments." },
      ],
      visitor: [
        { title: "Sweden is Schengen — one visa covers 26 countries", body: "A Swedish Schengen visa is not just for Sweden. It allows entry to all 26 Schengen member states: Germany, France, Netherlands, Spain, Italy, Portugal, Belgium, Austria, Czech Republic, Poland, Norway, Denmark, Finland, and others. If you want to combine a Sweden trip with visiting other European countries, you only need one visa. Apply at the embassy of the country you are visiting first or spending the most time in." },
        { title: "Travel insurance is mandatory — get Schengen-specific coverage", body: "Your travel insurance must specifically state: Schengen Area coverage, minimum €30,000 coverage, valid for the entire duration of your trip. Insurance that covers 'international travel' generally is not enough — it must explicitly state Schengen coverage. You can buy Schengen-specific insurance through insurance companies in Nigeria (AXA, Leadway, etc.), through VFS Global at your appointment, or through online providers. Keep the insurance certificate with your passport." },
        { title: "90 days in 180 days — understand how this is calculated", body: "The 90-day limit is not per calendar year. It is per any rolling 180-day window. If you visit Sweden for 30 days in January, then visit Germany for 30 days in March, you have used 60 days of your 90-day allowance. You cannot return to any Schengen country until 180 days have passed since your first entry — or until you have remaining days in the window. Overstaying can result in a ban from the Schengen Area for several years." },
        { title: "Previous US or UK visas significantly help your Schengen application", body: "If you have a current or recent US B1/B2 visa or UK Standard Visitor visa in your passport, include the passport showing these visas with your application. They demonstrate to the Swedish embassy that other credible immigration systems have assessed and approved you, and that you honoured those visas by returning home. A track record of approved visas and returns is one of the strongest things you can show." },
        { title: "If refused, the refusal letter explains exactly what to address — apply again with stronger documents", body: "Schengen visa refusals must include the reason. Common reasons for Nigerians: insufficient financial means, purpose of travel not justified, intention to leave the Schengen area before expiry not established. Address each reason specifically. A stronger employment letter, more stable bank statements, clearer itinerary, or property evidence can turn a refusal into an approval on reapplication." },
      ],
    },

    universities: {
      undergrad: [
        { name: "Stockholm University", location: "Stockholm", known_for: "Law, Social Sciences, Natural Sciences, Humanities — central Stockholm campus", avg_tuition: "SEK 90,000–130,000/yr", acceptance: "50–60%", nigerian_community: "Small but growing" },
        { name: "Uppsala University", location: "Uppsala (45 min from Stockholm)", known_for: "Medicine, Law, Sciences, Theology — Sweden's oldest university (founded 1477)", avg_tuition: "SEK 90,000–140,000/yr", acceptance: "45–55%", nigerian_community: "Small" },
        { name: "Linköping University", location: "Linköping", known_for: "Engineering, Medicine, Information Technology, Business — known for interactive learning", avg_tuition: "SEK 80,000–120,000/yr", acceptance: "60–65%", nigerian_community: "Small" },
        { name: "Örebro University", location: "Örebro", known_for: "Business, Law, Healthcare, Social Sciences — smaller city, lower cost of living", avg_tuition: "SEK 80,000–110,000/yr", acceptance: "65%", nigerian_community: "Very small" },
      ],
      masters: [
        { name: "KTH Royal Institute of Technology", location: "Stockholm", known_for: "Engineering, Computer Science, Architecture, Physics — strong links to Stockholm tech industry", avg_tuition: "SEK 125,000–175,000/yr", acceptance: "20–30%", nigerian_community: "Small but active" },
        { name: "Chalmers University of Technology", location: "Gothenburg", known_for: "Engineering, Architecture, Sustainable Technology — strong automotive/industrial links (Volvo nearby)", avg_tuition: "SEK 130,000–170,000/yr", acceptance: "25–35%", nigerian_community: "Small" },
        { name: "Lund University", location: "Lund (near Malmö)", known_for: "Medicine, Law, Engineering, Business, Sciences — one of Scandinavia's best overall universities", avg_tuition: "SEK 85,000–165,000/yr", acceptance: "30–40%", nigerian_community: "Small" },
        { name: "Stockholm School of Economics (SSE)", location: "Stockholm", known_for: "Business, Finance, Economics — top Scandinavian business school", avg_tuition: "SEK 180,000–230,000/yr", acceptance: "15–20%", nigerian_community: "Very small" },
        { name: "Malmö University", location: "Malmö", known_for: "Urban Studies, International Migration, Business, IT — multicultural city near Copenhagen", avg_tuition: "SEK 80,000–110,000/yr", acceptance: "60%", nigerian_community: "Very small" },
      ],
      phd: [
        { name: "Karolinska Institutet (KI)", location: "Stockholm", known_for: "Medicine and Biomedical Sciences — awards Nobel Prize in Medicine/Physiology annually", avg_tuition: "Fully salaried employment (SEK 25,000–35,000/month)", acceptance: "Highly competitive", nigerian_community: "Small" },
        { name: "KTH Royal Institute of Technology", location: "Stockholm", known_for: "Engineering, Computing, Architecture, Physics", avg_tuition: "Fully salaried employment", acceptance: "Competitive", nigerian_community: "Small" },
        { name: "Chalmers University of Technology", location: "Gothenburg", known_for: "Engineering, Energy, Materials Science, Sustainable Technology", avg_tuition: "Fully salaried employment", acceptance: "Competitive", nigerian_community: "Very small" },
        { name: "Uppsala University", location: "Uppsala", known_for: "Medicine, Sciences, Humanities — strong in chemistry, biology, physics", avg_tuition: "Fully salaried employment", acceptance: "Competitive", nigerian_community: "Small" },
      ],
      work: [],
    },

    embassy: {
      name: "Embassy of Sweden in Nigeria",
      address: "Plot 1247, Yedseram Street, Maitama, Abuja, Nigeria",
      phone: "The Swedish Embassy handles consular matters only. All Residence Permit applications are submitted online at migrationsverket.se.",
      note: "Sweden does not process Residence Permits at the Embassy in Abuja. Apply online at migrationsverket.se. After submitting, you may be required to visit VFS Global Nigeria to give biometrics.",
      website: "https://www.swedenabroad.se/en/embassies/nigeria-abuja/",
      visa_apply: "https://www.migrationsverket.se/English/Private-individuals/Studying-in-Sweden.html",
      vfs: "https://www.vfsglobal.com/sweden/nigeria/",
      official_immigration: "https://www.migrationsverket.se/English.html",
      extra_links: [
        { label: "universityadmissions.se — Apply to all Swedish universities", url: "https://www.universityadmissions.se/" },
        { label: "Migrationsverket — Study Residence Permit", url: "https://www.migrationsverket.se/English/Private-individuals/Studying-in-Sweden.html" },
        { label: "Migrationsverket — Work Permit", url: "https://www.migrationsverket.se/English/Private-individuals/Working-in-Sweden.html" },
        { label: "Migrationsverket — Permanent Residence Permit", url: "https://www.migrationsverket.se/en/you-want-to-apply/permanent-residence-permit.html" },
        { label: "Migrationsverket — Job-seeking permit after studies", url: "https://www.migrationsverket.se/en/you-want-to-apply/work/look-for-work/look-for-work-after-completing-research.html" },
        { label: "Swedish Institute Scholarship (SISGP)", url: "https://si.se/en/apply/scholarships/swedish-institute-scholarships-for-global-professionals/" },
        { label: "Karolinska Institutet — PhD Vacancies", url: "https://ki.se/en/about/jobs-at-ki" },
        { label: "Academic Positions — PhD Jobs Sweden", url: "https://academicpositions.com/jobs/sweden" },
        { label: "Skatteverket — Register for Personnummer", url: "https://www.skatteverket.se/servicelankar/otherlanguages/inenglish/individualsandemployees/movingtoandfromswedenandothercountries/registrationatthetaxagency.4.7be5268414bea064694b33a.html" },
        { label: "VFS Global Nigeria — Biometrics for Sweden", url: "https://www.vfsglobal.com/sweden/nigeria/" },
        { label: "Socialstyrelsen — Healthcare credential validation", url: "https://www.socialstyrelsen.se/en/revalidation/" },
        { label: "Swedish Embassy Abuja", url: "https://www.swedenabroad.se/en/embassies/nigeria-abuja/" },
      ],
    },

    scholarships: {
      undergrad: [
        { name: "Swedish Institute Scholarship for Global Professionals (SISGP)", amount: "Full tuition + SEK 11,000/month living + travel grant + health insurance", university: "All Swedish universities offering SI-eligible programs", deadline: "Apply at universityadmissions.se by January 15; SI portal opens February — check si.se annually", url: "https://si.se/en/apply/scholarships/swedish-institute-scholarships-for-global-professionals/" },
        { name: "Individual University Scholarships (tuition waivers)", amount: "Typically 25–100% tuition waiver — varies by university", university: "KTH, Lund, Stockholm University, Chalmers — check each university's scholarship page", deadline: "January each year with universityadmissions.se application", url: "https://www.universityadmissions.se/en/All-you-need-to-know1/Scholarships/" },
      ],
      masters: [
        { name: "Swedish Institute Scholarship for Global Professionals (SISGP)", amount: "Full tuition + SEK 11,000/month living allowance + travel grant + health insurance", university: "All Swedish universities with eligible programs — Nigeria is an eligible country", deadline: "Apply at universityadmissions.se by January 15; SI portal opens in February — verify at si.se annually", url: "https://si.se/en/apply/scholarships/swedish-institute-scholarships-for-global-professionals/" },
        { name: "Lund University Global Scholarship", amount: "75% or 100% tuition waiver", university: "Lund University", deadline: "February each year — check lunduniversity.lu.se", url: "https://www.lunduniversity.lu.se/international/scholarships-and-funding/scholarships-prospective-students" },
        { name: "KTH Scholarship", amount: "Full tuition waiver", university: "KTH Royal Institute of Technology", deadline: "January each year — check kth.se/en/studies/master/scholarships", url: "https://www.kth.se/en/studies/master/scholarships" },
        { name: "Chalmers IPOET Scholarship", amount: "75% tuition reduction", university: "Chalmers University of Technology", deadline: "January each year — check chalmers.se/en/education/scholarships", url: "https://www.chalmers.se/en/education/scholarships/" },
      ],
      phd: [
        { name: "PhD Employment Position (fully paid)", amount: "Full salary SEK 25,000–35,000/month + pension contributions + 28 days annual leave + parental leave", university: "All Swedish universities — apply per advertised position", deadline: "Positions open throughout the year — monitor academicpositions.com and university career pages", url: "https://academicpositions.com/jobs/sweden/phd" },
        { name: "Karolinska Institutet PhD Positions", amount: "Full salary + all employment benefits", university: "Karolinska Institutet, Stockholm — world's leading medical research university", deadline: "Rolling throughout the year — check ki.se/en/about/jobs-at-ki", url: "https://ki.se/en/about/jobs-at-ki" },
      ],
      work: [],
    },
  },

  // ─────────────────────────────────────────────
  // GERMANY
  // ─────────────────────────────────────────────
  DE: {
    tagline: "Free tuition at world-class universities — the most underrated destination for Nigerian students",
    overview: "Germany is the only major western country where most public universities charge zero tuition for international students — including Nigerians. You pay a semester contribution of €100–400 that includes a public transport pass. German universities are globally ranked, research-intensive, and produce graduates who are highly employable across Europe. The main barrier is language: most undergraduate programs are in German, though English-taught masters programs are growing rapidly. For Nigerians who invest 6–12 months learning German, or who apply to English-taught masters, Germany offers an extraordinary deal: world-class education, low cost of living outside Munich, and a clear path to an EU work permit and eventually permanent residence.",

    stats: {
      undergrad:  { tuition: "€0 (public unis) + €200–400/semester contribution", living: "€700–1,000/month", processing: "2–3 months (incl. blocked account)", acceptance: "Varies by program", minIELTS: "German B2/C1 or IELTS 6.0+ (English programs)", currency: "EUR" },
      masters:    { tuition: "€0 (public unis) + €200–400/semester contribution", living: "€750–1,100/month", processing: "6–10 weeks", acceptance: "Varies by program", minIELTS: "IELTS 6.0–7.0 (English programs)", currency: "EUR" },
      phd:        { tuition: "FREE — often salaried (TVöD scale)", living: "€1,200–2,000/month (salary or stipend)", processing: "6–10 weeks", acceptance: "Very competitive", minIELTS: "Set by supervisor", currency: "EUR" },
      work:       { salary: "€35,000–70,000/yr", processing: "1–3 months", pathway: "EU Blue Card / Skilled Worker Visa", minIELTS: "B1–B2 German or English role", currency: "EUR" },
      visitor:    { fee: "€80 (Schengen visa fee)", processing: "15 calendar days", duration: "Up to 90 days in any 180-day period", pathway: "Schengen Short-Stay Visa (Type C)", currency: "EUR" },
    },

    summary: {
      undergrad: {
        intro: "German public universities charge no tuition for international students — including Nigerians. You pay only a semester contribution of €200–400 which usually includes a public transport pass. Most undergraduate programs are taught in German, so the main requirement before applying is reaching German B2 or C1 level. The process runs through a portal called uni-assist, and you must open a blocked account (Sperrkonto) of €11,208 before your visa is issued.",
        firstSteps: [
          { action: "Start learning German immediately — B2 is the minimum, C1 is better", detail: "Most German undergraduate programs require B2 or C1 level German. This takes 6–12 months of consistent study. Enrol at Goethe-Institut Lagos (Goethe-Institut Nigeria, House 10, Udi Close, off Bowery Crescent, Victoria Island) or study online via DeutschAkademie, Lingoda, or Deutsche Welle's free courses at dw.com/en/learn-german. The TestDaF or DSH exam is what universities require — take it after B2." },
          { action: "Research programs at hochschulstart.de, daad.de, and each university's own site", detail: "Use the DAAD database at daad.de/en/study-and-research-in-germany/studying-in-germany/study-search to find English and German-taught programs. Public universities are free — private universities charge fees. Shortlist 5–8 programs. Check each university's specific requirements: some use uni-assist, others have their own portals." },
          { action: "Apply through uni-assist (most public universities use this)", detail: "uni-assist.de is the central application portal for most German public universities. Create an account, submit your documents (secondary school certificate, transcripts, German or English test result, passport). Pay the uni-assist fee (€75 for the first university, €30 for each additional). Some universities like TU Munich and LMU have their own portals — check each school's admissions page." },
          { action: "Open your blocked account (Sperrkonto) — €11,208", detail: "Once admitted, you must deposit €11,208 into a German blocked account before applying for your visa. This money is NOT lost — it is released to you in monthly payments of €934 after you arrive in Germany. Open with Deutsche Bank, Fintiba (fintiba.com), Expatrio (expatrio.com), or Coracle — all accept applications from Nigeria online. Takes 1–3 weeks. You receive a certificate to include in your visa application." },
          { action: "Apply for a German Student Visa at the German Embassy Abuja or Consulate Lagos", detail: "Visa fee: €75. Documents: university admission letter, Sperrkonto certificate, German/English test results, valid passport, academic certificates (secondary and any university), financial evidence, health insurance for Germany. Book your appointment early — slots fill weeks in advance at the German Embassy (Nile House, 9 Alvan Ikoku Street, Maitama, Abuja) or German Consulate General Lagos." },
        ],
        keyFacts: [
          "Public university tuition is FREE — the €200–400 semester contribution covers admin and often a public transport pass",
          "Blocked account (Sperrkonto): €11,208 deposited once, released to you at €934/month — it is savings, not a fee",
          "Most undergraduate programs require German B2/C1 — plan 6–12 months of language study before applying",
          "Germany allows 120 full days or 240 half days of work per year alongside studies",
          "After graduation: 18-month job-seeking visa to find employment in Germany",
        ],
        outcome: "German degree → 18-month job-seeking visa → EU Blue Card or Skilled Worker Visa → 21–33 months to permanent residence (fast-tracked if B1 German and integrated) → EU citizenship after 8 years (5 with special integration).",
      },
      masters: {
        intro: "Germany has the largest number of English-taught masters programs in Europe outside the UK — and almost all of them are free at public universities. This is the most realistic path for Nigerians who want a German education without learning German first. You need IELTS 6.0–7.0, a strong bachelor's degree, and the €11,208 blocked account. After graduating, you get an 18-month job-seeking visa to find work in Germany's strong engineering, tech, and healthcare job market.",
        firstSteps: [
          { action: "Search English-taught programs at daad.de/en — filter by English and Masters", detail: "The DAAD database lists all English-taught programs at German universities. Use daad.de/en/study-and-research-in-germany/studying-in-germany/study-search. Filter: language = English, degree = Masters. Top programs in engineering, computer science, business, and natural sciences are available at TU Munich, RWTH Aachen, TU Berlin, Heidelberg, and others. Read each program's specific admission requirements." },
          { action: "Take IELTS Academic — target 6.5 overall (most programs accept 6.0–7.0)", detail: "English-taught German programs typically accept IELTS Academic 6.0–7.0 depending on the program. Book at British Council or IDP in Lagos, Abuja, or Port Harcourt. Some programs also accept TOEFL iBT (target 80–100). Check each specific program's language requirement." },
          { action: "Apply directly through each university or via uni-assist", detail: "Some universities (TU Munich, LMU) have their own application portals. Most others use uni-assist.de. You will need: your bachelor's degree certificate and transcripts (with certified English or German translation), IELTS result, CV, motivation letter (1–2 pages explaining your background and why this program), and sometimes reference letters. Apply to 4–6 programs." },
          { action: "Open your Sperrkonto — deposit €11,208", detail: "Use Fintiba, Expatrio, or Deutsche Bank. Apply online from Nigeria. Takes 1–3 weeks. Transfer €11,208 via international wire. You receive a certificate. The money is released to you in monthly instalments of €934 once you arrive and activate the account in Germany." },
          { action: "Apply for Student Visa at the German Embassy Abuja or Consulate Lagos — book early", detail: "Visa fee: €75. Book your appointment as soon as you have your admission letter — slots at the German Embassy fill 4–8 weeks in advance. Bring: admission letter, Sperrkonto certificate, IELTS result, bachelor's degree and transcripts (with certified translations), valid passport, biometric photo, health insurance proof." },
        ],
        keyFacts: [
          "Germany has 1,800+ English-taught masters programs at public universities — most are free",
          "€11,208 Sperrkonto is refunded to you at €934/month — it is proof of funds, not a fee",
          "After masters: 18-month job-seeking visa — you can legally stay and work (20 hours/week) while job hunting",
          "EU Blue Card requires a job offer of €45,300/yr+ (€35,300 for shortage occupations — engineers, doctors, IT) — verify at bamf.de",
          "Germany has a critical shortage of engineers, software developers, nurses, and doctors — Nigerian professionals in these fields are in demand",
        ],
        outcome: "Masters graduation → 18-month job-seeking visa → EU Blue Card or Skilled Worker Visa → 21 months to permanent residence (with B1 German) → settled in the EU.",
      },
      phd: {
        intro: "German PhDs come in two forms: salaried research positions (wissenschaftlicher Mitarbeiter) where you are paid €1,500–2,200/month net as a university employee, and stipend-funded positions through DAAD or other foundations. The salaried route is most common and most desirable. You apply by contacting professors directly and responding to advertised positions — not through a central admissions process.",
        firstSteps: [
          { action: "Search for advertised PhD positions at academics.de, research-in-germany.org, and university job boards", detail: "academics.de lists positions across all German universities. research-in-germany.org (run by DAAD) also lists funded positions. Each university also posts positions on their own Stellenportal (jobs board). Set email alerts. Also contact professors directly whose research matches your area — this is accepted practice in Germany." },
          { action: "Apply with a focused research proposal and tailored cover letter", detail: "German PhD applications need: a research proposal (2–5 pages describing your question, methodology, and how it fits the group's work), academic CV with all publications and research experience, university transcripts and degree, 2–3 reference letters from supervisors, IELTS or proof of English proficiency. German language ability is a bonus but not required for many research positions — especially in STEM fields." },
          { action: "Receive and review your employment contract or stipend offer", detail: "Salaried positions are TVöD E13 scale (approximately 50% position) — currently €1,500–2,200/month net depending on state. This includes social insurance, health coverage, and pension contributions. Stipends (from DAAD, DFG, Humboldt) are approximately €1,200–1,500/month. Employment contracts are strongly preferable — they come with full social security and count as qualified work experience for residence permits." },
          { action: "Apply for German National Visa (D visa) for research/employment at the German Embassy", detail: "Use the 'Researcher' or 'Employment' visa category — not the student visa. You need your employment contract or stipend letter, admission to the doctoral program (Immatrikulationsbescheinigung), valid passport, and financial evidence (if stipend-funded). Visa fee: €75. Processing: 4–8 weeks." },
        ],
        keyFacts: [
          "Salaried PhD positions (wissenschaftlicher Mitarbeiter) pay approximately €1,500–2,200/month net + full social insurance",
          "No tuition for doctoral students in Germany — you pay only the semester contribution",
          "DAAD GSSP and Helmholtz Association offer fully-funded PhD positions open to Nigerians",
          "After PhD: 18-month job-seeking visa, then EU Blue Card or Skilled Worker Visa",
          "German PhD employment counts fully toward the 21-month fast-track to permanent residence",
        ],
        outcome: "PhD (salaried) → counted as skilled employment → EU Blue Card → 21 months to permanent residence with B1 German → EU citizenship pathway.",
      },
      work: {
        intro: "Germany actively recruits skilled workers from outside the EU through the Skilled Worker Immigration Act (Fachkräfteeinwanderungsgesetz). Engineers, IT professionals, nurses, doctors, and tradespeople from Nigeria are among the profiles Germany specifically needs. You need either your Nigerian qualification recognised by anabin.kmk.org, or a German degree. The EU Blue Card is the fastest route for degree holders with a qualifying salary offer.",
        firstSteps: [
          { action: "Check if your Nigerian qualification is recognised using anabin.kmk.org", detail: "The anabin database lists Nigerian universities and degrees by recognition status: H+ (fully recognised), H (recognised with conditions), H- (not recognised). University of Lagos, Obafemi Awolowo, University of Nigeria Nsukka, Ahmadu Bello — most top Nigerian universities have H+ or H recognition. If your degree is listed H+, you can apply directly for the EU Blue Card. If H-, you may need an equivalency assessment from anabin." },
          { action: "Get a job offer from a German employer paying at least €45,300/year (€35,300 for shortage occupations)", detail: "EU Blue Card salary thresholds: general = €45,300/year; shortage occupations (engineers, IT, doctors, nurses, scientists) = €35,300/year. Search: make-it-in-germany.com (official German government recruitment portal), LinkedIn Germany, StepStone.de, XING (Germany's main professional network). The job offer must be for a role matching your qualification level." },
          { action: "Apply for EU Blue Card or Skilled Worker Visa at the German Embassy Abuja", detail: "EU Blue Card requires: job offer letter with salary confirmation, recognised degree certificate (or German degree), valid passport, biometric photos, proof of health insurance. Visa fee: €75. Processing: 4–8 weeks. You can also enter Germany on a 6-month job-seeking visa if you have a German degree or recognised qualification — then apply for the Blue Card from within Germany." },
          { action: "Arrive in Germany and register at your local Einwohnermeldeamt within 2 weeks", detail: "Registration (Anmeldung) at your local residents' registration office is mandatory within 14 days of arrival. Bring your passport and rental contract (Mietvertrag). You receive an Anmeldebestätigung (registration certificate). This triggers your tax ID (Steueridentifikationsnummer) being mailed to your registered address — essential for payroll." },
        ],
        keyFacts: [
          "EU Blue Card is valid for 4 years and leads to permanent residence in 21 months (with B1 German) or 33 months without",
          "Germany has a 6-month job-seeking visa for holders of recognised degrees — allows legal residence while job hunting",
          "make-it-in-germany.com is the official German government portal for international skilled worker recruitment",
          "Nurses and doctors need qualification recognition from the Landesbehörde of the state you plan to work in — takes 3–12 months",
          "German language B1 fast-tracks permanent residence from 33 months to 21 months — learn German from day one",
        ],
        outcome: "EU Blue Card → 21 months (B1 German) or 33 months (without) to permanent residence → German citizenship after 8 years total residence (5 with special integration track).",
      },
      visitor: {
        intro: "Germany is in the Schengen Area. Nigerian passport holders need a Schengen short-stay visa (Type C) to visit Germany. This single visa covers all 26 Schengen countries for up to 90 days in any 180-day period. German Schengen visa applications from Nigeria are processed at the German Embassy in Abuja and the German Consulate General in Lagos. Processing is typically 15 calendar days.",
        firstSteps: [
          { action: "Book your appointment at the German Embassy (Abuja) or Consulate General (Lagos)", detail: "Lagos Consulate General: 15 Walter Carrington Crescent, Victoria Island. Abuja Embassy: Nile House, 9 Alvan Ikoku Street, Maitama, Abuja. Book online at the embassy's appointment portal (termine.diplo.de for Abuja). Slots fill fast — book 4–6 weeks before your planned travel date." },
          { action: "Gather your documents — employment letter and bank statements are the core", detail: "Employment letter on company letterhead: your name, role, salary, approved leave dates, return-to-work confirmation signed by HR. Bank statements: 3–6 months of stable funds — rough minimum €100/day of stay (€1,400 for 14 days). If a German host is sponsoring you, include their Verpflichtungserklärung (formal sponsorship declaration from the local German Ausländerbehörde) plus a copy of their German residence or citizenship document." },
          { action: "Buy Schengen travel insurance — mandatory", detail: "Minimum €30,000 coverage across all Schengen countries for the full duration of your trip. Buy from a reputable provider in Nigeria (AXA, Leadway, etc.) or through the embassy's recommended providers. The certificate must clearly state Schengen coverage with dates matching your travel." },
          { action: "Submit your full application at your appointment", detail: "Bring: completed application form (filled at home from the embassy website), valid Nigerian passport (6 months validity beyond return date), 2 recent passport photos (35x45mm, white background), bank statements, employment letter, travel insurance certificate, hotel bookings or host invitation, return flight booking (refundable is fine), and visa fee €80. Biometrics are taken at the appointment." },
        ],
        keyFacts: [
          "German Embassy Abuja: Nile House, 9 Alvan Ikoku Street, Maitama — book at termine.diplo.de",
          "German Consulate Lagos: 15 Walter Carrington Crescent, Victoria Island",
          "Schengen visa = 26 countries, 90 days per 180-day window — one visa for all of Europe",
          "A Verpflichtungserklärung from a German host (issued by the local Ausländerbehörde) significantly strengthens your application if visiting family",
          "Previous US, UK, or Schengen visas in your passport are a major advantage",
        ],
        outcome: "Schengen short-stay visa allows up to 90 days across all 26 Schengen countries. Cannot be extended inside the Schengen area. Multiple-entry Schengen visas are available if your travel history and purpose support it.",
      },
    },

    visa: {
      undergrad: `**German Student Visa — Undergraduate**

Germany does not issue a standard "student visa" — it issues a National Visa (D visa) for the purpose of study. This is applied for at the German Embassy in Abuja or the German Consulate General in Lagos before you travel.

**Step 1 — German language: the first requirement**

Most German undergraduate programs are taught entirely in German and require B2 or C1 level proficiency. This is tested through TestDaF (Test Deutsch als Fremdsprache) or DSH (Deutsche Sprachprüfung für den Hochschulzugang). Both tests are accepted by German universities.

Where to study in Nigeria:
• Goethe-Institut Nigeria — the official German cultural institute. Lagos: House 10, Udi Close, off Bowery Crescent, Victoria Island. They run German courses from A1 to C1 and administer official exams. This is the most reliable option.
• Deutsche Welle (dw.com/learn-german) — free online German courses at all levels. Supplement with Goethe-Institut.
• Lingoda, italki, and DeutschAkademie — online platforms with German tutors and structured courses.

The TestDaF examination is divided into four sections: reading, listening, writing, and speaking. Each section is scored TDN 3–5. Most universities require TDN 4 in all four sections (equivalent to roughly B2–C1). Some universities also accept Goethe-Zertifikat B2 or C1. Check each specific program's requirements.

Plan 8–12 months of intensive study to reach B2 from scratch, or 4–6 months if you already have some German background.

**Step 2 — Choose your program and apply**

German universities use two main application channels:

uni-assist (uni-assist.de): The central application portal for most German public universities. Create an account, upload your documents (WAEC certificate and transcripts, secondary school leaving certificate, German test result, passport copy). Pay the application fee: €75 for your first application, €30 for each additional university. Most universities have an application deadline of January 15 for summer semester (April start) and July 15 for winter semester (October start) — but check each school's specific deadline.

Direct application portals: TU Munich (apply.tum.de), LMU Munich, and some other universities have their own systems separate from uni-assist. Check each school's admissions page.

Documents you will need for your application:
• WAEC/NECO certificate — certified copy
• Secondary school transcripts — certified by your school's registrar
• Proof of German language proficiency (TestDaF or DSH result)
• Passport copy
• Motivation letter (some programs require this — 1 page explaining why you want to study this subject in Germany)

**Step 3 — Receive your admission letter (Zulassungsbescheid)**

When a university admits you, they send a Zulassungsbescheid. This is your official admission letter. It contains: the program name, start date, and any conditions. If your admission is conditional (e.g., you must submit additional documents), complete the conditions immediately and get your unconditional admission letter.

**Step 4 — Open your blocked account (Sperrkonto)**

Before applying for your visa, you must deposit €11,208 into a German blocked account (Sperrkonto). This amount represents one year of living costs (€934/month × 12) as required by German immigration law.

This is NOT a fee. The money stays in a German bank account in your name and is released to you in monthly payments of €934 once you arrive in Germany and activate the account.

Where to open a Sperrkonto from Nigeria:
• Fintiba (fintiba.com) — most popular among international students. Online process, takes about 1 week. Partners with Deutsche Bank.
• Expatrio (expatrio.com) — alternative to Fintiba. Also offers health insurance bundles.
• Coracle (mycoracle.com) — another option.
• Deutsche Bank (db.com) — more traditional process but works directly with the bank.

Process: apply online, transfer €11,208 from Nigeria via SWIFT transfer, receive your Sperrkonto certificate. The certificate is what you submit with your visa application.

**Step 5 — Get German health insurance**

Germany requires proof of health insurance for your visa application. For students, the standard option is statutory health insurance (gesetzliche Krankenversicherung) through providers like TK (Techniker Krankenkasse), AOK, or Barmer. Student contribution is approximately €120–130/month. You can usually arrange this before arriving through an online application, or arrange a provisional coverage letter to include with your visa application.

**Step 6 — Apply for your Student Visa**

Book your appointment at the German Embassy in Abuja (Nile House, 9 Alvan Ikoku Street, Maitama) or the German Consulate General in Lagos (15 Walter Carrington Crescent, Victoria Island). Book early — appointments fill 4–8 weeks in advance. The booking system for Abuja is at termine.diplo.de.

Visa application fee: €75. Documents to bring:
• Valid Nigerian passport (must cover your full study period)
• Completed visa application form (download from the embassy website)
• Biometric passport photograph (35x45mm, white background)
• Admission letter (Zulassungsbescheid) from your German university
• Sperrkonto certificate showing €11,208 blocked
• German language test result (TestDaF or DSH)
• WAEC certificate and school transcripts (certified copies with certified translations into German if required — check embassy requirements)
• Health insurance proof or coverage letter
• Proof of accommodation in Germany (university dormitory confirmation, or a signed rental agreement, or a host's written confirmation of accommodation)
• CV

Processing time: approximately 4–8 weeks. You will be notified by email when your passport is ready for collection. Only book flights after your visa is approved.

**When you arrive in Germany**

Within two weeks of arrival:
1. Register at your local Einwohnermeldeamt (residents' registration office). Bring passport and your rental agreement or host's address confirmation. You receive an Anmeldebestätigung — keep this, you need it for almost everything.
2. Activate your Sperrkonto at Fintiba or your bank's branch — your monthly €934 payments start immediately.
3. Enrol at the university and pay your semester contribution (€200–400).
4. Get a German SIM card (Vodafone, Telekom, O2 — available at any electronics store).
5. Open a German bank account (N26 and DKB both open accounts online without requiring a physical appointment — ideal for new arrivals).`,

      masters: `**German Student Visa — Masters**

Germany's public universities charge no tuition for masters programs — including English-taught ones. You pay a semester contribution of €200–400 which typically includes a public transport pass. This section covers the process for English-taught programs specifically, as these are the most accessible for Nigerians who do not yet speak German.

**Step 1 — Find English-taught programs**

Use the DAAD database at daad.de/en/study-and-research-in-germany/studying-in-germany/study-search. Filter: Language = English, Degree = Master. The results include programs at public universities across Germany — engineering, computer science, business, environmental sciences, public health, economics, and more. Many are at world-ranked universities.

Strong options for English-taught masters in Germany:
• TU Munich (Technical University of Munich) — Engineering, Computer Science, Data Science, Finance, Management. Rankings: consistently top 50 globally.
• RWTH Aachen — Engineering (especially Mechanical and Electrical). Germany's premier engineering university.
• TU Berlin — Engineering, Computer Science, Urban Planning. Strong in sustainable technologies.
• Heidelberg University — Life Sciences, Natural Sciences, Public Health.
• University of Bonn — Economics, Agricultural Sciences, Mathematics.
• Freie Universität Berlin / Humboldt University — Social Sciences, Humanities, Law.

**Step 2 — Prepare your application documents**

What you need for most English-taught masters applications:
• Bachelor's degree certificate and all semester transcripts — certified copies. Many programs require a certified English translation if your degree is in another language. Nigerian degrees are typically in English so this is usually not needed.
• IELTS Academic score — most programs require 6.0–7.0 overall. Check each program specifically. Some accept TOEFL iBT (score 80–100 typically).
• Motivation letter (Motivationsschreiben) — 1–2 pages. Explain your academic background, your specific interest in this program (name specific modules or research groups), and your professional goals after graduating. This is read carefully — generic letters are rejected.
• CV (Lebenslauf) — European format, 1–2 pages. No photo required (though it is normal in Germany). List your education, work experience, research experience, publications, and relevant activities in reverse chronological order.
• Reference letters — some programs require 1–2 academic reference letters. These should be from university lecturers who supervised your thesis or research.
• Sample of academic work — some programs, especially in research-heavy fields, request a writing sample or your undergraduate thesis abstract.

**Step 3 — Submit through uni-assist or the university's own portal**

Most German public universities for international students use uni-assist.de. Create an account, upload your documents, pay the fee (€75 first application, €30 each additional), and submit by the deadline. Typical deadlines: July 15 for winter semester (October start), January 15 for summer semester (April start). Some popular programs close earlier — check each one individually.

Universities with their own portals (not uni-assist): TU Munich uses apply.tum.de. LMU Munich uses lmu.de/en/study/all-degrees-and-programs/application-and-enrollment. Check before assuming uni-assist applies.

**Step 4 — Open your Sperrkonto — €11,208**

Same process as undergraduate. Use Fintiba, Expatrio, or Coracle — all accept applications from Nigeria online. Transfer €11,208 via international wire transfer. Receive your Sperrkonto certificate within 1–3 weeks. This certificate is required for your visa application. The money is released back to you in monthly instalments of €934 after you arrive in Germany and activate the account.

**Step 5 — Apply for Student Visa**

Book your appointment at the German Embassy Abuja (termine.diplo.de) or the German Consulate General Lagos (15 Walter Carrington Crescent, Victoria Island). Book 4–8 weeks before you need the visa. Visa fee: €75.

Bring to your appointment:
• Valid Nigerian passport
• Admission letter from the German university
• Sperrkonto certificate (€11,208 blocked)
• IELTS result (or TOEFL)
• Bachelor's degree and transcripts (certified copies — German translation not typically required for English documents)
• Health insurance (TK, AOK, or Barmer student coverage — arrange online before arriving)
• Proof of accommodation (university dormitory confirmation or signed rental agreement)
• Biometric passport photo
• Completed visa application form

Processing time: 4–8 weeks. Do not book flights until approved.

**After arriving — 18-month job-seeking visa**

After completing your masters in Germany, you automatically qualify for an 18-month job-seeking visa (Aufenthaltserlaubnis zur Arbeitssuche). You can stay in Germany legally for 18 months and work up to 20 hours per week while searching for a job that matches your qualification. Once you receive a qualifying job offer (EU Blue Card threshold: €45,300/year general, €35,300 for shortage occupations), apply for the EU Blue Card from within Germany. You do not need to return to Nigeria.`,

      phd: `**German PhD — Research Position or Stipend**

Germany offers two main PhD routes: salaried research positions and stipend-funded positions. The salaried route is generally better — you are a university employee with full social insurance, pension, and employment rights.

**Salaried research positions (wissenschaftlicher Mitarbeiter)**

These are advertised positions at German universities and research institutes. You apply like a job application. The contract is typically 0.5 TVöD E13 (50% of full salary) — currently approximately €1,700–2,200/month net, depending on your state and experience level. Your tuition is waived. You contribute to the German pension system, have full health insurance through your employment, and earn 28+ days of annual leave.

Where to find positions:
• academics.de — Germany's main academic job board. Set email alerts for "PhD" and "Doktorand" in your field.
• research-in-germany.org — DAAD's portal for international researchers. Lists funded PhD positions across all German research organisations.
• EURAXESS (euraxess.ec.europa.eu) — EU-wide research jobs including Germany.
• Each university's own Stellenportal (jobs page). For example: jobs.tum.de, karriere.uni-heidelberg.de.
• Helmholtz Association (helmholtz.de) — Germany's largest research organisation with 18 centres. Frequently hires international PhD students.
• Max Planck Society (mpg.de) — elite research institutes. Impeccable reputation. Regularly advertise funded PhD positions.

**Stipend-funded PhDs (DAAD and other foundations)**

• DAAD Research Grants (daad.de/en/study-and-research-in-germany/scholarships) — DAAD offers several PhD-related scholarships for Nigerian students. Check daad.de for current calls — they change annually.
• Konrad-Adenauer-Stiftung, Friedrich-Ebert-Stiftung, Heinrich-Böll-Stiftung — German political foundations that offer PhD stipends (€1,200–1,500/month) to international doctoral candidates. Applications are highly competitive but open to Nigerians. Each foundation has its own application process and political/academic focus area.
• Humboldt Research Fellowship — for postdoctoral researchers specifically.

**Applying directly to professors**

Emailing professors directly is accepted and expected in Germany — especially in engineering, natural sciences, and computer science. Write a short, specific email (150–200 words): reference one specific paper or project they published, explain your relevant background, attach your CV and a brief research statement, and ask if they have funded positions or can supervise you. A professor who responds positively will often either create a position for you or point you toward a funded call.

**The visa — National Visa (D) for Research**

Apply at the German Embassy Abuja or Consulate Lagos. Visa category: "Research" or "Employment" (for salaried positions) or "Study" (for stipend-funded enrolled students). Visa fee: €75.

Documents needed:
• Employment contract or stipend award letter
• Acceptance letter from the doctoral program (Immatrikulationsbescheinigung — proof of enrolment)
• Your valid Nigerian passport
• University degree certificates and transcripts
• 2 biometric passport photographs
• Health insurance proof (covered by your employment contract for salaried positions)
• For stipend positions: proof of stipend amount and financial coverage

Processing: 4–8 weeks. Book appointments early.

**Your first month in Germany**

Register at the Einwohnermeldeamt within 14 days of arrival. Your tax ID (Steueridentifikationsnummer) arrives by post within 2–4 weeks — give it to your university's HR department immediately so payroll can be set up. Enrol in SFI-equivalent German classes (Volkshochschule or university German courses) even if your work is in English — German B1 cuts your path to permanent residence from 33 months to 21 months.`,

      work: `**Working in Germany as a Nigerian — EU Blue Card and Skilled Worker Visa**

Germany's 2023 Skilled Worker Immigration Act (Fachkräfteeinwanderungsgesetz) is one of the most progressive skilled worker laws in the EU. It specifically expands Germany's ability to recruit non-EU professionals, including Nigerians. The main routes are the EU Blue Card (for degree holders with a qualifying salary) and the Skilled Worker Visa.

**Step 1 — Check if your Nigerian degree is recognised**

Go to anabin.kmk.org — the German database of foreign qualifications. Search for your Nigerian university and degree. Results:
• H+ : fully recognised — you can apply directly for EU Blue Card or Skilled Worker Visa
• H: recognised with conditions — you may need additional documentation
• H-: not recognised — you need to apply for an equivalency assessment through the Central Office for Foreign Education (KMK)

Major Nigerian universities with H+ recognition: University of Lagos, Obafemi Awolowo University, University of Nigeria Nsukka, Ahmadu Bello University, University of Ibadan, University of Benin, and others. Check your specific university and degree type.

If your qualification is not recognised or only partially recognised, apply for a formal equivalency assessment at anabin.kmk.org/kontakt. This takes 3–6 months. You can also enter Germany on a 6-month Recognition Visa (Anerkennungsvisum) to pursue recognition from within Germany — this visa allows you to work up to 20 hours/week during the process.

**Step 2 — Search for jobs on German platforms**

make-it-in-germany.com: Germany's official government portal for international skilled workers. Job listings, information on recognition, and visa guidance all in one place. Start here.

LinkedIn Germany: Set your location to Germany and turn on Open to Work. German tech companies, engineering firms, and healthcare employers actively search LinkedIn. English profile is fine for international companies.

StepStone.de: Germany's largest general job board. Most German employers post here.

XING: Germany's professional network — similar to LinkedIn but more commonly used for mid-size German companies (Mittelstand). Create a XING profile alongside LinkedIn.

Indeed.de: Wide coverage across all sectors.

Specific sectors where Nigerians are in demand:
• Information Technology: software engineers, data scientists, cloud architects. Germany has a shortage of 200,000+ IT workers. Companies like SAP, Siemens, Deutsche Telekom, Zalando, N26 regularly hire internationally.
• Engineering: mechanical, electrical, civil, automotive. RWTH Aachen and TU Munich alumni networks include many Nigerians in engineering roles at Bosch, BMW, Volkswagen, BASF.
• Healthcare: Germany needs 150,000 more nurses by 2030. Nigerian nurses and doctors can qualify — though it requires qualification recognition from your target state's Landesbehörde (state health authority).
• Finance and Accounting: Frankfurt is the EU's financial capital post-Brexit. CFA, ACCA, or ICAN-qualified Nigerians find opportunities at Deutsche Bank, Commerzbank, and investment firms.

**Step 3 — Get a job offer and apply for the EU Blue Card**

EU Blue Card salary requirements (2024 — verify at bamf.de as these update):
• General threshold: €45,300/year gross
• Shortage occupations (IT, engineering, natural sciences, doctors, nurses): €35,300/year gross

Your employer does not need to prove no German candidate was available (unlike the standard Skilled Worker Visa process for some roles) — the EU Blue Card is straightforward if you have a recognised degree and a qualifying salary offer.

Apply for the EU Blue Card at the German Embassy Abuja or Consulate Lagos. Visa fee: €75. Documents: job offer letter confirming salary, recognised degree certificate (with anabin H+ status), valid passport, health insurance proof, biometric photos. Processing: 4–8 weeks.

**The 6-month Job-Seeking Visa**

If you hold a German degree or a fully recognised Nigerian degree (H+), you can apply for a 6-month Aufenthaltserlaubnis zur Arbeitssuche (Job-Seeking Visa) at the German Embassy. This allows you to enter Germany legally and job-search on the ground, working up to 20 hours/week. Once you secure a qualifying offer, convert to EU Blue Card from within Germany — you do not need to leave.

**After the EU Blue Card: permanent residence**

EU Blue Card holders with B1 German: 21 months to permanent residence (Niederlassungserlaubnis).
EU Blue Card holders without B1 German: 33 months to permanent residence.

After permanent residence, you can work for any employer anywhere in Germany (or the EU on your German PR). German citizenship is available after 8 years of legal residence (5 years with special integration criteria including C1 German and volunteer/civic involvement). Germany officially allows dual nationality for most cases.`,

      visitor: `**Visiting Germany — Schengen Short-Stay Visa**

Germany is a Schengen member state. Nigerian passport holders need a Schengen short-stay visa (Type C) to visit. This single visa allows travel across all 26 Schengen countries — Germany, France, Netherlands, Sweden, Spain, Italy, and 20 others — for up to 90 days in any 180-day period.

**Where to apply in Nigeria**

German Embassy Abuja: Nile House, 9 Alvan Ikoku Street, Maitama, Abuja. Appointment booking: termine.diplo.de/en.
German Consulate General Lagos: 15 Walter Carrington Crescent, Victoria Island, Lagos.

Both accept Schengen visa applications. Apply at whichever is more convenient. Book your appointment as early as possible — slots at both locations fill 4–6 weeks in advance, especially during European summer (June–September).

**What visa officers look at**

The German consulate officer is assessing two things: (1) Can you financially support yourself during your stay? (2) Do you have strong enough ties to Nigeria to return when your visa expires?

Financial requirement: Approximately €100 per day of your stay. For a 14-day trip, that means showing approximately €1,400 in accessible funds. Your bank statements should show this money has been stable for at least 3 months — not recently deposited.

Ties to Nigeria: An employment letter from your Nigerian employer confirming your role, salary, leave approval dates, and return-to-work date is the most important document. Other ties: property ownership (Certificate of Occupancy), spouse or children remaining in Nigeria, business registration documents, salary slips.

**Verpflichtungserklärung (formal sponsorship declaration)**

If a German host is paying for your trip or hosting you, they can issue a Verpflichtungserklärung — a formal financial sponsorship declaration obtained from the local German Ausländerbehörde (immigration office). This significantly strengthens applications for family visits and can satisfy the financial requirement. Your host in Germany goes to their local Ausländerbehörde, pays a small fee (approximately €25–30), and gets the declaration issued in your name. You include this document with your application.

**Document checklist**

• Valid Nigerian passport — minimum 6 months validity beyond your planned return date, with at least 2 blank pages
• Completed Schengen visa application form (downloaded from the German embassy website and filled before your appointment)
• 2 recent biometric passport photos — 35x45mm, white background
• Bank statements — 3–6 months, showing your name and stable funds
• Employment letter — on company letterhead, signed by HR, confirming your role, monthly salary, approved leave (from date to date), and that your job will be held for you
• Travel insurance — mandatory. Minimum €30,000 Schengen coverage for the full duration of your trip. Must explicitly state Schengen Area.
• Hotel bookings or signed host invitation letter — with host's German address and contact
• Return flight booking (can be refundable at application stage)
• If visiting family: invitation letter from your German-based relative, plus copy of their German residence card (Aufenthaltstitel) or German passport
• Visa fee: €80

**Processing time**

Standard processing: 15 calendar days from the date you submit your application and biometrics. In peak periods (summer) it can extend to 30–45 days. Check the embassy website for current estimates. Do not book non-refundable flights or accommodation until you have your visa in hand.

**Multiple-entry Schengen visa**

You can request a multiple-entry visa on your application form. If you have a good travel history (previous US, UK, or Schengen visas) and a clear legitimate purpose for multiple visits, multi-entry is often granted. A multi-entry Schengen visa allows you to enter and exit the Schengen area multiple times within its validity period — ideal if you have family in Europe or travel for business regularly.

**If refused**

The refusal letter must state the reason. The most common reasons for Nigerian applicants: insufficient proof of ties to home country (strengthen with employment letter, property documents, family evidence), insufficient financial means (more stable bank history, sponsor's Verpflichtungserklärung), purpose of travel not sufficiently justified (clearer itinerary, hotel bookings, invitation letter). Address each reason specifically in a reapplication.`,
    },

    timeline: {
      undergrad: [
        { step: "12–18 months before start", title: "Start German language classes at Goethe-Institut or online", detail: "Most undergraduate programs require B2 or C1 German (TestDaF or DSH). Enrol at Goethe-Institut Nigeria in Lagos (Victoria Island) or study via Deutsche Welle (dw.com/learn-german) and DeutschAkademie online. Plan 8–12 months of consistent study to reach B2 from scratch. Do not skip this step — without B2/C1, you cannot enrol in most German undergraduate programs." },
        { step: "10–12 months before", title: "Research programs and shortlist 5–8 schools using daad.de", detail: "Use the DAAD database (daad.de) to identify programs matching your subject. Check each university's specific entry requirements: most public universities use uni-assist.de for applications, but some (TU Munich, LMU) have their own portals. Note application deadlines — typically July 15 for October start and January 15 for April start." },
        { step: "8–10 months before", title: "Sit TestDaF or DSH exam", detail: "Book your TestDaF exam at Goethe-Institut Lagos or an authorised test centre. TestDaF is offered several times per year — check prüfungstermine at testdaf.de. Results take approximately 6 weeks. Target TDN 4 in all four sections. Some programs accept Goethe-Zertifikat B2/C1 — check your specific program." },
        { step: "6–8 months before", title: "Apply through uni-assist or direct portals", detail: "Upload your documents to uni-assist.de (WAEC certificate, transcripts, German test result, passport copy). Pay the application fee: €75 for first university, €30 each additional. Apply to at least 5–6 programs. If applying to TU Munich or LMU, use their own portals separately." },
        { step: "4–6 months before", title: "Receive admission letter and open Sperrkonto", detail: "Once admitted (Zulassungsbescheid), open your blocked account immediately. Use Fintiba, Expatrio, or Coracle — all work from Nigeria online. Transfer €11,208. Receive certificate within 1–3 weeks. This certificate is required for your visa." },
        { step: "3–4 months before", title: "Apply for Student Visa at German Embassy Abuja or Consulate Lagos", detail: "Book appointment at termine.diplo.de (Abuja) or consulate Lagos. Visa fee: €75. Bring: admission letter, Sperrkonto certificate, TestDaF/DSH result, WAEC and transcripts, passport, health insurance proof, accommodation confirmation, biometric photo. Processing: 4–8 weeks." },
        { step: "First two weeks in Germany", title: "Register at Einwohnermeldeamt and activate Sperrkonto", detail: "Register at your local residents' registration office within 14 days. Bring passport and rental/host address. Activate your Sperrkonto at Fintiba or your bank — monthly €934 payments begin immediately. Enrol at the university, pay semester contribution (€200–400), get your student ID and public transport pass." },
      ],
      masters: [
        { step: "9–12 months before start", title: "Identify English-taught programs at daad.de and take IELTS", detail: "Filter daad.de: Language = English, Degree = Masters. Shortlist 5–8 programs. Take IELTS Academic — target 6.5 overall. Some programs accept TOEFL iBT (80–100). Check each program's specific language requirement before booking your test." },
        { step: "7–9 months before", title: "Prepare motivation letter and application documents", detail: "Your motivation letter (1–2 pages) is the most important document. Name specific modules or professors from the program. Connect your undergraduate background to why this specific German program is the right next step. Get your degree certificate and all semester transcripts certified. If reference letters are required, give referees 6–8 weeks notice." },
        { step: "5–7 months before", title: "Apply through uni-assist or direct university portals", detail: "Deadlines: July 15 for October (winter semester) start, January 15 for April (summer semester) start. TU Munich uses apply.tum.de. Most others use uni-assist.de (€75 first application, €30 each additional). Apply to 4–6 programs." },
        { step: "3–5 months before", title: "Receive admission and open Sperrkonto — €11,208", detail: "Open Sperrkonto at Fintiba, Expatrio, or Coracle from Nigeria. Transfer €11,208. Receive certificate within 1–3 weeks. Apply for Student Visa immediately — book appointment at German Embassy Abuja (termine.diplo.de) or Consulate Lagos." },
        { step: "2–3 months before", title: "Student Visa — bring all documents to your appointment", detail: "Visa fee: €75. Bring: admission letter, Sperrkonto certificate, IELTS result, degree + transcripts, health insurance proof, accommodation confirmation, biometric photo, completed application form. Processing: 4–8 weeks." },
        { step: "After graduation", title: "18-month job-seeking visa — stay and find work in Germany", detail: "Apply for Aufenthaltserlaubnis zur Arbeitssuche from within Germany before your Student Permit expires. This gives you 18 months to find a job matching your qualification. You can work up to 20 hours/week during this period. No need to return to Nigeria. Once you have a qualifying offer, apply for the EU Blue Card from within Germany." },
      ],
      phd: [
        { step: "Ongoing — start now", title: "Set email alerts on academics.de and research-in-germany.org", detail: "PhD positions in Germany open throughout the year — there is no single season. Set daily email alerts for 'Doktorand' or 'PhD' in your field on academics.de, research-in-germany.org, and euraxess.ec.europa.eu. Also follow specific university job boards directly. Apply to every relevant position." },
        { step: "When a position matches", title: "Apply with research proposal, CV, and references", detail: "Your application needs: focused research proposal (2–5 pages), academic CV with all research experience and publications, degree certificates and transcripts, 2–3 reference letters from academic supervisors, IELTS or proof of English proficiency. Tailor everything to the specific project advertised." },
        { step: "Offer received", title: "Review your employment contract carefully", detail: "For salaried positions: confirm salary (TVöD E13, 50% or 65% position), contract duration, tuition waiver, holiday entitlement. For stipend positions: confirm monthly amount and whether health insurance is included. For salaried positions, health insurance is automatic through your employment. Get everything confirmed in writing before signing." },
        { step: "2–3 months before start", title: "Apply for Research/Employment Visa at German Embassy", detail: "Visa category: Employment (for salaried contract) or Research (for stipend + enrollment). Fee: €75. Documents: employment contract or stipend letter, doctoral enrolment acceptance (Immatrikulationsbescheinigung), degree certificates, passport, biometric photo. Processing: 4–8 weeks." },
        { step: "First week in Germany", title: "Anmeldung at Einwohnermeldeamt and get tax ID", detail: "Register within 14 days. Your tax ID (Steueridentifikationsnummer) arrives by post within 2–4 weeks — give it to university HR immediately for payroll setup. Enrol in German classes (Volkshochschule) — B1 German cuts your path to permanent residence from 33 months to 21 months." },
      ],
      work: [
        { step: "Before job search", title: "Check anabin.kmk.org for your Nigerian degree's recognition status", detail: "Go to anabin.kmk.org and search your university and degree type. H+ means fully recognised — you can apply directly for EU Blue Card. H- means not recognised — apply for an equivalency assessment (takes 3–6 months) or consider entering on a 6-month Recognition Visa. This step determines your entire approach." },
        { step: "Job search", title: "Apply on make-it-in-germany.com, LinkedIn, StepStone, and XING", detail: "make-it-in-germany.com is the German government's own portal for international skilled workers — start here. LinkedIn is essential for tech and international companies. StepStone.de and XING cover the broader German job market including Mittelstand (mid-sized German companies). Update your CV to German/European format: 1–2 pages, no photo required but common, reverse chronological." },
        { step: "Job offer received — confirm salary meets Blue Card threshold", title: "EU Blue Card: €45,300/yr general; €35,300/yr shortage occupations", detail: "Confirm your offer letter explicitly states your annual gross salary. EU Blue Card shortage occupations include: mathematics, computer science, natural sciences, engineering, IT (MINT professions), doctors. If you are in these fields, the threshold is €35,300/year. Verify current figures at bamf.de before applying." },
        { step: "Apply for EU Blue Card visa at German Embassy Abuja or Consulate Lagos", title: "Visa fee €75 — processing 4–8 weeks", detail: "Documents: job offer letter with salary, recognised degree (anabin H+ or equivalency certificate), valid passport, health insurance proof (your employer provides this once you start), biometric photos. Book appointment early at termine.diplo.de (Abuja) or Consulate Lagos." },
        { step: "Arrive in Germany — first two weeks", title: "Anmeldung, tax ID, bank account, health insurance", detail: "Register at Einwohnermeldeamt within 14 days. Give your tax ID to your employer immediately. Open a bank account (N26 or DKB are easiest for new arrivals without an in-person appointment). Your employer registers you for statutory health insurance. Enrol in German language classes immediately — B1 reduces your PR wait from 33 months to 21 months." },
        { step: "21 months (with B1 German)", title: "Apply for permanent residence (Niederlassungserlaubnis)", detail: "After 21 months on EU Blue Card with B1 German, apply for permanent residence at your local Ausländerbehörde. You must show: B1 German certificate, 21 months of social security contributions, clean criminal record, and adequate income. After permanent residence, you can work anywhere in the EU and no longer need visa renewals." },
      ],
      visitor: [
        { step: "6–8 weeks before travel", title: "Book appointment at German Embassy Abuja (termine.diplo.de) or Consulate Lagos", detail: "Book as early as possible — slots fill 4–6 weeks in advance. Abuja: termine.diplo.de/en. Lagos: Consulate General, 15 Walter Carrington Crescent, Victoria Island. Begin gathering your documents at the same time as booking." },
        { step: "5–6 weeks before", title: "Prepare documents — employment letter and bank statements are most critical", detail: "Employment letter: company letterhead, signed by HR, your name, role, salary, approved leave from [date] to [date], return-to-work date. Bank statements: 3–6 months, stable funds, approximately €100/day minimum. If a German host is sponsoring you, ask them to get a Verpflichtungserklärung from their local Ausländerbehörde." },
        { step: "Before your appointment", title: "Buy Schengen travel insurance — mandatory", detail: "Minimum €30,000 coverage, valid across all Schengen countries, for the full duration of your trip. Must explicitly state Schengen coverage. Available from AXA, Leadway, or online providers. Certificate must show your name, dates, and coverage amount." },
        { step: "At your appointment", title: "Submit documents, pay €80 fee, give biometrics", detail: "Bring all originals and photocopies. Complete the visa application form before arriving (download from the embassy website). Biometrics (fingerprints and photo) are taken at the appointment. Your passport is retained until the visa is processed." },
        { step: "15 calendar days later", title: "Collect passport with visa sticker — then book non-refundable travel", detail: "Standard processing is 15 days. Only book non-refundable flights and accommodation after collecting your passport with the visa. The visa sticker shows: validity dates, allowed stay (days), and number of entries." },
      ],
    },

    tips: {
      undergrad: [
        { title: "German public university tuition is genuinely zero — not a marketing gimmick", body: "Many Nigerians are sceptical about free tuition. It is real. German public universities (Technische Universität, Ruprecht-Karls-Universität, Freie Universität, etc.) charge no tuition for any student — domestic or international. You pay only a semester contribution of €200–400 which covers administration and usually a public transport pass for your city. The exceptions are Baden-Württemberg state, which charges international students €1,500/semester — still far below UK or North American tuition. Avoid private Hochschulen if cost is a concern — they charge fees." },
        { title: "The Sperrkonto money comes back to you — do not confuse it with a fee", body: "€11,208 sounds like a lot. It is not a fee paid to Germany. It is your own money deposited into a blocked account in your name at a German bank. Once you arrive and activate the account, you receive €934 every month for 12 months — the full €11,208 comes back. Think of it as Germany forcing you to save one year of living expenses before you arrive. Use Fintiba or Expatrio — both are straightforward for Nigerians and take 1–3 weeks from application to certificate." },
        { title: "B2 German is not optional for most programs — start immediately", body: "The most common mistake Nigerian students make is assuming they can learn German 'later.' Most German undergraduate programs will not admit you without B2 or C1 level German. TestDaF takes months to prepare for. Goethe-Institut in Lagos runs structured courses — enrol at whatever level you are currently at and commit to 10–15 hours of study per week. Deutsche Welle (dw.com/learn-german) is a free, excellent supplement. Start now, not when you start preparing applications." },
        { title: "Germany allows 120 full or 240 half working days per year for students", body: "Unlike some countries that severely restrict student work, German law allows international students to work 120 full days (or 240 half days) per year alongside their studies. At German minimum wage (€12.41/hour in 2024), a student working 20 hours per week earns approximately €2,000/month — enough to cover living costs entirely in cities outside Munich. On-campus student jobs (Hiwi positions), tutoring, and hospitality are the most common routes. Working in Germany also builds employment history and language skills." },
      ],
      masters: [
        { title: "1,800+ English-taught masters programs — Germany is Europe's best-kept secret for Nigerians", body: "Most Nigerians automatically think UK or Canada for English-taught masters. Germany has over 1,800 English-taught programs at public universities that charge zero tuition. The DAAD database (daad.de) lists all of them. Engineering, computer science, data science, business, public health, environmental science — all available in English. After graduating you get 18 months to find a job in Germany's booming tech and engineering market. This combination — free education, job-seeking period, EU Blue Card pathway — is arguably the best deal in the world for Nigerian masters students." },
        { title: "Your motivation letter determines whether you get in", body: "German university admissions for masters are not purely based on grades. The Motivationsschreiben (motivation letter) is read carefully and matters significantly. Generic letters — 'I have always been interested in engineering' — are rejected. Specific letters work: 'Professor [Name]'s research group at TU Munich on [specific area] directly connects to my bachelor's thesis on [specific topic]. I want to develop this through the [specific module] in your program and then apply it in Nigeria's [sector].' Name real things from the program website. Show you actually researched the specific university and program." },
        { title: "The 18-month job-seeking visa after graduation changes everything", body: "Germany gives every master's and PhD graduate an 18-month stay to find employment after graduating. You can work up to 20 hours/week during this period while job-hunting. This means you do not need a job offer before you graduate — you have 18 months in Germany to apply, interview, and convert to a work permit from within the country. No flight back to Nigeria to reapply. For a Nigerian with a German master's degree in engineering or IT, 18 months is more than enough time to secure an offer paying the EU Blue Card threshold." },
        { title: "Health insurance: get statutory (GKV) not private (PKV) as a student", body: "Germany requires health insurance for your Student Visa and your entire stay. As a student, you have two options: statutory health insurance (GKV) at approximately €120–130/month through TK, AOK, or Barmer, or private insurance. For students, GKV is almost always better — it is widely accepted by all doctors and hospitals, has no hidden exclusions, and you can easily switch providers. Sign up for TK (tk.de) or AOK before arriving — they have English-language sign-up processes online. Avoid cheap travel insurance — it is not the same as proper German health insurance and will not satisfy the visa requirement." },
      ],
      phd: [
        { title: "Salaried PhD positions are employment, not study — this changes your immigration status", body: "When you hold a salaried PhD position (wissenschaftlicher Mitarbeiter) in Germany, you are an employee. You pay into the German pension, contribute to statutory health insurance, accrue annual leave, and are protected by German employment law. This employment contract counts as qualified work experience for permanent residence applications — the same as any other skilled worker. Your path to a Niederlassungserlaubnis (permanent residence) starts the day your employment starts, not when you graduate." },
        { title: "Max Planck Society and Helmholtz Association offer world-class funded positions", body: "Germany has two elite non-university research organisations that are among the best in the world. The Max Planck Society (mpg.de) runs 84 institutes covering natural sciences, life sciences, social sciences, and humanities. The Helmholtz Association (helmholtz.de) is Germany's largest research organisation with 18 centres focused on energy, earth, health, aeronautics, and key technologies. Both regularly advertise PhD positions open to international candidates. Positions at these institutes are especially prestigious and the funding is guaranteed for the contract duration. Set alerts on their career portals." },
        { title: "Learn German from day one — B1 cuts permanent residence from 33 to 21 months", body: "Even if your research is entirely in English, German language ability dramatically changes your life in Germany and your immigration timeline. EU Blue Card holders with B1 German can apply for permanent residence after 21 months. Without B1, it is 33 months. That is 12 months you save by learning a language you will use every day anyway — for shopping, navigating bureaucracy, building relationships outside the lab, and eventual citizenship. Enrol at your university's Sprachenzentrum (language centre) or local Volkshochschule immediately after arriving." },
      ],
      work: [
        { title: "make-it-in-germany.com is the German government's own recruitment portal — use it", body: "This is not a third-party site. It is run by the German Federal Government specifically to attract international skilled workers. It has job listings, information on how to get your qualification recognised, a 'find your visa' tool, and guides to living in Germany. Start here. It also has a partner job platform that aggregates listings from German employers who specifically want to hire internationally. Nigerian software engineers, nurses, and engineers feature prominently in the shortage occupation lists." },
        { title: "Healthcare professionals: recognition takes 3–12 months but it is worth it", body: "Nurses and doctors trained in Nigeria can work in Germany, but you need your qualification recognised by the Landesbehörde (state health authority) of the German state you plan to work in. The process varies by state and typically takes 3–12 months. Some states require you to complete an adaptation course or take a knowledge test. The recognition process can be started from Nigeria — download the application form from your target state's health authority website. Some employers will sponsor you through this process and pay a salary during adaptation. German-speaking Nigerian nurses and doctors are especially sought after." },
        { title: "The 6-month job-seeking visa lets you job-hunt from inside Germany", body: "If you have a German university degree or a fully recognised Nigerian degree (H+), you can apply for a 6-month Aufenthaltserlaubnis zur Arbeitssuche at the German Embassy before arriving. This visa allows you to live in Germany, work up to 20 hours/week, attend job interviews, and convert to an EU Blue Card once you have a qualifying offer — all without leaving Germany to reapply. German employers strongly prefer to interview candidates who are already in the country. This visa is underused by Nigerians and it is one of the most valuable visa categories Germany offers." },
      ],
      visitor: [
        { title: "Book your German embassy appointment 4–6 weeks early — slots go fast", body: "The German Embassy in Abuja and the German Consulate General in Lagos both have limited appointment slots for Schengen visa applications. During European summer (June–September), slots can fill 6–8 weeks in advance. Book as soon as you know your travel dates. For Abuja: termine.diplo.de/en. For Lagos: contact the consulate directly or check their website. Missing your appointment means starting the booking process again." },
        { title: "The Verpflichtungserklärung from a German host is powerful evidence", body: "If you have family or a close friend in Germany, ask them to get a Verpflichtungserklärung (formal sponsorship declaration) from their local German Ausländerbehörde (immigration office). This is a government-issued document where your German-resident host formally declares financial responsibility for your stay. It costs approximately €25–30 to obtain. This document significantly strengthens your application because it is issued by a German authority — it is not just a personal letter. Your host brings your details and their residence documents to the Ausländerbehörde and the declaration is issued on the spot or within a few days." },
        { title: "Previous Schengen stamps in your passport are the strongest thing you can show", body: "If you have previously been to any Schengen country and returned home on time, those entry and exit stamps in your passport prove you respect visa conditions. A Schengen visa applied for by someone with previous Schengen travel history is significantly more likely to be approved and more likely to receive multiple-entry. If you have never had a Schengen visa, a current or recent US or UK visa is the next best alternative — it shows other credible immigration systems approved you." },
        { title: "Request multiple-entry on your application if you visit Europe regularly", body: "When completing your Schengen visa application form, there is a field for 'number of entries requested.' Tick 'multiple entries' if you visit Germany or Europe for business or family reasons more than once a year. A multiple-entry Schengen visa (if granted) allows you to travel to any Schengen country as many times as you want within the visa's validity — typically 1 or 2 years — without reapplying. The fee is the same as a single-entry visa (€80)." },
      ],
    },

    universities: {
      undergrad: [
        { name: "Technical University of Munich (TUM)", location: "Munich, Bavaria", known_for: "Engineering, Computer Science, Natural Sciences, Medicine, Management — consistently ranked #1 in Germany and top 50 globally", avg_tuition: "€0 + €144/semester contribution (not in Baden-Württemberg)", acceptance: "25–40% (competitive)", nigerian_community: "Small but growing" },
        { name: "RWTH Aachen University", location: "Aachen, NRW (near Belgian border)", known_for: "Mechanical Engineering, Electrical Engineering, Computer Science — Germany's premier technical university for engineering", avg_tuition: "€0 + €310/semester contribution", acceptance: "40–55%", nigerian_community: "Small" },
        { name: "Heidelberg University (Ruprecht-Karls)", location: "Heidelberg, Baden-Württemberg", known_for: "Natural Sciences, Medicine, Law, Social Sciences — Germany's oldest university (1386), top life sciences globally", avg_tuition: "€0 + €1,500/semester (non-EU students in BW since 2017) + ~€80 semester contribution", acceptance: "30–45%", nigerian_community: "Very small" },
        { name: "Freie Universität Berlin", location: "Berlin, capital", known_for: "Social Sciences, Humanities, Political Science, Life Sciences — international city, most diverse in Germany", avg_tuition: "€0 + €320/semester contribution (includes Berlin public transport)", acceptance: "50–65%", nigerian_community: "Small" },
        { name: "University of Hamburg", location: "Hamburg (Germany's second city)", known_for: "Law, Economics, Sciences, Business — port city, very international, lower cost of living than Munich", avg_tuition: "€0 + €290/semester contribution", acceptance: "55–70%", nigerian_community: "Very small" },
      ],
      masters: [
        { name: "Technical University of Munich (TUM)", location: "Munich, Bavaria", known_for: "100+ English-taught masters in Engineering, CS, Data Science, Management, Finance — apply at apply.tum.de", avg_tuition: "€0 + ~€144/semester contribution", acceptance: "20–35% (very competitive)", nigerian_community: "Small but growing" },
        { name: "RWTH Aachen University", location: "Aachen, NRW", known_for: "English-taught masters in Mechanical Engineering, Electrical Engineering, Computational Engineering, Data Science", avg_tuition: "€0 + ~€310/semester", acceptance: "30–45%", nigerian_community: "Small" },
        { name: "Technical University of Berlin (TU Berlin)", location: "Berlin, capital", known_for: "Engineering, Computer Science, Urban Development, Business Administration (with ESCP) — vibrant startup ecosystem in Berlin", avg_tuition: "€0 + ~€320/semester", acceptance: "35–50%", nigerian_community: "Small" },
        { name: "University of Bonn", location: "Bonn, NRW (former German capital)", known_for: "Economics, Agricultural Sciences, Mathematics, Computer Science — strong DAAD scholarship connections", avg_tuition: "€0 + ~€300/semester", acceptance: "45–60%", nigerian_community: "Very small" },
        { name: "University of Cologne (Universität zu Köln)", location: "Cologne, NRW", known_for: "Business Administration, Economics, Law, Social Sciences — one of Germany's largest universities, near Düsseldorf", avg_tuition: "€0 + ~€280/semester", acceptance: "50–65%", nigerian_community: "Very small" },
      ],
      phd: [
        { name: "Max Planck Society Institutes", location: "Nationwide — 84 institutes across Germany", known_for: "Elite research across natural sciences, life sciences, social sciences. Nobel Prize-winning institutions. PhD positions are salaried and fully funded.", avg_tuition: "Fully funded — salary TVöD scale", acceptance: "Highly competitive globally", nigerian_community: "Very small but internationally diverse" },
        { name: "Helmholtz Association", location: "Nationwide — 18 research centres", known_for: "Energy, Earth and Environment, Health, Aeronautics, Key Technologies — Germany's largest research organisation. Structured PhD programs.", avg_tuition: "Fully funded — employment contract + social insurance", acceptance: "Highly competitive", nigerian_community: "Very small" },
        { name: "Technical University of Munich (TUM Graduate School)", location: "Munich, Bavaria", known_for: "Structured PhD programs in Engineering, CS, Life Sciences, Economics. International Graduate School with English-medium programs.", avg_tuition: "€0 — stipend or salaried depending on position", acceptance: "Highly competitive", nigerian_community: "Small" },
        { name: "Heidelberg University (HGGS)", location: "Heidelberg, Baden-Württemberg", known_for: "Heidelberg Graduate School of Fundamental Physics, life sciences, humanities — strong international community", avg_tuition: "€0 — stipend or employment contract", acceptance: "Competitive", nigerian_community: "Very small" },
      ],
      work: [],
    },

    scholarships: {
      undergrad: [
        { name: "DAAD Study Scholarships for Foreign Graduates", amount: "€850–1,200/month stipend + travel allowance + health insurance", university: "All German universities", deadline: "October 15 each year — check daad.de/en/study-and-research-in-germany/scholarships", url: "https://www.daad.de/en/study-and-research-in-germany/scholarships/" },
        { name: "Deutschlandstipendium (National Scholarship Program)", amount: "€300/month — half funded by German companies, half by government. Available to enrolled students, not applicants.", university: "Most German universities — apply after enrolment", deadline: "Varies by university — apply in your first semester", url: "https://www.deutschlandstipendium.de/en/" },
      ],
      masters: [
        { name: "DAAD Helmut-Schmidt Masters Scholarships (Public Policy and Good Governance)", amount: "€850/month + travel allowance + health insurance + study/research allowance", university: "Select German universities — program for future leaders from developing countries including Nigeria", deadline: "Check daad.de annually — typically October/November", url: "https://www.daad.de/en/study-and-research-in-germany/scholarships/helmut-schmidt-programme/" },
        { name: "Konrad-Adenauer-Stiftung Scholarships", amount: "€850/month + additional benefits — for master's students in all fields", university: "All German universities", deadline: "January 15 and July 15 each year — check kas.de", url: "https://www.kas.de/en/web/begabtenfoerderung-und-kultur/scholarship-programmes" },
        { name: "Friedrich-Ebert-Stiftung Scholarships", amount: "€830/month + study allowance — for students with social and political commitment", university: "All German universities", deadline: "April 30 each year for all applicants — check fes.de", url: "https://www.fes.de/en/foundation/foerderung" },
        { name: "DAAD Master Scholarships (All Fields)", amount: "€850–1,200/month depending on study level + travel grant + health insurance", university: "All German public universities", deadline: "October–November each year — check daad.de", url: "https://www.daad.de/en/study-and-research-in-germany/scholarships/" },
      ],
      phd: [
        { name: "DAAD Research Grants (PhD Researchers)", amount: "€1,200/month + travel allowance + health insurance", university: "All German universities and research institutions", deadline: "Varies by scholarship — check daad.de in October each year", url: "https://www.daad.de/en/study-and-research-in-germany/scholarships/daad-research-grants/" },
        { name: "Helmholtz Association PhD Positions (fully funded employment)", amount: "Full salary TVöD E13 50–65% + complete social insurance + pension", university: "Helmholtz Association's 18 research centres", deadline: "Rolling — apply per advertised position at helmholtz.de", url: "https://www.helmholtz.de/en/career/job-portal/" },
        { name: "Humboldt Research Fellowship (Postdoctoral)", amount: "€2,670–3,170/month + benefits — for postdoctoral researchers, not PhD students", university: "German universities and research institutes of your choice", deadline: "Rolling applications year-round — check humboldt-foundation.de", url: "https://www.humboldt-foundation.de/en/apply/sponsorship-programmes/humboldt-research-fellowship" },
      ],
      work: [],
    },

    embassy: {
      name: "German Embassy Abuja / German Consulate General Lagos",
      address: "Embassy: Nile House, 9 Alvan Ikoku Street, Maitama, Abuja | Consulate: 15 Walter Carrington Crescent, Victoria Island, Lagos",
      phone: "Apply online and book appointment at termine.diplo.de (Abuja) or the Lagos consulate website",
      note: "Student and work visa appointments must be booked in advance online. Both the Abuja Embassy and Lagos Consulate process visa applications. Book as early as possible — appointment slots fill 4–6 weeks in advance.",
      website: "https://nigeria.diplo.de/ng-en",
      visa_apply: "https://nigeria.diplo.de/ng-en/konsularinfo/visa",
      vfs: "https://nigeria.diplo.de/ng-en/konsularinfo/visa",
      official_immigration: "https://www.make-it-in-germany.com/en/",
      extra_links: [
        { label: "DAAD — All Germany scholarships and programs", url: "https://www.daad.de/en/study-and-research-in-germany/" },
        { label: "uni-assist — Application portal for most German universities", url: "https://www.uni-assist.de/en/" },
        { label: "make-it-in-germany.com — Official German government skilled worker portal", url: "https://www.make-it-in-germany.com/en/" },
        { label: "anabin — Check Nigerian degree recognition status", url: "https://anabin.kmk.org/anabin.html" },
        { label: "Fintiba — Open Sperrkonto from Nigeria", url: "https://www.fintiba.com/" },
        { label: "Expatrio — Sperrkonto + health insurance bundle", url: "https://www.expatrio.com/" },
        { label: "BAMF — German immigration authority", url: "https://www.bamf.de/EN/" },
        { label: "Appointment booking — German Embassy Abuja", url: "https://termine.diplo.de/en" },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // NETHERLANDS
  // ─────────────────────────────────────────────
  NL: {
    tagline: "English-speaking tech hub in the heart of Europe — one of the most accessible EU countries for Nigerians",
    overview: "The Netherlands is one of the best-kept secrets for Nigerians. Nearly all university programs at the master's level are taught entirely in English. Dutch companies actively recruit international talent, and the Highly Skilled Migrant visa is one of the fastest and most straightforward work permits in Europe. Amsterdam, Eindhoven, and Rotterdam are thriving international cities where English gets you everywhere. As an EU member on Schengen, a Dutch residence permit gives you freedom to travel across Europe. Many Nigerians who come for a master's stay permanently — the Netherlands has a clear path from study to work permit to 5-year permanent residency.",

    stats: {
      undergrad:  { tuition: "€2,314/yr (EEA statutory) — non-EEA typically €8,000–20,000/yr", living: "€1,000–1,400/month", processing: "4–8 weeks (MVV + residence permit)", acceptance: "Varies by program", minIELTS: "6.0–6.5 overall", currency: "EUR" },
      masters:    { tuition: "€12,000–22,000/yr (non-EEA fee varies by university)", living: "€1,000–1,400/month", processing: "4–8 weeks (MVV + residence permit)", acceptance: "Competitive, English required", minIELTS: "6.5 overall (7.0 for top programs)", currency: "EUR" },
      phd:        { tuition: "Fully funded — salaried position (AIO/OIO contract)", living: "€2,200–2,700/month (gross salary)", processing: "4–8 weeks after job offer", acceptance: "Very competitive globally", minIELTS: "6.5 overall", currency: "EUR" },
      work:       { salary: "€45,000–100,000/yr depending on sector", processing: "2–5 weeks (IND fast track)", pathway: "Highly Skilled Migrant (HSM) visa — sponsor required", minIELTS: "Not required for most roles", currency: "EUR" },
      visitor:    { fee: "€80 (Schengen visa fee)", processing: "15 calendar days", duration: "Up to 90 days in any 180-day period", pathway: "Schengen Short-Stay Visa (Type C)", currency: "EUR" },
    },

    summary: {
      undergrad: {
        intro: "Dutch undergraduate programs are mostly taught in Dutch, which means they are not the most accessible option for Nigerians unless you plan to learn the language. However, some universities offer English-medium bachelor's programs (University of Amsterdam, Leiden, Maastricht). Non-EEA students pay a higher tuition fee — typically €8,000–20,000 per year versus the statutory EEA rate. The process starts with applying through Studielink, the Dutch centralized application portal, and then applying for an MVV (entry visa) and residence permit through IND once admitted.",
        firstSteps: [
          { action: "Research English-taught undergraduate programs on Studielink", detail: "Go to studielink.nl to see all Dutch university programs. Filter for English-medium bachelor's programs. Key universities with English-taught undergrad: University of Amsterdam, Leiden University, Maastricht University (Problem-Based Learning), Groningen University, Utrecht University. Check the program-specific non-EEA tuition fee on the university's website — it varies significantly." },
          { action: "Take IELTS Academic — target 6.5 overall", detail: "Book through British Council or IDP in Lagos, Abuja, or Port Harcourt. Most Dutch bachelor's programs in English require IELTS 6.0–6.5. Some programs accept TOEFL iBT (85+). Check each program's specific requirement on the university website." },
          { action: "Apply through Studielink (studielink.nl)", detail: "Create an account and apply to up to 4 programs. Application fee: €100 per program at most Dutch universities. You'll need: WAEC/NECO results, transcripts, IELTS certificate, passport, motivation letter, CV. Some programs require additional portfolio or entrance test. Deadlines are typically April 1 for most programs — apply by January." },
          { action: "Once admitted: apply for MVV (Machtiging tot Voorlopig Verblijf) and residence permit through IND", detail: "Your university will act as your sponsor (referent) with IND (Dutch Immigration and Naturalisation Service). The university submits a combined MVV + residence permit application on your behalf — you pay €210 for this. Processing takes 4–8 weeks. You collect your MVV (entry visa) from the Dutch Embassy in Lagos or Abuja, travel to the Netherlands, then collect your residence permit (biometric card) within 3 days of arrival." },
          { action: "Open a Dutch bank account and arrange accommodation before arrival", detail: "Book student accommodation through your university housing office — the Netherlands has a serious housing shortage. Apply for housing the moment you receive your admission offer. Some universities guarantee housing for international students in the first year. You will need: proof of enrollment, Dutch DigiD (digital ID) — you get this after registering with the municipality (gemeente)." },
        ],
        keyFacts: [
          "Non-EEA students pay higher 'institutional' tuition — can be €8,000–20,000/yr, confirm the exact figure per program",
          "MVV = the entry visa to travel to the Netherlands; your residence permit (verblijfsvergunning) is collected after arrival",
          "Housing shortage is real — apply for student housing the same week as your admission offer",
          "After 5 years of continuous legal residence, you can apply for Dutch citizenship (naturalisation)",
          "As a student you can work 16 hours/week during semester, full-time June–August with a TWV work permit",
        ],
        outcome: "After your degree, you can apply for a Orientation Year permit (Zoekjaar) — 1 year to find work. If you land a job with a Dutch-registered company earning above the HSM salary threshold, you convert to a Highly Skilled Migrant permit immediately.",
      },
      masters: {
        intro: "The Netherlands is the best EU country for Nigerians pursuing a master's degree. Nearly every master's program at Dutch universities is taught entirely in English. You don't need Dutch language skills at all. The country is also one of the few in the EU with a genuine post-study work pathway — the 1-year Orientation Year (Zoekjaar) permit gives you time to find a job before your student permit expires. If you get a job at a Dutch company above the HSM salary threshold, you convert straight to a Highly Skilled Migrant permit — no separate work permit required.",
        firstSteps: [
          { action: "Research programs — use Mastersportal.eu or university websites directly", detail: "The Netherlands has hundreds of English-taught master's programs. Start at mastersportal.eu and filter by Netherlands + English. Top targets: TU Delft (Engineering, Architecture), Eindhoven University of Technology (TU/e — Data Science, CS), University of Amsterdam (UvA — Economics, Business, Psychology), Vrije Universiteit Amsterdam (VU — Sciences, Law), Wageningen University (Life Sciences, Agriculture), Leiden University (Law, International Relations), Erasmus University Rotterdam (Business, Economics). Apply to 3–5 programs." },
          { action: "Take IELTS Academic — target 7.0 overall (some programs accept 6.5)", detail: "Most Dutch master's programs require IELTS 6.5–7.0. TU Delft and Eindhoven require 7.0 overall with specific sub-scores. Book through British Council or IDP. TOEFL iBT 90–100 is an alternative. Take the test at least 6–8 months before your application deadline." },
          { action: "Get your degree and transcripts officially certified and evaluated", detail: "Get your bachelor's transcripts and degree certificate officially stamped by your university's registrar. Some Dutch universities require a Nuffic Neso evaluation (Neso Nigeria is based in Lagos — check nesonaigeria.org). Nuffic is the Dutch organization for internationalization in education. The evaluation confirms your degree is equivalent to a Dutch bachelor's." },
          { action: "Apply to programs — deadlines are typically April 1 for September intake", detail: "Apply through each university's own admissions portal (not Studielink for master's). You'll need: transcripts, degree certificate, IELTS, CV, motivation letter, 2 references. Some programs like TU Delft have earlier deadlines (January or February for competitive programs). Apply early — programs fill up." },
          { action: "After admission: your university sponsors your combined MVV + residence permit via IND", detail: "Pay €210 for IND application (submitted by university). Collect MVV from Dutch Embassy Lagos or Abuja. Travel to the Netherlands within the MVV validity period. Register with your local municipality (gemeente) within 5 days. Collect your residence permit (biometric card) — this is your legal right-to-stay document." },
        ],
        keyFacts: [
          "Tuition: €12,000–22,000/yr for non-EEA students (confirm exact institutional fee per program)",
          "After graduation: 1-year Orientation Year permit (Zoekjaar) to find a job — no need to leave while job-hunting",
          "If you find a job above HSM salary threshold, no separate work permit needed — direct conversion",
          "HSM salary threshold 2024: €5,688/month gross (≈ €68,000/yr) for general roles; €4,171/month for under-30s",
          "Orientation Year applications cost €192 and must be submitted before your student permit expires",
        ],
        outcome: "Masters → Orientation Year → Highly Skilled Migrant permit → after 5 years continuous residence → permanent residency (or Dutch citizenship). This path has been completed by thousands of African graduates in the Netherlands.",
      },
      phd: {
        intro: "PhD positions in the Netherlands are employment contracts, not study places. You apply for a specific advertised vacancy, receive a salary (AIO/OIO contract at a Dutch university, typically €2,200–2,700/month gross), contribute to social insurance, and receive full employee benefits. You don't 'apply to a PhD program' — you apply for a specific job opening posted by a professor. This is very different from the Nigerian academic model. You are an employee of the university from day one. Tax-free PhD scholarships also exist but are less common. Find vacancies at academictransfer.nl and indeed.nl.",
        firstSteps: [
          { action: "Find PhD vacancies at academictransfer.nl — the main Dutch academic job portal", detail: "Create a profile at academictransfer.nl and set up job alerts in your research field. Also check: jobs.tue.nl (Eindhoven), werken.tudelft.nl (TU Delft), jobs.uva.nl (Amsterdam), vacatures.leidenuniv.nl (Leiden). A good PhD ad will specify salary (usually TVöD-equivalent), starting date, supervisor, and research project." },
          { action: "Reach out to professors directly if you have a strong research background", detail: "Dutch professors actively recruit PhD students. Find a supervisor whose research aligns with yours, read their recent papers, and send a one-page research proposal + your CV and transcripts. Email them directly — this is common and expected. A professor's yes is the first step to a formal vacancy." },
          { action: "Apply formally through the university HR system once you find a vacancy", detail: "The application will require: CV, research statement, copies of degrees and transcripts, two reference letters, IELTS or TOEFL scores, and sometimes a project proposal. Shortlisted candidates typically do a video interview, then an in-person (or online) presentation. Decisions take 2–6 weeks after the closing date." },
          { action: "Once offered the position: your university sponsor submits your residence permit application to IND", detail: "The university acts as your sponsor. You don't need an MVV if your residence permit is approved from within Nigeria before travel. IND processing: typically 2–4 weeks for sponsored highly skilled migrants. You receive a single-entry visa to travel to the Netherlands, then collect your residence permit on arrival." },
          { action: "Register with the municipality and open a Dutch bank account immediately on arrival", detail: "You must register at the gemeente (municipality) within 5 days of arrival. You'll need your passport and accommodation address. This triggers your BSN (citizen service number) which is needed for bank accounts, salary payments, and health insurance. All employees in the Netherlands are legally required to have Dutch health insurance (zorgverzekering) — your university HR will guide you." },
        ],
        keyFacts: [
          "PhD = salaried employee in the Netherlands — you pay income tax and social contributions, and receive full employment rights",
          "Salary: TVöD scale, typically €2,200–2,700/month gross in year 1, increasing annually",
          "Contract: typically 4 years (with a go/no-go evaluation after year 1)",
          "30% ruling: as a knowledge migrant, you may be eligible for the 30% tax ruling — up to 30% of salary tax-free for 5 years",
          "After PhD: Orientation Year permit gives you 1 year to find a job without leaving the Netherlands",
        ],
        outcome: "A Dutch PhD (doctor degree) combined with 4 years of residence means you are well on the path to permanent residence (5 years required). Many PhD graduates convert directly to HSM permits when hired by Dutch companies after graduation.",
      },
      work: {
        intro: "The Netherlands has one of the most efficient skilled work permit systems in Europe — the Highly Skilled Migrant (HSM) visa. If a recognized Dutch employer hires you, the entire permit process takes 2–5 weeks. The employer (who must be an IND-recognized sponsor) submits the application; you don't apply yourself. You then collect your entry visa from the Dutch Embassy in Lagos or Abuja and move. No language test required for most tech and business roles. The salary threshold (€5,688/month gross for over-30s) is real but achievable in Amsterdam's tech, finance, and consulting sectors.",
        firstSteps: [
          { action: "Job search — target IND-recognised sponsors (most large Dutch companies are)", detail: "Search at linkedin.com/jobs (filter: Netherlands), indeed.nl, werkenbijdutchcompanies.nl, and company career pages. Amsterdam has a dense tech ecosystem: Booking.com, Adyen, TomTom, Philips, ASML, ING, ABN AMRO. The Hague has international organisations. Rotterdam is logistics and shipping. Eindhoven is engineering and semiconductors. Check if the company is an IND-recognized sponsor — most major Dutch companies are. New or small companies may not be recognized yet." },
          { action: "Secure a job offer with a salary at or above the HSM salary threshold", detail: "HSM salary thresholds (2024): over 30 years old: €5,688/month gross (€68,256/yr); under 30: €4,171/month gross (€50,052/yr). Reduced threshold for holders of Dutch university degree searching via Orientation Year: €2,801/month. These are minimums — most tech roles in Amsterdam pay well above this. Confirm your gross monthly salary in the offer letter." },
          { action: "Your Dutch employer submits the HSM application to IND on your behalf", detail: "You don't apply yourself. The employer (as your sponsor) submits the application through IND's online portal. Processing time: 2–5 weeks for recognized sponsors. IND will issue an approval letter (MVV/residence permit). Your employer's HR department will handle this — ask them specifically if they have done this before. Large companies (Booking.com, ASML, Philips) have dedicated expat HR teams." },
          { action: "Collect your MVV entry visa at the Dutch Embassy in Lagos or Abuja", detail: "With IND approval, you collect the MVV (Machtiging tot Voorlopig Verblijf — temporary residence authorisation) from the Dutch Embassy or Consulate in Lagos (Haatso Road, Victoria Island) or Abuja. Book an appointment online. Bring: IND approval letter, passport, passport photos, biometrics fee. Processing at the embassy: 1–2 weeks." },
          { action: "Travel to the Netherlands and register with the municipality within 5 days", detail: "On arrival, register at the gemeente (municipality) of your city. This triggers your BSN (Burgerservicenummer — citizen service number), which you need for: opening a bank account, receiving salary, getting health insurance, accessing government services. Enroll in Dutch health insurance within 4 months of your start date — your employer may contribute to the premium." },
        ],
        keyFacts: [
          "HSM visa threshold (2024): €5,688/month gross (over 30) or €4,171/month (under 30)",
          "Employer must be an IND-recognized sponsor — check the IND public register at ind.nl",
          "30% ruling: if you're transferring from outside the Netherlands, up to 30% of salary is tax-free for 5 years",
          "Processing: 2–5 weeks from employer submission to IND approval for recognized sponsors",
          "After 5 years of legal residence: apply for permanent residency (Verblijfsvergunning voor onbepaalde tijd)",
        ],
        outcome: "Netherlands → 5 years legal residence → permanent residency → optional Dutch citizenship (after 5 years as permanent resident). The Netherlands also allows dual nationality in some cases — check the Dutch government's current rules on government.nl.",
      },
      visitor: {
        intro: "The Netherlands is in the Schengen Area, which means you apply for a Schengen short-stay visa (Type C) — valid for visits to all 26 Schengen countries, not just the Netherlands. You apply at the Dutch Embassy or Consulate in Nigeria, or through VFS Global as the official visa application centre. The visa allows you up to 90 days within any 180-day period across all Schengen countries. You cannot work on a visitor visa.",
        firstSteps: [
          { action: "Book your appointment at VFS Global Lagos or Abuja for the Netherlands Schengen visa", detail: "Go to vfsglobal.com/netherlands/nigeria. Netherlands Schengen visas for Nigerian applicants are processed through VFS Global — you do not go directly to the Dutch Embassy for tourist visas. Book online, pay the appointment fee, and attend in person with all documents. VFS Lagos is at Plot 19, Ligali Ayorinde Street, Victoria Island. VFS Abuja is at Jabi District." },
          { action: "Prepare your Schengen visa documents", detail: "Required: valid Nigerian passport (minimum 3 months validity beyond return date, with 2 blank pages), VFS application form, 2 passport photographs (35mm × 45mm, white background), travel itinerary (flights in and out of Schengen area), accommodation proof (hotel booking or invitation letter with host's proof of residency), travel insurance (minimum €30,000 cover, valid for entire Schengen area, not just Netherlands), bank statements (6 months, showing stable funds — minimum ₦500,000 balance recommended), proof of employment or business registration, and letter from employer granting leave." },
          { action: "Pay the Schengen visa fee", detail: "Fee: €80 for adults (approximately ₦160,000 at current rates). VFS Global service fee is additional — approximately ₦15,000. Pay online when booking your appointment. The fee is non-refundable even if the visa is denied. Children 6–12 pay €40. Children under 6 pay nothing." },
          { action: "Attend your biometrics appointment at VFS", detail: "Bring all original documents (not just copies) to your VFS appointment. VFS will take your fingerprints and photo (biometrics). They forward your application to the Dutch Embassy for decision. Processing: 15 calendar days from the date of application (can be up to 45 days in peak travel seasons — apply 3 months before your travel date)." },
          { action: "Track your application and collect your passport at VFS", detail: "Track your application on the VFS website with your reference number. When approved, VFS will notify you by email or SMS to collect your passport with the visa sticker inside. Check: the visa validity dates, number of entries (single or multiple), and maximum stay per entry. If denied, you receive a written explanation and can appeal or reapply." },
        ],
        keyFacts: [
          "Netherlands is Schengen — your Type C visa is valid for all 26 Schengen countries, not just the Netherlands",
          "90-day rule: you can stay maximum 90 days in any rolling 180-day window across the entire Schengen zone",
          "Travel insurance minimum: €30,000 cover, valid for entire Schengen area — Leadway, AXA, and Allianz Nigeria sell Schengen-valid policies",
          "VFS Global processing the application — you do NOT go directly to the Dutch Embassy for tourist visas",
          "Apply at least 6 weeks before travel — processing is 15 days but VFS appointments can be booked out",
        ],
        outcome: "A Netherlands Schengen visa gives you access to visit 26 European countries — France, Germany, Italy, Spain and more — within the 90-day limit. It does not give you the right to live or work in the Netherlands.",
      },
    },

    visa: {
      undergrad: `**Netherlands Undergraduate Student Visa (MVV + Residence Permit)**

**Who this is for**
Nigerians accepted at a Dutch university (universiteit or hogeschool) for an English-taught bachelor's program. You must have an unconditional admission offer before any visa process begins.

**The Two-Step Process**
Unlike the UK or Canada, the Netherlands combines the entry visa (MVV) and residence permit into a single application submitted by your university. You don't apply to IND yourself.

Step 1: Your university submits a combined MVV + residence permit application to IND on your behalf. You pay €210 for this. Processing: 4–8 weeks.
Step 2: Once IND approves, you collect your MVV sticker from the Dutch Embassy in Lagos or Abuja. This is just the entry visa. Travel to the Netherlands within the MVV validity period.
Step 3: Within 3 days of arriving in the Netherlands, register at IND's desk at the university to collect your actual residence permit (biometric card). This is your main legal document.

**Tuition and Costs**
Non-EEA students pay 'institutional' tuition rates — set by each university independently. Typical range: €8,000–20,000/yr. Some programs are cheaper (University of Groningen, Maastricht). Engineering and business programs tend to be at the higher end. Confirm the exact fee on the program page before applying.

Living costs: €1,000–1,400/month in most Dutch cities. Amsterdam and Utrecht are more expensive. Eindhoven and Groningen are more affordable.

**Proof of Funds**
You must demonstrate you can cover your tuition AND living costs for at least the first year. Most universities require you to show €12,000–24,000 in accessible funds. This can be a combination of: personal bank statements, sponsor's bank statements (parent or guardian), scholarship award letter. No blocked account is required (unlike Germany) — but the funds must be demonstrably available.

**Working as a Student**
As a non-EEA student on a Dutch student residence permit, you can work:
- 16 hours/week during the academic year (September–May)
- Full-time during June, July, and August
Your employer needs to apply for a TWV (work permit) for you — this is their responsibility. Some universities partner with IND to streamline this. Platform work (Deliveroo, Thuisbezorgd) and self-employment are not permitted on a student permit.

**Housing Warning**
The Netherlands has a housing crisis. Affordable student housing in Amsterdam, Utrecht, and Rotterdam is extremely scarce. Apply for university-managed housing the same week you receive your admission offer — waiting lists can be 6+ months. Consider cities with better housing availability: Groningen, Maastricht, Enschede, Tilburg.

**Orientation Year After Graduation**
After completing your bachelor's, you can apply for a 1-year Orientation Year permit (Zoekjaar — literally 'search year') to find a job. Cost: €192. You must apply before your student permit expires. If you secure a job above the HSM salary threshold, you convert directly to a Highly Skilled Migrant permit — no need to leave the Netherlands.`,

      masters: `**Netherlands Master's Student Visa (MVV + Residence Permit)**

**Why the Netherlands for a Master's**
The Netherlands is the most accessible EU country for Nigerians who want to study and stay in Europe. Reasons:
1. Almost all master's programs are taught entirely in English — no Dutch required
2. The post-study Orientation Year permit gives you 1 year to find work after graduation
3. Once you find a job above the HSM threshold, you stay — no separate work permit application needed
4. 5 years of legal residence → permanent residency → optional Dutch citizenship

**Program Research**
Start at mastersportal.eu and filter: Netherlands + your subject + English. The top universities by sector:
- Engineering / Technology: TU Delft (ranked top 20 globally), Eindhoven University of Technology (TU/e), Twente University
- Business / Economics: Erasmus University Rotterdam (RSM), Tilburg University, Maastricht University, Amsterdam Business School
- Computer Science / Data: University of Amsterdam (UvA), VU Amsterdam, TU Delft, TU/e
- Life Sciences / Agriculture: Wageningen University (WUR) — top 1 in the world for agriculture
- Law / International Relations: Leiden University, VU Amsterdam, Utrecht University
- Social Sciences: University of Groningen, Utrecht University, Radboud University Nijmegen

**Application Process**
1. Apply directly on each university's admissions portal (not Studielink for master's)
2. Deadlines: most programs close April 1 for September intake; competitive programs (TU Delft, WUR) close as early as January 15 — check per program
3. Documents: bachelor's transcripts + degree certificate, IELTS/TOEFL, CV, motivation letter, 2 academic references
4. Some programs require: Nuffic evaluation of your Nigerian degree (nesonigeria.org), GRE/GMAT for specific business/science programs
5. Admission decisions: 4–12 weeks after complete application

**Nuffic Nigeria (Neso)**
Neso Nigeria (the Dutch organization for international education) has an office in Lagos. They can evaluate your Nigerian university degree and confirm it meets the Dutch entry requirements. Check nesonigeria.org for their services. This evaluation is required by some Dutch universities, optional at others.

**MVV + Residence Permit (same as undergrad)**
Once admitted, your university submits a combined MVV + residence permit application to IND. You pay €210. IND processes in 4–8 weeks. You collect the MVV at the Dutch Embassy Lagos or Abuja, travel to the Netherlands, and collect your residence permit (biometric card) within 3 days of arrival.

**Post-Study Path**
After your master's: apply for the 1-year Orientation Year permit (Zoekjaar) before your student permit expires. Cost: €192. This gives you 1 year inside the Netherlands to find a job. If you secure an HSM-eligible job (above salary threshold), your employer applies for your HSM permit — you stay in the Netherlands throughout. Total study-to-work timeline: 1–2 years study + 1 year Orientation Year + HSM work permit valid for 5 years.`,

      phd: `**Netherlands PhD Residence Permit (Salaried Employee Route)**

**PhD as Employment**
A Dutch PhD is not a study visa — it is a work permit. You are hired as an employee (AIO — Assistent in Opleiding, or OIO — Onderzoeker in Opleiding). Your employment contract is with the university. You receive a salary subject to Dutch income tax and social insurance. You are entitled to 25 days of annual leave, sick pay, parental leave, and full social security contributions.

This means: you don't go through IND as a student. You go through IND as a highly skilled knowledge migrant (kennismigrant). Your university HR submits your residence permit application.

**Finding PhD Vacancies**
The main portal is academictransfer.nl — set up job alerts in your field. Also:
- werken.tudelft.nl (TU Delft — strongest in engineering globally)
- jobs.tue.nl (TU/e Eindhoven — embedded systems, data science, electrical engineering)
- jobs.uva.nl (University of Amsterdam — social sciences, AI, law)
- vacatures.leidenuniv.nl (Leiden — biology, history, law, international relations)
- wur.nl/en/jobs (Wageningen — food, life sciences, environment)
- academicpositions.eu (European-wide, Netherlands posts appear here too)

**Cold-Contact a Supervisor**
Many Dutch PhD positions are never publicly advertised. A professor with funding can create a position for the right candidate. Email the professor with: a short research proposal (1 page) clearly linked to their published work, your CV (academic, max 2 pages), degree transcripts, and an honest statement of your English proficiency and availability. A positive response from a professor leads to a formal HR vacancy being created for you.

**Salary and Tax**
AIO salary scale (2024): approximately €2,770/month gross in year 1, rising to €3,548 in year 4. After Dutch income tax and social contributions, take-home is approximately €2,000–2,400/month. The **30% ruling** is available to knowledge migrants recruited from outside the Netherlands — it allows you to receive 30% of your gross salary tax-free for 5 years. Apply through your university HR in your first months; it significantly improves take-home pay.

**IND Registration Process**
Your university HR department submits your combined residence permit application and employment notification to IND simultaneously. For recognized sponsors (all Dutch universities are), IND processes in 2–5 weeks. You receive notification, travel to the Netherlands on a single-entry visa, and collect your residence permit.

**Timeline to Permanent Residency**
A 4-year Dutch PhD contract puts you 4 years into the 5-year continuous legal residence required for permanent residency. If you stay in the Netherlands for 1 more year after your PhD (on Orientation Year or HSM permit), you can apply for permanent residency.`,

      work: `**Netherlands Highly Skilled Migrant (HSM) Work Permit**

**How It Works**
The Highly Skilled Migrant (Kennismigrant) permit is the main route for Nigerians with skilled job offers in the Netherlands. The employer — not you — submits the application to IND. The employer must be an IND-recognised sponsor (most large Dutch companies are — there is a public register at ind.nl). Processing: 2–5 weeks for recognised sponsors.

**Salary Thresholds (2024)**
The HSM permit requires a minimum gross salary. Thresholds are updated each January:
- Over 30 years old: €5,688/month gross (≈ €68,256/yr)
- Under 30 years old: €4,171/month gross (≈ €50,052/yr)
- Recent Dutch graduates (via Orientation Year): €2,801/month gross
- EU Blue Card: €6,245/month (alternative route for highly qualified migrants)

Amsterdam's tech sector routinely pays these amounts — Booking.com, Adyen, Uber, TomTom, ASML, Philips. Finance, consulting, and engineering roles in Rotterdam and The Hague also commonly exceed the threshold.

**Job Search Strategy**
Strong sectors for Nigerian professionals in the Netherlands:
- Technology / Software: Amsterdam has one of Europe's densest startup ecosystems. Companies: Booking.com (largest tech employer), Adyen (fintech), TomTom, IMCD, Takeaway.com, MessageBird
- Semiconductors: ASML (Eindhoven) — world's only EUV lithography machine maker — aggressively recruits globally, pays well above HSM threshold
- Consulting: McKinsey Amsterdam, BCG, Deloitte, PwC, KPMG all have Dutch operations with international teams
- Finance: ING, ABN AMRO, Rabobank, NN Group all operate from Amsterdam/The Hague
- Life Sciences / Agriculture: Wageningen, DSM, Unilever Dutch operations

Key job boards: linkedin.com/jobs (Netherlands), indeed.nl, glassdoor.nl, werkenbijbooking.com (Booking.com), careers.asml.com, ij.careers.adyen.com

**The 30% Ruling**
As an HSM permit holder recruited from outside the Netherlands, you are likely eligible for the **30% ruling (30%-regeling)**. This allows your employer to pay 30% of your agreed salary as a tax-free allowance, significantly increasing your take-home pay. It lasts for 5 years and can be applied from your first payslip if requested within 4 months of your start date. Apply through your employer's payroll department — they file it on your behalf with the Dutch Tax Authority (Belastingdienst).

**Sponsor Check**
Before accepting a job offer, verify the company is on IND's public register of recognised sponsors: ind.nl → Employers → Public register. A company that is not on the register must apply to become a recognised sponsor first — this can delay your permit by 4–6 weeks. Most major Dutch companies are already registered.

**Step-by-Step Permit Process**
1. You receive a job offer with gross monthly salary specified
2. Your employer submits the HSM application to IND (online, within 2 business days of your start date or before)
3. IND issues approval in 2–5 weeks
4. You receive an MVV notification — collect the entry visa from the Dutch Embassy in Lagos or Abuja
5. Travel to the Netherlands. Register at your local gemeente within 5 days
6. Collect your residence permit biometric card from IND (IND Desk appointment or by post)
7. Enroll in Dutch health insurance (zorgverzekering) — mandatory by law. Your employer may contribute

**Path to Permanent Residency**
After 5 years of continuous legal residence on an HSM permit (or a combination of student + work permits), you can apply for permanent residency (verblijfsvergunning voor onbepaalde tijd). After that, permanent residents can apply for Dutch naturalisation (citizenship) after 5 years as a permanent resident, or after a shorter period in some circumstances. The Netherlands generally does not recognise dual nationality — you may need to renounce your Nigerian passport. Check the current Dutch dual nationality rules at government.nl before starting this process.`,

      visitor: `**Netherlands Schengen Visitor Visa (Type C)**

**What You're Applying For**
The Netherlands is in the Schengen Area. A Dutch Schengen visa (Type C) allows you to visit all 26 Schengen countries — not just the Netherlands. You apply at VFS Global in Nigeria, not directly at the Dutch Embassy for tourist/visit visas.

**90-Day Rule**
You can stay a maximum of 90 days in any rolling 180-day period across the entire Schengen Area. This is not 90 days per country — it's 90 days total across all Schengen countries. Once you leave Schengen, the clock pauses. When you re-enter Schengen, the previous days count.

Example: if you visited France for 10 days in January, then Germany for 20 days in March, you have used 30 of your 90 days. You have 60 days remaining in the current 180-day window.

**Where to Apply: VFS Global Nigeria**
All Schengen visa applications for Nigerian applicants going to the Netherlands are processed through VFS Global:
- VFS Lagos: Plot 19, Ligali Ayorinde Street, Victoria Island, Lagos
- VFS Abuja: Jabi District, Abuja
Book an appointment online at vfsglobal.com/netherlands/nigeria.

**Documents Required**
- Valid Nigerian passport (minimum 6 months remaining validity beyond planned return, 2 blank pages)
- Completed Schengen visa application form (downloaded from VFS website, signed)
- 2 recent passport photographs (35mm × 45mm, white background, taken within the last 6 months)
- Confirmed return flight booking (not just a quote — actual booking, refundable is fine)
- Proof of accommodation in the Netherlands: hotel reservation, Airbnb booking, or invitation letter from a host (with copy of host's ID and proof of Dutch address)
- Travel insurance: minimum €30,000 medical coverage, valid for all Schengen countries, covering the entire trip duration. Providers in Nigeria: Leadway Assurance (Schengen policy), AXA Mansard, Allianz Nigeria — confirm "Schengen Area" is written on the policy
- Bank statements: 6 months of personal statements showing regular income. No specific minimum amount is stated in law, but consular officers assess whether you can cover ≈€80–100/day. Recommended minimum balance: ₦500,000–1,000,000 consistently
- Employment letter or business documentation: if employed, a letter on company letterhead confirming your position, leave dates, and that you will return. If self-employed: CAC registration, tax clearance certificate, 6 months business account statements
- Nigerian passport data page (all previous visas and stamps)

**Visa Fee**
€80 adult Schengen fee (non-refundable) + VFS service charge (approximately ₦12,000–15,000). Children 6–12: €40. Under 6: free. Pay online when booking VFS appointment.

**Processing Time**
Standard processing: 15 calendar days from date of application.
Peak periods (summer, Christmas): can take up to 45 days — apply early. Apply no more than 3 months before your trip. Apply at least 6–8 weeks before travel to be safe.

**Visa Types**
- Single-entry: you can enter Schengen once
- Double-entry: you can enter and exit twice
- Multiple-entry: unlimited entries within the visa's validity period (harder to get on a first application)

**Why Applications Are Rejected**
Most Dutch Schengen visa refusals for Nigerians cite:
1. Insufficient proof of funds (bank statements show no consistent income)
2. Lack of strong ties to Nigeria (no stable employment, property, or family commitments)
3. Travel insurance doesn't explicitly cover the Schengen Area or the full trip
4. Unclear purpose of visit / weak itinerary
5. Incomplete documentation

Address all five before submitting. A refused visa means a record in the Schengen information system — refusals from any Schengen country affect future applications to all Schengen countries.`,
    },

    timeline: {
      undergrad: [
        { month: "12 months before", task: "Research English-taught undergraduate programs at Dutch universities via studielink.nl" },
        { month: "11 months before", task: "Take IELTS Academic — target 6.5 overall (check each program's specific requirement)" },
        { month: "10 months before", task: "Get WAEC/degree transcripts officially certified by your institution's registrar" },
        { month: "9–10 months before", task: "Apply to 4–6 programs through each university's admissions portal or Studielink. Deadline is typically April 1 for September intake" },
        { month: "8–9 months before", task: "Apply for student housing the same week you receive any admission offer — housing lists are long" },
        { month: "6–8 months before", task: "Accept your offer, pay your tuition deposit. Your university submits MVV + residence permit application to IND (€210)" },
        { month: "4–6 months before", task: "IND processes your application (4–8 weeks). You receive MVV notification. Book embassy appointment in Lagos or Abuja to collect MVV sticker" },
        { month: "2–4 months before", task: "Collect MVV from Dutch Embassy. Book flights within MVV validity window" },
        { month: "Arrival week", task: "Land in the Netherlands. Register at gemeente (municipality) within 5 days. Collect residence permit within 3 days at IND desk" },
        { month: "First month", task: "Get BSN, open Dutch bank account, enroll in student health insurance, attend university orientation" },
      ],
      masters: [
        { month: "14 months before", task: "Begin researching programs on mastersportal.eu and university websites" },
        { month: "12 months before", task: "Take IELTS Academic — target 7.0 overall (some programs accept 6.5)" },
        { month: "10–12 months before", task: "Request official transcripts and degree certificate from your Nigerian university registrar" },
        { month: "8–10 months before", task: "Check if any target programs require Nuffic degree evaluation — start this process if needed (nesonigeria.org, takes 4–6 weeks)" },
        { month: "7–9 months before", task: "Apply to 3–5 programs. Deadlines: January 15 (competitive: TU Delft, WUR, Erasmus), April 1 (most others). Apply to all by January" },
        { month: "6–8 months before", task: "Receive admission offers. Accept and pay tuition deposit immediately. University submits MVV + IND application (€210)" },
        { month: "4–6 months before", task: "Apply for student housing immediately — do not wait. IND processes application (4–8 weeks). Collect MVV at Dutch Embassy Lagos/Abuja" },
        { month: "2–4 months before", task: "Book flights. Arrange Dutch travel insurance. Prepare arrival funds" },
        { month: "Arrival week", task: "Register at gemeente within 5 days. Collect residence permit at IND. Start university registration and get student card" },
        { month: "Final semester", task: "Apply for 1-year Orientation Year permit before student permit expires. Cost: €192. Start job search in final year" },
      ],
      phd: [
        { month: "Ongoing", task: "Monitor academictransfer.nl, TU Delft, TU/e, UvA, Leiden, and WUR job boards for PhD vacancies" },
        { month: "Application", task: "Submit application with CV, research statement, transcripts, and references (2–3 weeks per vacancy)" },
        { month: "Interview stage", task: "Video or in-person interview + presentation. Decision: 2–6 weeks after closing date" },
        { month: "Job offer received", task: "University HR submits residence permit + employment notification to IND. Processing: 2–5 weeks" },
        { month: "Visa collection", task: "Collect entry visa from Dutch Embassy Lagos or Abuja (book appointment in advance)" },
        { month: "Arrival week", task: "Register at gemeente. Collect residence permit. Get BSN and open bank account" },
        { month: "First month", task: "Apply for 30% ruling through university HR (must be within 4 months of start date). Enroll in Dutch health insurance" },
        { month: "Year 1–4", task: "Salaried PhD position. Annual go/no-go evaluation. Access to Dutch labour rights: 25 days leave, sick pay, pension contributions" },
        { month: "After PhD", task: "Apply for 1-year Orientation Year permit or convert directly to HSM if job offer secured. 5 years total → permanent residency" },
      ],
      work: [
        { month: "Job search", task: "Target IND-recognised Dutch sponsors on LinkedIn, Indeed.nl, and company career pages. Focus on HSM-eligible salary roles" },
        { month: "Job offer", task: "Receive written offer with gross monthly salary. Confirm company is on IND public sponsor register at ind.nl" },
        { month: "Permit application", task: "Employer submits HSM application to IND. Processing: 2–5 weeks for recognised sponsors" },
        { month: "IND approval", task: "Receive IND approval. Book Dutch Embassy appointment in Lagos or Abuja to collect MVV entry visa" },
        { month: "Embassy visit", task: "Collect MVV from embassy. Allow 1–2 weeks for embassy processing. Bring IND approval letter, passport, photographs" },
        { month: "Travel and arrival", task: "Travel to the Netherlands. Register at gemeente within 5 days of arrival" },
        { month: "First 2 weeks", task: "Get BSN, open Dutch bank account, collect residence permit from IND. Enroll in Dutch health insurance (verplicht — mandatory)" },
        { month: "First month", task: "Apply for 30% ruling with employer's payroll department (do this within 4 months of start date or lose eligibility)" },
        { month: "Ongoing", task: "Renew HSM permit as needed (typically 1–5 year validity). Track towards 5-year permanent residency milestone" },
      ],
      visitor: [
        { month: "8 weeks before travel", task: "Book VFS Global appointment online at vfsglobal.com/netherlands/nigeria (Lagos or Abuja)" },
        { month: "6–7 weeks before", task: "Gather all documents: passport, bank statements (6 months), employment letter, travel insurance, hotel booking, return flight booking" },
        { month: "5–6 weeks before", task: "Attend VFS Global appointment. Submit documents and biometrics. Pay €80 visa fee + VFS service charge" },
        { month: "3–5 weeks before", task: "VFS forwards to Dutch Embassy. Processing: 15 calendar days standard. Track online via VFS reference number" },
        { month: "2–3 weeks before", task: "Collect passport with visa from VFS office. Check visa dates, entries, and duration carefully" },
        { month: "Day of travel", task: "Travel with: passport + visa sticker, travel insurance document (original or digital), return ticket, hotel booking, cash or card for stay" },
        { month: "In the Netherlands", task: "Do not overstay your visa duration. Count your days across all Schengen countries. Keep your return flight confirmation" },
      ],
    },

    tips: {
      undergrad: [
        "Most Dutch bachelor's programs are in Dutch — research carefully to confirm a program is English-medium before applying",
        "Apply for student housing the day you receive your admission offer — the Netherlands has a serious housing shortage",
        "Non-EEA tuition varies widely by program and university — Groningen and Maastricht are often cheaper than Amsterdam and Utrecht",
        "After graduating, the 1-year Orientation Year permit (Zoekjaar) gives you time to find a job inside the Netherlands",
        "The 30% ruling can reduce your effective tax rate significantly once you start working — apply within your first 4 months",
        "Register with the gemeente (municipality) within 5 days of arriving — you cannot open a bank account without a BSN, and BSN comes from the gemeente",
        "Dutch employers expect you to negotiate your salary — don't accept the first offer if it barely meets the HSM threshold",
      ],
      masters: [
        "The Netherlands is Europe's most accessible master's destination for Nigerians — English required, no Dutch needed",
        "TU Delft and Eindhoven (TU/e) have extremely strong industry connections — graduates are recruited before finishing their thesis",
        "Wageningen University is the world's top agricultural research university — exceptional for agri-science and food technology Nigerians",
        "Apply to programs with January or February deadlines (TU Delft, Erasmus) early — December at the latest",
        "Nuffic Nigeria (Lagos) can evaluate your degree before you apply — worth doing if your Nigerian university is not well known internationally",
        "The Orientation Year permit costs only €192 and keeps you legal for a full year post-graduation — always apply before your student permit expires",
        "Amsterdam is expensive for housing — Eindhoven, Groningen, Tilburg, and Enschede are significantly more affordable and have strong universities",
      ],
      phd: [
        "PhD positions in the Netherlands are employment — you are paid a full salary, receive leave, sick pay, and pension — it is not a studentship",
        "The 30% ruling is worth thousands of euros per year — apply through university HR in your first 4 months, do not miss this window",
        "Academictransfer.nl is the primary job portal — set up email alerts for your field and check weekly",
        "Cold-emailing a professor with a targeted one-page research proposal works — many positions are created this way before being advertised",
        "TU Delft and TU/e have the strongest engineering and computer science PhD programs in the Netherlands",
        "A Dutch PhD takes 4 years — combined with a post-PhD Orientation Year, you reach the 5-year permanent residency threshold",
        "All Dutch university staff are entitled to file a 30% ruling — it is not competitive, just paperwork. Do it early",
      ],
      work: [
        "The HSM permit is one of the fastest work permits in the EU — employer-submitted, 2–5 weeks, no quota system",
        "Verify your employer is on the IND recognised sponsor register (ind.nl) before accepting a job offer — if not, factor in 4–6 weeks extra",
        "The 30% ruling is significant: if your salary is €80,000, you take home as if you earned €56,000 in tax — this is legal and widely used",
        "Amsterdam's tech ecosystem (Booking.com, Adyen, ASML, TomTom) pays well above HSM thresholds and is actively international",
        "Dutch is not required for most tech, finance, and international business roles in Amsterdam — English is the office language",
        "ASML in Eindhoven is one of the most important technology companies in the world and actively recruits international engineers",
        "Health insurance is mandatory by law — enroll within 4 months of arrival. Your employer may contribute to your premium",
      ],
      visitor: [
        "Apply at VFS Global — not directly at the Dutch Embassy — for Schengen tourist visas as a Nigerian applicant",
        "The 90-day Schengen rule is counted across all 26 Schengen countries combined — not per country",
        "Your travel insurance must explicitly say 'Schengen Area' on the policy — generic travel insurance is not accepted",
        "A strong visa application shows: consistent income, stable employment, property or family in Nigeria, and a clear reason to return",
        "Refused Schengen visas are recorded in the Schengen information system — a refusal from any Schengen country affects all future applications",
        "Apply 6–8 weeks before travel — VFS appointments can be booked out, and standard processing is 15 days",
        "Multiple-entry visas are rarely granted on a first application — build a travel history over time",
      ],
    },

    universities: {
      undergrad: [
        { name: "University of Amsterdam (UvA)", location: "Amsterdam, North Holland", known_for: "Liberal Arts and Sciences, Psychology, Economics, Law — large international student body, English-medium programs available", avg_tuition: "€9,900–13,000/yr (non-EEA)", acceptance: "Moderately competitive", nigerian_community: "Small but present" },
        { name: "Maastricht University", location: "Maastricht, Limburg", known_for: "Problem-Based Learning (PBL) — highly structured group-learning method. Strong international focus, nearly all bachelor's programs are English-medium. Medicine, Law, Business.", avg_tuition: "€9,900–12,000/yr (non-EEA)", acceptance: "Moderately competitive", nigerian_community: "Small" },
        { name: "Leiden University", location: "Leiden, South Holland", known_for: "Netherlands' oldest university (1575). Strong in Law, International Relations, Area Studies, Natural Sciences. Several English-medium bachelor's programs.", avg_tuition: "€9,900–17,000/yr (non-EEA depending on program)", acceptance: "Selective", nigerian_community: "Very small" },
        { name: "University of Groningen (RUG)", location: "Groningen", known_for: "Strong in Sciences, Business, Law, Health Sciences. More affordable city than Amsterdam. Good English-medium bachelor's programs. Large international community.", avg_tuition: "€8,700–11,000/yr (non-EEA)", acceptance: "Moderately competitive", nigerian_community: "Very small" },
      ],
      masters: [
        { name: "Delft University of Technology (TU Delft)", location: "Delft, South Holland", known_for: "Top 15 globally for Engineering and Technology. Architecture, Aerospace, Civil, Electrical, Computer Science, Industrial Design. All master's programs in English. Extremely strong industry placement.", avg_tuition: "€15,000–21,000/yr (non-EEA)", acceptance: "Very competitive globally", nigerian_community: "Very small" },
        { name: "Eindhoven University of Technology (TU/e)", location: "Eindhoven, North Brabant", known_for: "Data Science, Computer Science, Electrical Engineering, Industrial Design. Located in Eindhoven — home of ASML, Philips, and DAF. Industry-embedded research environment. English-medium.", avg_tuition: "€15,000–20,000/yr (non-EEA)", acceptance: "Very competitive", nigerian_community: "Very small" },
        { name: "Erasmus University Rotterdam (RSM)", location: "Rotterdam, South Holland", known_for: "Rotterdam School of Management (RSM) — top European business school. MSc Management, Business Administration, Finance, Econometrics. Strong finance and consulting placement.", avg_tuition: "€18,000–23,000/yr (non-EEA)", acceptance: "Competitive", nigerian_community: "Small" },
        { name: "Wageningen University (WUR)", location: "Wageningen, Gelderland", known_for: "World's top-ranked agricultural and food science university. Food Safety, Nutrition, Environmental Sciences, Biotechnology, Animal Sciences. All master's programs in English.", avg_tuition: "€14,000–20,000/yr (non-EEA)", acceptance: "Competitive", nigerian_community: "Very small" },
        { name: "University of Amsterdam (UvA)", location: "Amsterdam", known_for: "Economics, Business, Psychology, Law, Information Studies, Artificial Intelligence. Strong research university. Amsterdam location gives access to major company internships.", avg_tuition: "€13,000–19,000/yr (non-EEA)", acceptance: "Competitive", nigerian_community: "Small" },
        { name: "Leiden University", location: "Leiden / The Hague", known_for: "Law, International Relations, Public Administration, Life Sciences. Governance Campus in The Hague (near international courts and organisations). Strong for law and policy careers.", avg_tuition: "€14,000–19,000/yr (non-EEA)", acceptance: "Selective", nigerian_community: "Very small" },
      ],
      phd: [
        { name: "Delft University of Technology (TU Delft)", location: "Delft, South Holland", known_for: "Global top 15 for Engineering. PhD positions are salaried AIO contracts. Specialties: renewable energy, water management, robotics, computer science, aerospace.", avg_tuition: "Fully funded — salaried AIO position", acceptance: "Very competitive internationally", nigerian_community: "Very small" },
        { name: "Eindhoven University of Technology (TU/e)", location: "Eindhoven", known_for: "Computer Science, Embedded Systems, Electrical Engineering, Mechanical Engineering, Data Science. Strong ties to ASML, Philips, and DAF — PhD students often seconded to industry.", avg_tuition: "Fully funded — salaried AIO position", acceptance: "Very competitive", nigerian_community: "Very small" },
        { name: "Wageningen University (WUR)", location: "Wageningen", known_for: "World leader in food, agriculture, environmental research. Strong social sciences division. PhD positions are employment contracts.", avg_tuition: "Fully funded — salaried position", acceptance: "Competitive", nigerian_community: "Very small" },
        { name: "University of Amsterdam (UvA)", location: "Amsterdam", known_for: "AI, Information Studies, Social Sciences, Law, Economics, Medical Sciences. Located in Amsterdam — access to the Netherlands' largest startup and corporate ecosystem.", avg_tuition: "Fully funded — salaried AIO position", acceptance: "Competitive", nigerian_community: "Very small" },
      ],
      work: [],
    },

    scholarships: {
      undergrad: [
        { name: "Holland Scholarship", amount: "€5,000 one-time (first year only)", university: "Participating Dutch universities — check list at studyinholland.nl/scholarships", deadline: "Varies by university — typically February/March for September intake. Apply through your university after admission", url: "https://www.studyinholland.nl/finances/scholarships/find-scholarships/holland-scholarship" },
        { name: "Orange Tulip Scholarship", amount: "Varies — partial or full tuition waiver depending on participating institution", university: "Participating Dutch institutions — check per country at nesonigeria.org", deadline: "Varies — typically February/March. Apply through Nuffic/Neso Nigeria in Lagos", url: "https://www.studyinholland.nl/finances/scholarships/find-scholarships/orange-tulip-scholarship" },
      ],
      masters: [
        { name: "Holland Scholarship", amount: "€5,000 one-time (towards first year tuition)", university: "Most Dutch universities at master's level — check the participating institutions list at studyinholland.nl", deadline: "Varies by university — typically February 1 for September programs. Apply through university admissions", url: "https://www.studyinholland.nl/finances/scholarships/find-scholarships/holland-scholarship" },
        { name: "Orange Tulip Scholarship (Nigeria)", amount: "Partial tuition waivers at participating institutions — amounts vary", university: "Selected Dutch universities — Neso Nigeria (Lagos) manages applications from Nigeria", deadline: "February each year — check nesonigeria.org for current open calls", url: "https://www.nesonigeria.org/orange-tulip-scholarship/" },
        { name: "Erasmus Mundus Joint Masters (EMJM)", amount: "€1,400/month stipend + tuition waiver + travel allowance — for non-EEA applicants", university: "Consortium of European universities including Dutch ones — check eacea.ec.europa.eu for current programs", deadline: "January–February for September start — check each EMJM program's website", url: "https://www.eacea.ec.europa.eu/scholarships/erasmus-mundus-catalogue_en" },
        { name: "TU Delft Excellence Scholarship", amount: "€12,000–25,000/yr depending on program — partial or full tuition", university: "TU Delft only — for top-ranked master's applicants in all TU Delft programs", deadline: "January 15 for September intake (same as TU Delft's main application deadline)", url: "https://www.tudelft.nl/en/education/practical-matters/scholarships" },
      ],
      phd: [
        { name: "NWO Talent Programme (VENI/VIDI/VICI)", amount: "Full funding for postdoctoral and established researchers — not for incoming PhD students but relevant for later career", university: "All Dutch universities — applied for by your supervisor", deadline: "Rolling, announced per year at nwo.nl", url: "https://www.nwo.nl/en/talent-programme" },
        { name: "Funded PhD positions (employment contracts)", amount: "Full salary AIO scale — approximately €2,770 gross/month in year 1", university: "All Dutch universities — posted on academictransfer.nl. This is the standard way to do a PhD in the Netherlands", deadline: "Rolling — per vacancy posting on academictransfer.nl", url: "https://www.academictransfer.com/" },
      ],
      work: [],
    },

    embassy: {
      name: "Royal Netherlands Embassy Lagos / Netherlands Honorary Consulate Abuja",
      address: "Embassy: Haatso Road 13, Victoria Island, Lagos | Consulate: Plot 975, Aminiyatou Aliyu Street, Asokoro, Abuja",
      phone: "Tourist visa applications: VFS Global (not directly at embassy). Work/study permits: submitted by your Dutch employer/university to IND in the Netherlands",
      note: "For Schengen tourist visas, apply through VFS Global Nigeria (vfsglobal.com/netherlands/nigeria) — not directly at the embassy. Student and work permit applications are submitted by your Dutch institution or employer directly to IND (the Dutch immigration authority) — you do not come to the embassy for these. MVV collection (for study/work) is done at the embassy or consulate after IND approval.",
      website: "https://www.netherlandsworldwide.nl/countries/nigeria",
      visa_apply: "https://www.netherlandsworldwide.nl/countries/nigeria/visas",
      vfs: "https://www.vfsglobal.com/netherlands/nigeria/",
      official_immigration: "https://ind.nl/en",
      extra_links: [
        { label: "IND — Dutch Immigration and Naturalisation Service", url: "https://ind.nl/en" },
        { label: "Studielink — Dutch university application portal (undergrad)", url: "https://www.studielink.nl/" },
        { label: "Study in Holland — Official Dutch study abroad site", url: "https://www.studyinholland.nl/" },
        { label: "Mastersportal.eu — Search Dutch master's programs", url: "https://www.mastersportal.eu/" },
        { label: "Academictransfer.nl — Dutch academic job and PhD vacancy board", url: "https://www.academictransfer.com/" },
        { label: "Neso Nigeria (Lagos) — Dutch education advisory office in Nigeria", url: "https://www.nesonigeria.org/" },
        { label: "VFS Global Netherlands — Schengen visa application for Nigerians", url: "https://www.vfsglobal.com/netherlands/nigeria/" },
        { label: "IND Recognised Sponsors Register", url: "https://ind.nl/en/public-register-recognised-sponsors" },
        { label: "make-it-in-the-netherlands.nl — Official work in Netherlands portal", url: "https://business.gov.nl/coming-to-the-netherlands/" },
        { label: "Holland Scholarship — study funding information", url: "https://www.studyinholland.nl/finances/scholarships/find-scholarships/holland-scholarship" },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // AUSTRALIA
  // ─────────────────────────────────────────────
  AU: {
    tagline: "A clear path from student visa to permanent residency — one of the most accessible English-speaking destinations for Nigerians",
    overview: "Australia is one of the most structured destinations for Nigerians. The immigration system is points-based and transparent — you know exactly where you stand before you apply. The student-to-PR pathway is well-trodden: study a degree in a shortage occupation, work 2 years on a Graduate Visa (subclass 485), then apply for skilled migration through SkillSelect. Cities like Sydney, Melbourne, and Brisbane have growing Nigerian communities. English is the language of everyday life, the legal system, and the workplace — no second language required at any stage. Australia also has one of the highest minimum wages in the world, making part-time work as a student genuinely useful.",

    stats: {
      undergrad:  { tuition: "AUD 20,000–45,000/yr", living: "AUD 1,400–2,000/month", processing: "4–6 weeks", acceptance: "Varies by university", minIELTS: "6.0 overall (6.5 for many programs)", currency: "AUD" },
      masters:    { tuition: "AUD 22,000–50,000/yr", living: "AUD 1,400–2,000/month", processing: "4–6 weeks", acceptance: "Competitive", minIELTS: "6.5 overall (7.0 for top programs)", currency: "AUD" },
      phd:        { tuition: "Often fully funded (domestic fee rate)", living: "AUD 28,000–32,000/yr (stipend)", processing: "4–8 weeks", acceptance: "Very competitive", minIELTS: "6.5 overall", currency: "AUD" },
      work:       { salary: "AUD 60,000–130,000/yr depending on occupation", processing: "2–12 months (SkillSelect EOI)", pathway: "Skilled Independent (189) / Employer Sponsored (482/186)", minIELTS: "Competent English required (IELTS 6.0 each band)", currency: "AUD" },
      visitor:    { fee: "AUD 190 (Visitor Visa subclass 600)", processing: "20–30 days (can be longer)", duration: "Up to 3 or 6 months", pathway: "Visitor Visa (subclass 600)", currency: "AUD" },
    },

    summary: {
      undergrad: {
        intro: "Australian undergraduate degrees take 3–4 years and are internationally recognised. The key appeal for Nigerians is what comes after: a 2–4 year Graduate Visa (subclass 485) that lets you work anywhere in Australia after graduating. That work experience then feeds into the points-based skilled migration system for permanent residency. The student visa (subclass 500) process is straightforward if you have a Genuine Student requirement (GSR) statement ready and sufficient funds.",
        firstSteps: [
          { action: "Research programs and shortlist 4–6 universities — apply directly or via a registered agent", detail: "Start at universitiesaustralia.edu.au. Key universities: University of Sydney, University of Melbourne, Australian National University (ANU), University of Queensland (UQ), Monash University, University of New South Wales (UNSW), University of Western Australia (UWA). Check each program's specific English requirements and tuition fees — they vary significantly. Apply directly on each university's admissions portal." },
          { action: "Take IELTS Academic — target 6.5 overall (no band below 6.0)", detail: "Most Australian universities require IELTS 6.0–6.5 overall for undergraduate entry. Book at British Council or IDP Nigeria (Lagos, Abuja, Port Harcourt). TOEFL iBT and PTE Academic are also accepted — check per institution. Start preparing 3–6 months before your application deadline." },
          { action: "Get your WAEC/NECO results verified and transcripts ready", detail: "Australian universities generally accept WAEC/NECO results. Most do not require a separate verification service like WES — they assess documents directly. However, have your original certificates, certified copies, and official transcripts stamped by your school registrar ready. Some universities may ask for additional verification." },
          { action: "Accept your offer and receive your electronic Confirmation of Enrolment (eCoE)", detail: "Once admitted and you pay your tuition deposit (typically AUD 2,000–5,000), your university issues an electronic Confirmation of Enrolment (eCoE). This is the core document for your student visa application. You cannot apply for a subclass 500 student visa without it." },
          { action: "Apply for Student Visa subclass 500 on ImmiAccount", detail: "Create an ImmiAccount at immi.homeaffairs.gov.au. Apply online. You need: eCoE, IELTS result, Overseas Student Health Cover (OSHC — mandatory, approximately AUD 600–700/yr), financial evidence (AUD 21,041 for living costs + your annual tuition + AUD 7,362 for a dependent partner + AUD 3,152 per child), Genuine Student Requirement statement (why you want to study in Australia and your ties to Nigeria), passport. Visa fee: AUD 710." },
        ],
        keyFacts: [
          "eCoE from your university is the core visa document — nothing moves without it",
          "OSHC (Overseas Student Health Cover) is mandatory — buy before submitting your visa application",
          "You can work up to 48 hours per fortnight during semester, unlimited during scheduled breaks",
          "After graduation: Graduate Visa (subclass 485) gives 2–4 years of open work rights in Australia",
          "Australia has a minimum wage of AUD 23.23/hour — part-time work is genuinely supplementary income",
        ],
        outcome: "Graduate → subclass 485 Graduate Visa (2–4 years work rights) → accumulate points for SkillSelect → Expression of Interest (EOI) → invitation → Skilled Independent Visa (subclass 189) or state-sponsored (subclass 190) → Permanent Residency.",
      },
      masters: {
        intro: "A master's degree in Australia is one of the most reliable paths to permanent residency for Nigerians. The logic is simple: study in a field on Australia's Medium and Long-term Strategic Skills List (MLTSSL), graduate, get a 2–4 year Graduate Visa (subclass 485), work in your field, accumulate points (age, English, qualifications, experience), lodge an Expression of Interest through SkillSelect, get invited, apply for PR. Thousands of Nigerians have followed this exact sequence.",
        firstSteps: [
          { action: "Choose your field strategically — check the MLTSSL and STSOL skills lists", detail: "Go to immi.homeaffairs.gov.au and search for the Medium and Long-term Strategic Skills List (MLTSSL). Occupations on this list give you access to the subclass 189 (independent PR) pathway. High-demand fields for Nigerians: Nursing, Engineering (Civil, Mechanical, Electrical), IT (Software Engineer, Cybersecurity), Accounting, Social Work, Teaching. If your field is on the MLTSSL, your post-study work visa can be 3 years instead of 2." },
          { action: "Take IELTS Academic — target 7.0 overall (some programs accept 6.5)", detail: "For the eventual PR application through SkillSelect, you need at minimum 'Competent English' (IELTS 6.0 each band). For points: 'Proficient English' (IELTS 7.0 each band) gives you 10 extra points, 'Superior English' (IELTS 8.0 each band) gives 20 extra points. Take the test seriously — your score affects your PR points, not just your university admission." },
          { action: "Apply to 3–5 universities — target programs with strong industry connections", detail: "Strong master's programs for Nigerian students: UNSW (Engineering, Business), University of Melbourne (all disciplines), Monash (IT, Engineering, Health), UQ (Mining, Environmental, Health Sciences), ANU (Policy, Sciences, Economics), University of Sydney (Business, Law, Health). Apply through each university's online portal. Deadlines: February/March for Semester 1 (February start), July/August for Semester 2 (July start)." },
          { action: "Once admitted: pay deposit, receive eCoE, apply for subclass 500 student visa", detail: "Pay tuition deposit (AUD 2,000–5,000), receive eCoE from university, purchase OSHC insurance, prepare financial evidence (AUD 21,041 living costs + tuition + travel), write Genuine Student Requirement statement. Apply on ImmiAccount. Visa fee: AUD 710. Processing: 4–6 weeks typically." },
          { action: "Plan your skills assessment before or during your degree — don't wait until after", detail: "For PR through SkillSelect, your occupation must be assessed by the relevant Australian skills authority. For IT: ACS (Australian Computer Society). For Engineering: Engineers Australia. For Accounting: CPA Australia or CAANZ. For Nursing: AHPRA. Start this process in your final year — assessments take 3–6 months. Having a positive skills assessment ready when you finish your degree saves months." },
        ],
        keyFacts: [
          "Graduate Visa (subclass 485): 2 years for most; 3 years if your degree is in an MLTSSL occupation; 4 years if you studied in a regional area",
          "SkillSelect points: 65 points minimum to be invited (in practice, 80–90 points are competitive for popular occupations)",
          "Points for age: 25–32 years = 30 points (maximum) — apply while young",
          "Skills assessment is occupation-specific — check your assessing authority before choosing your program",
          "State nomination (subclass 190) adds 5 points and is often easier to get than subclass 189 — worth exploring",
        ],
        outcome: "Masters → subclass 485 (2–4 years) → skills assessment + SkillSelect EOI → invitation → subclass 189 (permanent residency) or subclass 190 (state-sponsored PR). After 4 years as a PR holder, you can apply for Australian citizenship.",
      },
      phd: {
        intro: "Australian PhD programs are 3–4 years and the vast majority of international PhD students receive full scholarships through the Research Training Program (RTP). If you receive an RTP scholarship, your tuition is waived and you receive a living stipend of approximately AUD 32,000/year tax-free. This is genuine funding — not a loan, not a work obligation beyond normal research duties. You apply for PhD and scholarship simultaneously in most cases. The student visa (subclass 500) covers PhD students, and after graduation you qualify for a Graduate Visa of up to 4 years.",
        firstSteps: [
          { action: "Find a supervisor first — this is the most important step", detail: "Australian PhD applications are supervisor-driven. Before applying formally, identify professors whose research aligns with yours, read their recent publications, and email them with a 1-page research proposal + CV + transcripts. A supervisor's agreement to take you on significantly strengthens your formal application and scholarship bid. Check university research staff pages, Google Scholar, and ResearchGate. Without a supervisor, your application is much weaker." },
          { action: "Apply for both PhD admission and RTP scholarship simultaneously", detail: "Go to the university's graduate research school website. Most Australian universities have a single application form for PhD admission + scholarship. Key documents: research proposal (2,000–5,000 words depending on university), CV, transcripts and degree certificates, IELTS result, 2–3 academic references, supervisor's support letter. Competitive RTP scholarship applications are ones with strong research proposals and clear supervisor support." },
          { action: "Take IELTS Academic — target 6.5 overall (some require 7.0)", detail: "PhD programs typically require IELTS 6.5 overall with no band below 6.0. ANU and University of Melbourne require 7.0 for some programs. Book through British Council or IDP Nigeria. PTE Academic is an alternative." },
          { action: "After admission and scholarship offer: apply for subclass 500 student visa", detail: "With your offer letter and scholarship letter, apply on ImmiAccount. PhD scholarship holders get a fee exemption letter in place of eCoE for OSHC. Financial evidence is simplified if scholarship covers living costs — show scholarship letter. Visa fee: AUD 710. Processing: 4–8 weeks." },
          { action: "Arrive and register with your university and the Australian Taxation Office (ATO)", detail: "RTP stipends are tax-free, but any additional income (tutoring, consulting) is taxable. Get a Tax File Number (TFN) from the ATO within weeks of arriving. Open an Australian bank account (Commonwealth Bank, ANZ, NAB, Westpac — all have international student accounts). Register with Medicare if your country has a reciprocal health agreement with Australia — Nigeria does not, so maintain OSHC." },
        ],
        keyFacts: [
          "RTP (Research Training Program) scholarship: tuition waiver + AUD ~32,000/yr stipend — tax-free",
          "PhD duration: 3–4 years. Most RTP scholarships are for 3.5 years with a 6-month extension possible",
          "After PhD: Graduate Visa subclass 485 — up to 4 years if you studied in a regional area, 2 years otherwise",
          "PhD students can work up to 48 hours per fortnight — many do tutoring (AUD 40–60/hour) for extra income",
          "Skills assessment for PR: a completed Australian PhD often counts as evidence of the required qualifications for SkillSelect",
        ],
        outcome: "PhD + RTP scholarship → subclass 485 Graduate Visa (2–4 years) → skills assessment → SkillSelect EOI → PR. A completed Australian PhD is one of the strongest foundations for a SkillSelect application — it contributes qualification points and demonstrates research ability.",
      },
      work: {
        intro: "Australia has two main employer-sponsored work visa pathways for Nigerians: the Temporary Skill Shortage visa (subclass 482) for employer-sponsored roles, and the Skilled Independent visa (subclass 189) through SkillSelect for people who don't need an employer to sponsor them. The 482 is faster but ties you to one employer. The 189 is permanent residency from day one but requires meeting a points threshold and being invited. Most Nigerians who come as skilled workers start with 482 and transition to 186 (Employer Nomination Scheme — permanent) after 2 years.",
        firstSteps: [
          { action: "Check if your occupation is on the relevant skills list", detail: "Go to immi.homeaffairs.gov.au. For subclass 189 (independent PR): your occupation must be on the MLTSSL. For subclass 482 (temporary employer-sponsored): occupation must be on the MLTSSL or STSOL (Short-term Skilled Occupation List). For subclass 190 (state-sponsored): each state has its own occupation list — check your target state's list. Key in-demand occupations for Nigerians: Software Engineer, Registered Nurse, Civil Engineer, Accountant, Medical Officer, Construction Manager, Social Worker." },
          { action: "Get a skills assessment from the relevant assessing authority", detail: "This is mandatory for both employer-sponsored and independent pathways. Each occupation has a designated assessing authority: IT → ACS (Australian Computer Society — myacs.com.au); Engineering → Engineers Australia (engineersaustralia.org.au); Accounting → CPA Australia or CAANZ; Nursing → AHPRA; Medicine → AMC (Australian Medical Council); Social Work → AASW. Assessment takes 3–6 months and costs AUD 500–900. You need: degree certificates, transcripts, employment references (detailed, on company letterhead), and IELTS." },
          { action: "Submit an Expression of Interest (EOI) through SkillSelect", detail: "Go to immi.homeaffairs.gov.au → SkillSelect. Create an EOI online. You input your points score (age, English, qualifications, work experience, partner skills, state nomination, regional study). The minimum to be considered is 65 points. In practice, most popular occupations (Software Engineer, Accountant) require 80–90+ points to receive an invitation. EOIs are ranked by points score and dated — higher points = invited first. Invitations are sent in monthly rounds." },
          { action: "For employer-sponsored (subclass 482): secure a job offer from an approved sponsor", detail: "Your Australian employer must be an approved 482 sponsor. Large Australian companies (Deloitte, PwC, BHP, Commonwealth Bank, Telstra, Rio Tinto) are already approved. Smaller companies can apply to become sponsors — takes 4–8 weeks. Job search: seek.com.au, linkedin.com/jobs (Australia), indeed.com.au, ethicaljobs.com.au (for social sector). Once you have a job offer, your employer nominates you and you apply for the 482 visa. Processing: 2–6 months." },
          { action: "After invitation from SkillSelect: lodge your visa application within 60 days", detail: "After receiving an invitation to apply for subclass 189 or 190, you have 60 days to lodge your full visa application. Documents: skills assessment, IELTS (Competent English minimum — all bands 6.0+), police clearance (Nigerian Police Force + Interpol clearance), health examination (by an approved panel physician — book at immi.homeaffairs.gov.au/help-support/glossary/panel-physician), passport, employment reference letters, proof of qualifications. Visa fee: AUD 4,640 for primary applicant (189)." },
        ],
        keyFacts: [
          "Subclass 189: permanent residency from day one — no employer required, but needs SkillSelect invitation",
          "Subclass 482: employer-sponsored, temporary (2–4 years), but can transition to permanent via subclass 186",
          "Points score: 65 minimum, 80–90+ competitive for popular occupations. Check immi.homeaffairs.gov.au/points calculator",
          "English requirement: Competent English (IELTS 6.0 each band minimum). Proficient (7.0 each band) = +10 points",
          "Health examination and police clearance are mandatory — allow 4–6 weeks for Nigerian police clearance",
        ],
        outcome: "Subclass 189/190 → Permanent Residency from day of grant → after 4 years as PR → apply for Australian citizenship. Subclass 482 → 2 years employment → subclass 186 Employer Nomination Scheme → Permanent Residency.",
      },
      visitor: {
        intro: "Australia's visitor visa for Nigerians is the subclass 600 (Visitor Visa — Tourist stream). Unlike Schengen countries, Australia does not have a visa-on-arrival or electronic travel authority (ETA) for Nigerian passport holders — you must apply in advance through ImmiAccount online. The application is assessed by the Department of Home Affairs. Approval rates for Nigerians are not publicly published, but strong financial evidence and clear ties to Nigeria significantly improve chances.",
        firstSteps: [
          { action: "Apply online through ImmiAccount at immi.homeaffairs.gov.au", detail: "Create an account at immi.homeaffairs.gov.au. Select 'Visitor' → subclass 600 → Tourist stream. Complete the application form online. You will be asked about: purpose of visit, intended length of stay, funds available, employment in Nigeria, family ties, previous travel history, any previous visa refusals. Be accurate and thorough — inconsistencies are a common reason for refusal." },
          { action: "Prepare your supporting documents", detail: "Required documents: Nigerian passport (minimum 6 months validity beyond intended return date), recent passport photographs, bank statements (6 months showing consistent balance — recommended minimum ₦1,000,000+), employment letter on company letterhead stating your position, salary, and approved leave dates, business registration documents if self-employed (CAC certificate, tax clearance, 6 months business bank statements), evidence of accommodation in Australia (hotel booking or invitation letter from host with proof of Australian address and status), return flight booking, travel itinerary showing planned activities." },
          { action: "Pay the visa application fee", detail: "Fee: AUD 190 (approximately ₦120,000 at current rates). Paid online by credit/debit card when submitting the application. The fee is non-refundable even if refused. No VFS Global for Australian visitor visas — it is entirely online through ImmiAccount." },
          { action: "Submit health and character documents if requested", detail: "The Department of Home Affairs may request a health examination (by an approved panel physician) or police clearance after you submit. This is more common for longer stays or if you have previously lived in certain countries. Respond to any requests promptly — delays in responding can result in the application being refused." },
          { action: "Track your application and respond promptly to any requests", detail: "Track through ImmiAccount. Standard processing: 20–35 days. Can be longer during peak periods or if additional checks are required. You will receive a grant notification by email with a visa label to print. The visa conditions will specify: maximum stay per visit (3 or 6 months), number of entries (single or multiple), and whether you can work (visitor visas do not allow work)." },
        ],
        keyFacts: [
          "No VFS Global for Australian visitor visas — apply entirely online through ImmiAccount",
          "Visa fee: AUD 190 — non-refundable regardless of outcome",
          "Processing: 20–35 days standard — apply at least 6 weeks before travel",
          "Strong financial evidence and clear employment ties to Nigeria are the most important factors",
          "Australian visitor visas do not allow you to work — including remote work for overseas employers",
        ],
        outcome: "A granted subclass 600 visitor visa is typically valid for 12 months from grant date, with a maximum stay of 3 or 6 months per visit. Multiple-entry is possible but not guaranteed on a first application.",
      },
    },

    visa: {
      undergrad: `**Australia Student Visa (Subclass 500) — Undergraduate**

**How It Works**
The Australian student visa (subclass 500) is applied for entirely online through ImmiAccount. There is no embassy appointment, no VFS Global, and no paper forms. You apply, upload documents, pay the fee, and wait for a decision by email.

**The Core Document: eCoE**
Your Electronic Confirmation of Enrolment (eCoE) is issued by your university after you accept your offer and pay your deposit. It contains a unique reference number. Your student visa application cannot proceed without it. Keep it.

**Genuine Student Requirement (GSR)**
This replaced the old Genuine Temporary Entrant (GTE) requirement. You must demonstrate that your primary purpose in coming to Australia is to study — not to migrate permanently via the student route. Write a clear, honest statement covering: why you chose Australia and this specific course, why this course is relevant to your career goals, your ties to Nigeria (family, job, property), your academic background, and your financial situation. Vague or template answers are identified and can lead to refusal.

**Financial Requirements**
You must demonstrate funds for:
- Living costs: AUD 21,041/year
- Annual course tuition fees (stated on your eCoE)
- Travel costs: AUD 2,000 (if not already shown on your application)
- If bringing a partner: AUD 7,362 additional
- If bringing a child: AUD 3,152 per child additional

Acceptable evidence: personal bank statements (6 months), parent/sponsor bank statements, scholarship award letter, GIC-equivalent accounts. All statements must show the funds have been held consistently — a sudden large deposit is flagged.

**OSHC — Overseas Student Health Cover**
OSHC is mandatory before you can be granted a student visa. It is a health insurance policy specifically for international students in Australia. Cost: approximately AUD 600–750/year for a single student. Providers: Medibank, Bupa, AHM, CBHS, nib. Purchase online before submitting your visa application. Your eCoE from the university may indicate which provider they work with.

**Working Rights**
On a subclass 500 student visa:
- Up to 48 hours per fortnight (roughly 24 hours/week) during semester
- Unlimited hours during scheduled university breaks (holidays between semesters)
- Partners of student visa holders can also work (unlimited if your course is at master's or PhD level)
- Australia's minimum wage: AUD 23.23/hour — part-time work is real income

**After Graduation: Graduate Visa (Subclass 485)**
This is why Australia works for Nigerians. After completing your degree, you apply for the subclass 485 Graduate Visa — open work rights anywhere in Australia for:
- 2 years: most bachelor's and master's degrees
- 3 years: if your occupation is on the MLTSSL
- 4 years: if you studied in a regional area of Australia
- 5 years: if you completed a PhD at an Australian institution

You cannot apply for 485 if you are still in Australia on a student visa without first completing your course. Apply within 6 months of your course completion.`,

      masters: `**Australia Student Visa (Subclass 500) — Master's**

**Why This Path Works**
Masters → subclass 485 (2–4 years open work) → SkillSelect points → PR invitation → subclass 189 or 190. This is the most commonly completed immigration pathway by African graduates in Australia, including thousands of Nigerians.

**Strategic Field Selection**
Before choosing your master's program, check the Medium and Long-term Strategic Skills List (MLTSSL) at immi.homeaffairs.gov.au. If your occupation is on the MLTSSL, your subclass 485 post-study work visa is 3 years instead of 2. Fields on the MLTSSL that Nigerians commonly study: Software and Applications Programmer, Civil Engineer, Mechanical Engineer, Registered Nurse, Accountant (General), ICT Business Analyst, Social Worker, Construction Project Manager.

**Skills Assessment: Start Early**
Do not wait until after graduation to start your skills assessment. Each occupation has a designated assessing authority. For IT: ACS (myacs.com.au). For Engineering: Engineers Australia. For Accounting: CPA Australia or CAANZ. For Nursing: AHPRA. Skills assessments take 3–6 months. Starting in your final semester means you have your assessment ready when your student visa expires — and can apply for subclass 485 immediately.

**SkillSelect Points Calculation**
Points are assessed at time of invitation, not application. Key point sources:
- Age 25–32: 30 points | Age 33–39: 25 points | Age 40–44: 15 points
- Bachelor's or higher: 15 points
- Proficient English (IELTS 7.0 each band): 10 points | Superior (8.0 each band): 20 points
- 3 years skilled work experience (Australian): 5 points | 5 years: 10 points | 8 years: 15 points
- Australian study of at least 2 years: 5 points
- Study/work in a regional area: up to 5 extra points
- State nomination (subclass 190): 5 extra points
- Partner with competent English: 5 points

A 29-year-old with a master's, IELTS 8.0, and 3 years Australian work experience scores: 30 + 15 + 20 + 5 + 5 = 75 points — competitive for many occupations.

**Visa Application Process (Same as undergrad)**
Accept offer → pay deposit → receive eCoE → purchase OSHC → write Genuine Student Requirement statement → apply on ImmiAccount → pay AUD 710 → upload documents → wait 4–6 weeks for decision → receive grant by email.

**After Graduation**
Apply for subclass 485 within 6 months of course completion. You must be in Australia when you apply. The 485 gives you open work rights — any employer, any location, any occupation. Use this time to build Australian work experience (critical for SkillSelect points) and lodge your EOI.`,

      phd: `**Australia PhD — Research Training Program (RTP) Scholarship**

**The RTP Scholarship**
The Research Training Program (RTP) is funded by the Australian government and administered by universities. It provides:
1. Full tuition fee offset — you pay no tuition
2. Living allowance stipend — approximately AUD 32,192/year (2024 rate), tax-free
3. Relocation allowance — one-time, typically AUD 1,000–2,000
4. Thesis examination costs covered

RTP scholarships are competitive but not as elite as they sound — Australia has a genuine need for research capacity and actively funds international PhD students. If you have a first-class degree, strong research experience, and a willing supervisor, your chances are real.

**University-specific Additional Scholarships**
Many universities top up RTP scholarships with their own awards. UNSW, University of Melbourne, and ANU offer additional top-up stipends of AUD 5,000–10,000/year for high-achieving PhD candidates. Check each university's research scholarship page after receiving an RTP offer.

**Finding a Supervisor**
This is the most critical step. Australian PhD admission is heavily supervisor-dependent. The right approach:
1. Search Google Scholar for researchers in your field at Australian universities
2. Read 2–3 of their recent papers
3. Email them a short, personalised message: introduce yourself, state which specific paper of theirs you found compelling, explain how your research interests align, attach your CV and transcripts
4. Ask if they have capacity to supervise a PhD student and whether they have or expect RTP funding

A positive response from a supervisor unlocks the formal application pathway. A cold formal application without supervisor contact is much weaker.

**Subclass 500 for PhD Students**
PhD students apply for the same subclass 500 student visa. If you have an RTP scholarship, your scholarship letter serves as evidence of funds — you don't need to show bank statements for living costs. OSHC is still required. Visa fee: AUD 710.

**After PhD: Subclass 485**
After completing your PhD, you qualify for a subclass 485 Graduate Visa:
- 4 years if you studied in a regional area
- 2–3 years otherwise
- If you transition directly to skilled work, your employer may sponsor a 482 and eventually 186 (permanent)

A completed Australian PhD contributes 15 qualification points to SkillSelect and demonstrates the academic credential for most professional occupation assessments. Many PhD graduates receive direct job offers from Australian companies or government agencies during their final year.`,

      work: `**Australia Skilled Migration — Subclass 189, 190, and 482**

**The Three Main Pathways**

**Subclass 189 — Skilled Independent (Permanent)**
No employer required. Points-based. You submit an EOI through SkillSelect, wait for an invitation, and apply. PR from day one. Occupation must be on the MLTSSL. Minimum 65 points — in practice 80–90+ for competitive occupations. Visa fee: AUD 4,640.

**Subclass 190 — State-Sponsored (Permanent)**
Same as 189 but you are nominated by an Australian state or territory. State nomination adds 5 points to your score and each state has its own occupation list and selection criteria (some states prioritise in-state residence, some accept offshore applications). States: NSW, VIC, QLD, WA, SA, TAS, ACT, NT. Each state's Department of Home Affairs page lists current nomination requirements. Visa fee: AUD 4,115.

**Subclass 482 — Temporary Skill Shortage (Employer-Sponsored)**
Your Australian employer nominates you for a temporary work visa. 2-year visa for STSOL occupations, 4 years for MLTSSL. After 3 years on a 482 in an MLTSSL occupation, you can apply for subclass 186 (permanent employer nomination). This is the fastest way to get to Australia if you have a job offer but not enough points for SkillSelect. Salary requirement: at least the Temporary Skilled Migration Income Threshold (TSMIT) — AUD 73,150/year (2024).

**Skills Assessment — The First Gate**
Every skilled migration pathway requires a positive skills assessment from your occupation's designated authority. This is non-negotiable. Start this before everything else.

For Software Engineers and IT professionals — ACS (Australian Computer Society):
- Skills assessment application at myacs.com.au
- Required: degree transcripts, detailed employment references (must specify your tasks, technologies used, and hours/week), IELTS result
- Processing: 3–4 months, fee AUD 520
- ACS assesses whether your qualifications and experience meet Australian standards for your nominated ANZSCO occupation code

For Engineers (Civil, Mechanical, Electrical, Chemical) — Engineers Australia:
- CDR (Competency Demonstration Report) — a formal document you write yourself demonstrating your engineering competencies through 3 career episodes
- IELTS: 6.0 each band minimum (Superior — 7.0+ — preferred)
- Processing: 3–6 months, fee AUD 800–1,000
- CDR writing is a specific skill — many engineers hire agents to help structure it, but the content must be original

For Accountants — CPA Australia or CAANZ (Chartered Accountants Australia and New Zealand):
- Transcript-based assessment. Strong preference for degrees with specific accounting subject coverage
- Processing: 4–8 weeks, fee AUD 500–700

**SkillSelect EOI**
After positive skills assessment, submit your EOI at immi.homeaffairs.gov.au/skills. Select your occupation and visa subclass. Input your points. You can nominate up to 5 states for nomination. Your EOI stays active for 2 years. Invitations are sent in monthly rounds — the highest-scoring EOIs (by points, then by date submitted) are invited first.

**After Invitation**
You have 60 days from invitation to lodge the full visa application. Required:
- Skills assessment (must be current — check validity period)
- IELTS (all bands 6.0+ for competent English — higher for more points)
- Nigerian Police Clearance (apply at the Nigerian Police Force headquarters, takes 2–4 weeks — also get an Interpol clearance for some applications)
- Health examination (approved panel physician — listed at immi.homeaffairs.gov.au/help-support/glossary/panel-physician)
- Employment references (detailed, on official letterhead)
- Proof of qualifications
- Passport

**Bridging Visas**
If you are already in Australia on another visa and lodge a skilled migration application, you receive a Bridging Visa A (BVA) automatically — this lets you stay legally in Australia while your application is being processed.`,

      visitor: `**Australia Visitor Visa (Subclass 600) — Tourist Stream**

**Entirely Online**
Unlike UK or Schengen visas, there is no VFS Global or embassy appointment for Australian visitor visas. The entire application is submitted online at immi.homeaffairs.gov.au through your ImmiAccount. You upload documents, pay the fee, and receive the decision by email. The visa is electronic — there is no sticker in your passport. When you arrive in Australia, immigration can see your visa electronically.

**Why Applications Are Refused**
Australian visitor visa refusals for Nigerians most commonly cite:
1. Insufficient financial evidence — bank statements showing low or inconsistent balances
2. Weak ties to Nigeria — no stable employment, property, or family commitments
3. Unclear purpose of visit — vague answers about why you want to visit and who you are seeing
4. Previous immigration violations in any country
5. Health or character concerns

Address all five clearly in your application before submitting.

**Financial Evidence**
There is no officially published minimum bank balance. In practice, consular officers assess whether you can cover the cost of your trip without working illegally. For a 4-week trip to Australia, demonstrating AUD 5,000–8,000 (approximately ₦3.2–5.1 million) in accessible personal funds is a reasonable baseline. The money should have been in your account for at least 6 months — not a recent lump sum deposit.

**Showing Ties to Nigeria**
This is critical. The visa officer must believe you will return to Nigeria when your visit ends. Strong ties: a permanent job (with employment letter and payslips), property ownership, family dependants in Nigeria (spouse, children), business ownership (with CAC registration and active business bank statements). Weak ties: no job, no dependants, no property, first-time traveller.

**Invitation Letters**
If you are visiting family or friends in Australia, get a letter from your host that includes: their full name, Australian address, immigration status (Australian citizen/PR/visa holder — include a copy of their passport or visa), relationship to you, details of your planned visit (dates, accommodation), and a statement that they will support you during your stay. This does not guarantee approval but strengthens your application.

**Health and Character**
Most tourist applications do not require a health exam upfront. However, if the Department of Home Affairs suspects a health condition or if you have spent extended time in certain countries, they may request one. Character: you must declare any criminal convictions. A past conviction does not automatically mean refusal, but concealing one does.

**Processing Time and Validity**
Standard processing: 20–35 days. Apply at least 6–8 weeks before travel.
Typical grant: valid for 12 months from grant date, with stays of up to 3 months per visit (some are granted 6 months — depends on the officer's assessment). Multiple entries within the validity period.

**Fees**
AUD 190 (approximately ₦120,000) paid online by card. Non-refundable.`,
    },

    timeline: {
      undergrad: [
        { month: "12 months before", task: "Research English-taught undergraduate programs at Australian universities. Check CRICOS registration at cricos.education.gov.au — only CRICOS-registered institutions can enrol international students" },
        { month: "10–11 months before", task: "Take IELTS Academic — target 6.5 overall. Book at IDP or British Council Nigeria" },
        { month: "9–10 months before", task: "Gather certified WAEC/NECO results, transcripts, and any other required documents" },
        { month: "7–9 months before", task: "Apply to 4–6 universities directly. Deadlines vary: most have two intakes (February and July). Apply October–November for February start; April–May for July start" },
        { month: "5–7 months before", task: "Receive offers. Accept your preferred offer, pay tuition deposit (AUD 2,000–5,000). University issues eCoE" },
        { month: "4–6 months before", task: "Purchase OSHC insurance. Write Genuine Student Requirement statement. Apply for subclass 500 on ImmiAccount. Pay AUD 710 fee" },
        { month: "2–4 months before", task: "Receive visa grant by email. Book flights. Arrange accommodation (university halls or private rental)" },
        { month: "Arrival week", task: "Complete university orientation. Get a Tax File Number (TFN) from the ATO. Open Australian bank account" },
        { month: "During study", task: "Work up to 48 hrs/fortnight during semester. Start planning skills assessment in your final year" },
        { month: "After graduation", task: "Apply for subclass 485 Graduate Visa within 6 months of course completion. Must be in Australia when you apply" },
      ],
      masters: [
        { month: "14 months before", task: "Research programs. Cross-check your target occupation against the MLTSSL at immi.homeaffairs.gov.au" },
        { month: "12 months before", task: "Take IELTS Academic — target 7.0 overall (affects both admission and future SkillSelect points)" },
        { month: "10 months before", task: "Get degree certificate and transcripts certified by your Nigerian university registrar" },
        { month: "8–9 months before", task: "Apply to 3–5 Australian universities. February intake deadline: October/November. July intake: April/May" },
        { month: "6–8 months before", task: "Accept offer, pay deposit, receive eCoE. Purchase OSHC. Write GSR statement. Apply for subclass 500 on ImmiAccount" },
        { month: "4–6 months before", task: "Receive visa grant. Book flights. Arrange accommodation. Register for orientation" },
        { month: "Final year of study", task: "Begin skills assessment with your assessing authority (ACS, Engineers Australia, CPA, etc.) — takes 3–6 months" },
        { month: "After graduation", task: "Apply for subclass 485 Graduate Visa. Lodge SkillSelect EOI once skills assessment is complete" },
        { month: "During subclass 485", task: "Build Australian work experience. Improve IELTS if needed. Watch SkillSelect invitation rounds for your occupation" },
        { month: "After invitation", task: "Lodge subclass 189 or 190 application within 60 days. Complete health exam and police clearance" },
      ],
      phd: [
        { month: "Ongoing", task: "Search for PhD vacancies and supervisor opportunities on university research websites, FindAPhD.com, and seek.com.au" },
        { month: "Contact phase", task: "Email potential supervisors with personalised research proposal + CV + transcripts. Allow 2–4 weeks per email" },
        { month: "Application", task: "Formal PhD + RTP scholarship application through university graduate research portal. Documents: research proposal, references, transcripts, IELTS" },
        { month: "Offer received", task: "Receive conditional offer + scholarship letter. University issues eCoE. Purchase OSHC" },
        { month: "Visa application", task: "Apply for subclass 500 on ImmiAccount. Scholarship letter covers financial evidence. Processing: 4–8 weeks" },
        { month: "Arrival", task: "University orientation. Get TFN. Open bank account. Register with your department and primary supervisor" },
        { month: "Year 1", task: "Confirm enrolment review (milestone). Begin building research output. Explore tutoring for supplementary income" },
        { month: "Years 2–3", task: "Research, publications, conferences. Begin thinking about post-PhD pathway (485, skills assessment, employer)" },
        { month: "Submission/Completion", task: "Submit thesis. Apply for subclass 485 within 6 months of completion. Begin SkillSelect EOI or job search" },
      ],
      work: [
        { month: "Skills assessment", task: "Start skills assessment with your authority (ACS, Engineers Australia, CPA, AHPRA etc.) — takes 3–6 months, do this first" },
        { month: "SkillSelect EOI", task: "Submit Expression of Interest through SkillSelect at immi.homeaffairs.gov.au. Calculate your points accurately" },
        { month: "State nomination (if applicable)", task: "Check each state's occupation and nomination criteria. Apply for state nomination if your occupation is on their list" },
        { month: "Invitation received", task: "Receive invitation to apply for subclass 189 or 190. You have 60 days to lodge full application" },
        { month: "Visa lodgement", task: "Gather: police clearance (allow 4 weeks for Nigerian clearance), health exam, employment references, transcripts, IELTS" },
        { month: "Processing", task: "Subclass 189/190 processing: 6–18 months. You may receive a Bridging Visa if in Australia" },
        { month: "Grant", task: "Receive PR grant. If subclass 189: activate by entering Australia before the activation deadline (usually within 12 months)" },
        { month: "Employer-sponsored (482)", task: "Employer submits sponsorship and nomination. You apply for 482 visa. Processing: 2–6 months. 3 years service → eligible for 186 (permanent)" },
      ],
      visitor: [
        { month: "8 weeks before travel", task: "Create ImmiAccount at immi.homeaffairs.gov.au. Begin gathering documents" },
        { month: "6–7 weeks before", task: "Gather: 6 months bank statements, employment letter, return flight booking, hotel/accommodation proof, travel itinerary" },
        { month: "5–6 weeks before", task: "Complete online application on ImmiAccount. Upload all documents. Pay AUD 190 fee by card" },
        { month: "3–5 weeks before", task: "Department of Home Affairs reviews application. Standard processing: 20–35 days. Track via ImmiAccount" },
        { month: "Visa granted", task: "Receive email confirmation. Visa is electronic — no sticker needed. Print or save the grant notification" },
        { month: "Day of travel", task: "Australian Border Force can see your visa electronically. Bring your passport + printed grant notice. Declare items on incoming passenger card" },
        { month: "In Australia", task: "Do not work (including remote work). Do not overstay your permitted stay period noted in the grant. Keep return ticket confirmed" },
      ],
    },

    tips: {
      undergrad: [
        "Only apply to CRICOS-registered institutions — check cricos.education.gov.au before applying anywhere",
        "Your Genuine Student Requirement (GSR) statement is more important than most people realise — write it carefully and honestly",
        "OSHC is mandatory — buy it before submitting your visa application, not after",
        "Australia's minimum wage is AUD 23.23/hour — 48 hours per fortnight of casual work at a café or retail can cover a significant portion of living costs",
        "Sydney and Melbourne are the most expensive cities — consider Brisbane, Adelaide, or Perth for lower rent with still-strong job markets",
        "Apply for the subclass 485 Graduate Visa within 6 months of completing your course — you must be in Australia when you apply",
        "Check which occupations are on the MLTSSL before choosing your undergraduate specialisation if you intend to stay in Australia after graduating",
      ],
      masters: [
        "Choose your master's program based on MLTSSL occupation alignment — this determines your post-study work visa length and PR eligibility",
        "Start your skills assessment in your final semester — waiting until after graduation adds months of delay to your 485 and SkillSelect timeline",
        "IELTS 8.0 each band gives you 20 extra SkillSelect points compared to 6.0 — this can be the difference between waiting months and being invited",
        "State nomination (subclass 190) adds 5 points and is often easier to secure than a subclass 189 invitation for the same occupation",
        "Regional universities (Wollongong, Newcastle, Canberra, Geelong) often offer more affordable tuition and may give you regional study bonus points for SkillSelect",
        "The 485 Graduate Visa is open work rights — use every month of it to build Australian work experience for SkillSelect points",
        "Engage with your university's careers centre in your first year — not final year. Internships and graduate programs fill up early",
      ],
      phd: [
        "Email potential supervisors before applying formally — a supervisor's interest is the most important factor in a PhD application",
        "The RTP scholarship (tuition waiver + AUD 32,000/yr stipend) is tax-free — it is genuinely liveable in most Australian cities outside Sydney",
        "University top-up scholarships exist — UNSW, Melbourne, and ANU offer additional AUD 5,000–10,000/yr for competitive candidates. Ask",
        "PhD students can tutor undergraduates at AUD 40–60/hour — this is the most common and flexible way to earn extra income",
        "Australian PhDs typically have annual milestone reviews — take them seriously, they determine whether your scholarship continues",
        "A completed Australian PhD contributes 15 points to SkillSelect and is assessed positively by most skills assessing authorities",
        "The subclass 485 after a PhD is up to 4 years if you studied in a regional area — consider universities outside Sydney and Melbourne",
      ],
      work: [
        "Start your skills assessment before anything else — it is the first gate and takes 3–6 months",
        "For IT roles, ACS assessment requires detailed employment references — ask your previous employers now and keep them updated",
        "For Engineers Australia CDR, hire a professional engineer (not an agent) to review your Career Episodes for technical accuracy — but write the content yourself",
        "SkillSelect points decay with age — submit your EOI as young as possible (25–32 gives maximum 30 points)",
        "State nomination requirements change frequently — check each state's website directly rather than relying on third-party advice",
        "Seek.com.au and LinkedIn Australia are the main job boards — set up job alerts and apply consistently, not in bursts",
        "The 482 visa ties you to one employer — negotiate your employment contract carefully before accepting, as changing employer requires a new nomination",
      ],
      visitor: [
        "There is no VFS Global for Australian visitor visas — apply entirely online through ImmiAccount",
        "Consistent bank balance over 6 months is more persuasive than a high recent balance — a sudden large deposit is a red flag",
        "Write clear, specific answers for every application question — vague answers are a common reason for refusal",
        "If visiting a host in Australia, get a detailed invitation letter with their Australian residency documentation attached",
        "Previous Schengen, UK, or US visa grants help demonstrate travel history and immigration compliance — mention these",
        "AUD 190 fee is non-refundable — only apply when your documents are complete and strong",
        "Apply at least 6–8 weeks before travel — processing can take up to 45 days during peak periods",
      ],
    },

    universities: {
      undergrad: [
        { name: "University of Queensland (UQ)", location: "Brisbane, Queensland", known_for: "Strong in Sciences, Engineering, Business, Health. Brisbane is more affordable than Sydney/Melbourne. Large international student body. CRICOS provider.", avg_tuition: "AUD 32,000–42,000/yr", acceptance: "Moderately competitive", nigerian_community: "Small but growing" },
        { name: "Monash University", location: "Melbourne, Victoria", known_for: "Medicine, Engineering, Business, Law, Pharmacy. Multiple campuses including Malaysia campus. Large international student community. Strong industry links in Melbourne.", avg_tuition: "AUD 32,000–46,000/yr", acceptance: "Moderately competitive", nigerian_community: "Small" },
        { name: "University of New South Wales (UNSW)", location: "Sydney, New South Wales", known_for: "Engineering, Business (UNSW Business School), Law, Medicine, Computer Science. High graduate employment rates. Located in Sydney — largest Nigerian community in Australia.", avg_tuition: "AUD 38,000–52,000/yr", acceptance: "Competitive", nigerian_community: "Small but growing" },
        { name: "Macquarie University", location: "Sydney, New South Wales", known_for: "Finance, Business, Linguistics, Environmental Sciences. More accessible than UNSW/USyd. Strong industry partnerships.", avg_tuition: "AUD 28,000–38,000/yr", acceptance: "Moderately accessible", nigerian_community: "Very small" },
      ],
      masters: [
        { name: "University of Melbourne", location: "Melbourne, Victoria", known_for: "Consistently ranked top 3 in Australia. Melbourne Model — broad graduate-entry professional degrees. Strong across all disciplines. Excellent research environment. Very competitive.", avg_tuition: "AUD 40,000–52,000/yr", acceptance: "Very competitive", nigerian_community: "Very small" },
        { name: "University of New South Wales (UNSW)", location: "Sydney, New South Wales", known_for: "Engineering, IT, Business, Law. Fastest-rising Australian university. Strong industry connections in Sydney's tech and finance sectors. Active Nigerian students association.", avg_tuition: "AUD 38,000–50,000/yr", acceptance: "Competitive", nigerian_community: "Small" },
        { name: "Australian National University (ANU)", location: "Canberra, ACT", known_for: "Policy, International Relations, Economics, Sciences. Australia's only dedicated research university. Canberra is more affordable. Access to government and diplomatic sector.", avg_tuition: "AUD 35,000–48,000/yr", acceptance: "Very competitive", nigerian_community: "Very small" },
        { name: "University of Queensland (UQ)", location: "Brisbane, Queensland", known_for: "Mining Engineering, Environmental Science, Health Sciences, Business. Strong research output. Brisbane job market growing strongly. More affordable living than Sydney/Melbourne.", avg_tuition: "AUD 32,000–46,000/yr", acceptance: "Competitive", nigerian_community: "Small" },
        { name: "Monash University", location: "Melbourne, Victoria", known_for: "Engineering, IT, Medicine, Business, Education. Largest Australian university by enrolment. Strong graduate employment outcomes. Active international community.", avg_tuition: "AUD 34,000–48,000/yr", acceptance: "Competitive", nigerian_community: "Small" },
        { name: "University of Technology Sydney (UTS)", location: "Sydney, New South Wales", known_for: "IT, Design, Engineering, Business, Law. Strong industry-connected programs. Tech-focused curriculum. Strong startup and innovation ecosystem connections.", avg_tuition: "AUD 30,000–44,000/yr", acceptance: "Moderately competitive", nigerian_community: "Very small" },
      ],
      phd: [
        { name: "University of Melbourne", location: "Melbourne, Victoria", known_for: "Top Australian research university. Strong across all disciplines. Competitive RTP scholarship funding. Melbourne Research Scholarship (MRS) tops up RTP for outstanding candidates.", avg_tuition: "Fully funded via RTP — AUD ~32,000/yr stipend", acceptance: "Very competitive internationally", nigerian_community: "Very small" },
        { name: "Australian National University (ANU)", location: "Canberra, ACT", known_for: "Australia's only Group of Eight university dedicated to research. Strong in sciences, policy, economics, Asian studies. ANU University Research Scholarship available additionally to RTP.", avg_tuition: "Fully funded via RTP", acceptance: "Very competitive", nigerian_community: "Very small" },
        { name: "University of New South Wales (UNSW)", location: "Sydney, NSW", known_for: "Engineering, IT, Medicine, Law, Business. UNSW Scientia PhD Scholarship (top-up of AUD 10,000/yr + career development) available competitively.", avg_tuition: "Fully funded via RTP + possible UNSW Scientia top-up", acceptance: "Very competitive", nigerian_community: "Very small" },
        { name: "University of Queensland (UQ)", location: "Brisbane, QLD", known_for: "Life Sciences, Mining, Environmental Sciences, Medicine, Engineering. UQ Research Training Scholarship available. Brisbane more affordable than Sydney/Melbourne.", avg_tuition: "Fully funded via RTP", acceptance: "Competitive", nigerian_community: "Very small" },
      ],
      work: [],
    },

    scholarships: {
      undergrad: [
        { name: "Australia Awards Scholarships", amount: "Full tuition + living allowance + airfare + health cover — full scholarship", university: "Australian universities — managed by DFAT (Australian Department of Foreign Affairs and Trade)", deadline: "April 30 each year for Nigerian applicants — apply at dfat.gov.au/australiaawards", url: "https://www.dfat.gov.au/people-to-people/australia-awards/australia-awards-scholarships" },
        { name: "University of Queensland Global Excellence Scholarship", amount: "AUD 10,500 per year for the duration of your undergraduate degree", university: "University of Queensland (UQ)", deadline: "Applications considered with admission — apply by November for February intake", url: "https://scholarships.uq.edu.au/scholarship/uq-global-excellence-scholarship-uqges-undergraduate" },
        { name: "Destination Australia Program", amount: "AUD 15,000/yr — for study in regional Australia specifically", university: "Participating regional Australian universities — check destinationaustralia.gov.au", deadline: "Varies by university — check each institution", url: "https://www.destinationaustralia.gov.au/" },
      ],
      masters: [
        { name: "Australia Awards Scholarships", amount: "Full tuition + monthly living allowance + return airfare + OSHC — covers everything", university: "All Australian universities — for Nigerians specifically managed via DFAT Lagos office", deadline: "April 30 each year — dfat.gov.au/australiaawards. This is one of the most competitive and valuable scholarships available to Nigerians", url: "https://www.dfat.gov.au/people-to-people/australia-awards/australia-awards-scholarships" },
        { name: "Endeavour Leadership Program", amount: "AUD 272,500 maximum — covers tuition, living, travel, health — for postgraduate study and research", university: "Any Australian university — check dfat.gov.au for current availability", deadline: "Check dfat.gov.au annually — program availability varies", url: "https://www.dfat.gov.au/people-to-people/australia-awards" },
        { name: "UNSW International Scholarships", amount: "AUD 5,000–20,000 tuition reduction — varies by program and academic merit", university: "UNSW Sydney — applied for at time of admission", deadline: "Rolling — applied for with admission application", url: "https://www.unsw.edu.au/study/international/fees-and-scholarships/scholarships" },
        { name: "Monash International Merit Scholarship", amount: "AUD 10,000 per year — tuition reduction for high-achieving international students", university: "Monash University — applied for automatically when you apply for admission", deadline: "Applied automatically with Monash admission application — no separate form", url: "https://www.monash.edu/study/fees-scholarships/scholarships/find-a-scholarship/international-merit-scholarship" },
      ],
      phd: [
        { name: "Research Training Program (RTP) Scholarship", amount: "Full tuition waiver + AUD ~32,192/yr living stipend (tax-free) — the standard Australian PhD funding mechanism", university: "All Australian universities — applied for with PhD admission", deadline: "Rolling — applied for with PhD application. Quota is limited per university per year", url: "https://www.education.gov.au/research-training-program" },
        { name: "Australia Awards Scholarships (PhD)", amount: "Full funding including tuition, living, airfare, health cover — available for PhD study", university: "Any Australian university — managed by DFAT", deadline: "April 30 each year for Nigerian applicants", url: "https://www.dfat.gov.au/people-to-people/australia-awards/australia-awards-scholarships" },
        { name: "UNSW Scientia PhD Scholarship", amount: "RTP tuition waiver + AUD 42,000/yr stipend (RTP + AUD 10,000 top-up) + AUD 10,000 career development support", university: "UNSW Sydney — for outstanding PhD applicants in all fields", deadline: "Competitive — check unsw.edu.au/research/hdr/scholarships. Rolling intake", url: "https://www.unsw.edu.au/research/hdr/scholarships/scientia-phd-scholarship-scheme" },
        { name: "ANU University Research Scholarship (URS)", amount: "Full tuition waiver + AUD 32,192/yr stipend — ANU-funded top-up to RTP for outstanding candidates", university: "Australian National University (ANU)", deadline: "Rolling — applied for with PhD application at ANU", url: "https://www.anu.edu.au/study/scholarships/find-a-scholarship/anu-university-research-scholarship" },
      ],
      work: [],
    },

    embassy: {
      name: "Australian High Commission Abuja / Australian Consulate General Lagos",
      address: "High Commission: 48 Aguiyi Ironsi Street, Maitama, Abuja | Consulate: 14A Walter Carrington Crescent, Victoria Island, Lagos",
      phone: "Visitor visa applications are submitted online only — no walk-in. For consular queries: contact via homeaffairs.gov.au",
      note: "All visitor visa applications are submitted online through ImmiAccount at immi.homeaffairs.gov.au — there is no VFS Global or embassy appointment for tourist visas. Student and skilled migration applications are also submitted online. The High Commission in Abuja handles in-person services for Australian citizens and some complex cases. Skills assessments and visa applications do not require a visit to the High Commission.",
      website: "https://nigeria.highcommission.gov.au/abjn/home.html",
      visa_apply: "https://immi.homeaffairs.gov.au/",
      vfs: "https://immi.homeaffairs.gov.au/",
      official_immigration: "https://immi.homeaffairs.gov.au/",
      extra_links: [
        { label: "ImmiAccount — All Australian visa applications (student, visitor, skilled)", url: "https://immi.homeaffairs.gov.au/" },
        { label: "SkillSelect — Skilled migration EOI portal", url: "https://immi.homeaffairs.gov.au/skills/skillselect" },
        { label: "CRICOS — Verify your institution is registered for international students", url: "https://www.cricos.education.gov.au/" },
        { label: "Australia Awards Scholarships — Full funding for Nigerians", url: "https://www.dfat.gov.au/people-to-people/australia-awards/australia-awards-scholarships" },
        { label: "ACS — IT skills assessment for SkillSelect", url: "https://www.acs.org.au/msa/skills-assessment.html" },
        { label: "Engineers Australia — Engineering skills assessment and CDR", url: "https://www.engineersaustralia.org.au/portal/skills-assessment" },
        { label: "MLTSSL — Medium and Long-term Strategic Skills List", url: "https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-occupation-list" },
        { label: "Seek.com.au — Main Australian job search portal", url: "https://www.seek.com.au/" },
        { label: "Study in Australia — Official government study portal", url: "https://www.studyinaustralia.gov.au/" },
        { label: "Destination Australia — Scholarships for regional study", url: "https://www.destinationaustralia.gov.au/" },
      ],
    },
  },

};
