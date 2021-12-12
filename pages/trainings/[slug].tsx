import { PrismaClient, Training } from '@prisma/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import AppLayout from '../../components/layouts/AppLayout';
import Heading2 from '../../components/ui/Heading2';

type TrainingPageProps = {
    training: Training;
};

const TrainingPage: React.FC<TrainingPageProps> = ({ training }) => {
    return (
        <AppLayout>
            <section className="mt-10 space-y-5">
                <Heading2 title={training.title} />
                <p className="bg-[#FFD4A1] p-7 w-96 border rounded-md border-black font-medium text-sm leading-8">
                    {training.content}
                </p>
            </section>
        </AppLayout>
    );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const prisma = new PrismaClient();
    if (params) {
        const training = await prisma.training.findFirst({
            where: {
                slug: params.slug?.toString(),
            },
        });

        if (training) {
            return {
                props: { training },
            };
        }
    }

    return {
        props: {},
        notFound: false,
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const prisma = new PrismaClient();
    const trainingsSlug = await prisma.training.findMany({
        select: {
            slug: true,
        },
    });

    const trainingsPaths = trainingsSlug.map((training) => {
        return { params: { slug: training.slug } };
    });

    return {
        paths: trainingsPaths,
        fallback: false,
    };
};

export default TrainingPage;
