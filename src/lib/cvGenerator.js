import { jsPDF } from 'jspdf';

function addWrappedText(doc, text, x, y, maxWidth, lineHeight) {
  const lines = doc.splitTextToSize(text, maxWidth);
  doc.text(lines, x, y);
  return y + lines.length * lineHeight;
}

// ─── EU / SWEDISH STYLE ───────────────────────────────────────────────────────
function generateEUCV(profile, doc) {
  const pageW = 210;
  const sideW = 68;
  const mainX = sideW + 8;
  const mainW = pageW - mainX - 12;
  const sideX = 8;
  const sideContentW = sideW - 16;

  const navy  = [30, 50, 90];
  const white = [255, 255, 255];
  const dark  = [20, 20, 20];
  const mid   = [80, 80, 80];
  const pale  = [245, 247, 252];
  const accentLine = [30, 50, 90];

  // Sidebar background
  doc.setFillColor(...navy);
  doc.rect(0, 0, sideW, 297, 'F');

  // Photo placeholder circle
  const cx = sideW / 2, cy = 32, r = 18;
  doc.setFillColor(255, 255, 255, 0.15);
  doc.circle(cx, cy, r, 'F');
  doc.setTextColor(...white);
  doc.setFontSize(7);
  doc.setFont('helvetica', 'normal');
  doc.text('PHOTO', cx, cy - 2, { align: 'center' });
  doc.text('OPTIONAL', cx, cy + 4, { align: 'center' });

  // Name block
  doc.setTextColor(...white);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  const nameParts = (profile.full_name || 'Your Name').split(' ');
  doc.text(nameParts[0] || '', cx, 60, { align: 'center' });
  if (nameParts.length > 1) {
    doc.text(nameParts.slice(1).join(' '), cx, 67, { align: 'center' });
  }

  // Sidebar section helper
  let sy = 80;
  function sideSection(title) {
    doc.setFillColor(255, 255, 255, 0.12);
    doc.rect(sideX, sy, sideContentW, 0.4, 'F');
    sy += 4;
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(180, 200, 255);
    doc.text(title.toUpperCase(), sideX, sy);
    sy += 5;
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...white);
    doc.setFontSize(8);
  }

  // Contact
  sideSection('Contact');
  const contacts = [
    profile.city,
    profile.phone,
    profile.user_email,
    profile.linkedin_url,
  ].filter(Boolean);
  contacts.forEach(c => {
    const lines = doc.splitTextToSize(c, sideContentW);
    lines.forEach(l => { doc.text(l, sideX, sy); sy += 4.5; });
  });
  sy += 3;

  // Skills
  if (profile.skills?.length) {
    sideSection('Skills');
    profile.skills.slice(0, 12).forEach(s => {
      doc.setFillColor(255, 255, 255, 0.18);
      const tw = Math.min(doc.getTextWidth(s) + 6, sideContentW);
      doc.roundedRect(sideX, sy - 3.5, tw, 5.5, 1, 1, 'F');
      doc.text(s, sideX + 3, sy + 0.5);
      sy += 7;
    });
    sy += 2;
  }

  // Languages
  if (profile.languages?.length) {
    sideSection('Languages');
    profile.languages.forEach(l => { doc.text(l, sideX, sy); sy += 5; });
    sy += 2;
  }

  // Certifications in sidebar
  if (profile.certifications?.length) {
    sideSection('Certifications');
    profile.certifications.forEach(c => {
      const lines = doc.splitTextToSize(`${c.name} — ${c.issuer || ''} ${c.year || ''}`.trim(), sideContentW);
      lines.forEach(l => { doc.text(l, sideX, sy); sy += 4.5; });
    });
  }

  // ── MAIN AREA ──────────────────────────────────────────────────────────────
  let y = 20;

  function mainSection(title) {
    doc.setTextColor(...accentLine);
    doc.setFontSize(10.5);
    doc.setFont('helvetica', 'bold');
    doc.text(title, mainX, y);
    doc.setFillColor(...accentLine);
    doc.rect(mainX, y + 1.5, mainW, 0.4, 'F');
    y += 7;
    doc.setTextColor(...dark);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
  }

  // Summary
  if (profile.professional_summary) {
    mainSection('Profile');
    y = addWrappedText(doc, profile.professional_summary, mainX, y, mainW, 5);
    y += 7;
  }

  // Work experience
  if (profile.work_experience?.length) {
    mainSection('Work Experience');
    profile.work_experience.forEach(job => {
      if (y > 262) { doc.addPage(); y = 15; }
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(...dark);
      doc.text(job.job_title || '', mainX, y);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(...mid);
      const dateStr = `${job.start_date || ''} – ${job.is_current ? 'Present' : job.end_date || ''}`;
      doc.text(dateStr, pageW - 12, y, { align: 'right' });
      y += 5;
      doc.setFont('helvetica', 'italic');
      doc.setTextColor(...mid);
      doc.text(`${job.company || ''}${job.location ? ', ' + job.location : ''}`, mainX, y);
      y += 5;
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...dark);
      (job.achievements || []).filter(Boolean).forEach(ach => {
        if (y > 272) { doc.addPage(); y = 15; }
        doc.text('•', mainX, y);
        y = addWrappedText(doc, ach, mainX + 4, y, mainW - 4, 4.5);
        y += 1;
      });
      y += 5;
    });
  }

  // Education
  if (profile.education?.length) {
    if (y > 245) { doc.addPage(); y = 15; }
    mainSection('Education');
    profile.education.forEach(edu => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(...dark);
      doc.text(`${edu.degree || ''}${edu.field ? ', ' + edu.field : ''}`, mainX, y);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(...mid);
      doc.text(edu.year || '', pageW - 12, y, { align: 'right' });
      y += 5;
      doc.setFont('helvetica', 'italic');
      doc.text(edu.institution || '', mainX, y);
      if (edu.honors) { doc.text(`  ·  ${edu.honors}`, mainX + doc.getTextWidth(edu.institution || '') + 2, y); }
      y += 8;
    });
  }

  // Footer note
  doc.setPage(1);
  doc.setFontSize(6.5);
  doc.setTextColor(160, 160, 160);
  doc.text('European CV format — no date of birth required · Generated by MoveAbroad.ng', mainX, 292);
}

