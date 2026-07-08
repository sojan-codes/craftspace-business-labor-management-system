import { Badge } from "./Badge";
import { Button } from "./Button";
import { toneForStatus } from "../data/mockData";

type Column<T> = {
  key: keyof T | string;
  label: string;
  render?: (row: T) => React.ReactNode;
};

export function Table<T extends Record<string, unknown>>({ columns, rows, actions }: { columns: Column<T>[]; rows: T[]; actions?: string[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/50">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-white/[0.04] text-xs uppercase tracking-[0.16em] text-zinc-500">
            <tr>
              {columns.map((column) => (
                <th key={String(column.key)} className="px-5 py-4 font-medium">
                  {column.label}
                </th>
              ))}
              {actions ? <th className="px-5 py-4 font-medium">Actions</th> : null}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {rows.map((row, index) => (
              <tr key={String(row.id ?? row.name ?? index)} className="text-zinc-200">
                {columns.map((column) => {
                  const value = row[column.key as keyof T];
                  const isStatus = String(column.key).toLowerCase().includes("status") || String(column.key).toLowerCase().includes("priority");
                  return (
                    <td key={String(column.key)} className="whitespace-nowrap px-5 py-4">
                      {column.render ? column.render(row) : isStatus ? <Badge tone={toneForStatus(String(value))}>{String(value)}</Badge> : String(value)}
                    </td>
                  );
                })}
                {actions ? (
                  <td className="whitespace-nowrap px-5 py-4">
                    <div className="flex gap-2">
                      {actions.map((action) => (
                        <Button key={action} variant="secondary" size="sm">
                          {action}
                        </Button>
                      ))}
                    </div>
                  </td>
                ) : null}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
