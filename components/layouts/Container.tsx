import { cn } from "cn";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export function Container({ className = "", children }: Props) {
  return (
    <div className={cn("max-w-[1233px] mx-auto w-full px-2", className)}>
      {children}
    </div>
  );
}
