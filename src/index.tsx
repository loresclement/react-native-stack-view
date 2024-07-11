import type { ReactNode } from "react"
import React from "react"
import { View, type DimensionValue, type FlexStyle, type ViewStyle } from "react-native"

type StackProps = {
	children: ReactNode
	margin?: DimensionValue
	marginVertical?: DimensionValue,
	marginHorizontal?: DimensionValue,
	marginRight?: DimensionValue,
	marginLeft?: DimensionValue,
	marginTop?: DimensionValue,
	marginBottom?: DimensionValue,
	paddingRight?: DimensionValue,
	paddingLeft?: DimensionValue,
	paddingTop?: DimensionValue,
	paddingBottom?: DimensionValue,
	padding?: DimensionValue
	wrap?: FlexStyle['flexWrap'],
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
	marginBottom,
	marginLeft,
	marginRight,
	marginTop,
	paddingRight,
	paddingLeft,
	paddingTop,
	paddingBottom,
	gap,
	justifyContent,
	rowGap,
	alignItems,
	color,
	wrap
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
				marginBottom: marginBottom,
				marginTop: marginTop,
				marginLeft: marginLeft,
				marginRight: marginRight,
				paddingRight: paddingRight,
				paddingBottom: paddingBottom,
				paddingLeft: paddingLeft,
				paddingTop: paddingTop,
				alignItems: alignItems,
				justifyContent: justifyContent,
				rowGap: rowGap,
				backgroundColor: color,
				flexWrap: wrap
			}}
		>
			{children}
		</View>
	)
}

export default Stack