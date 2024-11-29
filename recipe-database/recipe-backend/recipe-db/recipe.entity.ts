import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({ type: 'varchar', length: 30 })
  Name: string;

  @Column({ type: 'varchar', length: 200 })
  Description: string;

  @Column({ type: 'int' })
  Preparation_Time: number;

  @Column({ type: 'int' })
  Cooking_Time: number;
}
