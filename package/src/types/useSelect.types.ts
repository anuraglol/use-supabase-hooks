interface useSelectDataProps {
  table: string;
  picks: string[];
  count: "exact" | "planned" | "estimated" | null | undefined;
  eqs?: [string, string];
}

export type { useSelectDataProps };
