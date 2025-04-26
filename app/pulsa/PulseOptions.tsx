import { Grid, GridItem } from "@/components/ui/grid";
import { Text } from "@/components/ui/text";

const PulseOptions = (): React.JSX.Element => {
  return (
    <Grid className="gap-5" _extra={{
      className: "col-span-3",
    }}>
      <GridItem className="bg-background-50 p-6 rounded-md"
        _extra={{
          className: "col-span-5",
        }}>
        <Text>15000</Text>
      </GridItem>
    </Grid>
  );
}

export default PulseOptions;