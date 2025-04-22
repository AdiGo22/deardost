// app/moods/[id].js
import { useLocalSearchParams } from 'expo-router';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import useFetch from '@/services/useFetch';
import { MoodConfig } from '@/constants/mood';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';

const MoodScreen = () => {
  const { id } = useLocalSearchParams();
  const [isFetching, setIsFetching] = useState(false);
  const { data, error, refetch } = useFetch(id);
  
  const currentMood = MoodConfig[id as keyof typeof MoodConfig];

  const handleGenerateStarter = async () => {
    setIsFetching(true);
    await refetch();
    setIsFetching(false);
  };

  return (
    <LinearGradient
      colors={[currentMood.color + '20', '#ffffff']}
      className="flex-1 px-6 pt-20 items-center"
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      {/* Floating Background Elements */}
      <Animated.View 
        entering={FadeIn.delay(200)}
        className="absolute w-72 h-72 rounded-full opacity-10"
        style={{ 
          backgroundColor: currentMood.color,
          transform: [{ scale: 1.8 }],
          top: -50,
          left: -50
        }}
      />

      {/* Main Content */}
      <View className="w-full items-center z-10">
        {/* Emoji Container */}
        <Animated.View 
          entering={FadeInDown.duration(800)}
          className="w-48 h-48 rounded-[40px] items-center justify-center mb-12 
            border-8 border-white/20 shadow-2xl"
          style={{ 
            backgroundColor: currentMood.color,
            shadowColor: currentMood.color,
          }}
        >
          <Text className="text-8xl">{currentMood.emoji}</Text>
          
          {/* Subtle Texture Overlay */}
          <View className="absolute inset-0 bg-black/5 rounded-[40px]" />
        </Animated.View>

        {/* Action Button */}
        <Animated.View entering={FadeInDown.duration(800).delay(200)} className="w-full">
          <TouchableOpacity
            onPress={handleGenerateStarter}
            disabled={isFetching}
            className={`w-full py-5 rounded-2xl overflow-hidden`}
            activeOpacity={0.9}
          >
            <LinearGradient
              colors={[currentMood.color, currentMood.color + 'DD']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              className="absolute inset-0"
            />
            
            <Text className="text-white text-center text-xl font-bold tracking-wide">
              {isFetching ? 'Crafting Ideas...' : ` Dear Dost, ${currentMood.prompt}`}
            </Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Response Card */}
        <Animated.View 
          entering={FadeInDown.duration(800).delay(400)}
          className="w-full min-h-48 bg-white/95 backdrop-blur-lg rounded-2xl p-6 mt-12 shadow-lg"
          style={{
            shadowColor: currentMood.color,
            borderWidth: 1,
            borderColor: '#ffffff30'
          }}
        >
          {isFetching ? (
            <ActivityIndicator size="large" color={currentMood.color} />
          ) : error ? (
            <View className="flex-row items-center justify-center space-x-2">
              <Text className="text-rose-400 text-lg">⚠️</Text>
              <Text className="text-rose-400 text-center text-lg">
                Please try again later{error.timestamp && ` (${new Date(error.timestamp).toLocaleTimeString()})`}
              </Text>
            </View>
          ) : data ? (
            <Text className="text-slate-700 text-lg leading-7 text-center font-medium">
              {data.split('\n').map((line, i) => (
                <Text key={i} className="block mb-3">✨ {line}</Text>
              ))}
            </Text>
          ) : (
            <Text className="text-slate-400 text-center text-lg">
              Your personalized conversation starters will appear here...
            </Text>
          )}
        </Animated.View>
      </View>

      {/* Decorative Bottom Elements */}
      <View 
        className="absolute bottom-0 w-full h-32" 
        style={{ backgroundColor: currentMood.color + '15' }}
      />
    </LinearGradient>
  );
};

export default MoodScreen;