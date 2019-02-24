import { Replicant } from 'nodecg';
import { Observable } from 'rxjs';
export declare class ReplicantObservable<T> extends Observable<T> {
    constructor(replicant: Replicant<T>);
}
