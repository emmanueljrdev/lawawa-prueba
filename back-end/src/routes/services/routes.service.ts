import { Injectable } from '@nestjs/common';
import * as path from 'path';
import { CreateRouteDto } from '../dto/create-route.dto';
import { UpdateRouteDto } from '../dto/update-route.dto';
import * as fs from 'fs-extra';
import * as data from '../../data/routes.json';

@Injectable()
export class RoutesService {
  async create(createRouteDto: CreateRouteDto): Promise<string> {
    const filePath = path.join(__dirname, '../../data/scheduled.json');
    console.log('Ruta del archivo JSON:', filePath);

    try {
      let scheduledRoutes = [];
      if (await fs.pathExists(filePath)) {
        const data = await fs.readFile(filePath, 'utf8');

        if (data) {
          try {
            scheduledRoutes = JSON.parse(data);
          } catch (parseError) {
            console.error('Error al parsear JSON:', parseError);
            throw new Error('Error en el formato del archivo JSON');
          }
        }
      } else {
        await fs.writeFile(filePath, '[]', 'utf8');
        console.log('Archivo JSON creado.');
      }

      scheduledRoutes.push(createRouteDto);

      await fs.writeFile(
        filePath,
        JSON.stringify(scheduledRoutes, null, 2),
        'utf8',
      );
      console.log('Nueva ruta programada:', createRouteDto);

      return 'New route has been scheduled successfully';
    } catch (error) {
      console.error('Error scheduling the route:', error);
      throw new Error('Error scheduling the route: ' + error.message);
    }
  }

  async findAll() {
    return data;
  }

  async findOne(id: number) {
    const route = data.find((route) => route.id === id);

    if (!route) {
      throw new Error(`Route with ID ${id} not found`);
    }

    return route;
  }

  async update(id: number, updateRouteDto: UpdateRouteDto) {
    return `This action updates a #${id} route`;
  }

  async remove(id: number) {
    return `This action removes a #${id} route`;
  }
}
