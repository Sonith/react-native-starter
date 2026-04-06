import { View } from 'react-native';
import { Stack } from 'expo-router';
import { Text } from '@/components/themed-text';
import { Link } from 'expo-router';
import { useThemeColor } from '@/hooks/use-theme-color';

export default function ModalScreen() {
  const backgroundColor = useThemeColor({}, 'background');

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Stack.Screen options={{ title: 'Modal' }} />
      <Text type="title" style={{ color: useThemeColor({}, 'typography') }}>
        This is a modal
      </Text>
      <Link href="/" dismissTo style={styles.link}>
        <Text type="link">Go to home screen</Text>
      </Link>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
};
