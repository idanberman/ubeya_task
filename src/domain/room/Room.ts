import { User } from "../user";
@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  public roomId: number;

  @Column()
  public title: string;

  @Column()
  public participants: User[];

  @Column()
  public lastMessageText: string;

  @Column()
  public lastMessageTimestamp: number;
}
