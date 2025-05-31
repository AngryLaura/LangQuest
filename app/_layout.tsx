
console.log('Clerk key:', process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY);

import '../global.css';

import { ClerkProvider } from '@clerk/clerk-expo'
import { Stack } from 'expo-router';

import Constants from 'expo-constants';

const myApiKey = Constants.expoConfig?.extra?.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;


if (!myApiKey) {

throw new Error('EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY is not defined');
}


export default function Layout() {
  return (
    <ClerkProvider publishableKey={myApiKey}>
<Stack>
      <Stack.Screen name="index" options ={{ headerShown: false}} />
      <Stack.Screen name="gameScreen" options ={{ headerShown: false}} />
      <Stack.Screen name="authScreen" options ={{ headerShown: false}} />
    </Stack>
    </ClerkProvider>
  );
}
