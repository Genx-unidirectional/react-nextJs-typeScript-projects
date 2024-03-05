export type Squares = (string | null)[];

export type BoardProps = {
  isXNext: boolean;
  squares: (string | null)[];
  onPlay: (squares: Squares) => void;
};
