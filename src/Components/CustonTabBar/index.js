import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Container, Content } from './styles';


import { MaterialIcons } from '@expo/vector-icons'

export default function CustonTabBar({ state, descriptors, navigation }) {
    return (
        <Container>
            <Content>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            // The `merge: true` option makes sure that the params inside the tab screen are preserved
                            navigation.navigate({ name: route.name, merge: true });
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };
                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <View style={{ alignItems: 'center', padding: 8 }}>
                                <View style={[styles.innerButton, { backgroundColor: isFocused ? '#f8e2fd' : 'transparent' }]}>
                                    <MaterialIcons name={options.tabBarIcon} size={34} color={isFocused ? '#8f2abd' : '#535353'} />
                                </View>
                            </View>
                        </TouchableOpacity>

                    )
                })}
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    innerButton: {
        padding: 8,
        borderRadius: 99
    }
})