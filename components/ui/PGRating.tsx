interface Props {
  children?: React.ReactNode;
}

export function PGRating({ children }: Props) {
  return (
    <div className="px-1 typo-label-s text-black bg-neutral-300 rounded-sm h-[15px] shrink-0">
      {children}
    </div>
  );
}
