import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { View, ScrollView, SafeAreaView } from "react-native";

import {COLORS, icons, images, SIZES} from '../constants';
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components';

const Home = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");
    return (
        //SafeAreaView allows u to show content safly without any hatches or buttons or home buttons appearing over it
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            {/*The Stack Layout in Expo Router wraps the Native Stack Navigator from React Navigation, not to be confused with the legacy JS Stack Navigator.
                tstacki l pages fog b3adh'hom kif bsh tet3ada min page l page
            */}
            
            <Stack.Screen 
            options={{
                headerStyle: {backgroundColor: COLORS.lightWhite},
                headerShadowVisible: false,
                headerLeft : () => (
                    <ScreenHeaderBtn iconUrl = {icons.menu} dimension= "60%" />
                ),
                headerRight : () => (
                    <ScreenHeaderBtn iconUrl = {images.profile} dimension= "100%" />
                ),
                //to avoid showing "index" in the center
                headerTitle : ""
            }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View 
                    style ={{
                        flex:1, 
                        padding: SIZES.medium
                    }}>
                        <Welcome
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                            handleClick={() => {
                            if (searchTerm) {
                            router.push(`/search/${searchTerm}`)
                            }
                          }}
                         />
                        <Popularjobs/>
                        <Nearbyjobs/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
} 

export default Home;