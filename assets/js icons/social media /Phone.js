import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function Phone() {
	const phone = `
    <svg viewBox="0 0 29 29" fill="#3b3b3b" xmlns="http://www.w3.org/2000/svg">
    <path d="M27.0911 2.04697L21.5403 0.755461C20.9364 0.614938 20.3192 0.930482 20.0749 1.50522L17.5129 7.53284C17.4035 7.79033 17.38 8.0767 17.4461 8.3488C17.5122 8.6209 17.6642 8.86396 17.8792 9.04135L21.1145 11.7106C19.1945 15.8372 15.8339 19.2727 11.6541 21.25L9.00702 17.9877C8.8311 17.7708 8.59005 17.6176 8.32021 17.551C8.05037 17.4844 7.76636 17.508 7.51101 17.6183L1.53335 20.2017C0.963531 20.4479 0.650388 21.0703 0.7898 21.6794L2.0706 27.2766C2.20372 27.8582 2.71818 28.2778 3.31874 28.2778C16.987 28.2778 28.084 17.1085 28.084 3.30554C28.084 2.70405 27.6723 2.18216 27.0911 2.04697Z" fill="#7B7D88"/>
    </svg>`;
	const Phone = () => <SvgXml xml={phone} width='25' height='25' />;

	return <Phone />;
}
