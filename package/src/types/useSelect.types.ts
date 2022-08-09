interface useSelectDataProps {
  picks: string[];
  count: "exact" | "planned" | "estimated" | null | undefined;
  eqs?: Object;
}

export type { useSelectDataProps };
