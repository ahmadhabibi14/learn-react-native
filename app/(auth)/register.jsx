import { Header } from "../widgets/header";
import { Text } from "@/components/ui/text"
import { Input, InputField } from "@/components/ui/input"
import { Button, ButtonText } from "@/components/ui/button"
import { Center } from "@/components/ui/center"
import { useState } from 'react';

export default function Register() {
    const [namaLengkap, setNamaLengkap] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [ulangiPassword, setUlangiPassword] = useState('');
    const [email, setEmail] = useState('');
    const [noHp, setNoHp] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [alert, setAlert] = useState(null);

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

        console.log(JSON.stringify({ namaLengkap, username, password, email, noHp }));
        try {
            const res = await fetch("https://e162-202-46-154-50.ngrok-free.app/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ namaLengkap, username, password, email, noHp }),
            });

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
        <Center className="min-h-screen bg-green-500 bg-opacity-80 p-6">
            <Text className={"mt-6"} size="3xl">Form Pendaftaran</Text>
            <Text className={"mt-2"} size="xl">Agen Pulsa</Text>

            <Input className="mt-4" variant="outline" size="md">
                <InputField
                    onChangeText={setNamaLengkap}
                    placeholder="Nama Lengkap"
                />
            </Input>

            <Input className="mt-4" variant="outline" size="md">
                <InputField
                    onChangeText={setUsername}
                    placeholder="Username"
                />
            </Input>

            <Input className="mt-4" variant="outline" size="md">
                <InputField
                    onChangeText={setEmail}
                    placeholder="Email"
                />
            </Input>

            <Input className="mt-4" variant="outline" size="md">
                <InputField
                    onChangeText={setNoHp}
                    placeholder="Nomor HP"
                />
            </Input>

            <Input className="mt-4" variant="outline" size="md">
                <InputField
                    onChangeText={setPassword}
                    placeholder="Password"
                    type="password"
                />
            </Input>

            <Input className="mt-4" variant="outline" size="md">
                <InputField
                    onChangeText={setUlangiPassword}
                    placeholder="Ulangi Password"
                    type="password"
                />
            </Input>

            {/* Checkbox Kebijakan Privasi */}
            <div className="mt-4 flex items-start">
                <input
                    type="checkbox"
                    className="mt-1 mr-2"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                />
                <label className="text-sm text-gray-700">
                    Saya menyetujui <span className="font-semibold underline cursor-pointer">Kebijakan Privasi</span> aplikasi ini.
                </label>
            </div>

            <Button onPress={handleRegister} className="mt-6" size="md" variant="solid" action="primary">
                <ButtonText>Daftar Sekarang</ButtonText>
            </Button>
        </Center>
    );
}
