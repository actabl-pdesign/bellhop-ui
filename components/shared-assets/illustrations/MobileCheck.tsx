import React from 'react';

export interface IllustrationMobileCheckProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

const IllustrationMobileCheck: React.FC<IllustrationMobileCheckProps> = ({ 
  width = 112, 
  height = 112, 
  className,
  style 
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
<path fillRule="evenodd" clipRule="evenodd" d="M65 21.3H36C32.134 21.3 28.3 25.134 28.3 29L28.7 83C28.7 86.866 32.134 90.7 36 90.7H42.9327C46.4327 90.7 46.4284 95 42.9327 95H36C29.3726 95 24 89.6274 24 83V29C24 22.3726 29.3726 17 36 17H65C71.6274 17 77 22.3726 77 29V51.0273C86.476 51.5462 94 59.3944 94 69C94 78.9411 85.9411 87 76 87C66.0589 87 58 78.9411 58 69C58 60.1861 64.3349 52.8518 72.7 51.3018V29C72.7 25.134 68.866 21.3 65 21.3ZM76 83C68.268 83 62 76.732 62 69C62 61.268 68.268 55 76 55C83.732 55 90 61.268 90 69C90 76.732 83.732 83 76 83Z" fill="#2642CF" style="fill:#2642CF;fill:color(display-p3 0.3141 0.4061 0.8659);fillOpacity:1;"/>
<path d="M46 25C44.3431 25 43 26.1603 43 27.8172C43 29.474 44.3431 30.5977 46 30.5977H55C56.6569 30.5977 58 29.474 58 27.8172C58 26.1603 56.6569 25 55 25H46Z" fill="#2642CF" style="fill:#2642CF;fill:color(display-p3 0.3141 0.4061 0.8659);fillOpacity:1;"/>
<path d="M46.5 80.9988C46.5 78.7896 48.2909 76.9988 50.5 76.9988C52.7091 76.9988 54.5 78.7896 54.5 80.9988C54.5 83.2079 52.7091 84.9988 50.5 84.9988C48.2909 84.9988 46.5 83.2079 46.5 80.9988Z" fill="#2642CF" style="fill:#2642CF;fill:color(display-p3 0.3141 0.4061 0.8659);fillOpacity:1;"/>
<path d="M94.1954 57.4629C94.8638 56.7073 94.7931 55.553 94.0376 54.8846C93.282 54.2163 92.1277 54.2869 91.4593 55.0425L76.948 71.4465L70.0168 63.36C69.3603 62.5941 68.2073 62.5054 67.4414 63.1619C66.6754 63.8184 66.5867 64.9715 67.2432 65.7374L74.6659 74.3972C75.8491 75.7777 77.9792 75.7943 79.1838 74.4326L94.1954 57.4629Z" fill="#D25664" style="fill:#D25664;fill:color(display-p3 0.8235 0.3373 0.3922);fillOpacity:1;"/>
<mask id="mask0_12_292" style="maskType:alpha" maskUnits="userSpaceOnUse" x="34" y="87" width={width} height={height}>
<rect x="34.3466" y="87.4501" width={width} height={height} fill="url(#paint0_linear_12_292)" style=""/>
</mask>
<g mask="url(#mask0_12_292)">
<path d="M28.7101 83.0013C28.7101 86.8673 32.1441 90.7013 36.0101 90.7013H65.0101C68.5101 90.7013 68.5058 95.0013 65.0101 95.0013H36.0101C29.3827 95.0013 24.0101 89.6288 24.0101 83.0013H28.7101Z" fill="#2642CF" style="fill:#2642CF;fill:color(display-p3 0.3141 0.4061 0.8659);fillOpacity:1;"/>
</g>
<defs>
<linearGradient id="paint0_linear_12_292" x1="71.3703" y1="93.7769" x2="46.363" y2="93.7769" gradientUnits="userSpaceOnUse">
<stop stopOpacity="0" style="stopColor:none;stopOpacity:0;"/>
<stop offset="1" style="stopColor:black;stopOpacity:1;"/>
</linearGradient>
</defs>
</svg>

  );
};

export default IllustrationMobileCheck;
