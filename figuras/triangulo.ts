class Triangulo{
    
    private _base: number
    private _ladoa: number
    private _ladob: number
    private _altura: number

    public constructor(base : number, ladoa : number ,ladob : number ,altura : number){
        
        this._base = base
        this._ladoa = ladoa
        this._ladob = ladob
        this._altura = altura
    }

    public get base(){
        return this._base
    }

    public get ladoa(){
        return this._ladoa
    }

    public get ladob(){
        return this._ladob
    }

    public get altura(){
        return this._altura
    }

    public getPerimetro(){
        return this._base+this._ladoa+this._ladob
    }

    public getArea(){
        return (this._base*this._altura)/2
    }

}
export{Triangulo}