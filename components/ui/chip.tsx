export const Chip: React.FC<{ children: string }> = ({ children }) => (
  <span className="flex flex-col gap-4 whitespace-nowrap rounded rounded-full border border-4 dark:border-blue-900 dark:hover:border-blue-500 border-blue-300 hover:border-blue-800 w-min pl-2 pr-2 transition-colors duration-500 ease-in-out">
    {children}
  </span>
);
