import React from 'react';

export interface IllustrationBellProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

const IllustrationBell: React.FC<IllustrationBellProps> = ({ 
  width = 112, 
  height = 112, 
  className,
  style 
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
<path fillRule="evenodd" clipRule="evenodd" d="M50.8201 19.0403C49.583 19.0403 48.5801 20.0432 48.5801 21.2803C48.5801 22.5174 49.583 23.5203 50.8201 23.5203H53.6201V29.1559C36.0765 29.9148 21.2609 42.7062 18.0655 60.1208C17.6836 62.2021 19.2819 64.1202 21.3979 64.1202H90.3223C92.4383 64.1202 94.0365 62.2021 93.6547 60.1208C90.4593 42.7062 75.6437 29.9148 58.1001 29.1559V23.5203H60.9001C62.1372 23.5203 63.1401 22.5174 63.1401 21.2803C63.1401 20.0432 62.1372 19.0403 60.9001 19.0403H50.8201ZM22.7346 59.6402H88.9856C85.5868 44.4773 72.1042 33.6002 56.4484 33.6002H55.2718C39.616 33.6002 26.1334 44.4773 22.7346 59.6402Z" fill="#2642CF" style="fill:#2642CF;fill:color(display-p3 0.3141 0.4061 0.8659);fillOpacity:1;"/>
<path d="M14.42 80.3603C14.42 73.4015 20.0613 67.7603 27.02 67.7603H84.98C91.9388 67.7603 97.58 73.4015 97.58 80.3603V84.5602C97.58 86.4159 96.0757 87.9202 94.22 87.9202H47.6C46.3629 87.9202 45.36 86.9174 45.36 85.6803C45.36 84.4431 46.3629 83.4403 47.6 83.4403H93.1V80.3603C93.1 75.8757 89.4646 72.2403 84.98 72.2403H27.02C22.5355 72.2403 18.9 75.8757 18.9 80.3603V85.6803C18.9 86.9174 17.8972 87.9202 16.66 87.9202C15.4229 87.9202 14.42 86.9174 14.42 85.6803V80.3603Z" fill="#2642CF" style="fill:#2642CF;fill:color(display-p3 0.3141 0.4061 0.8659);fillOpacity:1;"/>
<path d="M50.8201 19.0403C49.583 19.0403 48.5801 20.0432 48.5801 21.2803C48.5801 22.5174 49.583 23.5203 50.8201 23.5203H53.6201V30.1559C53.6201 33.0006 58.1001 33.0006 58.1001 30.1559V23.5203H60.9001C62.1372 23.5203 63.1401 22.5174 63.1401 21.2803C63.1401 20.0432 62.1372 19.0403 60.9001 19.0403H50.8201Z" fill="#D25664" style="fill:#D25664;fill:color(display-p3 0.8235 0.3373 0.3922);fillOpacity:1;"/>
<mask id="mask0_12_274" style="maskType:alpha" maskUnits="userSpaceOnUse" x="12" y="80" width={width} height={height}>
<rect width={width} height={height} transform="matrix(-1 0 0 1 52.4067 80.0798)" fill="url(#paint0_linear_12_274)" style=""/>
</mask>
<g mask="url(#mask0_12_274)">
<path d="M22.4002 85.6799C22.4002 86.917 23.4199 87.9198 24.678 87.9198L68.8682 87.9198L68.867 83.4398L24.678 83.4398C23.4199 83.4398 22.4002 84.4426 22.4002 85.6799Z" fill="#2642CF" style="fill:#2642CF;fill:color(display-p3 0.3141 0.4061 0.8659);fillOpacity:1;"/>
</g>
<defs>
<linearGradient id="paint0_linear_12_274" x1="37.0237" y1="6.11234" x2="12.0165" y2="6.11234" gradientUnits="userSpaceOnUse">
<stop stopOpacity="0" style="stopColor:none;stopOpacity:0;"/>
<stop offset="1" style="stopColor:black;stopOpacity:1;"/>
</linearGradient>
</defs>
</svg>

  );
};

export default IllustrationBell;
