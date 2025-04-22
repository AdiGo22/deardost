// components/MoodCard.js
import { Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const MoodCard = ({ id, color, emoji, label }:any) => {
  return (
    <Link href={`/moods/${id}`} asChild>
      <TouchableOpacity
        className={`w-full rounded-3xl p-6 mb-4 shadow-xl transition-transform transform hover:scale-105 `}
        style={{
          backgroundColor: color,
          borderRadius: 20,
          shadowColor: color,
          elevation: 5,
          padding: 16, 
        }}
      >
        <Text className="text-3xl mb-2">{emoji}</Text>
        <Text className="text-xl font-semibold text-white">{label}</Text>
      </TouchableOpacity>
    </Link>
  );
};

export default MoodCard;
