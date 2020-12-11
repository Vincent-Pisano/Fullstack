import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

export class GenericCrud<T, ID> {

  constructor(protected http:HttpClient, protected url:string){}

    save(t: T): Observable<T> {
        return this.http.post<T>(this.url, t);
    }
    getAll(): Observable<T[]> {
        return this.http.get<T[]>(this.url);
    }
    getById(id: ID): Observable<T> {
        return this.http.get<T>(this.url + "/" + id);
    }
    // il faut vérifier que la nouvelle valeur est différente de l'ancienne
    //  {} = ça se peux qu'il ne se passe rien
    update(id: ID, t: T): Observable<T> {
        return this.http.put<T>(this.url + "/" + id, t, {});
    }
    deleteById(id: ID): Observable<T> {
        return this.http.delete<T>(this.url + "/" + id);
    }
}