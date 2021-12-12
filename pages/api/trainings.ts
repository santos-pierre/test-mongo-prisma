import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
    const trainings = await prisma?.training.findMany();
    res.json(trainings);
};

export default handler;
