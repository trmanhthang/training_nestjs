import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: true })
export class ServerGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  // Phương thức khởi tạo socket
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  afterInit(server: any): any {
    console.log('a user a connected');
  }

  @SubscribeMessage('chat')
  handleMessage(@MessageBody() data) {
    console.log('message', data.message);
    this.server.emit('chat', data.message);
  }

  // Phương thức xử lý khi client kết nối
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleConnection(client: any, ...args: any[]): any {
    console.log(`Client connected: ${client.id}`);
  }

  // Phương thức xử lý khi client ngắt kết nối
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleDisconnect(client: any): any {
    console.log(`Client disconnected: ${client.id}`);
  }
}
