 const MAX_X = 10;
 const MAX_Y = 10;
 const WATER = 0;
 const SHIP = 1;
 const WATER_CHECKED = 2;
 const SHIP_CHECKED = 3;
 const createArray = <T>(length:number, callback: ()=> T) => {
    return [...new Array(length)].map(callback);
}
export {MAX_X, MAX_Y, WATER, SHIP, WATER_CHECKED, SHIP_CHECKED, createArray}