const SecondaryButton: React.FC = ({ children }) => {
    return (
        <button
            type="button"
            className="w-56 bg-transparent text-black inline-flex justify-center items-center rounded-[10px] py-4 text-lg border border-[#2A899D] font-semibold"
        >
            {children}
        </button>
    );
};

export default SecondaryButton;
