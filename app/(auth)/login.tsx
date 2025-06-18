import { Text } from "@/components/ui/text";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input"
import { Button, ButtonText } from "@/components/ui/button";
import { View } from "react-native";
import { useState } from "react";
import { VStack } from "@/components/ui/vstack";
import { FormControl } from "@/components/ui/form-control";
import { Heading } from "@/components/ui/heading";
import { EyeIcon, EyeOffIcon } from "@/components/ui/icon";

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };
  return (
    <View className="overflow-auto py-7 bg-white bg-opacity-80 h-full">
      <FormControl className="w-full px-5">
        <VStack space="xl">
          <VStack className="flex flex-col gap-1">
            <Heading className="text-typography-900 font-bold text-3xl">
              Login
            </Heading>
            <Text className="text-sm">Masuk ke akun anda</Text>
          </VStack>
          <VStack space="xs">
            <Text className="text-typography-500">Username</Text>
            <Input className="min-w-[250px]">
              <InputField
                type="text"
                onChangeText={setUsername}
                placeholder="Enter Your Username..."
                placeholderTextColor="#525252"
              />
            </Input>
          </VStack>
          <VStack space="xs">
            <Text className="text-typography-500">Password</Text>
            <Input className="text-center">
              <InputField
                type={showPassword ? "text" : "password"}
                placeholder="rahasia#8299"
                placeholderTextColor="#525252"
                onChangeText={setPassword}
              />
              <InputSlot className="pr-3" onPress={handleState}>
                <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
              </InputSlot>
            </Input>
          </VStack>
          <Button className="w-full bg-neutral-900">
            <ButtonText className="text-neutral-50">Login</ButtonText>
          </Button>
          <Text className="text-sm text-center">Belum punya akun ? <a className="underline" href="/register">Register</a></Text>
        </VStack>
      </FormControl>
    </View>
  );
}
