import { HStack } from "@/components/ui/hstack";
import { Input, InputField } from "@/components/ui/input";
import React from "react";
import { Image } from "@/components/ui/image"
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Button, ButtonIcon } from "@/components/ui/button"
import { SquareUserRound } from "lucide-react-native";

const PhoneNumber = (): React.JSX.Element => {
  return (
    <HStack className="items-end py-5 rounded-md flex flex-row gap-5 w-full px-4">
      <Image
        size="md"
        source={require("../../assets/images/provider_xl.png")}
        alt="image"
        className="mb-2 w-10 h-10"
      />
      <VStack className="flex flex-col gap-1 grow">
        <Text className="text-xs">Nomor Telepon</Text>
        <Input
          id="phoneNumber"
          className="border-none w-full focus:border-none focus:outline-none"
          variant="underlined"
          size="md"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
        >
          <InputField placeholder="+62 8xxxxx" className="focus:outline-none" />
        </Input>
      </VStack>
      <Button className="w-fit h-auto bg-transparent p-0 text-black">
        <ButtonIcon
          as={SquareUserRound}
          color="#525252"
          className="w-8 h-8"
        />
      </Button>
    </HStack>
  ) 
}

export default PhoneNumber;