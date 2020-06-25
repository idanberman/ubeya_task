import { Room } from "./Room";
import { Message } from "./Message";
import { User } from "../user";

export interface RoomRepository {
  addRoom(roomName: string): Room;
  getRooms(): Room[];
  deleteRoom(roomId: number);
  postMessage(message: Message);
  getMessagesForRoom(roomId: number): Message[];
  addUserToRoom(userId: number, roomId: number);
}
