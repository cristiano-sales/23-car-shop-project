import { z as zod } from 'zod';
import { IVehicle } from './IVehicle';

export const CarSchema = zod.object({
  doorsQty: zod.number().gte(2).lte(4),
  seatsQty: zod.number().gte(2).lte(7),
});

export type ICar = zod.infer<typeof CarSchema> & IVehicle;
