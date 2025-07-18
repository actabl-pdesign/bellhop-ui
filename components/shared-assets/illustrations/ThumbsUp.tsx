import React from 'react';

export interface IllustrationThumbsUpProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

const IllustrationThumbsUp: React.FC<IllustrationThumbsUpProps> = ({ 
  width = 112, 
  height = 112, 
  className,
  style 
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
<path d="M32.3267 82.9975C32.3267 81.6329 33.4329 80.5266 34.7976 80.5266C36.1622 80.5266 37.2684 81.6329 37.2684 82.9975C37.2684 84.3621 36.1622 85.4684 34.7976 85.4684C33.4329 85.4684 32.3267 84.3621 32.3267 82.9975Z" fill="#2642CF" style="fill:#2642CF;fill:color(display-p3 0.3141 0.4061 0.8659);fillOpacity:1;"/>
<path fillRule="evenodd" clipRule="evenodd" d="M45.6896 38.1707L40.8536 56.0001H34.2009C28.6339 56.0001 24.1209 60.513 24.1209 66.0801L24.1209 84.055C24.1209 89.622 28.6339 94.135 34.2009 94.135H71.4569C76.2123 94.135 80.3209 90.8115 81.3145 86.1611L85.8043 65.1466C87.1447 58.8733 82.3617 52.9605 75.9468 52.9605H61.312L63.883 42.9815C65.4172 37.0265 60.9204 31.2244 54.771 31.2244C50.5229 31.2244 46.8016 34.0707 45.6896 38.1707ZM50.0133 39.3435C50.5959 37.1955 52.5455 35.7044 54.771 35.7044C57.9926 35.7044 60.3484 38.744 59.5446 41.8638L56.2526 54.6417C56.0798 55.3124 56.227 56.0253 56.6512 56.5727C57.0755 57.1201 57.7292 57.4405 58.4218 57.4405H75.9468C79.5106 57.4405 82.1678 60.7254 81.4232 64.2106L76.9333 85.225C76.3813 87.8086 74.0988 89.655 71.4569 89.655H44.807L44.807 58.5385L50.0133 39.3435ZM40.327 60.4801L40.327 89.655H34.2009C31.1081 89.655 28.6009 87.1478 28.6009 84.055L28.6009 66.0801C28.6009 62.9873 31.1081 60.4801 34.2009 60.4801H40.327Z" fill="#2642CF" style="fill:#2642CF;fill:color(display-p3 0.3141 0.4061 0.8659);fillOpacity:1;"/>
<mask id="mask0_12_310" style="maskType:alpha" maskUnits="userSpaceOnUse" x="54" y="9" width={width} height={height}>
<path d="M56.3159 12.04L56.3159 22.9376" stroke="url(#paint0_radial_12_310)" style="" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round"/>
</mask>
<g mask="url(#mask0_12_310)">
<path d="M56.3159 12.04L56.3159 22.9376" stroke="#D25664" style="stroke:#D25664;stroke:color(display-p3 0.8235 0.3373 0.3922);strokeOpacity:1;" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<mask id="mask1_12_310" style="maskType:alpha" maskUnits="userSpaceOnUse" x="34" y="17" width={width} height={height}>
<path d="M37.0378 19.6355L44.7436 27.3412" stroke="url(#paint1_radial_12_310)" style="" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round"/>
</mask>
<g mask="url(#mask1_12_310)">
<path d="M37.0378 19.6355L44.7436 27.3412" stroke="#D25664" style="stroke:#D25664;stroke:color(display-p3 0.8235 0.3373 0.3922);strokeOpacity:1;" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<mask id="mask2_12_310" style="maskType:alpha" maskUnits="userSpaceOnUse" x="65" y="17" width={width} height={height}>
<path d="M75.5217 19.6355L67.8159 27.3412" stroke="url(#paint2_radial_12_310)" style="" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round"/>
</mask>
<g mask="url(#mask2_12_310)">
<path d="M75.5217 19.6355L67.8159 27.3412" stroke="#D25664" style="stroke:#D25664;stroke:color(display-p3 0.8235 0.3373 0.3922);strokeOpacity:1;" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<radialGradient id="paint0_radial_12_310" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(56.3949 25.2769) rotate(-90) scale(6.71421 23.6126)">
<stop stopOpacity="0" style="stopColor:none;stopOpacity:0;"/>
<stop offset="1" style="stopColor:black;stopOpacity:1;"/>
</radialGradient>
<radialGradient id="paint1_radial_12_310" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(47.0181 29.5042) rotate(-127.257) scale(8.58086 29.6486)">
<stop stopOpacity="0" style="stopColor:none;stopOpacity:0;"/>
<stop offset="1" style="stopColor:black;stopOpacity:1;"/>
</radialGradient>
<radialGradient id="paint2_radial_12_310" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(66.106 28.9395) rotate(-45) scale(6.71421 23.6126)">
<stop stopOpacity="0" style="stopColor:none;stopOpacity:0;"/>
<stop offset="1" style="stopColor:black;stopOpacity:1;"/>
</radialGradient>
</defs>
</svg>

  );
};

export default IllustrationThumbsUp;
