import { Stack } from "expo-router";

export default function RootLayot() {

    return (
        <Stack screenOptions={{
            headerTitleAlign: 'center',

        }}>
            <Stack.Screen name="index" options={{ title: 'HOME', headerShown: false }} />
        </Stack>
    );

}