// The approved tour follows the V12 plan. Positions are metres in the 3D model.
export const tourStart = [25.1, 16.3];

export function tourSteps(world, byId) {
 const [west, east] = world.boardingGaps;
 const stopWest = west.rec.approach;
 const stopEast = east.rec.approach;
 const goat = byId['T-15'];
 const gymEntranceZ = world.p(470, 339.5)[1];
 const gymSouthX = world.p(470 + (580 - 470) * .38, 504)[0];
 const north=0,eastward=Math.PI/2,south=Math.PI,westward=-Math.PI/2;
 const walk = (label, points) => ({
  kind: 'walk', label,
  points: points.map(([x,z,yaw])=>({position:[x,z],yaw}))
 });
 const ride = (label, from, to) => ({kind:'ride',label,from,to});

 return [
  walk('イートイン1のブース', [
   [19.4,11.6],[11.8,10.1,south],[4.0,10.1,south],[-4.8,10.0,south],
   [-5.1,6.1,westward],[-5.1,1.2,westward],[-5.1,-6.0,westward],[-5.1,-13.9,westward],
   [1.2,-14.0,north],[8.8,-14.0,north],[16.2,-14.0,north],[24.6,-14.0,north],
   [31.3,-17.6,north],[31.3,-25.3],stopEast
  ]),
  ride('乗降場②から①へ',east,west),
  walk('ヤギ牧場', [[-36.2,-38.6,north],[...goat.approach,north]]),
  {kind:'look',label:'ヤギ牧場',look:goat.pos,duration:3},
  walk('乗降場①へ戻る', [[-36.2,-38.6],stopWest]),
  ride('乗降場①から②へ',west,east),
  walk('スズキヤ横から体育館へ', [
   [31.6,-25.3,eastward],[31.9,-9.2,eastward],[29.7,-3.4,eastward],
   [27.8,2.5,eastward],[27.8,8.9,eastward],[29.5,gymEntranceZ,eastward],[35.3,gymEntranceZ,eastward]
  ]),
  walk('体育館の客席へ', [
   [35.3,17.6],[37.3,19.4],[52.3,19.4],
   [54.4,21.4],[54.4,30.7],[50.7,32.2],[46.6,32.2,north]
  ]),
  {kind:'turn',label:'体育館を見渡す',duration:9},
  walk('体育館の南側玄関から屋台へ', [
   // Keep the west turn south of the beds and pots outside the front entrance.
   [gymSouthX,36.2],[gymSouthX,41.2],[gymSouthX,53.0],[36.4,53.0],[29.4,53.0],[30.5,56.6]
  ]),
  walk('キッチンカーの間を往復', [
   [31.9,61.5,eastward],[32.0,65.8,eastward],[32.2,70.8,eastward],[32.6,76.5,eastward],
   [30.6,74.4,westward],[28.6,70.5,westward],[28.5,65.7,westward],[28.5,57.1,westward]
  ]),
  walk('通路から賑わいゾーンへ', [
   [27.6,52.1],[27.4,45.0],[27.4,33.5],[27.8,25.0],[27.2,19.7],tourStart
  ])
 ];
}
