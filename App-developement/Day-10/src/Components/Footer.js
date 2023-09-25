import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import { Link } from "react-router-dom";

const Footer = () => {
return (
	<Box>
	
	<Container>
		<Row>
		<Column>
			<Link to='/faq'><Heading>FAQ</Heading></Link>
			
			
		</Column>
		<Column>
			<Link to='/terms'><Heading>Terms and Conditions</Heading></Link> 
			
			
		</Column>
		<Column>
			<Link to='/policy'><Heading>Privacy Policy</Heading></Link>
			
			
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
