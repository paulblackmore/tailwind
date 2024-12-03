type Props = {
  text: string;
};
export const Button = ({ text }: Props) => (
  <button className="bg-slate-800 text-gray-200 py-2 px-4 rounded font-semibold w-40">
    {text}
  </button>
);
