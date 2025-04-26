import { View} from "react-native";
import PhoneNumber from "./pulsa/PhoneNumber";
import { Text } from "@/components/ui/text";
import { HStack } from "@/components/ui/hstack";
import PulseOptions from "./pulsa/PulseOptions";
import { Button, ButtonText } from "@/components/ui/button";
import { Div } from "@expo/html-elements";

export default function PulseScreen() {
  return (
    <View className="flex flex-col p-4 gap-4 bg-white h-full">
      <PhoneNumber />
      <HStack className="w-full flex">
        <Button className="w-1/2 bg-transparent font-semibold flex flex-col text-neutral-800">
          <Text>Pulsa</Text>
          <Div className="h-[2px] bg-black w-full"></Div>
        </Button>
        <Button className="w-1/2 bg-transparent font-semibold flex flex-col text-neutral-800">
          <Text>Internet</Text>
        </Button>
      </HStack>
      <PulseOptions />
    </View>
  );
}
