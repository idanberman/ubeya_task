import { User } from "../user";
import { PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  public id: number;
  @Column()
  public timestamp: number;

  @Column()
  public userId: User;

  @Column()
  public text: string;
}
