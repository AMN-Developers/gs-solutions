type WindowWithDataLayer = Window & {
  gtag: Function;
};

declare const window: WindowWithDataLayer;

type TrackerProps = {
  eventName: string;
};

export const tracker = ({ eventName }: TrackerProps) => {
  window.gtag("event", eventName);
};
