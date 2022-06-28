// import styled from 'styled-components'

// export default function Arch({ text, objectSize = 120, spacing = 12, offset = 30, overlap = !false }) {
//   const d = objectSize + spacing * 2
//   const r = objectSize / 2 + spacing / 2
//   const CurvedText = styled.div`
//     margin-bottom: ${overlap ? `-${r}px` : '0'};
//     width: ${d + offset * 2}px;
//     height: ${r + offset * 2 }px;
//     path {
//       fill: transparent;
//     }
//     text {
//       fill: currentColor;
//       text-anchor: middle;
//     }
//   `

//   return (
//     <CurvedText className="curved-text">
//       <svg viewBox={`0 0 ${d + offset * 2} ${r + offset * 2}`}>
//         <path id="curve" d={`M${offset},${r + offset} A${r},${r} 0 0,1 ${d + offset},${r + offset}`} />
//         <text width="500" >
//           <textPath xlinkHref="#curve" startOffset="50%">
//             { 'New collection and accessories accessories' }
//           </textPath>
//         </text>
//       </svg>
//     </CurvedText>
//   )
// }
import React from 'react';
import { ArcText } from '@arctext/react';
import styled from 'styled-components';

export default function Arch() {

  // color: black;
  const Circle = styled(ArcText)`
  position: absolute;
  border-width: 10%;
  & span.character {
    font-size: 14px;
    font-family: monospace;
  }
`

  return (
    <Circle
      text="New   collection   and   accessories "
      characterWidth={9}
      radius={70}
    >
      <div className='w-6 h-6 bg-black rounded-full'></div>
    </Circle>
  );
}
