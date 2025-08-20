import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Switch,
  TouchableOpacity,
  FlatList,
} from "react-native";
import styles from "./ProfileScreen.styles";

const user = {
  name: "Varun Mehta",
  image: "https://i.pravatar.cc/150?img=3", // Replace with actual user image
};

const options = [
  { key: "language", label: "Change Language" },
  { key: "theme", label: "Change Theme" },
  { key: "region", label: "Change Region" },
];

const ProfileScreen = () => {
  const [pushEnabled, setPushEnabled] = useState(false);

  const renderHeader = () => (
    <View style={styles.header}>
      <Image source={{ uri: user.image }} style={styles.avatar} />
      <Text style={styles.name}>{user.name}</Text>
    </View>
  );

  const renderItem = ({ item }: { item: (typeof options)[0] }) => {
    if (item.key === "push") {
      return (
        <View style={styles.listItem}>
          <Text style={styles.label}>Push Notifications</Text>
          <Switch
            value={pushEnabled}
            onValueChange={setPushEnabled}
            trackColor={{ false: "#ccc", true: "#4caf50" }}
          />
        </View>
      );
    }
    return (
      <TouchableOpacity style={styles.listItem}>
        <Text style={styles.label}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  const renderFooter = () => (
    <TouchableOpacity style={styles.signOut}>
      <Text style={styles.signOutText}>Sign Out</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={renderHeader}
        data={[...options, { key: "push", label: "Push Notifications" }]}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        ListFooterComponent={renderFooter}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default ProfileScreen;
