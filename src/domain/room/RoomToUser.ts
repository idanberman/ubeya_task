import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RoomToUser {
  @PrimaryGeneratedColumn()
  public userId: number;

  @Column()
  public roomId: number;
}