// ─── COVER LETTER GENERATOR ───────────────────────────────────────────────────
export function generateCoverLetter(profile, style, country, level) {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const pageW = 210;
  const margin = 22;
  const contentW = pageW - margin * 2;

  const TEMPLATES = {
    CA: {
      undergrad: {
        opening: `I am writing to apply for undergraduate admission to [Program Name] at [University Name]. As a Nigerian student with a strong academic background in [Subject Area], I am confident that [University Name]'s program is the ideal environment to develop the skills and knowledge I need to pursue my goal of [Career Goal].`,
        body1: `During my secondary education at [School Name], I consistently achieved [results/grades], demonstrating my ability to perform at a high level in demanding academic environments. My particular interest in [Subject Area] was sparked by [specific experience or project], which showed me how [connect to program]. I have also [any relevant activity, competition, or project in Nigeria].`,
        body2: `I chose [University Name] specifically because of [specific reason — program structure, faculty, reputation in this field, location]. Canada's commitment to international students and [University Name]'s diverse academic community align closely with my values and ambitions. After completing my degree, I intend to [specific post-graduation plan].`,
        closing: `I would welcome the opportunity to contribute to and learn from the [University Name] community. Thank you for considering my application. I look forward to hearing from you.`,
      },
      masters: {
        opening: `I am applying for admission to the [Program Name] at [University Name]. With a [degree] in [field] from [Nigerian University] and [X years of work experience in Y], I am ready to pursue advanced study that will deepen my expertise and position me to [professional goal].`,
        body1: `My undergraduate research focused on [thesis/project topic], where I [key finding or contribution]. This work, combined with my professional experience at [employer] where I [key achievement with metric if possible], has shown me the importance of [link to masters program focus area]. I am particularly drawn to [specific aspect of the program — module, research cluster, faculty member's work].`,
        body2: `I have reviewed the research of Professor [Name] on [topic] and believe there is direct alignment with my interest in [your research interest]. Canada's Post-Graduation Work Permit system also makes this an attractive destination — I intend to contribute to the Canadian [sector] industry before considering permanent residency through Express Entry.`,
        closing: `I am committed to making a meaningful contribution to [University Name]'s academic community. Thank you for your time and consideration. I look forward to the opportunity to discuss my application.`,
      },
      phd: {
        opening: `I am writing to express my strong interest in pursuing a PhD in [Department] at [University Name] under the supervision of Professor [Supervisor Name]. My proposed research on [research topic] directly aligns with Professor [Name]'s work on [their research area], and I believe [University Name] provides the ideal environment to carry this work forward.`,
        body1: `My academic background includes a [degree] from [university] where my thesis examined [thesis topic and key findings]. I have [list publications, conference presentations, or research outputs]. This experience has given me a strong foundation in [methodology/field] and a clear sense of the research questions I want to pursue at doctoral level.`,
        body2: `My proposed research aims to [research question and methodology in 2–3 sentences]. I am specifically drawn to Professor [Name]'s work on [paper/project] because [specific reason connecting their work to yours]. I believe this research would make a meaningful contribution to [field] by [what gap it fills].`,
        closing: `I would welcome the opportunity to discuss my research interests and how they align with ongoing work in your department. Thank you for considering my application. Please find my CV, research proposal, and writing sample attached.`,
      },
      work: {
        opening: `I am writing to apply for the position of [Job Title] at [Company Name]. With [X years] of experience in [field] and a proven track record of [key achievement], I am confident I can make an immediate and meaningful contribution to your team.`,
        body1: `In my current role at [Company] in Nigeria, I [key responsibility and specific achievement with metric]. Before that, at [previous company], I [another achievement]. These experiences have given me strong competence in [2–3 skills directly relevant to this job posting].`,
        body2: `I am drawn to [Company Name] because [specific reason — company's work, values, products, market position]. I am currently in the process of relocating to Canada and hold [or: am applying for] a [visa type]. I am eligible to work in Canada and available to start [date].`,
        closing: `I would welcome the chance to discuss how my experience aligns with your team's needs. Thank you for your consideration. I look forward to hearing from you.`,
      },
    },
    GB: {
      undergrad: {
        opening: `I am applying to study [Subject] at [University Name] through UCAS. My fascination with [subject area] developed through [specific experience, book, project, or event], and I am eager to pursue this interest at degree level under the guidance of [University Name]'s faculty.`,
        body1: `Throughout my secondary education in Nigeria, I have engaged deeply with [subject-related activities]. My WAEC results demonstrate strong academic ability, particularly in [relevant subjects]. Beyond the curriculum, I [extracurricular activity, competition, relevant independent study].`,
        body2: `I am drawn to [University Name] because [specific reason — course structure, particular modules, research reputation]. After completing my degree, I plan to [career goal], and I believe a [subject] degree from [University Name] will provide the analytical and practical foundation to achieve this.`,
        closing: `I am committed, curious, and ready to contribute to student life at [University Name]. Thank you for considering my application.`,
      },
      masters: {
        opening: `I am applying for the [Program Name] MSc/MA at [University Name]. My background in [field] — developed through my undergraduate degree at [Nigerian University] and [work experience] — has prepared me to engage seriously with the advanced material in this program.`,
        body1: `My undergraduate dissertation on [topic] taught me [skill/insight]. At [employer], I [key professional achievement]. These experiences pointed me towards [specific aspect of the masters program] as the next step in my development.`,
        body2: `I am applying for Chevening Scholarship simultaneously, which reflects how seriously I take this opportunity. [University Name]'s reputation in [field], particularly [specific module or research group], makes it my first choice. After graduating, I plan to [career goal — can include return to Nigeria or staying in UK on Graduate Route].`,
        closing: `The UK's Graduate Route visa means I can contribute professionally in the UK after graduating, which is an important part of my career plan. Thank you for considering my application.`,
      },
      phd: {
        opening: `I am writing to apply for a PhD position in [Department] at [University Name], with Professor [Supervisor Name] as my proposed supervisor. My proposed research on [topic] builds directly on Professor [Name]'s recent work on [specific paper or project], and I am confident [University Name] is the right environment to pursue it.`,
        body1: `My research background includes [degree, thesis topic, and key findings]. I have [publications, presentations, or research experience]. This has given me strong grounding in [methodology] and a clear research agenda: [research question in one sentence].`,
        body2: `My full research proposal is attached. In brief, I propose to [2-sentence summary of methodology and expected contribution]. I believe this work will [what gap it fills or what new knowledge it creates]. I have also applied for the Commonwealth PhD Scholarship through the Nigerian Federal Scholarship Board — if successful, my funding would be entirely covered.`,
        closing: `I would welcome the opportunity to discuss my research with Professor [Name] and the department. Thank you for your time.`,
      },
      work: {
        opening: `I am applying for the role of [Job Title] advertised on [Platform/Company Website]. With [X years] of experience in [field] and [specific relevant credential or achievement], I believe I am well placed to contribute to [Company Name]'s work in [area].`,
        body1: `At [Current/Previous Company] in Nigeria, I [key achievement with specific result]. I have experience with [skills matching the job spec], and my work consistently resulted in [measurable outcomes]. I am familiar with the UK professional environment through [any UK connection — clients, qualifications, remote work] and am ready to contribute immediately.`,
        body2: `I am currently in the UK on a [Graduate Route/Skilled Worker] visa and have full right to work. I am drawn to [Company Name] because [specific reason — their work, culture, market position]. I am available for interview at your convenience.`,
        closing: `I have attached my CV for your consideration. I would welcome the opportunity to discuss how my experience can support [Company Name]'s objectives.`,
      },
    },
    SE: {
      undergrad: {
        opening: `I am writing to apply to [Program Name] at [University Name] through universityadmissions.se. My interest in [subject area] has grown through [specific experience or study], and I believe [University Name]'s program — taught in English with a strong emphasis on [program's known focus] — is the right environment for my undergraduate education.`,
        body1: `My secondary education in Nigeria provided a strong foundation in [relevant subjects]. I have also [any relevant independent study, project, or extracurricular that shows genuine interest in the field]. I am particularly interested in [specific aspect of the program or Swedish university's approach].`,
        body2: `Sweden's commitment to equality, academic rigour, and international collaboration aligns with my values. After graduating, I intend to [career plan — can include job-seeking permit and staying in Sweden, or returning to Nigeria with the qualification].`,
        closing: `I am excited by the opportunity to study in Sweden and contribute to the diverse academic community at [University Name]. Thank you for considering my application.`,
      },
      masters: {
        opening: `I am applying to [Program Name] at [University Name] through universityadmissions.se. I have also applied for the Swedish Institute Scholarship (SISGP), which, if awarded, would cover my tuition and living costs. With a [degree] in [field] and [work experience], I am ready to engage with graduate-level study in [subject].`,
        body1: `My undergraduate thesis at [Nigerian University] examined [topic and key finding]. At [employer], I [key professional achievement directly relevant to this program]. These experiences have shaped my understanding of [program's focus area] and shown me where I want to develop further.`,
        body2: `I chose [University Name] because of [specific reason — course structure, faculty, research group, Sweden's approach to this field]. After completing the program, I plan to apply for a residence permit to seek work in Sweden, where my skills in [area] are in demand, particularly in [industry — Stockholm tech, Swedish healthcare, etc.].`,
        closing: `I look forward to contributing to [University Name]'s academic community. Thank you for considering my application.`,
      },
      phd: {
        opening: `I am applying for the PhD position in [Research Area] advertised on [jobs.ac.uk / academicpositions.com / university careers page]. My research background in [field] and my specific interest in [project topic] make me a strong candidate for this role, and I am excited by the opportunity to work with [Supervisor Name / research group].`,
        body1: `My academic background includes [degree and institution]. My thesis/research on [topic] resulted in [finding or output]. I have [publications, conference presentations, or research experience]. The methodology I developed — [specific method] — is directly applicable to the advertised project's focus on [project focus].`,
        body2: `I am particularly drawn to this position because [specific reason connecting the advertised project to your background]. Sweden's model of PhD as salaried employment reflects a professional research culture that matches how I work. I am committed to the full duration of the project and to contributing to the department's research output.`,
        closing: `I have attached my CV, research statement, and contact details for three referees. I would welcome the opportunity for an interview. Thank you for your time and consideration.`,
      },
      work: {
        opening: `I am writing to apply for the position of [Job Title] at [Company Name]. With [X years] of experience in [field] and expertise in [2–3 skills from the job posting], I am confident I can contribute to [Company Name]'s work in [area].`,
        body1: `At [Company] in Nigeria, I [key achievement with specific result]. I have worked extensively with [technologies/methods relevant to this job], and my track record includes [measurable outcome]. I am familiar with international work environments and am accustomed to working in English.`,
        body2: `I am drawn to [Company Name] because [specific reason — their product, market, culture, or recent work]. I understand that a work permit for Sweden is employer-sponsored, and I am prepared to work with your HR team to facilitate this process efficiently. I am also enrolled in Swedish language classes and am committed to integrating fully into Swedish professional life.`,
        closing: `I would welcome the opportunity to discuss this role further. My CV is attached. Thank you for your consideration.`,
      },
    },
    EU: {
      undergrad: {
        opening: `I am writing to apply for [Program Name] at [University Name]. My strong academic record in [subject area] and my genuine passion for [field], developed through [specific experience], make me a motivated and prepared candidate for this program.`,
        body1: `My secondary education in Nigeria gave me a solid grounding in [relevant subjects]. I have supplemented this with [independent reading, online courses, competitions, or projects], which deepened my understanding of [specific topic]. I am particularly interested in [aspect of the program] and look forward to engaging with it at university level.`,
        body2: `After completing my degree, I plan to [career goal]. I am committed to contributing positively to student life at [University Name] and to making the most of the European academic environment and its emphasis on [research, interdisciplinary study, etc.].`,
        closing: `Thank you for considering my application. I am happy to provide any additional information required.`,
      },
      masters: {
        opening: `I am applying for [Program Name] at [University Name]. With a [degree] from [Nigerian University] and [work experience], I am prepared to engage with advanced study in [field] and contribute meaningfully to the program.`,
        body1: `My undergraduate work focused on [topic and key finding]. My professional experience at [employer] taught me [skill or insight directly relevant to program]. These experiences have clarified my research interests: specifically, [research question or professional focus].`,
        body2: `I chose [University Name] because [specific reason — faculty, modules, research strengths, country's industry in this field]. I plan to [career goal after graduating].`,
        closing: `I look forward to the opportunity to study at [University Name]. Thank you for your consideration.`,
      },
      phd: {
        opening: `I am applying for the PhD position in [Research Area]. My research background in [field] and my proposed project on [topic] align closely with this position, and I am eager to contribute to [research group/department]'s work in this area.`,
        body1: `My academic background includes [degree and institution]. My thesis/research on [topic] produced [finding or output]. I have [publications or conference presentations]. My proposed doctoral research would [research question and methodology in 2 sentences].`,
        body2: `I am particularly interested in working with [supervisor or research group] because [specific reason connecting their work to yours]. I am committed to the full duration of the project and to publishing my findings in leading journals in the field.`,
        closing: `My CV and research proposal are attached. I would welcome an interview to discuss my application further. Thank you for your time.`,
      },
      work: {
        opening: `I am applying for the position of [Job Title] at [Company Name]. With [X years] of experience in [field] and a strong record of [key achievement], I believe I can make an immediate contribution to your team.`,
        body1: `In my current role at [Company] in Nigeria, I [key achievement with metric]. Before that, I [another achievement]. I have developed expertise in [2–3 skills from the job spec] and have worked in fast-paced, results-driven environments.`,
        body2: `I am drawn to [Company Name] because [specific reason]. I am in the process of relocating to [country] and hold [or am applying for] the appropriate work authorization. I am available to start [date] and am committed to integrating quickly into your team.`,
        closing: `I would welcome the chance to discuss my application. Thank you for your consideration.`,
      },
    },
  };

  const palette = {
    CA: [0, 82, 165],
    GB: [0, 36, 125],
    SE: [0, 106, 167],
    EU: [0, 51, 153],
  };
  const accent = palette[country] || palette.CA;
  const template = TEMPLATES[country]?.[level] || TEMPLATES.CA.masters;

  // Header bar
  doc.setFillColor(...accent);
  doc.rect(0, 0, pageW, 38, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text(profile.full_name || 'Your Name', margin, 15);

  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'normal');
  const contacts = [profile.city, profile.phone, profile.user_email, profile.linkedin_url].filter(Boolean);
  doc.text(contacts.join('  |  '), margin, 23);

  doc.setFontSize(8);
  doc.setTextColor(255, 255, 255, 0.7);
  doc.text('Cover Letter', margin, 32);

  let y = 52;

  // Date + recipient block
  doc.setTextColor(80, 80, 80);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  const today = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  doc.text(today, margin, y);
  y += 12;
  doc.text('[Hiring Manager / Admissions Officer Name]', margin, y); y += 5;
  doc.text('[Title], [University / Company Name]', margin, y); y += 5;
  doc.text('[Address]', margin, y); y += 12;
  doc.text('Dear [Name / Sir or Madam],', margin, y); y += 10;

  // Body paragraphs
  doc.setTextColor(20, 20, 20);
  doc.setFontSize(9.5);

  [template.opening, template.body1, template.body2, template.closing].forEach(para => {
    if (y > 255) { doc.addPage(); y = 20; }
    y = addWrappedText(doc, para, margin, y, contentW, 5.2);
    y += 8;
  });

  // Sign-off
  y += 4;
  doc.text('Yours sincerely,', margin, y); y += 14;
  doc.setFont('helvetica', 'bold');
  doc.text(profile.full_name || 'Your Name', margin, y);

  // Footer
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(180, 180, 180);
  doc.text('Generated by MoveAbroad.ng · Customise all [bracketed] sections before sending', margin, 290);

  const countryNames = { CA: 'Canada', GB: 'UK', SE: 'Sweden', EU: 'Europe' };
  const levelNames = { undergrad: 'Undergrad', masters: 'Masters', phd: 'PhD', work: 'Work' };
  const filename = `${(profile.full_name || 'Cover_Letter').replace(/\s+/g, '_')}_${countryNames[country] || country}_${levelNames[level] || level}_CoverLetter.pdf`;
  doc.save(filename);
}

