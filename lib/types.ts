export interface NavItem {
  label: string;
  href: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
}

export interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  className?: string;
}

export interface Metric {
  label: string;
  value: string;
  description?: string;
}

export interface MetricCardProps {
  metric: Metric;
  className?: string;
}
