import { View, Text } from 'react-native'
import React from 'react'
import { useAuth, useUser } from '@clerk/clerk-expo'
import { Redirect,useRouter } from 'expo-router';

const router = useRouter();

const index = () => {
 const {isSignedIn, isLoaded } = useAuth();
 const { user } = useUser();

 if(!isLoaded) {
    return <Text>Loading...</Text>;
 }

if (isSignedIn) {
return <Redirect href={'/gameScreen'} />;
} else {
return <Redirect href={'/authScreen'} />;
}
};

export default index