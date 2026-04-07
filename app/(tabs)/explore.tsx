import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Stack } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ExploreScreen() {
  const { top } = useSafeAreaInsets();
  return (
    <Box className="flex-1 p-6" style={{ paddingTop: top }}>
      <Stack.Screen options={{ title: "About" }} />
      <Text className="text-3xl font-bold mb-4">About This App</Text>
      <Text className="text-md mb-2">
        This is a simple todo app built with:
      </Text>
      <Text className="text-md">• Expo SDK 54</Text>
      <Text className="text-md">• Expo Router</Text>
      <Text className="text-md">• NativeWind (Tailwind)</Text>
      <Text className="text-md">• Gluestack UI</Text>
      <Text className="text-md">• React Native Reanimated</Text>
    </Box>
  );
}
