export class Triangulo{
    
    private _base: number
    private _ladoa: number
    private _ladob: number
    private _altura: number

    constructor(base : number, ladoa : number ,ladob : number ,altura : number){
        
        this._base = base
        this._ladoa = ladoa
        this._ladob = ladob
        this._altura = altura
    }

    get base(){
        return this._base
    }

    get ladoa(){
        return this._ladoa
    }

    get ladob(){
        return this._ladob
    }

    get altura(){
        return this._altura
    }

    perimetro(){
        return this._base+this._ladoa+this._ladob
    }

    area(){
        return (this._base*this._altura)/2
    }

}
