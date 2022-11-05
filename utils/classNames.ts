export function classNames(...className: any[]) {
  return className.filter(Boolean).join(" ");
}
