interface useSelectDataProps {
  table: string;
  picks: string[];
  count: "exact" | "planned" | "estimated" | null | undefined;
}

export type { useSelectDataProps };
