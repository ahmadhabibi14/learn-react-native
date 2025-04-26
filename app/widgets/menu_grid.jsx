import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Icon } from "@/components/ui/icon";
import {
  BarChart, Globe, Phone, Droplet, Zap, CreditCard, CircleEllipsis, Gamepad2
} from "lucide-react-native";
import { VStack } from "@/components/ui/vstack";
import { useRouter } from "expo-router";

const menuItems = [
  { icon: BarChart, title: "Pulse", route: "/pulse" },
  { icon: Globe, title: "Internet", route: "/internet" },
  { icon: Phone, title: "Phone", route: "/phone" },
  { icon: Droplet, title: "Water", route: "/water" },
  { icon: Zap, title: "Electricity", route: "/electricity" },
  { icon: CreditCard, title: "Insurance", route: "/insurance" },
  { icon: Gamepad2, title: "Game", route: "/game" },
  { icon: CircleEllipsis, title: "More", route: "/more" },
];

const MenuGrid = () => {
  const router = useRouter();

  return (
    <VStack style={styles.container}>
      {menuItems.map((item, index) => (
        <Pressable key={index} onPress={() => router.push(item.route)} style={styles.menuItem}>
          <VStack style={styles.iconContainer}>
            <Icon as={item.icon} strokeWidth={2} stroke="#125297" style={styles.icon} />
          </VStack>
          <Text style={styles.text}>{item.title}</Text>
        </Pressable>
      ))}
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingVertical: 20,
  },
  menuItem: {
    width: "25%",
    alignItems: "center",
    marginBottom: 20,
  },
  iconContainer: {
    height: 55,
    width: 55,
    backgroundColor: "#F7F7F7",
    borderRadius: 120,
    padding: 10,
    margin: 10,
    alignItems: "center",
  },
  icon: {
    width: 32,
    height: 32,
    marginBottom: 8,
  },
  text: {
    fontSize: 12,
    fontWeight: "500",
  },
});

export default MenuGrid;
