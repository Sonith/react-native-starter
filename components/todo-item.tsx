import React from 'react';
import { Pressable } from '@/components/ui/pressable';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { HStack } from '@/components/ui/hstack';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { type Todo } from '@/types/todo';

type TodoItemProps = {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
};

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <Animated.View entering={FadeIn} exiting={FadeOut}>
      <Pressable onPress={onToggle} className="active:opacity-70">
        <Box
          className="p-4 mx-4 my-1 rounded-xl bg-background shadow-sm"
          shadowColor="$shadowColor"
          shadowOffset={{ width: 0, height: 1 }}
          shadowOpacity={0.05}
          shadowRadius={2}
          elevation={1}>
          <HStack className="flex-1 items-center">
            <Box
              className="w-6 h-6 rounded-full border-2 items-center justify-center"
              style={{
                borderColor: todo.completed ? '#52c41a' : '$outline',
              }}>
              {todo.completed && (
                <Text className="text-success500 font-bold">✓</Text>
              )}
            </Box>
            <Text
              className="flex-1 ml-3 text-md"
              style={{
                color: todo.completed ? '#8c8c8c' : 'inherit',
                textDecorationLine: todo.completed ? 'line-through' : 'none',
              }}>
              {todo.text}
            </Text>
          </HStack>
          <Pressable onPress={onDelete} className="active:opacity-70">
            <Text className="text-error500 ml-2">✕</Text>
          </Pressable>
        </Box>
      </Pressable>
    </Animated.View>
  );
}
