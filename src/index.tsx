import type { ReactNode } from "react"
import React from "react"
import { View, type DimensionValue, type FlexStyle, type ViewStyle } from "react-native"

type StackProps = {
	children: ReactNode
	margin?: DimensionValue
	padding?: DimensionValue
	direction?: FlexStyle["flexDirection"]
	gap?:  FlexStyle["gap"]
	rowGap?:  FlexStyle["rowGap"]
	color?: ViewStyle["backgroundColor"]
}

const Stack = ({
	children, 
	margin, 
	padding, 
	direction,
	gap,
	rowGap,
	color
}: StackProps) => 
{
	return(
		<View 
			style={{
				margin: margin, 
				padding: padding,
				flexDirection: direction,
				gap: gap,
				rowGap: rowGap,
				backgroundColor: color
			}}
		>
			{children}
		</View>
	)
}

export default Stack