// constants/moods.js
export const mood = [
  { id: 'happy', emoji: '🥰', label: 'Happy', color: '#6666ff' },
  {id: 'flirt', emoji : '😏', label : 'Flirt',color :'#ff0066'},
  { id: 'angry', emoji: '😠', label: 'Angry', color: '#993366' },
  { id: 'anxious', emoji: '😰', label: 'Anxious', color: '#0099e6' },
  { id: 'sad', emoji: '😔', label: 'Sad', color: '#e6b800' },
  
 
 
];

export const MoodConfig = {
  happy: {
    emoji: '🥰',
    color: '#6666ff',
    prompt: 'Help me start the conversation in Happy and jolly mood :)'
  },
  flirt: {
    emoji: '😏',
    color: '#ff0066',
    prompt: 'Let me play and vibe along with my flirty mood ;)'
  },
  angry: {
    emoji: '😠',
    color: '#993366',
    prompt: 'Anger here. Please Help in handling the situation!!!'
  },
  
  anxious: {
    emoji: '😰',
    color: '#0099e6',
    prompt: 'Panic here. Please help me to get out of this situation ;('
  },
 
  sad: {
    emoji: '😢',
    color: '#e6b800',
    prompt: 'Please help to uplift the conversation here :('
  },
 
 
};

export type MoodType = keyof typeof MoodConfig;