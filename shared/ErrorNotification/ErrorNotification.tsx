import { useEffect, useState } from "react";
import { ErrorNotificationProps } from "./ErrorNotificationProps";
import { Text, StyleSheet, Dimensions, Animated} from 'react-native';
import { Colors, Fonts } from "../tokens";

export function ErrorNotification({ error }: ErrorNotificationProps) {
	const [isShown, setIsShown] = useState<boolean>(false);
	const animatedValue = new Animated.Value(-100); 
	const onEnter = () => {
		Animated.timing(animatedValue, {
			toValue: 0,
			duration: 400,
			useNativeDriver: true
		}).start();
	};


	useEffect(() => {
		if (!error) {
			return;
		}
		setIsShown(true);
		const timerId = setTimeout(() => {
			setIsShown(false);
		}, 3000);
		return () => {
			clearInterval(timerId)
		}
	}, [error]);

	if (!isShown) {
		return <></>
	}

	return(
		<Animated.View style={{
			...styles.error,
			transform: [
				{translateY: animatedValue}
			]
		}} onLayout={onEnter}>
			<Text style={styles.errorText}>{error}</Text>
		</Animated.View>
	) 
}

const styles = StyleSheet.create({
	error: {
		position: 'absolute',
		top: 0,
		width: Dimensions.get('screen').width,
		backgroundColor: Colors.red,
		padding: 15
	},
	errorText: {
		fontSize: Fonts.f16,
		color: Colors.white,
		textAlign: 'center'
	}
})