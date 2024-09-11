interface Props {
  onClick: () => void;
  isPaused: boolean;
}

export const PauseButton = ({ onClick, isPaused }: Props) => (
  <button onClick={onClick}>{isPaused ? "Resume" : "Pause"}</button>
);
