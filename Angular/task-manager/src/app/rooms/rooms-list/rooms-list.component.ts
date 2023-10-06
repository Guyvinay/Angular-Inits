import { Component, Input,Output, OnInit, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { Room, RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit ,OnChanges{

  ngOnChanges(changes: SimpleChanges): void {
   console.log(changes);
  }
  ngOnInit(): void {

  }
  

  @Input() rooms:RoomList[]=[];

  @Output() selectedRoom = new EventEmitter<RoomList>();

  selectRoom(room:RoomList){
    this.selectedRoom.emit(room);
  }


}
