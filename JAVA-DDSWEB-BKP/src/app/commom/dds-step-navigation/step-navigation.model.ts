export class StepOptions {
    index = 1;
    status: 'NONE' |'DONE' | 'CURRENT' = 'NONE';
    titulo = 'Step';
    expand = false;
    isNext = false;
    constructor(_index: number, _status: any, _titulo: string, _expand: boolean) {
        this.index = _index;
        this.status = _status;
        this.titulo = _titulo;
        this.expand = _expand;
    }
}
