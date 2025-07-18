import React from 'react';

export interface IllustrationLockOnProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

const IllustrationLockOn: React.FC<IllustrationLockOnProps> = ({ 
  width = 112, 
  height = 112, 
  className,
  style 
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
<path fillRule="evenodd" clipRule="evenodd" d="M56.4745 12.585C43.8235 12.585 33.5677 22.8407 33.5677 35.4917V43.907H29.4237C23.3252 43.907 18.3813 48.8508 18.3813 54.9494V88.1697C18.3813 94.2673 23.322 99.2121 29.4214 99.2121H61.5964V94.2121H29.4214C26.0852 94.2121 23.3813 91.5077 23.3813 88.1697V54.9494C23.3813 51.6122 26.0866 48.907 29.4237 48.907H83.5254C86.8625 48.907 89.5678 51.6122 89.5678 54.9494V64.7646H94.5678V54.9494C94.5678 48.8508 89.6239 43.907 83.5254 43.907H79.3813V35.4917C79.3813 22.8407 69.1256 12.585 56.4745 12.585ZM74.3813 43.907V35.4917C74.3813 25.6021 66.3642 17.585 56.4745 17.585C46.5849 17.585 38.5677 25.6021 38.5677 35.4917V43.907H74.3813Z" fill="#2642CF" style="fill:#2642CF;fill:color(display-p3 0.3141 0.4061 0.8659);fillOpacity:1;"/>
<path d="M54.1017 77.2544V70.6121C51.8722 69.6824 50.3051 67.4819 50.3051 64.9155C50.3051 61.5081 53.0672 58.746 56.4745 58.746C59.8819 58.746 62.644 61.5081 62.644 64.9155C62.644 67.4819 61.077 69.6824 58.8474 70.6121V77.2544C58.8474 78.5649 57.7851 79.6273 56.4746 79.6273C55.1641 79.6273 54.1017 78.5649 54.1017 77.2544Z" fill="#2642CF" style="fill:#2642CF;fill:color(display-p3 0.3141 0.4061 0.8659);fillOpacity:1;"/>
<path d="M62.644 64.9153C62.644 67.4818 61.077 69.6822 58.8474 70.612V77.2543C58.8474 78.5648 57.7851 79.6271 56.4746 79.6271C55.1641 79.6271 54.1017 78.5648 54.1017 77.2543V70.612C51.8722 69.6823 50.3051 67.4818 50.3051 64.9153C50.3051 61.508 53.0672 58.7458 56.4745 58.7458C59.8819 58.7458 62.644 61.508 62.644 64.9153Z" fill="#D25664" style="fill:#D25664;fill:color(display-p3 0.8235 0.3373 0.3922);fillOpacity:1;"/>
<mask id="mask0_12_312" style="maskType:alpha" maskUnits="userSpaceOnUse" x="29" y="49" width={width} height={height}>
<rect x="29.899" y="49.7646" width={width} height={height} fill="url(#paint0_linear_12_312)" style=""/>
</mask>
<g mask="url(#mask0_12_312)">
<path d="M89.5678 54.9509V90.3015C89.5678 91.6822 90.6871 92.8015 92.0678 92.8015C93.4485 92.8015 94.5678 91.6822 94.5678 90.3015V54.9509H89.5678Z" fill="#2642CF" style="fill:#2642CF;fill:color(display-p3 0.3141 0.4061 0.8659);fillOpacity:1;"/>
<path d="M88.0964 96.7136C88.0964 98.0943 86.9772 99.2136 85.5964 99.2136H41.5089V94.2136H85.5964C86.9772 94.2136 88.0964 95.3329 88.0964 96.7136Z" fill="#2642CF" style="fill:#2642CF;fill:color(display-p3 0.3141 0.4061 0.8659);fillOpacity:1;"/>
</g>
<defs>
<linearGradient id="paint0_linear_12_312" x1="70.0465" y1="78.3628" x2="87.9525" y2="97.1736" gradientUnits="userSpaceOnUse">
<stop offset="0.403031" style="stopColor:black;stopOpacity:1;"/>
<stop offset="1" stopOpacity="0" style="stopColor:none;stopOpacity:0;"/>
</linearGradient>
</defs>
</svg>

  );
};

export default IllustrationLockOn;
