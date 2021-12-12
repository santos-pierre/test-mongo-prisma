const PrimaryButton: React.FC = ({ children }) => {
    return (
        <button
            type="button"
            className="w-56 bg-[#D0F0E4] text-black inline-flex justify-center items-center rounded-[10px] py-4 text-lg border border-[#3FB1B5] font-semibold"
        >
            {children}
        </button>
    );
};

export default PrimaryButton;
