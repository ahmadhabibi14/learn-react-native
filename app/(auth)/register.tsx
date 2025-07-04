import { Text } from "@/components/ui/text";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { useState } from "react";
import { VStack } from "@/components/ui/vstack";
import { FormControl } from "@/components/ui/form-control";
import { EyeIcon, EyeOffIcon, CheckIcon } from "@/components/ui/icon";
import { Heading } from "@/components/ui/heading";
import { View } from "react-native";
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
} from "@/components/ui/checkbox"

export const options = {
  headerShown: false,
};

type AlertObj = {
  status: string;
  title: string;
  message: string;
}

export default function Register() {
  const [namaLengkap, setNamaLengkap] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ulangiPassword, setUlangiPassword] = useState("");
  const [email, setEmail] = useState("");
  const [noHp, setNoHp] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const [alert, setAlert] = useState<AlertObj>({
    status: '',
    title: '',
    message: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const handleStatePassword = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };
  const [showUlangiPassword, setShowUlangiPassword] = useState(false);
  const handleStateUlangiPassword = () => {
    setShowUlangiPassword((showState) => {
      return !showState;
    });
  };

  const handleRegister = async () => {
    if (!isChecked) {
      setAlert({
        status: "error",
        title: "Pendaftaran Gagal",
        message: "Anda harus menyetujui kebijakan privasi terlebih dahulu.",
      });
      return;
    }

    if (password !== ulangiPassword) {
      setAlert({
        status: "error",
        title: "Pendaftaran Gagal",
        message: "Password dan ulangi password tidak cocok",
      });
      return;
    }

    console.log(
      JSON.stringify({ namaLengkap, username, password, email, noHp })
    );
    try {
      const res = await fetch(
        "https://e162-202-46-154-50.ngrok-free.app/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            namaLengkap,
            username,
            password,
            email,
            noHp,
          }),
        }
      );

      if (res.ok) {
        setAlert({
          status: "success",
          title: "Pendaftaran Berhasil",
          message: "Akun berhasil dibuat",
        });
      } else {
        setAlert({
          status: "error",
          title: "Pendaftaran Gagal",
          message: "Terjadi kesalahan saat mendaftar",
        });
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  return (
    <View className="overflow-auto py-7 bg-white bg-opacity-80 h-full">
      <FormControl className="w-full px-5">
        <VStack space="xl">
          <VStack className="flex flex-col gap-1">
            <Heading className="text-typography-900 font-bold text-3xl">
              Register
            </Heading>
            <Text className="text-sm">Daftarkan diri anda sebagai agen </Text>
          </VStack>
          <div className="flex flex-col gap-3">
            <VStack space="xs">
              <Text className="text-typography-500 text-xs">Nama Lengkap</Text>
              <Input className="min-w-[250px]">
                <InputField
                  type="text"
                  onChangeText={setNamaLengkap}
                  placeholder="Nama Lengkap"
                  placeholderTextColor="#525252"
                />
              </Input>
            </VStack>
            <VStack space="xs">
              <Text className="text-typography-500 text-xs">Username</Text>
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
              <Text className="text-typography-500 text-xs">Email</Text>
              <Input className="min-w-[250px]">
                <InputField
                  type="text"
                  onChangeText={setEmail}
                  placeholder="john@example.com"
                  placeholderTextColor="#525252"
                />
              </Input>
            </VStack>
            <VStack space="xs">
              <Text className="text-typography-500 text-xs">No. HP</Text>
              <Input className="min-w-[250px]">
                <InputField
                  type="text"
                  onChangeText={setNoHp}
                  placeholder="+68xxxxxx"
                  placeholderTextColor="#525252"
                />
              </Input>
            </VStack>
            <VStack space="xs">
              <Text className="text-typography-500 text-xs">Password</Text>
              <Input className="text-center">
                <InputField
                  type={showPassword ? "text" : "password"}
                  placeholder="rahasia#8299"
                  placeholderTextColor="#525252"
                  onChangeText={setPassword}
                />
                <InputSlot className="pr-3" onPress={handleStatePassword}>
                  <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                </InputSlot>
              </Input>
            </VStack>
            <VStack space="xs">
              <Text className="text-typography-500 text-xs">Ulangi Password</Text>
              <Input className="text-center">
                <InputField
                  type={showUlangiPassword ? "text" : "password"}
                  placeholder="rahasia#8299"
                  placeholderTextColor="#525252"
                  onChangeText={setUlangiPassword}
                />
                <InputSlot
                  className="pr-3"
                  onPress={handleStateUlangiPassword}
                >
                  <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                </InputSlot>
              </Input>
            </VStack>
            <Checkbox
              size="sm"
              isInvalid={false}
              isDisabled={false}
              className="flex flex-row gap-2 items-start my-3"
              isChecked={isChecked}
              onChange={(v) => setIsChecked(v)}
              value=""
            >
              <CheckboxIndicator className="shrink-0">
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel className="text-xs">Saya menyetujui <a className="underline" href="/privacy-policy">Kebijakan Privasi</a> aplikasi ini.</CheckboxLabel>
            </Checkbox>
          </div>
          <Button className="w-full bg-neutral-900">
            <ButtonText className="text-neutral-50">Register</ButtonText>
          </Button>
          <Text className="text-sm text-center">Sudah punya akun ? <a className="underline" href="/login">Login</a></Text>
        </VStack>
      </FormControl>
    </View>
  );
}
