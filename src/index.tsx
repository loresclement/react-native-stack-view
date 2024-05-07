import type { ReactNode } from "react"
import React from "react"
import { View, type DimensionValue, type FlexStyle, type ViewStyle } from "react-native"

type StackProps = {
	children: ReactNode
	margin?: DimensionValue
	marginVertical?: DimensionValue,
	marginHorizontal?: DimensionValue,
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
	marginHorizontal,
	marginVertical,
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
				marginVertical: marginVertical,
				marginHorizontal: marginHorizontal,
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