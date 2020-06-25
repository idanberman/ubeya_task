import { Message } from "../../domain/room/Message";
import { Room } from "../../domain/room/Room";
import { RoomRepository } from "../../domain/room/RoomRepository";
import { User } from "../../domain/user";

export class TypeormRoomRepository implements RoomRepository {
  public addUserToRoom(userId: number, roomId: number) {
    throw new Error("Method not implemented.");
  }
  public addRoom(roomName: string): Room {
    throw new Error("Method not implemented.");
  }
  public getRooms(): import("../../domain/room/Room").Room[] {
    throw new Error("Method not implemented.");
  }
  public deleteRoom(roomId: number) {
    throw new Error("Method not implemented.");
  }
  public postMessage(message: Message) {
    throw new Error("Method not implemented.");
  }
  public getMessagesForRoom(
    roomId: number
  ): import("../../domain/room/Message").Message[] {
    throw new Error("Method not implemented.");
  }
}
