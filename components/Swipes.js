import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton } from 'react-native-gesture-handler';
import SwipeableImage from './SwipeableImage';

export default function Swipes({ users, currentIndex, handleLike, swipesRef, handlePass }) {
    const [willLike, setwillLike] = useState(false)
    const [willPass, setwillPass] = useState(false)
    const renderLeftActions = () => {
        return (<RectButton style={styles.container}>
            <SwipeableImage user={users[currentIndex + 1]} ></SwipeableImage>
        </RectButton>)
    }
    const renderRightActions = () => {
        return (<RectButton style={styles.container}>
            <SwipeableImage user={users[currentIndex + 1]} ></SwipeableImage>
        </RectButton>)
    }


    return (
        <Swipeable
            ref={swipesRef}
            friction={2}
            leftThreshold={40}
            rightThreshold={40}
            renderLeftActions={renderLeftActions}
            renderRightActions={renderRightActions}
            onSwipeableLeftOpen={() => {
                setwillLike(false)
                handleLike()
            }}
            onSwipeableRightOpen={() => {
                setwillPass(false)
                handlePass()
            }}


        >
            <SwipeableImage user={users[currentIndex]} willLike={willLike} willPass={willPass} />
        </Swipeable >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})