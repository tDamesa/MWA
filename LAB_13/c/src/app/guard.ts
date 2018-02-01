import {
  CanActivate,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Db } from './db.service';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class ProfileGuard implements CanActivate {
  constructor(private router: Router, private db: Db) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    const id = route.paramMap.get('id');
    if (id === null) {
      this.router.navigate(['error']);
      return false;
    } else {
      const stuInfo = this.db.getStudent(id);
      if (!stuInfo) {
        this.router.navigate(['error']);
        return false;
      }
    }
    return true;
  }
}
