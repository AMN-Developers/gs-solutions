export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-C8X0HRCFZR";

export const pageview = (url: URL) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

interface IEventParams {
  label: string;
  value: number;
  action: string;
  category: string;
}

export const event = ({ action, category, label, value }: IEventParams) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
