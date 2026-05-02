interface ComparisonRow {
  label: string;
  website: string;
  webpage: string;
}

interface ComparisonTableProps {
  rows: ComparisonRow[];
}

export default function ComparisonTable({ rows }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="px-5 py-4 text-left font-semibold w-1/4 rounded-tl-xl">
              Aspect
            </th>
            <th className="px-5 py-4 text-left font-semibold w-3/8">
              Website
            </th>
            <th className="px-5 py-4 text-left font-semibold w-3/8 rounded-tr-xl">
              Webpage
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((row, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-slate-50"
              } hover:bg-blue-50 transition-colors`}
            >
              <td className="px-5 py-4 font-semibold text-slate-700 border-r border-slate-100">
                {row.label}
              </td>
              <td className="px-5 py-4 text-slate-600 border-r border-slate-100">
                {row.website}
              </td>
              <td className="px-5 py-4 text-slate-600">{row.webpage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
