import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaController } from './controllers/categoria.controller';
import { Categoria } from './entities/categoria.entity';
import { CategoriaService } from './services/categoria.service';

@Module({
  // importação da modelagem de Categoria
  imports: [TypeOrmModule.forFeature([Categoria])],
  providers: [CategoriaService],
  controllers: [CategoriaController],
  exports: [CategoriaService],
})
export class CategoriaModule {}
