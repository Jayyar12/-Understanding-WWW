import Image from "next/image";

interface MediaFigureProps {
  src: string;
  alt: string;
  caption: string;
  source?: string;
  width?: number;
  height?: number;
}

export default function MediaFigure({
  src,
  alt,
  caption,
  source,
  width = 800,
  height = 450,
}: MediaFigureProps) {
  return (
    <figure className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
      <div className="relative w-full overflow-hidden bg-slate-100" style={{ aspectRatio: `${width}/${height}` }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>
      <figcaption className="px-5 py-3 text-sm text-slate-500 text-center border-t border-slate-100 bg-slate-50 flex flex-col gap-1">
        <span className="italic">{caption}</span>
  </figcaption>
    </figure>
  );
}
