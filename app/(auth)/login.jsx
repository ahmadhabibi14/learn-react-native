import { Text } from "@/components/ui/text";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input"
import { Button, ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
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
    <Center className="min-h-screen bg-neutral-50 bg-opacity-80">
      <FormControl className="w-full px-5">
        <VStack space="xl">
          <Heading className="text-typography-900 font-bold text-3xl text-center">Login</Heading>
          <VStack space="xs">
            <Text className="text-typography-500">Username</Text>
            <Input className="min-w-[250px]">
              <InputField type="text" onChangeText={setUsername} placeholder="Enter Your Username..."/>
            </Input>
          </VStack>
          <VStack space="xs">
            <Text className="text-typography-500">Password</Text>
            <Input className="text-center" onChangeText={setPassword}>
              <InputField type={showPassword ? "text" : "password"} placeholder="rahasia#8299" placeholderTextColor="#111"/>
              <InputSlot className="pr-3" onPress={handleState}>
                <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
              </InputSlot>
            </Input>
          </VStack>
          <Button className="w-full bg-neutral-900">
            <ButtonText className="text-neutral-50">Submit</ButtonText>
          </Button>
        </VStack>
      </FormControl>
    </Center>
  );
}
