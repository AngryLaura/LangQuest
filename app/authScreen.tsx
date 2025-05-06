import React from 'react'
import * as WebBrowser from 'expo-web-browser'
import { Text, View, Button } from 'react-native'
import { Link } from 'expo-router'
import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    void WebBrowser.warmUpAsync()
    return () => {
      void WebBrowser.coolDownAsync()
    }
  }, [])
}

WebBrowser.maybeCompleteAuthSession()

export default function Page() {
  useWarmUpBrowser()

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/dashboard', { scheme: 'myapp' }),
      })


      if (createdSessionId) {
        setActive!({ session: createdSessionId })
      } else {
      }
    } catch (err) {

      console.error(JSON.stringify(err, null, 2))
    }
  }, [])

  return (
    <View>
      <Link href="/">
        <Text>Home</Text>
      </Link>
      <Button title="Sign in with Google" onPress={onPress} />
    </View>
  )
}