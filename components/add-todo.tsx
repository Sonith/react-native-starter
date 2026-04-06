import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';

type AddTodoProps = {
  onAdd: (text: string) => void;
};

export function AddTodo({ onAdd }: AddTodoProps) {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <Box className="flex-row p-4 mx-4 mt-2 rounded-xl bg-background shadow-sm">
      <TextInput
        className="flex-1 text-md py-3 px-4 rounded-lg border border-outline"
        placeholder="Add a new todo..."
        placeholderTextColor="$typography500"
        value={text}
        onChangeText={setText}
        onSubmitEditing={handleSubmit}
        returnKeyType="done"
        blurOnSubmit
      />
      <Button onPress={handleSubmit} variant="solid" size="md">
        <Text className="text-white">Add</Text>
      </Button>
    </Box>
  );
}
