import { Icon } from "../Icon";

export const Tags = ({ tags = [] }: { tags: Tag[] }) => {
  if (tags.length === 0) return <AddTag />;

  if (tags.length === 1) {
    return <Tag tag={tags[0].name} colors={[tags[0].color]} />;
  }

  const colors = tags.map((tag) => tag.color);
  const tag = `${tags.length} tags`;

  return <Tag tag={tag} colors={colors} />;
};

const borderClass = "border-[1px] border-zinc-950/10 rounded-full px-2 py-1";

const AddTag = () => {
  return (
    <button className={`${borderClass} flex items-center gap-1`}>
      <Icon icon="plus" className="w-2 h-2" />
      <span>Add Tag</span>
    </button>
  );
};

const Tag = ({
  tag,
  colors: allColors = [],
}: {
  tag: string;
  colors: string[];
}) => {
  const colors = allColors.slice(0, 2);

  return (
    <div className={`${borderClass} flex items-center w-fit`}>
      <div className="flex gap-1">
        {colors.map((color, index) => (
          <span
            id={index.toString()}
            key={color}
            className="rounded-sm w-2 h-2"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <span className="capitalize ml-2">{tag}</span>
    </div>
  );
};
