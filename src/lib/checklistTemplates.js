// Default checklist items per visa type
export function getChecklistTemplate(countryCode, visaType) {
  const common = [
    { id: 'passport', label: 'Valid International Passport (6+ months validity)', category: 'Identity Documents', status: 'pending' },
    { id: 'passport_photo', label: 'Recent Passport Photographs (white background)', category: 'Identity Documents', status: 'pending' },
    { id: 'birth_cert', label: 'Birth Certificate (notarized)', category: 'Identity Documents', status: 'pending' },
  ];

  const student = [
    ...common,
    { id: 'admission_letter', label: 'University Admission / Offer Letter', category: 'Academic Documents', status: 'pending' },
    { id: 'transcripts', label: 'Official University Transcripts', category: 'Academic Documents', status: 'pending' },
    { id: 'waec_neco', label: 'WAEC/NECO Certificate', category: 'Academic Documents', status: 'pending' },
    { id: 'ielts', label: 'IELTS / TOEFL Score Certificate (6.0+)', category: 'Language', status: 'pending' },
    { id: 'bank_statement', label: 'Bank Statement (last 6 months, min required funds)', category: 'Financial', status: 'pending' },
    { id: 'sponsorship_letter', label: 'Sponsorship / Financial Support Letter', category: 'Financial', status: 'pending' },
    { id: 'travel_insurance', label: 'Travel / Health Insurance', category: 'Insurance', status: 'pending' },
    { id: 'statement_of_purpose', label: 'Statement of Purpose / Personal Statement', category: 'Application', status: 'pending' },
    { id: 'visa_application_form', label: 'Completed Visa Application Form', category: 'Application', status: 'pending' },
    { id: 'visa_fee_receipt', label: 'Visa Application Fee Payment Receipt', category: 'Application', status: 'pending' },
    { id: 'accommodation_proof', label: 'Proof of Accommodation / Housing Arrangement', category: 'Travel', status: 'pending' },
    { id: 'flight_itinerary', label: 'Flight Itinerary (not full ticket)', category: 'Travel', status: 'pending' },
  ];

  const work = [
    ...common,
    { id: 'job_offer', label: 'Official Job Offer / Employment Letter', category: 'Employment', status: 'pending' },
    { id: 'work_contract', label: 'Signed Work Contract', category: 'Employment', status: 'pending' },
    { id: 'cv_resume', label: 'Updated CV/Resume', category: 'Employment', status: 'pending' },
    { id: 'professional_certs', label: 'Professional Certificates / Qualifications', category: 'Employment', status: 'pending' },
    { id: 'reference_letters', label: 'Reference Letters from Previous Employers', category: 'Employment', status: 'pending' },
    { id: 'police_clearance', label: 'Police Clearance Certificate (Nigeria)', category: 'Background', status: 'pending' },
    { id: 'medical_exam', label: 'Medical Examination Report (approved clinic)', category: 'Health', status: 'pending' },
    { id: 'bank_statement', label: 'Bank Statement (last 3 months)', category: 'Financial', status: 'pending' },
    { id: 'travel_insurance', label: 'Travel / Health Insurance', category: 'Insurance', status: 'pending' },
    { id: 'visa_application_form', label: 'Completed Visa Application Form', category: 'Application', status: 'pending' },
    { id: 'visa_fee_receipt', label: 'Visa Application Fee Receipt', category: 'Application', status: 'pending' },
  ];

  const visitor = [
    ...common,
    { id: 'bank_statement', label: 'Bank Statement (last 6 months)', category: 'Financial', status: 'pending' },
    { id: 'employment_letter', label: 'Employment Letter or Proof of Business', category: 'Ties to Nigeria', status: 'pending' },
    { id: 'property_docs', label: 'Property Ownership Documents (if applicable)', category: 'Ties to Nigeria', status: 'pending' },
    { id: 'invitation_letter', label: 'Invitation Letter from Host (if applicable)', category: 'Application', status: 'pending' },
    { id: 'hotel_booking', label: 'Hotel Booking / Accommodation Proof', category: 'Travel', status: 'pending' },
    { id: 'flight_itinerary', label: 'Round-Trip Flight Itinerary', category: 'Travel', status: 'pending' },
    { id: 'travel_insurance', label: 'Travel Insurance', category: 'Insurance', status: 'pending' },
    { id: 'visa_application_form', label: 'Completed Visa Application Form', category: 'Application', status: 'pending' },
    { id: 'visa_fee_receipt', label: 'Visa Fee Payment Receipt', category: 'Application', status: 'pending' },
  ];

  const pr = [
    ...common,
    ...work.filter(i => !common.find(c => c.id === i.id)),
    { id: 'wes_evaluation', label: 'WES/IQAS Credential Evaluation', category: 'Credentials', status: 'pending' },
    { id: 'marriage_cert', label: 'Marriage Certificate (if applicable)', category: 'Personal', status: 'pending' },
    { id: 'language_test', label: 'IELTS/CELPIP Score (PR level)', category: 'Language', status: 'pending' },
    { id: 'police_clearance', label: 'Police Clearance Certificate', category: 'Background', status: 'pending' },
    { id: 'medical_exam', label: 'Medical Examination', category: 'Health', status: 'pending' },
  ];

  const templates = { student, work, visitor, permanent_residency: pr };
  const base = templates[visaType] || student;

  // Country-specific additions
  const countryExtras = {
    CA: [
      { id: 'gic', label: 'GIC (Guaranteed Investment Certificate) — CAD 20,635', category: 'Financial', status: 'pending' },
      { id: 'biometrics', label: 'Biometrics Appointment at VFS Lagos/Abuja', category: 'Application', status: 'pending' },
    ],
    US: [
      { id: 'sevis_fee', label: 'SEVIS Fee Payment Receipt (I-901)', category: 'Application', status: 'pending' },
      { id: 'ds160', label: 'DS-160 Form Completed Online', category: 'Application', status: 'pending' },
      { id: 'i20', label: 'I-20 Form from University', category: 'Academic Documents', status: 'pending' },
    ],
    GB: [
      { id: 'tb_test', label: 'TB (Tuberculosis) Test at IOM Approved Clinic', category: 'Health', status: 'pending' },
      { id: 'ihs', label: 'IHS (Immigration Health Surcharge) Payment', category: 'Financial', status: 'pending' },
      { id: 'cas', label: 'CAS Number from University', category: 'Academic Documents', status: 'pending' },
    ],
    DE: [
      { id: 'blocked_account', label: 'Blocked Account (Sperrkonto) — €11,208', category: 'Financial', status: 'pending' },
      { id: 'german_language', label: 'German Language Certificate (if applicable)', category: 'Language', status: 'pending' },
      { id: 'anerkennungsberatung', label: 'Credential Recognition Certificate', category: 'Credentials', status: 'pending' },
    ],
  };

  const extras = countryExtras[countryCode] || [];
  const existing = new Set(base.map(i => i.id));
  return [...base, ...extras.filter(e => !existing.has(e.id))];
}