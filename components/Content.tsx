import { PropsWithChildren } from "react";

export default function Content({ children }: PropsWithChildren) {
  return <div className="p-8">{children}</div>;
}
