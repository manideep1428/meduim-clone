interface Props {
    click: () => void,
    children: React.ReactNode,
    className?: string,
  }
  const Button :  React.FC<Props> = ({ click, children, className }) => {
    return (
      <button
        className={`bg-blue-500 w-[300px] h-10 mt-6 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
        onClick={click}
      >
        {children}
      </button>
    );
  };
  
  export default Button