import AppLayout from '../components/layouts/AppLayout';
import Heading2 from '../components/ui/Heading2';
import PrimaryButton from '../components/ui/PrimaryButton';
import SecondaryButton from '../components/ui/SecondaryButton';

const PalettePage = () => {
    return (
        <AppLayout>
            <section className="mt-8">
                <Heading2 title="Buttons" />
                <div className="flex my-8 space-x-5">
                    <PrimaryButton>Voir les métiers</PrimaryButton>
                    <SecondaryButton>En savoir plus</SecondaryButton>
                </div>
            </section>
            <section className="mt-8">
                <Heading2 title="Colors" />
                <div className="flex my-8 space-x-5">
                    <div>
                        <div className="w-56 h-40 bg-[#D0F0E4] rounded-lg"></div>
                        <p className="mt-3 ml-1 font-bold">#D0F0E4</p>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
};

export default PalettePage;
