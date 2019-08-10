/**
 * main.js
 * デレステルーム合同告知サイト用スクリプト
 * 
 * Pixi.jsでやる
 * 
 * IE11でも動くように...みたいな配慮がちょこちょこ見られるけど徹底していないので多分動かない
 * 
 * 余裕があればクラスに分割する....(Room, FloorContainer, ItemContainer, Util)
 * 
 */
'use strict';

import { Room } from './Room/Room.js';

// let PIXI = require('pixi.js');

// styles 
// import '../css/main.scss';

// ルーム
window.addEventListener('DOMContentLoaded', () => {
  const room = new Room();

  // サンプル準備
  let gOption = {async: true, buttons: true}
  let sampleList = new Map();

  let writerList = document.querySelectorAll('.writer');

  Array.prototype.forEach.call(writerList, (w) => {
    if (w.dataset.write != undefined || w.dataset.writer != null) {
      let n = w.dataset.writer;
      let g = baguetteBox.run('#gallery-' + n);
      sampleList.set(n,g)
      room.addSample(n,g,gOption);
      w.children[0].dataset.writer = n;
      w.children[1].dataset.writer = n
      w.children[1].children[0].dataset.writer = n;
      w.addEventListener('click', (e) => {
        let t = e.target;
        if (t.dataset.writer !== undefined) {
          baguetteBox.show(0, sampleList.get(t.dataset.writer)[0]);
          e.stopPropagation();
          e.preventDefault();
          window.addEventListener('click',closeSample);
        }
      });
    }
  })

  function closeSample(e) {
    baguetteBox.hide();
    window.removeEventListener('click',closeSample);
  }

  room.addSample('irijako',baguetteBox.run('#gallery-irijako'),gOption);
  room.addSample('inu',baguetteBox.run('#gallery-inu'),gOption);
  room.addSample('usatore',baguetteBox.run('#gallery-usatore'),gOption);
  room.addSample('gobori',baguetteBox.run('#gallery-gobori'),gOption);
  room.addSample('daishinrin',baguetteBox.run('#gallery-daishinrin'),gOption);
  room.addSample('chi_kun',baguetteBox.run('#gallery-chi_kun'),gOption);
  room.addSample('chiba',baguetteBox.run('#gallery-chiba'),gOption);
  room.addSample('chanja',baguetteBox.run('#gallery-chanja'),gOption);
  room.addSample('tokumeikibou',baguetteBox.run('#gallery-tokumeikibou'),gOption);
  room.addSample('najima',baguetteBox.run('#gallery-najima'),gOption);
  room.addSample('narihayao',baguetteBox.run('#gallery-narihayao'),gOption);
  room.addSample('niza',baguetteBox.run('#gallery-niza'),gOption);
  room.addSample('ni_nana',baguetteBox.run('#gallery-ni_nana'),gOption);
  room.addSample('herohero',baguetteBox.run('#gallery-herohero'),gOption);
  room.addSample('marutoyo',baguetteBox.run('#gallery-marutoyo'),gOption);
  room.addSample('megochimo',baguetteBox.run('#gallery-megochimo'),gOption);
  room.addSample('unity_kong',baguetteBox.run('#gallery-unity_kong'),gOption);
  // room.addGallery('wo',baguetteBox.run('#gallery-wo'),gOption);

  WebFont.load(
  {
    custom:
    {
      families: ['Cubicle'],
      urls: ['./css/style.css']
    },
    active: function()
    {
      // console.log('finish font loading')
      go();
    },
    inactive: function()
    {
      console.log('font loading failed');
    }
  });

  // let loading = document.querySelector('#loading');
  // loading.style.display = 'none';

  // 下準備が全部終わったらルームを生成する
  let go = () => {
    Promise.all(room.getPromisesIsReady(), )
    .catch((e) => {
      console.error("Loading Error");
      console.error(e);
      Promise.reject();
    })
    .then(() => {
      setTimeout( () => {
        room.go();
      },500);
    })
    .catch((e) => {
      console.error("Room Runtime Error");
      console.error(e);
    })
  };




  /**
     *  ウィンドウリサイズ時の処理
     *  @todo 外に出す
     */
    window.addEventListener('resize',  function() {
      // resizeRoom();
    });


  /**
   * ユーティリティ(util.jsに入れる...)
   */

  const removeCircular = () => {
    //　Object||ArrayならリストにINして循環参照チェック
    var checkList = [];
    return function(key,value){
        // 初回用
        if( key==='' ){
            checkList.push(value);
            return value;
        }
        // Node,Elementの類はカット
        if( value instanceof Node ){
            return undefined;
        }
        // Object,Arrayなら循環参照チェック
        if( typeof value==='object' && value!==null ){
            return checkList.every(function(v,i,a){
                return value!==v;
            }) ? value: undefined;
        }
        return value;       
    }
  }
});