import React, { useState } from 'react';
import { TextInput, useColorScheme } from 'react-native';
import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';

type AddTodoProps = {
  onAdd: (text: string) => void;
};

export function AddTodo({ onAdd }: AddTodoProps) {
  const [text, setText] = useState('');
  const colorScheme = useColorScheme();

  const handleSubmit = () => {
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <Box className="flex-row items-center gap-3 p-4 mx-4 mt-2 rounded-xl bg-background-0 shadow-soft-1">
      <TextInput
        className="flex-1 h-10 px-4 rounded-lg border border-outline-200 bg-background-50"
        style={{ color: colorScheme === 'dark' ? '#FAFAFA' : '#171717' }}
        placeholder="Add a new todo..."
        placeholderTextColor="#A3A3A3"
        value={text}
        onChangeText={setText}
        onSubmitEditing={handleSubmit}
        returnKeyType="done"
        blurOnSubmit
      />
      <Button onPress={handleSubmit} variant="solid" size="md">
        <ButtonText>Add</ButtonText>
      </Button>
    </Box>
  );
}
