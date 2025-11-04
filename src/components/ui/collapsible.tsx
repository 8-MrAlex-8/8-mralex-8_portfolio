import { Collapsible, Stack } from "@chakra-ui/react"
import { LuChevronRight } from "react-icons/lu"

const Demo = () => (
  <Collapsible.Root defaultOpen>
    <Collapsible.Trigger
      paddingY="3"
      display="flex"
      gap="2"
      alignItems="center"
    >
      <Collapsible.Indicator
        transition="transform 0.2s"
        _open={{ transform: "rotate(90deg)" }}
      >
        <LuChevronRight />
      </Collapsible.Indicator>
      Toggle
    </Collapsible.Trigger>
    <Collapsible.Content>
      <Stack padding="4" borderWidth="1px">
        Loren ipsum...
      </Stack>
    </Collapsible.Content>
  </Collapsible.Root>
)

export default Demo