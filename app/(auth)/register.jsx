import { Text } from "@/components/ui/text";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { useState } from "react";
import { VStack } from "@/components/ui/vstack";
import { FormControl } from "@/components/ui/form-control";
import { EyeIcon, EyeOffIcon } from "@/components/ui/icon";
import { Heading } from "@/components/ui/heading";
import { View } from "react-native";

export const options = {
  headerShown: false,
};

export default function Register() {
  const [namaLengkap, setNamaLengkap] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ulangiPassword, setUlangiPassword] = useState("");
  const [email, setEmail] = useState("");
  const [noHp, setNoHp] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [alert, setAlert] = useState(null);

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
    <View className="overflow-auto py-7 bg-neutral-50 bg-opacity-80">
      <Center>
        <FormControl className="w-full px-5">
          <VStack space="xl">
            <VStack>
              <Heading className="text-typography-900 font-bold text-3xl text-center">
                Register
              </Heading>
              <Text className="text-sm">Daftarkan diri anda sebagai agen </Text>
            </VStack>
            <div className="flex flex-col gap-3">
              <VStack space="xs">
                <Text className="text-typography-500">Nama Lengkap</Text>
                <Input className="min-w-[250px]">
                  <InputField
                    type="text"
                    onChangeText={setNamaLengkap}
                    placeholder="Nama Lengkap"
                  />
                </Input>
              </VStack>
              <VStack space="xs">
                <Text className="text-typography-500">Username</Text>
                <Input className="min-w-[250px]">
                  <InputField
                    type="text"
                    onChangeText={setUsername}
                    placeholder="Enter Your Username..."
                  />
                </Input>
              </VStack>
              <VStack space="xs">
                <Text className="text-typography-500">Email</Text>
                <Input className="min-w-[250px]">
                  <InputField
                    type="email"
                    onChangeText={setEmail}
                    placeholder="john@example.com"
                  />
                </Input>
              </VStack>
              <VStack space="xs">
                <Text className="text-typography-500">No. HP</Text>
                <Input className="min-w-[250px]">
                  <InputField
                    type="text"
                    onChangeText={setNoHp}
                    placeholder="+68xxxxxx"
                  />
                </Input>
              </VStack>
              <VStack space="xs">
                <Text className="text-typography-500">Password</Text>
                <Input className="text-center" onChangeText={setPassword}>
                  <InputField
                    type={showPassword ? "text" : "password"}
                    placeholder="rahasia#8299"
                    placeholderTextColor="#111"
                  />
                  <InputSlot className="pr-3" onPress={handleStatePassword}>
                    <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                  </InputSlot>
                </Input>
              </VStack>
              <VStack space="xs">
                <Text className="text-typography-500">Ulangi Password</Text>
                <Input className="text-center" onChangeText={setUlangiPassword}>
                  <InputField
                    type={showUlangiPassword ? "text" : "password"}
                    placeholder="rahasia#8299"
                    placeholderTextColor="#111"
                  />
                  <InputSlot className="pr-3" onPress={handleStateUlangiPassword}>
                    <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                  </InputSlot>
                </Input>
              </VStack>
              <div className="mt-2 flex items-start">
                <input
                  type="checkbox"
                  className="mt-1 mr-2"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                <label className="text-sm text-gray-700">
                  Saya menyetujui{" "}
                  <span className="font-semibold underline cursor-pointer">
                    Kebijakan Privasi
                  </span>{" "}
                  aplikasi ini.
                </label>
              </div>
            </div>

            <Button className="w-full bg-neutral-900">
              <ButtonText className="text-neutral-50">Submit</ButtonText>
            </Button>
          </VStack>
        </FormControl>
      </Center>
    </View>
  );
}
