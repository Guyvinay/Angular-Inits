export interface Room{
    // totalRooms?:number;
    // availableRooms?:number;
    // bookedRooms?:number;
    totalRooms:number;
    availableRooms:number;
    bookedRooms:number;
}

export interface RoomList {
    roomNumber:number;
    roomType:string;
    amentities:string;
    price:number;
    photos:string;
    chekinTime:Date;
    chekoutTime:Date;
    rating:number
}