import { Component } from '@angular/core';

@Component({
  selector: 'pm-memory-list',
  templateUrl: './memory-list.component.html',
  styleUrls: ['./memory-list.component.scss']
})
export class MemoryListComponent {
  pageTitle: string = "Memory List";

  memories: any[] = [
    {
      memoryId: 1,
      memoryTitle: "Titre",
      imageUrl: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=2000&q=60",
      userId: 2,
      memoryText: "lorem ipsum",
      createdAt: "1675953452",
      score: 3
    },
    {
      memoryId: 2,
      memoryTitle: "Coucou",
      imageUrl: "https://images.unsplash.com/photo-1675939674542-3bd58025c165?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=2000&q=60",
      userId: 1,
      memoryText: "lorem ipsum et je continue",
      createdAt: "1675953486",
      score: 1
    }
  ]
}
