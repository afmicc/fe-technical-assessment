import { format, formatDistanceToNow } from "date-fns";

export const LastUpdate = ({ lastUpdate }: { lastUpdate: number }) => {
  try {
    const date = new Date(lastUpdate);
    const distance = formatDistanceToNow(date, { addSuffix: true });
    const alt = format(date, "MMM d, yyyy hh:mm");

    return <span title={alt}>{distance}</span>;
  } catch (error) {
    return <span>-</span>;
  }
};
