// import * as PIXI from 'pixi.js';
import * as Const from '../const.js';

export class ItemContainer extends PIXI.Container {
    constructor (c = null) {
        super(c);
    }
}

/**
 * @class ItemMultiPart
 * 複数のブロックで構成されるルームアイテムを管理する
 */
export class ItemMultiPart {

    constructor (c) {
        // this.sprites = new Array(); // Array<PIXI.Sprite>
        this.parts = new Array();
        if (partsInfo != null) {
            for (let [i,v] of Object.entries(c.partsInfo) ) {
                this.parts.push(new Item({}))
            }
        }
    }
}

export class Item extends PIXI.Sprite {
    constructor(c = null) {
        super(c.texture);
        this.name = c.name;
        this.itemInfo = c.info;
        this.itemInfo.x = Number(c.info.x);
        this.itemInfo.y = Number(c.info.y);
        this.offsX = Number(c.info.offsX);
        this.offsY = Number(c.info.offsY);
        this.occupy = c.info.occupy;
        this.itemInfo.scale = Number(c.info.scale);
        this.multipart = c.info.multipart;
        this.isWall = c.info.isWall;
        this.root = c.root;         // 強参照
        this.isRoot = false;
        this.parts = null;
        this.partOffs = {x: c.partOffs.x, y: c.partOffs.y, z: c.partOffs.z};
        this.interactive = true;
        this.buttonMode = true;
        this.prevTile = null;
        this.currentTile = null;
        this.isoPosition = new PIXI.Point(0,0);
        this.isMoving = false;
        this.scale.x = this.scale.y = this.itemInfo.scale;
        this.customHit = null;
        
        // HACK: なにもわかっていないハードコーディング
        this.anchor.x = 0.5 + this.offsX;
        this.anchor.y = 0.85 + this.offsY;
        if (this.multipart == true) {
            if ( this.root == null ) {
                // ルートパーツ処理
                this.isRoot = true;
                this.parts = new Array();
            }
            else {
                // サブパーツ処理
                this.interactive = false;
                // 移動はここでしなくてもよい
                this.x += this.partOffs.x * this.scale.x;
                this.y += this.partOffs.y * this.scale.y;

                this.anchor.x = 0;          // x軸のアンカーは0固定
                this.root.addParts(this);
            }
        }

        // 当たり判定領域設定(サブパーツ以外)
        if ( this.multipart == false || this.isRoot == true) {
            if (c.info.hitarea != null) {

                // baseTextureの参照に失敗することがあるので全部hitAreaに決め打ちで書く
                // ( オフセット、アンカーも含めて書く )
                // let w = this._texture.baseTexture.width;
                // let h = this._texture.baseTexture.height;

                // let scale = this.scale.x;
                // let orgX = w * 0.5;
                // let orgY = h * this.offsY;

                // 当たり判定頂点格納
                let pArray = [];
                
                Array.prototype.forEach.call(c.info.hitarea, (p) => {
                    pArray.push(p.x);
                    pArray.push(p.y);
                })

                // 当たり判定用Polygon
                let poly = new PIXI.Polygon (pArray);
                this.hitArea = poly;
                this.customHit = pArray;

                // let debug = new PIXI.Graphics()
                // .beginFill(0xff4444)
                // .drawPolygon(pArray)
                // .endFill();
                // debug.alpha = 0.75;
                // this.addChild(debug)
            }
        }
    }

    /**
     * 付随するパーツスプライトを追加
     * @param {Item} part 
     */
    addParts(part) {
        this.parts.push(part);
    }

    /**
     * @returns {Array<Item>}
     */
    // getParts() {

    // }

    /**
     * 
     * @param {PIXI.Point} point 
     * @param {PIXI.Point} isoPoint
     * @param {Number} zIndex
     */
    move(point,isoPoint, zIndex = null) {
        this.x = point.x + this.partOffs.x * this.scale.x;
        this.y = point.y + this.partOffs.y * this.scale.y;
        this.zIndex = (zIndex == null)
                            ? this.y - (Const.ROOM_UNIT.height / 2 * this.partOffs.z)
                            : zIndex;
        this.isoPosition = isoPoint;

        // 複数パーツアイテムの場合付随するパーツをすべて移動
        if (this.multipart == true && this.isRoot == true) {
            Array.prototype.forEach.call(this.parts, (p) => {
                p.move(point, isoPoint, zIndex);
            })
        }

        // サブパーツのz-index調整
        if (this.multipart == true && this.isRoot == false) {
            this.zIndex = (zIndex == null) 
                    ? this.root.y - (Const.ROOM_UNIT.height / 2 * this.partOffs.z)
                    : zIndex;
        }
    }


    /**
     * @param {Number} zIndex 
     */
    setZIndex(zIndex = 0) {
        this.zIndex = this.zIndex
        // 複数パーツアイテムの場合付随するパーツをすべてにセット
        if (this.multipart == true && this.isRoot == true) {
            Array.prototype.forEach.call(this.parts, (p) => {
                p.zIndex = zIndex;
            })
        }
    }

    /**
     * アイテム、およびそのサブパーツのアンカーを設定する
     * @param {Number} x 
     * @param {Number} y 
     */
    setAnchor(x = 0.5, y = 0.5) {
        this.anchor.set(x,y);
        // 複数パーツアイテムの場合付随するパーツにも設定
        // let baseHight =
        if (this.multipart == true && this.isRoot == true) {
            Array.prototype.forEach.call(this.parts, (p) => {
                
                p.anchor.x = 0;  // x軸のアンカーは0固定
                p.anchor.y = y;
            })
        }
    }


    /**
     * スプライトのtintを変更する
     * @param {Hex} color ex:0xffffff
     */
    setTint(color) {
        // console.log(this.tint);
        this.tint = color;
    }

    /**
     * スプライトのtintを初期値に戻す
     */
    resetTint() {   
        this.tint = 0xffffff;
    }
}