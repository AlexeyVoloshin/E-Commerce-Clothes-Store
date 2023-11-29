type IconCartProps = {
  className: string;
};
// "h-8 w-8 text-white"
const IconCart: React.FC<IconCartProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round">
      {' '}
      <path
        stroke="none"
        d="M0 0h24v24H0z"
      />{' '}
      <line
        x1="4"
        y1="6"
        x2="20"
        y2="6"
      />{' '}
      <line
        x1="4"
        y1="12"
        x2="20"
        y2="12"
      />{' '}
      <line
        x1="4"
        y1="18"
        x2="20"
        y2="18"
      />
    </svg>
  );
};
