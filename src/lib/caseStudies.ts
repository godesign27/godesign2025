export const CORETECHS_CARD_IMAGE = '/coretechs-v2-dashboard.png';

export const CASE_STUDY_ROUTES: Record<string, { page: string; path: string }> = {
  'CoreTechs SaaS Healthcare Product': {
    page: 'case-study-1',
    path: '/case-studies/coretechs',
  },
  'Accenture - Employee Onboarding': {
    page: 'case-study-2',
    path: '/case-studies/accenture',
  },
  'Jim Beam - The Cocktail Project': {
    page: 'case-study-3',
    path: '/case-studies/jim-beam',
  },
};

export function getCaseStudyRoute(title: string): { page: string; path: string } {
  return CASE_STUDY_ROUTES[title] ?? { page: 'case-studies', path: '/case-studies' };
}
