import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Pressable,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
// import styles from "../../styles/welcome.style";
import { icons, SIZES } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const jobTypes = [
  "Full-time",
  "Part-time",
  "Freelance",
  "Internship",
  "Temporary",
  "Contract",
  "Commission",
  "Volunteer",
];

const SearchPage = ({
  icon,
  placeholder,
  searchTerm,
  setSearchTerm,
  handleClick,
}) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-time");
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => navigation.openDrawer()}>
          <FontAwesome name={"user-plus"} size={20} color="#f96163" />
        </Pressable>
      ),
    });
  }, []);
  //   return (
  //     <View>
  //       <View style={styles.searchContainer}>
  //         <View
  //           style={
  //             styles.searchWrapper
  //             // 	  {
  //             //     backgroundColor: "#fff",
  //             //     flexDirection: "row",
  //             //     paddingVertical: 16,
  //             //     borderRadius: 8,
  //             //     paddingHorizontal: 16,
  //             //     marginVertical: 16,
  //             //     shadowColor: "#000",
  //             //     shadowOffset: { width: 0, height: 4 },
  //             //     shadowOpacity: 0.1,
  //             //     shadowRadius: 7,
  //             //   }
  //           }
  //         >
  //           <TextInput
  //             value={searchTerm}
  //             onChangeText={(text) => setSearchTerm(text)}
  //             style={
  //               styles.searchInput
  //               // { paddingLeft: 8, fontSize: 16, color: "#808080" }
  //             }
  //             placeholder={placeholder}
  //           ></TextInput>
  //         </View>
  //         <TouchableOpacity onPress={handleClick}>
  //           <FontAwesome name={icon} size={20} color="#f96163" />
  //         </TouchableOpacity>
  //       </View>
  //       <View style={styles.tabsContainer}>
  //         <FlatList
  //           data={jobTypes}
  //           renderItem={({ item }) => (
  //             <TouchableOpacity
  //               style={styles.tab(activeJobType, item)}
  //               onPress={() => {
  //                 setActiveJobType(item);
  //                 router.push(`/search/${item}`);
  //               }}
  //             >
  //               <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
  //             </TouchableOpacity>
  //           )}
  //           keyExtractor={(item) => item}
  //           contentContainerStyle={{ columnGap: SIZES.small }}
  //           horizontal
  //         />
  //       </View>
  //     </View>
  //   );
  // };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={tweets.slice(0, 30)}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={({ item }) => {
          return <Tweet tweet={item} />;
        }}
        // ListHeaderComponent={() => (
        //   <View style={styles.header}>
        //     <Text style={styles.headerTitle}>New tweets available</Text>
        //   </View>
        // )}
        ListHeaderComponentStyle={{ backgroundColor: "#ccc" }}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
      />
    </SafeAreaView>
  );
};
export default SearchPage;

const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#DDD",
  },
  header: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1DA1F2",
  },
  footer: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: "#FFFFFF",
    padding: 8,
    borderRadius: 12,
    fontSize: 12,
  },
  footerTitle: {
    padding: 8,
    borderRadius: 12,
    fontSize: 12,
  },
  emptyComponentTitle: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  emptyComponentSubtitle: {
    color: "#808080",
    padding: 8,
    fontSize: 14,
    textAlign: "center",
  },
  emptyComponent: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

// const styles = StyleSheet.create({});
