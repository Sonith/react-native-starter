import { Stack } from 'expo-router';
import { View, TouchableOpacity } from 'react-native';
import { TodoProvider } from '@/context/todo-context';
import { AddTodo } from '@/components/add-todo';
import { TodoList } from '@/components/todo-list';
import { useTodo } from '@/context/todo-context';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';

export default function TodoScreen() {
  const { todos, addTodo, toggleTodo, deleteTodo, clearCompleted } = useTodo();

  const completedCount = todos.filter((t) => t.completed).length;
  const totalCount = todos.length;

  return (
    <View className="flex-1">
      <Stack.Screen options={{ title: 'My Todos' }} />

      <Box className="p-6 items-center gap-2">
        <Text className="text-3xl font-bold">Todo List</Text>
        {totalCount > 0 && (
          <Text className="text-md text-typography500">
            {completedCount}/{totalCount} completed
          </Text>
        )}
      </Box>

      <AddTodo onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />

      {completedCount > 0 && (
        <TouchableOpacity className="p-6 items-center" onPress={clearCompleted} activeOpacity={0.7}>
          <Text className="text-error500">Clear completed</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
