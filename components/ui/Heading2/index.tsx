type Heading2Props = {
    title: string;
};

const Heading2: React.FC<Heading2Props> = ({ title }) => {
    return <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">{title}</h2>;
};

export default Heading2;
