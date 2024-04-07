export const Chip: React.FC<{ children: string }> = ({ children }) => (
  <span className="flex flex-col gap-4 whitespace-nowrap rounded rounded-full border border-4 w-min pl-2 pr-2">
    {children}
  </span>
);
