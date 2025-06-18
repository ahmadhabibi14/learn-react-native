import { Text } from "@/components/ui/text";
import { Icon } from "@/components/ui/icon";
import { Bell } from "lucide-react-native";
import { CalendarDays } from "lucide-react-native";
import { Check } from "lucide-react-native";
import { HStack } from "@/components/ui/hstack";
import { Grid, GridItem } from "@/components/ui/grid";

export default function Tab2() {
  return (
    <div className="bg-black min-h-screen py-5">
      <center>
        <HStack className="justify-between items-center mt-5 mx-5">
          <Text style={{ fontSize: 30, color: "white" }}>History</Text>;
          <Icon as={Bell} size="md" color="white" />
        </HStack>
        <br></br>
        <div className="flex justify-center">
          <Grid
            className="gap-4"
            _extra={{
              className: "grid-cols-9",
            }}
          >
            <GridItem
              className="bg-background-50 p-3 rounded-md text-center"
              _extra={{
                className: "col-span-4",
              }}
            >
              <HStack>
                <Icon as={CalendarDays} size="md" />
                <br></br>
                <Text> From</Text>
              </HStack>
              <Text>09- Mei - 2025</Text>
            </GridItem>
            <GridItem
              className="bg-background-50 p-3 rounded-md text-center"
              _extra={{
                className: "col-span-4",
              }}
            >
              <HStack>
                <Icon as={CalendarDays} size="md" />
                <Text> To</Text>
              </HStack>
              <Text>09 -Juni - 2025</Text>
            </GridItem>
          </Grid>
        </div>
        <br></br>

        <div>
          <Grid
            className="gap-4"
            _extra={{
              className: "grid-cols-9",
            }}
          >
            <GridItem
              className="bg-background-50 p-3 rounded-md text-center"
              _extra={{
                className: "col-span-3",
              }}
            >
              <HStack>
                <Icon as={Check} size="md" />
                <Text> jscncns</Text>
              </HStack>
            </GridItem>
            <GridItem
              className="bg-background-50 p-3 rounded-md text-center"
              _extra={{
                className: "col-span-3",
              }}
            >
              <Text>B</Text>
            </GridItem>
            <GridItem
              className="bg-background-50 p-3 rounded-md text-center"
              _extra={{
                className: "col-span-3",
              }}
            >
              <Text>C</Text>
            </GridItem>
          </Grid>
        </div>
        <br></br>

        <div>
          <div className="w-full bg-white p-6 rounded text-center min-h-screen">
            <HStack>
              <Text>09- Mei - 2025</Text>
              <br></br>
            </HStack>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white-200 p-4 rounded">
                <Icon as={Check} size="xl" color="green" />
              </div>
              <div className="bg-white-200 p-4 rounded">
                <Text style={{ fontWeight: "bold" }} size="xl">
                  SN01-087824497706 {"\n"}
                </Text>
                10:00 PM . 09-Mei-2025
              </div>
              <div className="bg-white-200 p-4 rounded">
                <Text style={{ fontWeight: "bold" }} size="xl">
                  -IDR100.000
                </Text>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white-200 p-4 rounded">
                <Icon as={Check} size="xl" color="green" />
              </div>
              <div className="bg-white-200 p-4 rounded">
                <Text style={{ fontWeight: "bold" }} size="xl">
                  SN02-087824497706 {"\n"}
                </Text>
                13:00 PM . 15-Mei-2025
              </div>
              <div className="bg-white-200 p-4 rounded">
                <Text style={{ fontWeight: "bold" }} size="xl">
                  -IDR150.000
                </Text>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white-200 p-4 rounded">
                <Icon as={Check} size="xl" color="green" />
              </div>
              <div className="bg-white-200 p-4 rounded">
                <Text style={{ fontWeight: "bold" }} size="xl">
                  SN03-087824497706 {"\n"}
                </Text>
                07:00 PM . 27-Mei-2025
              </div>
              <div className="bg-white-200 p-4 rounded">
                <Text style={{ fontWeight: "bold" }} size="xl">
                  -IDR70.000
                </Text>
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}
