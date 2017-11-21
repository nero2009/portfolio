import styled from 'styled-components';

export const A = styled.a`
    color: blue;
`;



export const [H1,H2,H3,H4,H5,H6,P] = ['h1','h2','h3','h4','h5','h6','p']
	.map((tag) => styled(tag)`
		${({align}) => align && `text-align:${align}`}	
	`)