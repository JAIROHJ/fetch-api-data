import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
	background-color:blue;
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 3rem 0 2rem 0;
	gap: 0.25rem;

	a {
		color: var(--clr-light);
	}
	span {
		color: var(--clr-light);
	}
`;

const Footer = () => {
	return (
		<FooterContainer>
			<span>Developed By:</span>
			<a href="https://github.com/JAIROHJ" target="_blank" rel="noopener noreferrer">
				CODING TEST 
			</a>
		</FooterContainer>
	);
};

export default Footer;
