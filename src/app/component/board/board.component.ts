import { Component, OnInit } from '@angular/core';
import { Board } from '../../models/board';
import { BoardService } from '../../services/board.service';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass']
})
export class BoardComponent implements OnInit {

  constructor(private boardService: BoardService) { }

  boards: Board[];

  getBoards(): void {
    this.boardService.getBoards()
    .subscribe(boards => this.boards = boards)
  }

  ngOnInit(): void {
    this.getBoards();
  }
}