export function generateCV(profile, style = 'CA') {
  if (style === 'EU') {
    const doc = new jsPDF({ unit: 'mm', format: 'a4' });
    generateEUCV(profile, doc);
    const filename = `${(profile.full_name || 'CV').replace(/\s+/g, '_')}_EU_CV.pdf`;
    doc.save(filename);
    return;
  }
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const pageW = 210;
  const margin = 20;
  const contentW = pageW - margin * 2;
  let y = 20;

  const teal = [32, 141, 131];
  const dark = [20, 20, 20];
  const gray = [100, 100, 100];
  const light = [240, 240, 240];

  // ─── HEADER ───────────────────────────────────────────────────────────────
  doc.setFillColor(...teal);
  doc.rect(0, 0, pageW, 45, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.text(profile.full_name || 'Your Name', margin, 18);

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  const contactParts = [
    profile.city,
    profile.phone,
    profile.user_email,
    profile.linkedin_url,
  ].filter(Boolean);
  doc.text(contactParts.join('  |  '), margin, 26);

  // Style label
  const styleLabels = { CA: 'Canadian Style', US: 'US Style', GB: 'UK Style' };
  doc.setFontSize(8);
  doc.setTextColor(255, 255, 255, 0.7);
  doc.text(styleLabels[style] || '', pageW - margin, 38, { align: 'right' });

  y = 55;

  // ─── SUMMARY ──────────────────────────────────────────────────────────────
  if (profile.professional_summary) {
    doc.setTextColor(...teal);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('PROFESSIONAL SUMMARY', margin, y);
    doc.setFillColor(...teal);
    doc.rect(margin, y + 1.5, contentW, 0.5, 'F');
    y += 6;

    doc.setTextColor(...dark);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    y = addWrappedText(doc, profile.professional_summary, margin, y, contentW, 5);
    y += 6;
  }

  // ─── WORK EXPERIENCE ──────────────────────────────────────────────────────
  if (profile.work_experience?.length) {
    doc.setTextColor(...teal);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('WORK EXPERIENCE', margin, y);
    doc.setFillColor(...teal);
    doc.rect(margin, y + 1.5, contentW, 0.5, 'F');
    y += 7;

    profile.work_experience.forEach((job) => {
      if (y > 260) { doc.addPage(); y = 20; }

      doc.setTextColor(...dark);
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.text(job.job_title || '', margin, y);

      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...gray);
      const dateStr = `${job.start_date || ''} – ${job.is_current ? 'Present' : job.end_date || ''}`;
      doc.text(dateStr, pageW - margin, y, { align: 'right' });

      y += 5;
      doc.setTextColor(...dark);
      doc.setFont('helvetica', 'italic');
      doc.text(`${job.company || ''}${job.location ? '  |  ' + job.location : ''}`, margin, y);
      y += 5;

      doc.setFont('helvetica', 'normal');
      (job.achievements || []).filter(Boolean).forEach((ach) => {
        if (y > 270) { doc.addPage(); y = 20; }
        doc.setTextColor(...dark);
        doc.text('•', margin, y);
        y = addWrappedText(doc, ach, margin + 4, y, contentW - 4, 4.5);
        y += 1;
      });
      y += 4;
    });
  }

  // ─── EDUCATION ────────────────────────────────────────────────────────────
  if (profile.education?.length) {
    if (y > 240) { doc.addPage(); y = 20; }
    doc.setTextColor(...teal);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('EDUCATION', margin, y);
    doc.setFillColor(...teal);
    doc.rect(margin, y + 1.5, contentW, 0.5, 'F');
    y += 7;

    profile.education.forEach((edu) => {
      doc.setTextColor(...dark);
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.text(`${edu.degree || ''} ${edu.field ? '– ' + edu.field : ''}`, margin, y);
      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...gray);
      doc.text(edu.year || '', pageW - margin, y, { align: 'right' });
      y += 5;
      doc.setTextColor(...dark);
      doc.setFont('helvetica', 'italic');
      doc.text(edu.institution || '', margin, y);
      if (edu.honors) {
        doc.setFont('helvetica', 'normal');
        doc.text(`  •  ${edu.honors}`, margin + doc.getTextWidth(edu.institution || '') + 2, y);
      }
      y += 7;
    });
  }

  // ─── SKILLS ───────────────────────────────────────────────────────────────
  if (profile.skills?.length) {
    if (y > 250) { doc.addPage(); y = 20; }
    doc.setTextColor(...teal);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('SKILLS', margin, y);
    doc.setFillColor(...teal);
    doc.rect(margin, y + 1.5, contentW, 0.5, 'F');
    y += 7;

    doc.setTextColor(...dark);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    y = addWrappedText(doc, profile.skills.join('  •  '), margin, y, contentW, 5);
    y += 6;
  }

  // ─── CERTIFICATIONS ───────────────────────────────────────────────────────
  if (profile.certifications?.length) {
    if (y > 250) { doc.addPage(); y = 20; }
    doc.setTextColor(...teal);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('CERTIFICATIONS', margin, y);
    doc.setFillColor(...teal);
    doc.rect(margin, y + 1.5, contentW, 0.5, 'F');
    y += 7;

    profile.certifications.forEach((cert) => {
      doc.setTextColor(...dark);
      doc.setFontSize(9);
      doc.setFont('helvetica', 'bold');
      doc.text(`${cert.name || ''}`, margin, y);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...gray);
      doc.text(`${cert.issuer || ''}  ${cert.year || ''}`, pageW - margin, y, { align: 'right' });
      y += 6;
    });
    y += 2;
  }

  // ─── LANGUAGES ────────────────────────────────────────────────────────────
  if (profile.languages?.length) {
    if (y > 260) { doc.addPage(); y = 20; }
    doc.setTextColor(...teal);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('LANGUAGES', margin, y);
    doc.setFillColor(...teal);
    doc.rect(margin, y + 1.5, contentW, 0.5, 'F');
    y += 7;

    doc.setTextColor(...dark);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text(profile.languages.join('  •  '), margin, y);
  }

  // ─── STYLE-SPECIFIC FOOTER NOTE ───────────────────────────────────────────
  const notes = {
    CA: 'Formatted to Canadian resume standards — max 2 pages, no photo, no age.',
    US: 'Formatted to US resume standards — 1 page preferred, no photo, metrics-focused.',
    GB: 'Formatted to UK CV standards — 2 pages allowed, no photo required.',
  };
  doc.setPage(1);
  doc.setFontSize(7);
  doc.setTextColor(180, 180, 180);
  doc.text(notes[style] || '', margin, 292);

  const filename = `${(profile.full_name || 'CV').replace(/\s+/g, '_')}_${style}_CV.pdf`;
  doc.save(filename);
}