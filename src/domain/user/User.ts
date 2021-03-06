import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public userId: number;

  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @Column()
  public isActive: boolean;
}
