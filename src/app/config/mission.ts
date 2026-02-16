export const missionImages = [
  "https://res.cloudinary.com/dxi7mifgc/image/upload/v1771085233/Frame_13_fptrik.png",
  "https://res.cloudinary.com/dxi7mifgc/image/upload/v1771085233/Frame_13_3_thythz.png",
  "https://res.cloudinary.com/dxi7mifgc/image/upload/v1771231702/Frame_13_kh9epf.png",
  "https://res.cloudinary.com/dxi7mifgc/image/upload/v1771085233/Frame_13_fptrik.png",
  "https://res.cloudinary.com/dxi7mifgc/image/upload/v1771231702/Frame_13_kh9epf.png",
  "https://res.cloudinary.com/dxi7mifgc/image/upload/v1771085233/Frame_13_3_thythz.png",
];

const GEOMETRY = {
  cx: 400,
  cy: 400,
  svgRadius: 293,  
  centerOffset: 49,  
  itemOffset: 70,  
};

 
const CURVE_STYLES = [
  { cpOffset: 120, width: 2, opacity: 0.8 },   // Outer curve Right
  { cpOffset: 90, width: 4, opacity: 1 },      // Inner curve Right
  { cpOffset: -130, width: 4, opacity: 1 },     // Inner curve Left
  { cpOffset: -160, width: 2, opacity: 0.8 },  // Outer curve Left
];

export const getMissionCurveData = (index: number, total: number) => {
  const angle = (index * 360) / total;
  const rad = (angle * Math.PI) / 180;

 
  const rStart = GEOMETRY.centerOffset;
  const rEnd = GEOMETRY.svgRadius - GEOMETRY.itemOffset;

  const sx = GEOMETRY.cx + rStart * Math.cos(rad);
  const sy = GEOMETRY.cy + rStart * Math.sin(rad);

  const ex = GEOMETRY.cx + rEnd * Math.cos(rad);
  const ey = GEOMETRY.cy + rEnd * Math.sin(rad);
 
  const mx = (sx + ex) / 2;
  const my = (sy + ey) / 2;
 
  const perpAngle = rad + Math.PI / 2;
  const px = Math.cos(perpAngle);
  const py = Math.sin(perpAngle);

  return CURVE_STYLES.map((style) => {
 
    const cpx = mx + style.cpOffset * px;
    const cpy = my + style.cpOffset * py;

    return {
      d: `M ${sx} ${sy} Q ${cpx} ${cpy} ${ex} ${ey}`,
      width: style.width,
      opacity: style.opacity,
    };
  });
};