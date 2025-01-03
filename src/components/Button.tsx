import { East } from "@mui/icons-material";

export type ButtonType = {
  label: string;
  onClick: () => void;
  color?: boolean;
};

export const Button = (props: ButtonType) => {
  const { label, onClick, color } = props;
  return (
    <div
      onClick={onClick}
      className={`py-4 px-6 w-full flex gap-3 justify-center items-center  cursor-pointer  h-fit rounded-full  ${
        color !== true ? "bg-button text-white" : "bg-white text-textprimary"
      }`}
    >
      {label}
      <East fontSize="medium" />
    </div>
  );
};
