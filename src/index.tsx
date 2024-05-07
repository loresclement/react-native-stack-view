import type { ReactNode } from "react"
import React from "react"
import { View, type DimensionValue, type FlexStyle, type ViewStyle } from "react-native"

type StackProps = {
	children: ReactNode
	margin?: DimensionValue
	padding?: DimensionValue
	direction?: FlexStyle["flexDirection"]
	gap?:  FlexStyle["gap"]
	justifyContent?: FlexStyle["justifyContent"]
	alignItems?: FlexStyle['alignItems'],
	rowGap?:  FlexStyle["rowGap"]
	color?: ViewStyle["backgroundColor"]
}

const Stack = ({
	children, 
	margin, 
	padding, 
	direction,
	gap,
	justifyContent,
	rowGap,
	alignItems,
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
				alignItems: alignItems,
				justifyContent: justifyContent,
				rowGap: rowGap,
				backgroundColor: color
			}}
		>
			{children}
		</View>
	)
}

export default Stack