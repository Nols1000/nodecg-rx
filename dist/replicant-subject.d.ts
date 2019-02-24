import { Subject } from 'rxjs';
import { Replicant } from 'nodecg';
export declare class ReplicantSubject<T> extends Subject<T> {
    private replicant;
    constructor(replicant: Replicant<T>);
    next(value?: T): void;
}
