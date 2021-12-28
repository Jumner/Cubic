import { Box, forwardRef, Tag, Tooltip } from '@chakra-ui/react';
import React from 'react';

const TTWrapper = React.forwardRef(({ children, ...rest }, ref) => (
	<Tag ref={ref} {...rest}>
		{children}
	</Tag>
));
export default function TT({ children, label }) {
	return (
		<Tooltip
			label={label}
			p="3"
			borderRadius="md"
			dropShadow="lg"
			hasArrow
			bg="gray.100"
			color="black"
		>
			<TTWrapper>{children}</TTWrapper>
		</Tooltip>
	);
}
