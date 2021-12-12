import useSWR from 'swr';
import Link from 'next/link';
import { Training } from '@prisma/client';
import BaseLayout from '../components/layouts/BaseLayout';
import { fetcher } from '../utils';

const HomePage = () => {
    const { data, error } = useSWR<{ [key: string]: Training }>('api/trainings', fetcher);

    if (error) return <BaseLayout>Error fetching datas</BaseLayout>;
    if (!data) return <BaseLayout>Loading ...</BaseLayout>;

    return (
        <BaseLayout>
            <div className="flex space-x-20 text-center">
                {Object.keys(data).map((key, index) => {
                    return (
                        <div
                            className="p-5 space-y-6 border border-gray-300 rounded-md shadow-xl w-80"
                            key={`${key}-${index}`}
                        >
                            <h3>{data[key].title}</h3>
                            <p>{data[key].content}</p>
                            <Link href={`trainings/${data[key].slug}`}>
                                <a className="inline-block underline decoration-sky-500 decoration-2">
                                    View More
                                </a>
                            </Link>
                        </div>
                    );
                })}
                <div className="self-center">
                    <Link href={'palette'}>
                        <a className="underline decoration-[#93f5d1] decoration-4">Palettes &rarr;</a>
                    </Link>
                </div>
            </div>
        </BaseLayout>
    );
};

export default HomePage;
