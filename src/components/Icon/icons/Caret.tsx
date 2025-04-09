export const Caret = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 11 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.258881 0.5L5.23343 5.47455L10.208 0.5H0.258881Z"
      fill="#09090B"
    />
  </svg>
);

Caret.toString = () => "caret";
