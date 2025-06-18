import { Grid, GridItem } from "@/components/ui/grid";
import { Text } from "@/components/ui/text";

const DaftarPulsa: {
  harga: string;
  hargaBeli: string;
}[] = [
  {
    harga: '5.000',
    hargaBeli: '6.000'
  },
  {
    harga: '7.000',
    hargaBeli: '8.000'
  },
  {
    harga: '10.000',
    hargaBeli: '11.500'
  },
  {
    harga: '15.000',
    hargaBeli: '17.000'
  },
  {
    harga: '20.000',
    hargaBeli: '27.000'
  },
  {
    harga: '30.000',
    hargaBeli: '31.000'
  }
]

export const options = {
  label: 'Pulsa'
}

const PulseOptions = (): React.JSX.Element => {
  return (
    <Grid className="gap-5" _extra={{
      className: "grid-cols-2",
    }}>
      {DaftarPulsa.map(pul => (
        <GridItem className="bg-neutral-100 border border-neutral-200 p-5 rounded-md flex flex-col gap-1"
        _extra={{
          className: "",
        }}>
        <Text className="text-xl font-bold">IDR {pul.harga}</Text>
        <Text className="text-xs">Harga beli IDR {pul.hargaBeli}</Text>
      </GridItem>
      ))}
    </Grid>
  );
}

export default PulseOptions;