import { Component,OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  
  rooms:Room = {
    totalRooms:20,
    availableRooms:10,
    bookedRooms:10
  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  toggle = false;
  hotelName:string = 'Hilton Hotel';
  numberOfRooms = 200;

  toggleRoom(){
    this.toggle=!this.toggle;
  }


  roomsList:RoomList[] = [
    {
      roomNumber:1,
      roomType:'Delux Room',
      amentities:'Basic ',
      price:5000,
      photos:'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      chekinTime:new Date('11-10-2021'),
      chekoutTime:new Date('11-10-2021')
    },
    {
      roomNumber:2,
      roomType:'Delux Room',
      amentities:'Basic ',
      price:5000,
      photos:'https://images.unsplash.com/photo-1585020430145-2a6b034f7729?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      chekinTime:new Date('11-10-2021'),
      chekoutTime:new Date('11-10-2021')
    },
    {
      roomNumber:3,
      roomType:'Delux Room',
      amentities:'Basic ',
      price:5000,
      photos:'https://images.unsplash.com/photo-1586810724476-c294fb7ac01b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      chekinTime:new Date('11-10-2021'),
      chekoutTime:new Date('11-10-2021')
    },
    {
      roomNumber:4,
      roomType:'Delux Room',
      amentities:'Basic ',
      price:5000,
      photos:'https://images.unsplash.com/photo-1627283391728-701007067e7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      chekinTime:new Date('11-10-2021'),
      chekoutTime:new Date('11-10-2021')
    },
    {
      roomNumber:5,
      roomType:'Delux Room',
      amentities:'Basic ',
      price:5000,
      photos:'https://images.unsplash.com/photo-1574774191469-3d7732e5fc8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      chekinTime:new Date('11-10-2021'),
      chekoutTime:new Date('11-10-2021')
    }

  ]



}
