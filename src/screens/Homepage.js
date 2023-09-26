// import {ScrollView } from "react-native";
// import React from "react";
// import CategoriesFilter from "../components/CategoriesFilter";
// import RecipeCard from "../components/RecipeCard";

// const Homepage = () => {
// 	return (
// 		<SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
// 			{/* render header */}
// 			<Header headerText={"Hi, User "} headerIcon={"adduser"} />
// 			{/* deleteuser, adduser, user all antdesign*/}

// 			{/* Search Filter */}
// 			<SearchFilter icon="search" placeholder={"enter your fav recipe"} />

// 			{/* Categories filter */}

// 			<View style={{ marginTop: 22 }}>
// 				<Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
// 				{/* Categories list */}
// 				<CategoriesFilter />
// 			</View>

// 			{/* Recipe List Filter */}

// 			<View style={{ marginTop: 22, flex: 1 }}>
// 				<Text style={{ fontSize: 22, fontWeight: "bold" }}>Recipes</Text>
// 				{/* Recipes list */}

// 				<RecipeCard />
// 			</View>
// 		</SafeAreaView>
// 	);
// };

// export default Homepage;

// const styles = StyleSheet.create({});
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import PopularJobs from "../components/jobs/popular/PopularJobs";
import Header from "../components/Header";
import SearchPage from "../components/SearchPage";

import styles from "../../styles/welcome.style";
import NearbyJobs from "../components/jobs/nearby/NearbyJobs";

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  return (
	  <SafeAreaView style={{ flex: 1, marginHorizontal: 16, marginTop: 80 }}>
		<ScrollView showsVerticalScrollIndicator={false}>
      <Header headerText={"Hi, User "} headerIcon={"user"} />
      {/* user-plus, user-times */}
      {/* <View
      //   style={styles.searchContainer}
      >
        <View
        // style={styles.searchWrapper}
        >
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="What are you looking for?"
          />
        </View>
      </View> */}
      <SearchPage
        icon="search"
        placeholder={"What are you looking for?"}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleClick={() => {
          if (searchTerm) {
            router.push(`/search/${searchTerm}`);
          }
        }}
      />
	  <PopularJobs />
	  <NearbyJobs />
		  
	  </ScrollView>
    </SafeAreaView>
  );
};

export default Homepage;
