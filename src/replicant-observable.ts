import { Replicant } from 'nodecg';
import { Observable } from 'rxjs';

export class ReplicantObservable<T> extends Observable<T> {
    
    constructor(replicant: Replicant<T>) {
        super((subscriber) => {
            replicant.on('change', (newValue, oldValue, dataOperations) => {
                subscriber.next(newValue)
            });
        });
    }
}