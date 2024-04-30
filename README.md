# react-native-stack-view

Write your view component in an elegant way!

Lightweight library to create stack view in react native

## Installation

```sh
npm install react-native-stack-view
```

## Usage

```js
import Stack from 'react-native-stack-view';

// ...

<Stack
    direction={'row'}
    gap={20}
    color={'lightred'}
    margin={5}
    padding={1}
>
    <YourComponent1/>
    <YourComponent2/>
    <YourComponent3/>
    <YourComponent4/>
</Stack>
```

## Props 

```js

type StackProps = {
	children: ReactNode
	margin?: DimensionValue
	padding?: DimensionValue
	direction?: FlexStyle["flexDirection"]
	gap?:  FlexStyle["gap"]
	rowGap?:  FlexStyle["rowGap"]
	color?: ViewStyle["backgroundColor"]
}

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

