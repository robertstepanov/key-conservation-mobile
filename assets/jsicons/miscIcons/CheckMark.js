import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function CheckMark(props) {
  const checkMark = `

  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11.5" cy="11.5" r="11.5" fill="#CDFF47"/>
<path d="M17.7141 8.05547L16.7516 7.06562C16.7133 7.02187 16.6531 7 16.5984 7C16.5383 7 16.4836 7.02187 16.4453 7.06562L9.77344 13.7867L7.34531 11.3586C7.30156 11.3148 7.24687 11.293 7.19219 11.293C7.1375 11.293 7.08281 11.3148 7.03906 11.3586L6.06562 12.332C5.97813 12.4195 5.97813 12.5562 6.06562 12.6437L9.12812 15.7062C9.325 15.9031 9.56562 16.018 9.76797 16.018C10.0578 16.018 10.3094 15.8047 10.4023 15.7172H10.4078L17.7195 8.36719C17.7961 8.27422 17.7961 8.1375 17.7141 8.05547V8.05547Z" fill="black"/>
</svg>`;

  const CheckMark = () => (
    <SvgXml xml={checkMark} width='23' height='23' {...props} />
  );

  return <CheckMark />;
}
