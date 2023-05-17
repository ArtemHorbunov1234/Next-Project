import { z } from 'zod';

import { createTRPCRouter, publicProcedure, protectedProcedure } from '~/server/api/trpc';

export const filmRouter = createTRPCRouter({
    getAll: publicProcedure.query(async ({ ctx, input }) => {
        return ctx.prisma.film.findMany();
    }),

    delete: publicProcedure
        .input(
            z.object({
                id: z.string(),
            })
        )
        .mutation(({ input, ctx }) => {
            return ctx.prisma.film.delete({
                where: {
                    id: input.id,
                },
            });
        }),
});
