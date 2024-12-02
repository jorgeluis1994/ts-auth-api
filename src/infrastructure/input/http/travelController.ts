
import express, { Request, Response } from 'express';
import { Travel } from '../../../domain/models/travel'
import { loggerAdapter } from '../../output/logging/loggerAdapter';
import { TravelService } from '../../../application/travelService';
import { implementaRepositorioTravel } from '../../../application/service/implementacionTravel';

const travelRouter = express.Router();

const travelRepository = new implementaRepositorioTravel();

const travelService = new TravelService(travelRepository);

//Controldores
travelRouter.post('/travel', async (req: Request, resp: Response) => {

   try {

      const { id_travel, fecha, origen, destino, precioBase } = req.body;

      const travel = new Travel(id_travel, fecha, origen, destino, precioBase);

      const result = await travelService.executeRegister(travel);

      // Devolver la respuesta con el cliente registrado
      resp.status(201).json(result);

   } catch (error) {

      resp.status(500).json({
         message: 'Error registering travel',
         error: error || 'Unknown error',
      });

   }

})

travelRouter.put('update-travel',async (req:Request,resp:Response)=>{
   try {
      const { id_travel, fecha, origen, destino, precioBase } = req.body;

      const travel = new Travel(id_travel, fecha, origen, destino, precioBase);

      const result = await travelService.executeRegister(travel);

      resp.status(201).json(result);

      
   } catch (error) {

      resp.status(500).json({
         message: 'Error registering travel',
         error: error || 'Unknown error',
      });
      
   }
})



travelRouter.delete('/delete/:id_travel', async (req: Request, resp: Response) => {

   try {

      const { id_travel} = req.params;

      const result = await travelService.executeDelete(id_travel);

      // Devolver la respuesta con el cliente registrado
      resp.status(201).json(result);

   } catch (error) {

      resp.status(500).json({
         message: 'Error registering travel',
         error: error || 'Unknown error',
      });

   }

})

export { travelRouter };