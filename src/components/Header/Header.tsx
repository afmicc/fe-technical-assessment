export const Header = ({ className }: { className: string }) => (
  <div
    className={`${className} border-b-[.5px] border-gray-200 px-5 pt-5 pb-6`}
  >
    <h1 className="text-3xl font-bold">Workflows</h1>
    {/* TODO: dropdown */}
    {/* TODO: search bar */}
  </div>
);
