import { jsPDF } from 'jspdf';

function addWrappedText(doc, text, x, y, maxWidth, lineHeight) {
  const lines = doc.splitTextToSize(text, maxWidth);
  doc.text(lines, x, y);
  return y + lines.length * lineHeight;
}

export function generateCV(profile, style = 'CA') {
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