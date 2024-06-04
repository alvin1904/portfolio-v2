export default function cn(...classNames: string[]) {
  return classNames.filter(Boolean).join(" ");
}
