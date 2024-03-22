export type TCurrency = {
  val: number | string | undefined;
  unformat?: boolean;
  symbolNon?: boolean;
  ifNull?: boolean;
  precision?: number | string;
};
