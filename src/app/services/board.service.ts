import { Injectable } from '@angular/core';
import { Board } from '../models/board';
import { Observable,  of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private http: HttpClient) {}

  getBoards(): Observable<Board[]>{
    return this.http.get<Board[]>('https://localhost:44315/api/boards')
  }

  getBoard(id: number): Observable<Board> {
    return this.http.get<Board>('https://localhost:44315/api/boards/' + id)
  }
}
