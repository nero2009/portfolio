import styled,{css} from 'styled-components'
import media from './media'

export const Container = styled.div`
	padding-left:120px;
	padding-right:120px;
	padding-top:30px;

	${media.giant`
	padding-left:90px;
	padding-right:90px;
	padding-top:30px;

	`}
	${media.desktop`
	padding-left:60px;
	padding-right:60px;
	padding-top:15px;

	`}
	

	${media.tablet`
	padding-left:30px;
	padding-right:30px;
	padding-top:15px;

	`}
	${media.phone`
		padding-left:10px;
		padding-right:10px;
		padding-top:15px;
	
	`}
	
	
` 
export const Div = styled.div`
${({ marginBottom }) => marginBottom && css`
  margin-bottom: ${marginBottom};
`}
${({ marginLeft }) => marginLeft && css`
  margin-left: ${marginLeft};
`}
${({ marginRight }) => marginRight && css`
  margin-right: ${marginRight};
`}
${({ marginTop }) => marginTop && css`
  margin-top: ${marginTop};
`}
`;

export const Flex = styled(Div)`
display: flex;
${({ column }) => column && css`
  flex-direction: column;
`}
${({ justify }) => justify && css`
  justify-content: ${justify};
`}
${({ align }) => align && css`
  align-content: ${align};
`}
`;