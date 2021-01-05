export function directionWind (degree: number): any{

  let directionWind: any;

  try {
    directionWind = require('../../../assets/db/directions.json');
  }catch {
    directionWind = [];
  }

  return directionWind.reduce((prev, curr) => Math.abs(curr.deg - degree) > Math.abs(prev.deg - degree) ? prev : curr );
}