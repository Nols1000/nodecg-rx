import { Subject } from 'rxjs';
import { Replicant, Operation } from 'nodecg';

export class ReplicantSubject<T> extends Subject<T> {

    private replicant: Replicant<T>

    constructor(replicant: Replicant<T>) {
        super();

        this.replicant = replicant;

        this.replicant.on('change', (newValue?: T, oldValue?: T, operations?: Array<Operation>) => {
            super.next(newValue);
        })
    }

    next(value?: T) {
        super.next(value);
        this.replicant.value = value;
    }
}