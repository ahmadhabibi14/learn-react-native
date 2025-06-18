import { HStack } from "@/components/ui/hstack";
import { Input, InputField } from "@/components/ui/input";
import React from "react";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Button, ButtonIcon } from "@/components/ui/button";
import { SquareUserRound } from "lucide-react-native";
import { View } from "react-native";

const PhoneNumber = (): React.JSX.Element => {
  return (
    <HStack className="items-end py-5 rounded-md flex flex-row gap-5 w-full px-4">
      <View className="w-10 h-10">
        <Image
          source={require("../../assets/images/provider_xl.png")}
          alt="image"
          className="w-full h-full"
          resizeMode="contain"
        />
      </View>
      <VStack className="flex flex-col gap-1 grow">
        <Text className="text-xs">Nomor Telepon</Text>
        <Input
          id="phoneNumber"
          className="border border-neutral-200 rounded-md px-4 w-full focus:border-none focus:outline-none"
          variant="underlined"
          size="md"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
        >
          <InputField
            placeholder="+628xxxx"
            className="focus:outline-none"
            placeholderTextColor="#525252"
          />
        </Input>
      </VStack>
      <Button size="lg" className="shrink-0 rounded-md px-3 py-3 h-fit w-fit bg-blue-600">
        <ButtonIcon as={SquareUserRound} color="#FFF" />
      </Button>
    </HStack>
  );
};

export default PhoneNumber;
