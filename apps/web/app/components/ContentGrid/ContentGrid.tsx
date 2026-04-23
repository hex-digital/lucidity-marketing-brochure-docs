import { GridContent } from "@/types/gridContent";

export function ContentGrid({ content }: { content: GridContent[] }) {
  return (
    <div className="grid w-full grid-cols-1 gap-0.5 bg-[image:var(--gradient-dark)] md:grid-cols-3 z-1">
      {content.map((item, i) => (
        <div key={i} className="flex flex-col gap-5 bg-black p-8 ">
          <span className="text-page-eyebrow" style={{ color: `var(${item.keyColor})` }}>
            {item.key}
          </span>
          <div>
            <h4 className="text-page-title-s-desktop">{item.title}</h4>
            {item.subtitle && (
              <p className="text-post-subtitle-desktop">{item.subtitle}</p>
            )}
          </div>
          <div className="prose">
            {item.body.map((paragraph, index) => (
              <p key={index} className="text-page-paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}