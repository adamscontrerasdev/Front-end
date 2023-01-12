import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, finalize } from "rxjs";
import { LoadService } from "src/app/servicios/load.service";

@Injectable()
export class LoadInterceptor implements HttpInterceptor{
constructor(private load:LoadService){}


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.load.show();
        return next.handle(req).pipe(
            finalize(() => this.load.hide()));
    }

}