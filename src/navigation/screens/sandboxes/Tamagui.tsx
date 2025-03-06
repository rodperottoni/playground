import { Text } from "@react-navigation/elements";
import { StyleSheet } from "react-native";
import {
  Button,
  Card,
  H1,
  H2,
  H3,
  H4,
  Input,
  Label,
  ScrollView,
  Sheet,
  XStack,
  YStack,
} from "tamagui";
import { useState } from "react";

export function Tamagui() {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState(0);

  return (
    <ScrollView style={styles.container}>
      <YStack space="$4" padding="$4">
        <H3>Tamagui Examples</H3>

        {/* Basic Components */}
        <Card elevate size="$5" bordered>
          <Card.Header padded>
            <H4>Basic Components</H4>
            <YStack gap="$4">
              <Button>Default Button</Button>
              <Button>Active Button</Button>
              <Button>Red Button</Button>
            </YStack>
          </Card.Header>
        </Card>

        {/* Form Elements */}
        <Card elevate bordered>
          <Card.Header>
            <H1>Form Elements</H1>
            <YStack>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </YStack>
          </Card.Header>
        </Card>

        {/* Layout Examples */}
        <Card elevate size="$4" bordered>
          <Card.Header padded>
            <H2>Layout Examples</H2>
            <XStack space="$3" flexWrap="wrap">
              <Button size="$3">Small</Button>
              <Button size="$4">Medium</Button>
              <Button size="$5">Large</Button>
            </XStack>
          </Card.Header>
        </Card>

        {/* Sheet Example */}
        <Button onPress={() => setOpen(true)}>Open Sheet</Button>
        {/* <Sheet
          modal
          open={open}
          onOpenChange={setOpen}
          snapPoints={[50]}
          position={position}
          onPositionChange={setPosition}
        >
          <Sheet.Overlay />
          <Sheet.Frame>
            <Sheet.Handle />
            <Sheet.ScrollView>
              <YStack space="$4" padding="$4">
                <H2>Sheet Content</H2>
                <Text>This is a bottom sheet example using Tamagui</Text>
              </YStack>
            </Sheet.ScrollView>
          </Sheet.Frame>
        </Sheet> */}
      </YStack>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
  },
});
