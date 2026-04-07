import { View } from 'react-native';
import { Stack } from 'expo-router';
import { Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Box } from '@/components/ui/box';

import { useAuth } from '@/context/auth-context';

export default function ProtectedDashboard() {
  const { role, toggleRole, logout } = useAuth();

  return (
    <View className="flex-1 bg-background p-6">
      <Stack.Screen
        options={{
          title: 'Dashboard',
          headerRight: () => (
            <Button onPress={logout} variant="link" size="sm">
              Logout
            </Button>
          ),
        }}
      />

      <VStack className="gap-4 mt-4">
        <Box className="p-4 bg-card rounded-lg">
          <Text className="text-2xl font-bold mb-2">
            Welcome{role === 'admin' ? ', Admin' : ''}!
          </Text>
          <Text className="text-base text-typography-500 mb-4">
            This is a protected route. You can only see this because you&apos;re logged in.
          </Text>

          <VStack className="gap-2">
            <Text className="font-semibold">Role Controls:</Text>
            <HStack className="gap-2 items-center">
              <Text className="text-sm">Current Role:</Text>
              <Text
                className={`font-bold ${
                  role === 'admin' ? 'text-success-500' : 'text-typography-500'
                }`}>
                {role}
              </Text>
              <Button onPress={toggleRole} size="sm" variant="outline">
                Toggle Role
              </Button>
            </HStack>

            <Text className="text-sm mt-2 text-typography-400">
              {role === 'admin'
                ? 'As admin, you can access /protected/admin settings.'
                : 'As a regular user, you can only access the dashboard. Try toggling to admin to see nested protected routes!'}
            </Text>
          </VStack>
        </Box>

        <Box className="p-4 bg-card rounded-lg">
          <Text className="font-bold mb-2">Role-Based Access Demo:</Text>
          <VStack className="gap-2">
            <HStack className="justify-between items-center">
              <Text className="text-sm">Admin Settings:</Text>
              <Text
                className={`text-sm ${
                  role === 'admin' ? 'text-success-500' : 'text-error-500'
                }`}>
                {role === 'admin' ? 'Accessible' : 'Restricted'}
              </Text>
            </HStack>
            <Text className="text-xs text-typography-500">
              Navigate to Admin Settings to test role-based access
            </Text>
          </VStack>
        </Box>
      </VStack>
    </View>
  );
}
