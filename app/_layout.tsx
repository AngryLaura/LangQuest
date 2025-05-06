import '../global.css';

import { ClerkProvider } from '@clerk/clerk-expo'
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { Slot } from 'expo-router'
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name='index' options ={{ headerShown: false}} />
    </Stack>
  );

//  function RootLayoutNav() {
   // return (
    //  <ClerkProvider>
    //   <Slot />
   //   </ClerkProvider>
   // )
}
