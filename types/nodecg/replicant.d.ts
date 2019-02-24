/**
 * 
 */
export interface ReplicantOptions<T> {
    defaultValue?: T;
    persistent?: boolean;
    schemaPath?: string;
}

/**
 * 
 */
export interface Operation {
    args: Array<any>;
    method: string;
    path: string;
}

/**
 * 
 */
export interface Replicant<T> {

    /**
     * 
     */
    name: string;

    /**
     * 
     */
    namespace?: string;

    /**
     * 
     */
    opts: ReplicantOptions<T>;
    
    /**
     * 
     */
    revision: number;

    /**
     * CLIENT-ONLY
     */
    status?: 'undeclared' | 'declared' | 'declaring';

    /**
     * 
     */
    value: T | undefined;

    /**
     * 
     */
    new (name: string, namespace: string, opts?: ReplicantOptions<T>): Replicant<T>;

    /**
     * 
     * @param event 
     * @param listener 
     */
    once(event: 'change', listener: (newValue?: T, oldValue?: T, operations?: Array<Operation>) => void): this;

    /**
     * CLIENT-ONLY
     * 
     * @param event 
     * @param listener 
     */
    once(event: 'declared', listener: (value: T) => void): this;

    /**
     * CLIENT-ONLY
     * 
     * @param event 
     * @param listener 
     */
    once(event: 'fullUpdate', listener: (value: T) => void): this;

    /**
     * CLIENT-ONLY
     * 
     * @param event 
     * @param listener 
     */
    once(event: 'assignmentRejected' | 'declarationRejected' | 'operationsRejected', listener: (reason: string) => void): this;
    
    /**
     * 
     * 
     * @param event 
     * @param listener 
     */
    on(event: 'change', listener: (newValue?: T, oldValue?: T, operations?: Array<Operation>) => void): this;

    /**
     * CLIENT-ONLY
     * 
     * @param event 
     * @param listener 
     */
    on(event: 'declared', listener: (value: T) => void): this;

    /**
     * CLIENT-ONLY
     * 
     * @param event 
     * @param listener 
     */
    on(event: 'fullUpdate', listener: (value: T) => void): this;

    /**
     * CLIENT-ONLY
     * 
     * @param event 
     * @param listener 
     */
    on(event: 'assignmentRejected' | 'declarationRejected' | 'operationsRejected', listener: (reason: string) => void): this;
}