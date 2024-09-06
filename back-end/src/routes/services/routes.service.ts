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

      return 'Nueva ruta programada con éxito';
    } catch (error) {
      throw new Error('Error al agendar la ruta: ' + error.message);
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
