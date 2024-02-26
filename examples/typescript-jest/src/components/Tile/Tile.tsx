interface Props {
  className?: string;
  onClick: () => void;
  isActive: boolean;
  timeRemaining: number;
}

export const Tile = ({ className, isActive, onClick }: Props) => (
  <button className={className} disabled={!isActive} onClick={onClick} />
);
