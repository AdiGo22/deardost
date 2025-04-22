import { icons } from "@/constants/icons";
import { ScrollView, Image, Text, View, ActivityIndicator } from "react-native";
import { mood } from "@/constants/mood";
import MoodCard from "@/components/MoodCard";
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import {useState,useEffect} from 'react';
const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient
      colors={['#4c1d95', '#2e1065']}
      className="flex-1"
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      {/* Floating Background Elements */}
      <Animated.View 
        entering={FadeIn.delay(200)}
        className="absolute w-72 h-72 rounded-full opacity-10"
        style={{ 
          backgroundColor: '#7c3aed',
          transform: [{ scale: 1.8 }],
          top: -50,
          right: -50
        }}
      />

      <ScrollView 
        className="flex-1 px-6"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 30,
          paddingTop: 80
        }}
      >
        {/* Logo with Loading State */}
        <Animated.View 
          entering={FadeInDown.duration(800)}
          className="items-center mb-8"
        >
          <View className="relative">
            <Image 
              source={icons.logo}
              className="w-16 h-16"
              resizeMode="contain"
            />
            {isLoading && (
              <ActivityIndicator 
                size="small" 
                color="#a78bfa" 
                className="absolute -bottom-6"
              />
            )}
          </View>
        </Animated.View>

        {/* Header Text */}
        <Animated.View entering={FadeInDown.duration(800).delay(200)}>
          <Text className="text-4xl font-bold text-center text-white mb-2">DearDost</Text>
          <Text className="text-lg text-center text-purple-200 mb-8">
            Let me help you to start your conversations!
          </Text>
        </Animated.View>

        {/* Mood Selection Section */}
        <Animated.View 
          entering={FadeInDown.duration(800).delay(400)}
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 mb-8"
          style={{
            borderWidth: 1,
            borderColor: '#ffffff15'
          }}
        >
          <Text className="text-xl font-bold text-white mb-4">
            So, How is the mood ?
          </Text>
          
          <View className="flex-row flex-wrap justify-between mb-16">
            {mood.map((moodItem) => (
              <MoodCard
                key={moodItem.id} 
                {...moodItem}      
              />
            ))}
          </View>
        </Animated.View>

      </ScrollView>

      {/* Decorative Bottom Gradient */}
      <LinearGradient
        colors={['transparent', 'rgba(124, 58, 237, 0.2)']}
        className="absolute bottom-0 w-full h-32"
      />
    </LinearGradient>
  );
};

export default Index;